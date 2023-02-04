<template>
  <a href="#" class="mb-7 group">
    <VideoItemThumbnail :index="index" />
    <VideoItemInfo :index="index" />
  </a>
</template>

<script>
import VideoItemThumbnail from "./VideoItemThumbnail.vue";
import VideoItemInfo from "./VideoItemInfo.vue";
export default {
  name: "VideoItem",
  components: { VideoItemInfo, VideoItemThumbnail },
  props: ["index"],
};
</script>

<style scoped></style>
