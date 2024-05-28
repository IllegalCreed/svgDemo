<template>
    <el-popover placement="bottom" width="40%" v-model:visible="showPopover" trigger="click">
        <template #reference>
            <div class="icon-picker">
                <template v-if="model">
                    <SvgIcon :name="model" />
                    <span class="icon-name">{{ model }}</span>
                </template>
                <span v-else>请选择图标</span>
            </div>
        </template>
        <div class="popover-panel">
            <el-input placeholder="请输入图标名称" v-model="keyword" @change="searchKw" @blur="searchKw"
                @clear="clearIconPpopver" clearable>
            </el-input>
            <div class="icons_panel">
                <div class="icon-item" v-for="(item, index) in menuIcons" :key="index" @click="changeIcons(item)">
                    <SvgIcon :name="item" />
                    <span>{{ item }}</span>
                </div>
            </div>
        </div>
    </el-popover>
</template>


<script setup>
import { ElPopover } from 'element-plus'
import { ref } from 'vue'
import { svgNames } from '~virtual/svg-component';

const model = defineModel()

const menuIcons = ref(svgNames);
const showPopover = ref(false)
const keyword = ref('')

// 搜索图标
const searchKw = () => {
    if (!keyword.value) {
        clearIconPpopver();
    }
    let list = menuIcons.value.filter(item => {
        return item.indexOf(keyword.value) >= 0
    })
    menuIcons.value = list
}

// 选择图标
function changeIcons(item) {
    model.value = item
    keyword.value = ''
    showPopover.value = false
}

// 关闭
const clearIconPpopver = () => {
    keyword.value = ''
    menuIcons.value = svgNames;
}
</script>

<style>
.icon-picker {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 11px;
    height: 32px;
    cursor: pointer;
    user-select: none;
}

.icon-name {
    margin-left: 10px;
}

.popover-panel {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.icons_panel {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
}

.icon-item {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: border-color 0.5s ease-in;
    cursor: pointer;
    user-select: none;
}

.icon-item:hover {
    border-color: #409eff;
}
</style>