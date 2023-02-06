<template>
  <li>
    <a
      href="#"
      class="flex items-center pl-8 pr-8 py-2 text-sm hover:bg-gray-200"
    >
      <BaseIcon :name="icon" class="w-5 h-5 mr-4 text-gray-400" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  name: "VideoItemDropdownListItem",
  components: { BaseIcon },
  props: {
    label: String,
    icon: String,
  },
};
</script>

<style scoped></style>
