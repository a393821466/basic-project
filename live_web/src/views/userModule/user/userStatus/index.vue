<template>
  <div class="app-userStatus">
    <el-dialog title="用户状态限制" :visible="openStatusBox.edit" @close='closeDialog'>
      <el-form :model="ruleForm" ref="ruleForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input ref='refInput' :ids='openStatusBox.id' disabled readonly="value" auto-complete="off" :value="openStatusBox.username"></el-input>
        </el-form-item>
        <el-form-item label="冻结状态" :label-width="formLabelWidth" prop="f_status">
          <el-select class="statusInput" v-model="ruleForm.f_status" placeholder="选择状态">
            <el-option v-for="(item,index) in f_status" :key="index" :value="item.value" :label="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="冻结时间" :label-width="formLabelWidth" prop="f_time" v-if="ruleForm.f_status==0">
          <div class="freeze_time1" v-if="userSubTable.end_freeze_time!=='0' &&freeze">
            <el-input style="width:60%" disabled :value="fMoment(userSubTable.end_freeze_time)"></el-input>
            <span @click="change_freeze" style="cursor:pointer;color:#409EFF;border-bottom:1px solid #409EFF;">更改</span>
          </div>
          <div class="freeze_time2" v-else>
            <el-date-picker v-model="ruleForm.end_freeze" type="datetime" placeholder="选择结束时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="禁言状态" :label-width="formLabelWidth" prop="a_status">
          <el-select class="statusInput" v-model="ruleForm.a_status" placeholder="选择状态">
            <el-option v-for="(item,index) in a_status" :key="index" :value="item.value" :label="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="禁言时间" :label-width="formLabelWidth" prop="a_time" v-if="ruleForm.a_status==0">
          <div class="end_anexcuse1" v-if="userSubTable.end_anexcuse_time!=='0'&&anexcuse">
            <el-input style="width:60%" class="end_anexcuse_times" disabled :value="fMoment(userSubTable.end_anexcuse_time)"></el-input>
            <span style="cursor:pointer;color:#409EFF;border-bottom:1px solid #409EFF;" @click="change_anexcuse">更改</span>
          </div>
          <div class="end_anexcuse2" v-else>
            <el-date-picker v-model="ruleForm.end_anexcuse" type="datetime" placeholder="选择结束时间">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogOff">取 消</el-button>
        <el-button type="primary" :loading="loading" @click.native.prevent="onConfirm">确 定</el-button>
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
