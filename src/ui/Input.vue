<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    placeholder: String
  })
</script>

<template>
  <div class="flex items-center bg-white group focus-within:shadow rounded-md transition-all">
    <div class="w-[45px] h-[45px] flex justify-center items-center flex-shrink-0">
      <i class="material-icons text-zinc-300">search</i>
    </div>
    <input
      class="w-full h-[45px] rounded-md outline-none pr-[20px] text-base"
      :placeholder="props.placeholder"
    />
  </div>
</template>