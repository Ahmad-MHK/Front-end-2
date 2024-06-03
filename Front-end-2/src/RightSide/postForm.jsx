import React, { useState } from 'react';
import db from '../Firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore'; 

function PostForm() {
    const [comment, setComment] = useState('');
    const [hashtag, setHashtag] = useState('');


    const handleSubmit = async () => {

        try{
            const docRef = await addDoc(collection(db, "PostContact"), {
                comment: comment,
                hashtag: hashtag
            });
            console.log('doc added with id: ', docRef.id)
    
        }
        catch{
            console.log('hoi')
        }
       
        setComment('');
        setHashtag('');
    }

    return (
        <div className='Post-Form'>
            <div>
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
                <button type="submit" onClick={handleSubmit}>Post</button>
            </div>
        </div>
    );
}

export default PostForm;
