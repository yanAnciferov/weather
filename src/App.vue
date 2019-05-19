<template>
  <v-app>
    <ErrorBox :errorMessage="getErrorMessage" v-if="isError" />
    <Header/>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <PageLoader v-if="isPending"/>
  </v-app>
</template>

<script>
import Header from './components/Header/Header';
import ErrorBox from './components/Common/ErrorBox';
import PageLoader from './components/Common/PageLoader';
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    PageLoader,
    Header,
    ErrorBox
  },
  computed: {
    ...mapGetters({  
      isPending: 'getPendingState',
      isError: 'getErrorState',
      getErrorMessage: 'getErrorMessage'
    })
  }
}
</script>

<style lang="scss">
.main-container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1em;
}
</style>

