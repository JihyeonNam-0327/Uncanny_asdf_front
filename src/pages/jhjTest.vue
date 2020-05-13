<template>
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <ModalPicker v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">custom header</h3>
    </ModalPicker>
  </div>
</template>

<script>
  import ModalPicker from '@/components/ModalPicker'

  export default {
    components: {
      ModalPicker,
    },
    data() {
      return {
      showModal: false
      }
    }
 }
</script>

<style lang="scss" scoped>

</style>