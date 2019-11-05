<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <ProdutosAdicionar />
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" class="produtos" :key="index">
        <ProdutoItem :produto="produto">
          <p>{{produto.descricao}}</p>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutosAdicionar from "@/components/ProdutosAdicionar.vue";
import ProdutoItem from "@/components/ProdutoItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "UsuarioProdutos",
  components: {
    ProdutosAdicionar,
    ProdutoItem
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    }
  },
  methods: {
    ...mapActions(["getUsuarioProdutos"])
  },
  computed: {
    ...mapState(["login", "usuario", "usuario_produtos"])
  },
  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>