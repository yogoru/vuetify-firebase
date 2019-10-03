<template>

  <v-app>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <AppHeader/>

    <v-content>
      <router-view/>
    </v-content>

    <AppFooter/>
  </v-app>
</template>

<script>

import AppHeader from './components/AppHeader';
import AppFooter from "./components/AppFooter";


export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
  },
  data: () => ({
    //
  }),
};
</script>
