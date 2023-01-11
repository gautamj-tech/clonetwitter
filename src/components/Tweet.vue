<template>
  <div class="flex">
    <div class="flex-none mr-4">
      <img
        :src="tweet.user.src"
        alt="pic"
        class="h-12 w-12 rounded-full flex-none"
      />
    </div>
    <div class="w-full">
      <div class="flex items-center w-full">
        <p class="font-semibold">{{ tweet.user.name }}</p>
        <p class="text-sm text-darl ml-2">@{{ tweet.user.handle }}</p>
      </div>
      <p class="py-2">
        {{ tweet.tweet }}
      </p>
      <div
        class="flex items-center justify-between w-full px-2 my-2 text-black"
      >
        <div class="flex items-center cursor-pointer ">
          <i class="mr-2 fas fa-comment" style="color:grey"></i>
        </div>
        <div class="flex items-center cursor-pointer">
          <i class="mr-2 fas fa-retweet " style="color:grey"></i>
        </div>
        <div class="flex items-center cursor-pointer">
          <i class="mr-2 fas fa-heart" style="color:grey"></i>
        </div>
        <div class="flex items-center cursor-pointer">
          <i class="mr-2 fas fa-upload" style="color:grey"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  props: ["tweet"],
};
</script>

<style></style>
