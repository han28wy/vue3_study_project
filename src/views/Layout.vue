<template>
  <div>
    <el-container>
      <el-aside> <Menu></Menu></el-aside>
      <el-main> <router-view /></el-main>
    </el-container>
  </div>
</template>

<script setup>
import Menu from "@/components/Menu.vue";
</script>
