<template>
  <router-view />
</template>

<script setup>
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
import { useStore } from 'vuex'

const store = useStore()
generateNewStyle(store.getters.mainColor).then((newStyleText) => {
  writeNewStyle(newStyleText)
})
</script>

<style></style>
