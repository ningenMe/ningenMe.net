<template>
  <div class="testaccess">
    <br />
    <div example>{{responseBody}}</div>
    <br />

  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.xsrfHeaderName  = 'X-CSRF-Token'
axios.defaults.withCredentials = true

export default {
  data () {
    return {
      responseBody: [],
    }
  },
  mounted () {
    axios.post('http://ningenme.net/home.API/access',{
      'name':'hoge'
    })
    .then(response => (this.responseBody = response.data))
  }
}
</script>
