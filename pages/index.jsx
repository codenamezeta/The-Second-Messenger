import Nav from '../components/nav'
import Button from '../components/Buttons'
// import Image from 'next/image'
import SubscribeFormMC from '../components/newsletter/SubscribeFormMC'
import Link from 'next/link'
// import { useRef } from 'react'
import NewsTeaser from '../components/NewsTeaser'
import LatestRelease from '../components/LatestRelease'

// import Song from '../public/audio/dream-girl.mp3'

const index = () => {
  return (
    <>
      <Nav />
      <main className='container' id='intro'>
        <h1>The Second Messenger</h1>
        <p>
          We are The Second Messenger, a team of DIY music producers,
          songwriters, and recording artists united by our quest to create a
          legacy of high-quality music. Unfettered by record labels or
          geographical limitations, we leverage the connective power of the
          internet to build direct relationships with our worldwide audience.
          Our quest has only just begun, but we're beyond excited for what's
          ahead. We hope you will join us because we like to think The Second
          Messenger always delivers.
        </p>
        <Button to='/bio' text='Learn More' outline />
        <Button to='/bio' text='Become A Fan' />
      </main>

      <LatestRelease />

      {/* <SubscribeForm /> */}
      <SubscribeFormMC />

      <section className='grid explore' id='explore'>
        <Link href='/music'>
          <div className='explore-column' id='column_1'>
            <h3>Music</h3>
          </div>
        </Link>
        <Link href='/bio'>
          <div className='explore-column' id='column_2'>
            <h3>Bio</h3>
          </div>
        </Link>
        <Link href='/merch'>
          <div className='explore-column' id='column_3'>
            <h3>Merch</h3>
          </div>
        </Link>
        <Link href='/news'>
          <div className='explore-column' id='column_4'>
            <h3>News</h3>
          </div>
        </Link>
      </section>

      {/*TODO Instead of a share section, try share button for individual things, like songs. */}
      {/* <audio controls src={Audio}></audio> */}

      <NewsTeaser />
    </>
  )
}

export default index
