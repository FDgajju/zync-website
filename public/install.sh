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

echo -e "${BLUE}⚡ Installing ${APP_NAME} (AppImage)...${NC}"

# 1. Detect Architecture
ARCH=$(uname -m)
if [ "$ARCH" = "x86_64" ]; then
    echo "   Detected Architecture: x64"
elif [ "$ARCH" = "aarch64" ]; then
    echo "ARM64 builds are coming soon!"
    exit 1
else
    echo "Unsupported architecture: $ARCH"
    exit 1
fi

# 2. Find Latest AppImage Release from GitHub Releases
echo "   Fetching latest release from GitHub..."
# Look for line containing browser_download_url and .AppImage
LATEST_URL=$(curl -s "https://api.github.com/repos/$REPO/releases/latest" | grep "browser_download_url.*\.AppImage\"" | cut -d '"' -f 4 | head -n 1)

if [ -z "$LATEST_URL" ]; then
    echo "   Error: Could not find .AppImage in latest release"
    echo "   Please ensure a GitHub Release exists with an AppImage asset."
    exit 1
fi

echo "   Downloading from: $LATEST_URL"

# 3. Prepare Directories
mkdir -p "$BIN_DIR"
mkdir -p "$DESKTOP_DIR"
mkdir -p "$APP_DIR"

# 4. Download AppImage
APPIMAGE_PATH="$APP_DIR/Zync.AppImage"
curl -L "$LATEST_URL" -o "$APPIMAGE_PATH"

# 5. Make Executable
chmod +x "$APPIMAGE_PATH"
echo "   Made executable: $APPIMAGE_PATH"

# 6. Create Symlink
ln -sf "$APPIMAGE_PATH" "$BIN_DIR/zync"

# 7. Extract Icon (Optional but nice for desktop entry)
# AppImages can be mounted or extracted, but for simplicity we rely on a bundled icon if possible.
# Actually, AppImages often have the icon embedded. 
# We'll try to download the icon separately from the repo if not present, OR just use a generic system icon.
# For now, let's assume the icon is available at a static URL or we just skip it (Desktop Entry usually needs path).
# Workaround: GitHub raw content for icon
ICON_URL="https://raw.githubusercontent.com/FDgajju/zync/main/app/public/icon.png"
ICON_PATH="$APP_DIR/icon.png"
curl -s -L "$ICON_URL" -o "$ICON_PATH" || echo "   Warning: Could not fetch icon."


# 8. Create Desktop Entry
cat > "$DESKTOP_DIR/$APP_NAME.desktop" <<EOF
[Desktop Entry]
Name=$APP_NAME
Exec=$APPIMAGE_PATH --no-sandbox %U
Icon=$ICON_PATH
Type=Application
Categories=Development;Utility;
Terminal=false
StartupWMClass=Zync
EOF

# 9. Integrate with System
# Update desktop database if tool exists
if command -v update-desktop-database >/dev/null 2>&1; then
    update-desktop-database "$DESKTOP_DIR"
fi

echo -e "${GREEN}✔ Successfully installed $APP_NAME${NC}"
echo -e "   Location: $APPIMAGE_PATH"
echo -e "   Symlink:  $BIN_DIR/zync"
echo -e "   You can now run: ${GREEN}zync${NC}"
