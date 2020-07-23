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
  @import "~bootstrap/less/variables";
  @import "~bootstrap/less/mixins";
  // fix appended to body dropdowns
  @import "~bootstrap/less/dropdowns";

  .uiv {
    @import (less) "~bootstrap/dist/css/bootstrap.min.css";

    .navbar {
      padding: 0;
      z-index: unset;
      top: unset;
      left: unset;
      right: unset;
      height: unset;
    }
  }

  table {
    display: table;
    width: 100%;

    th:first-child, td:first-child {
      width: 100px;
    }
  }
</style>
