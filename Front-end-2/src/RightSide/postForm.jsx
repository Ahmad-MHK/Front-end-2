import React, { useState } from 'react';
import db, { storage } from '../Firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './/css/postForm.css';  

function PostForm({ addPost }) {
  const [comment, setComment] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [imageUpload, setImageUpload] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageURL = '';
      if (imageUpload) {
        const imageRef = ref(storage, `images/${imageUpload.name + Date.now()}`);
        await uploadBytes(imageRef, imageUpload);
        imageURL = await getDownloadURL(imageRef);

        const docRef = await addDoc(collection(db, "PostContact"), {
          comment: comment,
          hashtag: hashtag,
          imageURL: imageURL
        });

        alert("Image Uploaded");
      }

      const newPost = {
        id: docRef.id,
        comment: comment,
        hashtag: hashtag,
        imageURL: imageURL
      };

      addPost(newPost);

      setComment('');
      setHashtag('');
      setImageUpload(null);
    } catch (error) {
      console.log('Error adding document: ', error);
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
