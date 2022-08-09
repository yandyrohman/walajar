<script setup>
  import Forum from '@components/home/Forum.vue'
</script>

<template>
  <div>
    <div class="flex items-center gap-[15px]">
      <img
        src="/person.jpg"
        class="w-[20px] h-[20px] rounded-full"
        alt="profile"
        draggable="false"
      >
      <div class="text-zinc-500 select-none text-[14px]">Forum oleh Yandi Rohman</div>
    </div>
    <div class="mt-[15px] space-y-[10px]">
      <Forum v-for="i in 3" />
    </div>
  </div>
</template>