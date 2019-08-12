<template>
  <v-card color="indigo lighten-5">
    <v-toolbar color="grey darken-3" dark height="24px" flat class="font-italic">
      <v-toolbar-title>Programming</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="px-30">
      <div style="display:flex;">
        <div class="font-weight-bold font-italic" style="margin-right:auto;">
          language: 
          <a v-for="(e,i) in language" v-bind:key="i">
            {{e}},
          </a>
          <br />framework: 
          <a v-for="(e,i) in framework" v-bind:key="i">
            {{e}},
          </a>
          <br />library: 
          <a v-for="(e,i) in library" v-bind:key="i">
            {{e}},
          </a>
        </div>
      </div>            
    </v-card-text>
  </v-card>

</template>

<script>
  export default {
    data () {
      return {
        language: [
          'C++','Python','Java','PHP','JavaScript','FORTRAN'
        ],
        framework: [
          'Laravel','Fuel','Spring Boot','Vue'
        ],
        library: [
          'TensorFlow','GNU scientific library','OpenCV','Bootstrap',
        ]

      }
    }
  }
</script>

