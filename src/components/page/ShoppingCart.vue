<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-goods"></i> 购物车
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="handle-box">
				<el-button type="primary" icon="el-icon-delete" class="handle-del mr10" @click="delAllSelection">批量删除
				</el-button>
				<el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
					<el-option key="1" label="万达影院" value="万达影院"></el-option>
					<el-option key="2" label="中星影城" value="中星影城"></el-option>
				</el-select>
				<el-input v-model="query.name" placeholder="电影名称" class="handle-input mr10"></el-input>
				<el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header"
				@selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55" align="center"></el-table-column>
				<el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
				<el-table-column prop="name" label="电影名称"></el-table-column>
				<el-table-column label="价格">
					<template slot-scope="scope">
						￥{{scope.row.money}}
					</template>
				</el-table-column>
				<el-table-column label="数量">
					<template slot-scope="scope">
						<el-input-number v-model="scope.row.number" @change="handleChange" :min="0" :max="10"
							label="数量"></el-input-number>
					</template>
				</el-table-column>
				<el-table-column label="电影海报(查看大图)" align="center">
					<template slot-scope="scope">
						<el-image class="table-td-thumb" :src="scope.row.thumb" :preview-src-list="[scope.row.thumb]">
						</el-image>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="使用地址"></el-table-column>
				<el-table-column label="操作" width="180" align="center">
					<template slot-scope="scope">
						<el-button type="text" icon="el-icon-delete" class="red"
							@click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<h3>总价：{{sum}}.00元</h3>
			<router-link to='/Pay'>
			<el-button type="warning" round>去结账</el-button>
			</router-link>
		</div>
	</div>
</template>

<script>
	import {
		fetchData
	} from '../../api/index';
	export default {
		name: 'ShoppingCart',
		data() {
			return {
				num: 1,
				query: {
					address: '',
					name: '',
					pageIndex: 1,
					pageSize: 10
				},
				tableData: [],
				multipleSelection: [],
				delList: [],
				editVisible: false,
				pageTotal: 0,
				form: {},
				idx: -1,
				id: -1
			};
		},
		created() {
			this.getData();
		},
		methods: {
			handleChange(value) {
				console.log(value);
			},
			// 获取 easy-mock 的模拟数据
			getData() {
				fetchData(this.query).then(res => {
					console.log(res);
					this.tableData = res.shuju;
					this.pageTotal = res.pageTotal || 50;
				});
			},
			// 触发搜索按钮
			handleSearch() {
				this.$set(this.query, 'pageIndex', 1);
				this.getData();
			},
			// 删除操作
			handleDelete(index, row) {
				// 二次确认删除
				this.$confirm('确定要删除吗？', '提示', {
						type: 'warning'
					})
					.then(() => {
						this.$message.success('删除成功');
						this.tableData.splice(index, 1);
					})
					.catch(() => {});
			},
			// 多选操作
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			delAllSelection() {
				const length = this.multipleSelection.length;
				let str = '';
				this.delList = this.delList.concat(this.multipleSelection);
				for (let i = 0; i < length; i++) {
					str += this.multipleSelection[i].name + ' ';
				}
				this.$message.error(`删除了${str}`);
				this.multipleSelection = [];
			},
		},
		computed: {
			sum() {
				var sum = 0;
				for (var i = 0; i < this.tableData.length; i++) {
					sum += this.tableData[i].money * this.tableData[i].number;
				}
				return sum;
				}
				
			},
	};
</script>

<style scoped>
	.handle-box {
		margin-bottom: 20px;
	}

	.handle-select {
		width: 120px;
	}

	.handle-input {
		width: 300px;
		display: inline-block;
	}

	.table {
		width: 100%;
		font-size: 14px;
	}

	.red {
		color: #ff0000;
	}

	.mr10 {
		margin-right: 10px;
	}

	.table-td-thumb {
		display: block;
		margin: auto;
		width: 40px;
		height: 40px;
	}

	.button {
		width: 15px;
	}
</style>
