<template>
    <div>
        <div class="wrap">

            <!-- ======== 카테고리 헤더 ======== -->
            <div class="header">
                <div class="main_logo" v-on:click="goHome"></div>
                <div class="header_title">
                    <div class="header_title_down">보관함 현황</div>    
                </div>
                <div class="back"  v-on:click="goBack"></div>    
            </div>

            <!-- ======== 내용 ======== -->
            <div class="status_container">
                <div class="status_area">
                <!--
                <inner-image-zoom src="../../../assets/images/dispenser2.png" zoomSrc="../../../assets/images/dispenser2.png" />
                -->
                    <div class="selectbox_101">101
                    </div>
                    <div class="selectbox_102">102
                    </div>
                    <div class="selectbox_103">103
                    </div>
                    <div class="selectbox_104">104
                    </div>
                    <div class="selectbox_105">105
                    </div>
                    <div class="selectbox_106">106
                    </div>
                    <div class="selectbox_107">107
                    </div>
                    <div class="selectbox_108">108
                    </div>
                    <div class="selectbox_109">109
                    </div>

                    <div class="selectbox_201">201
                    </div>
                    <div class="selectbox_202">202
                    </div>
                    <div class="selectbox_203">203
                    </div>
                    <div class="selectbox_204">204
                    </div>
                    <div class="selectbox_205">205
                    </div>
                    <div class="selectbox_206">206
                    </div>
                    <div class="selectbox_207">207
                    </div>
                    <div class="selectbox_208">208
                    </div>
                    <div class="selectbox_209">209
                    </div>
                    <div class="selectbox_210">210
                    </div>
                    <div class="selectbox_211">211
                    </div>
                    <div class="selectbox_212">212
                    </div>

                    <div class="selectbox_221">221
                    </div>
                    <div class="selectbox_222">222
                    </div>
                    <div class="selectbox_223">223
                    </div>
                    <div class="selectbox_224">224
                    </div>
                    <div class="selectbox_225">225
                    </div>
                    <div class="selectbox_226">226
                    </div>
                    <div class="selectbox_227">227
                    </div>
                    <div class="selectbox_228">228
                    </div>
                    <div class="selectbox_229">229
                    </div>
                    <div class="selectbox_230">230
                    </div>
                    <div class="selectbox_231">231
                    </div>
                    <div class="selectbox_232">232
                    </div>

                    <div class="selectbox_261">261
                    </div>
                    <div class="selectbox_262">262
                    </div>
                    <div class="selectbox_263">263
                    </div>
                    <div class="selectbox_264">264
                    </div>
                    <div class="selectbox_265">265
                    </div>
                    <div class="selectbox_266">266
                    </div>
                    <div class="selectbox_267">267
                    </div>
                    <div class="selectbox_268">268
                    </div>
                    <div class="selectbox_269">269
                    </div>
                    <div class="selectbox_270">270
                    </div>
                    <div class="selectbox_271">271
                    </div>
                    <div class="selectbox_272">272
                    </div>

                    <div class="selectbox_281">281
                    </div>
                    <div class="selectbox_282">282
                    </div>
                    <div class="selectbox_283">283
                    </div>
                    <div class="selectbox_284">284
                    </div>
                    <div class="selectbox_285">285
                    </div>
                    <div class="selectbox_286">286
                    </div>
                    <div class="selectbox_287">287
                    </div>
                    <div class="selectbox_288">288
                    </div>
                    <div class="selectbox_289">289
                    </div>
                    <div class="selectbox_290">290
                    </div>
                    <div class="selectbox_291">291
                    </div>
                    <div class="selectbox_292">292
                    </div>



                    <div class="selectbox_301">301
                    </div>
                    <div class="selectbox_302">302
                    </div>
                    <div class="selectbox_303">303
                    </div>
                    <div class="selectbox_304">304
                    </div>
                    <div class="selectbox_305">305
                    </div>
                    <div class="selectbox_306">306
                    </div>
                    <div class="selectbox_307">307
                    </div>
                    <div class="selectbox_308">308
                    </div>
                    <div class="selectbox_309">309
                    </div>
                    <div class="selectbox_310">310
                    </div>
                    <div class="selectbox_311">311
                    </div>
                    <div class="selectbox_312">312
                    </div>

                    <div class="selectbox_321">321
                    </div>
                    <div class="selectbox_322">322
                    </div>
                    <div class="selectbox_323">323
                    </div>
                    <div class="selectbox_324">324
                    </div>
                    <div class="selectbox_325">325
                    </div>
                    <div class="selectbox_326">326
                    </div>
                    <div class="selectbox_327">327
                    </div>
                    <div class="selectbox_328">328
                    </div>
                    <div class="selectbox_329">329
                    </div>
                    <div class="selectbox_330">330
                    </div>
                    <div class="selectbox_331">331
                    </div>
                    <div class="selectbox_332">332
                    </div>

                    <div class="selectbox_341">341
                    </div>
                    <div class="selectbox_342">342
                    </div>
                    <div class="selectbox_343">343
                    </div>
                    <div class="selectbox_344">344
                    </div>
                    <div class="selectbox_345">345
                    </div>
                    <div class="selectbox_346">346
                    </div>
                    <div class="selectbox_347">347
                    </div>
                    <div class="selectbox_348">348
                    </div>
                    <div class="selectbox_349">349
                    </div>
                    <div class="selectbox_350">350
                    </div>
                    <div class="selectbox_351">351
                    </div>
                    <div class="selectbox_352">352
                    </div>

                    <div class="selectbox_361">361
                    </div>
                    <div class="selectbox_362">362
                    </div>
                    <div class="selectbox_363">363
                    </div>
                    <div class="selectbox_364">364
                    </div>
                    <div class="selectbox_365">365
                    </div>
                    <div class="selectbox_366">366
                    </div>
                    <div class="selectbox_367">367
                    </div>
                    <div class="selectbox_368">368
                    </div>
                    <div class="selectbox_369">369
                    </div>
                    <div class="selectbox_370">370
                    </div>
                    <div class="selectbox_371">371
                    </div>
                    <div class="selectbox_372">372
                    </div>

                    <div class="selectbox_381">381
                    </div>
                    <div class="selectbox_382">382
                    </div>
                    <div class="selectbox_383">383
                    </div>
                    <div class="selectbox_384">384
                    </div>
                    <div class="selectbox_385">385
                    </div>
                    <div class="selectbox_386">386
                    </div>
                    <div class="selectbox_387">387
                    </div>
                    <div class="selectbox_388">388
                    </div>
                    <div class="selectbox_389">389
                    </div>
                    <div class="selectbox_390">390
                    </div>
                    <div class="selectbox_391">391
                    </div>
                    <div class="selectbox_392">392
                    </div>

                    <div class="selectbox_401">401
                    </div>
                    <div class="selectbox_402">402
                    </div>
                    <div class="selectbox_403">403
                    </div>
                    <div class="selectbox_404">404
                    </div>
                    <div class="selectbox_405">405
                    </div>
                    <div class="selectbox_406">406
                    </div>
                    <div class="selectbox_407">407
                    </div>
                    <div class="selectbox_408">408
                    </div>
                    <div class="selectbox_409">409
                    </div>

                    <div class="selectbox_441">441
                    </div>
                    <div class="selectbox_442">442
                    </div>
                    <div class="selectbox_443">443
                    </div>
                    <div class="selectbox_444">444
                    </div>
                    <div class="selectbox_445">445
                    </div>
                    <div class="selectbox_446">446
                    </div>
                    <div class="selectbox_447">447
                    </div>
                    <div class="selectbox_448">448
                    </div>
                    <div class="selectbox_449">449
                    </div>

                    <div class="selectbox_481">481
                    </div>
                    <div class="selectbox_482">482
                    </div>
                    <div class="selectbox_483">483
                    </div>
                    <div class="selectbox_484">484
                    </div>
                    <div class="selectbox_485">485
                    </div>
                    <div class="selectbox_486">486
                    </div>
                    <div class="selectbox_487">487
                    </div>
                    <div class="selectbox_488">488
                    </div>
                    <div class="selectbox_489">489
                    </div>

                    <div class="selectbox_501">501
                    </div>
                    <div class="selectbox_502">502
                    </div>
                    <div class="selectbox_503">503
                    </div>
                </div>
            </div><!--container끝-->

            <div class="status_ment">
            </div>
        </div><!--wrap 끝-->

    </div>
</template>

<script>
import '@/assets/css/status/status.css';
//import axios from 'axios';

//import dayjs from "dayjs"
//const nowDay_json = "@/assets/json/" + dayjs().format('YYYY-MM-DD') + ".json";
//import json_day_log from nowDay_json;

//import json_list from "@/assets/json/receipt_list.json";
//import json_log from "@/assets/json/log.json";

export default {
    name: "dispenserStatus",
    data() {
        return {
            data : '',
        };
    },
    computed: {
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
    }

};
</script>

