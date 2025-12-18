import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

function Input({ label, className = '', ...rest }: InputProps) {
  return (
    <label className={`flex flex-col gap-1 text-sm text-slate-200 ${className}`}>
      {label && <span className="text-xs font-medium text-slate-300">{label}</span>}
      <input
        className="h-9 rounded-md border border-slate-700 bg-slate-900 px-3 text-sm text-slate-50 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        {...rest}
      />
    </label>
  );
}

export default Input;


