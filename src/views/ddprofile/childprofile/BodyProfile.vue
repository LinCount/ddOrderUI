<template>
    <div class="bodynav">	
         <div class="bodyhead">
             <div class="left"><hr style="width:50px;margin-top:20px"></div>
             <div class="center"><h3>历史点餐</h3></div>
             <div class="right"><a>更多>></a></div>
         </div>
         <div>
        <div class="aui-flex aui-flex-one">
			<div class="aui-flex-box" style="background:#ffe4e4">
				<h3>商家 <i></i></h3>
				<span>点餐信息</span>
			</div>
			<div class="aui-flex-box" style="background:#fff4d3">
				<h3>商家  <i></i></h3>
				<span>点餐信息</span>
			</div>
			<div class="aui-flex-box" style="background:#c7f8e0">
				<h3>商家 </h3>
				<span>点餐信息</span>
			</div>
		</div>
		<div class="aui-flex aui-flex-one">
			<div class="aui-flex-box">
				<h3>商家</h3>
				<span>点餐信息</span>
			</div>
			<div class="aui-flex-box">
				<h3>商家</h3>
				<span>点餐信息</span>
			</div>
			<div class="aui-flex-box">
				<h3>商家</h3>
				<span>点餐信息</span>
			</div>
		</div>
        </div>

    
</div>
</template>
<script>
export default {
    name:"BodyProfile",
    
}
</script>
<style scoped>
.bodynav{
    margin-top:20px ;
}
.bodyhead{
    display: flex;
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
    margin-right: 20px;
    
}
.left .right {
    width: 200px;
    font-size: 5px;
}
.center{
    flex: 1;
    margin: 0 auto;
    text-align: center;
    }

</style>