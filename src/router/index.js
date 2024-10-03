import { createRouter, createWebHistory } from 'vue-router'
import MainSilde from '../views/main/MainSilde.vue'

import ReceiptMenu from '@/views/receipt/ReceiptMenu.vue'
import Sms from '@/views/receipt/Sms.vue'
import ReceiptSign from '@/views/receipt/ReceiptSign.vue'
import ReceiptBoxOpen from '@/views/receipt/BoxOpen.vue'
import ReceiptBoxClose from '@/views/receipt/BoxClose.vue'
import SelectIdCard from '@/views/receipt/SelectIdCard.vue'
import JuminFront from '@/views/receipt/JuminFront.vue'
import JuminBack from '@/views/receipt/JuminBack.vue'
import DrivingCard from '@/views/receipt/DrivingCard.vue'
import ConfirmJumin from '@/views/receipt/ConfirmJumin.vue'
import ConfirmDrivingCard from '@/views/receipt/ConfirmDrivingCard.vue'

import LicenseNo from '@/views/receipt/LicenseNo.vue'


import CheckManager from '@/views/input/CheckManager.vue'
import RegiNoScan from '@/views/input/RegiNoScan.vue'
import SelectBox from '@/views/input/SelectBox.vue'

import Status from '@/views/status/Status.vue'
import LoginPage from '@/views/LoginPage.vue'


const routes = [

  {
    path: '/',
    name: '/',
    component:MainSilde
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/main',
    name: '/main',
    component:MainSilde
  },
  {
    path : '/receiptmenu',
    name : '/receiptmenu',
    component : ReceiptMenu
  },
  {
    path : '/sms',
    name : '/sms',
    component : Sms
  },
  {
    path : '/receiptsign',
    name : '/receiptsign',
    component : ReceiptSign
  },
  {
    path : '/receiptboxopen',
    name : '/receiptboxopen',
    component : ReceiptBoxOpen
  },
  {
    path : '/receiptboxclose',
    name : '/receiptboxclose',
    component : ReceiptBoxClose
  },
  {
    path : '/selectidcard',
    name : '/selectidcard',
    component : SelectIdCard
  },
  {
    path : '/juminfront',
    name : '/juminfront',
    component : JuminFront
  },
  {
    path : '/juminback',
    name : '/juminback',
    component : JuminBack
  },
  {
    path : '/drivingcard',
    name : '/drivingcard',
    component : DrivingCard
  },
  {
    path : '/confirmjumin',
    name : '/confirmjumin',
    component : ConfirmJumin
  },
  {
    path : '/confirmdrivingcard',
    name : '/confirmdrivingcard',
    component : ConfirmDrivingCard
  },
  {
    path : '/licenseno',
    name : '/licenseno',
    component : LicenseNo
  },
  {
    path : '/checkmanager',
    name : '/checkmanager',
    component : CheckManager
  },
  {
    path : '/reginoscan',
    name : '/reginoscan',
    component : RegiNoScan
  },
  {
    path : '/selectbox',
    name : '/selectbox',
    component : SelectBox
  },
  {
    path : '/status',
    name : '/status',
    component : Status
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
