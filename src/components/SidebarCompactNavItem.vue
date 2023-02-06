<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="icon" class="w-6 h-6 mb-1.5" />
      <span class="text-xs">{{ label }}</span>
    </a>
  </li>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  name: "SidebarCompactNavItem",
  components: { BaseIcon },
  props: {
    label: String,
    icon: String,
    isActive: Boolean,
  },
  computed: {
    classes() {
      const classes = [
        "flex",
        "flex-col",
        "items-center",
        "px-2",
        "py-5",
        "hover:bg-gray-100",
      ];

      return this.isActive ? [...classes, "text-red-500"] : [...classes];
    },
  },
};
</script>

<style scoped></style>
