import selectors from '../styles/Newsletter.module.scss'

const Newsletter = () => {
  return (
    <section id='newsletter_signup' className={selectors['newsletter-signup']}>
      <form className='container'>
        <h4>The Newsletter</h4>
        <input type='text' id={selectors.name} placeholder='Name' />
        <input type='text' id={selectors.email} placeholder='Email' />
        <button className='btn'>Subscribe</button>
        <p>Fear not, we never spam. Unsubscribe anytime.</p>
      </form>
    </section>
  )
}

export default Newsletter
