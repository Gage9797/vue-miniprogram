<template>
    <div>
        <h1>新闻详情{{index}}</h1>
        <p class="subtitle">
            <span>发表时间：2019-04-23</span>
             <span>点击次数：1</span>
        </p>
        <hr>
    
        <div class="contain">
            <div class="contain-text">
            北京时间记者 王丽乐 祝天一 报道）4月21日下午，南京一女子来到中冶盛世滨江小区售楼处，并坐在楼盘用于宣传的沙盘上讨说法。楼盘工作人员报警后，警方经过两个多小时劝说，女子宫某离开沙盘。南京鼓楼公安分局工作人员23日告诉北京时间记者，经检测，沙盘维修价格在5万元左右，宫某因涉嫌故意毁坏财物罪已被警方刑事拘留。

据南京鼓楼分局介绍，民警赶到现场后发现，一名女子正坐在沙盘上，情绪十分激动，在她身体周围的部分楼盘模型已经损坏，该女子称自己遭遇了这一楼盘的消费欺诈。民警了解到，女子姓宫，在该楼盘买的房子还没有交付，从相关渠道得知，楼盘的实际情况和销售所说的情况不符，宫某和不少业主希望开发商能进行整改。楼盘开发商表示，宫某所说的情况在合同中并没有明确约定。民警多次对宫某进行劝说，希望她能够从沙盘模型上下来，与楼盘工作人员好好交涉，走法律诉讼程序。经两个小时劝说，宫某最终起身离开了沙盘模型。

4月23日，中冶盛世滨江售楼处工作人员在接受记者采访时说，宫某此前在买房时因摇号问题与开发商发生矛盾，又在交房时因电梯尺寸等其他问题与开发商沟通很久。“后来不知道怎么回事，她就自己一个人过来闹事了”。

南京市公安局鼓楼分局新闻办工作人员向记者表示，经沙盘维修方在现场进行测量以及检查后，初步确定毁坏沙盘的维修价格在5万元左右。目前，宫某因涉嫌故意毁坏财物罪已被鼓楼警方依法刑事拘留，此案正在进一步审理之中。
            </div>
            <comment-box></comment-box>
        </div>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            index: null
        }
    },
    mounted() {
        this.index=parseInt(this.$route.params.id)+1
    },
    components: {
        "comment-box": comment
    }
}
</script>
<style scoped>
h1 {
    font-size: 20px;
    color: rgb(202, 0, 0);
    text-align: center;
}
.subtitle {
    color: #04e8f8;
    display: flex;
    justify-content: space-between;

}
.contain-text {
    font-size: 16px;
    color: #546666
}
.contain {
    font-size: 17px;
    margin-bottom: 60px;
}
</style>


