<script setup>
  import { defineProps, defineEmits } from 'vue'
  import Modal from '@ui/Modal.vue'

  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    }
  })

  function closeModal () {
    emit('update:modelValue', false)
  }
</script>

<template>
  <Modal
    v-model="props.modelValue"
    width="lg"
    @update:model-value="closeModal()"
  >
    <div class="p-[20px]">
      <div class="font-medium mb-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsa obcaecati!
      </div>
      <div class="text-[14px] text-zinc-500 mb-[40px]">12 Agustus 2022 19:19</div>
      <div class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minus adipisci assumenda earum eos? Quasi quis maxime esse. Dignissimos placeat assumenda dicta voluptatum unde ex dolores quo quibusdam nostrum odio?
      </div>
    </div>
  </Modal>
</template>