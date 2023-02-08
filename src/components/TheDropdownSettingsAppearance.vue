<template>
  <DropdownSettingsHeader title="Appearance" @back="$emit('close')" />
  <section class="py-2">
    <div class="text-gray-300 text-xs p-3">
      Setting applies to this browser only
    </div>
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(themeName, themeId) in themes"
        :key="themeId"
        :label="themeName"
        :active="themeId === selectedOptions.theme.id"
        @click="selectOption({ id: themeId, text: themeName })"
      />
    </ul>
  </section>
</template>

<script>
import dropdownSubmenu from "../mixins/dropdownSubmenu.js";

export default {
  name: "TheDropdownSettingsAppearance",
  mixins: [dropdownSubmenu],
  data() {
    return {
      optionName: "theme",
      themes: ["Device theme", "Dark theme", "Light theme"],
    };
  },
};
</script>

<style scoped></style>
