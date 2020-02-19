<template>
    <v-card color="indigo lighten-5">
    <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
        <v-toolbar-title>My Compro Problems</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="px-30">
        <div v-for="(e, i) in creation" v-bind:key="i">
        <div style="display:flex;">
            <div class="font-weight-bold font-italic" style="margin-right:auto;">
            ・<a v-bind:href="e.link" target="_blank">{{e.name}} </a>
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
        creation: [
          {
            type: 'Problem',
            name: '[yukicoder] All Tree Path',
            link: 'https://yukicoder.me/problems/no/872'
          },
          {
            type: 'Problem',
            name: '[yukicoder] Omiyage',
            link: 'https://yukicoder.me/problems/no/914'
          },
          {
            type: 'Problem',
            name: '[yukicoder] Plus Or Multiple Operation',
            link: 'https://yukicoder.me/problems/no/915'
          },
          {
            type: 'Problem',
            name: '[yukicoder] Encounter On A Tree',
            link: 'https://yukicoder.me/problems/no/916'
          },
          {
            type: 'Problem',
            name: '[yukicoder] Make One With GCD',
            link: 'https://yukicoder.me/problems/no/917'
          },
          {
            type: 'Problem',
            name: '[yukicoder] LISGRID',
            link: 'https://yukicoder.me/problems/no/918'
          },
          {
            type: 'Problem',
            name: '[yukicoder] You Are A Project Manager',
            link: 'https://yukicoder.me/problems/no/919'
          },
          {
            type: 'Problem',
            name: '[yukicoder] Bomb vs Dush',
            link: 'https://yukicoder.me/problems/no/948'
          },
          ],
      }
    }
  }
</script>

