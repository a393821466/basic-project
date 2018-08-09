<template>
  <div class="app-group">
    <div class="filter-container">
      <el-form ref="form" :inline="true">
        <el-form-item label="品牌名" class="statusInputs">
          <el-select class="statusInput" v-model="value" placeholder="全部">
            <el-option v-for="(item,index) in groupMerchant" :key="index" :value="item.code" :label="item.merchant">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户组名称">
          <el-input v-model="merchanrNickname" style="width: 200px;" class="filter-item" placeholder="用户组名称">
          </el-input>
        </el-form-item>
        <el-button class="search-btn" @click="groupSearch" style="margin-left:10px;" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button class="addgroup-btn" type="primary" icon="el-icon-plus" @click="addGroup">添加用户组</el-button>
      </el-form>
    </div>
    <div class="merchant-tables">
      <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column prop="date" label="日期" sortable width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
      </el-table>
      <!-- <div class="pages">
        <el-pagination background layout="prev, pager, next" :page-size='getMerchant.pageSize' :total="getMerchant.totelPage" @current-change="handleCurrentChange">
        </el-pagination>
      </div> -->
    </div>
  </div>
</template>
<script>
import userGroup from './group'
export default userGroup
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import './group.scss';
</style>

