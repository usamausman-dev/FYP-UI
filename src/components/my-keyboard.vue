<template>
  <div class="keyboard_wrapp">
    <div v-for="row in keyboard" :key="row.id" class="keyboard_keys">
      <div v-for="key in row" :key="key.id" class="row">
        <keyboard-keys
          v-for="myKey in key"
          :key="myKey.id"
          :main-key="myKey.mainkey"
          :sub-key="myKey.subkey"
          :cls="myKey.cls"
        >
        </keyboard-keys>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyboard: [
        {
          row1: [
            { mainkey: "`", subkey: "", cls: "keys" },
            { mainkey: "1", subkey: "", cls: "keys" },
            { mainkey: "2", subkey: "", cls: "keys" },
            { mainkey: "3", subkey: "", cls: "keys" },
            { mainkey: "4", subkey: "", cls: "keys" },
            { mainkey: "5", subkey: "", cls: "keys" },
            { mainkey: "6", subkey: "", cls: "keys" },
            { mainkey: "7", subkey: "", cls: "keys" },
            { mainkey: "8", subkey: "", cls: "keys" },
            { mainkey: "9", subkey: "(", cls: "keys" },
            { mainkey: "0", subkey: ")", cls: "keys" },
            { mainkey: "-", subkey: "", cls: "keys" },
            { mainkey: "=", subkey: "", cls: "keys" },
            { mainkey: "backspace", subkey: "", cls: "keys backspace_key" },
          ],

          row2: [
            { mainkey: "Tab", subkey: "", cls: "keys tab_key" },
            { mainkey: "ق", subkey: "", cls: "keys" },
            { mainkey: "و", subkey: "", cls: "keys" },
            { mainkey: "ع", subkey: "", cls: "keys" },
            { mainkey: "ر", subkey: "ڑ", cls: "keys" },
            { mainkey: "ت", subkey: "ٹ", cls: "keys" },
            { mainkey: "ے", subkey: "", cls: "keys" },
            { mainkey: "ء", subkey: "ئ", cls: "keys" },
            { mainkey: "ی", subkey: "", cls: "keys" },
            { mainkey: "ہ", subkey: "", cls: "keys" },
            { mainkey: "پ", subkey: "", cls: "keys" },
            { mainkey: "", subkey: "", cls: "keys" },
            { mainkey: "", subkey: "", cls: "keys" },
            { mainkey: "", subkey: "", cls: "keys slash_key" },
          ],
          row3: [
            { mainkey: "Caps Lock", subkey: "", cls: "keys caps_lock_key" },
            { mainkey: "ا", subkey: "آ", cls: "keys" },
            { mainkey: "س", subkey: "ص", cls: "keys" },
            { mainkey: "د", subkey: "ڈ", cls: "keys" },
            { mainkey: "ف", subkey: "", cls: "keys" },
            { mainkey: "گ", subkey: "غ", cls: "keys" },
            { mainkey: "ھ", subkey: "ح", cls: "keys" },
            { mainkey: "ج", subkey: "ض", cls: "keys" },
            { mainkey: "ک", subkey: "خ", cls: "keys" },
            { mainkey: "ہ", subkey: "", cls: "keys" },
            { mainkey: "ل ", subkey: "", cls: "keys" },
            { mainkey: "؛", subkey: ":", cls: "keys" },
            { mainkey: "’", subkey: "”", cls: "keys" },
            { mainkey: "Enter", subkey: "", cls: "keys enter_key" },
          ],
          row4: [
            { mainkey: "Shift", subkey: "", cls: "keys shift_key" },
            { mainkey: "ز", subkey: "ذ", cls: "keys" },
            { mainkey: "ش", subkey: "ژ", cls: "keys" },
            { mainkey: "چ", subkey: "ث", cls: "keys" },
            { mainkey: "ط", subkey: "ظ", cls: "keys" },
            { mainkey: "ب", subkey: "غ", cls: "keys" },
            { mainkey: "ن", subkey: "ں", cls: "keys" },
            { mainkey: "م", subkey: "", cls: "keys" },
            { mainkey: "،", subkey: "", cls: "keys" },
            { mainkey: "۔", subkey: "", cls: "keys" },
            { mainkey: " ", subkey: "؟", cls: "keys" },
            { mainkey: "Shift", subkey: "", cls: "keys shift_key" },
          ],
          row5: [
            { mainkey: "Ctrl", subkey: "", cls: "keys ctrl_key ctrl_left" },
            { mainkey: "Win", subkey: "", cls: "keys win_key" },
            { mainkey: "Alt", subkey: "", cls: "keys alt_key alt_left" },
            { mainkey: "", subkey: "", cls: "keys space_key" },
            { mainkey: "Alt", subkey: "", cls: "keys alt_key alt_right" },
            { mainkey: "Fn", subkey: "", cls: "keys" },
            { mainkey: "Ctrl", subkey: "", cls: "keys ctrl_key ctrl_right" },
          ],
        },
      ],

      row1: [
        { mainkey: "`", subkey: "", cls: "keys" },
        { mainkey: "1", subkey: "", cls: "keys" },
        { mainkey: "2", subkey: "", cls: "keys" },
        { mainkey: "3", subkey: "", cls: "keys" },
        { mainkey: "4", subkey: "", cls: "keys" },
        { mainkey: "5", subkey: "", cls: "keys" },
        { mainkey: "6", subkey: "", cls: "keys" },
        { mainkey: "7", subkey: "", cls: "keys" },
        { mainkey: "8", subkey: "", cls: "keys" },
        { mainkey: "9", subkey: "(", cls: "keys" },
        { mainkey: "0", subkey: ")", cls: "keys" },
        { mainkey: "-", subkey: "", cls: "keys" },
        { mainkey: "=", subkey: "", cls: "keys" },
        { mainkey: "backspace", subkey: "", cls: "keys backspace_key" },
      ],

      row2: [
        { mainkey: "Tab", subkey: "", cls: "keys tab_key" },
        { mainkey: "ق", subkey: "", cls: "keys" },
        { mainkey: "و", subkey: "", cls: "keys" },
        { mainkey: "ع", subkey: "", cls: "keys" },
        { mainkey: "ر", subkey: "ڑ", cls: "keys" },
        { mainkey: "ت", subkey: "ٹ", cls: "keys" },
        { mainkey: "ے", subkey: "", cls: "keys" },
        { mainkey: "ء", subkey: "ئ", cls: "keys" },
        { mainkey: "ی", subkey: "", cls: "keys" },
        { mainkey: "ہ", subkey: "", cls: "keys" },
        { mainkey: "پ", subkey: "", cls: "keys" },
        { mainkey: "", subkey: "", cls: "keys" },
        { mainkey: "", subkey: "", cls: "keys" },
        { mainkey: "", subkey: "", cls: "keys slash_key" },
      ],
      row3: [
        { mainkey: "Caps Lock", subkey: "", cls: "keys caps_lock_key" },
        { mainkey: "ا", subkey: "آ", cls: "keys" },
        { mainkey: "س", subkey: "ص", cls: "keys" },
        { mainkey: "د", subkey: "ڈ", cls: "keys" },
        { mainkey: "ف", subkey: "", cls: "keys" },
        { mainkey: "گ", subkey: "غ", cls: "keys" },
        { mainkey: "ھ", subkey: "ح", cls: "keys" },
        { mainkey: "ج", subkey: "ض", cls: "keys" },
        { mainkey: "ک", subkey: "خ", cls: "keys" },
        { mainkey: "ہ", subkey: "", cls: "keys" },
        { mainkey: "ل ", subkey: "", cls: "keys" },
        { mainkey: "؛", subkey: ":", cls: "keys" },
        { mainkey: "’", subkey: "”", cls: "keys" },
        { mainkey: "Enter", subkey: "", cls: "keys enter_key" },
      ],
      row4: [
        { mainkey: "Shift", subkey: "", cls: "keys shift_key" },
        { mainkey: "ز", subkey: "ذ", cls: "keys" },
        { mainkey: "ش", subkey: "ژ", cls: "keys" },
        { mainkey: "چ", subkey: "ث", cls: "keys" },
        { mainkey: "ط", subkey: "ظ", cls: "keys" },
        { mainkey: "ب", subkey: "غ", cls: "keys" },
        { mainkey: "ن", subkey: "ں", cls: "keys" },
        { mainkey: "م", subkey: "", cls: "keys" },
        { mainkey: "،", subkey: "", cls: "keys" },
        { mainkey: "۔", subkey: "", cls: "keys" },
        { mainkey: " ", subkey: "؟", cls: "keys" },
        { mainkey: "Shift", subkey: "", cls: "keys shift_key" },
      ],
      row5: [
        { mainkey: "Ctrl", subkey: "", cls: "keys ctrl_key ctrl_left" },
        { mainkey: "Win", subkey: "", cls: "keys win_key" },
        { mainkey: "Alt", subkey: "", cls: "keys alt_key alt_left" },
        { mainkey: "", subkey: "", cls: "keys space_key" },
        { mainkey: "Alt", subkey: "", cls: "keys alt_key alt_right" },
        { mainkey: "Fn", subkey: "", cls: "keys" },
        { mainkey: "Ctrl", subkey: "", cls: "keys ctrl_key ctrl_right" },
      ],
    };
  },

  methods: {},
};
</script>