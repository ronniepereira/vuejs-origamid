<template>
  <div id="app">
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Curso from "./components/Curso.vue";
import Aluno from "./components/Aluno.vue";

export default {
  name: "app",
  components: {
    Curso,
    Aluno
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
