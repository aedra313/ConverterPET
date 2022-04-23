import React from 'react'
import { Input, Button } from 'antd'
import s from './Converter.module.scss'

export default function Converter(): JSX.Element {
  return (
    <>
      <p className={s.headline}>Best converter ever</p>
      <div className={s.wrap}>
        <p className={s.slogan}>
          Type in your request
          <br />
          We cover all major currencies
        </p>
        <Input.Group compact>
          <Input
            className={s.field}
            style={{ width: '151px' }}
            placeholder="“15 usd” in “uah”"
          />
          <Button type="primary" className={s.converterBtn}>
            {' '}
          </Button>
        </Input.Group>
        <p className={s.inputSubscript}>Type your request in the field above</p>
      </div>
    </>
  )
}
