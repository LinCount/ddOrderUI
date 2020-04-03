<template>
<div>
<nav-bar class="navbar"><div slot="right">设置</div></nav-bar>

<nav-profile/>
<body-profile/>

</div>
</template>

<script>

import NavBar from 'components/content/navbar/NavBar'

import NavProfile from './childprofile/NavProfile'
import BodyProfile from './childprofile/BodyProfile'

export default {
    name:"Profile",
    components:{
        NavBar,
        NavProfile,
        BodyProfile,

    },
}

</script>

<style scoped>
.navbar{
    position: fixed;
    left: 0;
    right: 20px;
    top: 0;
    font-size: 15px;

}
</style>