<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "ant-design-vue";
import type { FormInstance } from "ant-design-vue";
import DynamicForm, { DformInput } from "@alitajs/vdform";
const formValues = reactive<Record<string, any>>({});

const formRef = ref<FormInstance>();

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <DynamicForm
    ref="formRef"
    :model="formValues"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 16 }"
  >
    <DformInput
      showTitle
      title="名称"
      v-model:value="formValues.name"
      prop="name"
      placeholder="请输入"
      required
    />
    <Button type="primary" html-type="submit">提交</Button>
  </DynamicForm>
</template>
