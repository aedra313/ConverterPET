import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import s from './RateCalculator.module.scss'
import { store } from '../../app/store'

export default function Converter(): JSX.Element {
  const [currency, setCurrency] = useState('uah')
  const [calculated, setCalculated] = useState<string[]>([])
  const [amount, setAmount] = useState(1)


  const { Option } = Select

  function converter(value: string): void {
    const array: string[] = []
    setCurrency(value === 'rur' ? '' : value)
    if (value === 'uah') {
      array.push(
        String(
          Math.round(amount * store.getState().reducer.rate[0].buy * 100) / 100
        ),
        String(
          Math.round(amount * store.getState().reducer.rate[1].buy * 100) / 100
        ),
        String(amount)
      )

      return setCalculated(array)
    }
    if (value === store.getState().reducer.rate[0].ccy) {
      array.push(
        String(amount),
        String(
          Math.round(
            ((amount * store.getState().reducer.rate[0].sale) /
              store.getState().reducer.rate[1].buy) *
              100
          ) / 100
        ),
        String(Math.round(store.getState().reducer.rate[0].sale * 100) / 100)
      )
      return setCalculated(array)
    }
    if (value === store.getState().reducer.rate[1].ccy) {
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
      return setCalculated(array)
    }
    array.push('Геть з України', 'москаль', 'некрасівий')
    return setCalculated(array)
  }

  useEffect(() => {
    converter(currency)
    setTimeout(() => {
      converter(currency)
    }, 2000)
  }, [])

  return (
    <>
      <p className={s.headline}>Current rates</p>
      <div className={s.selectDecor}>
        <p>Select the default currency</p>
        <Select
          defaultValue="uah"
          bordered={false}
          onChange={(value) => converter(value)}
          dropdownClassName={s.dropdown}
          style={{
            width: '190px',
            borderBottom: '1px solid #08B953',
            marginLeft: '17px',
            marginTop: '-5px',
            color: 'rgba(33, 37, 35, 0.7)',
          }}
        >
          <Option className={s.selectOption} value="USD">
            USD{' '}
          </Option>
          <Option className={s.selectOption} value="EUR">
            EUR
          </Option>
          <Option className={s.selectOption} value="uah">
            UAH
          </Option>
          <Option className={s.selectOption} value="rur">
            RUR
          </Option>
        </Select>
      </div>
      <table className={s.rateTable}>
        <tbody>
          <tr>
            <td className={s.currencyColumn}>USD</td>
            <td className={s.valueColumn}>
              {calculated[0]} {currency}
            </td>
          </tr>
          <tr>
            <td className={s.currencyColumn}>EUR</td>
            <td className={s.valueColumn}>
              {calculated[1]} {currency}
            </td>
          </tr>
          <tr>
            <td className={s.currencyColumn}>UAH</td>
            <td className={s.valueColumn}>
              {calculated[2]} {currency}
            </td>
          </tr>
          <tr>
            <td className={s.currencyColumn}>RUR</td>
            <td className={s.valueColumn}>Less than toilet paper...</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
