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
      const filterList = state.dataList.filter(i => i.s.slice(-4) === 'USDT'