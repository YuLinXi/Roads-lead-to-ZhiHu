<template>
  <div class="MainLayout">
    <nav class="appHeader">
      <div class="appHeader-inner">
        <div class="appHeader-default">
          <a class="appHeader-logo">
            知乎
          </a>
          <ul class="appHeader-nav">
            <li class="nav-item">
              <a class="is-active">首页</a>
            </li>
            <li class="nav-item">
              <a>发现</a>
            </li>
            <li class="nav-item">
              <a>
                等你来答
              </a>
            </li>
          </ul>
          <div class="searchBar">
            <label class="input-wrapper">
              <input
                type="text"
                maxlength="100"
                autocomplete="off"
                placeholder="SKT 止步四强"
              />
              <button class="input-search">
                <svg-icon
                  name="search"
                  width="14"
                  height="14"
                >
                </svg-icon>
              </button>
            </label>
          </div>
          <button
            type="button"
            class="submit-btn"
          >
            提问
          </button>
          <div class="appHeader-userInfo">
            <div class="userInfo-msg">
              <svg-icon
                width="20"
                height="20"
                color="#8590a6"
                name="msg"
              >
              </svg-icon>
              <span class="msg-count">20</span>
            </div>
            <div class="userInfo-msg">
              <svg-icon
                width="20"
                height="20"
                color="#8590a6"
                name="privateMsg"
              >
              </svg-icon>
              <span class="msg-count">10</span>
            </div>
            <div class="headPic">
              <img src="https://pic4.zhimg.com/da8e974dc_is.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main class="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MainLayout extends Vue {
}
</script>

<style scoped lang="less">
  .app-main {
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto;
    display: flex;
    align-items: flex-start;
  }
  .appHeader {
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box;
    overflow: hidden;
    min-width: 1032px;
    &-logo {
      height: 52px;
      color: #0084ff;
      font-size: 32px;
    }
    &-inner {
      width: 1000px;
      padding: 0 16px;
      margin: 0 auto;
      height: 52px;
    }
    &-default {
      height: 52px;
      min-width: 1000px;
      display: flex;
      align-items: center;
      line-height: 52px;
      .submit-btn {
        padding: 0 14px;
        margin-left: 16px;
        line-height: 32px;
        display: inline-block;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #0084ff;
        border-radius: 3px;
        background-color: #0084ff;
        color: #fff;
        &:hover {
          border-color: #0077e6;
          background-color: #0077e6;
        }
      }
    }
    &-nav {
      display: flex;
      list-style-type: none;
      margin: 0 23px;
      .nav-item {
        padding: 0 17px;
        a {
          cursor: pointer;
          font-size: 15px;
          color: #8590a6;
          padding: 14px 0;
          &.is-active {
            font-weight: 600;
            color: #444;
            position: relative;
            &:after {
              position: absolute;
              right: 0;
              bottom: -1px;
              left: 0;
              height: 3px;
              background: #0084ff;
              content: "";
            }
          }
        }
      }
    }
    .searchBar {
      .input-wrapper {
        background-color: #f6f6f6;
        width: 326px;
        padding: 4px 10px;
        padding-left: 12px;
        padding-right: 0;
        font-size: 14px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        box-sizing: border-box;
        height: 34px;
        display: flex;
        align-items: center;
        transition: width .2s ease,background .3s ease;
        &.is-focus {
          background-color: #fff;
          border-color: #8590a6;
          width: 400px;
        }
        input {
          height: 24px;
          color: #1a1a1a;
          line-height: 24px;
          background-color: transparent;
          border: none;
          overflow: hidden;
          outline: none;
          flex: 1 1;
        }
      }
      .input-search {
        padding: 0 12px;
        margin-left: 12px;
        outline: 0;
        background-color: transparent;
        border-color: transparent;
      }
    }
    &-userInfo {
      flex: 1 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      > div {
        display: inherit;
      }
      .headPic {
        img {
          width: 30px;
          height: 30px;
        }
      }
      .userInfo {
        &-msg {
          margin-right: 40px;
          position: relative;
          .msg-count {
            font-size: 11px;
            line-height: 18px;
            display: inline-block;
            position: absolute;
            bottom: 50%;
            left: 50%;
            padding: 0 4px;
            color: #fff;
            background-color: #f1403c;
            border: 2px solid #fff;
            border-radius: 20px;
            height: 20px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
