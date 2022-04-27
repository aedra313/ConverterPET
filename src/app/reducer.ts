import { createSlice } from '@reduxjs/toolkit'


 type JSONValue = string | number | boolean | { [x: string]: JSONValue } | any

 interface IRates {
  rate: JSONValue
  status: 'idle' | 'loading' | 'failed'
}

const initialState: IRates = {
  rate: [
    { ccy: 'USD', base_ccy: 'UAH', buy: '1', sale: '1' },
    { ccy: 'EUR', base_ccy: 'UAH', buy: '1', sale: '1' },
    { ccy: 'BTC', base_ccy: 'USD', buy: '1', sale: '1' },
  ],
  status: 'idle',
}

export const ratesSlice = createSlice({
  name: 'rate',
  initialState,
  reducers: {
    setRates: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.rate = action.payload
    },
  },
})

export const { setRates } = ratesSlice.actions

export default ratesSlice.reducer
