<template>
  <div>
    <form @submit.prevent="save">
      <input type="text" v-model="form.title"> <br>
      <textarea v-model="form.content"></textarea> <br>
      <button type="submit">Submit</button>

    </form>

    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }} <br>
        {{ article.content }}
      </li>
    </ul>
    <button @click="load">load</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  
  data(){
    return {
      form: {
        title: '',
        content: '' 
      },


      articles : []

    }
  },
  async mounted(){

    // this.load()

  },

  methods: {

    async load(){

      const response = await axios.get('http://localhost:3000/articles')
      this.articles = response.data

    },

    async save() {
        const response = await axios.post('http://localhost:3000/articles', this.form)
        this.articles = response.data
        this.title =''
        this.content =''
        this.load()
      } 


  }


}
</script>