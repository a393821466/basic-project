<template>
  <div class="app-callBoard">
    <div class="filter-container">
      <el-form ref="form" :inline="true">
        <div class="userSearch">
          <el-form-item label="用户名">
            <el-input v-model="username" class="filter-item" placeholder="用户名">
            </el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="nickname" class="filter-item" placeholder="昵称">
            </el-input>
          </el-form-item>
          <el-form-item label="房间号">
            <el-input v-model="room" class="filter-item" placeholder="房间号">
            </el-input>
          </el-form-item>
          <el-form-item label="状态" class="statusInputs">
            <el-select class="statusInput" v-model="value">
              <el-option v-for="(item,index) in optionStatus" :key="index" :value="item.value" :label="item.label">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="冻结状态" class="statusInputs">
            <el-select class="statusInput" v-model="value1">
              <el-option v-for="(item,index) in f_status" :key="index" :value="item.value1" :label="item.label">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="禁言状态" class="statusInputs">
            <el-select class="statusInput" v-model="value2">
              <el-option v-for="(item,index) in a_status" :key="index" :value="item.value2" :label="item.label">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开户人">
            <el-input v-model="superior_user" class="filter-item" placeholder="开户人昵称">
            </el-input>
          </el-form-item>
          <el-button class="search-btn" @click="userSearch" style="margin-left:10px;" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div class="btn">
          <el-button class="delUser-btn" type="danger" icon="el-icon-delete" @click="addUser">删除所选</el-button>
          <el-button class="addUser-btn" type="primary" icon="el-icon-plus" @click="addUser">添加用户</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import userInfo from './user'
export default userInfo
</script>
<style lang='scss' rel='stylesheet/scss' scoped>
@import './user.scss';
</style>

