'use client';

import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from 'flowbite-react';

import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import { UserButton, useUser } from '@clerk/nextjs';
import { dark, light } from '@clerk/themes';
import { useEffect, useState, useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { resolvedTheme, setTheme } = useTheme();
  const { isSignedIn } = useUser();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [searchTerm, setSearchTerm] = useState(
    () => searchParams.get('searchTerm') || ''
  );

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const searchTermFromUrl = searchParams.get('searchTerm') || '';

    const timeout = setTimeout(() => {
      setSearchTerm(searchTermFromUrl);
    }, 0);

    return () => clearTimeout(timeout);
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(searchParams.toString());

    if (searchTerm.trim()) {
      urlParams.set('searchTerm', searchTerm.trim());
    } else {
      urlParams.delete('searchTerm');
    }

    setShowMobileSearch(false);
    router.push(`/search?${urlParams.toString()}`);
  };

  const currentTheme = mounted ? resolvedTheme : 'light';

  return (
    <header className='border-b border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200'>
      <Navbar fluid className='!bg-transparent'>
        <Link
          href='/'
          className='group flex items-center gap-3 whitespace-nowrap'
        >
          <div
            className='rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            px-3 py-1 font-bold text-white shadow-md
            transition-all duration-300
            group-hover:scale-105 group-hover:shadow-xl'
          >
            DF
          </div>

          <span
            className='text-xl font-black tracking-tight
            transition-all duration-300
            group-hover:bg-gradient-to-r
            group-hover:from-indigo-500
            group-hover:via-purple-500
            group-hover:to-pink-500
            group-hover:bg-clip-text
            group-hover:text-transparent'
          >
            Dawid.dev
          </span>
        </Link>

        <form
          onSubmit={handleSubmit}
          className='hidden items-center gap-2 lg:flex'
        >
          <TextInput
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            type='submit'
            className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
          >
            <AiOutlineSearch />
          </button>
        </form>

        <div className='flex gap-2 md:order-2'>
          <Button
            className='h-10 w-12 lg:hidden'
            color='gray'
            pill
            onClick={() => setShowMobileSearch((prev) => !prev)}
          >
            <AiOutlineSearch />
          </Button>

          <Button
            className='h-10 w-12'
            color='gray'
            pill
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted &&
              (resolvedTheme === 'dark' ? <FaSun /> : <FaMoon />)}
          </Button>

          {isSignedIn ? (
            <UserButton
              appearance={{
                baseTheme: currentTheme === 'dark' ? dark : light,
              }}
              userProfileUrl='/dashboard?tab=profile'
            />
          ) : (
            <Link href='/sign-in'>
              <Button color='purple' outline>
                Sign In
              </Button>
            </Link>
          )}

          <NavbarToggle />
        </div>

        {showMobileSearch && (
          <form
            onSubmit={handleSubmit}
            className='mt-3 flex w-full items-center gap-2 px-2 lg:hidden'
          >
            <TextInput
              type='text'
              placeholder='Search...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className='flex-1'
            />

            <button
              type='submit'
              className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            >
              <AiOutlineSearch />
            </button>
          </form>
        )}

        <NavbarCollapse>
          <NavbarLink
            href='/'
            active={path === '/'}
            className='text-gray-700 dark:text-gray-200'
          >
            Home
          </NavbarLink>

          <NavbarLink
            href='/about'
            active={path === '/about'}
            className='text-gray-700 dark:text-gray-200'
          >
            About
          </NavbarLink>

          <NavbarLink
            href='/projects'
            active={path === '/projects'}
            className='text-gray-700 dark:text-gray-200'
          >
            Projects
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}