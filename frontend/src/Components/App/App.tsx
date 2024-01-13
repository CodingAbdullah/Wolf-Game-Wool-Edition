import { FC } from 'react';
import HomePage from '../HomePage/HomePage';
import FarmerPricePage from '../FarmerPricePage/FarmerPricePage';
import LandPricePage from '../LandPricePage/LandPricePage';
import LinksPage from '../LinksPage/LinksPage';
import WolfSheepPricePage from '../WolfSheepPricePage/WolfSheepPricePage';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../WoolTokenPriceLabel/WoolTokenPriceLabel';
import '../HomePage/HomePage.css';
import '../Footer/Footer.css';
import '../Navbar/Navbar.css';
import '../LinksPage/Links.css';
import './App.css';

// Root level component of the application
// Create query client and pass it into the query client provider
const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={ queryClient }>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/farmers" element={<FarmerPricePage />}></Route>
            <Route path="/land" element={<LandPricePage />}></Route>
            <Route path="/links" element={<LinksPage />}></Route>
            <Route path="/wolves-sheep" element={<WolfSheepPricePage />}></Route>
          </Routes>
        </Router>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;