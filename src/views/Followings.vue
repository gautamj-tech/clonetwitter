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
        v-for="following in followings"
        :key="following.id"
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
          <img :src="following.image" class="rounded-full w-12 h-12 mr-2" />
          <div>
            <p class="font-bold text-left leading-tight">
              {{ following.name }}
            </p>
            <p class="text-left leading-tight text-dark">
              @{{ following.handle }}
            </p>
          </div>
        </div>
        <button
          class="
            bg-black
            text-white text-sm
            w-20
            h-8
            hover:bg-dark
            rounded-full
            font-bold
          "
          @click="() => unfollowRequest(following.id)"
        >
          Unfollow
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vuex from "vuex";
export default {
  name: "Followings",
  computed: {...vuex.mapGetters(["id","followings"]),},
  methods: {
    async unfollowRequest(id) {
      const data = { followingId: id };
      const userUnfollowed = await axios.post(`/userData/unFollow?id=${this.id}`, data);
      console.log(userUnfollowed);
      location.reload();
    },
    ...vuex.mapActions(['user','getAllFollowings']),
  },
  async created() {
    this.user()
    this.getAllFollowings(this.id);
  },
};
</script>

<style>
</style>
