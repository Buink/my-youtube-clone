import DropdownSettingsListItem from "../components/DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "../components/DropdownSettingsHeader.vue";

export default {
  components: { DropdownSettingsHeader, DropdownSettingsListItem },
  data() {
    return {
      optionName: null,
    };
  },
  props: ["selectedOptions"],
  emits: ["close", "select-option"],
  methods: {
    selectOption(option) {
      this.$emit("select-option", { name: this.optionName, value: option });
    },
  },
};