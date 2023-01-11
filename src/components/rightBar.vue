<template>
  <div>
    <input
      type="text"
      class="
        w-full
        h-full
        p-2
        mt-2
        bg-gray-300
        pl-10
        text-sm
        focus:outline-none
      "
      placeholder="Search Twitter"
    />
    <i
      class="fas fa-search absolute left-0 top-0 mt-6 ml-12 text-sm text-light"
    ></i>
    <div class="w-full rounded-lg bg-lightest mt-2">
      <div class="flex items-center p-3">
        <p class="text-lg font-bold">What's happening</p>
      </div>
      <button
        v-for="trend in trends"
        :key="trend.id"
        class="
          w-full
          flex
          justify-between
          hover:bg-lighter
          p-3
          border-t border-lighter
        "
      >
        <div>
          <p class="text-sm text-left leading-tight text-dark">
            {{ trend.top }}
          </p>
          <p class="font-bold text-left leading-tight">{{ trend.title }}</p>
          <p class="text-left leading-tight text-dark">{{ trend.bottom }}</p>
        </div>
      </button>
      <button
        class="
          p-3
          text-blue
          w-full
          hovre:bg-lighter
          text-left
          border-t border-lighter
        "
      >
        Show more
      </button>
    </div>

    <div class="w-full rounded-lg bg-lightest mt-2">
      <div class="flex items-center p-3">
        <p class="text-lg font-bold">Who to follow</p>
      </div>
      <button
        v-for="people in whoToFollow"
        :key="people.name"
        class="
          w-full
          flex
          justify-between
          hover:bg-lighter
          p-2
          border-t border-lighter
        "
      >
        <div class="w-full flex justify-between align-middle px-4">
          <div class="w-full flex align-middle">
            <img
              class="rounded-full w-12 h-12 mr-2"
              v-bind:src="people.image"
            />
            <div>
              <p class="font-bold text-left leading-tight">{{ people.name }}</p>
              <p class="text-left leading-tight text-dark">
                @{{ people.handle }}
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
            @click="() => followRequest(people.id)"
          >
            Follow
          </button>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vuex from "vuex";
export default {
  name: "rightBar",
  computed: {...vuex.mapGetters(["id","email","whoToFollow","trends"])},
  methods: {
     
    async followRequest(id) {
      const data = { followingId: id };
       const user = await JSON.parse(localStorage.getItem("userDetails"));
      const userId=user[0].id
      const userFollowed = await axios.post(`/userData/follow?id=${userId}`, data);
      this.getWhoToFollowData();
      console.log(userFollowed);
    },
    ...vuex.mapActions(['getWhoToFollowData'])
  },
  async created() {
    this.getWhoToFollowData();
  },
};
</script>

