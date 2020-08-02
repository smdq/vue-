import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Welcome from '@/components/welcome'
import Home from '@/components/Home'
import Users from '@/components/Users'
import Roles from '@/components/Roles'
import GoodsList from '@/components/GoodsList'
import GoodsCate from '@/components/GoodsCate'
import NoFound from '@/components/NoFound'
import store from '@/store';
Vue.use(Router)

const userRule = {path:'/users',component: Users }
const rolesRule = {path:'/roles',component: Roles }
const goodRule = {path:'/goods',component: GoodsList }
const categoryRule = {path:'/categories',component: GoodsCate }

const ruleMapping = {
  'users': userRule,
  'roles': rolesRule,
  'goods': goodRule,
  'categories': categoryRule
}

var router = new Router({
  mode: 'history',
  routes: [
    {
     path: '/',
     component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
     path:'/home',
     component: Home,
     redirect:'/welcome', //这里是在进到这个模块   在没有点子页面 首先看到的页面的效果
     children: [
      { path: '/welcome', component: Welcome },
      // { path: '/users', component: Users },
      // { path: '/roles', component: Roles },
      // { path: '/goods', component: GoodsList },
      // { path: '/categories', component: GoodsCate }
    ]
    },
   {
     path: '*',
     component: NoFound
   }
  ]
})

router.beforeEach((to,from,next) =>{
  if(to.path === '/login'){
    next()
  }else{
    const token = sessionStorage.getItem('token')

    if(!token){
      next('/login')
    }else{
      next()
    }
  }

})

export function initDynamicRoutes(){
  const currentRoutes = router.options.routes
  const rightList = store.state.rightList //通过vuex 里面获取从接口里面得到的数据
  rightList.forEach( item =>{  //根据不同角色返回的权限集合匹配所有的权限  取交集  放到children里面 渲染出来
    item.children.forEach(item => {
      const temp = ruleMapping[item.path]
       temp.meta = item.rights;
      currentRoutes[2].children.push(temp)
      console.log(temp)
    })
    router.matcher = new Router().matcher;  //要清空原来的路由
    router.addRoutes(currentRoutes);
  })
 
}

export default router

