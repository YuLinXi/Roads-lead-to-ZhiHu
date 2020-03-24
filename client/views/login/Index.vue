<template>
  <div class="loginContainer">
    <div class="loginContainer-content">
      <img class="loginContainer-logo" src="/images/zhihu.png" alt="" />
      <div class="login-content">
        <div class="login-content-inner">
          <div class="login-content-form">
            <div class="login-content-tabs">
              <div
                @click="handleTabChange('PHONE')"
                class="login-content-tab"
                :class="{ active: loginType === 'PHONE' }"
              >
                免密码登陆
              </div>
              <div
                @click="handleTabChange('PASSWORD')"
                class="login-content-tab"
                :class="{ active: loginType === 'PASSWORD' }"
              >
                密码登陆
              </div>
              <div class="login-content-qrcode"></div>
            </div>
            <template v-if="loginType === 'PHONE'">
              <div class="login-content-input">
                <div class="login-input account">
                  <ISelect
                    class="select"
                    v-model="form.areaCode"
                  />
                  <span class="split"></span>
                  <IInput
                    placeholder="手机号"
                    message="请输入手机号"
                    :required="true"
                    class="input"
                    v-model="form.account"
                  />
                </div>
                <div class="login-input">
                  <IInput
                    v-model="form.code"
                    placeholder="输入6位短信验证码"
                    message="请输入短信验证码"
                    :required="true"
                    class="input"
                    type="password"
                  />
                  <div class="login-sendMessage">
                    获取短信验证码
                  </div>
                </div>
                <div class="login-sendVoiceMessage">
                  <button class="Button Button--plain">接收语音验证码</button>
                </div>
              </div>
              <button class="Button Button--primary">注册登陆</button>
            </template>
          </div>
        </div>
      </div>
      <div class="login-socialLogin">
      </div>
      <div class="login-footer">

      </div>
    </div>
    <div class="loginContainer-footer">
      <div class="ZhihuLinks">
        <a target="_blank" href="https://zhuanlan.zhihu.com">知乎专栏</a>
        <a href="">圆桌</a>
        <a href="">发现</a>
        <a href="">移动应用</a>
        <a href="">联系我们</a>
        <a href="">来知乎工作</a>
        <a href="">注册机构号</a>
      </div>
      <div class="ZhihuRights">
        <span>© 2020 知乎</span>
        <a rel="noopener noreferrer" href="https://tsm.miit.gov.cn/dxxzsp/">京 ICP 证 110741 号</a>
        <a rel="noopener noreferrer" href="http://www.beian.miit.gov.cn/">京 ICP 备 13052569 号 - 1</a>
        <a rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088">
          <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png">
          京公网安备 11010802010035 号
        </a>
        <a href="https://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg" target="_blank" rel="noopener noreferrer">出版物经营许可证</a>
      </div>
      <div class="ZhihuReports">
        <a target="_blank" rel="noopener noreferrer" href="https://zhuanlan.zhihu.com/p/51068775">侵权举报</a>
        <a target="_blank" rel="noopener noreferrer" href="http://www.12377.cn">网上有害信息举报专区</a>
        <a target="_blank" rel="noopener noreferrer" href="/jubao">儿童色情信息举报专区</a>
        <span>违法和不良信息举报：010-82716601</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IInput from '@/components/Form/Input.vue';
import ISelect from '@/components/Form/Select.vue';

interface formObj {
  account: String,
  code: String,
  areaCode: String,
}

@Component({
  name: 'Login',
  components: {
    IInput,
    ISelect,
  },
})
export default class extends Vue {
  loginType: String = 'PHONE';

  form: formObj = {
    account: '',
    code: '',
    areaCode: '',
  };

  handleTabChange(type: String): void {
    this.loginType = type;
  }
}
</script>

<style scoped lang="less">
  .loginContainer {
    width: 100%;
    height: 100vh;
    min-height: 688px;
    border-radius: 2px;
    overflow: auto;
    background-color: #b8e5f8;
    background-size: cover;
    background-image: url("/images/signBg.png");
    background-repeat: no-repeat;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    &-logo {
      width: 128px;
      height: 81px;
      margin-bottom: 24px;
    }
    &-content {
      flex: 1 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .login-content {
      overflow: visible;
      width: 400px;
      margin: 0 auto;
      text-align: center;
      border-radius: 2px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background: #fff;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      box-sizing: border-box;
      /*height: 100px;*/
      &-inner {
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
        position: relative;
        border-radius: 4px 4px 0 0;
        overflow: hidden;
      }
      &-form {
        padding: 0 24px 84px;
        overflow: hidden;
      }
      &-tabs {
        text-align: left;
        .login-content-tab {
          display: inline-block;
          color: #444;
          font-size: 16px;
          line-height: 60px;
          height: 60px;
          margin-right: 24px;
          cursor: pointer;
          &.active {
            position: relative;
            color: #1a1a1a;
            font-weight: 600;
            font-synthesis: style;
            &::after {
              display: block;
              position: absolute;
              bottom: 0;
              content: "";
              width: 100%;
              height: 3px;
              background-color: #0084ff;
            }
          }
        }
      }
      &-input {
        flex: 1 1;
        > .login-input:nth-child(1) {
          margin-top: 24px;
        }
        > .login-input:nth-child(2) {
          margin-top: 12px;
        }
        .login-input {
          position: relative;
          border-bottom: 1px solid #ebebeb;
          .input {
            height: 48px;
          }
          &.account {
            display: flex;
            align-items: center;
            .split {
              width: 2px;
              height: 22px;
              margin: 0 12px;
              background: #ebebeb;
            }
          }
        }
        .login-sendMessage {
          cursor: pointer;
          font-size: 14px;
          position: absolute;
          top: 24px;
          right: 0;
          padding: 4px 0;
          color: #175199;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          &:hover {
            color: #76839b;
          }
        }
        .login-sendVoiceMessage {
          margin-top: 12px;
          height: 20px;
          display: flex;
          justify-content: flex-end;
          background: #fff;
          color: #8590a6;
          font-size: 14px;
        }
      }
    }
    .login-socialLogin {
      overflow: visible;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
      height: 60px;
      line-height: 60px;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      color: #8590a6;
      background-color: #f6f6f6;
      width: 400px;
      border-radius: 0 0 4px 4px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }
    .login-footer {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      margin-top: 14px;
      padding-left: 24px;
      padding-right: 24px;
      background-color: #FFFFFF;
      color: #0084FF;
      width: 400px;
      height: 68px;
      align-items: center;
      display: flex;
      border-radius: 4px;
    }
    &-footer {
      font-size: 12px;
      line-height: 21px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 2px #999;
      padding-bottom: 20px;
    }
    .ZhihuReports,
    .ZhihuRights,
    .ZhihuLinks {
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .ZhihuReports a:not(:last-child):after, .ZhihuReports span:not(:last-child):after,
    .ZhihuRights a:not(:last-child):after, .ZhihuRights span:not(:last-child):after,
    .ZhihuLinks a:not(:last-child):after, .ZhihuLinks span:not(:last-child):after {
      content: " \B7 ";
      white-space: pre;
      display: inline-block;
    }
  }
</style>
