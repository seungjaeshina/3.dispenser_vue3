import { StreamBarcodeReader } from "vue-barcode-reader";

<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">보관함 닫기</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>

            <!-- ======== 내용 ======== -->
            <div class="boxclose_container">
                <div class="boxclose_area">
                </div>
                <div class="boxclose_ment">
                </div>
            </div><!--container끝-->

            <div class="tail"  v-on:click="goHome">
            </div>
        </div><!--wrap 끝-->

    </div>
</template>
<script>
import '@/assets/css/receipt/boxclose.css';

import axios from 'axios';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
    name: "BoxClose",
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
        }     
    },
    created() {
    },
    mounted() {
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]등기수령';
            this.log_data.actionData = '보관함닫힘';
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
    }

};
</script>
<style></style>