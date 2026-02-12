<template>
  <div>
    <h1>รายละเอียดเมนู</h1>

    <p>ชื่อ: {{ coffee.name }}</p>
    <p>ราคา: {{ coffee.price }}</p>
    <p>ประเภท: {{ coffee.type }}</p>
    <p>สถานะ: {{ coffee.status }}</p>

    <button @click="navigateTo('/coffee/edit/' + coffee.id)">แก้ไข</button>
    <button @click="navigateTo('/coffees')">กลับ</button>
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
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
