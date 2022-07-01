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
        