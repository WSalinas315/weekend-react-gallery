import axios from 'axios';
import { useState } from 'react'

export default function GalleryForm(props) {

  const [url, setURL] = useState('');
  const [description, setDesc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (url && description) {
      addGalleryItem();
    } else {
      alert('Please complete all fields.');
    };
  }

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
          <label >URL Path: </label>
          <input
            id="urlInput"
            type="text"
            value={url}
            onChange={(event) => setURL(event.target.value)} />
          <label >Description: </label>
          <input
            id="descriptionInput"
            type="text"
            value={description}
            onChange={(event) => setDesc(event.target.value)} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}