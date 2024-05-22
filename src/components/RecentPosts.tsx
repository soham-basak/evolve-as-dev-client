import { Post } from '@/types/blog-types';
import PostPreview from './PostPreview';
import { Link } from 'react-router-dom';

const RecentPosts = () => {
  // Mock post data
  const posts: Post[] = [
    {
      title: 'My First Post',
      thumbnail: '/post-thumbnail.png',
      description: 'This is my first post',
      readingTime: 5,
      publishedDate: '2024-05-20T12:00:00.000Z',
    },
    {
      title: 'My Second Post',
      thumbnail: '/post-thumbnail.png',
      description: 'This is my second post',
      readingTime: 3,
      publishedDate: '2024-05-19T12:00:00.000Z',
    },
    {
      title: 'My Third Post',
      thumbnail: '/post-thumbnail.png',
      description: 'This is my third post',
      readingTime: 4,
      publishedDate: '2024-05-18T12:00:00.000Z',
    },
    {
      title: 'My Fourth Post',
      thumbnail: '/post-thumbnail.png',
      description: 'This is my fourth post',
      readingTime: 6,
      publishedDate: '2024-05-17T12:00:00.000Z',
    },
  ];

  return (
    <>
      <div className='grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 my-12 lg:grid-cols-4 gap-8'>
        {posts.map((post, index) => (
          <Link to={`/blog${''}`} key={index}>
            <PostPreview post={post} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecentPosts;
