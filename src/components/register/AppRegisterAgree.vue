<template>
	<div class="app-register-agree">
		<div class="app-header">
	        <i class="yo-ico" @click="jumpTocollege()">&#xf07d;</i>
	        <p>兼客用户协议</p>
	        <i></i>
    	</div>
    	<div class="app-content" :class="{scroll:isShow}">
    		<h3>兼客儿用户协议</h3>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本协议为您与本兼客儿APP 管理者之间所订立的契约，具有合同的法律效力，请您仔细阅读。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、 本协议内容、生效、变更</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本协议内容包括协议正文及所有本兼客儿APP 已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。如您对协议有任何疑问，应向兼客儿APP 咨询。您在同意所有协议条款并完成注册程序，才能成为本站的正式用户，您点击“我以阅读并同意兼客儿APP 用户协议和法律协议”按钮后，本协议即生效，对双方产生约束力。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只要您使用兼客儿APP 平台服务，则本协议即对您产生约束，届时您不应以未阅读本协议的内容或者未获得兼客儿APP 对您问询的解答等理由，主张本协议无效，或要求撤销本协议。您确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。 您承诺接受并遵守本协议的约定。如果您不同意本协议的约定，您应立即停止注册程序或停止使用兼客儿APP 平台服务。兼客儿APP 有权根据需要不定期地制订、修改本协议及/或各类规则，并在兼客儿APP 平台公示，不再另行单独通知用户。变更后的协议和规则一经在网站公布，立即生效。如您不同意相关变更，应当立即停止使用兼客儿APP 平台服务。您继续使用兼客儿APP 平台服务的，即表明您接受修订后的协议和规则。 </p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 二、 注册</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册资格用户须具有法定的相应权利能力和行为能力的自然人、法人或其他组织，能够独立承担法律责任。您完成注册程序或其他兼客儿APP 平台同意的方式实际使用本平台服务时，即视为您确认自己具备主体资格，能够独立承担法律责任。若因您不具备主体资格，而导致的一切后果，由您及您的监护人自行承担。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、注册资料</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且兼客儿APP 保留终止用户使用本平台各项服务的权利。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.2用户在本站进行浏览等活动时，涉及用户真实姓名/名称、通信地址、联系电话、电子邮箱等隐私信息的，本站将予以严格保密，除非得到用户的授权或法律另有规定，本站不会向外界披露用户隐私信息。 </p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、账户</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1您注册成功后，即成为兼客儿APP 平台的会员，将持有兼客儿APP 平台唯一编号的账户信息，您可以根据本站规定改变您的密码。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2您设置的姓名为真实姓名，不得侵犯或涉嫌侵犯他人合法权益。否则，兼客儿APP 有权终止向您提供服务，注销您的账户。账户注销后，相应的会员名将开放给任意用户注册登记使用。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.3您应谨慎合理的保存、使用您的会员名和密码，应对通过您的会员名和密码实施的行为负责。除非有法律规定或司法裁定，且征得兼客儿APP 的同意，否则，会员名和密码不得以任何方式转让、赠与或继承（与账户相关的财产权益除外）。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.4用户不得将在本站注册获得的账户借给他人使用，否则用户应承担由此产生的全部责任，并与实际使用人承担连带责任。</p>
	        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.5如果发现任何非法使用等可能危及您的账户安全的情形时，您应当立即以有效方式通知兼客儿APP 要求暂停相关服务，并向公安机关报案。您理解兼客儿APP 对您的请求采取行动需要合理时间，兼客儿APP 对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担任何责任。</p>
	         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 五、用户信息的合理使用</p>
	         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.1您同意兼客儿APP 平台拥有通过邮件、短信电话等形式，向在本站注册用户发送信息等告知信息的权利。</p>
	         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.2您了解并同意，兼客儿APP 有权应国家司法、行政等主管部门的要求，向其提供您在兼客儿APP 平台填写的注册信息和交易记录等必要信息。</p>
	         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如您涉嫌侵犯他人知识产权，则兼客儿APP 亦有权在初步判断涉嫌侵权行为存在的情况下，向权利人提供您必要的身份信息。</p>
	         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如您涉嫌侵犯他人知识产权，则兼客儿APP 亦有权在初步判断涉嫌侵权行为存在的情况下，向权利人提供您必要的身份信息。</p>
	         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4.3用户同意兼客儿APP 有权使用用户的注册信息、用户名、密码等信息，登陆进入用户的注册账户，进行证据保全，包括但不限于公证、见证等。</p>
	         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 六、免责条款</p>
	         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.1 本平台仅提供信息对接，发生一切纠纷问题皆与本平台无关，请通过仲裁部门维护各自权益。</p>
    	</div>
    	<div class="app-love-footer" @click='scroll()' :class="{scroll:isShow}">
    		<p>展开全部</p>
    		<i class="yo-ico">&#xf031;</i>
    	</div>
	</div>
</template>

<script>
export default{
	name:"app-register-agree",
	data:function(){
		return {
			isShow:false
		}
	},
	methods:{
		scroll(){
			this.isShow = true
		},
		jumpTocollege(){
			this.$router.push({name:'register'})
		}
	
	}
}
</script>

<style lang="scss" scoped>
.app-register-agree{
	box-sizing: border-box;
	position:fixed;
	top:0;
	left:0;
	height:100%;
	width:100%;
	background:#E5E5E5;
	.app-header{
	    padding: 0px 10px;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    width: 100%;
	    height: .64rem;
	    background: #fd6c23;
	    line-height: .64rem;
	    text-align: center;
	    font-size: 0.22rem;
	    color: #fff;
	    i:nth-child(1){
	        font-size:22px;
	    }
	     
	}
	.app-content{
		flex:1;
		width:3.54rem;
		height:5.1rem;
		margin:0.07rem 0.1rem;
		color:#333;
		h3{
			height:0.45rem;
			line-height:0.45rem;
			font-size:0.22rem;
			text-align: center;
		}
		p{
			min-height:0.18rem;
			line-height: 0.18rem;
			font-size:12px;
			
		}
	}
	.scroll{
		flex:1;
		overflow-y:scroll;
	}
	.app-love-footer{
		display:flex;
		position:fixed;
		left:0;
		bottom:0;
		width:100%;
		height:0.8rem;
		background:#E5E5E5;
		z-index:10;
		flex-direction: column;
		font-size:16px;
		color:#FD6C23;
		align-items: center;
		P{
			padding-top:0.18rem;
		}
		i{
		
			font-size:22px;
		}
		
	}
	
}	


</style>