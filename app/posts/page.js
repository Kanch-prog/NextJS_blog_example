import Link from 'next/link';
import styles from '../page.module.css'; 

export default async function PostsPage() {
  const res = await fetch('http://localhost:3000/api/posts');
  const { posts } = await res.json();

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <Link href='/'>
            My Blog
          </Link>
        </div>
      </nav>
      
      <div className={styles.main}> {/* Apply CSS module class */}
        <h1 className={styles.heading}>All Blog Posts</h1> {/* Apply CSS module class */}
        <hr className={styles.hr} /> {/* Apply CSS module class */}

        <div className={styles.grid}> {/* Apply CSS module class */}
          {posts.map(post => (
            <article key={post.id} className={styles.card}> {/* Apply CSS module class */}
              <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
