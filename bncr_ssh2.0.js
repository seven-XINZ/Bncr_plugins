/**
 *  @author victor_li
 *  @name ssh连接
 *  @origin VICTOR
 *  @version 1.0.3
 *  @description ssh连接
 *  @rule ^sh$
 *  @admin true
 *  @public false
 *  @disable false
 */
 
const { NodeSSH } = require('node-ssh');

const jsonSchema = BncrCreateSchema.object({
    stringArr: BncrCreateSchema.array(BncrCreateSchema.string()).setTitle('设置主机列表').setDescription(`设置多个主机信息,按该格式填写：username@ip@port@password@remark，如：root@127.0.0.1@22@123456@n1`).setDefault(["root@127.0.0.1@22@123456@n1"]),
});


const ConfigDB = new BncrPluginConfig(jsonSchema);
const ssh = new NodeSSH();
module.exports = async s => {
    await ConfigDB.get();
    //自动安装依赖
    sysMethod.testModule(['node-ssh'], { install: true });
    var hostarr = ConfigDB.userConfig['stringArr']
    var remark = await formatRemarks(hostarr)
    await s.reply("【主机列表】\n" + remark + "\n请在30s内输入你要执行命令的主机编号[输入q退出]：") 
    var getinput = await s.waitInput(() => {}, 30);
    if(!getinput || getinput === "null") {
    		return await s.reply("超时退出")
    }
    else {
		var hostnumber = getinput.getMsg()
		if(hostnumber === "q") {
			return await s.reply("退出命令行~")
		}
		else if(isNaN(hostnumber)){
			return await s.reply("输入错误，已退出~")
		}
		else {
			var hostinfo = await parseStringToObject(hostarr[+hostnumber-1])
			console.log(hostinfo)	
		}

    }
    await s.reply("请在30s内输入你要执行的命令[输入q退出]：");
    while (true) {
        let newMsg = await s.waitInput(() => {}, 30);
        if (!newMsg || newMsg === "null") {
            await s.reply("超时退出");
            ssh.dispose();
            return;
        }
        let command = newMsg.getMsg();
        
        
        if (command === "q") {
            await s.reply("退出命令行~");
            ssh.dispose();
            return;
        }
        
        if (command.startsWith("cd ")) {
            var currentPath = command.replace(/^cd\s+/, ''); // 更新当前路径
            await s.reply("切换到目录:" + currentPath + "\n请继续输入[输入q退出]：");
            continue; // 继续下一次循环，不执行命令
        }
        let info = await executeCommand(command, currentPath, s, ssh, hostinfo);
        await s.reply(info + "\n请继续输入[输入q退出]：")  
    }   
}
async function formatRemarks(arr) {
    let formattedRemarks = "";
    arr.forEach((element, index) => {
        const parts = element.split('@');
        const remark = parts[4] ? parts[4] : "";
        formattedRemarks += `${index + 1}.${remark}\n`;
    });
    return formattedRemarks.trim();
}

async function parseStringToObject(str) {
    const [username, host, port, password] = str.split('@');
    const obj = {
        username,
        host,
        port,
        password
    };
    return obj;
}

async function executeCommand(command, path, s, ssh, hostinfo) {
    try {
        await ssh.connect(hostinfo);

        const result = await ssh.execCommand(command, { cwd: path });

        if (result.stdout) {
            return result.stdout  
        } else {
            return result.stderr
        }
    } catch (error) {
        await s.reply('出现错误：' + error.message);
        console.error('出现错误：', error);
    } finally {
        ssh.dispose();
    }
}
