<template>
  <v-breadcrumbs
    :items="breadcrumbsItems" >
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    breadcrumbsItems: Array
  }
}
</script>