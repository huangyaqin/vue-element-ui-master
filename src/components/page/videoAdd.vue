<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 运营管理</el-breadcrumb-item>
                <el-breadcrumb-item>视频上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="选择用户">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option key="1" label="用户1" value="1"></el-option>
                            <el-option key="2" label="用户2" value="2"></el-option>
                            <el-option key="3" label="用户3" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="视频分类">
                        <el-select v-model="form.type" placeholder="请选择">
                            <el-option key="1" label="直播" value="1"></el-option>
                            <el-option key="2" label="视频" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="视频推荐">
                        <el-radio-group v-model="form.red">
                            <el-radio label="是" name="type"></el-radio>
                            <el-radio label="否" name="type"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="点赞量">
                        <el-input v-model="form.fabulous"></el-input>
                    </el-form-item>
                    <el-form-item label="视频描述">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    type: [{
                        value: '1',
                        label: '直播'
                        }, {
                        value: '2',
                        label: '视频'
                    }],
                    red: '',
                    fabulous: '',
                    delivery: true,
                    desc: '',
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>