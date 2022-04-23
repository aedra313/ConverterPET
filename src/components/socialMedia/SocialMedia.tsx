import React, { HTMLAttributes } from 'react'
import s from './SocialMedia.module.scss'
import TwitterIcon from './TwitterIcon'
import FacebookIcon from './FacebookIcon'

export default function SocialMedia({
  className,
}: HTMLAttributes<HTMLAnchorElement>): JSX.Element {
  return (
    <div className={`${s.socialWrap} ${className}`}>
      <TwitterIcon className={s.twitter} />
      <FacebookIcon />
    </div>
  )
}
