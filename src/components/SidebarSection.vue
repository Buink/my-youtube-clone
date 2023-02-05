<template>
  <section :class="$attrs.class || 'py-2 border-b'">
    <slot />
  </section>
</template>

<script>
import SidebarNavItem from "./SidebarNavItem.vue";
export default {
  name: "SidebarSection",
  components: {SidebarNavItem},
};
</script>

<style scoped></style>