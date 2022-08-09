<script setup>
  import { computed, defineProps, defineEmits } from 'vue'

  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 999
    }
  })

  const zIndex = computed(() => {
    return `z-[${props.zIndex}]`
  })

  function closeModal () {
    emit('update:modelValue', false)
  }
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed w-full h-full top-0 left-0 z-[999] bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center"
    :class="[zIndex]"
    @click="closeModal()"
  >
    <div class="w-full max-h-screen overflow-y-auto flex justify-center">
      <div class="w-[400px] h-max bg-white rounded-md shadow-lg">
        <div v-for="i in 10">tes</div>
      </div>
    </div>
  </div>
</template>