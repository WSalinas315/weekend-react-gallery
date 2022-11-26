// import axios from 'axios';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList(props){

  // return processes gallery array and imports gallery items
  return (
    <div className="gallery-container">
      {props.gallery.map(galleryPiece => (
        <GalleryItem key={galleryPiece.id} galleryPiece={galleryPiece} getGallery={props.getGallery} />
      ))}
    </div>
  )
}