<template>
  <header class="header_wrapper">
    <div class="header_tabs">
        <v-tabs fixed-tabs>
            <v-tab :to="URLS.HOME">{{content.HOME_TAB}}</v-tab>
            <v-tab :to="URLS.SEARCH">{{content.SEARCH_TAB}}</v-tab>
        </v-tabs>
    </div>
  </header>
</template>

<script>
import content from "../../content/index";
import consts from "../../consts/index";
const { URLS } = consts;

export default {
  name: 'Header',
  data() {
    return {
      content,
      URLS
    }
  }
}
</script>

<style lang='scss'>
@import '../../styles/colors';

.header_wrapper {
  border-bottom: 1px solid $middle_gray;
}
</style>
