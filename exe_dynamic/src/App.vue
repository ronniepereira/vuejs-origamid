<template>
  <div id="app">
    <button @click="componenteAtivo = 'AulaDownload'">Componente Download</button>
    <button @click="componenteAtivo = 'AulaDescricao'">Componente Descrição</button>
    <component :is="componenteAtivo"></component>
  </div>
</template>

<script>
import AulaDescricao from './components/AulaDescricao';
import AulaDownload from './components/AulaDownload';

export default {
  name: 'app',
  components:{
    AulaDescricao,
    AulaDownload
  },
  data() {
    return {
      componenteAtivo: "AulaDescricao"
    };
  }
}
</script>

<style>

</style>
