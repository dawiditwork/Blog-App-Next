import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className='flex w-full justify-center px-4 py-16'>
      <SignIn
        routing='path'
        path='/sign-in'
        signUpUrl='/sign-up'
      />
    </main>
  );
}