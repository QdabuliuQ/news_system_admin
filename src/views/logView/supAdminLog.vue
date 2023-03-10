<template>
  <div id="supAdminLog">
    <searchForm ref="searchFormRef" :form="form" @reset-info="getData()" @search-info="getData()" />
    <el-table :data="logData" style="width: 100%">
      <el-table-column prop="log_id" label="日志ID" width="300" />
      <el-table-column label="类型" width="80">
        <template #default="scope">
          <el-tag v-if="scope.row.type == 1" type="success">添加</el-tag>
          <el-tag v-else-if="scope.row.type == 2">更改</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="操作时间">
        <template #default="scope">
          {{ proxy.$moment(scope.row.time).format("YYYY-MM-DD HH:mm") }}
        </template>
      </el-table-column>
      <el-table-column label="操作信息">
        <template #default="scope">
          {{ scope.row.ope_desc }}
        </template>
      </el-table-column>
      <el-table-column label="修改账号信息">
        <template #default="scope">
          <el-popover
            :hide-after="0"
            placement="bottom"
            :width="230"
            trigger="hover"
          >
            <template #reference>
              <el-button type="primary" link>
                {{ scope.row.admin_id }}
              </el-button>
            </template>
            <div class="adminInfoContainer">
              <div class="infoItem">
                <div class="leftTitle">账号ID</div>
                <div class="rightInfo">
                  {{ scope.row.admin_id }}
                </div>
              </div>
              <div class="infoItem">
                <div class="leftTitle">姓名</div>
                <div class="rightInfo">
                  {{ scope.row.admin_name }}
                </div>
              </div>
              <div class="infoItem">
                <div class="leftTitle">手机号</div>
                <div class="rightInfo">
                  {{ scope.row.admin_phone }}
                </div>
              </div>
              <div class="infoItem">
                <div class="leftTitle">邮箱</div>
                <div class="rightInfo">
                  {{ scope.row.admin_email }}
                </div>
              </div>
              <div class="infoItem">
                <div class="leftTitle">账号状态</div>
                <div class="rightInfo">
                  <el-tag v-if="scope.row.admin_status == 1" type="success"
                    >正常</el-tag
                  >
                  <el-tag v-else-if="scope.row.admin_status == 2" type="danger"
                    >封禁</el-tag
                  >
                </div>
              </div>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作账号信息" width="180">
        <template #default="scope">
          <el-popover
            :hide-after="0"
            placement="bottom"
            :width="230"
            trigger="hover"
          >
            <template #reference>
              <el-button type="primary" link>
                {{ scope.row.ope_id }}
              </el-button>
            </template>
            <div class="adminInfoContainer">
              <div class="infoItem">
                <div class="leftTitle">账号ID</div>
                <div class="rightInfo">
                  {{ scope.row.ope_id }}
                </div>
              </div>
              <div class="infoItem">
                <div class="leftTitle">姓名</div>
                <div class="rightInfo">
                  {{ scope.row.ope_name }}
                </div>
              </div>
              <div class="infoItem">
                <div class="leftTitle">手机号</div>
                <div class="rightInfo">
                  {{ scope.row.ope_phone }}
                </div>
              </div>
              <div class="infoItem">
                <div class="leftTitle">邮箱</div>
                <div class="rightInfo">
                  {{ scope.row.ope_email }}
                </div>
              </div>
              <div class="infoItem">
                <div class="leftTitle">账号状态</div>
                <div class="rightInfo">
                  <el-tag v-if="scope.row.ope_status == 1" type="success"
                    >正常</el-tag
                  >
                  <el-tag v-else-if="scope.row.ope_status == 2" type="danger"
                    >封禁</el-tag
                  >
                </div>
              </div>
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginationContainer">
      <el-pagination
        @current-change="pageChange"
        :current-page="offset"
        :page-size="pageSize"
        background
        layout="prev, pager, next"
        :total="total"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  getCurrentInstance,
  ComponentInternalInstance,
  onMounted,
  ref
} from "vue";
import { getOperationLog } from "@/network/supAdminLog";
import { InitData } from "@/types/logView/supAdminLog";
import searchForm from "@/components/searchForm.vue";

export default defineComponent({
  name: "supAdminLog",
  components: {
    searchForm
  },
  setup() {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance;
    const proxy = appContext.config.globalProperties;
    const data = reactive(new InitData());
    const searchFormRef = ref()

    // 切换页面
    const pageChange = (e: number) => {
      data.offset = e
      getData();
    }

    // 获取数据
    const getData = () => {
      let form = searchFormRef.value.getValue()
      getOperationLog({
        offset: data.offset,
        startTime: form.time.value.length ? form.time.value[0] : null,
        endTime: form.time.value.length ? form.time.value[1] : null,
        type: form.type.value,
        val: form.val.value
      }).then((res: any) => {
        data.logData = res.data.data;
        data.total = res.data.count
        data.pageSize = res.data.pageSize
      });
    };
    

    onMounted(() => {
      getData();
    })

    return {
      searchFormRef,
      getData,
      pageChange,
      proxy,
      ...toRefs(data),
    };
  },
});
</script>

<style lang='less'>

</style>