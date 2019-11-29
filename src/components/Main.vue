<template>
    <el-main>
        <WRow :cols="cols(1)"/>
        <WRow :cols="cols(2)"/>
        <WRow :cols="cols(3)"/>
        <WRow :cols="cols(4)"/>
    </el-main>
</template>

<script>

    import WRow from "./WRow";

    export default {
        name: "Main",
        components: {WRow},
        data() {
            return {
                content: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
            }
        },
        methods: {
            cols: function (row) {
                const items = [];
                let start  = (row - 1) * 4;
                let end = start + 4;
                for (let i = start ; i < end; i++) {
                    items.push(this.content[i]);
                }
                return items;
            }
        }
    }
</script>

<style scoped>

</style>