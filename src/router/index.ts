import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { ElNotification } from 'element-plus'
const loginView = () => import(/* webpackChunkName:"loginView" */ '@/views/loginView/loginView.vue')
const adminView = () => import(/* webpackChunkName:"loginView" */ '@/views/adminView/adminView.vue')
const indexView = () => import(/* webpackChunkName:"loginView" */ '@/views/indexView/indexView.vue')
const clientView = () => import(/* webpackChunkName:"loginView" */ '@/views/clientView/clientView.vue')
const managerView = () => import(/* webpackChunkName:"loginView" */ '@/views/managerView/managerView.vue')
const supAdminLog = () => import(/* webpackChunkName:"loginView" */ '@/views/logView/supAdminLog.vue')
const adminLog = () => import(/* webpackChunkName:"loginView" */ '@/views/logView/adminLog.vue')
const backNotice = () => import(/* webpackChunkName:"loginView" */ '@/views/noticeView/backNotice.vue')
const receNotice = () => import(/* webpackChunkName:"loginView" */ '@/views/noticeView/receNotice.vue')
const backNoticeInfo = () => import(/* webpackChunkName:"loginView" */ '@/views/noticeView/backNoticeInfo.vue')
const receNoticeInfo = () => import(/* webpackChunkName:"loginView" */ '@/views/noticeView/receNoticeInfo.vue')
const articleCate = () => import(/* webpackChunkName:"loginView" */ '@/views/articleView/articleCate.vue')
const articleList = () => import(/* webpackChunkName:"loginView" */ '@/views/articleView/articleList.vue')
const articleReport = () => import(/* webpackChunkName:"loginView" */ '@/views/articleView/articleReport.vue')
const commentList = () => import(/* webpackChunkName:"loginView" */ '@/views/commentView/commentList.vue')
const v_commentList = () => import(/* webpackChunkName:"loginView" */ '@/views/commentView/v_commentList.vue')
const commentReport = () => import(/* webpackChunkName:"loginView" */ '@/views/commentView/commentReport.vue')
const videoView = () => import(/* webpackChunkName:"loginView" */ '@/views/videoView/videoView.vue')
const videoReport = () => import(/* webpackChunkName:"loginView" */ '@/views/videoView/videoReport.vue')
const userInfoView = () => import(/* webpackChunkName:"loginView" */ '@/views/userInfoView/userInfoView.vue')
const articles = () => import(/* webpackChunkName:"loginView" */ '@/views/userInfoView/articleList.vue')
const videos = () => import(/* webpackChunkName:"loginView" */ '@/views/userInfoView/videoList.vue')
const users = () => import(/* webpackChunkName:"loginView" */ '@/views/userInfoView/userList.vue')
const noticeList = () => import(/* webpackChunkName:"loginView" */ '@/views/noticeList/noticeList.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'loginView',
    meta: {
      login: false
    },
    component: loginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminView,
    children: [
      {
        path: '/admin',
        redirect: '/index'
      },
      {
        path: '/index',
        name: 'index',
        meta: {
          index: '0-0'
        },
        component: indexView
      },
      {
        path: '/client',
        name: 'client',
        meta: {
          index: '1-1'
        },
        component: clientView
      },
      {
        path: '/administrator',
        name: 'administrator',
        meta: {
          index: '1-2',
          root: true
        },
        component: managerView
      },
      {
        path: '/articleCate',
        name: 'articleCate',
        meta: {
          index: '2-1'
        },
        component: articleCate
      },
      {
        path: '/articleList',
        name: 'articleList',
        meta: {
          index: '2-2'
        },
        component: articleList
      },
      {
        path: '/articleReport',
        name: 'articleReport',
        meta: {
          index: '2-3'
        },
        component: articleReport
      },
      {
        path: '/supAdminLog',
        name: 'supAdminLog',
        meta: {
          index: '3-1',
          root: true
        },
        component: supAdminLog
      },
      {
        path: '/adminLog',
        name: 'adminLog',
        meta: {
          index: '3-2'
        },
        component: adminLog
      },
      {
        path: '/backNotice',
        name: 'backNotice',
        meta: {
          index: '4-1',
          root: true
        },
        component: backNotice
      },
      {
        path: '/addBackNotice',
        name: 'addBackNotice',
        meta: {
          index: '4-1'
        },
        component: backNoticeInfo
      },
      {
        path: '/updateBackNotice',
        name: 'updateBackNotice',
        meta: {
          index: '4-1'
        },
        component: backNoticeInfo
      },
      {
        path: '/receNotice',
        name: 'receNotice',
        meta: {
          index: '4-2'
        },
        component: receNotice
      },
      {
        path: '/addReceNotice',
        name: 'addReceNotice',
        meta: {
          index: '4-2'
        },
        component: receNoticeInfo
      },
      {
        path: '/updateReceNotice',
        name: 'updateReceNotice',
        meta: {
          index: '4-2'
        },
        component: receNoticeInfo
      },
      {
        path: '/commentList',
        name: 'commentList',
        meta: {
          index: '5-1'
        },
        component: commentList
      },
      {
        path: '/v_commentList',
        name: 'v_commentList',
        meta: {
          index: '5-2'
        },
        component: v_commentList
      },
      {
        path: '/commentReport',
        name: 'commentReport',
        meta: {
          index: '5-3'
        },
        component: commentReport
      },
      {
        path: '/videoList',
        name: 'videoList',
        meta: {
          index: '6-1'
        },
        component: videoView
      },
      {
        path: '/videoReport',
        name: 'videoReport',
        meta: {
          index: '6-2'
        },
        component: videoReport
      },
      {
        path: '/noticeList/:type',
        name: 'noticeList',
        component: noticeList
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        children: [
          {
            path: '/userInfo/articles/:id',
            name: 'articles',
            component: articles
          },
          {
            path: '/userInfo/articleCollect/:id',
            name: 'articleCollect',
            component: articles
          },
          {
            path: '/userInfo/articleBrowse/:id',
            name: 'articleBrowse',
            component: articles
          },
          {
            path: '/userInfo/articlePraise/:id',
            name: 'articlePraise',
            component: articles
          },
          {
            path: '/userInfo/videos/:id',
            name: 'videos',
            component: videos
          },
          {
            path: '/userInfo/videoCollect/:id',
            name: 'videoCollect',
            component: videos
          },
          {
            path: '/userInfo/videoPraise/:id',
            name: 'videoPraise',
            component: videos
          },
          {
            path: '/userInfo/userFollow/:id',
            name: 'userFollow',
            component: users
          },
          {
            path: '/userInfo/userFans/:id',
            name: 'userFans',
            component: users
          },
          {
            path: '/userInfo',
            redirect: '/userInfo/articles/:id',
          }
        ],
        component: userInfoView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.meta.login == false) {
    // ???????????????????????????????????????
    next();
  } else {
    // ?????? token
    const token = sessionStorage.getItem('token');
    // token ?????????
    if (token === null || token === '') {
      ElNotification({
        title: '??????',
        message: '??????????????????????????????',
        type: 'error',
      })
      next('/');
    } else {
      if(to.meta.root && sessionStorage.getItem('type') == '2') {
        ElNotification({
          title: '??????',
          message: '??????????????????',
          type: 'error',
        })
      } else {
        next();
      }
    }
  }
});

export default router
