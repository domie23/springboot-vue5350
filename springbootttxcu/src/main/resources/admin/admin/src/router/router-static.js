import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import tushuguangoutong from '@/views/modules/tushuguangoutong/list'
    import lunwenxinxi from '@/views/modules/lunwenxinxi/list'
    import caiwuchu from '@/views/modules/caiwuchu/list'
    import lixiaoshenqing from '@/views/modules/lixiaoshenqing/list'
    import qianshuxinxi from '@/views/modules/qianshuxinxi/list'
    import biyezhengxinxi from '@/views/modules/biyezhengxinxi/list'
    import suguangoutong from '@/views/modules/suguangoutong/list'
    import biyesheng from '@/views/modules/biyesheng/list'
    import tushuguan from '@/views/modules/tushuguan/list'
    import menu from '@/views/modules/menu/list'
    import zhuanyefenlei from '@/views/modules/zhuanyefenlei/list'
    import xuefenxinxi from '@/views/modules/xuefenxinxi/list'
    import caiwuqingsuan from '@/views/modules/caiwuqingsuan/list'
    import fudaoyuangoutong from '@/views/modules/fudaoyuangoutong/list'
    import zhidaolaoshi from '@/views/modules/zhidaolaoshi/list'
    import sushexinxi from '@/views/modules/sushexinxi/list'
    import susheguanli from '@/views/modules/susheguanli/list'
    import fudaoyuan from '@/views/modules/fudaoyuan/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import jiaowuchu from '@/views/modules/jiaowuchu/list'
    import caiwugoutong from '@/views/modules/caiwugoutong/list'
    import jiaowugoutong from '@/views/modules/jiaowugoutong/list'
    import jiaoshigoutong from '@/views/modules/jiaoshigoutong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/tushuguangoutong',
        name: '图书馆沟通',
        component: tushuguangoutong
      }
      ,{
	path: '/lunwenxinxi',
        name: '论文信息',
        component: lunwenxinxi
      }
      ,{
	path: '/caiwuchu',
        name: '财务处',
        component: caiwuchu
      }
      ,{
	path: '/lixiaoshenqing',
        name: '离校申请',
        component: lixiaoshenqing
      }
      ,{
	path: '/qianshuxinxi',
        name: '欠书信息',
        component: qianshuxinxi
      }
      ,{
	path: '/biyezhengxinxi',
        name: '毕业证信息',
        component: biyezhengxinxi
      }
      ,{
	path: '/suguangoutong',
        name: '宿管沟通',
        component: suguangoutong
      }
      ,{
	path: '/biyesheng',
        name: '毕业生',
        component: biyesheng
      }
      ,{
	path: '/tushuguan',
        name: '图书馆',
        component: tushuguan
      }
      ,{
	path: '/menu',
        name: '菜单列表',
        component: menu
      }
      ,{
	path: '/zhuanyefenlei',
        name: '专业分类',
        component: zhuanyefenlei
      }
      ,{
	path: '/xuefenxinxi',
        name: '学分信息',
        component: xuefenxinxi
      }
      ,{
	path: '/caiwuqingsuan',
        name: '财务清算',
        component: caiwuqingsuan
      }
      ,{
	path: '/fudaoyuangoutong',
        name: '辅导员沟通',
        component: fudaoyuangoutong
      }
      ,{
	path: '/zhidaolaoshi',
        name: '指导老师',
        component: zhidaolaoshi
      }
      ,{
	path: '/sushexinxi',
        name: '宿舍信息',
        component: sushexinxi
      }
      ,{
	path: '/susheguanli',
        name: '宿舍管理',
        component: susheguanli
      }
      ,{
	path: '/fudaoyuan',
        name: '辅导员',
        component: fudaoyuan
      }
      ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
      ,{
	path: '/jiaowuchu',
        name: '教务处',
        component: jiaowuchu
      }
      ,{
	path: '/caiwugoutong',
        name: '财务沟通',
        component: caiwugoutong
      }
      ,{
	path: '/jiaowugoutong',
        name: '教务沟通',
        component: jiaowugoutong
      }
      ,{
	path: '/jiaoshigoutong',
        name: '教师沟通',
        component: jiaoshigoutong
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
