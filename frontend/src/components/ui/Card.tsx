import React from 'react';

type CardProps = {
    // Children are effectively required in our usage, but marked optional
    // to satisfy JSX type checking when used as <Card>...</Card>.
    children?: React.ReactNode;
    className?: string;
};

function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm ${className}`}>
            {children}
        </div>
    );
}

export default Card;


