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
          @keyup="convertLetter($event)"
        ></textarea>

        <div class="d-grid mt-3 gap-2">
          <button class="btn btn-primary" type="button" @click="check()">
            Submit
          </button>
        </div>
      </div>

      <div class="col-md-6">
        <p
          class="border h-100 p-3 text"
          style="font-size: 1rem; text-align: right"
          id="outputValue"
          v-for="words in inputSen"
          :key="words.id"
        >
          <span v-for="letters in words" :key="letters.id">
            <span
              v-if="Object.keys(this.res[0]).includes(letters)"
              style="color: red"
            >
              <div class="dropdown">
                <button class="dropbtn">{{ letters + " " }}</button>
                <div class="dropdown-content">
                  <button
                    onclick="console.log(this.parentNode.parentNode)"
                    class="btn"
                  >
                    Option 1
                  </button>

                  <button class="btn">Option 2</button>
                  <button class="btn">Option 3</button>
                </div>
              </div>
            </span>

            <span v-else>
              {{ letters + " " }}
            </span>
          </span>
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

export default {
  data() {
    return {
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

    check() {
      var input = document.getElementById("txtBox2").value;
      this.inputSen.push(input.split(" "));

      var arrObj = {
        نام: {
          current_word: "نام",
          predicted_word: "معاوضے",
          close_matches: ["کام", "نجم", "نان"],
          resultSuggest: ["کام", "نجم", "فام", "نان"],
          status: "WRONG",
        },
        اسامہ: {
          current_word: "اسامہ",
          predicted_word: "عرفات",
          close_matches: ["اسلام", "سام", "پانامہ"],
          resultSuggest: [
            "ارام",
            "اضافہ",
            "اسلم",
            "ادارہ",
            "ڈرامہ",
            "سادہ",
            "افسانہ",
            "خسارہ",
            "اسلام",
            "سام",
            "نامہ",
            "اشارہ",
            "اگاہ",
            "پانامہ",
            "علامہ",
            "سایہ",
            "بسمہ",
            "اسانی",
            "5سالہ",
          ],
          status: "WRONG",
        },
      };

      // Removing the correct Words so that incorrect could be checked
      Object.keys(arrObj).map(
        (k) => arrObj[k].status == "CORRECT" && delete arrObj[k]
      );

      this.res.push(arrObj);
    },

    // check() {
    //   var input = document.getElementById("txtBox2").value;
    //   var arrObj = {
    //     نام: {
    //       current_word: "نام",
    //       predicted_word: "معاوضے",
    //       close_matches: ["کام", "نجم", "نان"],
    //       resultSuggest: ["کام", "نجم", "فام", "نان"],
    //       status: "WRONG",
    //     },
    //     اسامہ: {
    //       current_word: "اسامہ",
    //       predicted_word: "عرفات",
    //       close_matches: ["اسلام", "سام", "پانامہ"],
    //       resultSuggest: [
    //         "ارام",
    //         "اضافہ",
    //         "اسلم",
    //         "ادارہ",
    //         "ڈرامہ",
    //         "سادہ",
    //         "افسانہ",
    //         "خسارہ",
    //         "اسلام",
    //         "سام",
    //         "نامہ",
    //         "اشارہ",
    //         "اگاہ",
    //         "پانامہ",
    //         "علامہ",
    //         "سایہ",
    //         "بسمہ",
    //         "اسانی",
    //         "5سالہ",
    //       ],
    //       status: "WRONG",
    //     },
    //   };

    //   // Removing the correct Words so that incorrect could be checked
    //   Object.keys(arrObj).map(
    //     (k) => arrObj[k].status == "CORRECT" && delete arrObj[k]
    //   );

    //   Object.keys(arrObj).forEach((element) => {
    //     var res = input.includes(element);
    //     if (res) {
    //       input = input.replace(
    //         element,

    //         // `<div><word-correction></word-correction></div>`

    //         `<div class="dropdown">
    //             <button class="dropbtn">${element}</button>
    //             <div class="dropdown-content">

    //             <button onclick="console.log(this.parentNode.parentNode)" class="btn">${arrObj[element].close_matches[0]}</button>
    //             <button class="btn">${arrObj[element].close_matches[1]}</button>
    //             <button class="btn">${arrObj[element].close_matches[2]}</button>

    //             </div>
    //           </div>`
    //       );
    //       document.getElementById("outputValue").innerHTML = input;
    //       // this.myWords();
    //     }
    //   });
    // },
  },
  computed: {},
};
</script>


<style>
</style>

