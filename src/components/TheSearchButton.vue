<template>
  <BaseTooltip text="Search">
    <button
      class="focus:outline-none h-full flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200"
    >
      <BaseIcon name="search" class="w-5 h-5" />
    </button>
  </BaseTooltip>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import BaseTooltip from "./BaseTooltip.vue";
export default {
  name: "TheSearchButton",
  components: { BaseTooltip, BaseIcon },
};
</script>

<style scoped></style>
