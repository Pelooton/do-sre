<template>
  <div id="trade" ref="chartContainer" style="width: 90%; height: 25rem"></div>
</template>

<script>
import { init, klineChart } from 'klinecharts'
import klineStore from '@/stores/klineStore'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
export default {
  setup (props, { emit }) {
    const route = useRoute()
    const coin = ref(route.para