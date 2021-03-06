import * as React from "react";
import { SVGProps } from "react";

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M95 96.5h-8v3.5H41V87l4-3.26v-8.518L33 85v23h62V96.5ZM74.727 51 87 41V28H41v3h-8V20h62v23l-9.818 8H74.727Z"
      fill="currentColor"
    />
    <path
      d="M84.5 30.5h-12v13h9v-4.435h3V30.5ZM84.5 88v8.5h-12V53h9v35h3ZM44 39.065V30.5h12v44.278l-9 7.227v-42.94h-3ZM44 96.5h12V77l-9 7.5v3.435h-3V96.5Z"
      fill="currentColor"
    />
    <path d="M45 43H34v7.5h3v29l8-6.5V43Z" fill="currentColor" />
    <path
      d="M48 60h29.319a4 4 0 0 1 0 8H47.5a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-.25a2.75 2.75 0 0 1-2.75-2.75v-13.5a2.75 2.75 0 1 1 5.5 0V57a3 3 0 0 0 3 3ZM70 77H56v8h14v-8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M89.856 47.21A12.505 12.505 0 0 0 81 43.01V43H58v8h22.5v.01a4.49 4.49 0 0 1 3.13 1.272l6.226-5.072ZM76.682 60H80.5v-.01a4.49 4.49 0 0 0 4.059-6.408l6.276-5.114a12.505 12.505 0 0 1 1.214 11.815A12.5 12.5 0 0 1 89.665 64 12.5 12.5 0 0 1 83 84.748v-8.52a4.488 4.488 0 0 0-2.5-8.217V68H73v-5l3.682-3Zm-2.523 0H73v.944L74.16 60Z"
      fill="currentColor"
    />
  </svg>
);

export default Icon;
