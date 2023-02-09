<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div
      v-for="(label, index) in searchPredictions"
      :key="label"
      class="flex items-center"
    >
      <BaseCheckbox
        :id="`search-prediction-${index}`"
        :value="label"
        v-bind="$attrs"
        :label="label"
        @set-value="addSelectedPrediction"
        @delete-value="deleteSelectedPrediction"
      >
        {{ label }}
      </BaseCheckbox>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "./BaseCheckbox.vue";
export default {
  name: "TheSearchPredictionsList",
  components: { BaseCheckbox },
  data() {
    return {
      selectedSearchPredictions: this.modelValue,
    };
  },
  props: {
    searchPredictions: Array,
    modelValue: Array,
  },
  emits: ["update:modelValue"],
  watch: {
    selectedSearchPredictions() {
      this.$emit("update:modelValue", this.selectedSearchPredictions);
    },
  },
  methods: {
    addSelectedPrediction(checkboxValue) {
      this.selectedSearchPredictions.push(checkboxValue);
    },
    deleteSelectedPrediction(checkboxValue) {
      const idx = this.selectedSearchPredictions.indexOf(checkboxValue);
      this.selectedSearchPredictions.splice(idx, 1);
    },
  },
};
</script>

<style scoped></style>
