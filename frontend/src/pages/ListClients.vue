<template>
  <div class="clients">
    <form id="search">
      Search
      <input name="query" v-model="searchQuery" />
    </form>
    <table class="center">
      <thead>
        <tr>
          <th :key="key._id" v-for="key in gridColumns" :class="{ active: sortKey == key }">
            {{ key }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="entry._id" v-for="entry in filteredHeroes">
          <td :key="key._id" v-for="key in gridColumns">{{entry[key]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Client",
  data() {
    const sortOrders = {};
    const columns = [ "Nome", "Valor Total", "Data primeira Inadimplência"]
    columns.forEach(function (key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: "",
      sortOrders: sortOrders,
      searchQuery: "",
      gridColumns: columns,
      clients: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 },
      ],
    };
  },
  computed: {
    filteredHeroes() {
      var sortKey = this.sortKey;
      var filterKey = this.filterKey && this.filterKey.toLowerCase();
      var order = this.sortOrders[sortKey] || 1;
      var clients = this.clients;
      if (filterKey) {
        clients = clients.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
          });
        });
      }
      if (sortKey) {
        clients = clients.slice().sort(function (a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return clients;
    },
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
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
}
</style>
