<template>
  <div>
    <nav-back :theme="theme" />
    <form class="form-one">
      <div class="one common">
        <span>姓名</span>
        <input type="text" />
      </div>
      <div class="two common">
        <span>年级专业</span>
        <input type="text" />
      </div>
      <div class="tree common">
        <span>手机号</span>
        <input type="text common" />
      </div>
      <div class="four common">
        <span>学号</span>
        <input type="text common" />
      </div>
      <div class="five common">
        <span>身份证号</span>
        <input type="text" />
      </div>
      <div class="file">
        <el-upload class="upload-demo" multiple>
          <el-button size="small" type="info">点击拍照上传学生证</el-button>
        </el-upload>

        <el-upload class="upload-demo" multiple>
          <el-button size="small" type="info">点击拍照上传身份证</el-button>
        </el-upload>
      </div>
      <div  class="submit-one">
      <el-button type="primary">提交审核</el-button>
      </div>
      <div class="show-one">*业余学生配送：每次接单需要缴纳20元押金，可随取随用。上传学生证则不需要缴纳押金就可以接单。无需上传身份证
      </div>
      <div class="show-two">*专业学生配送：需上传身份证，未上传身份证的审核视为业余配送员申请。专业配送员有更高的配送提成，并且优先优先接单
      </div>
    </form>
  </div>
</template>
<script>
import NavBack from "components/content/navback/NavBack";

export default {
  name: "Apply",
  components: {
    NavBack
  },
  data() {
    return {
      theme: { title: "申请成为配送员", backrouter: "/share" }
    };
  }
};
</script>
<style scoped>
.form-one {
  position: relative;
  margin-bottom: 15px;
  margin-top: 10px;
}
.common {
  position: relative;
  margin-top: 12px;
  display: flex;
  line-height: 30px;
}
.common input {
  flex: 1;
  text-align: left;
  margin-right: 20px;
  border: 1px solid rgba(210, 210, 210, .8);
}


.common span {
  width: 100px;
  text-align: center;
  font-weight: 700;
}

.file {
    position: relative;
    display: flex;
    margin-top: 30px;
    
}
.file .upload-demo{
    flex: 1;
    text-align: center;

}
.submit-one{
    height: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    
}
.submit-one .el-button{
    width: 50%;
}

.show-one,.show-two{
    position: relative;
    overflow: hidden;
    margin: 20px 20px 0px 10px;
    font-family: '楷体';
}
.show-one::first-letter,.show-two::first-letter{
  color:red;
}
.show-one{
    margin-bottom: 30px;
}
.show-one
input,
input:focus {
  padding: 0;

  outline: 0;
}
</style>
