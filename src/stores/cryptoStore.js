
import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('crypto-datalist', {
  state: () => ({
    dataList: []
  }),
  getters: {
    // 篩選出USDT幣
    cryptoUSDT: (state) => {
      const tempList = state.dataList.filter((i) => i.s.slice(-4) === 'USDT')
      tempList.forEach((i) => {
        // 計算並寫入總市值
        const totalMC = i.cs * i.c
        i.totalMC = totalMC