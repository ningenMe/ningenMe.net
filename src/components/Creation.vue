<template>
    <v-card color="indigo lighten-5">
    <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
        <v-toolbar-title>Creation</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="px-30">
        <div v-for="(e, i) in creation" v-bind:key="i">
        <div style="display:flex;">
            <div class="font-weight-bold font-italic" style="margin-right:auto;">
            {{e.type}} : 
            <a v-bind:href="e.link" target="_blank">{{e.name}} </a>
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
            type: 'Apps',
            name: 'AtCoder偏差値くん',
            link: 'http://52.192.157.103/hensachi/'
          },
          {
            type: 'Compro',
            name: '精進記録(refactoring now ...)',
            link: '#'
          },
          {
            type: 'Paper',
            name: 'Phys.Rev.Appl.10,034063',
            link: 'https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.10.034063'
          }],
      }
    }
  }
</script>

