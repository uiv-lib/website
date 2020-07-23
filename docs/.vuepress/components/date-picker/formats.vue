<template>
  <section class="uiv">
    <date-picker v-model="date" format="yyyy/MMMM/dd"/>
    <br/>
    <alert type="info" v-show="date">You selected <b>{{date}}</b>.</alert>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        date: null
      }
    }
  }
</script>
