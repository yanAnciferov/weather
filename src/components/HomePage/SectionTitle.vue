<template>
  <div class="home_wrapper">
    <div class="section-title">
      <div class="section-title_strip"></div>
      <div class="section-title_text">{{text}}</div>
      <div class="section-title_strip"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['text']
}
</script>

<style lang='scss'>
@import '../../styles/colors';

.section-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &_strip {
    height: 1px;
    background-color: $middle_gray2;
    flex-grow: 1;
  }

  &_text {
    margin: 0 .5em;
    font-size: 1.7em;
    color: $dark_gray;
  }
}
</style>
