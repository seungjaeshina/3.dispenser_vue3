<template>
      <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">등기번호 스캔</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>

            <!-- ======== 내용 ======== -->
            <div class="reginoscan_container">
                <div class="reginoscan_area">
                </div>

                <div class="reginoscan_ment">
                </div>
            </div><!--container끝-->
            <div class="reginoscan_tail" v-on:click="goSelectBox">
            </div>
        </div><!--wrap 끝-->

    </div>
</template>
<script>
import '@/assets/css/input/reginoscan.css';
import axios from 'axios';
//import { SerialPort } from 'serialport';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
    name: "RegiNoScan",
    data() {
        return {
            log_data :{},
            regi_data :{},
            regiNo:'',
        };
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        },
        onDecode (result) {
            this.qrCodeData = result;
        },
        checkQR(){
            // 로그처리
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]등기번호스캔';
            this.log_data.actionData = '등기번호 스캔 시작';
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
            axios({
                method: 'get',
                url: 'http://localhost:5193/api/scanQR',
                timeout : 30000, 
                headers: {
                    "Content-Type": "application/json"
                },
                data: {}
            })
            .then(function(response) {
                if (response.status === 200) {
                    const responseBody = response.data;
                    console.log(responseBody);
                    console.log("qrCode :"+responseBody.qrCode);
        
                    this.regiNo = responseBody.qrCode;

                    // 등기번호 인증
                    this.regi_data.regiNo = responseBody.qrCode;
                    axios.get("http://115.91.83.140:8910/admin/dispenser/checkregino", this.regi_data, {
                        header: {
                            "Context-Type": "multipart/form-data",
                        },
                    })
                    .then((res) => { // 성공했을 경우
                        console.log("스캔성공", res);
                        if (res.data.errno == -1) {
                            console.log(res.data.errmsg, this.regiNo);
                        } else {                
                            this.$router.push('/selectbox');
                        }

                    })
                    .catch((res) => { // 실패했을 경우
                        console.error("실패 ", res);
                    });
            
                } else {
                    console.error('error:', response.statusText);
                }
            })
            .catch(function(error) {
                console.error('error:', error);
            });
        },
        goSelectBox(){
            this.checkQR();
            if (this.regiNo == '') {
///                alert('정상적인 등기번호를 스캔해 주세요.');
                this.$router.push('/selectbox');
            } else {
                // 로그처리
                this.log_data.postNo = '1111101';
                this.log_data.boxNo = '';
                this.log_data.userId = '';
                this.log_data.menuName = '[메뉴]등기번호스캔';
                this.log_data.actionData = '등기번호 스캔 완료:'+this.regiNo;
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

                this.$router.push('/selectbox');
            }
        }     
    },
    created() {
    },
    mounted() {
    }

};
</script>
