import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();
        if (!data.id) {
          throw new Error('Post not found');
        }
        setPost(data);
      } catch (error) {
        console.error(error);
        navigate('/posts');
      }
    };
    getData();
  }, [id, navigate]);

  if (!post) {
    return null;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;