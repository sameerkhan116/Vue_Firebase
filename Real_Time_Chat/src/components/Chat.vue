<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }}</span>
            <span class="grey-text text-darken-3">{{ message.content }}</span>
            <span class="grey-text time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
      <NewMessage :name="name" />
    </div>
  </div>
</template>

<script>
import NewMessage from '@/components/NewMessage';
import db from '@/firebase/init';
import moment from 'moment';

export default {
  name: 'Chat',
  data() {
    return {
      messages: [],
    };
  },
  props: ['name'],
  components: {
    NewMessage,
  },
  async created() {
    db.collection('messages').orderBy('timestamp').onSnapshot((snapshot) => {
      console.log(snapshot.docChanges());
      snapshot.docChanges().forEach((x) => {
        if (x.type === 'added') {
          const doc = x.doc;
          const { name, content, timestamp } = doc.data();
          this.messages.push({
            id: doc.id,
            name,
            content,
            timestamp: moment(timestamp).format('lll'),
          });
        }
      });
    });
  },
};
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat ul {
  text-align: left;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
</style>
