<template>
  <section class="produtos-container">
    <div v-if="produtos && produtos.length" class="produtos">
      <div class="produto" v-for="produto in produtos" :key="produto.id">
        <router-link to="/">
          <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo" />
          <p class="preco">{{produto.preco}}</p>
          <h2 class="titulo">{{produto.nome}}</h2>
          <p>{{produto.descricao}}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="produtos && produtos.length === 0">
      <p>Busca sem resultados. Tente buscar outro termo.</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";

export default {
  name: "produtosLista",
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);

      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    }
  },
  methods: {
    getProdutos() {
      api.get(this.url).then(response => (this.produtos = response.data));
    }
  },
  created() {
    this.getProdutos();
  },
  watch: {
    url() {
      this.getProdutos();
    }
  }
};
</script>

<style scoped>
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
