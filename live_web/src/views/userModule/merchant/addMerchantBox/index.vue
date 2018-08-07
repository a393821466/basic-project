<template>
  <div class="modelBox">
    <el-dialog title="添加品牌" :visible.sync="openMerchantBox" center :show-close='close'>
      <el-form :model="form">
        <el-form-item label="品牌名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
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
<style>
</style>
