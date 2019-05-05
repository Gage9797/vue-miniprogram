<template>
<div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swiperList" :key="item.index">
            <img :src="item.imgSrc" alt="" />
        </mt-swipe-item>
    </mt-swipe>
     <ul class="mui-table-view mui-grid-view mui-grid-9" >
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/first/NewsList">
		                    <img src="../../assets/images/menu1.png" />
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/first/video">
		                    <img src="../../assets/images/menu5.png" />
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" ><a href="#" @click="tip">
		                    <img src="../../assets/images/menu2.png" />
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#" @click="tip">
		                    <img src="../../assets/images/menu3.png" />
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#" @click="tip">
		                    <img src="../../assets/images/menu4.png" />
		                    <div class="mui-media-body">留言反馈</div></a></li>		            
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#" @click="tip">
		                    <img src="../../assets/images/menu6.png" />
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 
</div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            swiperList: [],
            value: null
        }
    },
    methods: {
    getInfo() {
         this.$axios.get('https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList').then( res => {
         
             if(res.status === 200) {
                 this.swiperList = res.data.data.swiperList
             }
             else{
                 Toast('加载失败')
             }
         }).catch(function(error){
            console.log(error);
        })    
     },
     tip() {
            Toast('暂未开发该功能')
        } 
    } ,
    mounted() {
        this.getInfo()
    }
}

</script>
<style scoped>
.mui-media-body{
    font-size: 13px !important;
}
.mint-search {
    margin-top: 10px;
    height: 44px;
}
.mint-swipe {
    height: 150px !important;
    background-color: aqua;
}
img {
    width: 100%;
    height: 100%
}
.mui-table-view.mui-grid-view.mui-grid-9  {
    background-color: #fff;
    border: none;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    border: none;
}
.mui-col-sm-3 img {
    width: 60px;
    height: 60px;
}

</style>


