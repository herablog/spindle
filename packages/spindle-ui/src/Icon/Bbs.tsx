import * as React from 'react';

function SvgBbs(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13 6.82a.504.504 0 01-.91.43c-.11-.25 0-.55.25-.67a.49.49 0 01.66.24zm3.34 6.16a.49.49 0 00-.37.6c.06.27.33.44.6.37a.49.49 0 00.37-.6.505.505 0 00-.6-.37zM22 7v10c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3zm-11.87 5.41l-4.79-1.44a.497.497 0 00-.62.34L3.28 16.1c-.08.26.07.54.34.62l4.79 1.44c.26.08.54-.07.62-.34l1.44-4.79a.497.497 0 00-.34-.62zm2.28.19l4.52-2.13c.25-.12.36-.42.24-.67l-2.13-4.52a.504.504 0 00-.67-.24L9.85 7.17c-.25.12-.35.42-.24.67l2.13 4.52c.12.25.42.36.67.24zm7.98 4.55l-1.13-4.87a.49.49 0 00-.6-.37l-4.87 1.13a.49.49 0 00-.37.6l1.13 4.87c.06.27.33.44.6.37l4.87-1.13c.26-.06.43-.33.37-.6zm-12.8-4.96a.497.497 0 00-.62.34c-.08.26.07.54.34.62.26.08.54-.07.62-.34a.514.514 0 00-.34-.62z"
      />
    </svg>
  );
}

export default SvgBbs;