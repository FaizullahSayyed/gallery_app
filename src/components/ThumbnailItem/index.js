// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateCurrentImage, activeImageId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickUpdateImage = () => {
    updateCurrentImage(id)
  }

  return (
    <li className={`thumbnail ${activeImageId === id && 'remove-opacity'}`}>
      <button onClick={onClickUpdateImage} type="button" className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
