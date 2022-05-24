<template>
  <div :class="cls">
    <span class="mainkey">{{ mainKey }}</span>
    <sub class="subkeys">{{ subKey }}</sub>
  </div>
</template>

<script>
export default {
  props: {
    mainKey: {
      type: String,
      required: false,
    },
    subKey: {
      type: String,
      required: false,
    },
    cls: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {},
};
</script>