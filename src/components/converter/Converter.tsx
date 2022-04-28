import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import s from './Converter.module.scss'
import { store } from '../../app/store'

type IsMobileProps = {
  isMobile: boolean
}

export default function Converter({ isMobile }: IsMobileProps): JSX.Element {
  const [userInput, setUserInput] = useState('')
  // const [amount, setAmount] = useState<number>(1)
  // const [calculated, setCalculated] = useState<string[]>([])
  // const [curr1, setCurr1] = useState('')
  const [currency2, setCurrency2] = useState('')
  const [convertedResult, setConvertedResult] = useState('')

  const supportedCurrencies = ['USD', 'EUR', 'UAH', 'RUR']

  async function inputHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<string> {
    const enteredAmount = event.target.value
    await setUserInput(enteredAmount)
    return userInput
  }
  console.log(userInput)
  let amount: number

  function getAmount(): number {
    const inputArr = userInput.split('')
    console.log(inputArr)
    const numArray = []
    // @ts-ignore
    // eslint-disable-next-line guard-for-in
    for (const i in inputArr) {
      // @ts-ignore
      if (inputArr[i] >= 0 && inputArr[i] !== ' ') {
        console.log(inputArr[i])
        numArray.push(inputArr[i])
        console.log(numArray)
        console.log(numArray)
      }
    }
    console.log(numArray.join(''))
    amount = parseInt(numArray.join(''), 10)
    console.log(amount)
    return amount
  }
  let curr1: string
  let curr2: string
  function getCurr1(): string {
    curr1 = [
      userInput[userInput.length - 13],
      userInput[userInput.length - 12],
      userInput[userInput.length - 11],
    ]
      .join('')
      .toUpperCase()
    return curr1
  }

  function getCurr2(): string {
    curr2 = [
      userInput[userInput.length - 4],
      userInput[userInput.length - 3],
      userInput[userInput.length - 2],
    ]
      .join('')
      .toUpperCase()
    setCurrency2(curr2)
    return curr2
  }

  function currencyValidator(): void {
    if (
      !supportedCurrencies.includes(curr1) ||
      !supportedCurrencies.includes(curr2)
    ) {
      console.log('Validator exist fail')
      return alert("This currency doesn't exist or isn't supported yet.")
    }
    if (curr1 === supportedCurrencies[3] || curr2 === supportedCurrencies[3]) {
      console.log('Validator rur fail')
      return alert('Русский военный корабль, иди нахуй')
    }
    if (curr1 === curr2) {
      console.log('Validator sameCurr fail')
      return alert(`Нельзя просто так взять и перевести ${curr1} в ${curr2}.`)
    }
    return console.log('validation successful')
  }

  let calculated: string[]

  function converter(): string[] {
    const array: string[] = []
    console.log(amount)
    if (curr1 === 'UAH') {
      array.push(
        String(
          Math.round((amount / store.getState().reducer.rate[0].buy) * 100) /
            100
        ),
        String(
          Math.round((amount / store.getState().reducer.rate[1].buy) * 100) /
            100
        ),
        String(amount)
      )
      console.log(calculated)
      calculated = array
      return calculated
    }
    if (curr1 === store.getState().reducer.rate[0].ccy) {
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
      console.log(array)
      calculated = array
      return calculated
    }
    if (curr1 === store.getState().reducer.rate[1].ccy) {
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
      console.log(calculated)
      calculated = array
      return calculated
    }
    array.push(
      'Руський воєнный корабль, йди нахуй',
      'Руський воєнный корабль, йди нахуй',
      'Руський воєнный корабль, йди нахуй'
    )
    console.log(calculated)
    calculated = array
    return calculated
  }

  function returnValue(): string {
    const index = supportedCurrencies.findIndex(
      (currency) => currency === curr2
    )
    setConvertedResult(() => calculated[index])
    return convertedResult
  }

  function submitHandler(): string {
    getAmount()
    getCurr1()
    getCurr2()
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
        <p className={s.result}>
          {convertedResult} {currency2}
        </p>
      </div>
    </div>
  )
}
