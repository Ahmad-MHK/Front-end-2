import React from 'react';
import './post.css';

function Post({ posts }) {
  return (
    <div className='Post-Block'>
      {posts.map(post => (
        <div key={post.id} className="insta__container insta__post">
          <section className="insta__header insta__post_header">
            <div className="insta__icon-wrap insta__post_icon-wrap">
              <img src="http://via.placeholder.com/24" className="insta__mini_icon insta__post_icon" alt="icon" />
            </div>
            <span className="insta__post_text-bold">username</span>
          </section>
          <section className="insta__post_photos">
            <img src={post.imageURL} className="insta__post_photo" alt="photo" />
          </section>
          <section className="insta__post_comm insta__post_comm_aut">
            <span className="insta__post_text-bold">518 202 Views</span>
            <div className="insta__post_comm_author">
              <span className="insta__post_text-bold">username</span>
              {post.comment}
              <span className="insta__hashtag">#{post.hashtag}</span>
            </div>
          </section>
          <section className="insta__post_footer">
            <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
            </svg>
            Comments ...
          </section>
        </div>
      ))}
    </div>
  );
}

export default Post;
