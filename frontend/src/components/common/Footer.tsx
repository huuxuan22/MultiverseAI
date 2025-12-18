import React from 'react';

function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-900/80">
            <div className="container mx-auto px-4 py-3 text-xs text-slate-400 flex justify-between">
                <span>© {new Date().getFullYear()} Multiverse</span>
                <span>Built with React & Tailwind</span>
            </div>
        </footer>
    );
}

export default Footer;


