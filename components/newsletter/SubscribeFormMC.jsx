import { useState } from 'react'
import selectors from '../../styles/SubscribeFormMC.module.scss'

const SubscribeFormMC = () => {
  const [subscriberName, setSubscriberName] = useState('')
  const [subscriberEmail, setSubscriberEmail] = useState('')

  const updateSubscriberName = (e) => {
    setSubscriberName(e.target.value)
    // console.log(subscriberName)
  }
  const updateSubscriberEmail = (e) => {
    setSubscriberEmail(e.target.value)
    // console.log(subscriberEmail)
  }

  const subscribe = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subscriberName, subscriberEmail }),
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <section id='newsletter_signup' className={selectors['newsletter-signup']}>
      <form
        className='container'
        // action='../pages/api/subscribe'
        // method='POST'
      >
        <h4>The Newsletter</h4>
        <p>Hello, {subscriberName}</p>
        <input
          type='text'
          id={selectors.name}
          placeholder='Name'
          value={subscriberName}
          onChange={updateSubscriberName}
        />
        <input
          type='text'
          id={selectors.email}
          placeholder='Email'
          value={subscriberEmail}
          onChange={updateSubscriberEmail}
        />
        {/* TODO: Validate form against the state vars before sending */}
        <button className='btn' onClick={subscribe}>
          Subscribe
        </button>
        <p>
          Fear not, we never spam.
          <br />
          Unsubscribe anytime.
        </p>
      </form>
    </section>
  )
}

export default SubscribeFormMC
