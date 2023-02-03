<template>
  <div class="container-fluid px-0">
    <TopNav></TopNav>
    <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <slot></slot>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/layout/TopNav";
export default {
  name: "Master",
  components: {TopNav}
}
</script>

<style scoped>

</style>