<template>
  <section class="svg-background-wrapper">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.svg-background-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/img/grant-ready-background.svg);
    background-color: var(--retro-brown);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0;
    margin: 0;
    z-index: 0;
  }
}
</style>