import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  // Create gallery array
  let[gallery, setGallery] = useState([]);

  // Load Gallery
  useEffect(() => {
    getGallery()
  }, []);

  // GET call for gallery
  const getGallery = () => {
    axios.get('/gallery').then(response => {
      setGallery(response.data);
    }).catch(error => {
      alert('Error with App.jsx getGallery'+error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* <p>Gallery goes here</p> */}
      {/* <img src="images/goat_small.jpg"/> */}
      <GalleryList gallery={gallery} />
      {/* {JSON.stringify(gallery)} */}
    </div>
  );
}

export default App;
