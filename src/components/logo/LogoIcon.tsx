import React, { HTMLAttributes } from 'react'

export default function LogoIcon({
  className,
}: HTMLAttributes<HTMLAnchorElement>): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="6.59973" height="23.0444" rx="3.29987" fill="#6FCF97" />
      <path
        d="M9.23975 10.335C9.23975 8.67666 10.5841 7.33234 12.2424 7.33234C13.9007 7.33234 15.245 8.67666 15.245 10.335V15.4494C15.245 17.1077 13.9007 18.4521 12.2424 18.4521C10.5841 18.4521 9.23975 17.1078 9.23975 15.4494V10.335Z"
        fill="#27AE60"
      />
      <rect
        x="9.23975"
        y="1.04749"
        width="6.00525"
        height="5.55987"
        rx="2.77993"
        fill="#27AE60"
      />
      <rect
        x="17.9948"
        y="8.61853"
        width="6.00524"
        height="5.55987"
        rx="2.77993"
        fill="#6FCF97"
      />
    </svg>
  )
}
