<script lang="ts" setup>
import emsTable from '../utils/table.vue'
// import axiosGet from '@/request/index.ts'

// const handleClick=()=>{
//     const res = axiosGet('/request/index')
//     console.log(888)
//     console.log(res)
// }
let currentPage = ref(1)
let pageSize = ref(50)
let total = ref(100)
const changePage = ({startIndex, endIndex}:any)=>{
  console.log(startIndex, endIndex)
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
    <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
    <emsTable
        v-model:currentPage="currentPage" 
        v-model:pageSize="pageSize" 
        :total="total" 
        @change-page="changePage" 
      />
</template>