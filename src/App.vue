<template>
  <div class="container">
    <my-keyboard></my-keyboard>

    <textarea
      id="txtBox2"
      name="txtBox2"
      dir="rtl"
      cols="50"
      rows="5"
      class="text"
      @keyup="convertLetter($event)"
    >
    </textarea>
  </div>
</template>

<script>
import keys from "./consts/keys";

export default {
  data() {
    return {};
  },
  methods: {
    convertLetter(e) {
      const key = keys.find((ele) => {
        return ele.eng == e.key;
      });

      if (key !== undefined) {
        var res = String.fromCharCode(parseInt(key.unicode, 16));
        var inputField = document.getElementById("txtBox2").value;
        var results = inputField.slice(0, -1);
        results += res;
        document.getElementById("txtBox2").value = results;
      }
    },
  },
  computed: {},
};
</script>


<style>
</style>

