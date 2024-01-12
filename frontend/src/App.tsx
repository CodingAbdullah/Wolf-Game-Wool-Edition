import { FC } from 'react';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './Components/HomePage/HomePage.css';
import './Components/Footer/Footer.css';
import './Components/Navbar/Navbar.css';
import './Components/WoolTokenPriceLabel/WoolTokenPriceLabel';
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
          </Routes>
        </Router>
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;