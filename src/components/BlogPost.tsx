// src/components/BlogPost.tsx

import { AuthorInfo } from './AuthorInfo';
import { PostActions } from './PostActions';
import { BlogPost as BlogPostType } from '../types';

type BlogPostProps = {
  post: BlogPostType;
};

export function BlogPost({ post }: BlogPostProps) {
  const handleLike = () => {
    console.log(`Liked post: ${post.id}`);
  };

  const handleComment = () => {
    console.log(`Comment on post: ${post.id}`);
  };

  const handleShare = () => {
    console.log(`Share post: ${post.id}`);
  };

  return (
    <article className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
      <div className="md:flex md:items-start md:gap-6">
        {/* Author Section (left on desktop) */}
        <div className="md:flex-shrink-0 md:w-36">
          <AuthorInfo author={post.author} />
        </div>

        {/* Content Section */}
        <div className="mt-3 md:mt-0 flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {post.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {post.content}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {post.publishedAt}
          </p>

          {/* Actions Section */}
          <PostActions
            likes={post.likes}
            comments={post.comments}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
          />
        </div>
      </div>
    </article>
  );
}