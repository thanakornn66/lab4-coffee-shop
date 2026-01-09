<template>
  <div>
    <h1>Show User</h1>

    <!-- แสดงค่า userId ที่ดึงมาจาก URL เช่น /user/15 -->
    <p>User ID: {{ userId }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // เก็บค่า ID ของ user ที่ได้จาก route parameter
      userId: null
    }
  },

  created () {
    /*
      created() จะรันทันทีหลัง component ถูกสร้าง
      ตอนนี้ userId ยังเป็น null เพราะยังไม่ได้อ่านค่าจาก route
    */
    console.log("created userId:", this.userId)
  },

  mounted () {
    /*
      mounted() จะรันหลัง component ถูก mount กับ DOM แล้ว
      อ่านค่า id จาก URL เช่น /user/15
      ต้องใช้ชื่อ param ให้ตรงกับ router (id)
    */
    this.userId = this.$route.params.id
    console.log("mounted userId:", this.userId)
  },

  watch: {
    /*
      watch ใช้ดักกรณีเปลี่ยน URL จาก /user/15 → /user/20
      component จะไม่ถูกสร้างใหม่
      ต้องอัปเดตค่า userId เอง
    */
    '$route.params.id'(newId) {
      this.userId = newId
      console.log("watch userId:", newId)
    }
  }
}

</script>
