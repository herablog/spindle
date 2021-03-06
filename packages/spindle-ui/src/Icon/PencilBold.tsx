import * as React from 'react';

function SvgPencilBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M19.6 9.2l-4.9-4.9c-.2-.2-.2-.5 0-.7l1.8-1.8c.4-.4 1-.4 1.4 0L22.1 6c.4.4.4 1 0 1.4l-1.8 1.8c-.2.2-.5.2-.7 0zm-7-3.5l-8.1 8.1L3 19.7c-.2.7.5 1.4 1.2 1.2l5.8-1.4 8.1-8.1c.2-.2.2-.5 0-.7l-4.9-4.9c-.1-.3-.5-.3-.6-.1z" />
    </svg>
  );
}

export default SvgPencilBold;
