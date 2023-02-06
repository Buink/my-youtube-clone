<template>
  <div class="uppercase text-sm font-semibold px-6 py-2">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "SidebarSectionHeading",
  props: {
    title: String,
  },
};
</script>

<style scoped></style>
