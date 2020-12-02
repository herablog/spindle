import * as React from 'react';

function SvgOwnd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.44 5.86c-1.14-2.1-3.62-3.33-6.27-3.33-3.45 0-5.82 1.34-7.87 3.95-1.09 1.38-2.62 5.23-.71 5.23.42 0 .6-.85.69-1.1.37-1 .54-1.52.9-2.16.79-1.37 1.84-2.12 3.1-2.91a6.885 6.885 0 015.04-.88c1.46.3 2.52 1.64 2.83 2.81.77 2.89-.06 5.99-1.62 8.6-.54.91-1.38 2.15-2.68 2.35-1.65.26-2.19-1.02-2.33-2.12-.42-3.29.6-6.87 2.69-9.58.37-.48-.04-1.14-.75-.98-.67.15-1.27.5-1.79.89-1.31.98-2.06 2.35-2.62 3.73-1.02 2.56-1.64 6.36.42 8.66 1.75 1.95 4.99 1.83 7.08.44 2.45-1.63 3.78-4.45 4.41-7.03.53-2.09.56-4.59-.52-6.57z" />
    </svg>
  );
}

export default SvgOwnd;
