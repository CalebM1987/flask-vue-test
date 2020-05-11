<template>
  <p class="playing-card">
    <slot v-bind:card="card">
      Default {{ card.value }} {{ card.suit }}
    </slot>
  </p>
</template>

<script>

  export default {
    name: 'playing-card',

    props: {
      card: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }

</script>

<style>
  .playing-card {
    font-size: 8rem;
  }

</style>