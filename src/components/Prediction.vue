<template>
  <div class="prediction">
    <div class="container">
      <div class="prediction-wrapper">
        <div class="prediction-title">
          <p class="prediction__title subtext">Онлайн предсказание</p>
        </div>
        <div class="prediction-top">
          <div class="prediction-top-wrapper-img">
            <img src="@/assets/image/praying.png" alt="" />
          </div>
          <p class="prediction-top__text text">
            Позвольте нам раскрыть эту волнующую тайну и
            <span class="main__text orange"
              >с точностью определить дату и время вашей смерти,</span
            >
            а также предшествующую этому событию причину
          </p>
        </div>
        <div class="prediction-body">
          <div class="prediction-body-wrapper-img">
            <img src="@/assets/image/prediction-img.png" alt="" />
            <p class="prediction-body__text text">
              Многие не верят предсказаниям и мы решили доказать каждому,
              <span> что прогноз может изменить жизнь любого человека!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "prediction",
};
</script>

<style lang="scss" scoped>
.prediction {
  padding: 100px 0 0 0;

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-top {
    position: relative;
    max-width: 400px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    padding: 80px 30px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 3px;

    &-wrapper-img {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &-body {
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    &-wrapper-img {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

@media screen and (max-width: 767.98px) {
  .prediction {
    padding: 75px 0 0 0;

    &-top__text {
      font-size: 20px;
    }

    &-body {
      &__text {
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 575.98px) {
  .prediction {
    padding: 50px 0 0 0;

    &-top {
    padding: 58px 19px 32px 19px;
    }

    &-body {
      &__text {
        font-size: 14px;
      }
    }
  }
}
</style>
