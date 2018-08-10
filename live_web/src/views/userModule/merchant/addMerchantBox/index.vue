<template>
  <div class="modelBox">
    <el-dialog :title="slots" :visible="openMerchantBox" @close='closeDialog'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="品牌名称" :label-width="formLabelWidth" prop="merchantName">
          <el-input v-model="ruleForm.merchantName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌别名" :label-width="formLabelWidth" prop="merchantViceName">
          <el-input v-model="ruleForm.merchantViceName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth" prop="value">
          <el-select placeholder="请选择状态" v-model="ruleForm.value">
            <el-option v-for="(item,index) in options" :key="index" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogOff">取 消</el-button>
        <el-button type="primary" :loading="loading" @click.native.prevent="onConfirm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import addMerchantBox from './addMerchantBox'
export default addMerchantBox
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
