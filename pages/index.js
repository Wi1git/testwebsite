import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Frank Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi world my name is Frank Oogway!" />

        <h3 className="description">
          I am a Red Slider Turtle and I was born (allegedly) on January 5, 2024!
        </h3>
    
        <p className="description">
          Judy last fed me 9999999 days ago.
        </p>
    
        <p className="description">
          Judy last cleaned my tank 9999999 days ago.
        </p>

        <p className="description">
          Judy last changed my tank filter 9999999 days ago.
        </p>

        <p className="description">
          My tank temperature is currently 42069°F.
        </p>

        <p className="description">
          Overall I'm chilling and happy as ever, check me out!
        </p>

        <img src="/frankchillin.png"/>

   /*     <h3 className="description">
          Frank Gallery:
        </h3>

        <img src="/frankpeeking.png"/>
   */
    // Figure out how to extend page size
    
      </main>

      <Footer />
    </div>
  )
}
