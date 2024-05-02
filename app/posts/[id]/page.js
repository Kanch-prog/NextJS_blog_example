'use client'

import { useEffect, useState } from 'react';
import LoadingSkeleton from './LoadingSkeleton'; 
import styles from '../../page.module.css'; 
import NavigationBar from '../NavigationBar';

export default function SinglePost({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); 

  const fetchPost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const { post } = await res.json();
    post && setPost(post);
    setLoading(false); 
  }

  useEffect(() => {
    fetchPost(params.id);
  }, []);

  // Render loading UI if loading
  if (loading) {
    return <LoadingSkeleton />;
  }
  
  return (
    <div className={styles.main}>
      <NavigationBar /> 
      <div className={styles.center}>
        <article className={styles.description}>
          <h1>{post?.title}</h1>
          <div className={styles.tags}>
            {post?.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <p>{post?.body}</p>
        </article>
      </div>
    </div>
  );
}
