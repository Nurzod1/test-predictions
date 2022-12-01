<template>
  <div class="quiz">
    <QuizBody v-if="step === 1">
      <div class="quiz-body">
        <h4 class="quiz-body__title title">Боитесь ли вы умереть?</h4>
        <button
          class="quiz-body__button button-orange delay--100"
          @click="step = 2"
        >
          Да
        </button>
        <button
          class="quiz-body__button button-orange delay--300"
          @click="step = 2"
        >
          Нет
        </button>
        <Footer />
      </div>
    </QuizBody>
    <QuizBody v-if="step === 2">
      <div class="quiz-top">
        <div class="quiz-top-wrapper">
          <p class="quiz-top__text text-bad">
            Мы расскажем Вам не только подробности вашей смерти, но также
            поможем Вам избежать этой ужасной даты и продлить вашу жизнь на
            многие годы.
          </p>
          <div class="quiz-top-img">
            <img src="@/assets/image/eye.png" alt="" />
          </div>
        </div>
      </div>
      <div class="quiz-body">
        <h4 class="quiz-body__title title">
          Когда Вы чувствуете себя наиболее комфортно?
        </h4>
        <button
          class="quiz-body__button button-orange delay--100"
          @click="step = 3"
        >
          Утро
        </button>
        <button
          class="quiz-body__button button-orange delay--300"
          @click="next"
        >
          День
        </button>
        <button
          class="quiz-body__button button-orange delay--100"
          @click="step = 3"
        >
          Вечер
        </button>
        <button
          class="quiz-body__button button-orange delay--300"
          @click="step = 3"
        >
          Ночь
        </button>
        <div class="quiz-body-img">
          <img src="@/assets/image/round.png" alt="" />
        </div>
      </div>
    </QuizBody>
    <QuizBody v-if="step === 3">
      <div class="quiz-top">
        <div class="quiz-top-wrapper">
          <p class="quiz-top__text text-bad">
            Мы расскажем Вам не только подробности вашей смерти, но также
            поможем Вам избежать этой ужасной даты и продлить вашу жизнь на
            многие годы.
          </p>
          <div class="quiz-top-img">
            <img src="@/assets/image/eye.png" alt="" />
          </div>
        </div>
      </div>
      <div class="quiz-body">
        <h4 class="quiz-body__title title">Укажите свою дату рождения:</h4>
        <div class="quiz-input">
          <input type="number" placeholder="День" />
        </div>
        <div class="quiz-input">
          <input type="month" />
        </div>
        <div class="quiz-input">
          <input type="number" placeholder="Год" />
        </div>
        <button
          class="quiz-body__button button-orange delay--300"
          @click="step = 4"
        >
          Далее
        </button>
        <div class="quiz-body-img">
          <img src="@/assets/image/round.png" alt="" />
        </div>
      </div>
    </QuizBody>
    <QuizBody v-if="step === 4">
      <div class="quiz-top">
        <div class="quiz-top-wrapper">
          <p class="quiz-top__text text-bad">
            Мы расскажем Вам не только подробности вашей смерти, но также
            поможем Вам избежать этой ужасной даты и продлить вашу жизнь на
            многие годы.
          </p>
          <div class="quiz-top-img">
            <img src="@/assets/image/eye.png" alt="" />
          </div>
        </div>
      </div>
      <div class="quiz-body">
        <h4 class="quiz-body__title title">Снятся ли Вам умершие люди?</h4>
        <button
          class="quiz-body__button button-orange delay--100"
          @click="step = 5"
        >
          Да
        </button>
        <button
          class="quiz-body__button button-orange delay--300"
          @click="step = 5"
        >
          Нет
        </button>
        <button
          class="quiz-body__button button-orange delay--200"
          @click="step = 5"
        >
          Иногда
        </button>
        <div class="quiz-body-img">
          <img src="@/assets/image/round.png" alt="" />
        </div>
      </div>
    </QuizBody>
    <QuizBody v-if="step === 5">
      <div class="quiz-top">
        <div class="quiz-top-wrapper">
          <p class="quiz-top__text text-bad">
            Мы расскажем Вам не только подробности вашей смерти, но также
            поможем Вам избежать этой ужасной даты и продлить вашу жизнь на
            многие годы.
          </p>
          <div class="quiz-top-img">
            <img src="@/assets/image/eye.png" alt="" />
          </div>
        </div>
      </div>
      <div class="quiz-body">
        <h4 class="quiz-body__title title">
          Запись, которую Вы услышите, может шокировать людей с неокрепшей
          психикой. Вы готовы узнать, что ждет именно Вас?
        </h4>
        <button
          class="quiz-body__button button-orange delay--100"
          @click="step = 6"
        >
          Да
        </button>
        <button
          class="quiz-body__button button-orange delay--300"
          @click="step = 6"
        >
          Затрудняюсь ответить
        </button>
        <div class="quiz-body-img">
          <img src="@/assets/image/round.png" alt="" />
        </div>
      </div>
    </QuizBody>
    <p v-if="step < 6" class="quiz-text subtext">Вопрос {{ this.step }}-5</p>
    <QuizResult v-if="step === 6" @call="step = 7" />
    <ResultInfo v-if="step === 7" />
  </div>
</template>

<script>
import QuizBody from "@/components/quiz/QuizBody.vue";
import QuizResult from "@/components/quiz/QuizResult.vue";
import Footer from "@/components/Footer.vue";
import ResultInfo from "@/components/quiz/ResultInfo.vue";

export default {
  name: "quiz",
  components: {
    QuizBody,
    QuizResult,
    Footer,
    ResultInfo,
  },

  data() {
    return {
      step: 1,
    };
  },
  methods: {
    next() {
      this.$emit = this.step;
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  &-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;

    &__title {
      width: 60%;
    }

    &-img {
      width: 89px;
      height: 89px;
      transform: translateX(-100%);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &-top {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &-wrapper {
      position: relative;
      width: 60%;
      padding: 48px 0 37px 0;
    }

    &-img {
      position: absolute;
      width: 140px;
      height: 80px;
      right: 0;
      bottom: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &-text {
    margin-top: 36px;
  }
}

@media screen and (max-width: 767.98px) {
  .quiz {
    &-top {
      &-wrapper {
        width: 100%;
        padding: 25px 5px 40px 5px;
      }

      &__text {
        font-size: 22px;
      }
    }
  }
}

@media screen and (max-width: 575.98px) {
  .quiz {
    &-top {
      &__text {
        font-size: 14px;
      }
    }

    &-body {
      gap: 20px;

      &__title {
        font-size: 16px;
      }

      &__button {
        font-size: 14px;
        padding: 20px 25px;
      }
    }
  }
}
</style>
