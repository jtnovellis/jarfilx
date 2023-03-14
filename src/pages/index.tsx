import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section>
      <h1 className='font-bold text-3xl'>Home</h1>
    </section>
  )
}
