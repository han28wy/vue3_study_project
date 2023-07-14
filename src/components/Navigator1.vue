<script setup>
import axiosGet from '@/request/index.ts'
const handleClick=()=>{
    const res = axiosGet('/request/index')
    console.log(888)
    console.log(res)
}
</script>
<template>
    <div class="bg-red-300" @click="handleClick">1111</div>
</template>