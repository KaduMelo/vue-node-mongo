<template>
  <div class="center">
    <table-component
      :data="clients"
      sort-by="nome"
      sort-order="asc"
      filter-placeholder="Realize o filtro por nome..."
      filter-no-results="Nenhum resultado encontrado"
      :show-caption="false"
    >
      <table-column show="nome" label="Nome"></table-column>
      <table-column show="valor.$numberDecimal" label="Valor Total" :formatter="formatMoney"></table-column>
      <table-column show="dataPrimeiraInadimplencia" label="Data primeira Inadimplência" :formatter="formatDateBrazil"></table-column>
    </table-component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_CLIENTS } from "@/store/actions.type";

export default {
  name: "Client",
  mounted() {
    this.$store.dispatch(FETCH_CLIENTS, this.$route.params);
  },
  computed: {
    ...mapGetters(["clients"]),
  },
  methods: {
    formatMoney(value) {
      return parseFloat(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
    formatDateBrazil(date) {
      date = new Date(date);
      const dia = date.getDate().toString(),
        diaF = dia.length == 1 ? "0" + dia : dia,
        mes = (date.getMonth() + 1).toString(), // +1 pois no getMonth Janeiro começa com zero.
        mesF = mes.length == 1 ? "0" + mes : mes,
        anoF = date.getFullYear();

      return diaF + "/" + mesF + "/" + anoF;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 50%;
}
</style>
