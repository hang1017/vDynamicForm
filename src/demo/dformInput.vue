<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button, Tag } from "ant-design-vue";
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

let validatePass = async (_rule: any, value: string) => {
  if (value === "") {
    return Promise.reject("密码为必填项");
  } else if (value !== formValues.pwd) {
    return Promise.reject("密码输入不一致");
  } else {
    return Promise.resolve();
  }
};
</script>

<template>
  <DynamicForm
    :model="formValues"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 16 }"
  >
    <DformInput
      title="用户名"
      v-model:value="formValues.name"
      prop="name"
      placeholder="请输入"
      allowClear
    >
      <template #suffix>
        <Tag color="blue">检查</Tag>
      </template>
    </DformInput>
    <DformInput
      title="密码"
      v-model:value="formValues.pwd"
      prop="pwd"
      placeholder="请输入"
      inputType="password"
      required
    />
    <DformInput
      title="确认密码(规则)"
      v-model:value="formValues.resetPwd"
      prop="resetPwd"
      placeholder="请输入"
      inputType="password"
      required
      :rules="[{ validator: validatePass, trigger: 'change' }]"
    />
    <DformInput
      title="年龄"
      v-model:value="formValues.age"
      prop="age"
      placeholder="请输入"
      inputType="number"
      style="width: 100%"
    />
    <DformInput
      title="搜索"
      v-model:value="formValues.search"
      prop="search"
      placeholder="请输入"
      inputType="search"
      style="width: 100%"
    >
      <template #enterButton> 搜索 </template>
    </DformInput>
    <DformInput
      title="备注"
      v-model:value="formValues.remark"
      prop="remark"
      placeholder="请输入"
      inputType="area"
      style="width: 100%"
      :autosize="{ minRows: 3, maxRows: 5 }"
    />
    <Button type="primary" html-type="submit">提交</Button>
  </DynamicForm>
</template>
