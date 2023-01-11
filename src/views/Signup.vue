<template>
  <div class="h-screen w-full flex flex-col items-center">
    <h1 class="text-3xl font-bold my-4">
      <button
        class="h-16 w-16 hover:bg-lightblue text-3xl rounded-full text-blue"
      >
        <i class="fab fa-twitter"></i>
      </button>
      <i>SignUp</i>
    </h1>
    <form @submit.prevent="submitHandler" class="w-1/3 px-4">
      <div class="flex flex-col">
        <!-- name -->
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="text"
          required
          placeholder="Full name"
          v-model="name"
        />
        <!-- email -->
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="email"
          required
          placeholder="Email"
          v-model="email"
        />
        <!-- username -->
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="text"
          required
          placeholder="Username"
          v-model="handle"
        />
        <!-- image url -->

        <!-- Password -->
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="password"
          required
          placeholder="Password"
          v-model="password"
        />
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="text"
          placeholder="Image url"
          required
          v-model="image"
        />
      </div>
      <button
        class="
          bg-blue
          w-full
          h-14
          my-2
          rounded-2xl
          text-xl text-white
          font-bold
        "
        type="submit"
      >
        SignUp
      </button>
    </form>
    <div class="w-1/3 px-4">
      <router-link to="/login">
        <button
          class="bg-blue w-full h-14 rounded-2xl text-white text-xl font-bold"
        >
          Login
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      handle: "",
      image: "",
      password: "",
    };
  },
  methods: {
    async submitHandler() {
      const data = {
        name: this.name,
        email: this.email,
        handle: this.handle,
        image: this.image,
        password: this.password,
      };
      console.log(data);
      try {
        const result = await axios.post("/auth/register",
          data
        );
        console.log(result.data);
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
