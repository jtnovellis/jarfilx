import Footer from '@/components/Footer';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import Image from 'next/image';
import { useState } from 'react';

export default function Authentication() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleShowSignIn = () => {
    setShowSignIn(prev => !prev);
  };

  return (
    <section className='h-full w-full relative md:bg-[url("/images/hero.jpg")] md:bg-no-repeat md:bg-fixed md:bg-cover md:bg-center'>
      <div className='bg-black w-full h-full md:bg-opacity-50'>
        <header className='px-3 py-5 sm:px-5 sm:py-7'>
          <Image
            src='/images/logo.png'
            width={75}
            height={15}
            alt='jarflix logo'
            className='sm:w-32 md:w-40'
          />
        </header>
        <main className='md:grid md:place-content-center'>
          {showSignIn ? (
            <SignIn handleShowSignIn={handleShowSignIn} />
          ) : (
            <SignUp handleShowSignIn={handleShowSignIn} />
          )}
        </main>
        <Footer />
      </div>
    </section>
  );
}
