<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="w-5 h-5" />
      </button>
    </BaseTooltip>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transition opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transition opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        ref="dropdown"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        :class="dropdownClasses"
      >
        <section class="py-2 border-b">
          <ul>
            <DropdownSettingsListItem
              v-for="listItem in listItems"
              :key="listItem.label"
              :label="listItem.label"
              :icon="listItem.icon"
              :with-sub-menu="listItem.withSubMenu"
            />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <DropdownSettingsListItem
              label="Restricted Mode: Off"
              with-sub-menu
            />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseTooltip from "./BaseTooltip.vue";
export default {
  name: "TheDropdownSettings",
  components: { BaseTooltip, BaseIcon, DropdownSettingsListItem },
  data() {
    return {
      isOpen: false,
      listItems: [
        {
          label: "Appearance: Light",
          icon: "sun",
          withSubMenu: true,
        },
        {
          label: "Language: English",
          icon: "translate",
          withSubMenu: true,
        },
        {
          label: "Location: Ukraine",
          icon: "globeAlt",
          withSubMenu: true,
        },
        {
          label: "Settings",
          icon: "cog",
          withSubMenu: false,
        },
        {
          label: "Your data in YouTube",
          icon: "shieldCheck",
          withSubMenu: false,
        },
        {
          label: "Help",
          icon: "questionMarkCircle",
          withSubMenu: false,
        },
        {
          label: "Send feedback",
          icon: "chatAlt",
          withSubMenu: false,
        },
        {
          label: "Keyboard shortcuts",
          icon: "calculator",
          withSubMenu: false,
        },
      ],
    };
  },
  computed: {
    dropdownClasses() {
      return [
        "z-10",
        "opacity-0",
        "group-hover:opacity-100",
        "absolute",
        "top-9",
        "-right-full",
        "sm:right-0",
        "bg-white",
        "w-72",
        "border",
        "border-t-0",
        "focus:outline-none",
      ];
    },
  },
  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    });
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus());
    },
  },
};
</script>

<style scoped></style>
