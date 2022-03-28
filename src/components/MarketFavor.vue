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
          <tr v-for="i in likeList" :key="i.c" class="row m-0 py-3" @click.prevent="$router.push(`/trade/USDT_${i.b}`)">
            <td class="title col-6 col-lg-3 d-flex">
              <div><img :src="`//logo.chainbit.xyz/${i.b.toLowerCase()}`" class="logo img-fluid" alt=""></div>
              <div class="ms-2 dnone">{{i.an}}</div>
              <div class="ms-2">{{i.b}}</div>
              <button class="btn btn-sm border-0" @click.stop="toggleLike(i)">
                <i class="bi bi-star-fill" v-if="likeId.includes(i.b)"></i>
                <i class="bi bi-star" v-else></i>
              </button>
            </td>
            <td class="last-price col-3 col-lg-3 text-start">${{i.c}}</td>
            <td class="col-lg-1 col-3 text-end" :class="{'down':i.percentChange<0, 'up':i.percentChange>0}">{{i.percentChange}}%</td>
            <td class="volume col-lg-2 text-end dnone">${{$filters.currency(i.qv / 1000000)}}M</td>
   