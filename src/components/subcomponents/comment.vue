<template>
<div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="publish">发表评论</mt-button>
    <div class="comment-list" v-for="item in comment" :key="item.index"> 
        <div class="title">
            <p>
                <span>{{item.index}}楼</span>
                <span>用户:{{item.user}}</span>
                <span>发表时间:{{item.time}}</span>
            </p>
        </div>
        <div class="content">
            {{item.content}}
        </div>
    </div>
    
</div>
</template>
<script>
export default {
    data() {
        return{
            comment: [
                { index:1, user: '张三', time: '2019-04-24',content: '火钳刘明' },
                { index:2, user: '李四', time: '2019-04-24',content: '火钳刘明' }
            ],
            msg:""
            
        }
    },
    methods: {
        publish() {
            var obj={
                index:this.comment.length+1, user: '张三', time: '2019-04-24',content: this.msg
            }
            this.comment.push(obj)
        }
    }
}
</script>
<style scoped>
h3 {
    font-size: 19px;
}
textarea {
    margin: 0;
}
p{
    color: rgb(255, 255, 255);
    background-color: #7a7373
}
</style>


