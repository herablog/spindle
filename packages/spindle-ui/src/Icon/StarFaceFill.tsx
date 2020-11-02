import * as React from 'react';

function SvgStarFaceFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.76 8.53l-4.58-.52-1.91-4.19c-.5-1.09-2.05-1.09-2.55 0l-1.9 4.19-4.58.52c-1.19.13-1.67 1.61-.79 2.42l3.4 3.11-.92 4.51c-.24 1.18 1.02 2.09 2.06 1.5L12 17.8l4.01 2.27c1.04.59 2.3-.32 2.06-1.5l-.92-4.51 3.4-3.11c.88-.81.4-2.29-.79-2.42zM9 11.12c0-.48.39-.88.88-.88.48 0 .88.39.88.88 0 .48-.39.88-.88.88S9 11.61 9 11.12zm5.17 3.17c-.5.7-1.31 1.11-2.17 1.11-.86 0-1.67-.42-2.17-1.11a.507.507 0 01.11-.7c.23-.16.54-.11.7.12.62.87 2.09.87 2.72 0 .16-.23.47-.28.7-.12.22.16.27.48.11.7zM14.12 12c-.48 0-.88-.39-.88-.88 0-.48.39-.88.88-.88.48 0 .88.39.88.88s-.39.88-.88.88z" />
    </svg>
  );
}

export default SvgStarFaceFill;