<template>
  <q-layout view="lHh Lpr lFf">
<<<<<<< HEAD
    <q-header elevated class="toolbar-green">
      <q-toolbar color="#24cb53">
=======
    <q-header class="custom-header" elevated>
      <q-toolbar>
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
<<<<<<< HEAD
          class="menu-icon"
        />

        <q-toolbar-title style="color: white;">
=======
        />

        <q-btn
          flat
          dense
          round
          icon="home"
          aria-label="Home"
          @click="$router.push('/index')"
        />

        <q-toolbar-title class="title-header">
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
          Agenda App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
<<<<<<< HEAD
      class="drawer-green"
=======
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
    >
      <q-list>
        <q-item-label
          header
<<<<<<< HEAD
          class="menu-header"
          style="font-size: 20px;"
        >
          Menus
=======
        >
          Menu
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
<<<<<<< HEAD
          class="menu-item"
          style="font-size: 20px;"
        />
=======
        />

        <q-item clickable @click="$router.push('/cadastro-cliente')">
          <q-item-section>
            <q-item-label>Cadastro de Cliente</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="$router.push('/lista-clientes')">
          <q-item-section>
            <q-item-label>Lista de Clientes</q-item-label>
          </q-item-section>
        </q-item>
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
<<<<<<< HEAD
  {

    title: 'Agendar',
    caption: '',
    icon: 'ebook',
    route: { name: 'AgendarConsultas' }
  },
  {
    title: 'Consultas',
    caption: '',
    icon: 'list',
    route: { name: 'Consultas' }
  }
=======

>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
<<<<<<< HEAD
.toolbar-green { background-color: green; }
.menu-icon { color: white; }
.drawer-green { background-color: #ebebeb; color: rgb(0, 0, 0); }
.menu-header { color: black; }
.menu-item { color: black; }

=======
.custom-header {
  background-color: green; /* Altere para a cor verde que desejar */
}
>>>>>>> 32d4f7579a5d328a53750c30abdeb961ccaa87ca
</style>
