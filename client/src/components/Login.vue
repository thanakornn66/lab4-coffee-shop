<script>
import AuthenService from '@/services/AuthenService'
import { useAuthenStore } from '@/stores/authen' // เรียกใช้ Pinia Store

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async onLogin () {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        })

        // เรียกใช้ Store
        const authenStore = useAuthenStore()

        // เก็บ Token และ User ลง Store
        authenStore.setToken(response.data.token)
        authenStore.setUser(response.data.user)

        // redirect หลัง login สำเร็จ
        this.$router.push({
          name: 'users'
        })

      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>
