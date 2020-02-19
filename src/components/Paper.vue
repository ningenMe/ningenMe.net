<template>
    <v-card color="indigo lighten-5">
    <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
        <v-toolbar-title>Paper</v-toolbar-title>
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
            type: 'Paper',
            name: 'J. Phys. D: Appl. Phys. 53, 094001(2019)',
            link: 'https://iopscience.iop.org/article/10.1088/1361-6463/ab5a27/meta'
          },
          {
            type: 'Paper',
            name: 'Jpn.J.Appl.Phys. 58, 070901(2019)',
            link: 'https://iopscience.iop.org/article/10.7567/1347-4065/ab2406/meta'
          },
          {
            type: 'Paper',
            name: 'Phys.Rev.Appl. 10, 034063(2018)',
            link: 'https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.10.034063'
          },
          ],
      }
    }
  }
</script>

