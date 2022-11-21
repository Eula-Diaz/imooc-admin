<template>
  <el-menu
    :unique-opened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location" />
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRoutes, generateMenus } from '@/utils/route'

const router = useRouter()
const routes = computed(() => {
  const routes = filterRoutes(router.getRoutes())
  return generateMenus(routes)
})
console.log(routes)
</script>

<style lang="scss" scoped></style>
