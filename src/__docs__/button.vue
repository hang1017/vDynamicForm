<script setup>
import { ref } from "vue";
import { Button } from "@alitajs/vdform";

const count = ref(0);
function onClick() {
  count.value++;
}
</script>

<template>
  <div>
    <p>
      <span class="">点击次数:</span>
      <span>{{ count }}</span>
    </p>
    <Button @click="onClick">count++</Button>
  </div>
</template>

<style>
.text {
  font-size: 14px;
}
</style>
