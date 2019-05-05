<template>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in NewsList" :key="item.id">
					<router-link :to="'/first/NewsList/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                                <span>发表时间：{{item.add_time}}</span>
                                <span>点击次数：{{item.onclick}}</span> 
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
</template>
<script>
export default {
            data() {
        return {
            NewsList: []
        }
    },
    methods: {
    getInfo() {
         this.$axios.get('/NewsList.json').then( res => {
         
             if(res.status === 200) {
                 var str= res.data
                 this.NewsList= eval('('+str+')').NewsList
             }
             else{
                 Toast('加载失败')
             }
         }).catch(function(error){
            console.log(error);
        })   
     } 
    } ,
    mounted() {
        this.getInfo()
    }
}
</script>
<style scoped>
.mui-ellipsis {
    font-size: 12px;
    color: #04e8f8;
    display: flex;
    justify-content: space-between;

}
.mui-media-body h1 {
    font-size: 15px;
}
</style>

