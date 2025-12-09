// src/components/AuthorInfo.tsx

import { Avatar } from './Avatar';
import { Author } from '../types';

type AuthorInfoProps = {
  author: Author;
};

export function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="flex items-center space-x-3">
      <Avatar src={author.avatar} alt={author.name} />
      <div>
        <p className="font-bold text-gray-900">{author.name}</p>
        <p className="text-sm text-gray-500">@{author.username}</p>
      </div>
    </div>
  );
}