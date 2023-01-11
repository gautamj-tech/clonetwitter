<template>
  <div>
    <div id="app" class="flex container h-screen w-full">
      <div class="w-1/5 border-r border-lighter px-8 py-2">
        <leftBar />
      </div>
      <div class="w-1/2 h-full overflow-y-scroll">
        <Profile :profileData="profileData" />
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
import rightBar from "../components/rightBar.vue";
import Profile from "../components/Profile.vue";
export default {
  name: "Home",
  props: ["profileData"],
  components: {
    leftBar,
    Profile,
    rightBar,
  },
};
</script>

<style></style>
