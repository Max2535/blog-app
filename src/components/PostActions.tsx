// src/components/PostActions.tsx

type PostActionsProps = {
  likes: number;
  comments: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
};

export function PostActions({
  likes,
  comments,
  onLike,
  onComment,
  onShare
}: PostActionsProps) {
  return (
    <div className="flex space-x-4 mt-4">
      <button
        onClick={onLike}
        className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
      >
        <span>👍</span>
        <span>{likes}</span>
      </button>

      <button
        onClick={onComment}
        className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
      >
        <span>💬</span>
        <span>{comments}</span>
      </button>

      <button
        onClick={onShare}
        className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
      >
        <span>🔗</span>
        <span>Share</span>
      </button>
    </div>
  );
}