import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

// eslint-disable-next-line react/display-name
export const AuthInput = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`py-3 px-2 mb-5 bg-zinc-800 outline-none rounded-md w-full ${className}`}
      ref={ref}
      {...rest}
    />
  );
});
