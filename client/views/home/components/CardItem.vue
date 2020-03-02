<template>
  <div class="TopstoryItem">
    <div class="TopstoryItem-title">
      <a>疫情结束后，全国男生的发型会是什么样子呢？</a>
    </div>
    <div class="TopstoryItem-content">
      <div class="TopstoryItem-corver">
        <div class="TopstoryItem-corver-inner">
          <img src="https://pic2.zhimg.com/v2-f94a2d0935ab4e68a95003985663f945_400x224.jpg" alt="cover">
        </div>
      </div>
      <div class="TopstoryItem-inner">
        <span class="TopstoryItem-inner-text">
          月见目闲： 这时候，天生自然卷的优势就体现出来了~表示长长2cm无压力~ ………… 你们都只关心狗毛长度？
          两个月还是有变化的… 放段它理发的视频吧~其实他它毛毛长的很快，每2个月就要剃一次~ 至于评论里问到的品…
        </span>
        <button class="TopstoryItem-more">
          <span>阅读全文</span>
          <svg-icon
            class="TopstoryItem-more-icon"
            style="margin-left: 5px"
            name="arrowDownBorder"
            width="14"
            height="14"
            color="#175199"
          ></svg-icon>
        </button>
      </div>
      <div class="TopstoryItem-actions">
        <span>
          <button class="Button TopstoryItem-actions-up TopstoryItem-button">
            <svg-icon
              class="TopstoryItem-more-icon"
              name="up"
              width="8"
              height="8"
              color="#0084ff"
            ></svg-icon>
            赞同 1.1万
          </button>
          <button class="Button TopstoryItem-actions-down TopstoryItem-button">
            <svg-icon
              class="TopstoryItem-more-icon"
              name="down"
              width="8"
              height="8"
              color="#0084ff"
            ></svg-icon>
          </button>
        </span>
        <button class="Button Button--plain">
          <svg-icon
            class="TopstoryItem-more-icon"
            name="comment"
            width="16"
            height="16"
          ></svg-icon>
          68 条评论
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopstoryItem',
};
</script>

<style scoped lang="less">
  .TopstoryItem {
    border-bottom: 1px solid #f0f2f7;
    padding: 20px;
    position: relative;
    background: #fff;
    &-title {
      font-size: 18px;
      font-weight: 600;
      font-synthesis: style;
      line-height: 1.6;
      color: #1a1a1a;
      margin-top: -4px;
      margin-bottom: -4px;
    }
    &-content {
      margin-top: 14px;
      line-height: 1.67;
    }
    &-corver {
      position: relative;
      width: 190px;
      height: 105px;
      margin-top: -2px;
      margin-right: 18px;
      margin-bottom: 4px;
      float: left;
      overflow: hidden;
      background-position: 50%;
      background-size: cover;
      border-radius: 4px;
      transform: translateZ(0);
      &-inner {
        position: absolute;
        top: 50%;
        left: 0;
        height: 100%;
        width: 100%;
        transform: translateY(-50%);
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          transform: translate3d(-50%,-50%,0);
        }
      }
    }
    &-inner {
      max-height: 100px;
      margin-top: 16px;
      margin-bottom: -4px;
      overflow: hidden;
      cursor: pointer;
      &-text {
        white-space: normal;
        word-break: break-word;
        line-height: 1.6;
        pointer-events: none;
      }
      &:hover,
      &:hover .TopstoryItem-more {
        opacity: .8;
      }
    }
    &-more {
      outline: none;
      display: inline-block;
      padding: 0;
      margin-left: 4px;
      color: #175199;
      height: auto;
      line-height: inherit;
      background-color: transparent;
      border: none;
      border-radius: 0;
    }
    &-actions {
      clear: both;
      display: flex;
      align-items: center;
      padding: 10px 20px;
      margin: 0 -20px -10px;
      .TopstoryItem-button:not(:disabled):hover {
        background-color: rgba(0,132,255,.15);
      }
      &-up {
        color: #0084ff;
        background: rgba(0,132,255,.1);
        border-color: transparent;
        line-height: 30px;
        padding: 0 12px;
      }
      &-down {
        line-height: 30px;
        padding: 0 12px;
        margin-left: 4px;
        color: #0084ff;
        background: rgba(0,132,255,.1);
        border-color: transparent;
      }
    }
  }
</style>
