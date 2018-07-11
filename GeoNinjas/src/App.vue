<template>
  <div id="app">
    <Navbar />yar
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
