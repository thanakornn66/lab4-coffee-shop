<template>
  <div>
    <h2>All Coffees</h2>

    <button @click="navigateTo('/coffee/create')">
      เพิ่มเมนู
    </button>

    <div v-for="coffee in coffees" :key="coffee.id">
      <p>ชื่อ: {{ coffee.name }}</p>
      <p>ราคา: {{ coffee.price }}</p>
      <p>ประเภท: {{ coffee.type }}</p>
      <p>สถานะ: {{ coffee.status }}</p>

      <button @click="navigateTo('/coffee/' + coffee.id)">ดู</button>
      <button @click="navigateTo('/coffee/edit/' + coffee.id)">แก้ไข</button>
      <button @click="deleteCoffee(coffee)">ลบ</button>
      <hr>
    </div>
  </div>
</template>

<script>
import CoffeeService from '@/services/CoffeeService'

export default {
  data () {
    return {
      coffees: []
    }
  },
  async created () {
    this.coffees = (await CoffeeService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteCoffee (coffee) {
      let result = confirm("Delete?")
      if (result) {
        await CoffeeService.delete(coffee)
        this.coffees = (await CoffeeService.index()).data
      }
    }
  }
}
</script>
