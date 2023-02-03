<template>
<nav>
  <button :class="{active : filterValue === 'all'}" @click="filter('all')">All</button>
  <button :class="{active : filterValue === 'available'}" @click="filter('available')">Available</button>
  <button :class="{active : filterValue === 'occupied'}" @click="filter('occupied')">Occupied</button>
  <button :class="{active : filterValue === 'isolated'}" @click="filter('isolated')">Isolated</button>
  <button :class="{active : filterValue === 'lost'}" @click="filter('lost')">Lost</button>
</nav>
</template>

<script>
export default {
  name: "FilterNav",
  props: {
    filterValue: {
      type: String,
      default: 'all'
    },
  },
  methods: {
    filter : function (v) {
      this.$emit('filter',v)
    }
  },
}
</script>

<style scoped>
nav{
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
button{
  border: none;
  background: none;
  font-weight: bold;
  color: #818c8a;
}
.active{
  color: #5c6462;
}
</style>