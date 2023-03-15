import { useRef } from 'react';
import { AuthInput } from '@/components/AuthInput';

interface SignInProps {
  handleShowSignIn: () => void;
}

export default function SignIn({ handleShowSignIn }: SignInProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const remember = checkRef.current?.checked;
    alert(`Email: ${email}, Password: ${password}, Remmember: ${remember}`);
  };

  return (
    <section className='grid grid-cols-1 px-5 py-2 sm:px-7 sm:py-7 md:bg-black/70 md:rounded md:max-w-md md:px-16 md:py-12'>
      <h1 className='text-3xl font-bold'>Sign In</h1>
      <form className='mt-8' onSubmit={handleSubmit}>
        <AuthInput type='email' placeholder='Email' ref={emailRef} />
        <AuthInput type='password' placeholder='Password' ref={passwordRef} />
        <button
          className='bg-red-600 w-full rounded-md py-4 mt-6'
          type='submit'
        >
          Sign In
        </button>
        <div className='flex items-center justify-between mt-3 text-gray-400 text-xs '>
          <div className='flex items-center gap-1'>
            <input
              type='checkbox'
              name='remember'
              id='remember'
              ref={checkRef}
            />
            <label htmlFor='remember'>Remember me</label>
          </div>
          <a className='hover:underline' href='#'>
            Need help?
          </a>
        </div>
        <div>
          <p className='mt-6 text-gray-400'>
            New to Jarflix?{' '}
            <button
              type='button'
              className='hover:underline text-white'
              onClick={handleShowSignIn}
            >
              Sign up now.
            </button>
          </p>
          <p className='mt-5 text-gray-400 text-sm'>
            {`This page is protected by Google reCAPTCHA to ensure you're not a bot. `}
            <a href='#' className='text-blue-500 hover:underline'>
              Learn more.
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
