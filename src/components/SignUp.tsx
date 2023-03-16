import { useRef } from 'react';
import { AuthInput } from '@/components/AuthInput';

interface SignUpProps {
  handleShowSignIn: () => void;
}

export default function SignUp({ handleShowSignIn }: SignUpProps) {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const remember = checkRef.current?.checked;
    alert(
      `Email: ${email}, Password: ${password}, Remmember: ${remember} Username: ${username}`,
    );
  };

  return (
    <section className='grid grid-cols-1 px-5 py-2 sm:px-7 sm:py-7 md:bg-black/70 md:rounded md:max-w-md md:px-16 md:py-12'>
      <h1 className='text-3xl font-bold'>Sign Up</h1>
      <form className='mt-8' onSubmit={handleSubmit}>
        <AuthInput type='text' placeholder='Username' ref={usernameRef} />
        <AuthInput type='email' placeholder='Email' ref={emailRef} />
        <AuthInput type='password' placeholder='Password' ref={passwordRef} />
        <button
          className='bg-red-600 w-full rounded-md py-4 mt-6'
          type='submit'
        >
          Sign Up
        </button>
        <div className='flex items-center justify-end mt-3 text-gray-400 text-xs '>
          <a className='hover:underline' href='#'>
            Need help?
          </a>
        </div>
        <div>
          <p className='mt-6 text-gray-400'>
            Already have an account?{' '}
            <button
              type='button'
              className='hover:underline text-white'
              onClick={handleShowSignIn}
            >
              Sign In now.
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
