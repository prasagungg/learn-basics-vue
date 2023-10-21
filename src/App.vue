<template>
  <h1>{{ title }}</h1>
  <p>welcome</p>

  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="handleClickModal">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="handleClickModalTwo">
      <h1>{{ headerTwo }}</h1>
      <p>{{ textTwo }}</p>
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </teleport>

  <button @click="handleClickModal">Open Modal</button>
  <button @click="handleClickModalTwo">Open Modal dua</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App",
      header: "ini Header",
      text: "ini text",
      headerTwo: "ini header dua",
      textTwo: "ini text dua",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClickModal() {
      this.showModal = !this.showModal;
    },
    handleClickModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
h1 {
  border-bottom: 1px solid #dddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
