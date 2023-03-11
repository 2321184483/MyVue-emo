<!-- 微信二维码 -->
<!-- <template>
<div >
	<div class="crumbs">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>
				<i class="el-icon-lx-goods"></i> 购物车
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div class="container">
		</div> -->
	
  <!-- <el-dialog
      title="微信扫码支付" 
      :visible.sync="dialogData.dialogVisible"
      width="20%"
      v-dialogDrag
      center
      @close="close">
      <div id="qrcode" ref="qrcode" style="display:flex;justify-content:center">
      </div>
      <!-- <p style="text-align:center;margin:5px"><el-button type="primary" size="mini" @click="refresh">刷新二维码</el-button></p>
      <p style="text-align:center"><b>订单名称:{{dialogData.xxxx}}</b></p>
      <p style="text-align:center"><b>订单价格:{{dialogData.xxxx}}元</b></p>
      <p style="text-align:center"><b>数量:{{dialogData.xxx}}</b></p> -->
      <!-- <div slot='footer' class="dialog-footer">
         <el-button type="primary" @click="confirm">已支付</el-button>
         <el-button type="warning" @click='cancel'>取消</el-button>
      </div>
  </el-dialog> --> 
<!-- </div>
</template> -->


<!-- <script>
	import QRCode from 'qrcodejs2'
	export default {
	// import引入的组件需要注入到对象中才能使用
	  components: {QRCode},
	  props: ['dialogData'],
	  inject: ['reload'],
	  data () {
	    // 这里存放数据
	    return {
	      content: ''
	    }
	  },
	  // 方法集合
	  methods: {
	    qrcodedraw () { // 生成二维码
	      this.qrcode = new QRCode(this.$refs.qrcode, {
	        width: 100, // 二维码宽度
	        height: 100, // 二维码高度
	        text: this.dialogData.codeUrl,
	        correctLevel: QRCode.CorrectLevel.H
	      })
	    },
	    refresh () {
	      this.$http.rule.xxxxxxxx({orderId: this.dialogData.item.orderId, paymentMethod: 1}).then(res => {
	        if (res.data.code === '200' && res.data.value === 'success') {
	          this.$message.success('二维码刷新成功')
	          this.content = res.data.data.codeUrl
	          document.getElementById('qrcode').innerHTML = ''  //点击一次刷新将之前的二维码内容清空
	          this.$nextTick(() => {
	            this.qrcodeScan()
	          })
	        }
	      }).catch(() => {})
	    },
	    close () {
	      this.$message.warning('支付页面关闭!')
	      this.dialogData.dialogVisible = false
	      this.reload()
	    },
	    confirm () {
	      this.$http.rule.getMyOrdersList({current: 1, size: 5, orderId: this.dialogData.orderId}).then(res => {
	        if (res.data.data.records[0].orderState === '2') {
	          this.$message.success('支付成功!')
	          this.dialogData.dialogVisible = false
	          this.$router.push({path: '/home/busaccount', query: {showview: 1}})
	          this.reload()
	        } else if (res.data.data.records[0].orderState === '4') {
	          this.$message.error('支付失败!')
	          this.dialogData.dialogVisible = false
	          this.$router.push({path: '/home/busaccount', query: {showview: 1}})
	          this.reload()
	        } else if (res.data.data.records[0].orderState === '1') {
	          this.$message.warning('微信未支付!')
	          this.dialogData.dialogVisible = false
	          this.$router.push({path: '/home/busaccount', query: {showview: 1}})
	          this.reload()
	        }
	      })
	    },
	    cancel () {
	      this.$message.warning('支付取消!')
	      this.reload()
	    }
	  },
	  // 生命周期 - 挂载完成（可以访问DOM元素）
	  mounted () {
	    this.$nextTick(() => {
	      this.qrcodedraw()
	    })
	  },
	}
</script> -->

<!-- <style>
</style> -->

