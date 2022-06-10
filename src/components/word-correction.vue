<template>
  <span @click="call">{{ word + " " }} </span>
</template>

<script>
export default {
  props: ["word"],
  data() {
    return {};
  },
  methods: {
    call() {
      console.log(this.word.parentNode);
    },
  },
};
</script>