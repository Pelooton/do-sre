import { defineStore } from 'pinia'
import axios from 'axios'
import statusStore from './statusStore'
const status = statusStore()

export default defineStore('wallet-data'