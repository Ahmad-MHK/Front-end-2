import React, { useState, useEffect } from 'react';
import '../App.css';
import LeftBar from '../LeftBar/LeftBar';
import Topbar from '../RightSide/TopBar';
import Post from '../RightSide/Post';
import PostForm from '../RightSide/postForm';
import db from "../Firebase/FirebaseConfig";
import { collection, getDocs } from 'firebase/firestore';

function CreatePostPage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "PostContact"));
      const postsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsList);
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="row">
      <LeftBar />
      <div className="Right">
        <Topbar />
        <PostForm addPost={addPost} />
      </div>
    </div>
  );
}

export default CreatePostPage;