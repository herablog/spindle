import * as React from 'react';

function SvgEmbed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M4.44 11.7c-.12.17-.12.41 0 .58l3.38 4.75c.32.45.21 1.07-.24 1.39-.17.14-.38.2-.58.2-.31 0-.62-.15-.82-.42L2.8 13.45c-.62-.87-.62-2.03 0-2.9L6.19 5.8c.32-.45.94-.55 1.4-.23.45.32.55.95.23 1.39L4.44 11.7zm16.75-1.14L17.81 5.8a.996.996 0 00-1.39-.24c-.45.32-.56.94-.24 1.39l3.38 4.75c.12.17.12.41 0 .58l-3.38 4.74a.994.994 0 00.23 1.39c.18.12.38.19.58.19.31 0 .62-.15.82-.42l3.38-4.74c.62-.85.62-2.02 0-2.88zm-6.16.44h-2V9c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z" />
    </svg>
  );
}

export default SvgEmbed;
