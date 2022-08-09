<script setup>
  import { defineEmits } from 'vue'

  const emit = defineEmits(['selected'])

  function selectNews () {
    emit('selected')
  }
</script>

<template>
  <div
    class="w-full bg-white p-[15px] rounded-md shadow select-none cursor-pointer hover:bg-zinc-50"
    @click="selectNews()"
  >
    <div class="text-zinc-500 text-[14px]">10 Agu 2022 19:19</div>
    <div class="line-clamp-6 text-[14px] mt-[6px]">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dicta eveniet natus molestias ipsa quod illo? Voluptatem, facere numquam. Consequatur ipsum consequuntur earum. Delectus, commodi. Laboriosam qui numquam tempore harum!
    </div>
  </div>
</template>