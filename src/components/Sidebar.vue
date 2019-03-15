<template>
    <div class= "sidebar">
        <el-row class="tac">
            <el-col>
                <el-menu default-active="helloworld"
                         class="el-menu-vertical-demo"
                         background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b" router>
                    <el-submenu index="1" style="width: 200px">
                        <template slot="title">
                            <span>管理列表</span>
                        </template>
                            <el-menu-item index="helloworld">欢迎</el-menu-item>
                            <el-menu-item index="about">关于</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: "Sidebar",

  }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 70px;
        bottom:0;
        background-color: rgb(50, 86, 87);
    }
</style>