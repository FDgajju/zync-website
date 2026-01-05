import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { ThemeShowcase } from './components/ThemeShowcase';
import { Footer } from './components/Footer';
import { DownloadPage } from './pages/DownloadPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-text selection:bg-accent/30 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeatureGrid />
                <ThemeShowcase />
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
