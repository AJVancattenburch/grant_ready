<template>
  <div class="logo-box">
    <img src="../assets/img/grant-ready-logo.svg" alt="" class="img-fluid">
  </div>
</template>

<style scoped lang="scss">
.logo-box {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 5rem;
  letter-spacing: 0.5rem;
  z-index: 1000;
  img {
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>