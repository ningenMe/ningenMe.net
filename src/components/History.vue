<template>
  <v-card color="indigo lighten-5">
    <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
      <v-toolbar-title>History</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="px-30">
      <div v-for="(e, i) in history" v-bind:key="i">
        <div style="display:flex;">
          <div class="font-weight-bold" style="margin-right:auto;">
            {{e.year}} : {{e.text}}
          </div>
        </div>
      </div>              
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        history: [
          {
            year: '2019-20XX',
            text: 'バックエンド開発のWebエンジニア'
          },
          {
            year: '2017-2019',
            text: '大阪大学大学院　基礎工学研究科'
          },
          {
            year: '2013-2017',
            text: '大阪大学　基礎工学部'
          }
        ]
      }
    }
  }
</script>

