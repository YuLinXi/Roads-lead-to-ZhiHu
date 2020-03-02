<template>
  <div class="recommend">
    <div class="main-container">
      <div class="recommend-ad">
        预留banner位
      </div>
      <div class="main-content">
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
        <div class="CardItem-list">
          <card-item></card-item>
        </div>
      </div>
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
          <a>
            <svg-icon
              class="writeCard-icon"
              name="video"
              width="18"
              height="20"
              color="#8590a6"
            >
            </svg-icon>
            <div>发视频</div>
          </a>
          <a>
            <svg-icon
              class="writeCard-icon"
              name="later"
              width="18"
              height="20"
              color="#8590a6"
            >
            </svg-icon>
            <div>稍后答</div>
          </a>
          <a>
            <svg-icon
              class="writeCard-icon"
              name="draft"
              width="18"
              height="20"
              color="#8590a6"
            >
            </svg-icon>
            <div>草稿箱</div>
          </a>
        </div>
      </div>
      <div class="writer">
        <svg-icon
          style="margin-left: 3px"
          name="writer"
          width="12"
          height="12"
          color="#8590a6"
        >
        </svg-icon>
        <div class="writerText">创作者中心</div>
        <div class="writerEntrance">
          去开通
        </div>
        <svg-icon
          style="margin-left: 3px"
          name="arrowRightBorder"
          width="18"
          height="18"
          color="#8590a6"
        >
        </svg-icon>
      </div>
      <div class="categoryList">
        <div class="categoryList-item">
          <a class="categoryList-item-link">
            <span class="categoryList-item-icon">
              <svg-icon
                class="categoryList-icon"
                name="live"
                width="36"
                height="36"
                color="#ffcf00"
              ></svg-icon>
            </span>
            <span class="categoryList-item-title">Live</span>
          </a>
        </div>
        <div class="categoryList-item">
          <a class="categoryList-item-link">
            <span class="categoryList-item-icon" style="padding: 8px">
              <svg-icon
                class="categoryList-icon"
                name="bookshop"
                width="20"
                height="20"
                color="#43d480"
              ></svg-icon>
            </span>
            <span class="categoryList-item-title">书店</span>
          </a>
        </div>
        <div class="categoryList-item">
          <a class="categoryList-item-link">
            <span class="categoryList-item-icon" style="padding: 8px">
              <svg-icon
                class="categoryList-icon"
                name="roundTable"
                width="20"
                height="20"
                color="#0084ff"
              ></svg-icon>
            </span>
            <span class="categoryList-item-title">圆桌</span>
          </a>
        </div>
        <div class="categoryList-item">
          <a class="categoryList-item-link">
            <span class="categoryList-item-icon" style="padding: 7px">
              <svg-icon
                class="categoryList-icon"
                name="pen"
                width="22"
                height="22"
                color="#0084ff"
              ></svg-icon>
            </span>
            <span class="categoryList-item-title">专栏</span>
          </a>
        </div>
        <div class="categoryList-item">
          <a class="categoryList-item-link">
            <span class="categoryList-item-icon" style="padding: 8px">
              <svg-icon
                class="categoryList-icon"
                name="pay"
                width="20"
                height="20"
                color="#0f88eb"
              ></svg-icon>
            </span>
            <span class="categoryList-item-title">付费咨询</span>
          </a>
        </div>
        <div class="categoryList-item">
          <a class="categoryList-item-link">
            <span class="categoryList-item-icon" style="padding: 7px">
              <svg-icon
                class="categoryList-icon"
                name="baike"
                width="22"
                height="22"
                color="#0084ff"
              ></svg-icon>
            </span>
            <span class="categoryList-item-title">百科</span>
          </a>
        </div>
      </div>
      <div class="advertisePosition">
        <a class="advertisePosition-link" target="_blank">
          <img style="width: 100%" src="https://img1.360buyimg.com/imgb/s250x250_jfs/t1/44812/11/7619/312733/5d54d323E6c88d8a2/41ddf03c04e8c795.jpg" alt="">
        </a>
        <div class="advertisePosition-close">
          <svg-icon
            class="advertisePosition-icon"
            name="closeBg"
            width="20"
            height="20"
          ></svg-icon>
        </div>
      </div>
      <ul class="navList">
        <li class="navList-item">
          <svg-icon
            name="collect"
            width="18"
            height="18"
            color="#8590a6"
          >
          </svg-icon>
          <span class="navList-item-text">
            我的收藏
          </span>
          <span class="navList-item-numbers">111</span>
        </li>
        <li class="navList-item">
          <svg-icon
            name="question"
            width="18"
            height="18"
            color="#8590a6"
          >
          </svg-icon>
          <span class="navList-item-text">
            我关注的问题
          </span>
          <span class="navList-item-numbers">194</span>
        </li>
        <li class="navList-item">
          <svg-icon
            name="invite"
            width="18"
            height="18"
            color="#8590a6"
          >
          </svg-icon>
          <span class="navList-item-text">
            我的邀请
          </span>
          <span class="navList-item-numbers">6</span>
        </li>
        <li class="navList-item">
          <svg-icon
            name="balance"
            width="18"
            height="18"
            color="#8590a6"
          >
          </svg-icon>
          <span class="navList-item-text">
            我的余额
          </span>
          <span class="navList-item-numbers">267</span>
        </li>
        <li class="navList-item">
          <svg-icon
            name="station"
            width="18"
            height="18"
            color="#8590a6"
          >
          </svg-icon>
          <span class="navList-item-text">
            站务中心
          </span>
        </li>
        <li class="navList-item">
          <svg-icon
            name="copyright"
            width="18"
            height="18"
            color="#8590a6"
          >
          </svg-icon>
          <span class="navList-item-text">
            版权服务中心
          </span>
        </li>
      </ul>
      <div class="advertisePosition">
        <a class="advertisePosition-link" target="_blank">
          <img style="width: 100%" src="https://img1.360buyimg.com/imgb/s250x250_jfs/t1/44812/11/7619/312733/5d54d323E6c88d8a2/41ddf03c04e8c795.jpg" alt="">
        </a>
        <div class="advertisePosition-close">
          <svg-icon
            class="advertisePosition-icon"
            name="closeBg"
            width="20"
            height="20"
          ></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CardItem from './components/CardItem.vue';

@Component({
  components: {
    CardItem,
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
    margin-right: 10px;
    .main-content {
      flex-shrink: 0;
      margin-bottom: 0;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      background-color: #fff;
    }
    .tabCard {
      list-style-type: none;
      height: 58px;
      display: flex;
      border-bottom: 1px solid #f0f2f7;
      &-item {
        cursor: pointer;
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
    .recommend-ad {
      padding: 0 16px;
      margin-bottom: 10px;
      height: 100px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, .3);
    }
  }
  .rightSideBar {
    flex: 1 1;
    .writeCard {
      border-radius: 2px;
      margin-bottom: 10px;
      background: #fff;
      overflow: hidden;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(26,26,26,.1);
      box-sizing: border-box;
      &-nav {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
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
    }
    .writer {
      border-radius: 2px;
      height: 52px;
      padding: 0 16px;
      background-color: #fff;
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 10px;
      .writerText {
        margin-left: 12px;
        color: #8590a6;
        flex: 1;
      }
      .writerEntrance {
        color: rgb(0, 132, 255);
      }
    }
    .categoryList {
      border-radius: 2px;
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 10px 0;
      background-color: #fff;
      &-icon {
        box-sizing: border-box;
      }
      &-item {
        width: 33%;
        margin-bottom: 25px;
        &-link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        &-icon {

        }
        &-title {
          font-size: 15px;
          color: #8590a6;
        }
      }
    }
    .advertisePosition {
      position: relative;
      overflow: hidden;
      width: 100%;
      transition: .35s;
      margin-bottom: 10px;
      &:hover .advertisePosition-close {
        opacity: 1;
      }
      &-link {
        display: block;
        width: 100%;
      }
      &-close {
        position: absolute;
        right: 10px;
        top: 10px;
        opacity: 0;
        transition: .35s;
      }
    }
    .navList {
      background-color: #fff;
      padding: 8px 0;
      margin-bottom: 10px;
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        padding: 0 20px;
        font-weight: 200;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          background: #f6f6f6;
          .navList-item-numbers {
            background-color: #fff;
          }
        }
        &-text {
          flex: 1;
          color: #8590a6;
          padding: 0 16px;
        }
        &-numbers {
          padding: 6px 10px;
          border-radius: 2px;
          background: #f6f6f6;
          color: #8590a6;
          font-size: 12px;
        }
      }
    }
  }

</style>
