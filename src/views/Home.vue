<template>
    <div class="warpper">
        <my-header></my-header>
        <my-sidebar></my-sidebar>

        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import MyHeader from '@/components/Header.vue'
  import MySidebar from '@/components/Sidebar.vue'


  export default {
    name: 'home',
    data() {
      return {
        info: null
      }
    },
    components: {
      MyHeader,
      MySidebar
    },
    mounted() {
      this.$http.get('http://localhost:8080/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    }
  }
</script>
