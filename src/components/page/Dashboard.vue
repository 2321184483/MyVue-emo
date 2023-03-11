<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card shadow="hover" class="mgb20" style="height:284px;">
					<div class="user-info">
						<img src="../../assets/img/img.jpg" class="user-avator" alt />
						<div class="user-info-cont">
							<div class="user-info-name">{{name}}</div>
							<div>{{role}}</div>
						</div>
					</div>
					<div class="user-info-list">
						上次登录时间：
						<span>2021-06-01</span>
					</div>
					<div class="user-info-list">
						上次登录地点：
						<span>大连</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="16">
				<el-row :gutter="20" class="mgb20">
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{padding: '0px'}">
							<div class="grid-content grid-con-1">
								<i class="el-icon-lx-people grid-con-icon"></i>
								<div class="grid-cont-right">
									<div class="grid-num">123</div>
									<div>访问量</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{padding: '0px'}">
							<div class="grid-content grid-con-2">
								<i class="el-icon-lx-notice grid-con-icon"></i>
								<div class="grid-cont-right">
									<div class="grid-num">321</div>
									<div>系统消息</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{padding: '0px'}">
							<div class="grid-content grid-con-3">
								<i class="el-icon-lx-goods grid-con-icon"></i>
								<div class="grid-cont-right">
									<div class="grid-num">500</div>
									<div>数量</div>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
				<el-card shadow="hover" style="height:203px;">
					<div slot="header" class="clearfix">
						<span>待办事项</span>
						<el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
					</div>
					<el-table :show-header="false" :data="todoList" style="width:100%;">
						<el-table-column width="40">
							<template slot-scope="scope">
								<el-checkbox v-model="scope.row.status"></el-checkbox>
							</template>
						</el-table-column>
						<el-table-column>
							<template slot-scope="scope">
								<div class="todo-item" :class="{'todo-item-del': scope.row.status}">{{scope.row.title}}
								</div>
							</template>
						</el-table-column>
						<el-table-column width="60">
							<template>
								<i class="el-icon-edit"></i>
								<i class="el-icon-delete"></i>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
		</el-row>
		<el-carousel :interval="4000" type="card" height="300px">
			        <el-carousel-item v-for="item in imagesbox" :key="item.id">
				           <img :src="item.idView" class="image">
				        </el-carousel-item>

		</el-carousel>
		<div style="display: flex;flex-wrap:wrap;width: 100%;">
			<div class="card" v-for="(item, index) in goodsList" :key="item.id">
				<div class="ribbon">
					<img :src="item.img" style="height:200px;width: 100%">
				</div>
				<div style="text-align:center">
					<span>{{item.name}}</span>
					<span>&yen;{{item.prize}}</span>
					<span>{{item.desc}}</span>
					<span style="padding: 0.3125rem;">
						<el-button type="primary" round>购票</el-button>
						<!-- <router-link to='/ShoppingCart'> -->
							<el-button type="warning" round >加入购物车
							</el-button>
						<!-- </router-link> -->
					</span>
				</div>
			</div>
		</div>


	</div>


</template>

<script>
	import Schart from 'vue-schart';
	import bus from '../common/bus';
	export default {
		name: 'dashboard',
		data() {
			return {
				visible: false,
				name: localStorage.getItem('ms_username'),
				todoList: [{
						title: '取扫黑电影票',
						status: false
					},
					{
						title: '取扫黑电影票',
						status: true
					},
					{
						title: '买唐探3的票',
						status: true
					}
				],

				imagesbox: [{
						id: 0,
						idView: require("../../assets/img/0.jpg")
					},
					{
						id: 1,
						idView: require("../../assets/img/3.jpg")
					},
					{
						id: 2,
						idView: require("../../assets/img/7.jpg")
					},
					{
						id: 3,
						idView: require("../../assets/img/5.jpg")
					},
					{
						id: 4,
						idView: require("../../assets/img/6.jpg")
					},
					{
						id: 5,
						idView: require("../../assets/img/1.jpg")
					}

				],
				// currentDate: (new Date().toLocaleString()),

				current: 0,
				selectd: '',
				goodsList: [{
						id: 1,
						name: "唐人街探案3",
						img: require("../../assets/img/1.jpg"),
						prize: "30.00",
						desc: "中星影城"
					},
					{
						id: 2,
						name: "悬崖之上",
						img: require("../../assets/img/2.jpg"),
						prize: "27.00 ",
						desc: "万达影院"
					},
					{
						id: 3,
						name: "扫黑",
						img: require("../../assets/img/0.jpg"),
						prize: "36.00",
						desc: "万达影院"
					},
					{
						id: 4,
						name: "悬崖之上",
						img: require("../../assets/img/3.jpg"),
						prize: "28.00",
						desc: "万达影院"
					},
					{
						id: 5,
						name: "悬崖之上",
						img: require("../../assets/img/7.jpg"),
						prize: "28.90",
						desc: "中星影城"
					},
					{
						id: 6,
						name: "唐人街探案3",
						img: require("../../assets/img/5.jpg"),
						prize: "34.00",
						desc: "中星影城"
					},
					{
						id: 7,
						name: "唐人街探案3",
						img: require("../../assets/img/6.jpg"),
						prize: "29.00",
						desc: "万达影院"
					},
					{
						id: 8,
						name: "悬崖之上",
						img: require("../../assets/img/7.jpg"),
						prize: "31.00",
						desc: "中星影城"
					},
					{
						id: 9,
						name: "扫黑",
						img: require("../../assets/img/0.jpg"),
						prize: "29.00",
						desc: "万达影院"
					},
				],
			}
		},
		components: {
			Schart
		},
		computed: {
			role() {
				return this.name === 'admin' ? '超级管理员' : '普通用户';
			}
		},
		methods: {
			changeDate() {
				const now = new Date().getTime();
				this.data.forEach((item, index) => {
					const date = new Date(now - (6 - index) * 86400000);
					item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
				});
			},
		}
	};
</script>


<style scoped>
	.el-row {
		margin-bottom: 20px;
	}

	.grid-content {
		display: flex;
		align-items: center;
		height: 60px;
	}

	.grid-cont-right {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #999;
	}

	.grid-num {
		font-size: 30px;
		font-weight: bold;
	}

	.grid-con-icon {
		font-size: 45px;
		width: 80px;
		height: 80px;
		text-align: center;
		line-height: 80px;
		color: #fff;
	}

	.grid-con-1 .grid-con-icon {
		background: rgb(45, 140, 240);
	}

	.grid-con-1 .grid-num {
		color: rgb(45, 140, 240);
	}

	.grid-con-2 .grid-con-icon {
		background: rgb(100, 213, 114);
	}

	.grid-con-2 .grid-num {
		color: rgb(45, 140, 240);
	}

	.grid-con-3 .grid-con-icon {
		background: rgb(242, 94, 67);
	}

	.grid-con-3 .grid-num {
		color: rgb(242, 94, 67);
	}

	.user-info {
		display: flex;
		align-items: center;
		padding-bottom: 20px;
		border-bottom: 2px solid #ccc;
		margin-bottom: 20px;
	}

	.user-avator {
		width: 120px;
		height: 120px;
		border-radius: 50%;
	}

	.user-info-cont {
		padding-left: 50px;
		flex: 1;
		font-size: 14px;
		color: #999;
	}

	.user-info-cont div:first-child {
		font-size: 30px;
		color: #222;
	}

	.user-info-list {
		font-size: 14px;
		color: #999;
		line-height: 30px;
	}

	.user-info-list span {
		margin-left: 70px;
	}

	.mgb20 {

		margin-bottom: 20px;
	}

	.todo-item {
		font-size: 14px;
	}

	.todo-item-del {
		text-decoration: line-through;
		color: #999;
	}

	.schart {
		width: 100%;
		height: 300px;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.card {
		height:100%;
		width: 24%;
		margin: 0.5%;
		background-color: white;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 4px;
	}

	/* .card img {
		width: 100%;
		height: 60%;
	} */

	.card span {
		font-size: 15px;
		color: #1a1a1a;
		display: block;
		letter-spacing: 2px;
	}
</style>
