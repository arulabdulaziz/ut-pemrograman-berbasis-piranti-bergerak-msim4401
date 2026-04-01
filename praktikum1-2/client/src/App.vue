<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HalamanAwal msg="Daftar Mahasiswa" />
</template>

<script>
import HalamanAwal from './components/HalamanAwal.vue';

export default {
  name: 'App',
  components: {
    HalamanAwal
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
