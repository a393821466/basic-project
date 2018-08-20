<template>
  <div class="app-userStatus">
    <el-dialog title="用户状态限制" :visible="openUserBox" @close='closeDialog'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="冻结状态" :label-width="formLabelWidth" prop="f_status">
          <el-select class="statusInput" v-model="ruleForm.f_status" placeholder="选择状态">
            <el-option v-for="(item,index) in f_status" :key="index" :value="item.value" :label="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="冻结时间" :label-width="formLabelWidth" prop="f_time" v-if="ruleForm.f_status==0">
          <el-date-picker v-model="ruleForm.f_time" type="datetime" placeholder="选择结束时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="禁言状态" :label-width="formLabelWidth" prop="a_status">
          <el-select class="statusInput" v-model="ruleForm.a_status" placeholder="选择状态">
            <el-option v-for="(item,index) in a_status" :key="index" :value="item.value" :label="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="禁言时间" :label-width="formLabelWidth" prop="a_time" v-if="ruleForm.a_status==0">
          <el-date-picker v-model="ruleForm.a_time" type="datetime" placeholder="选择结束时间">
          </el-date-picker>
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
import userStatus from './userStatus'
export default userStatus
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
</style>
