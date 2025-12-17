import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
            display: 'flex',
            gap: '10px'
        }}>
            <button
                onClick={() => changeLanguage('en')}
                style={{
                    padding: '8px 16px',
                    backgroundColor: i18n.language === 'en' ? '#007bff' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('vi')}
                style={{
                    padding: '8px 16px',
                    backgroundColor: i18n.language === 'vi' ? '#007bff' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
                VI
            </button>
        </div>
    );
};

export default LanguageSwitcher;

