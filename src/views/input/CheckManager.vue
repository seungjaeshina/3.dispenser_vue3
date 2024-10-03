import { StreamBarcodeReader } from "vue-barcode-reader";

<template>
  <div>
    <div class="wrap">
      <!-- ======== 카테고리 헤더 ======== -->
      <div class="header">
        <div class="main_logo" v-on:click="goHome"></div>
        <div class="header_title">
          <div class="header_title_down">사원 인증</div>
        </div>
        <div class="back" v-on:click="goBack"></div>
      </div>

      <!-- ======== 내용 ======== -->
      <div class="checkmanager_container">
        <div class="check_column_info">
          <div class="checkmanager_label" id="checkmanager_receiptno_label">
            비밀번호
          </div>
          <div
            class="checkmanager_input"
            id="checkmanager_receiptno"
            contenteditable="true"
            autofocus
            v-on:click="kbd_click('checkmanager_receiptno')"
          ></div>
        </div>

        <input
          type="hidden"
          class="myitem"
          ref="myitem"
          id="myitem"
          name="myitem"
        />
        <input
          type="hidden"
          class="myinput"
          ref="myinput"
          id="myinput"
          name="myinput"
        />

        <div class="phonepad_info">
          <div class="pad_num">
            <div class="num1" v-on:click="goNum('1')"></div>
            <div class="num2" v-on:click="goNum('2')"></div>
            <div class="num3" v-on:click="goNum('3')"></div>
          </div>
          <div class="pad_num">
            <div class="num4" v-on:click="goNum('4')"></div>
            <div class="num5" v-on:click="goNum('5')"></div>
            <div class="num6" v-on:click="goNum('6')"></div>
          </div>
          <div class="pad_num">
            <div class="num7" v-on:click="goNum('7')"></div>
            <div class="num8" v-on:click="goNum('8')"></div>
            <div class="num9" v-on:click="goNum('9')"></div>
          </div>
          <div class="pad_num">
            <div class="num0" v-on:click="goNum('0')"></div>
            <div class="num_back" v-on:click="goNum('11')"></div>
            <div class="numconfirm" v-on:click="goMemberNoScan"></div>
          </div>
        </div>

        <div class="checkmanager_ment" v-on:click="goMemberNoScan"></div>

        <div class="keyboardzone" id="keyboardzone"></div>

        <!-- ======== 모달창 ======== -->
        <div
          class="modal"
          id="modal2"
          ref="modal2"
          v-bind:class="{ 'modal-on': isModal }"
        >
          <div class="modal-content">
            <h1 ref="msg">인증번호가 존재하지 않습니다.</h1>
            <button v-on:click="modalClose">확인</button>
          </div>
        </div>

        <div class="checkmanager_tail" v-on:click="goMemberNoScan"></div>
      </div>
      <!--container끝-->
    </div>
    <!--wrap 끝-->
  </div>
</template>
<script>
import "@/assets/css/input/checkmanager.css";
import axios from "axios";

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
  name: "CheckManager",
  data() {
    return {
      log_data: {},
      member_data: {},
      receiptno: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/");
    },
    kbd_click() {
      document.querySelector(".phonepad_info").style.display = "block";
      document.querySelector(".myitem").value = "sms";
      document.querySelector(".myinput").value = document.querySelector(
        "#checkmanager_receiptno"
      ).innerText;
      document.getElementById("myinput").focus();
      document.getElementById("myinput").click();
    },
    goNum(num) {
      var result = document.querySelector("#checkmanager_receiptno").innerText;
      if (num == "11") {
        if (result.length > 0) {
          result = result.slice(0, -1);
          document.querySelector("#checkmanager_receiptno").innerText = result;
        }
      } else {
        result = document.querySelector("#checkmanager_receiptno").innerText;
        result = result + "" + num;
        document.querySelector("#checkmanager_receiptno").innerText = result;
      }
    },
    goMemberNoScan() {
      // 로그처리
      this.receiptno = document.querySelector(
        "#checkmanager_receiptno"
      ).innerText;
      this.log_data.postNo = "1111101";
      this.log_data.boxNo = "";
      this.log_data.userId = "";
      this.log_data.menuName = "[메뉴]사원증스캔";
      this.log_data.actionData = "사원 인증(비밀번호):" + this.receiptno;
      axios
        .post(
          "http://115.91.83.140:8910/admin/dispenserlog/create",
          this.log_data,
          {
            header: {
              "Context-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          // 성공했을 경우
          console.log("성공", res);
          console.log("성공", res.errno);
        })
        .catch((res) => {
          // 실패했을 경우
          console.error("실패 ", res);
        });

      // 사원비밀번호 인증확인
      axios
        .get("http://115.91.83.140:8910/admin/member/detail", this.receiptno, {
          header: {
            "Context-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          // 성공했을 경우
          console.log("성공", res);
          console.log("성공", res.data.errno);

          if (res.data.errno == -1) {
            console.log(res.data.errmsg, this.receiptno);
            alert("존재하지 않는 비밀번호입니다.");
          } else {
            this.$router.push("/reginoscan");
          }
        })
        .catch((res) => {
          // 실패했을 경우
          console.error("실패 ", res);
        });
      this.$router.push("/reginoscan");
    },
  },
  created() {},
  mounted() {
    document.querySelector(".modal").style.display = "none";
  },
};
</script>
<style></style>


