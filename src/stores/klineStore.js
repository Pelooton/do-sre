import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('info-data', {
  state: () => {
    return {
      dataLi