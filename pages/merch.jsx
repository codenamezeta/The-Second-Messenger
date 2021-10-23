import { useState, useEffect } from 'react'

export default function merch() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState({})

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      'http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          // console.log(result)
          setItems(result.name)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        <h1>Hello From /Merch</h1>
        <ul>
          {{ items }}
          {/* {items.map((item) => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))} */}
        </ul>
      </>
    )
  }
}
