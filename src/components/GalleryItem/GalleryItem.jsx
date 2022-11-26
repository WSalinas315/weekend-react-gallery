import './GalleryItem.css'
import axios from 'axios';
import {useState} from 'react';

export default function GalleryItem({galleryPiece, getGallery}){

  const [isImg, setIsImg] = useState(true);

  // Upvote function makes an axios call to increment the number of likes a photo has
  const upVote = () => {
    axios.put('gallery/like/'+galleryPiece.id).then(response => {
      console.log('Upvoting Picture ID', galleryPiece.id);
      getGallery();
    }).catch(error => {
      alert('Error with GalleryItem.jsx upVote function:'+error);
    });
  }

  // structure an item card and return it to the GalleryList
  return (
    <div className="gallery-item">
      {isImg == true &&
        <img onClick={() => {setIsImg(false)}} src={galleryPiece.path} />
      }
      {isImg == false &&
        <div className="image-description" onClick={() => {setIsImg(true)}}>{galleryPiece.description}</div>
      }
      <br />
      <button onClick={upVote}  className="gallery-btn">Love it!</button>
      <p>{galleryPiece.likes} {galleryPiece.likes === 1 ? 'person loves this!' : 'people love this!'}</p>
    </div>
  )
}