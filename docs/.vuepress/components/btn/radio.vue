<template>
  <section class="uiv">
    <btn-group>
      <btn input-type="radio" input-value="1" v-model="model">Radio 1</btn>
      <btn input-type="radio" input-value="2" v-model="model">Radio 2</btn>
      <btn input-type="radio" input-value="3" v-model="model">Radio 3</btn>
      <btn input-type="radio" input-value="4" v-model="model" disabled>Radio 4 (Disabled)</btn>
    </btn-group>
    <hr/>
    <alert>Selected: {{model}}</alert>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        model: '1'
      }
    }
  }
</script>
