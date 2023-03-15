import { footerLinks } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className='border-t border-gray-400 px-5 sm:px-7 py-10 mt-20 md:bg-black/70 md:py-14 md:mt-48'>
      <p className='text-gray-400'>
        Questions? Call
        <a className='hover:underline' href='#'>
          01 800 917 1563
        </a>
      </p>
      <ul className='text-gray-400 grid grid-cols-2 text-sm mt-10 gap-4 sm:grid-cols-3'>
        {footerLinks.map(link => (
          <li key={link.id}>
            <a className='hover:underline' href='#'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
