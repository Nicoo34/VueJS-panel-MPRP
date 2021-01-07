<template>
 <body>
<Sidebar />
</body>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>


<style lang="less">
html, body {
  height: 100%;
	padding: 0;
	margin: 0;
	overflow-x: hidden;
	background: url(../assets/bg.jpg);
	background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


</style>