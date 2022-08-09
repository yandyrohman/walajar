<script setup>
  import Navbar from '@components/base/Navbar.vue'
  import ForumList from '@components/home/ForumList.vue'
  import UiInput from '@ui/Input.vue'
</script>

<template>
  <Navbar />
  <div class="w-full h-max flex justify-center mt-[60px] mb-[60px]">
    <div class="w-[1000px] mt-[40px] flex gap-[20px]">
      <div class="w-[700px]">
        
        <!-- header -->
        <div class="flex justify-between">
          <div class="text-[18px] text-zinc-500 font-[500]">Semua Forum</div>
          <div class="flex items-center gap-[5px] text-green-600 cursor-pointer select-none hover:text-green-700">
            <i class="material-icons text-[20px]">add</i>
            <div class="font-[500]">Buat Forum</div>
          </div>
        </div>
        <div class="mt-[15px]">
          <UiInput
            placeholder="Cari forum, tekan enter untuk mencari"
          />
        </div>

        <!-- forum list -->
        <div class="mt-[50px] space-y-[40px]">
          <ForumList />
          <ForumList />
          <ForumList />
        </div>

      </div>
      <div class="w-[300px] h-[200px]"></div>
    </div>
  </div>
</template>
