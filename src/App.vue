<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mixinDemo from '@/mixins/mixinsDemo.js';
import mixinData from '@/mixins/mixinsData.js';
import mixinsMethods from '@/mixins/mixinsMethods.js';

export default {
    name: 'app',
    components: {
        HelloWorld
    },
    data(){
        return {
            name: 'app-data',
            sex: '男'
        }
    },
    mixins: [mixinsMethods],
    methods: {
        // mixinMethods() {
        //     console.log('app-Methods')
        // }
    },
    created(){
        console.log('created App!')
    },
    // mounted(){
    //     console.log(this.name);//会替换掉mixins中的name属性，优先使用子组件同名属性
    //     console.log(this.age);
    //     console.log(this.sex);
    // },
    mounted(){
        //如果组件中定义了该方法则优先调用组件的方法，否则调用mixins中的同名方法
        this.mixinMethods();
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
