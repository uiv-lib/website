<template>
  <ParentLayout/>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue'
  import * as uiv from 'uiv'
  import Vue from 'vue'

  Vue.use(uiv)

  export default {
    name: 'Layout',
    components: {
      ParentLayout
    }
  }
</script>

<style lang="less">
  .uiv {
    @import (less) "~bootstrap/dist/css/bootstrap.min.css";
  }

  table {
    display: table;
    width: 100%;

    th:first-child, td:first-child {
      width: 100px;
    }
  }
</style>
