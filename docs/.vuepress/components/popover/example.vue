<template>
  <div class="uiv">
    <btn type="primary" id="btn">Popover</btn>
    <popover title="Title" target="#btn">
      <template slot="popover">
        <h1>Hello world!</h1>
      </template>
    </popover>
  </div>
</template>
