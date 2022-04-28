import React, { HTMLAttributes } from 'react'
import s from './SocialMedia.module.scss'
import TwitterIcon from './TwitterIcon'
import FacebookIcon from './FacebookIcon'

export default function SocialMedia({
  className,
}: HTMLAttributes<HTMLAnchorElement>): JSX.Element {
  return (
    <div className={`${s.socialWrap} ${className}`}>
      <a href="https://twitter.com" title="Our Twittah">
        <TwitterIcon className={s.twitterIcon} />
      </a>
      <a href="https://www.facebook.com/" title="Our Facebook">
        <FacebookIcon className={s.facebookIcon}/>
      </a>
    </div>
  )
}
