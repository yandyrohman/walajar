<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    icon: String,
    iconPosition: {
      type: String,
      default: 'left' // left | right
    },
    type: {
      type: String,
      default: 'solid' // solid | ghost
    }
  })
</script>

<template>
  <button
    class="w-max px-[16px] py-[6px] bg-green-600 rounded-md text-white flex items-center gap-[7px] hover:shadow-lg transition-all active:scale-95"
    :class="{
      '!bg-transparent !text-green-600 hover:!shadow-none': props.type === 'ghost'
    }"
  >
    <i
      v-if="props.icon && props.iconPosition === 'left'"
      class="material-icons text-[18px]"
    >
      {{ props.icon }}
    </i>
    <slot />
    <i
      v-if="props.icon && props.iconPosition === 'right'"
      class="material-icons text-[18px]"
    >
      {{ props.icon }}
    </i>
  </button>
</template>