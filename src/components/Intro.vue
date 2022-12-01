<template>
  <div class="intro">
    <div class="container">
      <div class="intro-wrapper">
        <div class="intro-top">
          <h4 class="intro-top__title">
            Лучшие астрологи и экстрасенсы Румынии
          </h4>
        </div>
        <div class="intro-body">
          <h4 class="intro-body__title">Точность прогноза: 97%</h4>
          <div class="intro-img-wrapper">
            <div class="intro-avatar">
              <img src="@/assets/image/woman.png" alt="" />
            </div>
          </div>
          <p class="intro-body__text">
            Вас беспокоит вопрос о том, когда Вы покинете этот Мир и при каких
            обстоятельствах?
          </p>
          <div class="intro-footer">
            <button class="intro-footer__button button-orange delay--100">
              Да
            </button>
            <button class="intro-footer__button button-orange delay--300">
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "intro",
};
</script>

<style lang="scss" scoped>
.intro {
  background-image: url("../assets/image/blik.png");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 100% auto;
  min-height: 80vh;

  &-top {
    padding: 25px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  &-top__title {
    font-family: Rob;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
  }

  &-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      font-family: Rob;
      font-size: 25px;
      font-weight: 300;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      margin: 12px 0 40px 0;
    }

    &__text {
      max-width: 400px;
      color: #f6c866;
      font-family: Rob;
      font-size: 25px;
      font-weight: 400;
      margin-bottom: 40px;
      text-align: center;
    }
  }

  &-avatar {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-img-wrapper {
    position: relative;
    background-image: url("../assets/image/background-icon.svg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    padding: 25px;
  }

  &-footer {
    display: flex;
    flex-direction: column;
    gap: 34px;
    margin-bottom: 34px;
  }
}

@media screen and (max-width: 575.98px) {
  .intro {
    &-top {
      padding: 20px 0;
    }

    &-body {
      &__title {
        font-size: 20px;
        margin: 12px 0 20px 0;
      }

      &__text {
        font-size: 16px;
        font-weight: 300;
      }
    }

    &-footer {
      &__button {
        font-size: 15px;
        padding: 20px 25px;
      }
    }
  }
}
</style>
