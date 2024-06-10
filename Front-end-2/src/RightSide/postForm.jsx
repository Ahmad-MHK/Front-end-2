import React, { useState } from 'react';
import db, { storage } from '../Firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function PostForm({ addPost }) {
  const [comment, setComment] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [imageUpload, setImageUpload] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      let imageURL = '';
      if (imageUpload) {
        // Upload the image to Firebase Storage
        const imageRef = ref(storage, `images/${imageUpload.name + Date.now()}`);
        await uploadBytes(imageRef, imageUpload);
        imageURL = await getDownloadURL(imageRef);

        // Update the document with the imageURL
        await addDoc(collection(db, "PostContact"), {
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
    <div className='Post-Form'>
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
          required
        />
        <input
          type="text"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
          placeholder="Hashtag"
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostForm;
