<template>
  <div class="py-4">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end m-0">
        <li class="page-item me-1 disabled">
          <a class="page-link" :class="{'disabled': pagination.currentPage===1}"><i class="bi bi-caret-left-fill"></i></a>
        </li>
        <li class="page-item mx-1" v-for="page in pagination.totalPages" :key="page"
       