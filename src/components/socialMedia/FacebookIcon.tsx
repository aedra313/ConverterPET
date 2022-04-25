import React, { HTMLAttributes } from 'react'

export default function FacebookIcon({
  className,
}: HTMLAttributes<HTMLAnchorElement>): JSX.Element {
  return (
    <svg
      width="22"
      height="22"
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21ZM11 21V9.57143C11 7.99347 12.2792 6.71429 13.8571 6.71429H14.5714M7.42857 12.4286H14.5714"
        stroke="#27AE60"
      />
    </svg>
  )
}
