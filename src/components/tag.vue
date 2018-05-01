<template>
    <span
      class="weui-tag"
      :class="[
        type ? 'weui-tag--' + type : '',
        size && 'weui-tag--'+size+'',
        {'is-hit': hit},
        
      ]"
      :style="{backgroundColor: color}">
      {{text}}
      <i class="weui-tag__close weui-icon-close"
        v-if="closable"
        @click.stop="handleClose"></i>
    </span>
</template>

<script>
export default {
  name: "tag",
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: {
      type: String,
      default: "mini"
    }
  },
  methods: {
    handleClose(event) {
      this.$emit("close", event);
    }
  }
};
</script>

<style>

</style>
