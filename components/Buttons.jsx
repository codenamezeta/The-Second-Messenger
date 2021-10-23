export default function Button({ text, to, size, outline, fullWidth }) {
  const classList = `btn${outline ? ' outline' : ''}${
    fullWidth ? ' full-width' : ''
  }${size ? ' ' + size : ''}`
  return (
    <a href={to} className={classList}>
      {text}
    </a>
  )
}

Button.defaultProps = {
  text: 'Go!',
  to: '#!',
  outline: false,
  fullWidth: false,
}
