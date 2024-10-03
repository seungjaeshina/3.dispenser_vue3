<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">보관함 선택</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>

            <!-- ======== 내용 ======== -->
            <div class="selectbox_container">
                <div class="selectbox_area">
                <!--
                    <div class="selectbox_101" v-on:click="goClick('101')">
                    </div>
                    <div class="selectbox_102" v-on:click="goClick('102')">
                    </div>
                    <div class="selectbox_103" v-on:click="goClick('103')">
                    </div>
                    <div class="selectbox_104" v-on:click="goClick('104')">
                    </div>
                    <div class="selectbox_105" v-on:click="goClick('105')">
                    </div>
                    <div class="selectbox_106" v-on:click="goClick('106')">
                    </div>
                    <div class="selectbox_107" v-on:click="goClick('107')">
                    </div>
                    <div class="selectbox_108" v-on:click="goClick('108')">
                    </div>
                    <div class="selectbox_109" v-on:click="goClick('109')">
                    </div>

                    <div class="selectbox_201" v-on:click="goClick('201')">
                    </div>
                    <div class="selectbox_202" v-on:click="goClick('202')">
                    </div>
                    <div class="selectbox_203" v-on:click="goClick('203')">
                    </div>
                    <div class="selectbox_204" v-on:click="goClick('204')">
                    </div>
                    <div class="selectbox_205" v-on:click="goClick('205')">
                    </div>
                    <div class="selectbox_206" v-on:click="goClick('206')">
                    </div>
                    <div class="selectbox_207" v-on:click="goClick('207')">
                    </div>
                    <div class="selectbox_208" v-on:click="goClick('208')">
                    </div>
                    <div class="selectbox_209" v-on:click="goClick('209')">
                    </div>
                    <div class="selectbox_210" v-on:click="goClick('210')">
                    </div>
                    <div class="selectbox_211" v-on:click="goClick('211')">
                    </div>
                    <div class="selectbox_212" v-on:click="goClick('212')">
                    </div>

                    <div class="selectbox_221" v-on:click="goClick('221')">
                    </div>
                    <div class="selectbox_222" v-on:click="goClick('222')">
                    </div>
                    <div class="selectbox_223" v-on:click="goClick('223')">
                    </div>
                    <div class="selectbox_224" v-on:click="goClick('224')">
                    </div>
                    <div class="selectbox_225" v-on:click="goClick('225')">
                    </div>
                    <div class="selectbox_226" v-on:click="goClick('226')">
                    </div>
                    <div class="selectbox_227" v-on:click="goClick('227')">
                    </div>
                    <div class="selectbox_228" v-on:click="goClick('228')">
                    </div>
                    <div class="selectbox_229" v-on:click="goClick('229')">
                    </div>
                    <div class="selectbox_230" v-on:click="goClick('230')">
                    </div>
                    <div class="selectbox_231" v-on:click="goClick('231')">
                    </div>
                    <div class="selectbox_232" v-on:click="goClick('232')">
                    </div>

                    <div class="selectbox_261" v-on:click="goClick('261')">
                    </div>
                    <div class="selectbox_262" v-on:click="goClick('262')">
                    </div>
                    <div class="selectbox_263" v-on:click="goClick('263')">
                    </div>
                    <div class="selectbox_264" v-on:click="goClick('264')">
                    </div>
                    <div class="selectbox_265" v-on:click="goClick('265')">
                    </div>
                    <div class="selectbox_266" v-on:click="goClick('266')">
                    </div>
                    <div class="selectbox_267" v-on:click="goClick('267')">
                    </div>
                    <div class="selectbox_268" v-on:click="goClick('268')">
                    </div>
                    <div class="selectbox_269" v-on:click="goClick('269')">
                    </div>
                    <div class="selectbox_270" v-on:click="goClick('270')">
                    </div>
                    <div class="selectbox_271" v-on:click="goClick('271')">
                    </div>
                    <div class="selectbox_272" v-on:click="goClick('272')">
                    </div>

                    <div class="selectbox_281" v-on:click="goClick('281')">
                    </div>
                    <div class="selectbox_282" v-on:click="goClick('282')">
                    </div>
                    <div class="selectbox_283" v-on:click="goClick('283')">
                    </div>
                    <div class="selectbox_284" v-on:click="goClick('284')">
                    </div>
                    <div class="selectbox_285" v-on:click="goClick('285')">
                    </div>
                    <div class="selectbox_286" v-on:click="goClick('286')">
                    </div>
                    <div class="selectbox_287" v-on:click="goClick('287')">
                    </div>
                    <div class="selectbox_288" v-on:click="goClick('288')">
                    </div>
                    <div class="selectbox_289" v-on:click="goClick('289')">
                    </div>
                    <div class="selectbox_290" v-on:click="goClick('290')">
                    </div>
                    <div class="selectbox_291" v-on:click="goClick('291')">
                    </div>
                    <div class="selectbox_292" v-on:click="goClick('292')">
                    </div>

                    <div class="selectbox_301" v-on:click="goClick('301')">
                    </div>
                    <div class="selectbox_302" v-on:click="goClick('302')">
                    </div>
                    <div class="selectbox_303" v-on:click="goClick('303')">
                    </div>
                    <div class="selectbox_304" v-on:click="goClick('304')">
                    </div>
                    <div class="selectbox_305" v-on:click="goClick('305')">
                    </div>
                    <div class="selectbox_306" v-on:click="goClick('306')">
                    </div>
                    <div class="selectbox_307" v-on:click="goClick('307')">
                    </div>
                    <div class="selectbox_308" v-on:click="goClick('308')">
                    </div>
                    <div class="selectbox_309" v-on:click="goClick('309')">
                    </div>
                    <div class="selectbox_310" v-on:click="goClick('310')">
                    </div>
                    <div class="selectbox_311" v-on:click="goClick('311')">
                    </div>
                    <div class="selectbox_312" v-on:click="goClick('312')">
                    </div>

                    <div class="selectbox_321" v-on:click="goClick('321')">
                    </div>
                    <div class="selectbox_322" v-on:click="goClick('322')">
                    </div>
                    <div class="selectbox_323" v-on:click="goClick('323')">
                    </div>
                    <div class="selectbox_324" v-on:click="goClick('324')">
                    </div>
                    <div class="selectbox_325" v-on:click="goClick('325')">
                    </div>
                    <div class="selectbox_326" v-on:click="goClick('326')">
                    </div>
                    <div class="selectbox_327" v-on:click="goClick('327')">
                    </div>
                    <div class="selectbox_328" v-on:click="goClick('328')">
                    </div>
                    <div class="selectbox_329" v-on:click="goClick('329')">
                    </div>
                    <div class="selectbox_330" v-on:click="goClick('330')">
                    </div>
                    <div class="selectbox_331" v-on:click="goClick('331')">
                    </div>
                    <div class="selectbox_332" v-on:click="goClick('332')">
                    </div>

                    <div class="selectbox_341" v-on:click="goClick('341')">
                    </div>
                    <div class="selectbox_342" v-on:click="goClick('342')">
                    </div>
                    <div class="selectbox_343" v-on:click="goClick('343')">
                    </div>
                    <div class="selectbox_344" v-on:click="goClick('344')">
                    </div>
                    <div class="selectbox_345" v-on:click="goClick('345')">
                    </div>
                    <div class="selectbox_346" v-on:click="goClick('346')">
                    </div>
                    <div class="selectbox_347" v-on:click="goClick('347')">
                    </div>
                    <div class="selectbox_348" v-on:click="goClick('348')">
                    </div>
                    <div class="selectbox_349" v-on:click="goClick('349')">
                    </div>
                    <div class="selectbox_350" v-on:click="goClick('350')">
                    </div>
                    <div class="selectbox_351" v-on:click="goClick('351')">
                    </div>
                    <div class="selectbox_352" v-on:click="goClick('352')">
                    </div>

                    <div class="selectbox_361" v-on:click="goClick('361')">
                    </div>
                    <div class="selectbox_362" v-on:click="goClick('362')">
                    </div>
                    <div class="selectbox_363" v-on:click="goClick('363')">
                    </div>
                    <div class="selectbox_364" v-on:click="goClick('364')">
                    </div>
                    <div class="selectbox_365" v-on:click="goClick('365')">
                    </div>
                    <div class="selectbox_366" v-on:click="goClick('366')">
                    </div>
                    <div class="selectbox_367" v-on:click="goClick('367')">
                    </div>
                    <div class="selectbox_368" v-on:click="goClick('368')">
                    </div>
                    <div class="selectbox_369" v-on:click="goClick('369')">
                    </div>
                    <div class="selectbox_370" v-on:click="goClick('370')">
                    </div>
                    <div class="selectbox_371" v-on:click="goClick('371')">
                    </div>
                    <div class="selectbox_372" v-on:click="goClick('372')">
                    </div>

                    <div class="selectbox_381" v-on:click="goClick('381')">
                    </div>
                    <div class="selectbox_382" v-on:click="goClick('382')">
                    </div>
                    <div class="selectbox_383" v-on:click="goClick('383')">
                    </div>
                    <div class="selectbox_384" v-on:click="goClick('384')">
                    </div>
                    <div class="selectbox_385" v-on:click="goClick('385')">
                    </div>
                    <div class="selectbox_386" v-on:click="goClick('386')">
                    </div>
                    <div class="selectbox_387" v-on:click="goClick('387')">
                    </div>
                    <div class="selectbox_388" v-on:click="goClick('388')">
                    </div>
                    <div class="selectbox_389" v-on:click="goClick('389')">
                    </div>
                    <div class="selectbox_390" v-on:click="goClick('390')">
                    </div>
                    <div class="selectbox_391" v-on:click="goClick('391')">
                    </div>
                    <div class="selectbox_392" v-on:click="goClick('392')">
                    </div>

                    <div class="selectbox_401" v-on:click="goClick('401')">
                    </div>
                    <div class="selectbox_402" v-on:click="goClick('402')">
                    </div>
                    <div class="selectbox_403" v-on:click="goClick('403')">
                    </div>
                    <div class="selectbox_404" v-on:click="goClick('404')">
                    </div>
                    <div class="selectbox_405" v-on:click="goClick('405')">
                    </div>
                    <div class="selectbox_406" v-on:click="goClick('406')">
                    </div>
                    <div class="selectbox_407" v-on:click="goClick('407')">
                    </div>
                    <div class="selectbox_408" v-on:click="goClick('408')">
                    </div>
                    <div class="selectbox_409" v-on:click="goClick('409')">
                    </div>

                    <div class="selectbox_441" v-on:click="goClick('441')">
                    </div
                    <div class="selectbox_442" v-on:click="goClick('442')">
                    </div>
                    <div class="selectbox_443" v-on:click="goClick('443')">
                    </div>
                    <div class="selectbox_444" v-on:click="goClick('444')">
                    </div>
                    <div class="selectbox_445" v-on:click="goClick('445')">
                    </div>
                    <div class="selectbox_446" v-on:click="goClick('446')">
                    </div>
                    <div class="selectbox_447" v-on:click="goClick('447')">
                    </div>
                    <div class="selectbox_448" v-on:click="goClick('448')">
                    </div>
                    <div class="selectbox_449" v-on:click="goClick('449')">
                    </div>

                    <div class="selectbox_481" v-on:click="goClick('481')">
                    </div>
                    <div class="selectbox_482" v-on:click="goClick('482')">
                    </div>
                    <div class="selectbox_483" v-on:click="goClick('483')">
                    </div>
                    <div class="selectbox_484" v-on:click="goClick('484')">
                    </div>
                    <div class="selectbox_485" v-on:click="goClick('485')">
                    </div>
                    <div class="selectbox_486" v-on:click="goClick('486')">
                    </div>
                    <div class="selectbox_487" v-on:click="goClick('487')">
                    </div>
                    <div class="selectbox_488" v-on:click="goClick('488')">
                    </div>
                    <div class="selectbox_489" v-on:click="goClick('489')">
                    </div>

                    <div class="selectbox_501" v-on:click="goClick('501')">
                    </div>
                    <div class="selectbox_502" v-on:click="goClick('502')">
                    </div>
                    <div class="selectbox_503" v-on:click="goClick('503')">
                    </div>
                    -->
                </div>

                <!-- ======== 모달창 ======== -->
                <div class="modal" id="modal_selectbox" ref="modal_selectbox" v-bind:class="{ 'modal-on': isModal }">
                    <div class="modal-content">
                        <h1 ref="msg">이미 사용중인 함입니다.</h1>
                        <button v-on:click="modalClose">확인</button>
                    </div>
                </div>

            </div><!--container끝-->

            <div class="selectbox_bottom">
                <div class="selectbox_ment">
                </div>
                <div class="selectbox_rescan blink" id="selectbox_auto"  v-on:click="goAutoSelect">
                </div>
                <div class="selectbox_done" v-on:click="goDone">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '@/assets/css/input/selectbox.css';
import '@/assets/css/modal.css';

//import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
//import InnerImageZoom from 'vue-inner-image-zoom';

import axios from 'axios';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

export default {
    name: "SelectBox",
    data() {
        return {
            autoselect: "0",
            boxNo:'',
            regiNo:'',
            veriNo:'',
            box_data :{},
            log1_data :{postNo:'1111101',boxNo:'01',menuName:'새등기번호스캔',actionData:'메뉴재선택'},
            log2_data :{postNo:'1111101',boxNo:'01',menuName:'등기투입후종료',actionData:'메뉴재선택'},
            log3_data :{postNo:'1111101',boxNo:'01',menuName:'등기투입',actionData:'등기함선택'},
            boxData:{},
            boxStatus:{},
        };
    },
    components: {
  //      'inner-image-zoom': InnerImageZoom
     },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        goHome(){
            this.$router.push('/');
        },
        goClick(boxNo){
            alert(boxNo + ' 번함이 열립니다.');
            this.boxNo = boxNo;
            this.log3_data.postNo = '1111101';
            this.log3_data.boxNo = boxNo;
            this.log3_data.userId = 'deli001';
            this.log3_data.menuName = '등기투입';
            this.log3_data.actionData = '등기함선택(함열기)';
            // 로그처리
            axios.post("http://115.91.83.140:8910/admin/dispenserlog/create", this.log3_data, {
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

            // 함 열기
            var client=new XMLHttpRequest();
            client.open('POST', "http://115.91.83.140/koreapost_locker_api/locker_api.php", true);
            client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var param = 'boxNo=1'  
            client.send(param);
/*
            axios.post("http://115.91.83.140/koreapost_locker_api/locker_api.php", {params:{boxNo:1}}, {
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
*/
        },
        goAutoSelect(){
            if (this.autoselect == '0') {
                this.autoselect = '1';
                this.log3_data.postNo = '1111101';
                this.log3_data.userId = 'deli001';
                this.log3_data.menuName = '등기투입';
                this.log3_data.actionData = 'Box자동선택';
            } else {
                this.autoselect = '0';
                this.log3_data.postNo = '1111101';
                this.log3_data.userId = 'deli001';
                this.log3_data.menuName = '등기투입';
                this.log3_data.actionData = 'Box직접선택';
            }
            // 로그처리
            axios.post("http://115.91.83.140:8910/admin/dispenserlog/create", this.log3_data, {
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
        },
        goDone(){
            this.log2_data.postNo = '1111101';
            this.log2_data.userId = 'deli001';
            this.log2_data.menuName = '등기투입';
            this.log2_data.actionData = '투입종료';
            // 로그처리
            axios.post("http://115.91.83.140:8910/admin/dispenserlog/create", this.log2_data, {
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

            this.$router.push('/');
        },
        modalClose() {
            this.$refs.modal_selectbox.style.display = 'none'; 
        },
        // 등기투입
        postRegiNo() {
            axios.post("https://postnet.co.kr/savePutNmDistrRegiMail.jsp", this.request_data, {
                header: {
                    "Context-Type": "multipart/form-data",
                },
            })
            .then((res) => { // 성공했을 경우
                console.log("성공", res);
                // statusCd : 등기투입결과 - 1 - S성공,F실패
                
            })
            .catch((res) => { // 실패했을 경우
                console.error("실패 ", res);
            });
        }

    },
    created() {
    },
    mounted() {
        this.autoselect = '0';

        this.log3_data.postNo = '1111101';
        this.log3_data.userId = 'deli001';
        this.log3_data.menuName = '등기투입';
        this.log3_data.actionData = '전체 등기함정보 가져오기';
        // 로그처리
        axios.post("http://115.91.83.140:8910/admin/dispenserlog/create", this.log2_data, {
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

        // 전체등기함 상태값 가져오기
        this.box_data.postNo = '1111101';
        axios.get("http://115.91.83.140:8910/admin/dispenser/status", this.box_data, {
            header: {
                "Context-Type": "multipart/form-data",
            },
        })
        .then((res) => { // 성공했을 경우
            console.log("등기함상태", JSON.stringify(res.data));
            
            this.boxData = JSON.parse(JSON.stringify(res.data.data.items));
            console.log("등기함갯수", this.boxData.length);
            for (var i = 0; i < this.boxData.length; i++) {
                console.log("Box정보", this.boxData[i].boxNo);
                if (this.boxData[i].status == '0') { // 빈함이면
                    this.boxStatus.boxNo = this.boxData[i].boxNo; 
                    this.boxStatus.boxNoNo = this.boxData[i].boxNoNo; 
                    this.boxStatus.status = this.boxData[i].status; 
                    this.boxStatus.boxSize = this.boxData[i].boxSize; 
                    this.boxStatus.regiNo = this.boxData[i].regiNo; 
                    this.boxStatus.verificationNo = this.boxData[i].verificationNo; 
                    this.boxStatus.receiptName = this.boxData[i].receiptName; 
                    this.boxStatus.receiptLicenseNo = this.boxData[i].receiptLicenseNo; 
                    this.boxStatus.receiptPhoneNo = this.boxData[i].receiptPhoneNo; 
                    this.boxStatus.receiptAddr = this.boxData[i].receiptAddr; 
                    this.boxStatus.receiptAddrDetail = this.boxData[i].receiptAddrDetail; 
                    this.boxStatus.receiptPwd = this.boxData[i].receiptPwd; 
                    this.boxStatus.createDate = this.boxData[i].createDate; 
                    this.boxStatus.updateDate = this.boxData[i].updateDate; 
                } else {
                    console.log("");
                }
            }

        })
        .catch((res) => { // 실패했을 경우
            console.log("등기함상태", res.errmsg);
            alert('관리자에게 문의 바랍니다.');
        });
    }

};
</script>

<style>
@keyframes blink-effect {
  50% {
    opacity: 0;
  }
}

#selectbox_auto {
  animation: blink-effect 1s step-end infinite;

  /*
  animation-name: blink-effect;
  animation-duration: 1s;
  animation-iteration-count:infinite;
  animation-timing-function:step-end;
  */
}
</style>