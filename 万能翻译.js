/**
 * @author victor_li
 * @name 万能翻译
 * @origin 胜利者
 * @version 1.0.0
 * @description 博天api支持28种语言翻译
 * @rule ^(fy|翻译)([^\n]+)$
 * @rule ^(动漫)([^\n]+)$
 * @rule ^(真人)([^\n]+)$
 * @rule ^(卡通)([^\n]+)$
 * @admin false
 * @priority 999
 * @disable false
 */

module.exports = async s => {
	/* HideStart */
	const axios = require("axios").default
	let par = encodeURI(s.param(2))
	let res = await axios.request({
		url: "https://api.oick.cn/api/fanyi?text=" + par,
		method: "GET",
		json: true
	})
	if(res.status == 200) {
		console.log(res)
		let data = res.data.data.result
		if(s.param(1) == "动漫") {
			await s.inlineSugar(`rr ${data}`)
		} else if(s.param(1) == "真人") {
			await s.inlineSugar(`ps ${data}`)
		} else if(s.param(1) == "卡通") {
			await s.inlineSugar(`ee ${data}`)
		} else {
			await s.reply(data)
		}
		return 'next'
	}
	else {
		return await s.reply("接口异常~")
	}

	/* HideEnd */	
}
