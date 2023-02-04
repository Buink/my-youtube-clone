<template>
  <div
    class="opacity-0 group-hover:opacity-100 absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0"
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
        <DropdownSettingsListItem label="Restricted Mode: Off" with-sub-menu />
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
export default {
  name: "TheDropdownSettings",
  components: { DropdownSettingsListItem },
  data() {
    return {
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
};
</script>

<style scoped></style>
