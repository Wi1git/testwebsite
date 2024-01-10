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
          Judy last fed me at 8:18 PM.
        </p>
    
        <p className="description">
          Judy last cleaned my tank on January 7, 2024.
        </p>

        <p className="description">
          Judy last changed my tank filter on January 7, 2024.
        </p>

        <p className="description">
          My tank temperature is currently 82.9°F.
        </p>

        <p className="description">
          Overall I'm chilling and happy as ever, check me out!
        </p>

        <img src="/frankchillin.png"/>
    
      </main>

      <Footer />
    </div>
  )
}
