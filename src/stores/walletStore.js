import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('wallet-data', {
  state: () => {
    return {
      stockList: JSON.parse(localStorage.getItem('stock')) || [],
      dataList: []
    }
  },
  getters: {
    currentStock: (state) => {
      const filterList = state.dataList.filter(i => i.s.slice(-4) === 'USDT')
      const tempList = state.stockList.map(function (i) {
        const index = filterList.findIndex(j => j.b === i.abb)
        i.price = Number(filterList[index].c)
        return i
      })
      return tempList
    },
    currentValue () {
      const result = this.currentStock.reduce((total, current) => {
        // eslint-disable-next-line no-return-assign
        return total = total + current.price
      }, 0)
      return result
    },
    covertToBtc (state) {
      const btcPrice = Number(state.dataList.filter(i => i.s === 'BTCUSDT')[0].c)
      const btcValue = (this.currentValue / btcPrice).toFixed(10)
      return 