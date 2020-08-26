import * as React from 'react';

function SvgReblog(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 9.98h2.04c.44 0 .66.54.36.85l-3.04 3.04c-.2.2-.51.2-.71 0l-3.04-3.04c-.32-.31-.1-.85.35-.85H18V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1s-1-.45-1-1V7c0-1.65 1.35-3 3-3h10c1.65 0 3 1.35 3 3v2.98zM18 16c0-.55.45-1 1-1s1 .45 1 1v1c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3v-2.98H1.95c-.44 0-.66-.53-.35-.85l3.04-3.04c.2-.2.51-.2.71 0l3.04 3.04c.32.31.1.85-.35.85H6V17c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1z"
      />
    </svg>
  );
}

export default SvgReblog;
