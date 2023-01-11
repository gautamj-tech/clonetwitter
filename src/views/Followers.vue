<template>
  <div class="h-screen w-full">
    <div class="w-2/3 bg-gray-200 h-screen mx-auto">
      <div class="flex border-b border-gray-300 align-middle py-2 px-2">
        <h1 class="font-bold text-xl mr-2">Followings</h1>
        <router-link to="/">
          <h1 class="font-semibold text-xl pr-4">Home</h1>
        </router-link>
      </div>
      <div
        v-for="follower in followers"
        :key="follower.id"
        class="
          w-full
          flex
          justify-between
          align-middle
          p-4
          border-b border-gray-300
        "
      >
        <div class="w-full flex align-middle">
          <img :src="follower.image" class="rounded-full w-12 h-12 mr-2" />
          <div>
            <p class="font-bold text-left leading-tight">
              {{ follower.name }}
            </p>
            <p class="text-left leading-tight text-dark">
              @{{ follower.handle }}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
  name: "Followers",
   computed: {...vuex.mapGetters(["id","followers"]),},
  
  methods: {
    ...vuex.mapActions(['user','getAllFollowers']),
  },
  async created() {
    this.user()
    this.getAllFollowers(this.id);
  },
};
</script>

<style>
</style>

