<template>
  <ul>
    <li v-for="(i, key) in sortData" :key="key">1</li>
  </ul>
</template>

<script>
import cryptoStore from '@/stores/cryptoStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
export default {
  setup () {
    const cryptoData = cryptoStore()
    const { sortData } = storeToRefs(cryptoData)
    const { getData } = cryptoData
    cryptoData.getData()
    const datalist = ref([])
    setTimeout(() => {
      datalist.value = [...sortData.v