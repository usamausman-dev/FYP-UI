<template>
  <div class="container">
    <div class="row p-5">
      <div class="col-md-6">
        <textarea
          class="form-control text"
          style="height: 30vh"
          id="txtBox2"
          name="txtBox2"
          dir="rtl"
          cols="50"
          rows="5"
          :disabled="isDisabled"
          @keyup="convertLetter($event)"
        ></textarea>

        <div class="d-grid mt-3 gap-2">
          <button
            class="btn btn-primary"
            :disabled="isDisabled"
            type="button"
            @click="check()"
          >
            Submit
          </button>
        </div>
      </div>

      <div class="col-md-6">
        <p
          class="border h-100 p-3 text"
          style="font-size: 1rem; text-align: right; position: relative"
          id="outputValue"
          v-for="words in inputSen"
          :key="words.id"
        >
          <span v-for="word in words" :key="word.id">
            <span
              v-if="
                Object.keys(this.res[0]).includes(word) &&
                this.res[0][word].status == 'WRONG'
              "
              style="color: red"
            >
              <div class="dropdown">
                <button class="dropbtn">
                  {{ " " + this.res[0][word].current_word + " " }}
                </button>
                <div class="dropdown-content">
                  <button class="btn" @click="replaceWords">
                    {{ this.res[0][word].close_matches[0] }}
                  </button>
                  <button class="btn" @click="replaceWords">
                    {{ this.res[0][word].close_matches[1] }}
                  </button>
                  <button class="btn" @click="replaceWords">
                    {{ this.res[0][word].close_matches[2] }}
                  </button>
                </div>
              </div>
            </span>

            <span v-else>
              {{ " " + word + " " }}
            </span>
          </span>

          <button
            @click="copyTxt()"
            class="btn btn-primary"
            style="position: absolute; bottom: 15px; left: 15px"
          >
            <i class="fa fa-clone"></i>
          </button>

          <button
            @click="refreshPage()"
            class="btn btn-primary"
            style="position: absolute; bottom: 15px; right: 15px"
          >
            <i class="fa fa-refresh"></i>
          </button>
        </p>
      </div>
    </div>

    <div class="datakeys" style="padding: 0 10rem 0 10rem">
      <my-keyboard></my-keyboard>
    </div>
  </div>
</template>


<script>
import keys from "./consts/keys";
import axios from "axios";

export default {
  data() {
    return {
      isDisabled: false,
      res: [],
      inputSen: [],
    };
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

    refreshPage() {
      window.location.reload();
    },

    copyTxt() {
      // var txt = document.getElementById("outputValue").innerText;
      // console.log("yeh raha text", txt);

      var range = document.createRange();
      var selection = window.getSelection();
      range.selectNodeContents(document.getElementById("outputValue"));

      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
    },

    check() {
      this.isDisabled = true;
      var input = document.getElementById("txtBox2").value;
      // this.inputSen.push(input.split(" "));

      axios
        .post(`https://46366.gradio.app/api/predict`, {
          data: [input],
        })
        .then((response) => {
          var arrObj = response.data.data[0];
          // console.log(arrObj);
          var sentObj = JSON.parse(arrObj.replace(/'/g, '"'));
          // console.log(sentObj);
          this.inputSen.push(input.split(" "));
          this.res.push(sentObj);
        })
        .catch((e) => {
          console.log(e);
        });

      // var arrObj = {
      //   نام: {
      //     current_word: "نام",
      //     predicted_word: "معاوضے",
      //     close_matches: ["کام", "نجم", "نان"],
      //     resultSuggest: ["کام", "نجم", "فام", "نان"],
      //     status: "CORRECT",
      //   },
      //   اسامہ: {
      //     current_word: "اسامہ",
      //     predicted_word: "عرفات",
      //     close_matches: ["اسلام", "سام", "پانامہ"],
      //     resultSuggest: [
      //       "ارام",
      //       "اضافہ",
      //       "اسلم",
      //       "ادارہ",
      //       "ڈرامہ",
      //       "سادہ",
      //       "افسانہ",
      //       "خسارہ",
      //       "اسلام",
      //       "سام",
      //       "نامہ",
      //       "اشارہ",
      //       "اگاہ",
      //       "پانامہ",
      //       "علامہ",
      //       "سایہ",
      //       "بسمہ",
      //       "اسانی",
      //       "5سالہ",
      //     ],
      //     status: "WRONG",
      //   },
      // };

      // this.res.push(arrObj);
    },

    replaceWords(e) {
      var tagParent = e.target.parentNode.parentNode.parentNode;
      var dataChange = e.target.innerText + " ";
      tagParent.replaceWith(dataChange);
    },
  },
  computed: {},
};
</script>


<style>
</style>

