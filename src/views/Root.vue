<template>
  <div class="root">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        
        <!-- motivation -->
        <v-flex xs12>
          <Motivation/>
        </v-flex>

        <!-- profile -->
        <v-flex xs12>
          <Profile/>
        </v-flex>

        <!-- Creation -->
        <v-flex xs12>
          <Creation/>
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
  import Motivation from '../components/Motivation'
  import Profile from '../components/Profile'
  import Creation from '../components/Creation'
  import Activity from '../components/Activity'
  import History from '../components/History'
  import Programming from '../components/Programming'

  export default {
    components: {
      Motivation,Profile,Creation,Activity,History,Programming
    },
    mounted () {
      axios.post('http://18.182.85.26/home.API/access',{
        'name':'home'
      })
      .then(response => (this.responseBody = response.data))
    }

  }
</script>

