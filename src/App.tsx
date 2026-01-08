import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { ThemeShowcase } from './components/ThemeShowcase';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DownloadPage } from './pages/DownloadPage';

import { ScrollToAnchor } from './components/ScrollToAnchor';

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="min-h-screen bg-bg text-text selection:bg-white/20 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeatureGrid />
                <ThemeShowcase />
                <FAQ />
              </>
            } />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
