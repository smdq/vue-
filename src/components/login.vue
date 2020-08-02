<template>
  <div class="login_container">
    <div class="login-box">
      <div class="title">用户登录</div>
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        ref="loginFormRef"
        :rules="loginFormRules"
        :model="formLabelAlign"
      >
        <el-form-item label="用户名" prop="user">
          <el-input v-model="formLabelAlign.user"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="password">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
      </el-form>
      <!-- <el-form-item class="btns">
        <el-button type="primary" @click="submitClick">登录</el-button>
        <el-button type="info" @click="resetLoginForm">重置</el-button>
      </el-form-item> -->
      <el-row>
        <el-col :span="6" :offset="18"
          ><el-button type="primary" @click="submitClick"
            >提交</el-button
          ></el-col
        >
      </el-row>
    </div>
  </div>
</template>
<script>
import {initDynamicRoutes} from '@/router'
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        user: "admin",
        password: "123456"
      },
      username:'admin',
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiO',
       menulist: [
        {
          id: 125,
          authName: "用户管理",
          icon: "icon-user",
          children: [
            {
              id: 110,
              authName: "用户列表",
              path: "users",
              rights: ["view", "edit", "add", "delete"]
            }
          ]
        },
        {
          id: 103,
          authName: "角色管理",
          icon: "icon-tijikongjian",
          children: [
            {
              id: 111,
              authName: "角色列表",
              path: "roles",
              rights: ["view", "edit", "add", "delete"]
            }
          ]
        },
        {
          id: 101,
          authName: "商品管理",
          icon: "icon-shangpin",
          children: [
            {
              id: 104,
              authName: "商品列表",
              path: "goods",
              rights: ["view", "edit", "add", "delete"]
            },
            {
              id: 121,
              authName: "商品分类",
              path: "categories",
              rights: ["view", "edit", "add", "delete"]
            }
          ]
        }
      ],
      loginFormRules: {
        // 验证用户名是否合法
        user: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitClick() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        if (
          this.formLabelAlign.user === "admin" &&
          this.formLabelAlign.password === "123456"
        ) {
         this.$store.commit('setRightList',this.menulist)
         this.$store.commit('setUsername',  this.formLabelAlign.user);
         sessionStorage.setItem('token',this.token)
          initDynamicRoutes();
         this.$router.push('/home')
        }
      });
    },
    resetLoginForm() {}
  }
};
</script>
<style lang="less" scoped>
.login_container {
  background: #2b4b6b;
  height: 100%;
  .login-box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
