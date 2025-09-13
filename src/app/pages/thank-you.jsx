// app/thank-you/page.jsx

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
      <p className="text-lg text-gray-300">Your message has been sent successfully.</p>
      <a href="/" className="mt-8 text-orange-200 hover:underline">
        Go back to the homepage
      </a>
    </div>
  );
}