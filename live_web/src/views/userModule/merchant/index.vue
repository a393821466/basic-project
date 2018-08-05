<template>
  <div class="app-merchant">
    <div class="filter-container">
      <el-form ref="form" :inline="true">
        <el-form-item label="品牌名称">
          <el-input style="width: 200px;" class="filter-item" placeholder="输入品牌名称">
          </el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select class="statusInput" v-model="value" placeholder="请选择">
            <el-option v-for="(item,index) in options" :key="index" :value="item.value" :label="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-button class="search-btn" style="margin-left:10px;" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button class="addMerchant-btn" type="primary" icon="el-icon-plus">添加品牌</el-button>
      </el-form>
    </div>
    <div class="merchant-tables">
      <el-table :data="tableData" style="width: 100%" v-loading="listLoading" element-loading-text="Loading">
        <el-table-column prop="id" label="编号" width="180" sortable :formatter="filterId">
        </el-table-column>
        <el-table-column prop="name" label="品牌名称" width="180">
        </el-table-column>
        <el-table-column prop="address" label="品牌别名">
        </el-table-column>
        <el-table-column prop="state.info" label="状态" :formatter="formaState">
        </el-table-column>
        <el-table-column prop="date" label="创建日期" width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLoading: false,
      value: '选项1',
      options: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '启用'
        },
        {
          value: '选项3',
          label: '未启用'
        }
      ],
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀',
          state: 1
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普',
          state: 0
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀',
          state: 1
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀',
          state: 1
        }
      ]
    }
  },
  methods: {
    filterId(value, row) {
      return value.id
    },
    formaState(row) {
      let state = ''
      if (row.state === 0) {
        state = '未启用'
      } else {
        state = '启用'
      }
      return state
    }
  }
}
</script>

<style lang="scss" >
@import './merchant.scss';
.el-table th.is-leaf {
  background: #f8f8f8;
}
</style>

