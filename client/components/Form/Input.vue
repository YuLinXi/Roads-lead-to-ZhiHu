<template>
  <div :class="{ 'InputContainer':true, 'showPassword': showPassword }">
    <label for="Input">
      <input
        ref="input"
        @input="handleInputChange"
        id="Input"
        :type="realType"
        :placeholder="placeholder"
        :value="value"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <svg-icon
        v-if="type === 'password'"
        @click="handleSwitchPassword"
        class="input-suffix"
        :name="showPassword ? 'open-eye' : 'close-eye'"
        width="24"
        height="24"
        color="#8590a6"
      >
      </svg-icon>
    </label>
    <div
      v-if="required && !isFocus && !value && !initLoad"
      class="InputContainer-errorMask"
      @click="handleMessageFocus"
    >
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Ref,
  Emit,
  Model,
} from 'vue-property-decorator';

@Component({
  name: 'Input',
  components: {},
})

export default class extends Vue {
  isFocus: Boolean = false;

  showPassword: Boolean = false;

  initLoad: Boolean = true;

  @Model('input', { type: String }) readonly value!: String;

  @Ref('input') readonly inputNode! : HTMLButtonElement;

  @Prop({ default: '请输入' }) placeholder!: string;

  @Prop({ default: 'text' }) type!: string;

  @Prop({ default: '请输入' }) message!: string;

  @Prop({ default: false }) required!: Boolean;

  get realType() {
    return this.showPassword ? 'text' : this.type;
  }

  @Emit('input')
  handleInputChange(e: Event) {
    this.initLoad = false;
    return (e.target as HTMLInputElement).value;
  }

  handleBlur() {
    this.isFocus = false;
  }

  handleFocus() {
    this.isFocus = true;
  }

  handleMessageFocus() {
    if (!this.isFocus && this.required) {
      this.inputNode.focus();
    }
  }

  handleSwitchPassword() {
    this.showPassword = !this.showPassword;
  }

  validate() {
    console.log('111')
    this.initLoad = false;
  }
}
</script>

<style scoped lang="less">
  .InputContainer {
    position: relative;
    overflow: hidden;
    &.showPassword {
      input {
        font-size: 14px;
      }
    }
    &-errorMask {
      position: absolute;
      height: 90%;
      margin-top: -45px;
      font-size: 14px;
      color: #f1403c;
      cursor: text;
      background: #fff;
      opacity: 1;
      box-sizing: border-box;
      transition: opacity .25s ease;
      width: 100%;
      padding: 12px 0 0 0;
      text-align: left;
    }
    input {
      outline: none;
      border: 0;
      line-height: 24px;
      color: #1a1a1a;
      font-size: 14px;
      background-color: #fff;
      &::-webkit-input-placeholder {
        color: #8590a6;
        font-weight: 400;
        font-size: 14px;
      }
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
      }
      &[type=password] {
        font-size: 20px;
      }
    }
    .input-suffix {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  .InputContainer,
  label,
  input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

</style>
