<template>
  <v-app id="inspire">
    <SideMenu
      :menuItems="menuItems"
      :drawer="drawer"
      title="Projeto T"
      subTitle="Software de Gerenciamento" />
    <TopBar
      @drawerToggle="drawerToggle"
      title="Projeto T" />
    <Main
      :breadcrumbsItems="breadcrumbsItems" />
  </v-app>
</template>

<script>
  import SideMenu from '../../components/app/SideMenu';
  import TopBar from '../../components/app/TopBar';
  import Main from '../../components/app/Main';

  export default {
    name: 'App',
    components: {
      SideMenu,
      TopBar,
      Main
    },
    data: () => ({
      drawer: true,
      menuItems: [
        { title: 'Colaboradores', icon: 'mdi-account-group-outline', to: '/employees'},
      ],
      breadcrumbsItems: [
        { text: 'Dashboard', disabled: false, href: '/', },
        { text: 'Colaboradores', disabled: false, href: '/employees', },
        { text: 'Listagem', disabled: true },
      ]
    }),
    methods: {
      drawerToggle: function () {
        this.drawer = !this.drawer;
      }
    },
  }
</script>