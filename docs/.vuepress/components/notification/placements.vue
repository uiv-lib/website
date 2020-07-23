<template>
  <section class="uiv">
    <btn @click="notify('top-right')" type="primary">Top Right (Default)</btn>
    <btn @click="notify('bottom-right')" type="primary">Bottom Right</btn>
    <btn @click="notify('bottom-left')" type="primary">Bottom Left</btn>
    <btn @click="notify('top-left')" type="primary">Top Left</btn>
  </section>
</template>
<script>
  export default {
    methods: {
      notify (placement) {
        this.$notify({
          placement, // equal to `placement: placement` in ES6
          title: 'Title',
          content: `This is a notify msg at ${placement}.`
        })
      }
    }
  }
</script>
