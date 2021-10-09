<template>
	<div class="root">
		<top-header/>
		<left-direct/>
		<show-page/>
  	</div>
</template>

<script>
import TopHeader from './TopHeader.vue'
import LeftDirect from '@/components/LeftDirect'
import ShowPage from '@/components/ShowPage'

export default {
  components: { TopHeader,LeftDirect,ShowPage, ShowPage},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeRouteEnter(to, from, next) {
    // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题
    document.querySelector('body').setAttribute('style','margin:0;padding:0')
    next()
},
  beforeRouteLeave(to, from, next) {
    // 去除背景色
    document.querySelector('body').setAttribute('style','')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
	width: 100%;
	height: 1000px;
	/* background-color: bisque; */
	text-align: center;
}


</style>
