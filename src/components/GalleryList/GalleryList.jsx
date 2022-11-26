// import axios from 'axios';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList({gallery}){

  return (
    <div className="gallery-container">
      {gallery.map(galleryPiece => {
        // {JSON.stringify(galleryPiece)}
        <GalleryItem key={galleryPiece.id} galleryPiece={galleryPiece} />
      })}
    </div>
  )
}