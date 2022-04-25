import React from 'react'
import { Layout } from 'antd'
import s from './Body.module.scss'
import Logo from './logo/Logo'
import SocialMedia from "./socialMedia/SocialMedia";
import Converter from "./converter/Converter";
import RateCalculator from "./rateCalculator/RateCalculator"

const { Header, Footer, Content } = Layout

export default function Body(): JSX.Element {
  return (
    <Layout className={s.body}>
      <header className={s.header}>
        <Logo />
      </header>
      <main className={s.content}>
          <Converter />
          <RateCalculator />
      </main>
      <footer className={s.footer}>
        <div className={s.footerContentWrap}>
          <Logo />
          <p className={s.credits}>
            Created By Vladyslav O.
            <br />
            PET project
          </p>
        </div>
        <SocialMedia className={s.socialMedia} />
      </footer>
    </Layout>
  )
}
