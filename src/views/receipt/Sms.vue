<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">인증번호 입력</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>


            <!-- ======== 내용 나오는곳 ======== -->
            <div class="sms2_container">
                <div class="sms2_column_info">
                    <div class="sms2_label"  id="sms_receiptno_label">인증번호</div>
                    <div class="sms2_input"  id="sms_receiptno" contenteditable="true" autofocus v-on:click="kbd_click('sms_receiptno')"></div>
                </div>

                <input type="hidden" class="myitem" ref="myitem" id="myitem" name="myitem" />
                <input type="hidden" class="myinput" ref="myinput" id="myinput" name="myinput"/>

                <div class="sms2_phonepad_info">
                    <div class="sms2_pad_num">  
                        <div class="num1"  v-on:click="goNum('1')"></div>
                        <div class="num2"  v-on:click="goNum('2')"></div>
                        <div class="num3"  v-on:click="goNum('3')"></div>
                    </div>
                    <div class="sms2_pad_num">  
                        <div class="num4"  v-on:click="goNum('4')"></div>
                        <div class="num5"  v-on:click="goNum('5')"></div>
                        <div class="num6"  v-on:click="goNum('6')"></div>
                    </div>
                    <div class="sms2_pad_num">  
                        <div class="num7"  v-on:click="goNum('7')"></div>
                        <div class="num8"  v-on:click="goNum('8')"></div>
                        <div class="num9"  v-on:click="goNum('9')"></div>
                    </div>
                    <div class="sms2_pad_num">  
                        <div class="num0"  v-on:click="goNum('0')"></div>
                        <div class="num_back"  v-on:click="goNum('11')"></div>
                        <div class="numconfirm"  v-on:click="goReceiptSign"></div>
                    </div>
                </div>

                <div class="sms_ment"></div>

                <div class="keyboardzone" id="keyboardzone"></div>

                <!-- ======== 모달창 ======== -->
                <div class="modal" id="modal2" ref="modal2" v-bind:class="{ 'modal-on': isModal }">
                    <div class="modal-content">
                        <h1 ref="msg">인증번호가 존재하지 않습니다.</h1>
                        <button v-on:click="modalClose">확인</button>
                    </div>
                </div>

            </div><!--container끝-->

            <div class="tail"  v-on:click="goReceiptSign">
            </div>

        </div><!--wrap 끝-->

    </div>
</template>
<script>
import '@/assets/css/receipt/sms.css';
import axios from 'axios';
//import functions from '@/assets/js/functions.js'

export default {
    name: "ReceiptSms",
    data() {
        return {
            log_data :{},
        };
    },
    component() {
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        },
        kbd_click(){
            document.querySelector('.phonepad_info').style.display = 'block';
            document.querySelector('.myitem').value = 'sms';
            document.querySelector('.myinput').value = document.querySelector('#sms_receiptno').innerText;        
            document.getElementById('myinput').focus();
            document.getElementById('myinput').click();
        },
        goNum(num){
            var result = document.querySelector('#sms_receiptno').innerText;
            if (num=='11') {
                if (result.length > 0) {
                    result = result.slice(0, -1); 
                    document.querySelector('#sms_receiptno').innerText = result;
                }       
            } else {
                    result = document.querySelector('#sms_receiptno').innerText;
                    result = result + '' + num; 
                    document.querySelector('#sms_receiptno').innerText = result;
            }    
        },
        goReceiptSign(){
            var result = document.querySelector('#sms_receiptno').innerText;
            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]인증번호입력';
            this.log_data.actionData = result;

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
        modalClose() {
            this.$refs.modal2.style.display = 'none'; 
        }
    },

    created() {
    },
    mounted() {
    }

};
</script>
<style></style>