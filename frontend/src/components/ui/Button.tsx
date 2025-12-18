import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

function Button({ to, children, className = '', variant = 'primary', ...rest }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none';

  const variants: Record<string, string> = {
    primary: 'bg-sky-500 hover:bg-sky-400 text-white px-4 py-2',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-50 px-4 py-2',
    ghost: 'bg-transparent hover:bg-slate-800 text-slate-100 px-3 py-2',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;


