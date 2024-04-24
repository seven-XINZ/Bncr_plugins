/**
 *  @author victor_li
 *  @name ssh连接
 *  @origin VICTOR
 *  @version 1.2.1
 *  @description ssh连接
 *  @rule ^(ssh)$
 *  @rule ^(Ssh)$
 *  @rule ^(ssh)([^\n]+)
 *  @rule ^(Ssh)([^\n]+)
 *  @admin true
 *  @public false
 *  @disable false
 说明：
 1.支持设置多个主机信息
 2.ssh后不跟数字会让你选择要执行的主机编号
 3.ssh后加数字会直接进入该主机：比如"ssh 3",会直接连接编号3的主机
 4.内置docker更新命令，比如要更新bncr,直接输 '更新 bncr'
 */
/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203c48be5a2f8c4426ea4d4d1abde5714a5752ec092ab5491ca1c6171bcc1faba52ec9beb579c5eed5ed0917b75a18d27df1766aba220bc9cdf10579148868bfc271e90c843f697e60c8fefbb775b71ec51637cf42b5e97b4bdf8fcf7f26387afb8a6fdea91b9fe16ac8a348ffe7d0bf0f2e29c6a6338cce4af5c9b7f286138886fcabf0d6724ad4dc35be40bb11dd1b6e91c7ffa2d4741e3149943be7fd35d18c4b9241912c0dbc3d533d637045ea1ae98370d25263dd3abed14b5e2aa104708612b10b18dd231dbf57fa66b7b4c503a3cee4a6c06da9fc62001fff1858ddf2d400fc6a6013abfe3ff98276888cef551b2d340d8674750da609499c0fb5ef93d16685362bfe929bc27a4a248d513299ce01f64c2210954282e0230820cb6968634cc148635ae2033d269f829688675659bcca5f2718c77858de668ceeeda91cf63f0cd499de078aaeea45b37d27cd2be179e4d6470a4d54791d80d7b9b35fe9cfb6281e684efabaac593cfa538ed2927922ade3003d9aa3495c53653b2fd3e3db2e7dc4c47de9827f7a18815f25919b9e182a0b3fc25f84657707e9a697a90899866d9a763c9569d17a8ca109d621744fa6ee12922b0eb3fce80a60c512c51fad2727dc164e075de73786191a1dd92be971ab79bc369408c6910776572ab31f6e0aad906d5db2cb1635eba75df9e90069a243f4485a204b61d1d5f6153a03c280728c94b88fda4d7e1754459cc99930287d20afdce5b2614ce572400caf20ab99ec72844e83a9d64f166075505ff850142244cb195022d1c2e779e93c3fc91282881de2cfe3854c7701891606e1ea390d7cd91b9587e267c0a851c6947d635dc292c04a90a8755b79cf862e420ed0b89e2899a33ddabdd2614b8e53fd5e9725b8489abbd528a9c1740c88e343f3f1a232eb09ca35b0fd27187e3c978bd3306e28c533876f7c793c08f4765f08e5bbc9a8f04f01f2ecc105652c4cf4ed5e0d3b244d021f201cb032dae539d16bbc84d2ccf5ddefd3d47e27ce344c65951997a9489d8cbbea5d1af5a9c2c060e0521ae5271c458b1a0719afc6fbae8ebaa55ae7f768d7b34a6f1105fd36a6a1e18bb9012d1f37081aaaec68bb8a62470068d9536d398dafc6edaf97cafe20ae298f2b94e4656a3c767da2bbcaf8d4ed366dabb60ec9e8a96d945fa67ef2ef7c0b06623a41ef043152c4e4703411b67ba8ea822ef40f488e2a466428d2efb5a7b70dd72edba35de67dd587441d906129c03bf9ebbd49f4a8f2f2dbce9130df316bc10d99a9e2907953e25380e3289d584a41503dc76a0495e0be205a00e29038c89eaa59ec498c7ea9e8b79a086872a234c9900fe2e5ea338475cbb8bd1feca9edb9735a20632e82b887937383709d2f58bbfbeba9f002ffe30995ce9697cf7073dba58e26839ed56510ca14487214ee32d16de493b7b41d7289026dc920c1f77217bf35c0cead8fcb8a8c296f2ad18dcd3e8465281eea13bdc7f970b487747cd7fe056611220e8e30a4a462f8b7f471ef26dbd790f4db6911724a6cab2e8b7a61ad0dec0c62bd35af8f2e25e268ae57415814f3c7897226ce3d5d7b2e94928148cdcffec231aa1f5725adf03cc32da611d544849f95f4302973ef039885e6279dc31bf29d0b87e60dfbc7f01fe45f876ca2fde77be2699c3668472f14c9c85d554004f4f146d4e37b7e49f9670fa7d7b7d0e62aa4a211487538ec70d833f30d261c0ecc8792a35cb862bf6dca94095a91ae8205466f1367a012dc1916fd4390591c4810ad9a9fe79125ef8bbfb6180bee61d91f404a0df3e5eb7c2d77263209b24ae30986a7679f324e25b9f353012ea859a17b2b8b2cdb9b62d0262b362cfabd727f4663ba3ea54d2671f25a64c00eadb40a02f47bec784c433d64b9e46e3518a4b534b30a43906a2c269c0e2cc0fe32002bf69b0289f733e8e155b14506bd5b1641f8648cd1737c08a697dd9efe68a0cf61a17c30725d274101e715a4e5dcb5bfc043bd31e958fa2ba0e247915c35ae8f28d8c081fd79a27d6bd51ac0fea0cca493ceac460dba49a452ec76f8a8e950743ca00c3cfff29dbdb1ae9044f2788307cd5d4e9edd7d762c25d3bcef75520be6ec90017f6ba59c5677a7e3175afe867332fa347e5a99a0eb658013c09abacc142b073341a7314e826415994feefed1b4fd1a8a57fd485b44b546e69e783ccf6b3efae9c3f9fae45ebc5c1462c549f6690d0fda0c9bc59a894d192b3eb4b5e8579890786bc673b9cbdefe22bdbb2b4abf5d74ccb8457c0117bdfaef7e6e7d1af21912ce587ecf905e17a6cd341215967db76fd758ecd02be082d42d9ba29fa56d692230bf97f779ff5e2d2520294c6e552f2821f176e243ae48e8c2e6f1e2a713c8d2eae484683bd2fa79df3c199d8171150310835d4aa1505235cc21aa9ce8a84d553fbced773b3e4b1032e5ac38098a696447cb59d3fde07fd6432e0f0184792718fcc1510cbd834e6e535e8ed535b5db1faaf3c6dd1392b2c41f320fc7743882f94997a37def33ca6d32c30439779e044f03850ac3f27e270d132e06dea981015541f7b0f927d510956b9c0c711d6b27573e8bcb6b17841bdd21db1e4370d67a7b42dba04a19fea90dd78f46bf8bad1fd1881d51093ecc45f09011b384357cb9b1ba8bca378841d434233686069d7d47665fb56e80dc0633231f1d0a8bd15e10ba7643c878ff70ed6a3c74d7dafb3bd1bf1cf3045da7e49e6f310ad6eba710b5344f4bf3572c38c89e86e7ae6145d6c2949ffacf059bbce0608b6e761e10c6ee77aa2e6408ad64103e704d95bf172e30abc61fe70f73c5abcf28843a3d7aac3313c046726d20aeb6b10b3b42daa7058372ff76da33cbbfaf65d6cb4632ef06969c2eac1d64948bac9728cbc937c5a0d8a3799c960308346d2fbfedba1066c073e726705c883001c15591e4feb1d97c4847db6db9eaecb5e037896fcf7b26d1ddaea67f40fbffa367d446421a9cd04a47826e4893428c12ada0cd21d04a2b1343b4321f3389ed9deb6ebbbc803ec4bc806ca2316b4d548d566611d17ae8379c3487cd3e114e77719b175e90ea44dcf30f2f45182e9df20a8dbe70094c18751bf61ace8e6e848262b33f67a9c4f2de6be8a86b1691a0987550e2ea8288721fb9cf5bff989da406e992a44caeedc9cc7d77ad56031a82a2c9c5774229a9aa1d39f345997c7ad9f695038828b45e69226c6cf9ee0e23b3dc33b8a43ea054ec9cc435a4103836fe358975f6a48cd737983d9522d37adcda69f71aa580d7e8702058d70d33a7f284f478d1af4703a6ccdbe6c52d90209de1d9872c20f98c66e45356469c6e34488e0e911aa45deb5f1ba67b8167fbc1ae891bd9b499427a66a0d6a4374213b8b4f7a2a2619ce8664023ec1fdb3a68f88abd6d474d3806f6d0215c1e763594e4001ffca8930d6a307f0db6ed91d5b6b65e6b63cfee852113c739c935a65a029c9f6a774cc356a1e3320030936f205fc93dfa8e634915b8d9d20e0533755511b050d3157eee4b623b377b67cab9bb679dd8e17536e7ba876d1599e895fa9f091ec68cf724a5f7b0bcf085d55dd6f6d6a6bff4ef8b45bea564539867ce99a62ef6788686b6d339d4282eda550924662c6f14f744d263696677ac0a117d94cf27be453b8f1addc1895ee0bccf95cf11750a9911a8250326d390fb6f6b14d8c6b7e71b9060b0144db02fa0deb37292c7f32cc237d7c51d50910d66d5a1dcfdd37718eae242403e888699184d153e0385ed0ba38655f9d32fd8707106365ff9eb8e531fe6177e8b249bfd3f1653f2996e95377e98122be08e43bb04ee2e5f5fc2a96f0d4252fe76a04140f6f4771ac0d6f88131ab0fc747acd89735c95da6a7f8e344683cc3951d893d387349d84f33c19a29e886d42cca01137eb29dc6b9b475eddd56b6c517b971ad25d07d4984beb8ec465638559387174d059d27a4f704ca5f705d50ac4853209e8b162e93219ce35cf8dda2f440062bef7b697eeb345b1e8f209f26d3e6237674c4f680c74e466073e9ffe8d27559914f35343757a5983cae59049e97e63234eed0d8a38d047f2ed737acdf523861d83f6c0d658275c614868f28d5ff93ee0c5a12204d0dc2e989139b59eed55fd573087ac021de7bae25f9715d47634f15b1a9579e2a31e1ae836da0090b0e4ffe61e9953249da74966492c3495b993b37fef06078f62b306ea5cf8ebd440c82e55e71044dd30b06a2e900e39a4cb9b672f5f41e60bbb6554c5a5625fb486574b01616e403201806588936216bb14b1817e794ff3cf75a311fe713b91128790d02b6b11e05e3c246bfd30a8017dc2f8f8e70fab7b11da4e026cc78dc6a019314e4cf4d7045e4f2f17589867b326687e3ea434bbbdaf200927020c5ea396cd49c31a5ca4d3c305c7cbdb9c573fb3f027cf8ec113e3abbd9cef161eb2f3ccdd657fac798448e521aa5b288c539ef596c92bc136963c6dd27ff04f399ac8a32a94c1eb38df2b49007651ff784f3ebc68a5a9a9bf7b53dff7d9eacb4dbb9cd403c9fa875e6c34eb9f1c276021b0dd4170432daae6c381300d11af60ad05081267d8d877e47bb54c153665142c3b0fd2786eda8ac0a0057f073cc6ab9a172cb58c155d703f903a938b9350ce945ec12bbfcd05a350cdca341699f274d981f82b6cefd90a4657a46c428258dfebc4742d8f6cd26eeb33cffb36eb5feb6e3713272c363c33a0f22c4a2d2f983d4636cbbda18720fcff6977797971b2e210303924ef6d2fddc24be0bb38894650b608ffbac02ee924b80d543fd57e095b23da9714a6e11bdbf8b909598c31862966250651278832b9e4172bd345813002116f9e6eb444f88840c536267d8199affffd3765a8d6b1fc645ba6cb1d1461833b0586617e73139867ce5250f60cc623c5a27c03cea211ac3689db7833c666db7509e44915305dec5c60ae7640453e0308dd9f3162cba8c464d33ec2d2d3b7168368bbf22aafebd0d4b3f10cfede2f85b88cac6843b32fd903493d516b37fb74a69b6df2d7659fe1b96ad37e099996bda33a42b893d1abf0892fd71017f0e02b24eeea49edff0e310a620f3e1499b9111e97267523e00a9a78988ca1a97fe3a7749d9326461d89056c0cdfa5c79f885cd9c28ab8f8e6bfe1a2485a6f8a648acdf00d18029913a85a6b0b625167c120d6c5f3e689a5a66c5a87f29dcaada4e7af6372d9f2eeb8b78a2e79405a5ac0d58fef51759ce188cea22a4c675040c409c9d43e15ffcd8c2609ca6c0e0c28a36ca2fc3b44382a9e54675562935dd7740481d9e5d9f65a390baef04a8634bb45610276461793eef36bcc43a4faeb5d9dbef91328b0d93eaef66bf55ff10db6953faa7eb532d23538075dc7d9fd7b5e772e8136b31b7ee2c3e82fa86bf22279734113a3af3db08eb9e01fec938254e97b77594e7ce0a53813da7a6eff72c57ca361fdc349b8347750ab863d329972c9efc614f9ae44f6cdc8b3918e54c8a528f4c8afc7a7875febf442971504caae3b7bd77a9631ab36b399121e7eeb96cf22b1d0ca6a78cc54d76c1dc6592167fa801685a5951d748987a60af9e6a2710fcb50ef15fd7d9b2e5a2c03f4cd3d8e7b1575fe079df4fb19481ce8b34be7a990b4269d4a103bd5027de5bb4a58323252bc2b6bc7da01b7abd66263c6d5012906669ad12c86d9efc1636f60b4bc52fc2d6ec94eaf1d2a8b8b0418c71b96285df76d495f35a73807e836ab293a547825cef48caa6336b5de582fd53fa371e90ba4f8ecd5583d593cecf7780fde150974a735f5b7ded5d7d166d54464ec732593d1c22f6f595f9211cf8bbd99f23b3aa8f923970ab7b18365a3ff4e47eaf98b2af22489820cdb346eed13a01a41a8fc7bbde0f40b537bf6c6d28683efe8e4e9ad0ce263f194983bcf9a36fb843752725ccf523bd25096ef39dec3261eb28ced6152609ec1e4ce0b92a652d8932967a9897730e83007f0feb112b93448e124631d580dfd5187a47f3759d568e0c95769ee75d587fd17428c641ec3c93c743fa2180f352a6d2906d9680c5eb77668a9c9b63c0542cca1942bd39fa1eac4ac166a2c5bee88074e1d0379bfd81ec578cbb9f752d86f33cbcf25680e0ef11cb81f7ffcd44f2e90c09806a8d76bd47457c697db7100ecc3efa1607d4bd3922130e2e0f7c97642f5b84696e3a100d061616fcf6c2ca4c7ce1c100deccad44d2ba77c24c34858a074f9a675345022ff47d418fbdad285665f56046640aa77537fed39a416a98fecaecfa2626fa2816af35f03f4e89a206672cf6a1d6780169324cbcb1ae48a891a531fdee70ab01886a38b87d2a363b284e33f6030d33d734795165b0290092ef15b31c95127e396ecfa0142592fe1279f586726a117fd61c31482e45e177d15e96ab43bef5e54f2efb261847a5027e69414af4267346e061c470d86c152d93c2ca4fd1b97e8b36a4e193475c92b0c1cf8307eabff7d11f39352bfffefd01026b3a6495cfc09b8bb902d08c680230153e318dfebc9d406cf3ba9834b1050ab5624fcdbe790ff3a18b7211bd2822e147d8c19dcf7281d0c0cb9d42ff4f598c8f30976f61e01e9834c5741feb7f08a1c752116046c8abab7189f2b07d8fb7bd1f5bcb34728c157a2d6f08d0c9c81cabb2e452db3a21e77a9ea9b6c020b0988c6b7d39913949f86a500f503ec5238bd65ce410a7eb53f8bc6a561e8c2fba638f857b6abed63d02184fb46bc3a88134f5202af25b6a60300f08406d0973c49684771140443fff2da47f83b93d2d3d15a54e25d2305b87a52b233f48002955b318ee9b6ca13c48f9ff8f2a3a9f67548c0bf70586d8fb92c3705a506a6a952435c3216ccc6c69590582ac573f066307d180e88c15c994065b1d50f940771e52cae8b220a7e61dbabf7297369a8e299a64b102f364e8a107ab01117e308bc79dd7982c09a1577ebba205eefdb64dea7b47445e2de83dbb7653216f1d33f04eaad549ed4730723692ecdeb577c25f5909c133e7f71793dcf0195b80141ce13d4aa99f2cef389df17619670f0ab5f67a38eaa03346b08fc7b07a5e5d61d3bd2f3879b1a48c69a5100378535ccfcbe1f3c844d1bb84befdd69de22aabcf88bf78468e9613910a821924e5bf70cd3c7f53f52c303f52177e07ec17e6bc5ff728f6b96304a791f3772587b01510c4e36a7f9f08acdf17d15cea841e0e32a0eea48df983c121a4ef5d477e07e4fe052cd7d708cf1e03f905d04310e57b4828f14711421c9e9a98674e705064a14da469ad04be4376c7fb7ec7e8edaac1c0c4629aab0d6342839761238283f693fc18f59d89b6417867b047971f787576c644e3a83fdb6c4f933703cc0bf14400e1fb4b3a0b082429c0ddc353834db4a3915ae0b600fc3805566e85ba92e5152ae8ea7733f389e8b05a071a8cb2a4d5b7638904c6ecc6fa28353ab6b9fd175aeb4a7be8ac0741d8aba034931cab772b6fa5748423cb8e54e0faf4eef1a82848232c531ba5e9aba15209f21bd5edefc0f8a8f73ea1e520a34e8d5e745eabff5ed1c52246663de4fa6c30381fd7dd21de73bb5d98b39531edb9e42f7e15dca6a9344386f7656c96dd54a76e66fc44aac3b046b92ebb7997836f3c582824fb838] */
