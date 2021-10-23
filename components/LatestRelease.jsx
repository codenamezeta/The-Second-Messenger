import Button from './Buttons'
// import { useState, useEffect } from 'react'
// import sanityClient from '../client' //* Imports the project ID and dataset name.

//TODO: Setup sanity studio and import release info as props.
//TODO: Move this components SCSS out of theme.scss and into it's own module
//TODO: Map over a links array prop that renders a store icon for each link

export default function LatestRelease() {
  // const [postData, setPost] = useState(null)
  // useEffect(() => {
  //   sanityClient
  //     .fetch(
  //       `*[_type == 'post']{
  //     title,
  //     slug,
  //     mainImage {
  //       asset->{
  //         _id,
  //         url
  //       },
  //       alt
  //     }
  //   }`
  //     )
  //     .then((data) => setPost(data))
  //     .catch(console.error)
  // })
  return (
    <section id='latest_release'>
      <div id='filter'>
        <div className='container'>
          <h5>Latest Release</h5>
          <h3 className='heading-overlay'>Kelly Come Home</h3>
          <h2>postData.title</h2>
          <blockquote>
            My fiancee sometimes leaves on these long trips to visit her family
            in the bay. Sometimes she's gone for days, so I wrote this song so
            she'd know how helpless I am without her.
          </blockquote>
          <Button
            to='https://open.spotify.com/track/4o4BDIhMG2cZ6pzMgL5urr?si=0191a17c2fb248f3'
            text='Stream It'
          />
          <Button
            to='https://open.spotify.com/track/4o4BDIhMG2cZ6pzMgL5urr?si=0191a17c2fb248f3'
            text='Free Download'
          />
        </div>
      </div>
    </section>
  )
}
