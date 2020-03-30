<template>
  <div class="SelectContainer">
    <button
      ref="Button"
      class="Select-button"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      {{ realVerbose }}
      <svg-icon
        class="icon"
        name="arrowUpDown"
        width="20"
        height="20"
        color="#8590a6"
      >
      </svg-icon>
    </button>
    <div
      :style="{ display: focus ? 'block': 'none' }"
      ref="SelectPopup"
      class="SelectPopup">
      <button
        v-for="item in options"
        @mousedown="onMousedown"
        class="Select-option"
        :class="{ active: value === item.value }"
        :key="item.key || item.value"
        @click="emitSelect(item)"
      >
        {{ item.verbose }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Ref,
  Emit,
  Model,
  Prop,
} from 'vue-property-decorator';

@Component({
  name: 'Select',
  components: {},
})
export default class Select extends Vue {
  @Prop({ default: () => [] }) options!: Array<T>;

  @Model('input', { type: [String, Number] }) readonly value!: String;

  @Ref('SelectPopup') readonly refSelectPopup!: HTMLButtonElement;

  @Ref('Button') readonly refButton!: HTMLButtonElement;

  show: Boolean = false;

  focus: Boolean = false;

  defaultActive: any = '';

  get realVerbose() {
    const findRest = this.options.find(item => this.value === item.value);
    console.log(findRest)
    if (findRest) {
      return findRest.verbose;
    }
    return this.value;
  }

  mounted() {
    document.body.appendChild(this.refSelectPopup);
    this.handleResetPopupPosition();
  }

  @Emit('input')
  emitSelect(item: any) {
    this.refButton.blur();
    return item.value;
  }

  handleFocus() {
    this.focus = true;
    this.handleResetPopupPosition();
  }

  handleBlur() {
    this.focus = false;
  }

  onMousedown(e: Event) {
    e.preventDefault();
  }

  handleResetPopupPosition() {
    const { left } = this.refButton.getBoundingClientRect();
    const { top } = this.refButton.getBoundingClientRect();
    this.refSelectPopup.style.left = `${left}px`;
    this.refSelectPopup.style.top = `${top}px`;
  }
}
</script>

<style scoped lang="less">
  .SelectContainer {
    white-space: nowrap;
    cursor: pointer;
    .Select-button {
      display: flex;
      align-items: center;
      cursor: pointer;
      outline: none;
      padding: 0;
      border: 1px solid transparent;
      color: #8590a6;
      font-size: 14px;
      .icon {
        margin-left: 8px;
      }
    }
  }
  .SelectPopup {
    background-color: #fff;
    position: absolute;
    display: none;
    max-height: 500px;
    overflow: auto;
    padding: 8px 0;
    border-radius: 4px;
    width: 200px;
    transition: opacity .2s ease-out;
    border: 1px solid #ebebeb;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    z-index: 999;
  }
  .Select-option {
    font-size: 14px;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    color: #8590a6;
    text-align: left;
    background: none;
    border: none;
    &.active,
    &:hover,
    &:focus,
    &:active {
      background: #f6f6f6;
    }
  }
</style>
