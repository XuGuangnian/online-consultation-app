<script setup lang="ts">
import { getConsultOrderPre, createConsultOrder } from '@/api/consult'
import { getPatientDetail } from '@/api/user'
import { useConsultStore } from '@/stores'
import type { ConsultOrderPreData } from '@/types/consult'
import type { Patient } from '@/types/user'
import { Toast } from 'vant'
import { onMounted, ref } from 'vue'

// 1. 获取支付信息
const payInfo = ref<ConsultOrderPreData>()
const store = useConsultStore()
const getPayInfo = async () => {
  const { data } = await getConsultOrderPre({
    type: store.consult.type, // 问诊类型：极速问诊
    illnessType: store.consult.illnessType // 问诊级别：三甲或普通
  })
  console.log('支付信息:', data)
  payInfo.value = data
  // 存储优惠券ID
  store.setCunpon(data.couponId)
}

// 2. 获取患者信息
const patient = ref<Patient>()
const getPatient = async () => {
  const { data } = await getPatientDetail(store.consult.patientId)
  console.log('患者信息：', data)
  patient.value = data
}

onMounted(() => {
  getPayInfo()
  getPatient()
})

// 3. 点击立即支付，打开支付弹层
const show = ref(false)
const agree = ref(false)
const paymentMethod = ref<0 | 1>()
// 存储订单ID
const orderId = ref('')
const openPay = async () => {
  if (!agree.value) return Toast.fail('请勾选同意支付协议！')
  // 打开支付窗口
  show.value = true
  // 创建订单
  try {
    const { data } = await createConsultOrder(store.consult)
    // 存储问诊订单ID，获取支付地址需要使用
    orderId.value = data.id
    // 说明：订单创建成功，需要清空之前记录在pinia的问诊数据
    store.clear()
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="consult-pay-page">
    <cp-nav-bar title="支付" />
    <!-- 1. 支付信息 -->
    <div class="pay-info">
      <p class="tit">图文问诊 {{ payInfo?.payment }} 元</p>
      <img class="img" src="@/assets/avatar-doctor.svg" />
      <p class="desc">
        <span>极速问诊</span>
        <span>自动分配医生</span>
      </p>
    </div>
    <van-cell-group>
      <van-cell title="优惠券" :value="`-¥${payInfo?.couponDeduction}`" />
      <van-cell title="积分抵扣" :value="`-¥${payInfo?.pointDeduction}`" />
      <van-cell title="实付款" :value="`¥${payInfo?.actualPayment}`" class="pay-price" />
    </van-cell-group>
    <div class="pay-space"></div>
    <!-- 2. 患者信息  -->
    <van-cell-group>
      <van-cell
        title="患者信息"
        :value="`${patient?.name} | ${patient?.gender === 0 ? '女' : '男'} | ${patient?.age}岁`"
      ></van-cell>
      <van-cell title="病情描述" :label="store.consult.illnessDesc"></van-cell>
    </van-cell-group>
    <div class="pay-schema">
      <van-checkbox v-model="agree">我已同意 <span class="text">支付协议</span></van-checkbox>
    </div>
    <!-- 3. 打开支付弹层并创建问诊订单 -->
    <van-submit-bar
      :price="payInfo?.actualPayment! * 100"
      button-type="primary"
      button-text="立即支付"
      text-align="left"
      @click="openPay"
    />

    <!-- 支付弹层 -->
    <van-action-sheet v-model:show="show" title="选择支付方式">
      <div class="pay-type">
        <p class="amount">￥{{ payInfo?.actualPayment.toFixed(2) }}</p>
        <van-cell-group>
          <van-cell title="微信支付" @click="paymentMethod = 0">
            <template #icon><cp-icon name="consult-wechat" /></template>
            <template #extra><van-checkbox :checked="paymentMethod === 0" /></template>
          </van-cell>
          <van-cell title="支付宝支付" @click="paymentMethod = 1">
            <template #icon><cp-icon name="consult-alipay" /></template>
            <template #extra><van-checkbox :checked="paymentMethod === 1" /></template>
          </van-cell>
        </van-cell-group>
        <div class="btn">
          <van-button type="primary" round block>立即支付</van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<style lang="scss" scoped>
.consult-pay-page {
  padding: 46px 0 50px 0;
  .pay-info {
    display: flex;
    padding: 15px;
    flex-wrap: wrap;
    align-items: center;
    .tit {
      width: 100%;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .img {
      margin-right: 10px;
      width: 38px;
      height: 38px;
      border-radius: 4px;
      overflow: hidden;
    }
    .desc {
      flex: 1;
      > span {
        display: block;
        color: var(--cp-tag);
        &:first-child {
          font-size: 16px;
          color: var(--cp-text2);
        }
      }
    }
  }
  .pay-price {
    ::v-deep() {
      .vam-cell__title {
        font-size: 16px;
      }
      .van-cell__value {
        font-size: 16px;
        color: var(--cp-price);
      }
    }
  }
  .pay-space {
    height: 12px;
    background-color: var(--cp-bg);
  }
  .pay-schema {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      color: var(--cp-primary);
    }
  }
  ::v-deep() {
    .van-submit-bar__button {
      font-weight: normal;
      width: 160px;
    }
  }
}
// 支付弹层样式
.pay-type {
  .amount {
    padding: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  .btn {
    padding: 15px;
  }
  .van-cell {
    align-items: center;
    .cp-icon {
      margin-right: 10px;
      font-size: 18px;
    }
    .van-checkbox :deep(.van-checkbox__icon) {
      font-size: 16px;
    }
  }
}
</style>
