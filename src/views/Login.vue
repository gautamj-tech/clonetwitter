<template>
  <div class="h-screen w-full flex flex-col items-center">
    <h1 class="text-3xl font-bold my-4">
      <button
        class="h-16 w-16 hover:bg-lightblue text-3xl rounded-full text-blue"
      >
        <i class="fab fa-twitter"></i>
      </button>
      <i>Login</i>
    </h1>

    <form @submit.prevent="submitHandler" class="w-1/3 px-4">
      <div class="flex flex-col">
        <!-- Email -->
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="email"
          required
          placeholder="Email"
          v-model="email"
        />
        <!-- Password -->
        <input
          class="border border-gray-400 my-2 p-3 text-grey-darkest rounded"
          type="password"
          required
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button
        class="
          bg-blue
          w-full
          h-12
          my-2
          rounded-2xl
          text-xl text-white
          font-bold
        "
        type="submit"
      >
        Login
      </button>
    </form>
    <div class="w-1/3 px-4">
      <router-link to="/i/flow/signup">
        <button
          class="bg-blue w-full h-12 rounded-2xl text-xl text-white font-bold"
        >
          SignUp
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
      email: "",
      password: "",
    };
  },
  methods: {
    async submitHandler() {
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log(data);
      try {
        const result = await axios.post("auth/login", data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
          console.log(" SUCCESS!!!!!!!");
          localStorage.setItem("token", "true");
          location.reload();
        console.log(result)
      } catch (err) {
        console.log(err);
        localStorage.setItem("token", "false");
        window.alert("Please enter valid credentials");
      }
    },
  },
};
</script>

<style></style>
