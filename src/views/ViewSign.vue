<template>
  <section
    class="flex flex-col justify-center items-center h-screen space-y-4 bg-gray-50"
  >
    <h1 class="text-2xl font-semibold">Sign in to your dashboard</h1>
    <TheButton
      class="font-semibold"
      text="Sign in with Google"
      variant="white-sign"
      ><TheIcon class="mr-5" icon="google"
    /></TheButton>
    <p class="text-gray-500">or</p>

    <div class="border border-gray-300 rounded-md">
      <TheInput placeholder="Email address" type="email" variant="sign-input">
        <TheIcon class="ml-5" icon="envelope" />
      </TheInput>
    </div>
    <div class="border border-gray-300 rounded-md">
      <TheInput placeholder="Password" type="password" variant="sign-input">
        <TheIcon class="ml-5" icon="lock" />
      </TheInput>
    </div>
    <p class="text-purple-700">Forgot your password?</p>

    <TheButton text="Sign in" variant="purple-sign" />
    <p class="text-gray-500">
      Not registered yet?
      <span class="text-purple-700">Create an account</span>
    </p>
  </section>
</template>

<script>
import TheButton from "@/components/TheButton.vue";
import TheInput from "@/components/TheInput.vue";
import TheIcon from "@/components/TheIcon.vue";
export default {
  name: "ViewSign",
  components: {
    TheButton,
    TheInput,
    TheIcon,
  },
};
</script>
