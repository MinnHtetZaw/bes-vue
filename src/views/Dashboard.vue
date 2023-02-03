<template>
  <Master>
    <div class="row">
      <div class="col-12">
        <div class="my-5">
          <div style="width: 300px;" class="card mb-3 border-0 p-3">
            <h4 class="text-center">Nurse</h4>
          </div>
          <div style="width: 300px;" class="card mb-3 border-0 p-3">
            <h4 class="text-center">Pharmacy</h4>
          </div>
        </div>
      </div>
    </div>
  </Master>
</template>

<script>
import SideNav from "@/components/layout/SideNav";
import Master from "@/components/Master";
export default {
  name: "Dashboard",
  components: {Master, SideNav}
}
</script>

<style scoped>

</style>