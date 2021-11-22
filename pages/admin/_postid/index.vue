<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(context){
    console.log(context.params.postid)
    return axios.get('https://szfm-beadando-db-default-rtdb.europe-west1.firebasedatabase.app/posts/'+ context.params.postid + '.json')
    .then(res => {
      console.log(res.data)
      return {
        loadedPost: {...res.data, id: context.params.postid}
          
        
      }
      
    })
    .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost){
      this.$store.dispatch('editPost', editedPost).then(()=>{
        this.$router.push("/admin").catch(()=>{}) 
      })
      }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
