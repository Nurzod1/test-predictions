<template>
  <div class="footer">
    <div class="footer-icon-wrapper">
      <img src="@/assets/image/footer-icon.png" alt="" />
    </div>
    <p class="footer__text text-bad">
      Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут.
    </p>
    <div class="footer-wrapper-icon">
      <img src="@/assets/image/footer-icon-2.png" alt="" />
    </div>
    <div class="footer-background-right">
      <img src="@/assets/image/eye.png" alt="" />
    </div>
    <div class="footer-background-left">
      <img src="@/assets/image/round.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 0 0;

  &__text {
    max-width: 400px;
    margin: 80px 0 40px 0;
  }

  &-background-right {
    position: absolute;
    top: 0;
    right: -100%;
    width: 296px;
    height: 170px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-background-left {
    position: absolute;
    left: -100%;
    bottom: -25%;
    width: 164px;
    height: 164px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 767.98px) {
  .footer {
    &__text {
      margin: 40px 0;
    }

    &-background-right {
      width: 170px;
      height: 100px;
      right: -37%;
      top: 20%;
    }
    &-background-left {
      width: 80px;
      height: 80px;
      left: -30%;
      bottom: 0%;
    }
  }
}
</style>
