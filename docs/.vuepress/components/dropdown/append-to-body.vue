<template>
  <div class="uiv">
    <!-- dropdown with append-to-body -->
    <dropdown append-to-body>
      <btn class="dropdown-toggle">Dropdown <span class="caret"></span></btn>
      <template slot="dropdown">
        <li><a role="button">Action</a></li>
        <li><a role="button">Another action</a></li>
        <li><a role="button">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a role="button">Separated link</a></li>
      </template>
    </dropdown>
    <!-- dropdown with append-to-body + menu-right -->
    <dropdown append-to-body menu-right>
      <btn class="dropdown-toggle">Menu-Right <span class="caret"></span></btn>
      <template slot="dropdown">
        <li><a role="button">Action</a></li>
        <li><a role="button">Another action</a></li>
        <li><a role="button">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a role="button">Separated link</a></li>
      </template>
    </dropdown>
    <!-- dropdown with append-to-body + dropup -->
    <dropdown append-to-body dropup>
      <btn class="dropdown-toggle">Dropup <span class="caret"></span></btn>
      <template slot="dropdown">
        <li><a role="button">Action</a></li>
        <li><a role="button">Another action</a></li>
        <li><a role="button">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a role="button">Separated link</a></li>
      </template>
    </dropdown>
    <!-- dropdown-append-to-body.vue -->
  </div>
</template>
