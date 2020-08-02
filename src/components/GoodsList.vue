<template>
 <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-col :span="4">
          <el-button type="primary" v-permission = "{action:'', effect: 'disabled'}">添加价格</el-button>
        </el-col>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" v-permission = "{action:'add', effect: 'disabled'}">添加商品</el-button>
        </el-col>
      </el-row>
 </div>
</template>
<script>
  export default {
      data(){
       return {
           
       }
      },
      methods:{

      }
  }
</script>