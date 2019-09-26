import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Pdf from '@/components/Pdf'
import PdfDist from '@/components/PdfDist'
import IframePdf from '@/components/IframePdf'
import Qcode from '@/components/Qcode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/pdf',
      name: 'Pdf',
      component: Pdf
    },{
      path: '/pdfDist',
      name: 'PdfDist',
      component: PdfDist
    },{
      path: '/iframePdf',
      name: 'IframePdf',
      component: IframePdf
    },{
      path: '/qcode',
      name: 'Qcode',
      component: Qcode
    }
  ]
})
