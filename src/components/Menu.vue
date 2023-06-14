<script lang="ts" setup>
const menuList: any[] = [
  { id: 1, name: "Navigator 1", path: "/Navigator1" },
  { id: 2, name: "Navigator 2", path: "/Navigator2" },
  { id: 3, name: "Navigator 3", path: "/Navigator3" },
];
const handleOpen = () => {};
const handleClose = () => {};
const selectMenu = (val: any, path: any, item: any) => {
  console.log(val);
  console.log(path);
  console.log(item);
};
</script>
<template>
      <div class="menu">
        <el-menu
          class="el-menu-vertical-demo"
          default-active="2"
          router
          @select="selectMenu"
          @open="handleOpen"
          @close="handleClose"
        >
          <template v-for="item in menuList" :key="item.id">
            <el-menu-item :index="item.path">
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
</template>

<style lang="less" scoped>
.menu {
  width: 200px;
  position: absolute;
  left: 0;
  top: 100px;
}
</style>
