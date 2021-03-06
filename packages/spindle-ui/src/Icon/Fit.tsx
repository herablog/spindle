import * as React from 'react';

function SvgFit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M21.58 10.94L18.4 7.76a.996.996 0 10-1.41 1.41L18.82 11H5.18L7 9.18a.996.996 0 10-1.41-1.41l-3.18 3.18c-.58.58-.58 1.54 0 2.12l3.18 3.18c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 000-1.41L5.18 13h13.63l-1.82 1.82a.996.996 0 00.71 1.7c.26 0 .51-.1.71-.29l3.18-3.18c.58-.57.58-1.53-.01-2.11z" />
    </svg>
  );
}

export default SvgFit;
