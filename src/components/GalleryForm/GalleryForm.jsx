import axios from 'axios';
import { useState } from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './GalleryForm.css';

export default function GalleryForm(props) {

  const [url, setURL] = useState('');
  const [description, setDesc] = useState('');

  // function to call addGalleryItem if all conditions are met
  const handleSubmit = (event) => {
    event.preventDefault();
    if (url && description) {
      addGalleryItem();
    } else {
      alert('Please complete all fields.');
    };
  }

  // Function to add an item to the database with an axios POST
  const addGalleryItem = () => {
    axios.post('/gallery', { path: url, description: description }).then(response => {
      console.log('POST successful.');
      setURL('');
      setDesc('');
      props.getGallery();
    }).catch(error => {
      alert('Error with POST in GalleryForm.jsx:', error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a gallery piece</h2>
        <div className='submit-form'>
          <div>
            <TextField
              variant="outlined"
              label="URL Path"
              id="urlInput"
              type="text"
              value={url}
              onChange={(event) => setURL(event.target.value)}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              label="Description"
              id="descriptionInput"
              type="text"
              value={description}
              onChange={(event) => setDesc(event.target.value)}
            />
          </div>
          <Button variant="contained" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}