import React, { useEffect, useState } from 'react'
import { Button, Layout } from 'antd'
import axios, { AxiosResponse } from 'axios'
import s from './Body.module.scss'
import Logo from './logo/Logo'
import SocialMedia from './socialMedia/SocialMedia'
import Converter from './converter/Converter'
import RateCalculator from './rateCalculator/RateCalculator'
import { store } from '../app/store'
import { setRates } from '../app/reducer'

type JSONValue = string | number | boolean | { [x: string]: JSONValue }
interface ServerResponse {
  response: any
  value: any
  data: Array<JSONValue>
}
export default function Body(): JSX.Element {
  const [isMobile, setMobile] = useState(false);
  const [toggle, setToggle] = useState(true)
  const TABLET_WIDTH = 1440

  // Window resize Handler

  const resizeHandler = (): void => {
    setMobile(window.innerWidth < TABLET_WIDTH)
  }
  useEffect(() => {
    setMobile(window.innerWidth < TABLET_WIDTH)
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])
  const [checkData, setCheckData] = useState(true)

  // Axios request

  useEffect(() => {
    if (checkData) {
      axios
        .get<ServerResponse>('https://demo0493226.mockable.io/')
        .then((response: AxiosResponse<ServerResponse>) => {
          store.dispatch(setRates(response.data))
        })
        .catch((error) => {
          console.log(error)
        })
      setCheckData(false)
    } else {
      console.log('Does not fetch')
    }

    return () => console.log('unmounting')
  }, [])

    function pageHandler():void {
      setToggle(!toggle)
    }

  return (
    <Layout className={s.body}>
      <header className={s.header}>
        {!isMobile && <SocialMedia className={s.socialMedia} />}
        <Logo />
      </header>
      <main className={s.content}>
          {(isMobile || toggle) && <Converter />}
        {(isMobile || !toggle) &&  <RateCalculator /> }

        {!isMobile && (
          <Button type="primary" className={s.changePage} onClick={pageHandler}>
            {' '}
            Switch page
          </Button>
        )}
      </main>
      {isMobile && (
        <footer className={s.footer}>
          <div className={s.footerContentWrap}>
            <Logo />
            <p className={s.credits}>
              Created By Vladyslav O.
              <br />
              PET project
            </p>
          </div>
          {isMobile && <SocialMedia className={s.socialMedia} />}
        </footer>
      )}
    </Layout>
  )
}
