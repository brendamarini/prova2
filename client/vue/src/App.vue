<script setup>
import CREATE from './components/CREATE.vue';
import READ from './components/READ.vue';
import UPDATE from './components/UPDATE.vue';
import DELETE from './components/DELETE.vue';
import TITLE from './components/TITLE.vue';

</script>

<template>

<TITLE></TITLE>
<CREATE></CREATE>
<DELETE></DELETE>
<UPDATE></UPDATE>
<READ></READ>



</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #000000aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #272727);
}
</style>
