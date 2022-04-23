import React from 'react'
import { Layout } from 'antd'
import s from './Body.module.scss'
import Logo from './logo/Logo'
import SocialMedia from "./socialMedia/SocialMedia";
import Converter from "./converter/Converter";

const { Header, Footer, Content } = Layout

export default function Body(): JSX.Element {
  return (
    <Layout className={s.body}>
      <Header className={s.header}>
        <Logo />
      </Header>
      <Content className={s.content}>
          <Converter />
      </Content>
      <Footer className={s.footer}>
        <div className={s.footerContentWrap}>
          <Logo />
          <p className={s.credits}>
            Created By Vladyslav O.
            <br />
            PET project
          </p>
        </div>
        <SocialMedia className={s.socialMedia} />
      </Footer>
    </Layout>
  )
}
