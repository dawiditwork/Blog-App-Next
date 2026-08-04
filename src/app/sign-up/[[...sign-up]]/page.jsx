import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className='flex w-full justify-center px-4 py-16'>
      <SignUp
        routing='path'
        path='/sign-up'
        signInUrl='/sign-in'
      />
    </main>
  );
}