import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Theme from '@/components/Theme';
import Toggle from '@/components/Toggle';
import { Outlet } from 'react-router';
import '@/styles/App.scss';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  useEffect(() => {
    console.log('Hello World!', 'Life is like a box of chocolates.');
  }, []);

  return (
    <Provider store={store}>
      <div id="app" data-testid="app" className={isSidebarCollapsed ? 'close' : ''}>
        <nav id="nav" data-testid="nav">
          <h1>Chart</h1>
        </nav>
        <header>
          <Toggle onToggleSidebar={toggleSidebar} />
          <Theme />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    </Provider>
  );
};

export default App;
