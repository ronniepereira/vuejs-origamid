<template>
  <div id="app">
    <ul>
      <li @click="abaAtiva= 'ServicosEmpresa'">Serviços</li>
      <li @click="abaAtiva= 'ContatoEmpresa'">Contatos</li>
      <li @click="abaAtiva= 'SobreEmpresa'">Sobre</li>
    </ul>
    <component :is="abaAtiva"></component>
  </div>
</template>

<script>
import SobreEmpresa from './components/SobreEmpresa';
import ContatoEmpresa from './components/ContatoEmpresa';
import ServicosEmpresa from './components/ServicosEmpresa';

export default {
  name: 'app',
  components: {
    SobreEmpresa,
    ContatoEmpresa,
    ServicosEmpresa
  },
  data() {
    return {
      abaAtiva: "ServicosEmpresa"
    };
  }
}
</script>

<style>

</style>
