// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onUpdateClick = () => {
    updateImage(id)
  }
  return (
    <li>
      <button className="thumb-button" type="button" onClick={onUpdateClick}>
        <img
          src={thumbnailUrl}
          className="thumb-small-img"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
