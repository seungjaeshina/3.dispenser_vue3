import { StreamBarcodeReader } from "vue-barcode-reader";

<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">운전면허증</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>

            <!-- ======== 내용 ======== -->
            <div class="drivingcard_container">
                <div class="drivingcard_area">
                    <div class="drivingcard_drivingcard">
                    </div>
                </div>
<!--
                <div class="drivingcard_info">
                    <div class="drivingcard_column_info">
                        <div class="drivingcard_label"  id="drivingcard_name_label" >이름</div>
                        <div class="drivingcard_input"  id="drivingcard_name"></div>
                    </div>

                    <div class="drivingcard_column_info">
                        <div class="drivingcard_label"  id="drivingcard_jumin_label">주민번호</div>
                        <div class="drivingcard_input"  id="drivingcard_jumin"></div>
                    </div>

                    <div class="drivingcard_column_info">
                        <div class="drivingcard_label"  id="drivingcard_addr_label">주소</div>
                        <div class="drivingcard_input"  id="drivingcard_addr"></div>
                    </div>

                    <div class="drivingcard_column_info">
                        <div class="drivingcard_label"  id="drivingcard_addr2_label">상세주소</div>
                        <div class="drivingcard_input"  id="drivingcard_addr2"></div>
                    </div>
                </div>

-->
                <div class="drivingcard_ment">
                </div>
            </div><!--container끝-->

            <div class="drivingcard_tail" v-on:click="goScan">
                스캔시작
            </div>
        </div><!--wrap 끝-->

    </div>
</template>
<script>
import '@/assets/css/receipt/drivingcard.css';

import axios from 'axios';
//import net from 'net';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
    name: "DrivingCard",
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
        goScan(){
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]운전면허증';
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
            this.log_data.menuName = '[메뉴]운전면허증';
            this.log_data.actionData = '인식요청';
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
            var name = document.querySelector('#drivingcard_name').innerText;
            var jumin = document.querySelector('#drivingcard_jumin').innerText;
            var addr = document.querySelector('#drivingcard_addr').innerText;
            var addr2 = document.querySelector('#drivingcard_addr2').innerText;
            
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]운전면허증';
            this.log_data.actionData = '전면스캔:'+name+'/'+jumin+'/'+addr+'/'+addr2;
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
    }

};
</script>
<style></style>