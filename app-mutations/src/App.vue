<template>
  <div id="app">
    <Curso/>
  </div>
</template>

<script>
import Aluno from './components/Aluno.vue'
import Aulas from './components/Aulas.vue'
import Curso from './components/Curso.vue'

export default {
  name: 'app',
  components: {
    Curso
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
