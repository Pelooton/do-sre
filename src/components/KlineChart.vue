<template>
  <div id="trade" ref="chartContainer" style="width: 90%; height: 25rem"></div>
</template>

<script>
import { init, klineChart } from 'klinecharts'
import klineStore from '@/stores/klineStore'
import { ref } from 'vue'
import { sto