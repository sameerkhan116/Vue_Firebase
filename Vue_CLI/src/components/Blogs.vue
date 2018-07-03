<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <!-- <button @click="changeTitle">Change title</button> -->
    <input type="text" v-model="searchTerm" name="searchBox">
    <div v-for="post in filteredPosts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | snippet }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Blogs',
  data() {
    return {
      blogTitle: 'Blogs',
      posts: [],
      searchTerm: '',
    };
  },
  methods: {
    changeTitle() {
      this.blogTitle = 'Amazing Blog';
    },
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.title.match(this.searchTerm));
    },
  },
  // beforeCreate() {
  //   // eslint-disable-next-line
  //   console.log('beforeCreate hook');
  // },
  created() {
    // eslint-disable-next-line
    console.log('created hook');
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((posts) => {
      // eslint-disable-next-line
        console.log(posts.data);
        this.posts = posts.data;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  },
  // beforeUpdate() {
  //   // eslint-disable-next-line
  //   console.log('Before Update hook');
  // },
};
</script>
