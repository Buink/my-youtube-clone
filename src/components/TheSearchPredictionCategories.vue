<template>
  <div class="space-y-3 text-black text-sm mt-3">
    <div
      v-for="(label, index) in categories"
      :key="label"
      class="flex items-center"
    >
      <!--      <BaseRadio-->
      <!--        :id="`search-prediction-category-${index}`"-->
      <!--        :value="label"-->
      <!--        v-bind="$attrs"-->
      <!--        v-model="radioValue"-->
      <!--      >-->
      <!--        {{ label }}-->
      <!--      </BaseRadio>-->
      <input
        type="radio"
        class="h-5 w-5 cursor-pointer"
        :id="`search-prediction-category-${index}`"
        :value="label"
        v-bind="$attrs"
        v-model="radioValue"
      />
      <label
        :for="`search-prediction-category-${index}`"
        class="pl-4 cursor-pointer flex-grow"
      >
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
import BaseRadio from "./BaseRadio.vue";
export default {
  name: "TheSearchPredictionCategories",
  components: { BaseRadio },
  data() {
    return {
      radioValue: this.modelValue,
    };
  },
  props: {
    categories: Array,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  watch: {
    radioValue() {
      this.$emit("update:modelValue", this.radioValue);
    },
  },
};
</script>

<style scoped></style>
