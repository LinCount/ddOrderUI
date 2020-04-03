<template>
    <div class="bodynav">		
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
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bodynav{
    margin-top:50px ;
}

.aui-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 15px;
    position: relative;
}

.aui-flex-box {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: #333;
}
.aui-flex-one {
    padding: 0.5rem 1rem 0 0.5rem;
}

.aui-flex-one .aui-flex-box {
    background: #e8f0ff;
    text-align: center;
    padding: 1rem 0;
    border-radius: 4px;
    margin-left: 0.5rem;
}

.aui-flex-one .aui-flex-box h3 {
    font-size: 0.88rem;
    font-weight: 500;
    position: relative;
}

.aui-flex-one .aui-flex-box span {
    font-size: 0.7rem;
    color: #9ea0a5;
}

.aui-flex-one .aui-flex-box h3 i {
    background: #ff6858;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    right: 1.8rem;
    top: 0.2rem;
}
</style>