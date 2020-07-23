<template>
  <section class="uiv">
    <btn type="primary" @click="open1=true">Open set of nested modals</btn>
    <!-- `append-to-body` not required here -->
    <modal v-model="open1" title="Modal 1" size="lg" ref="modal1">
      <p>This is a simple large modal.</p>
      <p>Click on the button below to open a nested modal.</p>
      <btn type="info" @click="open2=true">Open Modal 2</btn>
      <!-- `append-to-body` required, because this is a nested modal -->
      <modal v-model="open2" title="Modal 2" append-to-body ref="modal2">
        <p>This is a nested modal.</p>
        <btn type="info" @click="open3=true">Open Modal 3</btn>
        <!-- `append-to-body` required, because this is a nested modal -->
        <modal v-model="open3" title="Modal 3" size="sm" append-to-body ref="modal3">
          <p>This is another nested modal.</p>
        </modal>
      </modal>
    </modal>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        open1: false,
        open2: false,
        open3: false
      }
    }
  }
</script>
