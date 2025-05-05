import React from 'react';
import { Link } from 'react-router-dom';
import f4 from '../assets/f4.png'; // Adjust the path based on where you placed the image

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <img src={f4} alt="Post" className="post-image" />
      <div className="card-content">
        <p>User ID: {post.userId}</p>
        <h3>Title : {post.title.slice(0, 20)}...</h3>
        <p>Body : {post.body.slice(0, 30)}...</p>
        <Link to={`/item/${post.id}`}>Read More...</Link>
      </div>
    </div>
  );
};

export default PostCard;
