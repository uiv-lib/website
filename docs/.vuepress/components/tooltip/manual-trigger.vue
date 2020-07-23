<template>
  <section class="uiv">
    <tooltip text="Static tooltip content goes here" trigger="manual" v-model="show">
      <btn>You Can't Trigger Tooltip Here...</btn>
    </tooltip>
    <hr/>
    <btn type="primary" @click="show = !show">Toggle Tooltip</btn>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>
