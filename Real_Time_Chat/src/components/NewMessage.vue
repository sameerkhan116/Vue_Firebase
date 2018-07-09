<template>
  <div class="newMessage card-action">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model="newMessage">
      <p v-if="feedback" class="red-text">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init';

export default {
  name: 'NewMessage',
  data() {
    return {
      newMessage: '',
      feedback: '',
    };
  },
  props: ['name'],
  methods: {
    async addMessage() {
      console.log(this.newMessage);
      if (this.newMessage) {
        try {
          await db.collection('messages').add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          });
        } catch (err) {
          console.log(err);
        }
        this.newMessage = '';
        this.feedback = '';
      } else {
        this.feedback = 'You must enter a message';
      }
    },
  },
};
</script>

<style>
</style>
