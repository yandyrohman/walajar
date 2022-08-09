<script setup>
  import UiButton from '@ui/Button.vue'
</script>

<template>
  <div class="w-full h-[70px] bg-white shadow rounded-md flex justify-between items-center px-[20px] cursor-pointer select-none transition-all hover:bg-zinc-50">
    <div class="flex items-center gap-[20px]">
      <img
        src="/person.jpg"
        class="w-[40px] h-[40px] rounded-md"
        alt="forum photo"
      >
      <div>
        <div>Sm4rt Code</div>
        <div class="text-[12px] text-zinc-400">10 Anggota</div>
      </div>
    </div>
    <div>
      <UiButton icon="person_add">Bergabung</UiButton>
      <!-- <UiButton
        type="ghost"
        icon="arrow_forward"
        icon-position="right"
      >
        Lihat
      </UiButton> -->
    </div>
  </div>
</template>