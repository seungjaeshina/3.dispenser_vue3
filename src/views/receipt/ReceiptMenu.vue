import { StreamBarcodeReader } from "vue-barcode-reader";

<template>
<div class="wrap">

    <div class="wrapper">
        <!-- ======== 카테고리 헤더 ======== -->
        <div class="header">
            <div class="main_logo" v-on:click="goHome"></div>
            <div class="header_title">
                <div class="header_title_down">고객 인증</div>    
            </div>
            <div class="back"  v-on:click="goBack"></div>    
        </div>

        <!-- ======== 내용 ======== -->
        <div class="barcode_container">
            <img src="@/assets/images/menu11.png"  class="menu_sms" id="menu1"  v-on:click="goSms">
            <img src="@/assets/images/menu13.png"  class="menu_scan" id="menu2" v-on:click="goSelectCard">
        </div><!--container끝-->
    </div>
</div><!--wrap 끝-->

</template>
<script>
import '@/assets/css/receipt/receiptmenu.css';
import axios from 'axios';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
    name: "ReceiptMenu",
    data() {
        return {
            log_data :{},
        };
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        },
        goSms(){
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]등기수령';
            this.log_data.actionData = '인증번호입력';
            // 로그처리
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
            this.$router.push('/sms');
        },
        goSelectCard(){
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]등기수령';
            this.log_data.actionData = '일반신분증입력';
            // 로그처리
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
            this.$router.push('/selectidcard');
        },
    },
    created() {
    },
    mounted() {
    }

};
</script>
<style></style>