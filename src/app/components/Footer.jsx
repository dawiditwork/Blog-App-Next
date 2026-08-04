'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { MdClose, MdContentCopy, MdEmail } from 'react-icons/md';

const footerGroups = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/dawiditwork', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dawid-f-978307425/', external: true },
      { label: 'Portfolio', href: 'https://dawidfrankowicz.com', external: true },
      { label: 'Email', href: 'mailto:dawiditwork@gmail.com', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
];

export default function FooterCom() {
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'dawiditwork@gmail.com';

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setShowContact(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
    <footer className='border-t border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200'>
      <div className='mx-auto w-full max-w-7xl px-4 py-10'>
        <div className='grid gap-10 md:grid-cols-[1.4fr_2fr]'>
          <div>
            <Link href='/' className='group flex items-center gap-3 whitespace-nowrap'>
              <span className='rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-1 font-bold text-white shadow-md transition group-hover:scale-105'>DF</span>
              <span className='text-xl font-black tracking-tight text-gray-900 dark:text-white'>Dawid.dev</span>
            </Link>
            <p className='mt-4 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400'>
              Projects, practical development notes and lessons learned while building modern web applications.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className='mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white'>{group.title}</h2>
                <ul className='space-y-3 text-sm'>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.label === 'Email' ? (
                        <button
                          type='button'
                          onClick={() => setShowContact(true)}
                          className='transition hover:text-teal-500'
                        >
                          Email
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          target={link.external && link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.external && link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className='transition hover:text-teal-500'
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between'>
          <span>© {new Date().getFullYear()} Dawid.dev. All rights reserved.</span>
          <div className='flex gap-5 text-xl'>
            <a href='https://github.com/dawiditwork' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='transition hover:text-teal-500'><BsGithub /></a>
            <a href='https://www.linkedin.com/in/dawid-f-978307425/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='transition hover:text-teal-500'><FaLinkedin /></a>
            <button
              type='button'
              onClick={() => setShowContact(true)}
              aria-label='Contact by email'
              className='transition hover:text-teal-500'
            >
              <MdEmail />
            </button>
          </div>
        </div>
      </div>
    </footer>

    {showContact && (
      <div
        className='fixed inset-0 z-50 flex items-center justify-center bg-gray-950/75 px-4 backdrop-blur-sm'
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setShowContact(false);
        }}
      >
        <div
          role='dialog'
          aria-modal='true'
          aria-labelledby='contact-title'
          className='relative w-full max-w-md rounded-3xl border border-gray-200 bg-white p-7 text-gray-900 shadow-2xl dark:border-gray-700 dark:bg-gray-900 dark:text-white'
        >
          <button
            type='button'
            onClick={() => setShowContact(false)}
            aria-label='Close contact window'
            className='absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
          >
            <MdClose className='text-2xl' />
          </button>

          <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-2xl text-teal-500'>
            <MdEmail />
          </div>
          <p className='text-sm font-bold uppercase tracking-[0.18em] text-teal-500'>Let&apos;s connect</p>
          <h2 id='contact-title' className='mt-2 text-3xl font-black'>Get in touch</h2>
          <p className='mt-3 leading-7 text-gray-600 dark:text-gray-400'>
            Have a project, opportunity or question? Send me a message and I&apos;ll get back to you.
          </p>

          <div className='mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800'>
            <span className='text-xs font-semibold uppercase tracking-wider text-gray-500'>Email address</span>
            <p className='mt-1 break-all font-semibold'>{email}</p>
          </div>

          <div className='mt-5 grid gap-3 sm:grid-cols-2'>
            <button
              type='button'
              onClick={copyEmail}
              className='inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-3 font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
            >
              <MdContentCopy />
              {copied ? 'Copied!' : 'Copy email'}
            </button>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent('Contact from Dawid.dev')}`}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 font-semibold text-white transition hover:bg-teal-700'
            >
              <MdEmail />
              Write an email
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
