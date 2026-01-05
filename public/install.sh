#!/bin/bash

# Zync Install Script
# Usage: curl -f https://raw.githubusercontent.com/FDgajju/zync/main/website/public/install.sh | sh

set -e

REPO="FDgajju/zync"
APP_NAME="Zync"
BIN_DIR="$HOME/.local/bin"
APP_DIR="$HOME/.local/share/zync"
DESKTOP_DIR="$HOME/.local/share/applications"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}⚡ Installing ${APP_NAME}...${NC}"

# 1. Detect Architecture
ARCH=$(uname -m)
if [ "$ARCH" = "x86_64" ]; then
    FILE_SUFFIX=".tar.gz"
elif [ "$ARCH" = "aarch64" ]; then
    echo "ARM64 builds are coming soon!"
    exit 1
else
    echo "Unsupported architecture: $ARCH"
    exit 1
fi

# 2. Find Latest Release from GitHub Releases
echo "   Fetching latest release from GitHub..."
LATEST_URL=$(curl -s "https://api.github.com/repos/$REPO/releases/latest" | grep "browser_download_url.*\.tar\.gz" | cut -d '"' -f 4 | head -n 1)

if [ -z "$LATEST_URL" ]; then
    echo "   Error: Could not find .tar.gz in latest release"
    echo "   Please create a GitHub Release and upload the tarball as an asset"
    exit 1
fi

echo "   Downloading from: $LATEST_URL"

# 3. Prepare Directories
mkdir -p "$BIN_DIR"
mkdir -p "$DESKTOP_DIR"
rm -rf "$APP_DIR" # Clean previous install
mkdir -p "$APP_DIR"

# 4. Download & Extract
# We strip components to avoid 3 levels of nesting if electron-builder wraps it
curl -L "$LATEST_URL" | tar -xz -C "$APP_DIR" --strip-components=1 2>/dev/null || curl -L "$LATEST_URL" | tar -xz -C "$APP_DIR"
# Fallback: if strip fails (no root folder), plain extract works.

# 5. Find Executable
# Search for 'zync' or 'ssh-ui' binary
EXECUTABLE=$(find "$APP_DIR" -type f -executable \( -name "zync" -o -name "ssh-ui" \) | head -n 1)

if [ -z "$EXECUTABLE" ]; then
    echo "   Error: Could not find executable 'zync' or 'ssh-ui' in extracted files."
    exit 1
fi

echo "   Found executable: $EXECUTABLE"

# 6. Create Symlink
ln -sf "$EXECUTABLE" "$BIN_DIR/zync"

# 7. Setup Icon
# Icon is bundled in resources/ folder via extraResources
ICON_PATH="$APP_DIR/resources/icon.png"
if [ ! -f "$ICON_PATH" ]; then
    # Fallback search if location changes
    ICON_PATH=$(find "$APP_DIR" -name "icon.png" | head -n 1)
fi
if [ -z "$ICON_PATH" ] || [ ! -f "$ICON_PATH" ]; then
    # Last resort: use generic icon name
    ICON_PATH="zync"
fi

# 8. Create Desktop Entry
cat > "$DESKTOP_DIR/$APP_NAME.desktop" <<EOF
[Desktop Entry]
Name=$APP_NAME
Exec=$BIN_DIR/zync --no-sandbox %U
Icon=$ICON_PATH
Type=Application
Categories=Development;Utility;
Terminal=false
StartupWMClass=Zync
EOF

echo -e "${GREEN}✔ Successfully installed $APP_NAME${NC}"
echo -e "   Location: $APP_DIR"
echo -e "   Binary:   $BIN_DIR/zync"
echo -e "   You can now run: ${GREEN}zync${NC}"
