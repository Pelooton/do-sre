
<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <div class="intro">
      <!-- 1.hot -->
      <div class="hot">
        <div class="top d-flex justify-content-between">
          <h2 class="text-light m-0">熱門虛擬貨幣</h2>
          <router-link :to="{name: 'market'}" class="more">查看更多&ensp;<i class="bi bi-arrow-right"></i></router-link>
        </div>
        <div class="crypto-list mt-5">
          <table class="table table-borderless mt-2 p-3">
            <thead class="thead">
              <tr>
                <th class="catecory col-6 col-md-4 text-start">幣種</th>
                <th class="last-price col-3 col-md-3 text-start">最新價</th>
                <th class="change col-3 col-md-2 text-center">24h漲跌</th>
                <th class="market-cap col-md-3 text-end dnone">市值</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr v-for="i in topTenMC" :key="i.c" class="text-light">
                <td class="title col-6 col-md-4 d-flex">
                  <div><img :src="`//logo.chainbit.xyz/${i.b.toLowerCase()}`" class="logo" alt=""></div>
                  <div class="mx-2">{{i.an}}</div>
                  <div class="">{{i.b}}</div>
                </td>
                <td class="last-price col-3 col-md-3 text-start">${{i.c}}</td>
                <td class="change col-3 col-md-2 text-center" :class="{'text-danger':i.percentChange<0, 'text-success':i.percentChange>0}">{{i.percentChange}}%</td>
                <td class="market-cap col-md-3 text-end dnone">${{$filters.currency(i.totalMC / 1000000)}}M</td>
              </tr>