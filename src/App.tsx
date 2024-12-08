import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import VerifyOTPPage from './pages/VerifyOTPPage';
import AppPage from './pages/AppPage';
import LoggedOutPage from './pages/LoggedOutPage';

function LandingPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/verify-otp" element={<VerifyOTPPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/logged-out" element={<LoggedOutPage />} />
      </Routes>
    </Router>
  );
}

export default App;