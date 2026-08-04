export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for the Dawid.dev technology blog.',
};

export default function PrivacyPolicy() {
  return (
    <main className='min-h-screen'>
      <article className='legal-content mx-auto max-w-3xl px-4 py-16 sm:py-24'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-teal-500'>Legal</p>
        <h1>Privacy Policy</h1>
        <p className='updated'>Last updated: July 26, 2026</p>
        <h2>1. About this website</h2>
        <p>Dawid.dev is a personal technology blog operated by Dawid Frankowicz. It presents technical articles, development notes and selected software projects.</p>
        <h2>2. Information that may be processed</h2>
        <p>You can browse public content without creating an account. If you sign in, the authentication provider may process account information such as your name, email address and profile image. Basic technical information, including IP address, browser type and access logs, may also be processed for security and reliable operation.</p>
        <h2>3. Services used</h2>
        <p>This website may use third-party infrastructure for hosting, authentication, database storage and media delivery. These providers process information according to their own privacy policies and only as required to provide their services.</p>
        <h2>4. Purpose and retention</h2>
        <p>Information is used to operate and secure the website, provide account features and maintain published content. It is retained only for as long as necessary for these purposes or to meet legal obligations.</p>
        <h2>5. Your rights</h2>
        <p>Depending on applicable law, you may request access, correction or deletion of your personal information. You may also object to or request restriction of certain processing.</p>
        <h2>6. Contact</h2>
        <p>For privacy questions or requests, contact <a href='mailto:dawiditwork@gmail.com'>dawiditwork@gmail.com</a>.</p>
      </article>
    </main>
  );
}
