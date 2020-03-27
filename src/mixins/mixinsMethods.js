export default {
    methods:{
        mixinMethods() {
            console.log('mixinMethods！')
        }
    },
    //1、假如组件的mounted函数中也存在相同的方法调用时，那么mixinMethods会被调用2次
    mounted(){
        //当组件中存在mixinMethods方法时this指向为组件（调用组件中对应方法），
        //否则this指向mixins本身（调用mixins中对应方法）
        this.mixinMethods()
    }

}