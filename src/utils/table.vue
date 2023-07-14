<template>
  <el-pagination
      v-model:current-page=props.pageNum
      v-model:page-size=props.pageSize
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total=props.total
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </template>

  <script lang="ts" setup>
  import {ref} from 'vue'
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  emits('refresh')
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  emits('refresh')
}

const emits = defineEmits(['refresh'])
const props = defineProps({
  pageNum: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
})

</script> 