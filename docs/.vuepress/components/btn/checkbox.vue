<template>
  <section class="uiv">
    <btn-group>
      <btn input-type="checkbox" input-value="1" v-model="model">Checkbox 1</btn>
      <btn input-type="checkbox" input-value="2" v-model="model">Checkbox 2</btn>
      <btn input-type="checkbox" input-value="3" v-model="model">Checkbox 3</btn>
      <btn input-type="checkbox" input-value="4" v-model="model" disabled>Checkbox 4 (Disabled)</btn>
    </btn-group>
    <hr/>
    <alert>Selected: {{model}}</alert>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        model: ['1']
      }
    }
  }
</script>
