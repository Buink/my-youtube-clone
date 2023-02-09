<template>
  <input
    type="checkbox"
    class="h-5 w-5 cursor-pointer"
    :id="id"
    v-bind="$attrs"
    v-model="checkboxValue"
  />
  <label v-if="$slots.default" :for="id" class="pl-4 cursor-pointer flex-grow">
    <slot />
  </label>
</template>

<script>
export default {
  name: "BaseCheckbox",
  data() {
    return {
      checkboxValue: this.label,
    };
  },
  props: {
    id: String,
    label: String,
  },
  emits: ["set-value", "delete-value"],
  watch: {
    checkboxValue() {
      if (this.checkboxValue) {
        this.$emit("set-value", this.label);
      } else {
        this.$emit("delete-value", this.label);
      }
    },
  },
};
</script>

<style scoped></style>
