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
      <el-table :data="getMerchant.data" style="width: 100%" v-loading="listLoading" element-loading-text="Loading">
        <el-table-column prop="id" label="编号" width="180" sortable :formatter="filterId">
        </el-table-column>
        <el-table-column prop="merchant" label="品牌名称" width="180">
        </el-table-column>
        <el-table-column prop="code" label="品牌别名">
        </el-table-column>
        <el-table-column prop="status" label="状态" :formatter="formaState">
        </el-table-column>
        <el-table-column prop="create_time" label="创建日期" width="180" :formatter="formDates">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <span>
              <el-button type="primary" size="mini" icon="el-icon-edit" @click="handleEdit(scope.row)"></el-button>
            </span>
            <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pages">
        <el-pagination background layout="prev, pager, next" :page-size='getMerchant.pageSize' :total="getMerchant.totelPage" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { time } from '@/utils/common'
export default {
  data() {
    return {
      listLoading: false,
      status: 0,
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
      ]
    }
  },
  computed: {
    ...mapGetters(['getMerchant'])
  },
  mounted() {
    this.listLoading = true
    this.gettMerchant()
  },
  methods: {
    filterId(value, row) {
      return value.id
    },
    formaState(row) {
      let state = ''
      if (row.status === 0) {
        state = '未启用'
      } else {
        state = '启用'
      }
      return state
    },
    formDates(row, column) {
      const date = row[column.property]
      if (date === undefined) {
        return ''
      }
      return time('0', JSON.parse(date))
    },
    gettMerchant(params) {
      this.$store.dispatch('getMerchant', params).then(() => {
        this.listLoading = false
      })
    },
    handleCurrentChange(val) {
      this.listLoading = true
      this.gettMerchant({ page: val })
    },
    handleEdit(val) {
      this.edit = true
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

