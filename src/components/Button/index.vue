<script lang="ts" setup>
import { BasicProps } from "../../props";

interface InputProps extends BasicProps {}

const props = withDefaults(defineProps<InputProps>(), {});
</script>

<template>
  <button></button>
</template>
