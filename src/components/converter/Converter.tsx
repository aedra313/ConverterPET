import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import s from './Converter.module.scss'
import { store } from '../../app/store'

type IValidated = 'correct' | 'RUR' | 'nonExisting' | 'equivalent' | 'empty'

let amount: number
let calculated: string[] = []
let validated: IValidated

const supportedCurrencies = ['USD', 'EUR', 'UAH', 'RUR']

export default function Converter(): JSX.Element {
  const [userInput, setUserInput] = useState('')
  const [convertedResult, setConvertedResult] = useState('')

  const CURRENCIES = {
    curr1: [
      userInput[userInput.length - 13],
      userInput[userInput.length - 12],
      userInput[userInput.length - 11],
    ]
      .join('')
      .toUpperCase(),
    curr2: [
      userInput[userInput.length - 4],
      userInput[userInput.length - 3],
      userInput[userInput.length - 2],
    ]
      .join('')
      .toUpperCase(),
  }

  const FAIL_RESULT = {
    empty: '',
    rur: 'Руський воєнный корабль, йди нахуй',
    equivalent: `You can't convert ${CURRENCIES.curr1} in ${CURRENCIES.curr2}`,
    nonExisting: "we don't know this one, sorry :(",
    unknown: 'Unknown error',
  }

  async function inputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<string> {
    const enteredAmount = event.target.value
    await setUserInput(enteredAmount)
    return userInput
  }

  function getAmount(): number {
    const inputArr = userInput.split('')
    const numArray = []
    // @ts-ignore
    // eslint-disable-next-line guard-for-in
    for (const i in inputArr) {
      // @ts-ignore
      if (inputArr[i] >= 0 && inputArr[i] !== ' ') {
        numArray.push(inputArr[i])
      }
    }
    amount = parseInt(numArray.join(''), 10)
    return amount
  }

  function currencyValidator(): IValidated {
    if (
      !supportedCurrencies.includes(CURRENCIES.curr1) ||
      !supportedCurrencies.includes(CURRENCIES.curr2)
    ) {
      validated = 'nonExisting'
      return validated
    }
    if (
      CURRENCIES.curr1 === supportedCurrencies[3] ||
      CURRENCIES.curr2 === supportedCurrencies[3]
    ) {
      validated = 'RUR'
      return validated
    }
    if (CURRENCIES.curr1 === '' || CURRENCIES.curr2 === '') {
      validated = 'empty'
      return validated
    }
    if (CURRENCIES.curr1 === CURRENCIES.curr2) {
      validated = 'equivalent'
      return validated
    }
    validated = 'correct'
    return validated
  }

  function converter(): string[] {
    const array: string[] = []
    if (CURRENCIES.curr1 === 'UAH') {
      array.push(
        String(
          Math.round((amount / store.getState().reducer.rate[0].buy) * 100) /
            100
        ),
        String(
          Math.round((amount / store.getState().reducer.rate[1].buy) * 100) /
            100
        )
      )
      calculated = array
      return calculated
    }
    if (CURRENCIES.curr1 === store.getState().reducer.rate[0].ccy) {
      array.push(
        String(amount),
        String(
          Math.round(
            ((amount * store.getState().reducer.rate[0].sale) /
              store.getState().reducer.rate[1].buy) *
              100
          ) / 100
        ),
        String(
          Math.round(amount * store.getState().reducer.rate[0].sale * 100) / 100
        )
      )
      calculated = array
      return calculated
    }
    if (CURRENCIES.curr1 === store.getState().reducer.rate[1].ccy) {
      array.push(
        String(
          Math.round(
            ((amount * store.getState().reducer.rate[1].sale * amount) /
              store.getState().reducer.rate[0].buy) *
              100
          ) / 100
        ),
        String(amount),
        String(
          Math.round(amount * store.getState().reducer.rate[1].sale * 100) / 100
        )
      )
      calculated = array
      return calculated
    }
    array.push(
      'Unknown error',
      'Unknown error',
      'Unknown error'
    )
    calculated = array
    return calculated
  }

  function returnValue(): string {
    const index = supportedCurrencies.findIndex(
      (currency) => currency === CURRENCIES.curr2
    )
    setConvertedResult(() => `${calculated[index]} ${CURRENCIES.curr2}`)

    setConvertedResult(() => 'Unknown error')
    // eslint-disable-next-line no-unused-expressions
    validated === 'RUR' && setConvertedResult(() => FAIL_RESULT.rur)
    // eslint-disable-next-line no-unused-expressions
    validated === 'empty' && setConvertedResult(() => FAIL_RESULT.empty)
    // eslint-disable-next-line no-unused-expressions
    validated === 'nonExisting' &&
      setConvertedResult(() => FAIL_RESULT.nonExisting)
    // eslint-disable-next-line no-unused-expressions
    validated === 'equivalent' &&
      setConvertedResult(() => FAIL_RESULT.equivalent)
    // eslint-disable-next-line no-unused-expressions
    validated === 'correct' &&
      setConvertedResult(() => `${calculated[index]} ${CURRENCIES.curr2}`)

    return convertedResult
  }

  function submitHandler(): string {
    getAmount()
    currencyValidator()
    converter()
    returnValue()
    return convertedResult
  }

  return (
    <div>
      <p className={s.headline}>Best converter ever</p>
      <div className={s.wrap}>
        <p className={s.slogan}>
          Type in your request
          <br />
          We cover all major currencies
        </p>
        <Form name="customInput">
          <Form.Item
            name="input"
            rules={[
              {
                required: true,
                pattern:
                  // eslint-disable-next-line max-len
                  /(")[0-9]{1,6} [UAHuahRrEeSsDd]{3}(" in ")[UAHuahRrEeSsDd]{3}(")/,
                message: 'Example: "15 usd" in "uah"',
              },
            ]}
          >
            <Input
              className={s.field}
              style={{ width: '200px' }}
              placeholder="“15 usd” in “uah”"
              defaultValue=""
              maxLength={20}
              onChange={inputHandler}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={submitHandler}
              className={s.converterBtn}
            >
              {' '}
            </Button>
          </Form.Item>
        </Form>
        <p className={s.inputSubscript}>Type your request in the field above</p>
        <p className={s.result}>{convertedResult}</p>
      </div>
    </div>
  )
}
