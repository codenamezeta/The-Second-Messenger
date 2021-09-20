// TODO: Validation is still very basic.
//? Docs: https://react-hook-form.com/get-started
//? Docs: https://react-hook-form.com/api/useformstate/errormessage/#main

import { useState } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
import selectors from '../../styles/SubscribeFormMC.module.scss'

const SubscribeFormMC = () => {
  const [subscriberName, setSubscriberName] = useState('Subscriber')
  const [subscriberEmail, setSubscriberEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [APIResponse, setAPIResponse] = useState(null)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: 'all',
  })

  const updateSubscriberName = (e) => {
    setSubscriberName(e.target.value)
    // console.log(subscriberName)
  }
  const updateSubscriberEmail = (e) => {
    setSubscriberEmail(e.target.value)
    // console.log(subscriberEmail)
  }

  const subscribe = async (e) => {
    // e.preventDefault()
    setIsLoading(true)
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subscriberName, subscriberEmail }),
    })
      .then((response) => response.text())
      .then((result) => {
        setIsLoading(false)
        setAPIResponse(result)
      })
  }

  return (
    <section id='newsletter_signup' className={selectors['newsletter-signup']}>
      {isLoading ? (
        <div className='container'>
          <h4>The Newsletter</h4>
          <br />
          <p>Loading...</p>
        </div>
      ) : (
        <form className='container' onSubmit={handleSubmit(subscribe)}>
          <h4>The Newsletter</h4>
          <input
            type='text'
            placeholder='Name'
            {...register('Name', { required: false })}
            onChange={updateSubscriberName}
          />
          <input
            type='text'
            placeholder='Email'
            {...register('Email', {
              required: 'An email address is required to subscribe.',
              pattern: {
                value: /^\S+@\S+$/i,
                message: "This email address doesn't seem right.",
              },
            })}
            onChange={updateSubscriberEmail}
          />
          <p style={{ color: '#f09d09' }}>
            {APIResponse || (
              <ErrorMessage
                errors={errors}
                name='Email'
                // render={({ message }) => (
                //   <p style={{ color: '#f09d09' }}>{message}</p>
                // )}
              />
            )}
          </p>
          <button className='btn' type='submit'>
            Subscribe
          </button>
          <p>
            Fear not, we never spam.
            <br />
            Unsubscribe anytime.
          </p>
        </form>
      )}
    </section>
  )
}

export default SubscribeFormMC
