<template>
  <div>
    <div>Hello</div>
    <div id="c1" class="box"></div>
    <a-button @click="handleClick">update</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, ref, ComponentInternalInstance } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import useList from "./useList";

  interface ComponentCustomProperties { 
    ctx: any;
  }

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup(props, context) {
    const ins = getCurrentInstance() as any;
    const echartsRef = ref(null)





    // const ins = getCurrentInstance() as G2Types;
    //   const { fetch } = useList()
    // onMounted(() => {
    //     fetch()
    //   })
    // console.log('g2', G2)

    const handleClick = () => {
      console.log("!!!");
      // chartRef.value.changeData(data2);
    };

    const chartRef = ref<any>(null);

    onMounted(() => {
      // chartRef.value = new ins.ctx.$G2.Chart({
      //   container: "c1",
      //   width: 600,
      //   height: 300,
      // });
      // chartRef.value.source(data);
      // chartRef.value.interval().position("genre*sold").color("genre");
      // chartRef.value.render();
      chartRef.value = ins.ctx.$echarts.init(document.getElementById("c1"))
      chartRef.value.setOption (
        {
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }
      )

      window.onresize = function () {//自适应大小
        chartRef.value.resize();
      }
    });

    return {
      handleClick,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.box {
  margin-top: 30px;
  width: 600px;
  height: 300px;
}
</style>