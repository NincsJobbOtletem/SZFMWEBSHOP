<template>
  <div class="home-page">
    <section class="intro">
      <h1>Legjobb webshop ever:D</h1>
      
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }
  }

</script>


<style scoped>
.intro {
  height: 400px;
  
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/assad.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position:absolute;
  top: 4%;
  left: 4%;
  width: 58%;
  font-size: 1.5rem;
  color: black;
  background-color:whitesmoke;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
