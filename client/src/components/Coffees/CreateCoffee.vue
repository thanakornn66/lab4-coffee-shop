<template>
  <div>
    <h1>Create Coffee</h1>

    <form @submit.prevent="createCoffee">
      <p>ชื่อ: <input v-model="coffee.name" /></p>
      <p>ราคา: <input v-model="coffee.price" type="number" /></p>
      <p>ประเภท: <input v-model="coffee.type" /></p>
      <p>สถานะ: <input v-model="coffee.status" /></p>

      <button type="submit">เพิ่มเมนู</button>
      <button @click="navigateTo('/coffees')">กลับ</button>
    </form>
  </div>
</template>

<script>
import CoffeeService from '@/services/CoffeeService'

export default {
  data () {
    return {
      coffee: {
        name: '',
        price: '',
        type: '',
        status: ''
      }
    }
  },
  methods: {
    async createCoffee () {
      await CoffeeService.post(this.coffee)
      this.$router.push({ name: 'coffees' })
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
