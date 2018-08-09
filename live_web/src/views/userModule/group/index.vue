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
      <el-table :data="groupArray.data" style="width: 100%" v-loading="listLoading">
        <el-table-column prop="id" label="序号" width='80' sortable>
        </el-table-column>
        <el-table-column prop="name" label="用户组名称">
        </el-table-column>
        <el-table-column prop="introduce" label="用户组介绍">
        </el-table-column>
        <el-table-column prop="merchant" label="品牌别名">
        </el-table-column>
        <el-table-column prop="icon" label="图标">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" title='编辑组' @click="handleEdit(scope.row)" icon="el-icon-edit" circle></el-button>
            <el-button title='查看组用户' icon="el-icon-search" @click="handleLook(scope.row)" circle></el-button>
            <el-button title='删除组' type="danger" icon="el-icon-delete" @click="handleDel(scope.row)" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pages">
        <el-pagination background layout="prev, pager, next" :page-size='groupArray.pageSize' :total="groupArray.totelPage" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
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

