<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {initDynamicRoutes} from '@/router'
export default {
  name: 'App',
  created() {
    initDynamicRoutes()
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html,body{
  width:100%;
  height:100%;
}
ul{list-style:none}
a{text-decoration: none;} 
img{vertical-align:top;border:none}
 
.clearf:after,
.clearf:before{
    content:"";
    display:block;
    clear:both;
}
</style>
