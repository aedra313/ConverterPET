import React, {useEffect, useState} from 'react'
import { Layout } from 'antd'
import axios, {AxiosResponse} from "axios";
import s from './Body.module.scss'
import Logo from './logo/Logo'
import SocialMedia from './socialMedia/SocialMedia'
import Converter from './converter/Converter'
import RateCalculator from './rateCalculator/RateCalculator'
import {store} from "../app/store";
import {setRates} from "../app/reducer";


export default function Body(): JSX.Element {

    const [checkData , setCheckData ] = useState(true)

    type JSONValue = string | number  | boolean  | { [x: string]: JSONValue };
    interface ServerResponse {
        response: any,
        value: any,
        data: Array<JSONValue>
    }

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
