<template>
  <div>
    <h1>Edit Coffee</h1>

    <form @submit.prevent="updateCoffee">
      <p>ชื่อ: <input v-model="coffee.name" /></p>
      <p>ราคา: <input v-model="coffee.price" type="number" /></p>
      <p>ประเภท: <input v-model="coffee.type" /></p>
      <p>สถานะ: <input v-model="coffee.status" /></p>

      <button type="submit">บันทึก</button>
      <button @click="navigateTo('/coffees')">กลับ</button>
    </form>
  </div>
</template>

<script>
import CoffeeService from '@/services/CoffeeService'

export default {
  data () {
    return {
      coffee: {}
    }
  },
  async created () {
    const coffeeId = this.$route.params.coffeeId
    this.coffee = (await CoffeeService.show(coffeeId)).data
  },
  methods: {
    async updateCoffee () {
      await CoffeeService.put(this.coffee)
      this.$router.push({ name: 'coffees' })
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
