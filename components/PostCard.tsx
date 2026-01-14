
import React, { useState } from 'react';
import { ThreadPost } from '../types';

interface PostCardProps {
  post: ThreadPost;
  index: number;
  total: number;
}

const PostCard: React.FC<PostCardProps> = ({ post, index, total }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(post.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-4 hover:border-zinc-700 transition-colors">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold">
            {index + 1}
          </div>
          {index < total - 1 && (
            <div className="w-0.5 flex-1 bg-zinc-800 my-2"></div>
          )}
        </div>
        <div className="flex-1">
          <p className="text-zinc-100 whitespace-pre-wrap leading-relaxed">
            {post.content}
          </p>
          <div className="mt-4 flex items-center justify-between text-zinc-500 text-sm">
            <span>{index + 1} / {total}</span>
            <button 
              onClick={handleCopy}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-1"
            >
              {copied ? (
                <span className="text-green-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
