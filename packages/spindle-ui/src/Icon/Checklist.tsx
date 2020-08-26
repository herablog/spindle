import * as React from 'react';

function SvgChecklist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17.98H6c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-2.21-1.79-4-4-4H6c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4h4c.55 0 1-.45 1-1s-.45-1-1-1zm7.7-7.81a1 1 0 00.17-1.4 1 1 0 00-1.4-.17l-3.22 2.54c-.73.57-1.75.57-2.48 0L7.54 8.6a.992.992 0 00-1.4.17 1 1 0 00.16 1.4l3.22 2.54c.73.57 1.6.86 2.48.86.87 0 1.75-.29 2.48-.86l3.22-2.54zm4.13 5.52a.996.996 0 111.41 1.41l-5.59 5.59c-.2.19-.45.29-.71.29-.26 0-.51-.1-.71-.29l-3.06-3.05c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0l2.36 2.35 4.88-4.88z"
      />
    </svg>
  );
}

export default SvgChecklist;
