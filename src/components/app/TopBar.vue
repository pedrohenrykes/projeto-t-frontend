<template>
  <v-app-bar app height="66">
    <v-app-bar-nav-icon @click="drawerToggle"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'TopBar',
    props: {
      title: String
    },
    methods: {
      drawerToggle() {
        this.$emit('drawerToggle');
      }
    }
  }
</script>