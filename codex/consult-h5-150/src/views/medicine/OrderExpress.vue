<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Express } from '@/types/medicine'
import { getMedicalOrderLogistics } from '@/api/medicine'
import { useRoute } from 'vue-router'
// 导入高德地图依赖
import AMapLoader from '@amap/amap-jsapi-loader'
// 导入自定义图标
import startIcon from '@/assets/start.png'
import endIcon from '@/assets/end.png'
import carIcon from '@/assets/car.png'

// 1. 物流详情数据
const express = ref<Express>()
// 获取物流详情数据
const route = useRoute()
const getExpress = async () => {
  const { data } = await getMedicalOrderLogistics(route.params.id as string)
  console.log('物流详情：', data)
  express.value = data
}
onMounted(() => {
  getExpress()
})

// 2. 绘制高德地图物流轨迹
// v2.0 需要配置安全密钥jscode
// 说明：将来高地图会校验秘钥
window._AMapSecurityConfig = {
  securityJsCode: '9ad2b31a5625c678a3e315dd51e130f3'
}
onMounted(async () => {
  try {
    // 回调写法：AMapLoader.load 返回Promise
    // AMapLoader.load({
    //   key: 'fe7e550905bb36171ef9c9e86fdfb358',
    //   version: '2.0'
    // }).then((AMap) => {
    //   // 使用 Amap 初始化地图
    //   console.log('高德地图api对象：', AMap)
    // })
    // async/await写法：
    const AMap = await AMapLoader.load({
      key: 'fe7e550905bb36171ef9c9e86fdfb358',
      version: '2.0'
    })
    // 1. 使用 Amap 初始化地图=》创建地图
    console.log('高德地图api对象：', AMap)
    const map = new AMap.Map('map', {
      //初始化地图层级: 2-20  特点：值越小地图显示的范围越大，值越大显示信息越详细
      zoom: 12,
      // center: [116.627733, 40.164908], //初始化地图中心点
      mapStyle: 'amap://styles/whitesmoke' // 设置地图主题
    })

    // 2. 绘制物流轨迹
    // 说明❓：必须使用AMap.plugin先加载AMap.Driving类后，才能使用
    AMap.plugin('AMap.Driving', () => {
      // 异步加载插件
      // 构造路线导航类
      const driving = new AMap.Driving({
        map, // 指定绘制的路线轨迹显示到map地图
        showTraffic: false, // 关闭实施交通状况显示
        hideMarkers: true // 关闭默认轨迹图标
      })

      // 1. 轨迹的起点
      const start = express.value?.logisticsInfo.shift()
      // 2. 轨迹的终点
      const end = express.value?.logisticsInfo.pop()
      // 3. 轨迹的途经点(shift和pop掐头去尾之后的结果)
      const ways = express.value?.logisticsInfo.map((item) => [item.longitude, item.latitude])

      // 4. 自定义坐标点显示的图表
      const startMarker = new AMap.Marker({
        position: [start?.longitude, start?.latitude], // 自定义图标的位置
        icon: startIcon, // 自定义图片
        map // 指定图标显示的地图实例
      })
      const endMarker = new AMap.Marker({
        position: [end?.longitude, end?.latitude],
        icon: endIcon,
        map
      })

      // 根据起终点经纬度规划驾车导航路线
      driving.search(
        // longitude 经度 | latitude 维度
        [start?.longitude, start?.latitude],
        [end?.longitude, end?.latitude],
        {
          // 轨迹途经点的坐标(二维数组)：[[lt1,la1], [lt2,la2]...]
          waypoints: ways
        },
        (status: string, result: object) => {
          // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
          // 显示当前物流运送位置图标
          const currentMarker = new AMap.Marker({
            position: [
              express.value?.currentLocationInfo.longitude,
              express.value?.currentLocationInfo.latitude
            ],
            icon: carIcon,
            map
          })

          setTimeout(() => {
            // 调整视野达到最佳显示区域
            map.setFitView([currentMarker, endMarker])
          }, 3000)
        }
      )
    })
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="order-logistics-page" v-if="express">
    <!-- 1. 高德地图挂载渲染位置 -->
    <div id="map">
      <!-- 配送状态title -->
      <div class="title">
        <van-icon name="arrow-left" @click="$router.back()" />
        <span>{{ express.statusValue }}</span>
        <van-icon name="service" />
      </div>
      <!-- 物流信息 -->
      <div class="current">
        <p class="status">订单{{ express.statusValue }} 预计{{ express.estimatedTime }}送达</p>
        <p class="predict">
          <!-- 快递信息 -->
          <span>{{ express.name }}</span>
          <span>{{ express.awbNo }}</span>
        </p>
      </div>
    </div>
    <!-- 2. 物流派送的详细信息：使用时间轴展现的 -->
    <div class="logistics">
      <p class="title">物流详情</p>
      <van-steps direction="vertical" :active="0">
        <!-- van-step单个时间轴 -->
        <van-step v-for="item in express.list" :key="item.id">
          <p class="status">{{ item.statusValue }}</p>
          <p class="content">{{ item.content }}</p>
          <p class="time">{{ item.createTime }}</p>
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-logistics-page {
  --van-step-icon-size: 18px;
  --van-step-circle-size: 10px;
}
#map {
  height: 450px;
  background-color: const(--cp-bg);
  overflow: hidden;
  position: relative;
  .title {
    background-color: #fff;
    height: 46px;
    width: 355px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-size: 16px;
    position: absolute;
    left: 10px;
    top: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 22px 0px rgba(229, 229, 229, 0.5);
    z-index: 999;
    > span {
      flex: 1;
      text-align: center;
    }
    .van-icon {
      font-size: 18px;
      color: #666;
      &:last-child {
        color: const(--cp-primary);
      }
    }
  }
  .current {
    height: 80px;
    border-radius: 4px;
    background-color: #fff;
    height: 80px;
    width: 355px;
    box-sizing: border-box;
    padding: 15px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    box-shadow: 0px 0px 22px 0px rgba(229, 229, 229, 0.5);
    z-index: 999;
    .status {
      font-size: 15px;
      line-height: 26px;
    }
    .predict {
      color: const(--cp-tip);
      font-size: 13px;
      margin-top: 5px;
      > span {
        padding-right: 10px;
      }
    }
  }
}
.logistics {
  padding: 0 10px 20px;
  .title {
    font-size: 16px;
    padding: 15px 5px 5px;
  }
  .van-steps {
    :deep(.van-step) {
      &::after {
        display: none;
      }
    }
    .status {
      font-size: 15px;
      color: const(--cp-text3);
      margin-bottom: 4px;
    }
    .content {
      font-size: 13px;
      color: const(--cp-tip);
      margin-bottom: 4px;
    }
    .time {
      font-size: 13px;
      color: const(--cp-tag);
    }
  }
}
</style>
