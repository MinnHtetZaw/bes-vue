<template>
  <div class="mb-3">
    <label v-if="labelName" class="form-label small text-secondary">{{labelName}}</label>
    <textarea :readonly="readonly == true" :name="name" class="form-control form-control-sm" :rows="rows" :value="value"></textarea>
    <span v-if="errorMessage" style="font-size: 12px;" class="my-1 text-danger">{{errorMessage[0]}}</span>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    labelName: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      default : 3,
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {

    },
    errorMessage: {
      type: String,
    },
  },
}
</script>

<style scoped>

</style>