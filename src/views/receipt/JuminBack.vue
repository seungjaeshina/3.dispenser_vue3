import { StreamBarcodeReader } from "vue-barcode-reader";

<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">주민증 뒷면</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>

            <!-- ======== 내용 ======== -->
            <div class="juminback_container">
                <div class="selectidcard_area">
                    <div class="juminback_idcard">
                    </div>
                </div>
<!--
                <div class="juminback_info">
                    <div class="juminback_column_info">
                        <div class="juminback_label"  id="juminback_addr_label">주소</div>
                        <div class="juminback_input"  id="juminback_addr"></div>
                    </div>

                    <div class="juminback_column_info">
                        <div class="juminback_label"  id="juminback_addr2_label">상세주소</div>
                        <div class="juminback_input"  id="juminback_addr2"></div>
                    </div>
                </div>
  -->  
                <div class="juminback_ment">
                </div>
            </div><!--container끝-->
            <div class="juminback_tail" v-on:click="goConfirmJumin">
            </div>
            <div class="juminback_tail" v-on:click="goBackScan">
                스캔시작
            </div>

        </div><!--wrap 끝-->

    </div>
</template>
<script>
import '@/assets/css/receipt/juminback.css';

import axios from 'axios';
//import net from 'net';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
    name: "JuminBack",
    data() {
        return {
            log_data :{},
            recvMsg: [],
            recv_name:'',
            recv_jumin:'',
            recv_addr:'',
            recv_addr2:'',
        };
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        },
        goBackScan(){

            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]주민등록증';
            this.log_data.actionData = '인식기Socket연결';
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

            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]주민등록증';
            this.log_data.actionData = '뒷면인식요청';
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
        goReceiptSign(){
            var addr = document.querySelector('#juminback_addr').innerText;
            var addr2 = document.querySelector('#juminback_addr2').innerText;

            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]주민등록증';
            this.log_data.actionData = '후면스캔확인:'+addr+'/'+addr2;
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
        // 수취인정보로 등기정보조회
        postRegiNo() {
            axios.get("https://postnet.co.kr/retrieveRegiMailRecPrsnInfo.jsp", this.request_data, {
                header: {
                    "Context-Type": "multipart/form-data",
                },
            })
            .then((res) => { // 성공했을 경우
                console.log("성공", res);
                // regiNo : 등기번호 - 13
                
            })
            .catch((res) => { // 실패했을 경우
                console.error("실패 ", res);
            });
        }

    },
    created() {
    },
    mounted() {
    /*
        const socket = net.connect({
            port: 9001,
            host: '127.0.0.1', // host: 'localhost'
        });
        socket.on("connect", () => {

        });
*/
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]주민등록증';
            this.log_data.actionData = '후면스캔';
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