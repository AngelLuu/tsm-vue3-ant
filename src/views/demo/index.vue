<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Card, Drawer, Form, Input, Tabs } from 'ant-design-vue'
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue'

const state = reactive({
  activeKey: '1',
  drawerFlag: false,
  providerForm: {
    nameA: '',
    persopn: '',
    phoneNum: '',
    city: '',
    adress: '',
    role: '',
    stateType: '',
    way: '',
  },
  kehucards: [
    {
      id: 1,
      title: '顺丰运输',
      fuwu: 23,
      dindan: 13,
      jiesaun: 41,
    },
    {
      id: 2,
      title: '顺丰运输',
      fuwu: 23,
      dindan: 13,
      jiesaun: 41,
    },
    {
      id: 3,
      title: '顺丰运输',
      fuwu: 23,
      dindan: 13,
      jiesaun: 41,
    },
    {
      id: 4,
      title: '顺丰运输',
      fuwu: 23,
      dindan: 13,
      jiesaun: 41,
    },
    {
      id: 5,
      title: '顺丰运输',
      fuwu: 23,
      dindan: 13,
      jiesaun: 41,
    },
    {
      id: 6,
      title: '顺丰运输',
      fuwu: 23,
      dindan: 13,
      jiesaun: 41,
    },
  ],
})
const activeKey = ref('1')

function onClose() {
  state.drawerFlag = false
}
</script>

<template>
  <div class="flex flex-row w-full">
    <div class="w-full p-5">
      <div class="flex flex-col">
        <Tabs v-model:activeKey="activeKey">
          <Tabs.TabPane key="1" tab="签约中" />
          <Tabs.TabPane key="2" tab="合作中" />
          <Tabs.TabPane key="3" tab="已结束" />
          <template #rightExtra>
            <a-button>导出</a-button>
            <a-button @click="state.drawerFlag = true">
              新增
            </a-button>
          </template>
        </Tabs>
      </div>
      <div class="flex flex-row">
        <Card v-for="item in state.kehucards" :key="item.id" :title="item.title" class="w-sm m-4">
          <div class="flex flex-row justify-around">
            <div>
              <div>服务</div>
              <div>{{ `${item.fuwu}天` }}</div>
            </div>
            <div>
              <div>订单</div>
              <div>{{ `${item.dindan}单` }}</div>
            </div>
            <div>
              <div>结算</div>
              <div>{{ `${item.jiesaun}单` }}</div>
            </div>
          </div>
          <template #actions>
            <EditOutlined />
            <EllipsisOutlined />
          </template>
        </Card>
      </div>
    </div>
  </div>
  <div>
    <Drawer :open="state.drawerFlag" @close="onClose">
      <Form :model="state.providerForm">
        <Input v-model:value="state.providerForm.nameA" />
      </Form>
    </Drawer>
  </div>
</template>
