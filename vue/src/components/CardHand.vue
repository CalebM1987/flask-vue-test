<template>
  <b-row class="card-hand">
    <b-col xs="6" sm="4" lg="2" v-for="(card, idx) in hand" :key="idx" class="px-3">
      <slot v-bind="card"></slot>
    </b-col>
  </b-row>
</template>

<script>

  export default {
    name: 'card-hand',

    props: {
      hand: {
        type: Array,
        default(){
          return []
        }
      }
    }

  }

</script>

<style>

</style>