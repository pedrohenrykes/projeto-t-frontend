<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ subTitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
  export default {
    name: 'SideMenuHeader',
    props: {
      title: String,
      subTitle: String
    }
  }
</script>