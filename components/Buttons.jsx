const Button = ({ text, to, size, outline, fullWidth }) => {
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

export default Button

//! REMEMBER: BUTTON SIZING STYLES LIKE 'LARGE' OR 'SMALL' MAY ClASH WITH OTHER COMPONENTS. CONSIDER CHANGING CLASS NAMES TO INCLUDE 'btn-'
