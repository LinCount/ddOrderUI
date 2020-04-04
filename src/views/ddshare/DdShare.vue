    <template>
        <div>
            <nav-bar > <div slot="left" class="navhead">分享</div></nav-bar>   
            <shareBody/>
        </div>
    </template>
    <script>
    import NavBar from 'components/content/navbar/NavBar'
    import ShareBody from './childshare/ShareBody'
    export default {
        name:"DdShare",
        components:{
            NavBar,
            ShareBody
            
        }
    }
    </script>
    <style scoped>
    .navhead{
         margin-left: 10px;
         font-weight:400;
         color: black;

    }
    </style>