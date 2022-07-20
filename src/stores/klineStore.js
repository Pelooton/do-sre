import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('info-data', {
  state: () => {
    return {
      dataList: [],
      option: {
        // 網格線
        grid: {
          show: false
        },
        candle: {
          tooltip: {
            showRule: 'follow_cross',
            labels: ['', '開盤:', '收盤:', '最高:', '最低:', '成交量:'],
            text: {
              size: 12,
              color: '#838e9e',
              marginLeft: 0,
              marginRight: 6
            }
          }
        },
      