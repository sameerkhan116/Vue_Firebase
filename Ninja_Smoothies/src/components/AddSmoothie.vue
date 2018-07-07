<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title: </label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(ing, index) in ingredients" :key="index" class="field">
        <label for="ingredient">Ingredient: </label>
        <input type="text" name="ingredient" v-model="ingredients[index]">
        <i class="material-icons delete" @click="deleteIngredient(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient: </label>
        <input @keydown.tab.prevent="addIngredient" type="text" name="add-ingredient" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'AddSmoothie',
  data () {
    return {
      title: '',
      another: '',
      ingredients: [],
      feedback: '',
      slug: ''
    }
  },
  methods: {
    async addSmoothie () {
      // console.log(this.title)
      if (this.title) {
        this.feedback = ''
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        try {
          await db.collection('smoothies').add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug
          })
          this.$router.push('/')
        } catch (err) {
          console.log(err)
        }
      } else {
        this.feedback = 'You must enter a smoothie title.'
      }
    },
    addIngredient () {
      if (this.another !== '') {
        this.ingredients.push(this.another)
        console.log(this.ingredients)
        this.another = ''
        this.feedback = ''
      } else {
        this.feedback = 'You must enter a value to add an ingredient!'
      }
    },
    deleteIngredient (ing) {
      this.ingredients = this.ingredients.filter(x => x !== ing)
    }
  }
}
</script>

<style>
.add-smoothie {
  margin-top: 50px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.add-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
