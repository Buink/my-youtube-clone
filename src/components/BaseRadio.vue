<template>
  <input
    type="radio"
    class="h-5 w-5 cursor-pointer"
    :id="id"
    v-bind="$attrs"
    v-model="baseRadioValue"
  />
  <label v-if="$slots.default" :for="id" class="pl-4 cursor-pointer flex-grow">
    <slot />
  </label>
</template>

<script>
export default {
  name: "BaseRadio",
  data() {
    return {
      baseRadioValue: this.modelValue,
    };
  },
  props: {
    id: String,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  watch: {
    baseRadioValue() {
      this.$emit("update:modelValue", this.baseRadioValue);
    },
  },
};
</script>

<style scoped></style>
