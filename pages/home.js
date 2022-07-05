import Head from "next/head";
import Layout from "../layout";
import "normalize.css";
import Home from "../components/homePage";

export default function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>Dynamic</title>
        <link rel="icon" href="logo.png" />
        <link
          href="//db.onlinewebfonts.com/c/9fbffe9c24e09e4fac70f87f5a76f558?family=Brinnan"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <main>
        <Layout namePage={"Home"}>
          <Home />
        </Layout>
      </main>

      <style jsx global>{`
        html,
        body {
          color: #fff;
          padding: 0;
          margin: 0;
          font-family: "Brinnan", sans-serif;
          font-size: 62.5%;
        }

        body::-webkit-scrollbar {
          width: 4px;
          background: #000;
        }

        body::-webkit-scrollbar-thumb {
          background-color: #77838f;
          border-radius: 20px;
        }

        * {
          box-sizing: border-box;
        }

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
