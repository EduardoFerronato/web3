"use client"

import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {

  const { push } = useRouter()

  function btnLoginClick() {
    push("/bet")
  }

  return (
    <>
      <Head>
        <title>BetCandidate | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device=width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5 mx-auto w-1/2">
        <div className="flex-row-reverse flex items-center gap-10 justify-center">
          <div className="items-center">
            <img src="https://kffhealthnews.org/wp-content/uploads/sites/2/2024/08/trump-harris-pharma-side-by-side.jpg" className="" width="400" height="275" />
          </div>
          <div className="w-96">
            <h1 className="">BetCandidate</h1>
            <p className="">Apostas on-chain nas eleições americanas</p>
            <p className="">Autentique-se com sua carteira e deixe a sua aposta para a proxima disputa.</p>
            <div>
              <button type="button" className="bg-blue-950 px-4 py-2 rounded-md" onClick={btnLoginClick}>
                <img src="" />
                <p>Conectar MetaMask</p>
              </button>
            </div>
            <p className=""></p>
          </div>
        </div>
        <footer className="flex flex-row w-full justify-between ">
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
