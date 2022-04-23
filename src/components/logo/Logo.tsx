import React from 'react'
import LogoIcon from './LogoIcon'
import s from "./Logo.module.scss";

export default function Logo(): JSX.Element {
    return (
  <div className={s.logoItem}>
    <LogoIcon className={s.img} />
    <p className={s.name}>ConCur</p>
  </div>
    )
}
