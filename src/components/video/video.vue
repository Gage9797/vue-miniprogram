<template>
<div>
    <div class="hot_video">
        <br />
        <h3>热门电影</h3>
        <br />
        <hr />
        <br />
            <ul>         
                <li v-for="item in videosList" :key="item.id">
                    <router-link :to="'/first/video/videoDetail/'+item.id">              
                        <img :src="item.images.small" alt="图片">
                    </router-link>
                    <div class="title">{{item.title}}</div>
                    <ul>
                    <li class="rating">
                        <span v-if="item.rating.stars=='00'?false:true"><star :substar="item.rating.stars"></star></span>
                        <span class="rating-star">{{item.rating.average}}</span>        
                    </li>
                    <button class="btn" @click="tip">选座购票</button>
                    </ul>
                </li>
            </ul>
    </div>
    <div class="hot_video">
        <br />
        <h3>top250</h3>
        <br />
        <hr />
        <br />
            <ul>         
                <li v-for="item in topList" :key="item.id">
                    <router-link :to="'/first/video/videoDetail/'+item.id">              
                        <img :src="item.images.small" alt="图片">
                    </router-link>
                    <div class="title">{{item.title}}</div>
                    <ul>
                    <li class="rating">
                        <span v-if="item.rating.stars=='00'?false:true"><star :substar="item.rating.stars"></star></span>
                        <span class="rating-star">{{item.rating.average}}</span>        
                    </li>
                    <button class="btn"  @click="tip">选座购票</button>
                    </ul>
                </li>
            </ul>
    </div>
    <div class="hot_video">
        <br />
        <h3>即将上映</h3>
        <br />
        <hr />
        <br />
            <ul>         
                <li v-for="item in coming_soon" :key="item.id">
                    <router-link :to="'/first/video/videoDetail/'+item.id">              
                        <img :src="item.images.small" alt="图片">
                    </router-link>
                    <div class="title">{{item.title}}</div>
                    <ul>
                    <li class="rating">
                        <span v-if="item.rating.stars=='00'?false:true"><star :substar="item.rating.stars"></star></span>
                        <span class="rating-star">{{item.rating.average}}</span>        
                    </li>
                    <button class="btn"  @click="tip">选座购票</button>
                    </ul>
                </li>
            </ul>
    </div>
 
</div>
</template>
<script scoped> 
import { Toast } from 'mint-ui'
import star from './star.vue'
export default {
    
    //baseUrl: "https://api.douban.com"，
    //正在热映网址
    //var hotUrl = baseUrl + "/v2/movie/in_theaters";
    //即将上映网址
    //var recentUrl = baseUrl + "/v2/movie/coming_soon" ;
    //排行榜数据网址
    //var top250Url = baseUrl + "/v2/movie/top250" ;
    data() {
        return {
            videosList: [],
            topList: [],
            coming_soon: []
        }
    },
    methods: {
        getInfo() {
            this.$axios.get("/api/v2/movie/in_theaters").then( res => {
                if(res.status === 200) {
                    this.videosList=res.data.subjects
                    //处理数据格式
                    for(let i=0;i<this.videosList.length;i++){
                        if(this.videosList[i].rating.average==0){
                            this.videosList[i].rating.average="暂无评分"
                        }
                    }
                 }
                else{
                    Toast('加载失败')
                }
            }).catch(function(error){
                console.log(error);
            }),
            this.$axios.get("/api/v2/movie/top250").then( res => {
                if(res.status === 200) {
                    this.topList=res.data.subjects                    
                 }
                else{
                    Toast('加载失败')
                }
            }).catch(function(error){
                console.log(error);
            }),
            this.$axios.get("/api/v2/movie/coming_soon").then( res => {
                if(res.status === 200) {
                    this.coming_soon=res.data.subjects
                    for(let i=0;i<this.coming_soon.length;i++){
                        if(this.coming_soon[i].rating.average==0){
                            this.coming_soon[i].rating.average="暂无评分"
                        }
                    }
                 }
                else{
                    Toast('加载失败')
                }
            }).catch(function(error){
                console.log(error);
            })
            
        },
        tip() {
            console.log("暂不支持该功能")
            Toast('暂不支持该功能')
        }
    }, 
   

    created() {
        this.getInfo()
    },
    components: {
        star: star
    }
}
</script>
<style scoped>
* {
	padding:0;
	margin:0;
}
.hot_video>ul {
    display: -webkit-box;
    overflow: scroll;
    list-style: none;
}
.hot_video > ul >li {
    width: 50%;
    margin-right: 10px;
}
li img {
    width: 100%;
    height: 280px;
}
.title {
    text-align: center;
    overflow:hidden; 
    text-overflow:ellipsis;
}
.rating {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.rating .rating_star{
    text-align: center;
    margin: 0 auto;
    text-overflow:ellipsis;
}
.btn {
    width: 100px;
    height: 33px;
    background-color: rgb(0, 125, 241);
    color: aliceblue;
    margin:0 38px;
    border-radius: 7px;
}
</style>




