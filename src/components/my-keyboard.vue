<template>
  <div class="keyboard_wrapp">
    <div class="keyboard_keys">
      <!-- Row 1 -->
      <div class="row">
        <keyboard-keys
          v-for="myKey in row1"
          :key="myKey.id"
          :main-key="myKey.mainkey"
          :sub-key="myKey.subkey"
          :cls="myKey.cls"
        >
        </keyboard-keys>
      </div>

      <div class="row">
        <div class="keys tab_key">Tab</div>
        <div class="keys">
          <span class="mainkey">ق</span>
          <!-- <sub class="subkeys">ظ</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey">و</span>
          <!-- <sub class="subkeys">ض</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey"> ع</span>
          <!-- <sub class="subkeys">ذ</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey">ر</span>
          <sub class="subkeys">ڑ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ت</span>
          <sub class="subkeys">ٹ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ے</span>
          <!-- <sub class="subkeys">ّ</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey">ء</span>
          <sub class="subkeys">ئ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ی</span>
          <!-- <sub class="subkeys">ـ</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey">ہ</span>
          <!-- <sub class="subkeys">چ</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey">پ</span>
          <!-- <sub class="subkeys">خ</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey"></span>
          <sub class="subkeys"></sub>
        </div>
        <div class="keys">
          <span class="mainkey"></span>
          <sub class="subkeys"></sub>
        </div>
        <div class="keys slash_key">
          <span class="mainkey"></span>
          <sub class="subkeys"></sub>
        </div>
      </div>
      <div class="row">
        <div class="keys caps_lock_key">Caps Lock</div>
        <div class="keys">
          <span class="mainkey">ا</span>
          <sub class="subkeys">آ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">س</span>
          <sub class="subkeys">ص</sub>
        </div>
        <div class="keys">
          <span class="mainkey">د</span>
          <sub class="subkeys">ڈ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ف</span>
          <!-- <sub class="subkeys">"</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey">گ</span>
          <sub class="subkeys">غ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ھ</span>
          <sub class="subkeys">ح</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ج</span>
          <sub class="subkeys">ض</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ک</span>
          <sub class="subkeys">خ</sub>
        </div>

        <div class="keys">
          <span class="mainkey">ل</span>
          <!-- <sub class="subkeys">گ</sub> -->
        </div>
        <div class="keys">
          <span class="mainkey">؛</span>
          <sub class="subkeys">:</sub>
        </div>
        <div class="keys">
          <span class="mainkey">’</span>
          <sub class="subkeys">”</sub>
        </div>

        <div class="keys enter_key">Enter</div>
      </div>
      <div class="row">
        <div class="keys shift_key shift_left">Shift</div>
        <div class="keys">
          <span class="mainkey">ز</span>
          <sub class="subkeys">ذ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ش</span>
          <sub class="subkeys">ژ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">چ</span>
          <sub class="subkeys">ث</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ط</span>
          <sub class="subkeys">ظ</sub>
        </div>
        <div class="keys">
          <span class="mainkey">ب</span>
        </div>
        <div class="keys">
          <span class="mainkey">ن</span>
          <sub class="subkeys">ں</sub>
        </div>
        <div class="keys">
          <span class="mainkey">م</span>
        </div>
        <div class="keys">
          <span class="mainkey">،</span>
          <!-- <sub class="subkeys"> &lt </sub> -->
        </div>
        <div class="keys">
          <span class="mainkey">۔</span>
          <!-- <sub class="subkeys"> &gt </sub> -->
        </div>
        <div class="keys">
          <span class="mainkey"></span>
          <sub class="subkeys"> ؟ </sub>
        </div>

        <div class="keys shift_key shift_right">Shift</div>
      </div>
      <div class="row">
        <div class="keys ctrl_key ctrl_left">Ctrl</div>
        <div class="keys win_key">Win</div>
        <div class="keys alt_key alt_left">Alt</div>
        <div class="keys space_key"></div>
        <div class="keys alt_key alt_right">Alt</div>
        <div class="keys">Fn</div>
        <div class="keys ctrl_key ctrl_right">Ctrl</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "isFavorite"],

  data() {
    return {
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
    };
  },

  methods: {},
};
</script>