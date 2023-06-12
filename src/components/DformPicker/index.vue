<script setup lang="ts">
import { computed } from "vue";
import { Select, SelectOption, FormItem } from "ant-design-vue";
import { BasicProps, OptionsItemProps, AliasProps } from "../../props/index";

interface DformPickerProps extends BasicProps {
  value: string | number | undefined;
  options?: OptionsItemProps[];
  alias?: AliasProps;
}

const props = withDefaults(defineProps<DformPickerProps>(), {
  showTitle: true,
  colon: true,
  disabled: false,
  placeholder: "请选择",
});

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
        message: `请选择${props.title}`,
        trigger: "change",
      },
      ...(props.rules || []),
    ];
    return rulesList;
  },
  set() {},
});

const mergedAlias = computed({
  get() {
    const alias = {
      label: "label",
      value: "value",
    };
    if (props.alias && props.alias.label) {
      alias.label = props.alias.label;
    }
    if (props.alias && props.alias.value) {
      alias.value = props.alias.value;
    }
    return alias;
  },
  set() {},
});
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
      <Select
        v-bind="$attrs"
        v-model:value="mergedValue"
        :disabled="props.disabled"
        :placeholder="props.placeholder"
        :style="props.style"
      >
        <slot />
        <SelectOption
          v-for="item in options || []"
          :value="item[mergedAlias.value]"
          :key="item[mergedAlias.value]"
        >
          {{ item[mergedAlias.label] }}
        </SelectOption>
      </Select>
      <div class="alitajs-dform-right">
        <slot name="right" />
      </div>
    </div>
  </FormItem>
</template>

<style scoped lang="less">
@import url("../../styles/index.less");
</style>
