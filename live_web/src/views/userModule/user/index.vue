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
          <el-form-item label="角色组">
            <el-input v-model="groupname" class="filter-item" placeholder="角色名">
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
          <el-button class="search-btn" @click="userSearch" type="primary" style="margin-bottom:10px;" icon="el-icon-search">搜索</el-button>
        </div>
        <div class="btn">
          <el-button class="delUser-btn" type="danger" icon="el-icon-delete" @click="delSelectUser">删除所选</el-button>
          <el-button class="addUser-btn" type="primary" icon="el-icon-plus" @click="addUser">添加用户</el-button>
        </div>
      </el-form>
    </div>
    <div class="merchant-tables">
      <el-table :data="userData.data" style="width: 100%" v-loading="listLoading" @selection-change="handleSelectionChange" ref="multipleTable">
        <el-table-column prop="onCheck" :selectable="checkSelectable" :disabled='username=="admin"?isAble:""' type="selection" width="55">
        </el-table-column>
        <el-table-column prop="id" label="序号" width='80' sortable>
        </el-table-column>
        <el-table-column prop="username" label="用户名">
        </el-table-column>
        <el-table-column prop="nicename" label="用户名称">
        </el-table-column>
        <el-table-column prop="user_code" label="所在品牌">
        </el-table-column>
        <el-table-column prop="groupName" label="角色组">
        </el-table-column>
        <el-table-column prop="status" label="审核状态" :formatter="formStatus">
        </el-table-column>
        <el-table-column prop="roomId" label="房间号" :formatter="RoomNumber">
        </el-table-column>
        <el-table-column prop="f_status" label="冻结状态" :formatter="formfstatus">
        </el-table-column>
        <el-table-column prop="a_status" label="禁言状态" :formatter="formastatus">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" :formatter="formDates">
        </el-table-column>
        <el-table-column label="操作" width='200px'>
          <template slot-scope="scope">
            <div class="slotOperating1">
              <el-button type="primary" :disabled="scope.row.groupName!==users.groupName || scope.row.username===users.username?false:true"  title='查看更多' @click="handleLookMsg(scope.row)" icon="el-icon-view" circle></el-button>
              <el-button type="warning" v-if="scope.row.username!=='admin'" :disabled="scope.row.groupName!==users.groupName || scope.row.username===users.username?false:true" title='用户状态设置' @click="handleStatus(scope.row)" icon="el-icon-time" circle></el-button>
              <el-button title='删除用户' v-if="scope.row.username!=='admin'" :disabled="scope.row.groupName!==users.groupName || scope.row.username===users.username?false:true" :loading="scope.row.onCheck" type="danger" icon="el-icon-delete" @click="handleDel(scope.row)" circle></el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pages">
        <el-pagination background layout="prev, pager, next" :page-size='userData.pageSize' :total="userData.totelPage" :current-page="userData.page" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
    <add-user-box :openUserBox="openMerchantBox"></add-user-box>
    <add-status :openStatusBox="singleUser"></add-status>
  </div>
</template>
<script>
import userInfo from './user'
export default userInfo
</script>
<style lang='scss' rel='stylesheet/scss' scoped>
@import './user.scss';
</style>

