<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button, Form, Space, SelectOption } from "ant-design-vue";
import type { FormInstance } from "ant-design-vue";
import { DformPicker } from "@alitajs/vdform";

const cityList = [
  { label: "北京", value: "beijing" },
  { label: "上海", value: "shanghai" },
  { label: "福州", value: "fuzhou" },
];
const aliasCityList = [
  { cityId: "shenzhen", cityName: "深圳" },
  { cityId: "hangzhou", cityName: "杭州" },
  { cityId: "guangzhou", cityName: "广州" },
];

const formValues = reactive<Record<string, any>>({
  city: "beijing",
});

const formRef = ref<FormInstance>();

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const resetForm = () => {
  if (formRef.value) formRef.value.resetFields();
};
</script>

<template>
  <Form
    ref="formRef"
    :model="formValues"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 16 }"
  >
    <DformPicker
      prop="city"
      title="城市"
      :options="cityList"
      v-model:value="formValues.city"
      allowClear
    />
    <DformPicker
      prop="aliasCity"
      title="城市(别名)"
      :options="aliasCityList"
      v-model:value="formValues.aliasCity"
      :alias="{ label: 'cityName', value: 'cityId' }"
      allowClear
    />
    <DformPicker
      prop="autoCity"
      title="城市(自定义)"
      v-model:value="formValues.autoCity"
      allowClear
    >
      <SelectOption value="fuzhou">福州</SelectOption>
      <SelectOption value="zhangzhou">漳州</SelectOption>
    </DformPicker>
    <Space>
      <Button type="primary" html-type="submit">提交</Button>
      <Button type="primary" @click="resetForm">重置</Button>
    </Space>
  </Form>
</template>
