<template>
  <FormItem
    :label="showTitle ? title : null"
    :rules="mergedRules"
    :colon="colon"
    :name="prop"
    :wrapperCol="wrapperCol"
    :labelCol="labelCol"
  >
    <Input
      v-bind="$attrs"
      v-model:value="mergedValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :style="styles"
    ></Input>
  </FormItem>
</template>
<script>
import { FormItem, Input } from "ant-design-vue";
import { basicProps } from "../../props/index";
export default {
  name: "DformInput",
  components: {
    FormItem,
    Input,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    ...basicProps,
    // 值 v-model
    value: String | Number,
    // 清空
    clear: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    mergedRules: {
      get() {
        const rulesList = [
          {
            required: this.required,
            message: `请输入${this.title}`,
            trigger: "change",
          },
          ...(this.rules || []),
        ];
        return rulesList;
      },
      set() {},
    },
    mergedValue: {
      get() {
        return this.value;
      },
      set(val) {
        console.log(val);
        this.$emit("change", val);
      },
    },
  },
};
</script>

<style scoped lang="less">
@import url("../../styles/index.less");
</style>
