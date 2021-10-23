import Link from 'next/link'
import Button from '../components/Buttons'

export default function bio() {
  return (
    <div className='container'>
      <h1>Hello from Bio page!</h1>
      <Button text='Small Button' to='/' size='small' />
      <Button text='Regular Button' to='/' />
      <Button text='Large Button' to='/' size='large' />
      <Button text='Extra Large Button' to='/' size='x-large' />
      <Button fullWidth text='Small Fullwidth Button' to='/' size='small' />
      <Button fullWidth text='Regular Fullwidth Button' to='/' />
      <Button fullWidth text='Large Fullwidth Button' to='/' size='large' />
      <Button
        fullWidth
        text='Extra Large Fullwidth Button'
        to='/'
        size='x-large'
      />
      <Button outline text='Small Outlined' to='/' size='small' />
      <Button outline text='Regular Outlined' to='/' />
      <Button outline text='Large Outlined' to='/' size='large' />
      <Button outline text='Extra Large Outlined' to='/' size='x-large' />
      <Button
        fullWidth
        outline
        text='Small Fullwidth Button Outlined'
        to='/'
        size='small'
      />
      <Button
        fullWidth
        outline
        text='Regular Fullwidth Button Outlined'
        to='/'
      />
      <Button
        fullWidth
        outline
        text='Large Fullwidth Button Outlined'
        to='/'
        size='large'
      />
      <Button
        fullWidth
        outline
        text='Extra Large Fullwidth Button Outlined'
        to='/'
        size='x-large'
      />
    </div>
  )
}
