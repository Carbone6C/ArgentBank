import PropTypes from 'prop-types'

function HomeDisplay({ img, title, alt, text }) {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

HomeDisplay.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default HomeDisplay
