<template>
  <q-item
    clickable
<<<<<<< HEAD
    :to="route"
    exact
=======
    tag="a"
    target="_blank"
    :href="link"
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

<<<<<<< HEAD
    route: {
      type: String,
      default: ''
=======
    link: {
      type: String,
      default: '#'
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
