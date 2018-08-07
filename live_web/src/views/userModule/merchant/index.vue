<template>
  <div class="app-merchant">
    <div class="filter-container">
      <el-form ref="form" :inline="true">
        <el-form-item label="品牌名称">
          <el-input v-model="merchanrNickname" style="width: 200px;" class="filter-item" placeholder="输入品牌名称">
          </el-input>
        </el-form-item>
        <el-form-item label="状态" class="statusInputs">
          <el-select class="statusInput" v-model="value" placeholder="请选择状态">
            <el-option v-for="(item,index) in options" :key="index" :value="item.value" :label="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button class="search-btn" @click="MerchantSearch" style="margin-left:10px;" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button class="addMerchant-btn" type="primary" icon="el-icon-plus" @click="addMerchantBox">添加品牌</el-button>
      </el-form>
    </div>
    <div class="merchant-tables">
      <el-table :data="getMerchant.data" style="width: 100%" v-loading="listLoading" element-loading-text="Loading">
        <el-table-column prop="id" label="编号" width="180" sortable :formatter="filterId">
        </el-table-column>
        <el-table-column prop="merchant" label="品牌名称" width="180">
        </el-table-column>
        <el-table-column prop="code" label="品牌别名">
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.edit" class="stateStatus statusOpen"></span>
            <span v-else class="stateStatus statusOff"></span>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="创建日期" width="180" :formatter="formDates">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" icon="el-icon-circle-close-outline" type="info" size="small" v-if="scope.row.edit" :loading="scope.row.loading">停用</el-button>
            <el-button @click="handleClick(scope.row)" icon="el-icon-circle-check-outline" type="primary" size="small" v-else :loading="scope.row.loading">启用</el-button>

            <div class="delMerchantList">
              <el-button icon="el-icon-delete" class="del_tables" size="small" type="danger" @click="deleteMerchant(scope.row)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pages">
        <el-pagination background layout="prev, pager, next" :page-size='getMerchant.pageSize' :total="getMerchant.totelPage" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
    <merchant-model :openMerchantBox="openMerchantBox"></merchant-model>
  </div>
</template>

<script>
import Merchant from './merchant'
export default Merchant
</script>

<style lang="scss" >
@import './merchant.scss';
</style>

