export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using the Dawid.dev technology blog.',
};

export default function Terms() {
  return (
    <main className='min-h-screen'>
      <article className='legal-content mx-auto max-w-3xl px-4 py-16 sm:py-24'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-teal-500'>Legal</p>
        <h1>Terms & Conditions</h1>
        <p className='updated'>Last updated: July 26, 2026</p>
        <h2>1. Acceptance of these terms</h2>
        <p>By using this website, you agree to these terms. If you do not agree, please stop using the website.</p>
        <h2>2. Informational content</h2>
        <p>Articles and project descriptions are provided for general informational and educational purposes. Although reasonable care is taken when preparing content, no guarantee is made that every item is complete, current or suitable for a particular purpose.</p>
        <h2>3. Intellectual property</h2>
        <p>Unless stated otherwise, original text, branding and website content belong to Dawid Frankowicz. You may link to public pages and quote short excerpts with clear attribution. Republishing substantial content requires prior permission.</p>
        <h2>4. External links</h2>
        <p>This website links to third-party websites and services. Their content, availability and privacy practices are outside the operator&apos;s control.</p>
        <h2>5. Acceptable use</h2>
        <p>You must not attempt to disrupt the website, gain unauthorized access, upload malicious content or use automated methods that place an unreasonable load on the service.</p>
        <h2>6. Availability and liability</h2>
        <p>The website may be changed, suspended or removed without notice. To the extent permitted by law, the operator is not liable for losses resulting from reliance on the content or temporary unavailability.</p>
        <h2>7. Contact</h2>
        <p>Questions about these terms can be sent to <a href='mailto:dawiditwork@gmail.com'>dawiditwork@gmail.com</a>.</p>
      </article>
    </main>
  );
}
