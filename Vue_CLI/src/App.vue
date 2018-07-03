<template>
  <div id="app">
    <HelloWorld/>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
    <Blogs />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import OnlineFriends from './components/OnlineFriends';
import AllFriends from './components/AllFriends';
import Blogs from './components/Blogs';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    AllFriends,
    OnlineFriends,
    Blogs,
  },
  data() {
    return {
      friends: [
        { name: 'Mario', online: true },
        { name: 'Luigi', online: false },
        { name: 'Toad', online: true },
        { name: 'Bowser', online: false },
      ],
    };
  },
  methods: {
    deleteFriend({ name }) {
      // eslint-disable-next-line
      console.log(name);
      this.friends = this.friends.filter(x => x.name !== name);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
