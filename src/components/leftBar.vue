<template>
  <div>
    <div>
      <button
        class="
          h-12
          w-12
          ml-2
          hover:bg-lightblue
          text-3xl
          rounded-full
          text-blue
        "
      >
        <router-link to="/">
          <i class="fab fa-twitter"></i>
        </router-link>
      </button>
      <div>
        <button
          v-for="button in buttons"
          v-bind:key="button.id"
          class="
            flex
            items-center
            py-2
            px-4
            hover:bg-lightblue
            hover:text-blue
            rounded-full
            mr-auto
            mb-1
          "
        >
          <router-link
            v-if="button.name == 'Profile'"
            :to="{ name: 'Profile', params: { profileName: `${name}` } }"
            class="flex items-center"
          >
            <i :class="`${button.icon} text-2xl mr-4 text-left`"></i>
            <p class="text-xl font-serif text-left">{{ button.name }}</p>
          </router-link>
          <router-link
            v-else-if="button.name == 'Home'"
            to="/home"
            class="flex items-center"
          >
            <i :class="`${button.icon} text-2xl mr-4 text-left`"></i>
            <p class="text-xl font-bold text-left">{{ button.name }}</p>
          </router-link>
          <div v-else class="flex items-center">
            <i :class="`${button.icon} text-2xl mr-4 text-left`"></i>
            <p class="text-xl font-serif text-left">{{ button.name }}</p>
          </div>
        </button>
      </div>
      <button
        class="
          text-white
          bg-blue
          rounded-full
          font-semibold
          focus:outline-none
          w-full
          p-3
          hover:bg-darkblue
        "
      >
        Tweet
      </button>
    </div>
    <div class="mt-6 w-full text-center">
      <button
        class="w-full flex justify-between hover:bg-lighter p-2 rounded-full"
      >
        <div class="w-full flex justify-between align-middle px-4">
          <img class="rounded-full w-12 h-12 mr-2" v-bind:src="image" />
          <div>
            <p class="font-bold text-left leading-tight">{{ name }}</p>
            <p class="text-left leading-tight text-dark">@{{ handle }}</p>
          </div>
        </div>
      </button>
      <button
        @click="logout"
        class="text-red-600 font-semibold hover:text-red-500"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters} from "vuex";
export default {
  name: "LeftBar",
  computed: mapGetters(["name","handle","image"]),
  data() {
    return {
      buttons: [
        { icon: "fas fa-home", name: "Home", id: "home" },
        { icon: "fas fa-hashtag", name: "Explore", id: "explore" },
        { icon: "fas fa-bell", name: "Notifications", id: "notifications" },
        { icon: "fas fa-envelope", name: "Messages", id: "messages" },
        { icon: "fas fa-bookmark", name: "Bookmarks", id: "bookmarks" },
        { icon: "fas fa-clipboard-list", name: "Lists", id: "lists" },
        { icon: "fas fa-user", name: "Profile", id: "Profile" },
        { icon: "fas fa-ellipsis-h", name: "More", id: "more" },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.setItem("token", "false");
      location.reload();
    },
     ...mapActions(['user']),
  },
  async created() {
    this.user()
  
  }
};
</script>

<style></style>
