import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageSwitcher />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('COMMON.EDIT')} <code>src/App.js</code> {t('COMMON.SAVE')}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('COMMON.LEARN')}
        </a>
      </header>
    </div>
  );
}

export default App;
