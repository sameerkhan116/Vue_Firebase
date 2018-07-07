<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>Edit {{ smoothie.title }} </h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title: </label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div v-for="(ing, index) in smoothie.ingredients" :key="index" class="field">
        <label for="ingredient">Ingredient: </label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIngredient(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient: </label>
        <input @keydown.tab.prevent="addIngredient" type="text" name="add-ingredient" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'EditSmoothie',
  data () {
    return {
      smoothie: null,
      another: '',
      feedback: ''
    }
  },
  methods: {
    addIngredient () {
      if (this.another !== '') {
        this.smoothie.ingredients.push(this.another)
        console.log(this.smoothie.ingredients)
        this.another = ''
        this.feedback = ''
      } else {
        this.feedback = 'You must enter a value to add an ingredient!'
      }
    },
    deleteIngredient (ing) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(x => x !== ing)
    },
    async editSmoothie () {
      if (this.smoothie.title) {
        this.feedback = ''
        this.smoothie.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        try {
          await db.collection('smoothies').doc(this.smoothie.id).update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug
          })
          this.$router.push('/')
        } catch (err) {
          console.log(err)
        }
      } else {
        this.feedback = 'You must enter a smoothie title.'
      }
    }
  },
  async beforeCreate () {
    try {
      const snapshot = await db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug).get()
      snapshot.forEach(doc => {
        console.log(doc.data())
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
.edit-smoothie {
  margin-top: 50px;
  padding: 20px;
  max-width: 500px;
}
.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
