<template>
<div class="body">
    <div class="container">
        <div class='head'>
            <div class="div1">
                <img :src="filmDetail.images.medium"/>
            </div>
            <div class="div2">
                <div>{{filmDetail.title}}</div>
                <div class="original_title">{{filmDetail.original_title}}</div>
                <div>制片国家/地区:
                    <span v-for="item in filmDetail.countries" :key="item.id">
                        {{item}}
                    </span>                   
                </div>
                <div>电影类型:
                    <span v-for="item in filmDetail.genres" :key="item.id">
                        {{item}}
                    </span>
                </div>
                <div>上映时间:{{filmDetail.year}}</div>
            </div>
    </div>
    <div class="brief">
        <div><h3>简介</h3></div>
        <div>{{filmDetail.summary}}
        </div>
    </div>
    <br/>
    <div><h3>演职员</h3></div>
    <div class="actor">
        <ul>
            <li v-for="item in filmDetail.directors" :key="item.id">
                    <div class="image">   
                        <img :src="item.avatars.medium" />
                    </div>
                    <div class="actor_name">{{item.name}}</div>
                    <div class="actor_name">导演</div>
            </li>
            <li v-for="item in filmDetail.casts" :key="item.id">
                    <div class="image">   
                        <img :src="item.avatars.medium" />
                    </div>
                    <div class="actor_name">{{item.name}}</div>
                    <div class="actor_name">演员</div>
            </li>
        </ul>
     </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            filmDetail: []   
        }
    },
    methods: {
        getInfo() {
            let _this=this;
            let url="/api/v2/movie/subject/"+_this.$route.params.id
            this.$axios.get(url).then( res => {
                if(res.status === 200) {
                    this.filmDetail=res.data              
                    console.log(this.filmDetail)
                 }
                else{
                    Toast('加载失败')
                }
            }).catch(function(error){
                console.log(error);
            })
        }, 
    },
   

    mounted() {
        this.getInfo()
    },
}
</script>
<style scoped>
.body {
    background-color: rgb(80, 106, 145) ;
}
.container {
    width: 95%;
    margin: 0 auto;
    color: aliceblue;
}
.head {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
}
.div1 {
    width: 45%;
    height: 238px;
    overflow: hidden;
    margin-top: 10px;
}
.div2 {
    width: 55%;
    height: 238px;
    overflow: hidden;
    margin-left: 7px;
    margin-top: 12px;
}
.div2 div {
    margin-top: 13px;
}
.div2 div:first-child {
    margin-top: 0px;
}
.div1 img {
    width: 100%;
    height: 220px;
}
.original_title {
    font-size: 15px;
}
.actor {
    width: 100%;
    height: 300px;
    overflow:scroll; 
    margin-left: 0;
}
.actor .image img{
    width: 120px;
}
.actor ul {
    display: -webkit-box;
    overflow: scroll;
    list-style: none;
}
.actor ul li {
    margin-right: 10px;
}
.actor_name {
    width: 100px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
    text-align: center;
}
</style>
