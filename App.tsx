
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import AuthPage from './components/auth/AuthPage';
import MainLayout from './components/layout/MainLayout';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const navigate = (page: Page) => {
    if (page === 'dashboard' && !isLoggedIn) {
        setIsLoggedIn(true);
    }
    setCurrentPage(page);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  if (!isLoggedIn) {
    return <AuthPage initialPage={currentPage} navigate={navigate} />;
  }

  return <MainLayout currentPage={currentPage} navigate={navigate} onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />;
};

export default App;
