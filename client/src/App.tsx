import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router';

import { store } from '@/store';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

import '@/styles/App.scss';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <Provider store={store}>
      <div id="app" data-testid="app" className={isSidebarCollapsed ? 'close' : ''}>
        <Navigation />
        <Header toggleSidebar={toggleSidebar} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
