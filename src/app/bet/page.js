import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BetCandidate | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device=width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5 mx-auto w-full">
        
        <footer className="flex flex-row w-full justify-between">
          <p>
            &copy; 2024 BetCandidate, Inc
          </p>
          <ul className="flex flex-row gap-3">
            <li className=""><a href="/" className="">Home</a></li>
            <li className=""><a href="/about" className="">About</a></li>
          </ul>
        </footer>
      </div>
    </>
  );
}
