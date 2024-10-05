import Head from "next/head";

export default function Bet() {
  return (
    <>
      <Head>
        <title>BetCandidate | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device=width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5 mx-auto w-1/2">
        <div>
          <h1 className="">BetCandidate</h1>
          <p className="">Apostas on-chain nas eleições americanas</p>
          <p className="">Você tem até o dia da eleição para deixar sua aposta em um dos candidatos abaixo.</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-5 items-center">
            <div className=""></div>
            <div className="">
              <h3>Donald Trump</h3>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" width="200" height="300" className="block" />
            <button className="bg-blue-950 mx-auto px-4 py-2 rounded-md">Aposto nesse candidato</button>
            <span className="bg-slate-800 px-4 py-2 rounded-md w-full text-center" >0 POL Apostado</span>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className=""></div>
            <div className="">
              <h3>Kamala Harris</h3>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg/800px-Kamala_Harris_Vice_Presidential_Portrait.jpg" width="200" height="300" className="block" />
            <button className="bg-blue-950 mx-auto px-4 py-2 rounded-md">Aposto nesse candidato</button>
            <span className="bg-slate-800 px-4 py-2 rounded-md w-full text-center" >0 POL Apostado</span>
          </div>
        </div>

        <div>
          <p className=""></p>
        </div>

        <footer className="flex flex-row w-full justify-between border border-x-0 border-b-0 pt-3 mt-20">
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
