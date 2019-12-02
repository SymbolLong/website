<template>
    <el-row>
        <WCol v-for=" i in cols.length" :key="i" :item="cols[i-1]"/>
    </el-row>
</template>

<script>
import WCol from './WCol'

export default {
  name: 'WRow',
  components: { WCol },
  props: ['cols']
}
</script>

<style scoped>

</style>
