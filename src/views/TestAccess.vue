<template>
  <div class="testaccess">
    <br />
    <div example>{{responseBody}}</div>
    <br />

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      responseBody: [],
    }
  },
  mounted () {
    axios.post('http://127.0.0.1:8000/access',{
      'name':'hoge'
    })
    .then(response => (this.responseBody = response.data))
  }
}
</script>
