<template>
  <div>
    <div class="px-5 py-3 border-b border-lighter flex items-center">
      <h1 class="text-lg font-bold">Home</h1>
    </div>
    <div class="px-5 py-3 border-b border-lighter flex">
      <div>
        <img
          :src="image"
          alt="profile"
          class="w-12 h-12 rounded-full border border-lighter object-cover"
        />
      </div>
      <form v-on:submit.prevent="addNewTweet" class="w-full px-4 relative">
        <textarea
          v-model="myTweet"
          required
          placeholder="What's happening?"
          class="w-full focus:outline-none mt-3"
        ></textarea>
        <div class="flex items-center">
          <i class="text-lg text-blue mr-4 fas fa-image"></i>
          <i class="text-lg text-blue mr-4 fas fa-chart-line"></i>
          <i class="text-lg text-blue mr-4 fas fa-chart-bar"></i>
          <i class="text-lg text-blue mr-4 fas fa-smile"></i>
          <i class="text-lg text-blue mr-4 fas fa-tasks"></i>
        </div>
        <button
          class="
            h-10
            px-4
            text-white
            font-semibold
            bg-blue
            hover:bg-darkblue
            focus:outline-none
            rounded-full
            absolute
            bottom-0
            right-0
          "
        >
          Tweet
        </button>
      </form>
    </div>
    <div
      v-for="tweet in tweets"
      :key="tweet.id"
      class="w-full p-4 border-b hover:bg-lighter"
    >
      <Tweet :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Tweet from "./Tweet.vue";
import vuex from "vuex";
export default {
  name: "Main",
  computed: {...vuex.mapGetters(["tweets","id","name","email","image"]),
  },
   props: ["profileData"],
  components: {
    Tweet,
  },
  data() {
    return {
      myTweet: "",
    
    };
  },
  methods: {
     async addNewTweet() {
      console.log(this.myTweet);
      if (this.myTweet == "") {
        return;
      }
      const myTweets = await axios.post(`/userData/tweet?id=${this.id}`, {
        tweet: this.myTweet,
      });
      this.myTweet = "";
      console.log(myTweets.data, "My tweets");
     this.getTweets()
    },
    ...vuex.mapActions(['getTweets','user']),
  },
  async created() {
   this.user()
   this.getTweets()
  }
};
</script>

<style></style>
