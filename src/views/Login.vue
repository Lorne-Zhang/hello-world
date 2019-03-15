<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm">
                <el-form-item>
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      submitForm() {
        if (this.ruleForm.password == '123456' && this.ruleForm.username == 'lorne') {
          sessionStorage.setItem("username", "admin");
          this.$router.push('/helloworld');
          this.$message({
            message: "登录成功",
            type: 'success'
          })
        } else {
          this.$message({
            message: "用户名或密码不正确",
            type: 'error'
          })
        }
      }
    }

  }
</script>

<style scoped>

    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .ms-title {
        position: absolute;
        top: 50%;
        width: 100%;
        margin-top: -230px;
        text-align: center;
        font-size: 30px;
        color: #fff;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        height: 160px;
        margin: -150px 0 0 -190px;
        padding: 40px;
        border-radius: 5px;
        background: #fff;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
    }
</style>