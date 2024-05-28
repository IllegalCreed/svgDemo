<template>
  <div class="about">
    <SvgIcon :name="name1"></SvgIcon>
    <IconPicker v-model="name"></IconPicker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconPicker from '@/components/IconPicker.vue';
const name1 = ref('icon-material-symbols--album');
const name = ref('icon-material-symbols--all-match');
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
