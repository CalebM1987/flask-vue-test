<template>
  <div class="home">
    <dealer></dealer>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Dealer: ()=> import('@/components/Dealer')
  }
}
</script>
