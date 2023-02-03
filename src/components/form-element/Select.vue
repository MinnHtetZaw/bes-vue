<template>
  <div class="mb-3">
    <label v-if="labelName" class="form-label small text-secondary">{{labelName}}</label>

    <select :name="name" class="form-select form-select-sm">
      <option v-if="option_name" value="">{{ option_name }}</option>
      <option v-if="items" v-for="item in items" :value="item.id">{{ item.name }}</option>
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    name: {
      type: String,
      required: true
    },
    labelName: {
      type: String,
    },
    option_name: {
      type: String,
    },
    items: {
      type: Object,
    },
  },
}
</script>

<style scoped>

</style>