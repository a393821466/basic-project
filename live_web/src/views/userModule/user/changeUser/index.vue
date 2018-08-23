<template>
  <div class="app-changeUser">
    <el-dialog title="用户信息表" :visible="changeUser.edit" @close='closeChangeUser'>
      <el-form :model="ruleForm" ref="ruleForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input :value="changeUser.username" disabled auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
          <el-input v-model="ruleForm.nickname" :disabled="disabled" auto-complete="off" :placeholder="changeUser.nicename"></el-input>
        </el-form-item>
        <el-form-item label="品牌别名" :label-width="formLabelWidth" prop="code">
          <el-input disabled auto-complete="off" :placeholder="changeUser.user_code"></el-input>
        </el-form-item>
        <el-form-item label="房间名" :label-width="formLabelWidth" prop="roomId">
          <el-input v-model="ruleForm.roomId" :disabled="disabled" :placeholder="!changeUser.roomId?'未分配':changeUser.roomId" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="groupId">
          <el-input disabled :placeholder="changeUser.groupName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth" class="statusInputs">
          <el-select class="statusInput" v-model="ruleForm.status" :disabled="disabled">
            <el-option v-for="(item,index) in optionStatus" :key="index" :value="item.value" :label="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='头像' :label-width="formLabelWidth" style="margin-bottom:0;">
          <img-inputer @onChange="handleFile" accept="image/*" class="groupIcon" v-model="ruleForm.file" theme="light" size="large"></img-inputer>
        </el-form-item>
        <el-form-item label="QQ号码" :label-width="formLabelWidth" prop="qq">
          <el-input v-model="ruleForm.qq" :placeholder="!userSubTable.qq?'默认':userSubTable.qq" :disabled="disabled" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="ruleForm.phone" :placeholder="!userSubTable.phone?'默认':userSubTable.phone" :disabled="disabled" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="开户人" :label-width="formLabelWidth" prop="superior_user">
          <el-input :value="ruleForm.superior_user" :placeholder="!userSubTable.superior_user?'admin':userSubTable.superior_user" disabled></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button  @click="dialogOff">取 消</el-button>
          <el-button type="primary" v-if="disabled" @click.native.prevent="changeUserBack">点我修改资料</el-button>
          <el-button type="primary" v-else :loading="loading" @click.native.prevent="changeUserInfo($event,changeUser.id)">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import changeUser from './changeUser'
export default changeUser
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.img-inputer--large {
  width: 80px;
  height: 80px;
  overflow: hidden;
}
</style>