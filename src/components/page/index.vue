<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24" class="mgb20">
                <el-row :gutter="24" class="mgb20">
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content">
                                <i class="el-icon-view grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">111</div>
                                    <div>开播人数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content">
                                <i class="el-icon-view grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">222</div>
                                    <div>在线人数</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content">
                                <i class="el-icon-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">333</div>
                                    <div>当日消费</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content">
                                <i class="el-icon-sold-out grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">444</div>
                                    <div>当日充值</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="24" class="mgb20">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>新增人数</span>
                    </div>
                    <div class="schart">
                        <schart canvasId="line" width="700" height="400" :data="data" type="line" :options="options"></schart>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    export default {
        components: {
            Schart
        },
        data() {
            return {
                data:[
                    {name:'5-11',value:100},
                    {name:'5-12',value:245},
                    {name:'5-13',value:37},
                    {name:'5-14',value:29},
                    {name:'5-15',value:168},
                    {name:'5-16',value:55},
                    {name:'5-16',value:89}
                ],
                options: {
                    title: '新增用户',
                    bgColor: '#f4f4f4',
                    titleColor: '#000',
                    fillColor: '#000',
                    axisColor: '#000',
                    contentColor: '#999'
                },
            }
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        }
    }

</script>


<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
        background: rgb(45, 140, 240);
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .schart{
        width: 100%;
        display: inline-block;
    }

</style>
