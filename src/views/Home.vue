<template>
  <div>
    <div id="app" class="flex container h-screen w-full">
      <div class="w-1/5 border-r border-lighter px-8 py-2">
        <leftBar />
      </div>
      <div class="w-1/2 h-full overflow-y-scroll">
        <Main :profileData="profileData" />
      </div>
      <div
        class="
          w-1/3
          h-full
          border-l border-lighter
          px-8
          py-2
          relative
          overflow-y-scroll
          md:block
          hidden
        "
      >
        <rightBar />
      </div>
    </div>
  </div>
</template>

<script>
import leftBar from "../components/leftBar.vue";
import Main from "../components/Main.vue";
import rightBar from "../components/rightBar.vue";
export default {
  name: "Home",
  props: ["profileData"],
  components: {
    leftBar,
    Main,
    rightBar,
  },
};
</script>

<style></style>
