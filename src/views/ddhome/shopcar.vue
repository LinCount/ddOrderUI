<template>
  <div class="shopcar">
    <el-card class="box-card" style="height:100%;"  >
        <div slot="header" class="clearfix">
            <span>已选商品</span>
            <el-button style="float: right; padding: 3px 0" type="text"   >
                <i class="el-icon-delete"  style="color:#d91a04;"></i>
                <span style="color:#d91a04;">清空</span>
            </el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
    name:'shopcar',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.shopcar {
    height:40px;
    width: 40px;
}
.el-card__header {
    padding: 10px;
}
</style>