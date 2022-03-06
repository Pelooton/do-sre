<template>
  <div class="product-list pb-5 vh-100" v-if="likeList.length>0">
    <div class="table">
      <table class="w-100">
        <thead class="thead">
          <tr class="row m-0 text-light">
            <th class="col-6 col-lg-3">幣種</th>
            <th class="col-3 col-lg-3 text-start">最新價</th>
            <th class="col-3 col-lg-1 text-end">24h漲幅</th>
            <th class="col-lg-2 text-end dnone">24h成交量</th>
            <th class="col-lg-2 text-end dnone">市值</th>
            <th class="col-lg-1 text-end dnone"></th>
          </tr>
        </thead>
        <tbody class="tbody text-light">
          <tr v-for="i in likeList" :key="i.c" class="row m-0 py-3" @click.prevent="$router.