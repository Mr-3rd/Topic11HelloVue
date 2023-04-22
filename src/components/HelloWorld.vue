<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{helloMessage}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // create a function to set the data
  data() {
    return {
      helloMessage: ''
    }
  },
  props: {
    msg: String,
  },
  // add the special mounted function - gets called as the vue app is generated on screen - initial configuration here
  mounted() {
    // make the axios api call
    this.$hello_api.getHelloMessage().then( resp => {
      console.log(resp)
      this.helloMessage = resp.Message
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
