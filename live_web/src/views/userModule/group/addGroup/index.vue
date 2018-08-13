<template>
  <div class="modelBox">
    <el-dialog title="添加用户组" :visible="openGroupBox" @close='closeDialog'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户组名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="ruleForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌别名" :label-width="formLabelWidth" prop="value">
          <el-select class="statusInput" v-model="ruleForm.value" placeholder="选择品牌别名">
            <el-option v-for="(item,index) in groupMerchant" :key="index" :value="item.code" :label="item.merchant" v-if="item.code!=='all'">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='图标' :label-width="formLabelWidth">
          <img-inputer @onChange="handleFile" accept="image/*" class="groupIcon" v-model="ruleForm.file" theme="light" size="large"></img-inputer>
        </el-form-item>
        <el-form-item label="介绍" :label-width="formLabelWidth" prop="introduce">
          <el-input v-model="ruleForm.introduce" auto-complete="off" type="textarea"></el-input>
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
import addGroup from './addGroup'
export default addGroup
</script>

<style rel="stylesheet/scss" lang="scss">
.groupIcon{
  width:80px;
  height:60px;
  overflow:hidden;
  p{
    top:45%
  }
}
</style>