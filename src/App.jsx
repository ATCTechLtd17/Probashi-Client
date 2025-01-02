import React from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <LanguageProvider>
    
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
          <Outlet/>
          </main>
          <Footer />
        </div>
   
    </LanguageProvider>
  );
}

export default App;