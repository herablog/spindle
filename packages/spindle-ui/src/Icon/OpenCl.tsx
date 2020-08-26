import * as React from 'react';

function SvgOpenCl(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 7.99H4c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1zm0 4.66H4c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1zm4.91 1.08a.996.996 0 00-1.41 0l-4.88 4.88-2.36-2.35a.996.996 0 10-1.41 1.41l3.06 3.05c.2.2.45.29.71.29.26 0 .51-.1.71-.29l5.59-5.59a.993.993 0 00-.01-1.4zM4 15.32h3.61c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z"
      />
    </svg>
  );
}

export default SvgOpenCl;
