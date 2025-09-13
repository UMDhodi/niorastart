import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* 👇 Hidden form for Netlify to detect */}
        <form name="contact" data-netlify="true" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
        </form>
      </body>
    </Html>
  );
}
