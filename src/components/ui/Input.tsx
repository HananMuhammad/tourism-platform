import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className = '', ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`px-4 py-2 rounded-lg border border-slate-300 text-slate-800 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${className}`}
        {...rest}
      />
    </div>
  );
}
