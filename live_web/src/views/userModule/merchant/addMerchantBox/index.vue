<template>
  <div class="modelBox">
    <el-dialog :title="slots" :visible="openMerchantBox" @close='closeDialog'>
      <el-form :model="form">
        <el-form-item label="品牌名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌别名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select placeholder="请选择状态" v-model="value">
            <el-option v-for="(item,index) in options" :key="index" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogOff">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import addMerchantBox from './addMerchantBox'
export default addMerchantBox
</script>

<style rel="stylesheet/scss" lang="scss">
.el-dialog {
  width: 35%;
}
.el-input {
  width: 90%;
}
@media (max-width: 767px) {
  .el-dialog {
    width: 90%;
  }
  .el-input {
    width: 100%;
  }
}
</style>
