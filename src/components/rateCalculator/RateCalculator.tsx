import React from 'react'
import { Select } from 'antd'
import s from './RateCalculator.module.scss'

export default function Converter(): JSX.Element {
  const { Option } = Select
  /*  function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }
*/
  return (
    <>
      <p className={s.headline}>Current rates</p>
      <div className={s.selectDecor}>
        <p>Select the default currency</p>
        <Select
          defaultValue="uah"
          bordered={false}
          dropdownClassName={s.dropdown}
          style={{
            width: '190px',
            borderBottom: '1px solid #08B953',
            marginLeft: '17px',
            marginTop: '-5px',
              color: "rgba(33, 37, 35, 0.7)",


          }} /* onChange={handleChange} */
        >
          <Option className={s.selectOption} value="usd">USD</Option>
          <Option className={s.selectOption} value="eur">EUR</Option>
          <Option className={s.selectOption} value="uah">UAH</Option>
          <Option className={s.selectOption} value="rur">RUR</Option>
        </Select>
      </div>
      <table className={s.rateTable}>
        <tbody>
          <tr>
            <td className={s.currencyColumn}>USD</td>
            <td className={s.valueColumn}>20 UAH</td>
          </tr>
          <tr>
            <td className={s.currencyColumn}>EUR</td>
            <td className={s.valueColumn}>20 UAH</td>
          </tr>
          <tr>
            <td className={s.currencyColumn}>UAH</td>
            <td className={s.valueColumn}>20 UAH</td>
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
