<template>
<div class= "contain">
    <mt-header title="xx治的vue项目">
  <span slot="left" @click="goback" v-show="flag">
    <mt-button icon="back">返回</mt-button>
  </span>
		</mt-header>
			<transition>
   	 <router-view></router-view>
		</transition>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/first">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/second">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/third">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/fouth">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
</div>
</template>
<script>
export default {
	data() {
		return {
			flag : false
		}
	},
	created() {
		this.flag= this.$route.path === "/first" ? false : true
	},
	methods: {
		//顶部返回上一层路由
		goback() {
			this.$router.go(-1)
		}
		
	},
	watch: {
		//当为首页时，不显示顶部的返回按钮
			'$route.path': function(path) {
				if(path === "/first") {
					this.flag = false
				}
				else{
					this.flag = true
				}
			}
		}
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.contain {
 overflow-x: hidden;
	padding-bottom: 50px;

}
.v-enter {
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
	
}

</style>
