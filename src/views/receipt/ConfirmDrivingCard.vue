import { StreamBarcodeReader } from "vue-barcode-reader";

<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">운전면허 확인</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>

            <!-- ======== 내용 ======== -->
            <div class="confirmdrivingcard_container">
                <div class="confirmdrivingcard_area">
                </div>
                <div class="confirmdrivingcard_ment">
                </div>
            </div><!--container끝-->

            <div class="tail"  v-on:click="goReceiptSign">
            </div>
        </div><!--wrap 끝-->

    </div>
</template>
<script>
import '@/assets/css/receipt/confirmdrivingcard.css';

import axios from 'axios';
//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
    name: "ConfirmDrivingCard",
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
        goReceiptSign(){
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]운전면허증';
            this.log_data.actionData = '정보확인';
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

            this.$router.push('/receiptsign');
        },
    },
    created() {
    },
    mounted() {
    }

};
</script>
<style></style>