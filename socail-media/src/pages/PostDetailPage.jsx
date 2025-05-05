import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import f4 from '../assets/f4.png';

const PostDetailPage = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.find((item) => item.id === parseInt(id))
  );

  if (!post) return <div>Post not found.</div>;

  return (
    <div className="detail-container">
      <h1>Social Media App</h1>
      <hr></hr>
      <h2>Details Page For Post With ID {id}</h2>
      <img src={f4} alt="Post" className="post-image" />
      <p>User Id : {post.userId}</p>
      <p>Title : {post.title}</p>
      <p>Body : {post.body}</p>
    </div>
  );
};

export default PostDetailPage;
