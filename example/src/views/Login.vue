<template>
  <div class="login-view">
    <section class="login-box">
      <div class="login-box-header">
        <img
          class="login-box-logo"
          :src="require('@/assets/logo.png')"
          alt="logo"
        />
        <span class="login-box-title">{{ title }}</span>
      </div>
      <Form class="login-box-form" :form="form">
        <FormItem>
          <Input
            v-decorator="[
              'uname',
              { rules: [{ required: true, message: '请输入用户名!' }] },
            ]"
            placeholder="请输入用户名"
          >
            <Icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25);"
            />
          </Input>
        </FormItem>
        <FormItem>
          <Input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="请输入密码"
          >
            <Icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25);"
            />
          </Input>
        </FormItem>
      </Form>
      <Button class="login-box-button" type="primary" @click="handleLogin">
        登录
      </Button>
    </section>
  </div>
</template>

<script>
import { Form, Input, Button, Icon } from 'ant-design-vue'

import { APILogin } from '@/api/auth'

const { title } = require('../../base.config')

export default {
  name: 'Login',
  components: {
    Form,
    FormItem: Form.Item,
    Input,
    Button,
    Icon,
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'login' }),
      title,
    }
  },
  methods: {
    handleLogin() {
      this.form.validateFields(async (err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          const res = await APILogin(values)
          console.log('res', res)
          if (res.success) {
            sessionStorage.setItem(`token`, res.data.token)
            this.$router.push('/')
          }
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login-view {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1778fe, #179dfe);
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    border: 1px solid #ececec;
    background: #fcfcfc;
    width: 80%;
    border-radius: 8px;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    align-items: center;

    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }

    &-logo {
      height: 24px;
    }

    &-title {
      font-weight: bold;
      font-size: 24px;
      background: linear-gradient(135deg, #1778fe, #179dfe);
      background-clip: text;
      color: transparent;
      margin-left: 6px;
    }

    &-form {
      width: 80%;
    }

    &-button {
      width: 80%;
    }
  }
}
</style>
