<template>
  <div class="relative">
    <textarea
      v-bind="$attrs"
      v-model="textareaValue"
      @input="adjustHeight"
      ref="textarea"
      :maxlength="limit"
      placeholder="Provide additional details (optional)"
      class="border rounded-sm pt-2 pb-5 px-2 resize-none w-full focus:outline-none overflow-hidden peer"
    />
    <BaseTextareaCounter>
      {{ counter }}
    </BaseTextareaCounter>
  </div>
</template>

<script>
import BaseTextareaCounter from "./BaseTextareaCounter.vue";
export default {
  name: "BaseTextarea",
  components: { BaseTextareaCounter },

  data() {
    return {
      textareaValue: this.modelValue,
    };
  },
  computed: {
    counter() {
      return `${this.textareaValue.length} / ${this.limit}`;
    },
  },
  props: {
    limit: Number,
    modelValue: String,
  },
  emits: ["update:modelValue"],
  watch: {
    textareaValue() {
      this.$emit("update:modelValue", this.textareaValue);
    },
  },
  mounted() {
    this.adjustHeight();
  },
  methods: {
    adjustHeight() {
      this.$refs.textarea.style.height = "auto";
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
    },
  },
};
</script>

<style scoped></style>
