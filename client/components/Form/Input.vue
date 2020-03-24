<template>
  <div class="InputContainer">
    <label for="Input">
      <input
        ref="input"
        @input="handleInputChange"
        id="Input"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </label>
    <div
      v-if="required && !isFocus && !value"
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

  @Model('input', { type: String }) readonly value!: String;

  @Ref('input') readonly inputNode! : HTMLButtonElement;

  @Prop({ default: '请输入' }) placeholder!: string;

  @Prop({ default: 'text' }) type!: string;

  @Prop({ default: '请输入' }) message!: string;

  @Prop({ default: false }) required!: Boolean;

  @Emit('input')
  handleInputChange(e: Event) {
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
}
</script>

<style scoped lang="less">
  .InputContainer {
    position: relative;
    overflow: hidden;
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
      }
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
      }
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
