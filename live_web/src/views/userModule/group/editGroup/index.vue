<template>
  <div class="app-editGroup">
    <el-dialog title="修改用户组" :visible="singData.edit" @close='closeDialog'>
      <el-form :model="ruleForm" ref="ruleForm">
        <el-form-item label="用户组名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="ruleForm.name" :placeholder="singData.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌别名" :label-width="formLabelWidth" prop="code">
          <el-input v-model="singData.code" id="BanInput" readonly="value" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label='图标' :label-width="formLabelWidth">
          <img :src='!singData.icon?morenImg:singData.icon' style="width:45px;height:45px;cursor:pointer;" title='点我更改' v-if="!imgBoxShow" @click="singImgShow" />
          <img-inputer @onChange="handleFile" accept="image/*" class="groupIcon" v-model="ruleForm.file" theme="light" size="large" v-else></img-inputer>
        </el-form-item>
        <el-form-item label="介绍" :label-width="formLabelWidth" prop="introduce">
          <el-input v-model="ruleForm.introduce" :placeholder="singData.introduce" auto-complete="off" type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogOff">取 消</el-button>
        <el-button type="primary" :loading="loading" @click.native.prevent="onConfirm()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import editGroup from './editGroup'
export default editGroup
</script>

<style lang='scss' rel='stylesheet/scss'>
#BanInput {
  background: #f8f8f8;
  color: #ccc;
}
</style>
