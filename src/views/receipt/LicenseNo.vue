import { StreamBarcodeReader } from "vue-barcode-reader";

<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">신분증 선택</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>

            <!-- ======== 내용 ======== -->
            <div class="barcode_container">
                <router-link to="/sms"><img src="@/assets/images/menu11.png"  class="sms" id="menu1" ></router-link>
                <router-link to="/scan"><img src="@/assets/images/menu13.png"     class="scan" id="menu2" ></router-link>
            </div><!--container끝-->

        </div><!--wrap 끝-->

    </div>
</template>
<script>
import '@/assets/css/receipt/licenseno.css';
//import axios from 'axios';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
    name: "ReceiptMenu",
    data() {
        return {
            filter: "All",
            data : '',
        };
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        },
    },
    created() {
    },
    mounted() {
    }

};
</script>
<style></style>