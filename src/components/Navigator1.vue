<script lang="ts" setup>
import emsTable from '../utils/table.vue'
import axiosGet from '@/request/index.ts'

const handleClick=()=>{
    const res = axiosGet('/request/index')
    console.log(888)
    console.log(res)
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
    <div class="bg-red-300" @click="handleClick">1111</div>
    <emsTable>
        <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </emsTable>
</template>