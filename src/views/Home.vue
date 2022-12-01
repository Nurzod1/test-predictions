<template>
  <div class="home">
    <Intro />
    <Prediction />
    <Quiz />
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Prediction from "@/components/Prediction.vue";
import Quiz from "@/components/quiz/Quiz.vue";

export default {
  name: "HomeView",

  components: {
    Intro,
    Prediction,
    Quiz,
  },
};
</script>

<style lang="scss">
.home {
  background: #202024;
}
</style>
