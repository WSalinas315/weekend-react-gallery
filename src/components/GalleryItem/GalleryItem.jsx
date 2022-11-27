import './GalleryItem.css'
import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function GalleryItem({ galleryPiece, getGallery }) {

  const [isImg, setIsImg] = useState(true);

  // Upvote function makes an axios call to increment the number of likes a photo has
  const upVote = () => {
    axios.put('gallery/like/' + galleryPiece.id).then(response => {
      console.log('Upvoting Picture ID', galleryPiece.id);
      getGallery();
    }).catch(error => {
      alert('Error with GalleryItem.jsx upVote function:' + error);
    });
  }

  // delete function that makes an axios call to delete a particular gallery listing
  const deletePiece = () => {
    axios.delete('gallery/' + galleryPiece.id).then(response => {
      console.log('Deleting Picture ID', galleryPiece.id);
      getGallery();
    }).catch(error => {
      alert('Error with GalleryItem.jsx delete function:' + error);
    });
  }

  // structure an item card and return it to the GalleryList
  return (
    <div className="gallery-item">
      {isImg == true &&
        <img onClick={() => { setIsImg(false) }} src={galleryPiece.path} />
      }
      {isImg == false &&
        <div className="image-description" onClick={() => { setIsImg(true) }}>{galleryPiece.description}</div>
      }
      <br />
      <Button variant="contained" onClick={upVote} className="gallery-btn">Love it!</Button>
      <br />
      <Button variant="contained" onClick={deletePiece} className="delete-btn">Delete</Button>
      <p>{galleryPiece.likes} {galleryPiece.likes === 1 ? 'person loves this!' : 'people love this!'}</p>
    </div>
  )
}