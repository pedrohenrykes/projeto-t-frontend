<template>
  <v-navigation-drawer v-model="opened" app>
    <SideMenuHeader
      :title="title"
      :subTitle="subTitle"/>
    <v-list dense nav>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.to"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import SideMenuHeader from './SideMenuHeader';

  export default {
    name: 'SideMenu',
    components: {
      SideMenuHeader
    },
    props: {
      drawer: Boolean,
      title: String,
      subTitle: String,
      menuItems: Array
    },
    data: () => ({
      opened: true
    }),
    watch: {
      drawer(value) {
        this.opened = value;
      }
    }
  }
</script>