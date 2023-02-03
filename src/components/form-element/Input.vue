<template>
  <div class="mb-3">
    <label v-if="labelName" class="form-label small text-secondary">{{labelName}}</label>
    <input :type="type" class="form-control form-control-sm" :name="name" :value="value" :ref="ref" :placeholder="placeholder">
    <span v-if="errorMessage" style="font-size: 12px;" class="my-1 text-danger">{{errorMessage[0]}}</span>
  </div>

</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    labelName: {
      type: String,
    },
    errorMessage: {
      type: Object,
    },
    value: {

    },
    ref: {

    },
    placeholder: {
      type: String,
    }
  },
}
</script>

<style scoped>

</style>