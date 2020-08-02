import Vue from 'vue'
import router from '@/router';

Vue.directive('permission',{
    inserted(el,binding){
        const action = binding.value.action
        const effect = binding.value.effect
        if(router.currentRoute.meta.indexOf(action) ===-1){//如果action不包含在router数组里面的  且effect=== ‘disabled’就禁止使用
                                                           //如果action    effect 都是为空的话   那么久隐藏这个元素
           if(effect === 'disabled'){
            el.disabled = true;
            el.classList.add('is-disabled');
           }else {
            el.parentNode.removeChild(el);
         }
        }
        // console.log(router)
        // console.log(el,'el')
        // console.log(binding,'binding')
    }
})