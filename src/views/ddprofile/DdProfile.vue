<template>
<div>
<nav-bar><div slot="right" class="navbar">设置</div></nav-bar>

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
   margin-right:20px;

}
</style>