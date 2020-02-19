<template>
  <div class="root">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        
        <!-- real -->
        <v-flex xs12>
          <Real/>
        </v-flex>

        <!-- motivation -->
        <!-- <v-flex xs12>
          <Motivation/>
        </v-flex> -->

        <!-- profile -->
        <!-- <v-flex xs12>
          <Profile/>
        </v-flex> -->

        <!-- Creation -->
        <!-- <v-flex xs12>
          <Creation/>
        </v-flex> -->

        <!-- Apps -->
        <v-flex xs12>
          <Apps/>
        </v-flex>

        <!-- Problem -->
        <v-flex xs12>
          <Problem/>
        </v-flex>

        <!-- Paper -->
        <v-flex xs12>
          <Paper/>
        </v-flex>

        <!-- Activity -->
        <v-flex xs12>
          <Activity/>
        </v-flex>

        <!-- History -->
        <v-flex xs12>
          <History/>
        </v-flex>

        <!-- Programming -->
        <v-flex xs12>
          <Programming/>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.xsrfHeaderName  = 'X-CSRF-Token'
  axios.defaults.withCredentials = true
  import Real from '../components/Real'
  import Motivation from '../components/Motivation'
  import Profile from '../components/Profile'
  import Creation from '../components/Creation'
  import Apps from '../components/Apps'
  import Problem from '../components/Problem'
  import Paper from '../components/Paper'
  import Activity from '../components/Activity'
  import History from '../components/History'
  import Programming from '../components/Programming'

  export default {
    components: {
      Real,Motivation,Profile,Creation,Apps,Problem,Paper,Activity,History,Programming
    },
    mounted () {
      axios.post('https://ningenme.net/home.api/access',{
        'name':'home'
      })
      .then(response => (this.responseBody = response.data))
    }

  }
</script>

