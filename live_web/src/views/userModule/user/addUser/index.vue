<template>
  <div class="app-addUser">
    <el-dialog title="添加用户" :visible="openUserBox" @close='closeDialog'>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="ruleForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
          <el-input v-model="ruleForm.password" type='password' auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
          <el-input v-model="ruleForm.nickname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌别名" :label-width="formLabelWidth" prop="value1">
          <el-select class="statusInput" v-model="ruleForm.value1" placeholder="选择品牌别名">
            <el-option v-for="(item,index) in getMerchant" :key="index" :value="item.code" :label="item.merchant" v-if="item.code!=='all'">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="房间名" :label-width="formLabelWidth" prop="room">
          <el-input v-model="ruleForm.room" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="value2">
          <el-select class="statusInput" v-model="ruleForm.value2" placeholder="选择角色">
            <el-option v-for="(item,index) in groupArray" :key="index" :value="item.id" :label="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label='头像' :label-width="formLabelWidth" style="margin-bottom:0;">
          <img-inputer @onChange="handleFile" accept="image/*" class="groupIcon" v-model="ruleForm.file" theme="light" size="large"></img-inputer>
        </el-form-item>
        <el-form-item label="QQ号码" :label-width="formLabelWidth" prop="qq">
          <el-input v-model="ruleForm.qq" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="ruleForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="开户人" :label-width="formLabelWidth" prop="superior_user">
          <el-input :value="ruleForm.superior_user" disabled></el-input>
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
import addUser from './addUser'
export default addUser
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.img-inputer--large{
  width:80px;
  height:80px;
  overflow:hidden;
}
</style>
