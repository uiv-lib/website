<template>
  <div class="uiv">
    <tabs>
      <tab title="<i class='glyphicon glyphicon-home'></i> Home" html-title>
        <p>This tab has a <code>html-title</code>.</p>
      </tab>
      <tab>
        <div slot="title">
          <i class="glyphicon glyphicon-user"></i> Profile
        </div>
        <p>This tab has a <code>title</code> slot.</p>
      </tab>
    </tabs>
  </div>
</template>
