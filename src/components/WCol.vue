<template>
    <span>
       <el-col :span="6" :xs="12" :md="6">
        <el-card style="margin: 2px" shadow="hover">
            <el-image src="https://bbs-fd.zol-img.com.cn/t_s800x5000/g5/M00/06/0F/ChMkJ1bX2aKIWUS2ABpmFDjbSYsAAMamgKXWUAAGmYs179.jpg"/>
            <div style="text-align: center">
                Winter
                <br/>
                2019-11-28
                <br/>
                <el-button @click.native="itemClick">详情</el-button>
            </div>
        </el-card>
    </el-col>
    </span>
</template>

<script>
export default {
  name: 'WCol',
  props: ['item'],
  methods: {
    itemClick: function () {

    }
  }
}
</script>

<style scoped>

</style>
