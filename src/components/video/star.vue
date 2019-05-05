<template>
    <div class="star-container">
        <div class="stars" >
            <span v-for="item in star" :key="item.index">
                <img v-if="item===1" src="../../assets/images/star.png" />
                <img v-if="item===0.5" src="../../assets/images/star_half.png" />
                <img v-if="item===0" src="../../assets/images/star_none.png" />
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag: true,
            star: []
        }
    },
    methods: {
        //将评分的star转换为长度为5的数组形式
         convertToStarArray(stars){
            let num =stars/10;
            const array=[];
            for (var i=1;i<=5;i++) {
                if (i<= num){
                    array.push(1);
                }
                else {
                    if ((i-num)===0.5){
                        array.push(0.5);
                    }
                    else{
                        array.push(0);
                    }
                }
            }
            return array;
        },
        //判断评分星星是否为0，为0则不显示评分星星图标
        /*judge() {
            if (this.star[0]==0){
                this.flag=false;
            }
        }*/
        
    },
    props: ["substar"],
    mounted(){
        this.star=this.convertToStarArray(this.substar)
        //this.judge()
    }
}
</script>
<style scoped>
.star-container {

}
img {
    height: 14px ;
    width: 14px;
}
</style>

