import { useState } from 'react';

function Like() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      className="inline-flex gap-2 items-center min-w-[48px] min-h-[48px]"
      onClick={() => setIsLiked((like) => !like)}
      aria-pressed={isLiked}
      aria-label={isLiked ? 'Unlike' : 'Like'}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // fill="none"
          fill={isLiked ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </span>
      <span>{isLiked ? 'Liked' : 'Like'}</span>
    </button>
  );
}

export default Like;
