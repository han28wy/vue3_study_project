<template>
	<div class="pagination">
		<el-pagination
			v-model:current-page="thisCurrentPage"
			v-model:page-size="thisPageSize"
			:total="total"
			:pager-count="count"
			:page-sizes="prop.pageSizes"
			layout="total, sizes, prev, pager, next, jumper"
			popper-class="paddingLR-0" />
	</div>
</template>
<script setup lang="ts">
interface props {
	currentPage: number;
	pageSize: number;
	total: number;
	count?: number;
	pageSizes?: number[];
}
// props默认值
let prop = withDefaults(defineProps<props>(), {
	pageSizes: [10, 50, 100, 200, 500] as any,
});
// emits默认值
const emit = defineEmits<{
	(e: "update:currentPage", value: number): void;
	(e: "update:pageSize", value: number): void;
	//返回第几到第几条  { currentPage, pageSize }   都是number值
	(e: "changePage", { currentPage, pageSize }: { [x: string]: number }): void;
}>();
let { total, count } = toRefs(prop);
// 当前页数
const thisCurrentPage = computed({
	get() {
		return prop.currentPage;
	},
	set(value) {
		emit("update:currentPage", value);
	},
});
// 每页显示条目个数
const thisPageSize = computed({
	get() {
		return prop.pageSize;
	},
	set(value) {
		emit("update:pageSize", value);
	},
});
watchEffect(() => {
	emit("changePage", {
		// startIndex: prop.currentPage * prop.pageSize - prop.pageSize,
		// endIndex: prop.currentPage * prop.pageSize - 1,
		startIndex: prop.currentPage,
		endIndex: prop.pageSize,
	});
});
</script>
<style lang="less" scoped>
.pagination {
	overflow: hidden;
	padding: 20px 10px;
}
</style>