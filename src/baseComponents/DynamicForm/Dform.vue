<script lang="ts" setup>
import { useAttrs } from "vue";
import { Form } from "ant-design-vue";
const props = withDefaults(
  defineProps<{
    /**
     * 按钮文本
     */
    text?: string;
  }>(),
  {
    text: "This a button component!",
  }
);

const attrs = useAttrs();

console.log(attrs);
</script>

<template>
  <div>
    <Form v-bind="attrs">
      <slot />
    </Form>
  </div>
</template>

<style lang="less"></style>
