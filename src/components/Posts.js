import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div className='posts-body'>
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;