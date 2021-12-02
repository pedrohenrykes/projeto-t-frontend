<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col class="my-1 mx-2 pa-0">
          <Breadcrumbs :breadcrumbsItems="breadcrumbsItems" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="my-0 mx-6 py-0 elevation-4 rounded">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import Breadcrumbs from './Breadcrumbs';

  export default {
    name: 'Main',
    components: {
      Breadcrumbs
    },
    props: {
      breadcrumbsItems: Array
    }
  }
</script>
