<script lang="ts" setup>
import Resident from '../type/Community.ts'
import emsTable from '../utils/table.vue'
import { ref, onMounted, getCurrentInstance } from 'vue'
// import request from '@/request/axios'
const {proxy} = getCurrentInstance()

onMounted(() => {
  fetchData(1,10)
  console.log(proxy.$msg)
})

let currentPage = ref(1)
let pageSize = ref(10)
let total = ref(100)
let tableData = reactive<Resident>([])

const changePage = (pageNum:any, pageSize:any)=>{
  fetchData(pageNum, pageSize)
}
const fetchData = async (pageNum:any, pageSize:any) => {
  const res = await proxy.$request('/m1/3018027-0-default/people/list', {params: {
    pageNum: 1,
    pageSize: 10
  }})
  const arr:any[] = res.data.list
  arr.forEach((item) => {
    let obj = item.communityResident
    tableData.push(obj)
  })
  total = res.data.total
}
</script>

<template>
    <el-table :data="tableData">
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="mobile" label="手机号" width="180" />
        <el-table-column prop="housesAddress" label="地址" />
    </el-table>
    <emsTable
        v-model:currentPage="currentPage" 
        v-model:pageSize="pageSize" 
        :total="total" 
        @change-page="changePage" 
      />
</template>