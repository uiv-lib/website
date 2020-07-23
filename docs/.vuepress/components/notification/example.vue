<template>
  <section class="uiv">
    <btn @click="notify" type="primary">Simplest Notification</btn>
    <btn @click="notify2" type="primary">No Auto-dismiss Notification</btn>
  </section>
</template>
<script>
  export default {
    methods: {
      // example with callback
      // pass a String as the notification content
      notify () {
        this.$notify('This is a simple notify msg.', () => {
          // callback after dismissed
          console.log('dismissed')
        })
      },
      // example with Promise and options
      notify2 () {
        this.$notify({
          title: 'Title',
          content: 'This notification will not dismiss automatically.',
          duration: 0
        }).then(() => {
          // resolve after dismissed
          console.log('dismissed')
        })
      }
    }
  }
</script>
