<template>
  <div class="quiz-result">
    <div class="quiz-result-top">
      <div class="quiz-result-feedback">
        <p class="quiz-result-feedback__text">
          Спасибо за Ваши ответы!
          <strong
            >Мы подготовили для Вас персональную аудио запись с Вашим
            прогнозом.</strong
          >
        </p>
      </div>
      <p class="quiz-result-top__text">
        Вы можете узнать, как повлиять на события, которые ожидают вас в
        ближайшем будущем.
      </p>
    </div>
    <div class="quiz-result-body">
      <div class="quiz-result-main">
        <p class="quiz-result-main__text title">
          <strong
            >Первое значимое событие может произойти уже 14.02.2021,</strong
          >
          Вам надо быть готовым, что бы последствия не оказались необратимыми.
        </p>
      </div>
      <div class="quiz-result-answer">
        <p class="quiz-result-answer__text">
          Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона.
          Прослушайте важную информацию!
        </p>
      </div>
      <div class="quiz-result-call">
        <button class="quiz-result-call__button delay--100" @click="$emit('call')">
          Позвонить и прослушать
        </button>
      </div>
    </div>
    <div class="quiz-result-footer">
      <p class="quiz-result-footer__text">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
        FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "quizresult",
};
</script>

<style lang="scss" scoped>
.quiz-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  min-width: 300px;

  &-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 36px;

    &__text {
      font-family: Rob;
      font-weight: 300;
      font-size: 25px;
      line-height: 35px;
      color: #ffffff;
      text-align: center;
    }
  }

  &-feedback {
    position: relative;
    padding: 6px 14px;
    margin-bottom: 35px;
    background: #ffffff;
    border-radius: 5px;

    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      right: 20px;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 20px solid #ffffff;
    }

    &__text {
      font-family: Rob;
      font-size: 25px;
      line-height: 35px;
      color: #202024;
      text-align: center;
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }

  &-main {
    padding: 40px 50px;
    border: 1px solid #ffffff;
  }

  &-answer {
    margin: 31px 0;

    &__text {
      font-family: Rob;
      font-weight: 300;
      font-size: 25px;
      color: #ffffff;
      text-align: center;
    }
  }

  &-call {
    display: flex;
    justify-content: center;

    &__button {
      font-family: Rob;
      font-size: 20px;
      color: #ffffff;
      padding: 25px 55px;
      background: linear-gradient(
        90deg,
        rgba(76, 217, 100, 0.9) -6.2%,
        rgba(50, 185, 73, 0.9) 100%
      );
      border-radius: 50px;
      border: none;
      outline: none;
      cursor: pointer;

      &.delay--100::after {
        animation-delay: 100ms;
        animation-duration: 3200ms;
      }

      @keyframes Blik {
        from {
          left: -100px;
        }
        to {
          left: calc(100% + 60px);
        }
      }
    }
  }

  &-footer {
    display: flex;
    justify-content: center;

    &__text {
      font-family: Rob;
      font-size: 12px;
      line-height: 18px;
      color: #9d9d9d;
      text-transform: uppercase;
      text-align: center;
    }
  }
}

@media screen and (max-width: 767.98px) {
  .quiz-result {
    &-feedback {
      &__text {
        font-size: 20px;
        line-height: 30px;
      }
    }

    &-top {
      &__text {
        font-size: 20px;
        line-height: 30px;
      }
    }

    &-main {
      padding: 30px 35px;

      &__text {
        font-size: 22px;
      }
    }

    &-answer__text {
      font-size: 20px;
      line-height: 30px;
    }

    &-call__button {
      padding: 20px 45px;
    }
  }
}

@media screen and (max-width: 575.98px) {
  .quiz-result {
    padding: 0 30px;

    &-feedback {
      &__text {
        font-size: 15px;
        line-height: 20px;
      }
    }

    &-top {
      &__text {
        font-size: 15px;
        line-height: 20px;
      }
    }

    &-main {
      padding: 20px 25px;

      &__text {
        font-size: 18px;
      }
    }

    &-answer__text {
      font-size: 15px;
      line-height: 20px;
    }

    &-call__button {
      font-size: 16px;
      padding: 15px 20px;
      white-space: nowrap;
    }
  }
}
</style>
