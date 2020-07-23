<template>
  <section class="uiv">
    <popover title="Title" trigger="manual" v-model="show">
      <btn>You Can't Trigger Popover Here...</btn>
      <template slot="popover">
        <p>Popover content</p>
      </template>
    </popover>
    <hr/>
    <btn type="primary" @click="show = !show">Toggle Popover</btn>
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
