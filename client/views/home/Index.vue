<template>
  <div class="recommend">
    <div class="main-container">
      <ul class="tabCard">
        <li class="tabCard-item">
          <a class="is-active">推荐</a>
        </li>
        <li class="tabCard-item">
          <a>关注</a>
        </li>
        <li class="tabCard-item">
          <a>热榜</a>
        </li>
      </ul>
      <div class="main-content"></div>
    </div>
    <div class="rightSideBar">
      <div class="writeCard">
        <div class="writeCard-nav">
          <a>
            <svg-icon
              class="writeCard-icon"
              name="article"
              width="20"
              height="20"
              color="#8590a6"
            >
            </svg-icon>
            <div>写回答</div>
          </a>
          <a>
            <svg-icon
              class="writeCard-icon"
              name="writeArt"
              width="18"
              height="20"
              color="#8590a6"
            >
            </svg-icon>
            <div>写文章</div>
          </a>
          <a>
            <svg-icon
              class="writeCard-icon"
              name="writeIdea"
              width="18"
              height="20"
              color="#8590a6"
            >
            </svg-icon>
            <div>写想法</div>
          </a>
        </div>
        <div class="writeCard-laterOnAnswer">
          <svg-icon

          ></svg-icon>
          <div>我的稍后回答</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Recommend extends Vue {}
</script>

<style scoped lang="less">
  .recommend {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }
  .main-container {
    width: 694px;
    flex-shrink: 0;
    margin-right: 10px;
    margin-bottom: 0;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-color: #fff;
    .tabCard {
      list-style-type: none;
      height: 58px;
      display: flex;
      border-bottom: 1px solid #f0f2f7;
      &-item {
        display: flex;
        align-items: center;
        font-size: 16px;
        margin: 0 22px;
        > a {
          &.is-active {
            color: #0084ff;
            font-weight: 500;
          }
        }
      }
    }
  }
  .rightSideBar {
    flex: 1 1;
    .writeCard {
      margin-bottom: 10px;
      background: #fff;
      overflow: hidden;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      box-sizing: border-box;
      &-nav {
        display: flex;
        justify-content: center;
        > a {
          cursor: pointer;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin: 23px;
          &:hover {
            color: #175199;
          }
        }
      }
      &-icon {
        margin-bottom: 8px;
      }
      &-laterOnAnswer {
        margin: 0 20px;
        height: 48px;
        color: #8590a6;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
