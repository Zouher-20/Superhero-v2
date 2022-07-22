<template>
  <div class="radius auth-card pa-14">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.auth-card {
  border: 3px solid #c0b1ff;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 550px;
  background-color: #0f0a22;
}
</style>
