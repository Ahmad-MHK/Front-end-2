import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import db,{ auth, storage } from '../Firebase/FirebaseConfig'; // Adjust path as per your actual setup
import './css/postForm.css';  

function PostForm({ addPost }) {
  const [comment, setComment] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          // Fetch the username from Firestore based on the user's UID
          const userDocRef = doc(db, 'logins', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUsername(userDoc.data().username);
          } else {
            console.log('User document not found');
          }
        } catch (error) {
          console.error('Error fetching user document: ', error);
        }
      } else {
        console.log('No user logged in');
      }
    });

    return unsubscribe;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username is available
    if (!username) {
      alert('Cannot post without a username. Please log in.');
      return;
    }

    try {
      let imageURL = '';
      if (imageUpload) {
        const imageRef = ref(storage, `images/${imageUpload.name + Date.now()}`);
        await uploadBytes(imageRef, imageUpload);
        imageURL = await getDownloadURL(imageRef);

        const docRef = await addDoc(collection(db, "PostContact"), {
          username: username,
          comment: comment,
          hashtag: hashtag,
          imageURL: imageURL
        });
        console.log(username + " username");
        alert("Image Uploaded");

        const newPost = {
          id: docRef.id,
          username: username,
          comment: comment,
          hashtag: hashtag,
          imageURL: imageURL
        };

        addPost(newPost);

        setComment('');
        setHashtag('');
        setImageUpload(null);
      } else {
        console.log('No image uploaded');
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='post-form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imageUpload">Upload Image</label>
          <input 
            type="file" 
            id="imageUpload"
            onChange={(event) => setImageUpload(event.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hashtag">Hashtag</label>
          <input
            type="text"
            id="hashtag"
            value={hashtag}
            onChange={(e) => setHashtag(e.target.value)}
            placeholder="Hashtag"
            required
          />
        </div>
        <button type="submit" className="submit-button">Post</button>
      </form>
    </div>
  );
}

export default PostForm;
