<template>
<div class="wrap">
    <div class="mainViewContainer">
        <!-- npm install vue3-carousel -->
        <div class="wrapper">
            <div class="mlogoBtn">   
            </div>

            <div class="mtitleBtn">   
            </div>

            <div class="sltBtn">   
                <img src="@/assets/images/main_menu01.png"  class="receiptmenu" id="menu1" v-on:click="goMenu1">
                <img src="@/assets/images/main_menu02.png"  class="checkmanager" id="menu2"  v-on:click="goMenu2">
                <img src="@/assets/images/main_menu03.png"  class="status" id="menu3"  v-on:click="goMenu3">
            </div>
        </div>
        
    </div>
    <!-- mainViewContainer -->
</div>   
<!-- wrap  -->
</template>


<script>
import { defineComponent } from "vue";
import '@/assets/css/main/mainslide.css'

import axios from 'axios';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

//import json_log from "@/assets/json/log.json"
//const log.select = json_log.select

export default defineComponent({
	name: "MainSlide",
	data() {
		return {
            log_data :{},
		};
	},
    methods: {
        // 화면 클릭하면 안내 메세지 바뀜
        footerMessage(){
            this.$store.commit('setOrder', this.order);
        },
        goMenu1(){
            // 로그처리
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]등기수령';
            this.log_data.actionData = '';
            axios.post("http://115.91.83.140:8910/admin/dispenserlog/create", this.log_data, {
                header: {
                    "Context-Type": "multipart/form-data",
                },
            })
            .then((res) => { // 성공했을 경우
                console.log("성공", res);
                
            })
            .catch((res) => { // 실패했을 경우
                console.error("실패 ", res);
            });

            this.$router.push("/receiptmenu");
        },
        goMenu2(){
            // 로그처리
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]등기투입';
            this.log_data.actionData = '';
            axios.post("http://115.91.83.140:8910/admin/dispenserlog/create", this.log_data, {
                header: {
                    "Context-Type": "multipart/form-data",
                },
            })
            .then((res) => { // 성공했을 경우
                console.log("성공", res);
                
            })
            .catch((res) => { // 실패했을 경우
                console.error("실패 ", res);
            });

            this.$router.push("/checkmanager");
        },
        goMenu3(){
            // 로그처리
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]사용현황';
            this.log_data.actionData = '';
            axios.post("http://115.91.83.140:8910/admin/dispenserlog/create", this.log_data, {
                header: {
                    "Context-Type": "multipart/form-data",
                },
            })
            .then((res) => { // 성공했을 경우
                console.log("성공", res);
                
            })
            .catch((res) => { // 실패했을 경우
                console.error("실패 ", res);
            });

            this.$router.push("/status");
        },

        /**
        * txt파일을 불러온다
        *
        importTextFile() {
            const currentTime = dayjs().format('YYYY-MM-DD'); // 현재날짜
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'text/plain'; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
            // this 접근을 위해 선언 필요
            const self = this;
            input.onchange = function () {
                const file = new FileReader();
                file.onload = () => {
                    document.getElementById('text-data').textContent = file.result;
                    self.$data.textData = file.result;
                };
                file.readAsText(this.files[0]);
            };
            input.click();
        },
        **
        * textData를 txt 파일로 저장한다.
        
        exportTextFile() {
            const text = document.getElementById('text-data').value;
            // 저장하고자하는 파일명
            const filename = '텍스트파일명';
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            document.body.appendChild(element);
            element.click();
        },
        */
    },
    created (){
//        this.$store.commit('setCartList',null); // 장바구니 비우기
//        this.$store.commit('setPay', null); // 결제 방법 비우기
//        this.$store.commit('setUserVo', null); // 적립한 사람의 정보 지우기
//        this.$store.commit('setSavePoint',null); // 적립된 포인트 정보 지우기
        
    }
});
</script>
<style>
</style>