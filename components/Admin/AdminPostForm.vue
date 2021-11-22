<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Feladó neve</AppControlInput>
    <AppControlInput v-model="editedPost.title">A termék neve</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">A termék Fotója</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Leírás</AppControlInput>
      <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">Árazás</AppControlInput>
    <AppButton type="submit">Mentés</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Mégse</AppButton>
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      // Menti majd a postot
      this.$emit('submit',this.editedPost)
    },
    onCancel() {
      // vissza az admin menü termékeihez
      this.$router.push("/admin");
    }
  }
};
</script>
