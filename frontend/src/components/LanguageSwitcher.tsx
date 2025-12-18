import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageCode } from '../constants';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: LanguageCode) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="fixed top-5 right-5 z-50 flex gap-2">
            <button
                onClick={() => changeLanguage(LanguageCode.ENGLISH)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${i18n.language === LanguageCode.ENGLISH
                    ? 'bg-sky-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage(LanguageCode.VIETNAMESE)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${i18n.language === LanguageCode.VIETNAMESE
                    ? 'bg-sky-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
            >
                VI
            </button>
        </div>
    );
};

export default LanguageSwitcher;

