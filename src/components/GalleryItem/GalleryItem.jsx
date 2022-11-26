import './GalleryItem.css'
// import axios from 'axios';

export default function GalleryItem({galleryPiece}){

  return (
    <div className="gallery-item">
      <img src={galleryPiece.path} />
      <button className="gallery-btn">Love it!</button>
      <p>{galleryPiece.likes} people love this!</p>
    </div>
  )
}