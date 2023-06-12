<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  FormItem,
  Input,
  InputPassword,
  Textarea,
  InputSearch,
  InputNumber,
} from "ant-design-vue";
import { BasicProps } from "../../props/index";

const INPUT_TYPE = {
  text: Input,
  password: InputPassword,
  area: Textarea,
  search: InputSearch,
  number: InputNumber,
};

interface DformInputProps extends BasicProps {
  value: string | number | undefined;
  inputType?: "text" | "password" | "number" | "area" | "search";
}

const props = withDefaults(defineProps<DformInputProps>(), {
  inputType: "text",
  showTitle: true,
  colon: true,
  disabled: false,
  placeholder: "请输入",
});

const inputComponent = ref();

const emit = defineEmits(["update:value"]);

const mergedValue = computed({
  get() {
    return props.value;
  },
  set(newValue) {
    emit("update:value", newValue);
  },
});

const mergedRules = computed({
  get() {
    const rulesList = [
      {
        required: props.required,
        message: `请输入${props.title}`,
        trigger: "change",
      },
      ...(props.rules || []),
    ];
    return rulesList;
  },
  set() {},
});

watch(
  () => props.inputType,
  (newValue) => {
    inputComponent.value = INPUT_TYPE[newValue];
  },
  { immediate: true }
);
</script>

<template>
  <FormItem
    :label="props.showTitle ? props.title : null"
    :rules="mergedRules"
    :colon="props.colon"
    :name="props.prop"
    :wrapperCol="props.wrapperCol"
    :labelCol="props.labelCol"
  >
    <div class="alitajs-dform-item">
      <component
        :is="inputComponent"
        v-bind="$attrs"
        v-model:value="mergedValue"
        :disabled="props.disabled"
        :placeholder="props.placeholder"
        :style="props.style"
      >
        <template v-for="(_, name) in $slots" v-slot:[name]="data" :key="name">
          <slot :name="name" v-bind="data || {}" />
        </template>
      </component>
      <div class="alitajs-dform-right">
        <slot name="right" />
      </div>
    </div>
  </FormItem>
</template>

<style scoped lang="less">
@import url("../../styles/index.less");
</style>
