import React, { useState } from 'react';
import './css/post.css';

function Post({ posts, username }) {
  return (
    <div className='Post-Block'>
      {posts.map(post => (
        <PostItem key={post.id} post={post} username={username} />
      ))}
    </div>
  );
}

function PostItem({ post, username }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, username }]);
      setNewComment('');
    }
  };

  return (
    <div className="insta__container insta__post">
      <section className="insta__header insta__post_header">
        <div className="insta__icon-wrap insta__post_icon-wrap">
          <img src="http://via.placeholder.com/24" className="insta__mini_icon insta__post_icon" alt="icon" />
        </div>
        <span className="insta__post_text-bold">{username}</span>
      </section>
      <section className="insta__post_photos">
        <img src={post.imageURL} className="insta__post_photo" alt="photo" />
      </section>
      <section className="insta__post_btns">
        <div className="insta__post_btns-left">
          <button onClick={handleLikeClick} className="like-button">
            <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path
                d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
              </path>
            </svg>
          </button>
          <span>{likes} likes</span>
        </div>
      </section>
      <section className="insta__post_comm insta__post_comm_aut">
        <span className="insta__post_text-bold">518 202 Views</span>
        <div className="insta__post_comm_author">
          <span className="insta__post_text-bold">{username}</span>
          {post.comment}
          <span className="insta__hashtag">#{post.hashtag}</span>
        </div>
      </section>
      <section className="insta__post_footer">
        <form onSubmit={handleCommentSubmit} className="insta__comm_form">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="insta__comm_input"
          />
          <button type="submit" className="insta__comm_button">Post</button>
        </form>
        <div className="insta__comm_list">
          {comments.map((comment, index) => (
            <div key={index} className="insta__container insta__comm">
              <section className="insta__header insta__comm_header">
                <div className="insta__icon-wrap insta__post_icon-wrap">
                  <img src="http://via.placeholder.com/24" className="insta__mini_icon insta__post_icon" alt="icon" />
                </div>
                <span className="insta__post_text-bold">{comment.username}</span>
              </section>
              <section className="insta__comm_comment">
                <div className="insta__post_comm_author insta__comm_text">
                  {comment.text}
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Post;
