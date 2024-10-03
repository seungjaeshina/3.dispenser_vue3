<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">본인 싸인</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>


            <!-- ======== 내용 나오는곳 ======== -->
            <div class="sign_container">
  
               <div class="sign_area">
                    <VueSignaturePad
                        id="signature"
                        width=70%
                        height=600px
                        ref="signaturePad"
                        :options="options"
                    />
                </div>

                   <!-- 사인 지우기 -->
                 <div id = "delete_container" v-on:click="undo">
                    <p id = "delete_txt">다시 서명</p>	
                 </div>

                           </div>          

            <div class="tail"  v-on:click="goBoxOpen">
            </div>

        </div><!--wrap 끝-->

    </div>
</template>


<script>
import '@/assets/css/receipt/receiptsign.css';

import axios from 'axios';

//import functions from '@/assets/js/functions.js'

export default {
    name: "ReceiptSign",
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
        undo() {
            this.$refs.signaturePad.undoSignature();
        },
        save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

            console.log(isEmpty);
            console.log(data);
        },
        resume() {
            this.options = {
                penColor: "#000000",
            };
        },
        goBoxOpen(){
            this.$refs.signaturePad.saveSignature();

            this.log_data.postNo = '1111101';
            this.log_data.boxNo = '';
            this.log_data.userId = '';
            this.log_data.menuName = '[메뉴]서명확인';
            this.log_data.actionData = '서명';
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
            this.$router.push('/receiptboxopen');
        },
        modalClose() {
            this.$refs.modal2.style.display = 'none'; 
        },

    },

    created() {
    },
    mounted() {
    }

};
</script>
<style>
</style>
