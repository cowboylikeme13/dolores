setTimeout(function() {id('mu1').pause();id('mu1').load();}, 1);
setTimeout(function() {id('logo').style.display = 'none';登录程序();}, 5900);
剧情对话板 = id('剧情对话板');
剧情头像 = id('剧情头像');
剧情背景 = id('剧情背景');
LJ="";
var 版本号="v0.9.5"
id("版本").innerText="版本"+版本号;
function 登录程序(){
	open();
	读取路径();
	存档信息更新();
	var gameStartButton = id('gameStartButton');
	var gameStart = id('gameStart');
	var gameEnter = id('gameEnter');
	var newGame = id('newGame');
	setTimeout(function() {播放音乐('Music_16');}, 10);
	id("shurulujin").onclick=function(){输入路径();}
	gameStartButton.onclick = function (){
	烧掉截图('images/0.png');gameEnter.style.display = 'block';
	}
	对话打字效果('君成录H5 '+版本号+'\r原作者RIEN伯爵，H5制作猫猫。\r交流群：954493999\r\r本游戏所有版本免费，指路君成录贴吧，倒卖s全家！！！！',undefined,id('versions'));
	newGame.onclick = function () {
		烧掉截图('images/0.png');
		gameEnter.style.display = 'none';
		gameStart.style.display = 'none';
		id('title').style.display = 'block';
		主角.头像 = 0;
		新后宫图形读取程序(id('chushitx'),0,"皇帝");
		id('changeTx').onclick = function (){
			_loc1_ =random(14);
			主角.头像 = _loc1_;
			新后宫图形读取程序(id('chushitx'),_loc1_,"皇帝");
		}
	};
	id('continueGame').onclick = function (){
		id('dudang').style.display = 'block';
		id('ddTittle').innerText = "读档";
		id('ddText').innerText = 存档信息更新();
		id('ddan0').innerText  = "存档1";
		id('ddan1').innerText  = "存档2";
		id('ddan2').onclick = function(){id('dudang').style.display = 'none';};
		id('ddan0').onclick = function(){读档(0);}
		id('ddan1').onclick = function(){读档(4);}}
	id('seHuangdiOver').onclick = function (){
		id('属性栏').style.display = 'none';
		id('setMainCharacter').style.display = 'none';
		id('setHuanghou').style.display = 'block';
		主角.姓氏 = id('huangdixing').value;
		主角.名字 = id('huangdiming').value;
		主角.年号 = id('huangdinianhao').value;
		var _loc2_ = 0;
		新后宫图形读取程序(id('chushitx'),_loc2_,undefined);
		_all_feizi[0].头像 = _loc2_;
		id('changeTx').onclick = function (){
			var _loc2_ = random(627);
			新后宫图形读取程序(id('chushitx'),_loc2_,undefined);
			_all_feizi[0].头像 = _loc2_;
		};
		id('seHuanghouOver').onclick = function (){
			id('taijian').style.backgroundPositionX = '-224px';
			id('taijian').style.width = '159px';
			id('taijianSh').style.display = 'block';
				id('taijianText').innerText = "主子好！\n我是小桂子。您的贴身奴才。\n登基典礼一会就要开始了。\n您准备好了吗？";
				id('taijianCon').onclick = function (){
					id('taijianText').innerText = "接着举行皇后册立大典。\n将原太子妃册立为皇后，\n并预立长子" + _all_child[0].名称 + "为太子。\n一切礼仪都在大臣的安排下顺利完成。";
					_all_feizi[0].家族 = id('huanghouxing').value;
					_all_feizi[0].名字 = id('huanghouxing').value + id('huanghouming').value;
					console.log("1");
					var _loc3_ = 0;
					while(_loc3_ < 后宫名人.length){
						if(后宫名人[_loc3_].名称==id('huanghouming').value){
							if(后宫名人[_loc3_].家族==_all_feizi[0].家族){
								把这个人变成名妃(_all_feizi[0],_loc3_);
							}
							else if(后宫名人[_loc3_].家族==undefined&&_all_feizi[0].家族==""){
								把这个人变成名妃(_all_feizi[0],_loc3_);
							}
						}
						_loc3_ += 1;
					}
					id('taijianCon').onclick = function (){
						id('taijianText').innerText =  主角.姓氏 + 主角.名字 + "皇帝在文武大臣和全国百姓的期待下登上极位。\n宣布年号为" +主角.年号 + "。\n象征一个新的局面即将展开。";
							id('taijianCon').onclick = function (){
							id('tjShBG').style.display = 'none';
							id('taijianSh').style.display = 'none';
							烧掉截图('images/3.png');id('hgdt').style.display = 'block';
							id('属性栏').style.display = 'block';
							皇宫的各个按钮();
							生成默认事件开关的程序();
							太监问声好();
							刷新各个位分剩余名额();
							生成游戏国内人才的程序();
							恢复特殊开关的开关();
							开始生成每个城市数值的程序();
							更新资料();
							每个月的各地收支();
							更新每个月的收益();
							每月奏折面板();
							起始相性分配();
							随机获取三方相性();
							自动补齐三方相性();
							刷新每个人的三方势力();
							正式游戏();
							时辰推进();
							if(国家.皇储id == undefined){国家.皇储id = _all_child[0].id;}
							播放音乐("bird");id("hgdt").scrollTop=200;id("hgdt").scrollLeft=334;
							}
						}
					}
				id('title').style.display = 'none';
				_all_child.push({id:0,_code:8900,序号:0,名称:"少禛",性别:0,母亲:_all_feizi[0].名字,生母:"朱柔则",文化:8,年龄:2,婚:0,婚配:"",病:8000,保:9000,关系:10,幼年:200,头像:1200,统帅:3,武力:1,智力:17,政治:16,魅力:18,清廉:99,野心:10,功勋:0,寿命:999,被过继过:1,封号:"",文质:99,武质:33,魅质:90,朝廷势力:0,后宫势力:0,性情:12,状态:0});
				_all_child.push({id:1,_code:9900,序号:0,名称:"嘉宁",性别:1,母亲:_all_feizi[0].名字,生母:"朱柔则",文化:8,年龄:2,婚:0,婚配:"",病:0,保:0,关系:10,幼年:200,头像:1200,统帅:19,武力:18,智力:6,政治:3,魅力:18,清廉:80,野心:10,功勋:0,寿命:999,被过继过:1,封号:"",文质:80,武质:99,魅质:90,朝廷势力:0,后宫势力:0,性情:14,状态:0});
				更改这个人的皇嗣相性(_all_feizi[0],_all_child[0].名称);
				var _loc4_ = 开启血滴子(0);
				血滴子.push(_loc4_);
				板子加载();
				刷新_all_palace居住情况();
				计算成年子女头像();
				_all_taijian.push({id:_all_taijian.length,名称:"江福海",主子:0,职务:0,能力:3});
				_all_taijian.push({id:_all_taijian.length,名称:"三德子",主子:0,职务:0,能力:3});
				_all_taijian.push({id:_all_taijian.length,名称:"瑞安",主子:0,职务:0,能力:3});
				_all_taijian.push({id:_all_taijian.length,名称:"李莲英",主子:0,职务:0,能力:3});
				_all_taijian.push({id:_all_taijian.length,名称:"周宁海",主子:1,职务:0,能力:3});
				_all_taijian.push({id:_all_taijian.length,名称:"黄规全",主子:2,职务:0,能力:2});
				_all_taijian.push({id:_all_taijian.length,名称:"康禄海",主子:3,职务:0,能力:2});
				_all_gongnv.push({id:_all_gongnv.length,名称:"小桃红",主子:0,职务:1,能力:3});
				_all_gongnv.push({id:_all_gongnv.length,名称:"文娘",主子:0,职务:1,能力:3});
				_all_gongnv.push({id:_all_gongnv.length,名称:"宝娟",主子:0,职务:1,能力:3});
				_all_gongnv.push({id:_all_gongnv.length,名称:"花穗",主子:0,职务:1,能力:2});
				_all_gongnv.push({id:_all_gongnv.length,名称:宫女名字字库[random(宫女名字字库.length)] + 宫女名字字库二[random(宫女名字字库二.length)],主子:1,职务:1,能力:1 + random(3)});
				_all_gongnv.push({id:_all_gongnv.length,名称:宫女名字字库[random(宫女名字字库.length)] + 宫女名字字库二[random(宫女名字字库二.length)],主子:2,职务:1,能力:1 + random(3)});
				_all_gongnv.push({id:_all_gongnv.length,名称:宫女名字字库[random(宫女名字字库.length)] + 宫女名字字库二[random(宫女名字字库二.length)],主子:3,职务:1,能力:1 + random(3)});
				};
			};
}
function 皇宫的各个按钮(){
	var i = 0;
	while(i < className('ziButton').length){
		className('ziButton')[i].onclick = function (){this.parentNode.style.display = 'none';}
		i++;
	}
	新后宫图形读取程序(id('wgxxbg'),777543,"背景");
	新后宫图形读取程序(id('kkksBG'),776289,"背景");
	新后宫图形读取程序(id('qinglouBG'),777000,"背景");
	新后宫图形读取程序(id('紫宸殿BG'),14,"背景");
	新后宫图形读取程序(id('宣政殿BG'),9,"背景");
	新后宫图形读取程序(id('椒房殿BG'),259,"背景");
	新后宫图形读取程序(id('chaguanBG'),152345,"背景");
	id('属性小人').onclick = function (){id('shuxingban').style.display = 'block';}
	var 皇宫 = id('皇宫');
	var 皇宫右 = id('皇宫右');
	var 皇宫左 = id('皇宫左');
	var 皇宫下 = id('皇宫下');
	var 皇宫上 = id('皇宫上');
	var 皇宫背景 = id('皇宫背景');
	var 皇宫地名 = id('皇宫地名');
	var 皇宫的按钮 = id('皇宫的按钮');
	var 宣政殿 = id('宣政殿');
	id('皇宫').style.display = 'block';
	id('宣政殿').onclick = function (){
	  if(主角.当前时辰 == 3){
		 太监说话的程序(4,"皇上。\n夜深了，该休息了。");
	  }
	  else if(主角.当前时辰 !== 0){
		  太监说话的程序(4,"启禀皇上：\n早朝时间已过，请另做安排。");
	  }
	  else{
		 主角._huangyin -= 5;
		 上朝();
	  }
	}
	id('紫宸殿').onclick = function (){
		 if(主角.当前时辰 == 0){
			 太监说话的程序(4,"启禀皇上：\n紫宸殿正在清洁中，现在不适合去。");
		  }
		 else if(主角.当前时辰 == 3){
			 太监说话的程序(4,"皇上。\n夜深了，该休息了。");
		  }
		 else{
			 if(主角.亚瑟 == 1){
				第一次接触王者之剑();
			 }
			 else if(主角.朝旭 == 8 || 主角.朝旭 == 7){
				朝旭与萤_剧情_所谓真假公主的调查结果_执行();
			 }
			 else if(主角.大臣参见 == 0 && 主角.当前时辰 == 1 && random(12) == 0){
				var _loc2_ = random(3);
				if(_loc2_ == 0){ 大臣来参见();}
				if(_loc2_ == 1 && 主角._huangyin == 15){大臣劝上朝();}
				else{言官告发重大案件();}
			 }
			 进入紫宸殿();
		  }
	}
	id('甘露殿').onclick = function (){
		if(主角.武如意 == 1 && 季 !== 2){领舞者();}
		else if(主角.皇子参见 == 0 &&主角.当前时辰 == 1 && random(15) == 0){
			 皇子来参见();}
		甘露殿程序();
	}
	id('椒房殿').onclick = function (){
		var _loc2_ = 0;
	  i = 0;
	  while(i < _all_feizi.length){
		 if(_all_feizi[i].地位 == 0){_loc2_ += 1;_loc3_ = _all_feizi[i];}
		 i++;
	  }
	  if(_loc2_ == 0){小提示("椒房殿空无一人");}
	  else if(_loc2_ == 1){
		  皇后 = _loc3_;
		 椒房殿程序(皇后);
	  }
	}
	id('寿康宫').onclick = function (){
		if(年 >= 10){小提示("寿康宫空无一人");}
		else if(主角.当前时辰 == 0){太监说话的程序(4,"启禀皇上：\n太后清晨不喜被打扰。");}
		else if(主角.当前时辰 == 3){太监说话的程序(4,"启禀皇上：\n太后已经就寝了。");}
		else{学习事件处理(4);}
	}
	id("礼明殿").onclick = function (){
		if(主角.当前时辰 == 3){太监说话的程序(4,"皇上。\n夜深了，该休息了。");}
		else if(主角.朝旭 == 4){朝旭与萤_剧情_公主与侍女_执行();
		}
		else if(主角.有客人[0] == 1 && 主角.有客人[1] !== undefined){礼明殿程序();}
		else{太监说话的程序(4,"启禀皇上：\n礼明殿现在没有使臣等待觐见。");}
	}
	id("后宫").onclick = function (){选择去哪个宫殿(0);}
	id('掖庭').onclick = function (){进入掖庭();if(主角.武如意 == 9 && 季 == 2){掖庭一遇();}
	}
	id('御花园').onclick = function (){游园散心程序();}
	id('冷宫').onclick = function (){进入冷宫();}
	id('储秀阁').onclick = function (){储秀阁程序();}
	id('太医院').onclick = function (){if(国家.事件10 == 1){耀辰推荐李时珍();}太医院程序();}
	id('御书房').onclick = function (){
		进入御书房();
		if(主角.曹夙峰 == 8){曹夙峰否认();}
	}
	id('武英馆').onclick = function (){
		if(主角.展昭 == 1&&主角.当前时辰 == 1){展昭入宫();}
		else if(random(10) == 0&&主角.红星寿 == 0){红星寿_剧情_异样目光_执行();}
		else if(random(10) == 0&&主角.红星寿 == 2&&属性.武力 > 400){红星寿_剧情_鲜血诱惑_执行();}
		进入武英馆();
	}
	id('百工坊').onclick = function (){
		if(年 == 12&&季 == 2&&旬 == "中旬"){太监说话的程序(5,"启禀皇上：\n少府监告假出宫了，百工坊暂时无人掌管。");}
		else if(主角.当前时辰 == 0){太监说话的程序(5,"启禀皇上：\n百工坊正在修理中，现在不适合去。");}
		else{
			if(主角.谢衣 == 1&&年 >= 6&&年 <= 10){乐乐与谢衣初遇();}
			else if(主角.谢衣 == 3&&年 >= 6&&年 <= 10) {乐乐与谢衣二遇();}
			else if(主角.谢衣 == 6){谢衣回来了();}进入少府监程序();}
	}
	id('琴淑阁').onclick = function (){
		if(主角.武如意 == 8 && 主角._relation_sumoer > 30){苏茉尔的推断();}
		进入琴淑阁();}
	id('宝华殿').onclick = function (){
		if(主角.毒死皇子[0] == 1){
			祭拜毒死皇子(主角.毒死皇子[1],主角.毒死皇子[2],主角.毒死皇子[3]);
			主角.毒死皇子[0] = 0;
		}
		宝华殿程序();
	}
	id('青炉房').onclick = function (){ if(主角.当前时辰 == 0){太监说话的程序(4,"启禀皇上：\n青炉房正在加柴升火，现在不适合去。");}
		else if(主角.当前时辰 == 3){太监说话的程序(4,"皇上。\n夜深了，该休息了。");}
		else if(主角.丹药列表 == undefined){青炉房程序();}
		else{太监说话的程序(4,"皇上。\n炼制丹药需要一个月的时间。");}
	}
	id('伶人馆').onclick = function (){
		if(主角.当前时辰 == 3){太监说话的程序(4,"皇上。\n这么晚，戏班都回去了。");}
		else{学习事件处理(5);}
	}
	id('内务府').onclick = function (){物品界面(0);}
	id("丹凤门").onclick =function(){
		if(主角.当前时辰 == 3){太监说话的程序(4,"皇上。\n夜深了，宫门已经下钥了。");}
		else{微服出访程序();}
	}
}
function 正式游戏(){
	外国皇室();生成世界地图();主要面板操作();生成开局太妃();
}
function 上朝(){
	宣政殿内.style.display = 'block';
	id('wenhao1').style.display = 'block';id('wenhao1').onclick = function (){玩法说明(2);}
	属性.健康 -= 5;
	属性.快乐 -= 5;
	if(国家.事件五 == 0){
		开局老臣建议();
	}
	加载进步动画条的说("健康");
	加载进步动画条的说("快乐");
	更新资料(属性栏);
	大殿取消了();
	缓动黑幕();
	id('退朝').onclick = function (){
	id('hukoupucha').style.display = 'block';
	id('huhouTitle').innerText = '退朝';
	id('huhouText').innerText = '确认要退朝吗?';
	id('hkan0').innerText = '确定';
	id('hkan1').innerText = '取消';
	id('hkan0').onclick = function (){
	id('hukoupucha').style.display = 'none';	
	宣政殿内.style.display = 'none';
	i = 0;
	   while(i < _all_rencai.length){
		  if(_all_rencai[i].任务中 == 1){
			 _all_rencai[i].任务中 = 0;
		  }
		  i++;
	   }
	   主角.当前时辰 = 主角.当前时辰 + 1;
	   时辰推进();
	   国家.钦差 = undefined;
	   var _loc2_ = random(10);
		  if(_loc2_ == 0){
			 妃子送吃的事件();
		  }
	 }
	 id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';}
	}
}
function 大殿取消了(){
	id('吏部板').style.display = 'none';id('户部板').style.display = 'none';id('礼部板').style.display = 'none';id('兵部板').style.display = 'none';id('刑部板').style.display = 'none';id('工部板').style.display = 'none';id('吏部取消').onclick = function (){id('吏部板').style.display = 'none';}
}
function 主要面板操作(){
	id('吏部').onclick = function (){大殿取消了();id('吏部板').style.display = 'block';id('吏部取消').onclick = function (){id('吏部板').style.display = 'none';}}
	id('户部').onclick = function (){大殿取消了();id('户部板').style.display = 'block';id('户部取消').onclick = function (){id('户部板').style.display = 'none';}}
	id('礼部').onclick = function (){大殿取消了();id('礼部板').style.display = 'block';id('礼部取消').onclick = function (){id('礼部板').style.display = 'none';}}
	id('兵部').onclick = function (){大殿取消了();id('兵部板').style.display = 'block';id('兵部取消').onclick = function (){id('兵部板').style.display = 'none';}}
	id('刑部').onclick = function (){大殿取消了();id('刑部板').style.display = 'block';id('刑部取消').onclick = function (){id('刑部板').style.display = 'none';}}
	id('工部').onclick = function (){大殿取消了();id('工部板').style.display = 'block';id('工部取消').onclick = function (){id('工部板').style.display = 'none';}}
	id('地方发展').onclick = function (){地方发展界面();}
	id('世界地图').onclick = function (){世界地图();}
	id('人才表').onclick = function (){人才列表显示(0);}
	id('收支表').onclick = function (){id('szb').style.display = 'block';id('szbTittle').innerText = "收支表";收支表程序();}
	id('军事表').onclick = function (){军事列表程序();}
	id('外交表').onclick = function (){外交的总表();}
	id('开科考试').onclick = function (){开科考试函数();}
	id('辞退官员').onclick = function(){外调官员函数();};
	id('易储').onclick = function(){废立皇储();};
	id('祭祀').onclick = function(){祭祀函数();};
	id('外交').onclick = function(){if(主角.有客人[0] == 1 && 主角.有客人[1] !== undefined){小提示("已经安排了使臣在礼明殿等待觐见");}else{外交的总表(2)}};
	id('联姻').onclick = function(){外交的总表(4);};
	id('贸易').onclick = function(){外交的总表(3);};
	id('封爵').onclick = function (){人才列表显示(1);}
	id('劝诱人才').onclick = function (){劝诱人才();}
	id('调换官员').onclick = function (){人才列表显示(34);}
	id('征收钱粮').onclick = function (){地方发展界面(0);}
	id('下发补助').onclick = function (){if(国家.金钱 < 100){小提示("国库空虚，无法下发补助");}else{地方发展界面(1);}}
	id('犒赏军队').onclick = function (){if(主角.犒赏军队 == 1){小提示("本月已经犒赏过了");}else{犒赏军队();}}
	id('移民').onclick = function (){地方发展界面(4);}
	id('武器购买').onclick = function (){if(主角.武器购买 == 1){小提示("已在购买武器了");}else{购买武器函数();}}
	id('粮食交易').onclick = function (){粮食交易();}
	id('训练').onclick = function (){加强训练函数();}
	id('编队').onclick = function (){编队程序();}
	id('发动战争').onclick = function (){战争程序();}
	id('征兵').onclick = function (){
		if(主角.出战 == 1){小提示("军队正在备战");}
		else if(国家.金钱 < 0){小提示("国库已无银两");}
		else{招募士兵面板();}
		}
	id('解甲归田').onclick = function (){解甲归田面板();}
	id('缉拿贪官').onclick = function (){缉拿贪官();}
	id('缉拿反贼').onclick = function (){缉拿反贼();}
	id('处理罪臣').onclick = function (){人才列表显示(36);}
	id('招揽民夫').onclick = function (){if(国家.金钱 < 0){小提示("国库已无银两");}else{招揽民夫面板();}}
	id('解雇民夫').onclick = function (){解雇民夫面板();}
	id('建设行宫').onclick = function (){地方发展界面(2);}
	id('特殊建筑').onclick = function (){特殊建筑面板();}
	id('记录册').onclick = function(){紫宸殿取消了();id('记录册板').style.display = 'block';}
	id('宫内调配').onclick = function(){紫宸殿取消了();id('宫内调配板').style.display = 'block';}
	id('其他活动').onclick = function(){紫宸殿取消了();id('其他活动板').style.display = 'block';}
	id('游戏相关').onclick = function(){紫宸殿取消了();id('游戏相关板').style.display = 'block';}
	id('妃嫔一览').onclick = function(){嫔妃一览程序(0);}
	id('子女一览').onclick = function(){子女一览程序(0);}
	id('皇孙一览').onclick = function(){皇孙一览表(0);}
	id('宫人一览').onclick = function(){宫人一览表(0);}
	id('开销一览').onclick = function(){宫廷行政表(0);}
	id('调配宫人').onclick = function(){宫人程序();}
	id('奇珍异宝').onclick = function(){奇珍宝库程序();}
	id('宫殿迁移').onclick = function(){嫔妃一览程序(5);}
	id('自定位分').onclick = function(){自定义位分程序();}
	id('后山狩猎').onclick = function(){打猎程序();}
	id('召见王爷').onclick = function(){召见王爷程序();}
	id('浩荡出巡').onclick = function(){浩荡出巡程序();}
	id('宴请大臣').onclick = function(){宴请大臣程序();}
	id('大事笔记').onclick = function(){大事笔记程序();}
	id('剧情总览').onclick = function(){剧情总览程序();};
	id('禅让').onclick = function(){禅让的哪个程序();}
	id('存档').onclick = function(){
		if(主角.出战 == 0){
			id('dudang').style.display = 'block';
			id('ddTittle').innerText = "存档";
			id('ddText').innerText = 存档信息;
			id('ddan0').innerText  = "存档1";
			id('ddan1').innerText  = "存档2";
			id('ddan2').onclick = function(){id('dudang').style.display = 'none';};
			id('ddan0').onclick = function(){存档放入(1);}
			id('ddan1').onclick = function(){存档放入(2);}
		}
		else if(主角.出战 == 1){小提示("攻打敌人期间不能存档。");}
	}
	id('读档').onclick = function(){
		id('dudang').style.display = 'block';
		id('ddTittle').innerText = "读档";
		id('ddText').innerText = 存档信息;
		id('ddan0').innerText  = "存档1";
		id('ddan1').innerText  = "存档2";
		id('ddan2').onclick = function(){id('dudang').style.display = 'none';};
		id('ddan0').onclick = function(){读档(1);}
		id('ddan1').onclick = function(){读档(2);}
	}
}
function 进入紫宸殿(){
 id('离开紫宸殿').onclick = function(){id('紫宸殿内').style.display = 'none';紫宸殿取消了();}
 id('紫宸殿内').style.display = 'block';紫宸殿取消了();
} 
function 紫宸殿取消了(){id('记录册板').style.display = 'none';id('宫内调配板').style.display = 'none';id('其他活动板').style.display = 'none';id('游戏相关板').style.display = 'none';}
function 人才列表显示(参数,城市,女儿数据){
	id("gyjw").innerText="爵位";
	id("gyzc").innerText="忠诚";
   yilanbiao.style.display = 'block';
   var 临时人才列表 = [];
   if(参数 == 0 || 参数 == 26 || 参数 == 27 || 参数 == 28 || 参数 == 29|| 参数 == 88|| 参数 == 666){
	  var _loc5_ = 0;
	  while(_loc5_ < _all_rencai.length){
		 临时人才列表.push(_all_rencai[_loc5_]);
		 _loc5_ += 1;
	  }
   }
   else if(参数 == 1){
	  _loc5_ = 0;
	  while(_loc5_ < _all_rencai.length){
		 if(_all_rencai[_loc5_].爵位 < 6 && _all_rencai[_loc5_].任务中 !== 4){
			临时人才列表.push(_all_rencai[_loc5_]);
		 }
		 _loc5_ += 1;
	  }
   }
	else if(参数 == 25){
		_loc5_ = 0;
		while(_loc5_ < _all_rencai.length){
			if(_all_rencai[_loc5_].爵位 < 6 && _all_rencai[_loc5_].性别 == 0 && _all_rencai[_loc5_].结婚 == 0){
				临时人才列表.push(_all_rencai[_loc5_]);
			}
			_loc5_ += 1;
		}
   }
   else if(参数 == 31){
	  _loc5_ = 0;
	  while(_loc5_ < _all_rencai.length){
		 if(_all_rencai[_loc5_].任务中 == 0){
			临时人才列表.push(_all_rencai[_loc5_]);
		 }
		 _loc5_ += 1;
	  }
   }
   else if(参数 == 34){
	  _loc5_ = 0;
	  while(_loc5_ < _all_rencai.length){
		 if(_all_rencai[_loc5_].官职 !== undefined&&_all_rencai[_loc5_].官职 !=="将军"){
			临时人才列表.push(_all_rencai[_loc5_]);
		 }
		 _loc5_ += 1;
	  }
   }
   else if(参数 == 35){
	  _loc5_ = 0;
	  while(_loc5_ < _all_rencai.length){
		 if(_all_rencai[_loc5_].官职 == undefined &&_all_rencai[_loc5_].任务中 == 0){
			临时人才列表.push(_all_rencai[_loc5_]);
		 }
		 _loc5_ += 1;
	  }
   }
   else if(参数 == 36){
	  _loc5_ = 0;
	  while(_loc5_ < _all_rencai.length){
		 if(_all_rencai[_loc5_].任务中 == 4){
			临时人才列表.push(_all_rencai[_loc5_]);
		 }
		 _loc5_ += 1;
	  }
   }
   else{
		_loc5_ = 0;
		while(_loc5_ < _all_rencai.length){
			if(_all_rencai[_loc5_].官职 == undefined && _all_rencai[_loc5_].任务中 == 0){
			   临时人才列表.push(_all_rencai[_loc5_]);
			}
			_loc5_ += 1;
		 }
	  }
   序列 = 0;
	临时人才列表.sort(compare("地位",0));
	更新人才信息(参数,临时人才列表,序列,城市,女儿数据)
	id('yilanbiaoqian').onclick = function(){
		if(序列 > 0 ){
		序列 -= 1;
		更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
		}
	};
	id('yilanbiaohou').onclick = function(){
		if(序列 < Math.round(临时人才列表.length / 10))
		{
			序列 += 1;
			更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
		}
	  };
	var 开关 = 0;
	id('gynl').onclick = function(){
		if(开关 == 0){排序计算程序(临时人才列表,"年龄",0);开关 = 1;}
		else{排序计算程序(临时人才列表,"年龄",1);开关 = 0;}
		序列 = 0;
		更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
	   };
	id('gyts').onclick = function(){
		if(开关 == 0){排序计算程序(临时人才列表,"统帅",0);开关 = 1;}
		else{排序计算程序(临时人才列表,"统帅",1);开关 = 0;}
		序列 = 0;
		更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
	   };
	id('gywl').onclick = function(){
		if(开关 == 0){排序计算程序(临时人才列表,"武力",0);开关 = 1;}
		else{排序计算程序(临时人才列表,"武力",1);开关 = 0;}
		序列 = 0;
		更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
	   };
	id('gyzl').onclick = function(){
		 if(开关 == 0){排序计算程序(临时人才列表,"智力",0);开关 = 1;}
		 else{排序计算程序(临时人才列表,"智力",1);开关 = 0;}
	 	序列 = 0;
		 更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
		};
	id('gyzz').onclick = function(){
		if(开关 == 0){排序计算程序(临时人才列表,"政治",0);开关 = 1;}
		else{排序计算程序(临时人才列表,"政治",1);开关 = 0;}
		序列 = 0;
		更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
	   };
	id('gyml').onclick = function(){
		if(开关 == 0){排序计算程序(临时人才列表,"魅力",0);开关 = 1;}
		else{排序计算程序(临时人才列表,"魅力",1);开关 = 0;}
		序列 = 0;
		更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
	   };
	id('gypj').onclick = function(){
		if(开关 == 0){排序计算程序(临时人才列表,"地位",0);开关 = 1;}
		else{排序计算程序(临时人才列表,"地位",1);开关 = 0;}
		序列 = 0;
		更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
	   };
	id('gyjw').onclick = function(){
		if(开关 == 0){排序计算程序(临时人才列表,"爵位",0);开关 = 1;}
		else{排序计算程序(临时人才列表,"爵位",1);开关 = 0;}
		序列 = 0;
		更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
	   };
	 id('gyzc').onclick = function(){
		 if(开关 == 0){排序计算程序(临时人才列表,"忠诚",0);开关 = 1;}
		 else{排序计算程序(临时人才列表,"忠诚",1);开关 = 0;}
	 	序列 = 0;
		 更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
		};
		if(参数==0){
			id('citui').style.display = 'block';id('citui').innerText="切换";
			id('citui').onclick = function(){人才列表显示(666);}
		}
		else if(参数==666){id('citui').innerText="切换";
			id("gyjw").innerText="野心";
			id("gyzc").innerText="清廉";
			id('citui').style.display = 'block';
			id('citui').onclick = function(){人才列表显示(0);}
			id('gyzc').onclick = function(){
				if(开关 == 0){排序计算程序(临时人才列表,"清廉",0);开关 = 1;}
				else{排序计算程序(临时人才列表,"清廉",1);开关 = 0;}
				序列 = 0;
				更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
			};
			id('gyjw').onclick = function(){
				if(开关 == 0){排序计算程序(临时人才列表,"野心",0);开关 = 1;}
				else{排序计算程序(临时人才列表,"野心",1);开关 = 0;}
				序列 = 0;
				更新人才信息(参数,临时人才列表,序列,城市,女儿数据);
			};
		}
		else{
			id('citui').style.display = 'none';
		}
}
function 更新人才信息(参数,临时人才列表,序列,城市,女儿数据){
	var _loc4_ = 0;
	while(_loc4_ < className('liebiaoxiang').length){
	var i = 序列 * 10 + _loc4_;
	var _loc5_ = 临时人才列表[i];
	if(_loc5_ == undefined){className('liebiaoxiang')[_loc4_].style.display = 'none';}
	else{
		className('liebiaoxiang')[_loc4_].style.display = 'block';
		if(_loc5_._code >=1000&&_loc5_._code<=6999){className('l1')[_loc4_].style.color="#a9f0cf"}
		else{className('l1')[_loc4_].style.color="#ffffff"}
		className('l1')[_loc4_].innerText = _loc5_.名字;
		className('l2')[_loc4_].innerText = _loc5_.官职;
		className('l3')[_loc4_].innerText = _loc5_.年龄;
		className('l4')[_loc4_].innerText = _loc5_.统帅;
		className('l5')[_loc4_].innerText = _loc5_.武力;
		className('l6')[_loc4_].innerText = _loc5_.智力;
		className('l7')[_loc4_].innerText = _loc5_.政治;
		className('l8')[_loc4_].innerText = _loc5_.魅力;
		className('l9')[_loc4_].innerText = _loc5_.品阶;
		className('l10')[_loc4_].innerText = 爵位名称[_loc5_.爵位];
		className('l11')[_loc4_].innerText = _loc5_.忠诚;
		if(_loc5_.官职 == undefined){className('l2')[_loc4_].innerText = '赋闲';}
		if(_loc5_.爵位 == 6 && _loc5_.官职 == undefined){className('l2')[_loc4_].innerText = '驸马督尉';}
		if(参数==666){
		className('l10')[_loc4_].innerText = _loc5_.野心;
		className('l11')[_loc4_].innerText = _loc5_.清廉;}
		}
		className('liebiaoxiang')[_loc4_].取 =  _loc5_;
		className('liebiaoxiang')[_loc4_].onmouseover = function(){
		id('liebiaotx').style.display = 'block';
		if(this.取._code !== undefined){出现这个人的头像(id('liebiaotx'),this.取);
		}
		else{新后宫图形读取程序(id('liebiaotx'),this.取,"特殊");} 
		}
		className('liebiaoxiang')[_loc4_].onmouseleave = function(){id('liebiaotx').style.display = 'none';}
		className('liebiaoxiang')[_loc4_].onclick = function(){
			if(参数 == 1){
			给谁封爵(this.取);
			return undefined;
			}
			if(参数 == 0 ||参数 == 666){
			官员详情展示(this.取);
			return undefined;
			}
			if(参数 == 2){
				征缴粮食拉动条(城市,this.取);
			}
			else if(参数 == 7){
				治安巡查界面(城市,this.取);
			}
			else if(参数 == 12){
			   金钱上交拉动条(城市,this.取);
			}
			else if(参数 == 13){
			   粮食上交拉动条(城市,this.取);
			}
			else if(参数 == 14){
			   金钱下发拉动条(城市,this.取);
			}
			else if(参数 == 15){
			   粮食下发拉动条(城市,this.取);
			}
			else if(参数 == 16){
			   购买武器选择(this.取);id('数值拉动面板').style.display = 'none';
			}
			else if(参数 == 17){
			   招募士兵拉动条(this.取);
			}
			else if(参数 == 18){
			   解甲归田拉动条(this.取);
			}
			else if(参数 == 19){
			   新建队伍(this.取);
			}
			else if(参数 == 20){
			   缉拿谋反官员(this.取);
			}
			else if(参数 == 21){
			   缉拿贪污官员(this.取);
			}
			else if(参数 == 22){
			   招揽民夫拉动条(this.取);
			}
			else if(参数 == 23){
			   解雇民夫拉动条(this.取);
			}
			else if(参数 == 24){
			   在这里建设行宫(城市,this.取);
			}
			else if(参数 == 25){
			   进入选择公主名号(女儿数据,this.取);
			}
			else if(参数 == 26){
			   赏赐这个大臣确定(this.取,城市);
			}
			else if(参数 == 27){
			   查看血滴子详情程序(1,this.取,"暗查大臣");
			}
			else if(参数 == 28){
			   赏赐这个大臣成药确定(this.取,城市);
			}
			else if(参数 == 29){
			   赏赐这个大臣(this.取,城市);
			}
			else if(参数 == 30){
			   移民拖动(this.取,城市,女儿数据);
			}
			else if(参数 == 31){
			   开始劝诱(this.取,城市);
			}
			 else if(参数 == 32){
			   买入粮食(this.取);
			}
			else if(参数 == 33){
			   卖出粮食(this.取);
			}
			else if(参数 == 35){
				换成这个官员(this.取,城市);
			}
			else if(参数 == 80){
			   if(城市.委任者[0] !== undefined){城市.委任者[0].任务中 = 0;}
			   城市.委任者[0] = this.取;
			   this.取.任务中 = 1;
			   地方委任(城市);
			}
			else if(参数 == 81){
			   if(城市.委任者[1] !== undefined){城市.委任者[1].任务中 = 0;}
			   城市.委任者[1] = this.取;
			   this.取.任务中 = 1;
			   地方委任(城市);
			}
			else if(参数 == 82){
			   if(城市.委任者[2] !== undefined){城市.委任者[2].任务中 = 0;}
			   城市.委任者[2] = this.取;
			   this.取.任务中 = 1;
			   地方委任(城市);
			}
			else if(参数 == 83){
			   if(城市.委任者[3] !== undefined){城市.委任者[3].任务中 = 0;}
			   城市.委任者[3] = this.取;
			   this.取.任务中 = 1;
			   地方委任(城市);
			}
			else if(参数 == 84){ 
			   if(城市.委任者[4] !== undefined){城市.委任者[4].任务中 = 0;}
			   城市.委任者[4] = this.取;
			   this.取.任务中 = 1;
			   地方委任(城市);
			}
			else if(参数 == 85){
			   if(城市.委任者[5] !== undefined){城市.委任者[5].任务中 = 0;}
			   城市.委任者[5] = this.取;
			   this.取.任务中 = 1;
			   地方委任(城市);
			}
			else if(参数 == 86){
			   if(城市.委任者[6] !== undefined){城市.委任者[6].任务中 = 0;}
			   城市.委任者[6] = this.取;
			   this.取.任务中 = 1;
			   地方委任(城市);
			   }
			else if(参数 == 88){
				缓动黑幕();
				批量赏赐界面(0,this.取,"大臣");
			}
			yilanbiao.style.display = 'none';
			if(参数 == 34){
		   		人才列表显示(35,this.取);
			}
			else if(参数 == 36){
		   		决定处理结果(this.取);
			}
		}
	_loc4_ += 1;
	}
}
function 官员详情展示(取数据){
	id('介绍图an2').style.display = 'none';
	id('介绍图an1').style.display = 'none';
	id('介绍图an0').style.display = 'none';
	id('介绍图an2').style.display = 'block';id('介绍图an2').innerText = "家眷";
	id('介绍图').style.display = 'block';id('介绍图an3').innerText = "关闭";
	出现这个人的头像(id('介绍图头像'),取数据);
	if(取数据._code !== undefined){
		出现这个人的头像(id('介绍图头像'),取数据);
	}
	else{
		新后宫图形读取程序(id('介绍图头像'),取数据.头像,"特殊")
	}
   id('介绍图名字').innerText = 取数据.名字;
   id('介绍图介绍').innerText = '文化圈：' + _all_nation[取数据.文化].文化;
   id('介绍图介绍').innerText += "\n性  格：" + 出现性格(取数据);
   id('介绍图介绍').innerText += "\n所  在：";
	if(取数据.任务中 == 2){id('介绍图介绍').innerText += _all_city[取数据.委任城市].名称 + "委任";}
	else if(取数据.任务中 == 3){id('介绍图介绍').innerText += "军队"}
	else if(取数据.任务中 == 4){id('介绍图介绍').innerText += "刑部大牢"; }
	else{id('介绍图介绍').innerText += "中央";}
   id('介绍图介绍').innerText += "\n介  绍：\n";
   id('介绍图介绍').innerText += 导出介绍(取数据);
   id('介绍图an3').onclick = function(){id('介绍图').style.display = 'none';}
   id('介绍图an2').onclick = function(){if(取数据.爵位==6){家眷一览表(3,取数据);}else{家眷一览表(2,取数据);} yilanbiao.style.display = 'none';id('介绍图').style.display = 'none';}
   }
function 收支表程序(){
   var _loc9_ = 0;
   var _loc10_ = 0;
   var _loc11_ = 0;
   var _loc14_ = 0;
   var _loc12_ = 0;
   var _loc18_ = 0;
   var _loc4_ = 0;
   var _loc25_ = 0;
   var _loc2_ = 0;
   while(_loc2_ < _all_city.length){
	  if(_all_city[_loc2_].归属 == 8){
		 _loc9_ = _loc9_ + 1;
		 _loc10_ += _all_city[_loc2_].人口;
		 _loc11_ += _all_city[_loc2_].治安;
		 _loc14_ += _all_city[_loc2_].金钱;
		 _loc12_ += _all_city[_loc2_].粮食;
	  }
	  _loc2_ = _loc2_ + 1;
   }
   临时文 = undefined;
   var _loc15_ = [0,2000,4000,8000,16000,30000,1000,0];
   var _loc13_ = 0;
   _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
	  if(_all_rencai[_loc2_].名字 !== undefined){
		 _loc4_ += 所有俸禄[_all_rencai[_loc2_].地位];
		 _loc4_ += _loc15_[_all_rencai[_loc2_].爵位];
		 _loc13_ += _all_rencai[_loc2_].清廉;
	  }
	  _loc2_ = _loc2_ + 1;
   }
   _loc18_ = Math.round(_loc13_ / _all_rencai.length);
   var _loc22_ = 国家.士兵 * 10;
   var _loc6_ = 0;
   var _loc8_ = 国家.士兵 * 10;
   _loc2_ = 0;
   while(_loc2_ < _all_army.length){
	  _loc6_ += _all_army[_loc2_].兵力 * 15;
	  _loc8_ += _all_army[_loc2_].兵力 * 10;
	  _loc2_ = _loc2_ + 1;
   }
   var _loc17_ = 国家.民夫 * 10;
   var _loc19_ = 国家.民夫 * 10;
   var _loc23_ = 国家.供药局 * 100000;
   var _loc20_ = 计算后宫开销();
   var _loc7_ = 0;
   _loc2_ = 0;
   while(_loc2_ < _all_child.length){
	  if(_all_child[_loc2_].婚 == 0){
		 if(_all_child[_loc2_].清廉 == undefined || _all_child[_loc2_].清廉 == NaN){
			_all_child[_loc2_].清廉 = random(99);
		 }
		 _loc7_ += Math.round(30000 * (1 - _all_child[_loc2_].清廉 / 100));
	  }
	  _loc2_ = _loc2_ + 1;
   }
   id('szbText').innerText = "回禀皇上：";
   id('szbText').innerText += "我国目前有" + _loc9_ + "个州府。";
   id('szbText').innerText += "\n国库现有白银：" + Math.round(国家.金钱 / 10000) + "万两";
   id('szbText').innerText += "\n总人口：" + Math.round(_loc10_ / 10000) + "万。";
   id('szbText').innerText += "\n平均治安：" + _loc11_/_loc9_ + "，";
   id('szbText').innerText += "总府库：" + _loc14_ + "两，";
   id('szbText').innerText += "总积粮：" + _loc12_ + "石。";
   id('szbText').innerText += "\n官员总俸禄：" + _loc4_ + "。";
   id('szbText').innerText += "官员平均清廉：" + _loc18_ + "。";
   id('szbText').innerText += "\n后宫行政费用：" + Math.round(_loc20_ / 10000) + "万两。";
   id('szbText').innerText += "子女养育费用：" + Math.round(_loc7_ / 10000) + "万两。";
   id('szbText').innerText += "供药局费用：" + Math.round(_loc23_ / 10000) + "万两。";
   id('szbText').innerText += "\n闲散士兵军饷：" + Math.round(_loc22_ / 10000) + "万两，";
   id('szbText').innerText += "军队士兵军饷：" + Math.round(_loc6_ / 10000) + "万两，";
   id('szbText').innerText += "军粮消耗：" + Math.round(_loc8_ / 10000) + "万石。";
   id('szbText').innerText += "\n民夫工资：" + Math.round(_loc17_ / 10000) + "万两。";
   id('szbText').innerText += "民夫粮食消耗：" + Math.round(_loc19_ / 10000) + "万石。";
   var _loc5_ = 0;
   var _loc21_ = _loc19_ + _loc8_;
   _loc5_ += _loc22_;
   _loc5_ += _loc6_;
   _loc5_ += _loc17_;
   _loc5_ += _loc20_;
   _loc5_ += _loc23_;
   _loc5_ += _loc7_;
   _loc5_ += _loc4_;
   var _loc24_ = - _loc5_;
   id('szbText').innerText += "\n本季中央支出：" + Math.round(_loc5_ / 10000) + "万两，粮食" + Math.round(_loc21_ / 10000) + "万石。\n";
   id('szbText').innerText += 显示用的地方收成表;
   var _loc16_ = [];
   _loc16_.总收入 = _loc24_;
   _loc16_.总耗粮 = _loc21_;
   return _loc16_;
}
function 世界地图(){
	 id('map').style.display = 'block';
	 id('mapgb').onclick = function(){id('map').style.display = 'none';id('mapxx').style.display = 'none';
	 id('map').style.backgroundPosition = '-1200px -150px';
	 id('citys').style.transform= 'none';}
	 id('cityxxgb').onclick = function(){id('mapxx').style.display = 'none';}
	 var _loc1_ = 0;
	 var _loc2_ = 0
	 var _loc3_ = -150;
	 var _loc4_ = -1200;
	 id('cityshang').onclick = function(){
		 if(_loc1_< 150){
		 _loc1_ += 50;
		 _loc3_ += 50;
		 id('map').style.backgroundPositionY = _loc3_ + 'px';
		 id('citys').style.transform= 'translate(' + _loc2_ + 'px,'+ _loc1_ + 'px)';}else{}
	 }
	 id('cityxia').onclick = function(){
	 		if(_loc1_> -150){
	 		_loc1_ -= 50;
	 		_loc3_ -= 50;
	 		id('map').style.backgroundPositionY = _loc3_ + 'px';
	 		id('citys').style.transform= 'translate(' + _loc2_ + 'px,'+ _loc1_ + 'px)';}else{}
	 }
	 id('cityyou').onclick = function(){
	 		if(_loc2_ > 0){
	 		_loc2_ -= 100;
	 		_loc4_ -= 100;
	 		id('map').style.backgroundPositionX = _loc4_ + 'px';
	 		id('citys').style.transform= 'translate(' + _loc2_ + 'px,'+ _loc1_ + 'px)';}else{}
	 }
	 id('cityzuo').onclick = function(){
	 		if(_loc2_ < 1200){
	 		_loc2_ += 100;
	 		_loc4_ += 100;
	 		id('map').style.backgroundPositionX = _loc4_ + 'px';
	 		id('citys').style.transform= 'translate(' + _loc2_ + 'px,'+ _loc1_ + 'px)';}else{}
	 }
	var i = 0;
	while(i < 47){
		var _loc5_ = 0;
		if(_all_city[i].归属 == 8 || _all_city[i].归属 == 23){_loc5_ = '-54px';}
		if(_all_nation[_all_city[i].归属].外交 == 0){_loc5_ = '-108px';}
		if(_all_nation[_all_city[i].归属].外交 == 2){_loc5_ = '-162px';}
		className("cityIcon1")[i].style.backgroundPositionX = _loc5_;
		var _loc6_ = '#71e200';
		if(_all_city[i].归属 == 8 || _all_city[i].归属 == 23){_loc6_ = '#ffff00';}
		if(_all_nation[_all_city[i].归属].外交 == 0){_loc6_ = '#de0000';}
		if(_all_nation[_all_city[i].归属].外交 == 2){_loc6_ = '#0055ff';}
		className("cityText")[i].style.color = _loc6_;
		className('cityIcon')[i].取 = _all_city[i]; 
	  	className('cityIcon')[i].onclick = function(){
		id('mapxx').style.display = 'block';
		id('cityxxbg').src = LJ+'azcPic_Jyou/' + this.取.id + '.jpg';
		id('cityxx').innerText = this.取.名称;
		id('cityxx').innerText += '\n\n类型：' + this.取.类型;
		id('cityxx').innerText += '\n人口：' + this.取.人口;
		id('cityxx').innerText += '\n归属：' + _all_nation[this.取.归属].名称;
		}
	  	i++;
	 }
 }
function 生成世界地图(){
	var i = 0;
	 while(i < 47){
	 	var city = document.createElement('div');
	 	city.className = 'cityIcon';
	 	city.style.left = _all_city[i].l + 'px';
	 	city.style.top = _all_city[i].t + 'px';
	 	city.style.backgroundPositionX = -54 * i + 'px';
		city.style.backgroundPositionY = 0; 
		city.style.cursor = 'pointer';
	 	id('citys').appendChild(city);
	 	i++;
	}
	var i = 0;
	while(i < 47){
		var city1 = document.createElement('div');
		city1.className = 'cityIcon1';
		city1.style.backgroundPositionY = 0; 
		className('cityIcon')[i].appendChild(city1);
		var cityText = document.createElement('span');
		cityText.className = 'cityText';
		cityText.innerText = _all_city[i].名称;
		className('cityIcon')[i].appendChild(cityText);
		i++;
	}
}
function 军事列表程序(){
   id('junshibiao').style.display = 'block';
   id('jssm').style.display = 'block';
   id('jssmline').style.display = 'block';
   id('js3').style.display = 'none';
   id('js1').innerText = "队名";
   id('js2').innerText = "将军";
   id('js4').innerText = "兵力";
   id('js5').innerText = "统帅";
   id('js6').innerText = "武力";
   id('js7').innerText = "品阶";
   id('js8').innerText = "兵种";
   id('js9').innerText = "士气";
   id('jsTittle').innerText = "军队列表";
   id('jssm').innerText = "国家现有散兵" + 国家.士兵 + "，\n朴刀库存" + 国家.朴刀 + "，长枪库存" + 国家.长枪 + "，弓弩库存" + 国家.弓弩 + "，\n铁炮库存" + 国家.铁炮 + "，战马库存" + 国家.战马 + "。";
	var 临时队伍列表 = [];
	var _loc5_ = 0;
	while(_loc5_ < _all_army.length){
		临时队伍列表.push(_all_army[_loc5_]);
		_loc5_ += 1;
	}
   序列 = 0;
   刷新队伍信息(临时队伍列表,序列);
   id('junshiqian').onclick = function(){
	  if(序列 > 0){
		 序列 -= 1;
		 刷新队伍信息(临时队伍列表,序列);
	  }
   };
   id('junshihou').onclick = function(){
	  if(序列 < Math.round(临时队伍列表.length / 7)){
		 序列 += 1;
		 刷新队伍信息(临时队伍列表,序列);
	  }
   };
}
function 刷新队伍信息(临时队伍列表,序列){
   var _loc3_ = 0;
   while(_loc3_ < className('junshilbx').length){
	  var _loc2_ = 临时队伍列表[序列 * 7 + _loc3_];
	  var _loc1_ = className('junshilbx')[_loc3_];
	  if(_loc2_ == undefined || _loc3_ == 7 || _loc3_ == 8 || _loc3_ == 9){
		 className('junshilbx')[_loc3_].style.display = 'none';
	  }
	  else{
		 className('j1')[_loc3_].style.color="#ffffff"
		 className('junshilbx')[_loc3_].style.display = 'block';
		 className('j1')[_loc3_].innerText = _loc2_.队名;
		 className('j2')[_loc3_].innerText = _loc2_.将军.名字;
		 className('j3')[_loc3_].innerText = "";
		 className('j5')[_loc3_].innerText = _loc2_.将军.统帅;
		 className('j6')[_loc3_].innerText = _loc2_.将军.武力;
		 className('j7')[_loc3_].innerText = _loc2_.将军.品阶;
		 className('j8')[_loc3_].innerText = 计算是哪种兵种(_loc2_.兵种);
		 className('j9')[_loc3_].innerText = _loc2_.训练度;
		 if(_loc2_.出战中 == 1){
			className('j4')[_loc3_].innerText = "出战中";
		 }
		 else{
			className('j4')[_loc3_].innerText = _loc2_.兵力 + "/" + _loc2_.将军.带兵上限;
		 }
	  }
	  _loc3_ = _loc3_ + 1;
   }
}
function 甘露殿程序(){
	id('neishiMB').style.display = 'block';
	id('neishiBG').style.display = 'block';
	id('neishi2').style.display = 'block';
	id('nsan4').style.display = 'block';id('nsan5').style.display = 'block';id('nsan6').style.display = 'block';id('nsan7').style.display = 'none';
	新后宫图形读取程序(id('neishiBG'),2,"背景");
	id('neishiTitle').innerText = '甘露殿';
	id('nsan0').innerText = '翻牌子';
	id('nsan1').innerText = '安排宫女';
	id('nsan2').innerText = '独自休息';
	id('nsan3').innerText = '更衣';
	id('nsan4').innerText = '彤史';
	id('nsan5').innerText = '后宫记事';
	id('nsan6').innerText = '睡一整天';
	id('neishiText').innerText = '皇上需要安排妃嫔侍寝还是独自休息？\n翻牌子：召幸可侍寝的妃子增加体力\n安排宫女：召幸新的宫女增加体力\n独自休息：增加健康和体力\n更衣：此功能未完成';
	id('nsan1').onclick = function (){id('neishiMB').style.display = 'none';安排宫女程序();};
	id('nsan0').onclick = function (){id('neishiMB').style.display = 'none';选择去哪个宫殿(5)};
	id('nsan2').onclick = function (){id('neishiMB').style.display = 'none';独自休息功能();};
	id('nsan3').onclick = function (){小提示("未完善");};
	id('nsan4').onclick = function (){大事笔记程序(1);};
	id('nsan5').onclick = function (){大事笔记程序(2);};
	id('nsan6').onclick = function (){id('neishiMB').style.display = 'none';学习事件处理(9);属性.健康 += 20;
	if(属性.健康 > 100){
		属性.健康 = 100;
	}};
}
function 独自休息功能(){
	学习事件处理(1);
	属性.健康 += 20;
	if(属性.健康 > 100){
		属性.健康 = 100;
	}
	更新资料();
}
function 安排宫女程序(){
	   var 是否是历史美女 = random(4);
	   var _loc3_ = [];
	   var _loc1_ = 0;
	   while(_loc1_ < 后宫名人.length){
		  if(后宫名人[_loc1_].用过 == undefined){
			 _loc3_.push(后宫名人[_loc1_]);
		  }
		  _loc1_ += 1;
	   }
	   if(是否是历史美女 == 1 && _loc3_.length > 0){
		  var _loc5_ = random(_loc3_.length);
		  var _loc2_ = _loc3_[_loc5_];
		  var _loc17_ = random(6) + 16;
		  var _loc18_ = _loc2_.跳;
		  var _loc13_ = _loc2_.名称;
		  var _loc24_ = _loc2_.名称;
		  var _loc16_ = _loc2_.家族;
		  var _loc46_ = _loc2_.党;
		  var _loc22_ = _loc2_.统帅;
		  var _loc12_ = _loc2_.武力;
		  var _loc7_ = _loc2_.智力;
		  var _loc15_ = _loc2_.政治;
		  var _loc8_ = _loc2_.魅力;
		  var _loc14_ = _loc2_.清廉;
		  var _loc23_ = _loc2_.野心;
		  var _loc19_ = _loc2_.性别;
		  var _loc20_ = _loc2_.喜好;
		  var _loc9_ = _loc2_.介绍;
		  var _loc11_ = _loc2_.文化;
		  var _loc10_ = _loc2_._code; 
		  var _loc25_ = _loc2_.性格;
		  var _loc6_ = (random(5) + 3) * 8;
		  var _loc26_ = 出身计算(3);
		  var _loc21_ = {_code:_loc10_,称呼:"宫女",地位:undefined,位分:"",封号:"",名字:_loc13_,家族:_loc16_,文化:_loc11_,名称:_loc24_,性格:_loc25_,出身:_loc26_,介绍:undefined,统帅:_loc22_,武力:_loc12_,智力:_loc7_,政治:_loc15_,魅力:_loc8_,清廉:_loc14_,野心:_loc23_,性别:_loc19_,喜好:_loc20_,经验:0,年龄:_loc17_,状态:0,头像:_loc18_,爱:_loc6_,孕:0,病:0,仙:0,生育:0,任性:random(10),后宫相性:"",后宫势力:0,朝廷相性:"",朝廷势力:0,皇嗣相性:""};
	 }
	   else{
		  _loc17_ = random(4) + 16;
		  _loc18_ = random(627);
		   var _loc26_ = 出身计算(3);
		  var _loc4_ = 姓[random(姓.length)];
		  if(random(10) > 4){
			 临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)];
		  }
		  else{
			 临时名字 = _loc4_ + 女名[random(女名.length)];
		  }
		  _loc6_ = (random(5) + 3) * 8;
		  _loc21_ = {称呼:"宫女",地位:undefined,位分:"",封号:"",名字:临时名字,名称:临时名字,家族:_loc4_,文化:8,介绍:"养心殿中安排的宫女。",出身:_loc26_,统帅:random(30),武力:random(40),智力:random(60) + 20,政治:random(60) + 20,魅力:random(40) + 50,清廉:random(95),野心:random(90),性别:1,经验:0,喜好:0,年龄:_loc17_,状态:0,头像:_loc18_,爱:_loc6_,孕:0,病:0,仙:0,生育:0,任性:random(10),后宫相性:"",后宫势力:0,朝廷相性:"",朝廷势力:0,皇嗣相性:""}; 
		  性格计算(_loc21_);
	   } 
	   出现这位后宫(_loc21_,1);
	}
function 椒房殿程序(){
	if(主角.当前时辰 == 0 && random(10) == 0){长街掌嘴事件();}
	id('椒房殿内').style.display = 'block';
	出现这个人的头像(id('cxhhtx'),皇后);
	id('huanghoudehua').innerText = 皇后.封号 + 皇后.位分 + 皇后.名字 + '：臣妾给皇上请安，皇上万福金安。\n皇上可以让皇后组织皇家活动。\n家宴：5万两，每月一次。\n选秀：15万两，每年一次。';
	id('san0').onclick = function(){出现这位后宫(皇后,2);id('椒房殿内').style.display = 'none';};
	id('san1').onclick = function(){	
		var _loc1_ = 皇后.封号 + "皇后" + 皇后.名字 + "：" + 丞相的提示话[random(丞相的提示话.length)];
		id('huanghoudehua').innerText = _loc1_;}
	id('san2').onclick = function(){
	  if(皇后.病 !== 0){出现这位后宫(皇后,3);}
	  else if(皇后.孕 !== 0){出现这位后宫(皇后,4);}
	  else{出现这位后宫(皇后);}
	  id('椒房殿内').style.display = 'none';
   };
	id('san3').onclick = function(){
		 if(主角.家宴 == 1){小提示("本月已经举行过家宴了");}
		 else{
			主角.家宴 = 1;
			家宴程序();
			id('椒房殿内').style.display = 'none'
		 }
	  };
	id('san4').onclick = function(){if(国家.选秀 == 1){小提示("今年已经举办过选秀了");}
	  else{
		 国家.选秀 = 1;
		 选妃程序();
		 id('椒房殿内').style.display = 'none'
	  };};
	id('san5').onclick = function(){协理六宫程序();};
	id('san6').onclick = function(){大封六宫程序();};
}
function 册封名号(对象,参数){
	id("hgdt").style.display = 'block';
	刷新各个位分剩余名额();
	id('册封取消').onclick = function (){
		id('cf').style.display = 'none';
		if(参数!== 77 && 参数!== 78&& 参数!== 55&& 参数!== 10&& 参数!== 11){
			主角.当前时辰 += 1;
			时辰推进();
		}
	}
	id('属性栏').style.display = 'block';
	id('cf').style.display = 'block';
	id('wfb').style.display = 'block';
	id('cfTittle').innerText = '封哪个名号？';
	var i = 0;
	while(i < 后宫位分.length){
		if(参数 == 10){
			if(i >= 对象.地位){
				className('名分板')[i].style.display = 'none';
				className('mfsm')[i].style.display = 'none';
			}
			else{className('名分板')[i].style.display = 'block';className('mfsm')[i].style.display = 'block';}
			if(this.innerText == '九嫔'){
				出现九嫔位分(对象,参数);
			}
		}
		else if(参数 == 11){
			if(i <= 对象.地位){
				className('名分板')[i].style.display = 'none';
				className('mfsm')[i].style.display = 'none';
			}
			else{className('名分板')[i].style.display = 'block';className('mfsm')[i].style.display = 'block';}
			if(this.innerText == '九嫔'){
				出现九嫔位分(对象,参数);
			}
		}
		else{className('名分板')[i].style.display = 'block';className('mfsm')[i].style.display = 'block';}
		className('名分板')[i].属性 = 后宫位分[i];
		className('名分板')[i].onclick = function (){
			if(this.innerText == '九嫔'){
				出现九嫔位分(对象,参数);
			}
			else if(参数 == 10){
				if(this.属性[3] == this.属性[2]){
					小提示("该位分人数已达上限");
				}
				else{
					对象.爱 += (对象.地位 - this.属性[0]) * 25;
					var _loc4_ = 对象.封号 + 对象.位分;
					对象.位分 = this.属性[1];
					对象.地位 = this.属性[0];
					if(this.属性[0] == 0){
					  出圣旨(对象.名字 + "世德钟祥，崇勋启秀，柔嘉成性，宜昭女教于六宫。贞静持躬，应正母仪于万国。兹仰承天命，以册宝立尔为皇后。");
					  后宫记事记档(颜色代码(对象.名字,"ff0000")+"世德钟祥，崇勋启秀，柔嘉成性，宜昭女教于六宫。贞静持躬，应正母仪于万国。兹仰承天命，以册宝立为"+颜色代码("皇后","5f5ffc") + "。",对象.id);
					  对象.宫殿 = 0;
					  对象.寝殿 = 0;
					}
					else{
					  出圣旨(对象.名字 + "晋位至" + 对象.封号 + 对象.位分 + "。");
					  后宫记事记档(颜色代码(对象.名字,"ff0000")+"由"+_loc4_+"晋位至"+颜色代码(对象.封号 + 对象.位分,"5f5ffc") + "。",对象.id);
					}
					id('cf').style.display = 'none';
					嫔妃一览程序(0);
				}
			}
			else if(参数 == 11){
				if(this.属性[3] == this.属性[2]){
					小提示("该位分人数已达上限");
				}
				else{
			  对象.爱 += (对象.地位 - this.属性[0]) * 25;
			  var _loc4_ = 对象.封号 + 对象.位分;
			  对象.位分 = this.属性[1];
			  对象.地位 = this.属性[0];
			  var _loc3_ = "即刻将" + 对象.名字 + "降位至" + 对象.封号 + 对象.位分 + "。";
			  if(对象.地位 >= 4 && 对象.名字 == 国家.协理六宫[0]){
				国家.协理六宫[0] = "无";
				国家.协理六宫[1] = 0;
				_loc3_ += "并撤销其协理六宫之职。";
				后宫记事记档(颜色代码(对象.名字,"ff0000")+"由"+_loc4_+"降位至"+颜色代码(对象.封号 + 对象.位分,"5f5ffc") + "，并撤销其协理六宫之职。",对象.id);
	 		  }
			  else{
				  后宫记事记档(颜色代码(对象.名字,"ff0000")+"由"+_loc4_+"降位至"+颜色代码(对象.封号 + 对象.位分,"5f5ffc") + "。",对象.id);
			  }
			  出圣旨(_loc3_);
			  id('cf').style.display = 'none';
			  嫔妃一览程序(0);}
			}
			else{
				if(this.属性[3] == this.属性[2]){
					 小提示("该位分人数已达上限");
				}
				else{
					给妃子封号(对象,this.属性,参数);
				}
		   }
		}
		i++;
	}
}
function 给妃子封号(对象,属性,参数){
	var 名号 = 属性;
	id('wfb').style.display = 'none';
	id('御赐封号').style.display = 'block';
	id('cfsm').innerText = '御赐封号';
	id('册封取消').onclick = function(){id('御赐封号').style.display = 'none';id('cf').style.display = 'none';}
	id('输入封号').value = 对象.家族;
	if(对象.家族==undefined){
		id('输入封号').value = 皇家名字女字[random(皇家名字女字.length)];
	}
	if(名号[0]>1&&名号[0]<2 ||名号[1]=="皇贵妃"||名号[1]=="夫人"){
		id('输入封号').value = 皇家名字女字[random(皇家名字女字.length)]+皇家名字女字[random(皇家名字女字.length)];
		id('随机封号').onclick = function (){
			id('输入封号').value = 皇家名字女字[random(皇家名字女字.length)]+皇家名字女字[random(皇家名字女字.length)];
		}
		id('输入封号').maxLength="2";
	}
	else{
		id('输入封号').maxLength="1";
		id('随机封号').onclick = function (){
			id('输入封号').value = 皇家名字女字[random(皇家名字女字.length)];
		}
	}
	id('御赐封号确定').onclick = function (){
		id('御赐封号').style.display = 'none';id('cf').style.display = 'none';
		对象.名号 = 名号[1];
		对象.地位 = 名号[0];
		对象.封号 = id('输入封号').value;
		选择去哪个宫殿(参数,对象);
	 }
}
function 出现九嫔位分(对象,参数){
	id("jp").style.display="block";
	var i=0;
	while(i<9){
		className("jpwf")[i].属性=九嫔位分[i];
		if(参数==1){
			className('jpsm')[i].innerText = '';
		}
		className("jpwf")[i].onclick=function(){
			if(参数==1){
				赐谥号给她(对象,this.属性[1]);
				id("jp").style.display="none";
				id('cf').style.display = 'none';
			}
			else if(this.属性[3] == 1){
				 小提示("该位分人数已达上限");
			}
			else if(参数 == 10){
			  对象.爱 += 50;
			  var _loc11_ = 0;
			  while(_loc11_ < 后宫位分.length){
				  if(后宫位分[_loc11_][1] == "九嫔"){
					  对象.地位 = 后宫位分[_loc11_][0] + this.属性[0];
				  }
				  _loc11_ += 1;
			  }
			  对象.位分 = this.属性[1];
			  出圣旨(对象.名字 + "晋位至" + 对象.封号 + 对象.位分 + "。");
			  id('cf').style.display = 'none';id("jp").style.display="none";
			  嫔妃一览程序(0);
			}
			else if(参数 == 11){
			  对象.爱 -= 50;
			  对象.位分 = this.属性[1];
			  var _loc11_ = 0;
			  while(_loc11_ < 后宫位分.length){
				  if(后宫位分[_loc11_][1] == "九嫔"){
					  对象.地位 = 后宫位分[_loc11_][0] + this.属性[0];
				  }
				  _loc11_ += 1;
			  }
			  var _loc3_ = "即刻将" + 对象.名字 + "降位至" + 对象.封号 + 对象.位分 + "。";
			  if(对象.地位 >= 4 && 对象.名字 == 国家.协理六宫[0]){
				国家.协理六宫[0] = "无";
				国家.协理六宫[1] = 0;
				_loc3_ += "并撤销其协理六宫之职。";
			  }
			  出圣旨(_loc3_);id("jp").style.display="none";
			  id('cf').style.display = 'none';
			  嫔妃一览程序(0);
			}
			else{
				给妃子封号(对象,this.属性,参数);
				id('cf').style.display = 'none';id('jp').style.display = 'none';
			}
		}
		i++;
	}
	id('jpqx').onclick = function (){
		id('jp').style.display = 'none';
	}
}
function 选择去哪个宫殿(参数,对象){
	id('后宫内').style.display = 'block';
	id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';}
	if(参数 == 0){
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';}
		id("suibianfan").style.display = 'none';
		id('hougongbt').innerText = '皇上要去哪个宫殿';
		临时宫殿列表 = [];
		var _loc5_ = 1;
		while(_loc5_ < _all_palace.length){
			if(_all_palace[_loc5_].等级 !== 0){
			临时宫殿列表.push(_all_palace[_loc5_]);
			}
		   _loc5_ += 1;
		}	
	}
	else if(参数 == 5){
		id("suibianfan").style.display = 'block';
		id('hougongbt').innerText = '要哪位妃嫔侍寝';
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';甘露殿程序();}
		临时宫殿列表 = [];
		_loc4_ = 0;
		while(_loc4_ < _all_feizi.length){
		if(_all_feizi[_loc4_].位分 !== "秀女" && _all_feizi[_loc4_].孕 == 0 && _all_feizi[_loc4_].病 == 0 && (_all_feizi[_loc4_].省亲 == 0 || _all_feizi[_loc4_].省亲 == undefined)){
			临时宫殿列表.push(_all_feizi[_loc4_]);
			}
			_loc4_ += 1;
		}
		var _loc5_ = 临时宫殿列表[random(临时宫殿列表.length)];
		if(临时宫殿列表.length==0){
			id("suibianfan").onclick = function(){}
		}else{
			id("suibianfan").onclick = function(){出现这位后宫(_loc5_,参数);}
		}
		临时宫殿列表.sort(compare("地位"));	  
	}
	else if(参数 == 40){
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';}
		id("suibianfan").style.display = 'none';
		id('hougongbt').innerText = '要给哪个宫殿安排太医';
		临时宫殿列表 = [];
		var _loc5_ = 0;
		while(_loc5_ < _all_palace.length){
			if(_all_palace[_loc5_].等级 == 3){
			临时宫殿列表.push(_all_palace[_loc5_]);
			}
		   _loc5_ += 1;
		}	
	}
	else if(参数 == 50){
		id("suibianfan").style.display = 'block';
		id('hougongbt').innerText = '要过继给哪位妃嫔';
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';甘露殿程序();}
		临时宫殿列表 = [];
		_loc4_ = 0;
		while(_loc4_ < _all_feizi.length){
		if(_all_feizi[_loc4_].名字 !== 对象.生母){
			临时宫殿列表.push(_all_feizi[_loc4_]);
			}
			_loc4_ += 1;
		}
		var _loc5_ = 临时宫殿列表[random(临时宫殿列表.length)];
		id("suibianfan").style.display = 'none';
		临时宫殿列表.sort(compare("地位"));	  
	}
	else if(参数 == 60){
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';}
		id("suibianfan").style.display = 'none';
		id('hougongbt').innerText = '选择新建何种样式的宫殿';
		临时宫殿列表 = [];
		var _loc5_ = 0;
		while(_loc5_ < _all_palace.length){
			if(_all_palace[_loc5_].等级 == 0){
			临时宫殿列表.push(_all_palace[_loc5_]);
			}
		   _loc5_ += 1;
		}	
	}
	else if(参数 == 61){
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';}
		id("suibianfan").style.display = 'none';
		id('hougongbt').innerText = '要升级哪个宫殿';
		临时宫殿列表 = [];
		var _loc5_ = 0;
		while(_loc5_ < _all_palace.length){
			if(_all_palace[_loc5_].等级 !== 0 &&_all_palace[_loc5_].等级 !== 3){
			临时宫殿列表.push(_all_palace[_loc5_]);
			}
		   _loc5_ += 1;
		}	
	}
	else if(参数 == 62){
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';}
		id("suibianfan").style.display = 'none';
		id('hougongbt').innerText = '要更改哪个宫殿的名字';
		临时宫殿列表 = [];
		var _loc5_ = 1;
		while(_loc5_ < _all_palace.length){
			if(_all_palace[_loc5_].等级 !== 0){
			临时宫殿列表.push(_all_palace[_loc5_]);
			}
		   _loc5_ += 1;
		}	
	}
	else if(参数 == 88){
		id("suibianfan").style.display = 'block';
		id('hougongbt').innerText = '要哪位秀女侍寝';
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';储秀阁程序();}
		临时宫殿列表 = [];
		_loc4_ = 0;
		while(_loc4_ < _all_feizi.length){
			if(_all_feizi[_loc4_].位分 == "秀女" && _all_feizi[_loc4_].孕 == 0 && _all_feizi[_loc4_].病 == 0 && (_all_feizi[_loc4_].省亲 == 0 || _all_feizi[_loc4_].省亲 == undefined)){
				临时宫殿列表.push(_all_feizi[_loc4_]);
			}
			_loc4_ += 1;
		}
		var _loc5_ = 临时宫殿列表[random(临时宫殿列表.length)];
		if(临时宫殿列表.length==0){
			id("suibianfan").onclick = function(){}
		}else{
			id("suibianfan").onclick = function(){出现这位后宫(_loc5_,参数);}
		}
	}
	else{
		id("suibianfan").style.display = 'none';
		id('hougongbt').innerText = '分配哪个宫';
		id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';}
		if(参数 == 99){id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';}}
		if(参数 == 77||参数 == 78){id('hgguanbi').onclick = function (){id('后宫内').style.display = 'none';id('御赐封号').style.display = 'none';对象.地位=undefined;对象.位分=="秀女";}}
		临时宫殿列表 = [];
		var _loc5_ = 1;
		while(_loc5_ < _all_palace.length){
			if(_all_palace[_loc5_].等级 !== 0){
			临时宫殿列表.push(_all_palace[_loc5_]);
			}
			_loc5_ += 1;
		}	
	}
	var 序列 = 0;
	更新宫信息(参数,对象,临时宫殿列表,序列);
	id('hougongqian').onclick = function(){
		if(序列 > 0){
			序列 -= 1;
			更新宫信息(参数,对象,临时宫殿列表,序列);
			}
		}
	id('hougonghou').onclick = function(){
	var _loc2_ = Math.round(临时宫殿列表.length / 5) - 1;
	if(序列 <= _loc2_){
	   	序列 += 1;
	   	更新宫信息(参数,对象,临时宫殿列表,序列);
	   	}
	}
}
function 更新宫信息(参数,对象,临时宫殿列表,序列){
	刷新_all_palace居住情况();
	var i = 0;
	while(i < 5){
		var _loc1_ = 临时宫殿列表[序列 * 5 + i];
		if(_loc1_ == undefined){
			className('选宫背景')[i].style.display = 'none';
			className('xuangongmb')[i].style.display = 'none';
			}else{
			className('选宫背景')[i].style.display = 'block';
			className('xuangongmb')[i].style.display = 'block';
			className('选宫背景')[i].src =LJ + 'a0aPic_Placae/Tu_' + _loc1_.跳 + '.jpg';
			className('宫殿名称')[i].innerText = _loc1_.名称;
			if(_loc1_.等级 == 3 || _loc1_.地位 < 4){className('xuangongmb')[i].style.backgroundPositionX = '-262px';}
			else if(_loc1_.等级 == 2 || _loc1_.地位 < 9){className('xuangongmb')[i].style.backgroundPositionX = '-131px';}
			else{className('xuangongmb')[i].style.backgroundPositionX = '0px';}
			className('xuangongmb')[i].取 = _loc1_;
			if(参数 == 0){
				className('xuangongmb')[i].onclick = function(){宫殿内部(0,undefined,this.取);}
			}
			else if(参数 == 5){
			   出现这个人的头像(className('选宫背景')[i],临时宫殿列表[序列 * 5 + i]);className('宫殿名称')[i].innerText = _loc1_.封号 + _loc1_.位分;
				className('xuangongmb')[i].onclick = function(){出现这位后宫(this.取,参数);}
			}
			else if(参数 == 40){
			   className('xuangongmb')[i].onclick = function(){安排御医(1,this.取);}
			}
			else if(参数 == 50){
			   className('xuangongmb')[i].onclick = function(){过继子女结算(对象,this.取);}
			   出现这个人的头像(className('选宫背景')[i],临时宫殿列表[序列 * 5 + i]);className('宫殿名称')[i].innerText = _loc1_.封号 + _loc1_.位分;
			}
			else if(参数 == 60){
			   className('xuangongmb')[i].onclick = function(){给新宫殿取名字(this.取);}
			   className('宫殿名称')[i].innerText = "";
			}
			else if(参数 == 61){
			   className('xuangongmb')[i].onclick = function(){升级这个宫殿(this.取);}
			}
			else if(参数 == 62){
			   className('xuangongmb')[i].onclick = function(){宫殿内部(62,undefined,this.取);}
			}
			else if(参数 == 88){
				出现这个人的头像(className('选宫背景')[i],临时宫殿列表[序列 * 5 + i]);className('宫殿名称')[i].innerText = _loc1_.名字;
				className('xuangongmb')[i].onclick = function(){出现这位后宫(this.取,参数);}
			}
			else{
				className('xuangongmb')[i].onclick = function(){宫殿内部(参数,对象,this.取);}
			}
		}
		i++;
	}
}
function 宫殿内部(参数,对象,宫){
	id("hgdt").style.display = 'block';
	id('各宫的面板').style.display = 'block';
	id('宫背景').src =LJ +  'azcPic_Gong_Biao/' + 宫.跳 + '.jpg';
	if(参数 !== 0 &&参数 !== 62){
		var 主位条件 = 1;
		f = 0;
		while(f < 5){
			if(宫.殿[f] !== undefined && 宫.殿[f].地位 < 对象.地位){主位条件 = 0;}
			else if(宫.殿[f] !== undefined && 对象.地位 <1){
				var _loc11_ = 0;
				while(_loc11_ < 后宫位分.length){
				   if(后宫位分[_loc11_][1] == "九嫔")
				   {
					   _loc12_=后宫位分[_loc11_][0] + 对象.地位;
				   }
				   _loc11_ += 1;
				}
				if(宫.殿[f].地位 < _loc12_){主位条件 = 0;}
			}
			f++;
		}
	}
	if(宫.太医 !== undefined){id("gongty").style.display = "block";id("gongty").innerText = "当值太医："+_all_doctor[宫.太医].名称;}else{id("gongty").style.display = "none";}
	var i = 0;
	while(i < 5){
		className('各宫的小板')[i].innerText = 宫.内殿[i];
		className('各宫的小板')[i].序号 = i;
		if(宫.殿[i] != undefined){
			className('各宫的小板')[i].属性 = 宫.殿[i];
			className('住着谁')[i].style.display = 'block';
			className('住着谁')[i].innerText = 宫.殿[i].封号 + 宫.殿[i].位分 + '/' + 宫.殿[i].名字;
			if(宫.殿[i].病 !== 0){
				className('状态')[i].style.display = 'block';
				className('状态')[i].innerText = '（娘娘身体不适，正在静养。）'
			 }
			else if(宫.殿[i].孕 !== 0){
				className('状态')[i].style.display = 'block';
			 	className('状态')[i].innerText = '（娘娘怀有龙胎，正在静养。）'
			}
			else{className('状态')[i].style.display = 'none';}
	  		className('各宫的小板')[i].onclick = function (){
				if(参数 == 0){
					id('各宫的面板').style.display = 'none';
					id('后宫内').style.display = 'none';
					if(this.属性.病 !== 0){出现这位后宫(this.属性,3);}
					else if(this.属性.孕 !== 0){出现这位后宫(this.属性,4);}
					else if(this.属性.省亲 !== 0 && this.属性.省亲 !== undefined){小提示("娘娘回家省亲了，不在宫里。");}
					else{
						var _loc2_ = random(6);
						if(_loc2_ == 0){妃子半路截人(this.属性);}
						else if(_loc2_ == 1){
						var _loc3_ = 0;
						while(_loc3_ < _all_gongnv.length){
							if(_all_gongnv[_loc3_].能力 == 4 && _all_gongnv[_loc3_].主子 == this.属性.id){var _loc4_ = _all_gongnv[_loc3_];}
							_loc3_ += 1;
						}
						if(_loc4_ !== undefined && this.属性.爱 > 200){发现漂亮宫女(this.属性,_loc4_);}
						else{出现这位后宫(this.属性);}
						}else{出现这位后宫(this.属性);}
					}
				}
				else if(参数 == 62){
					给宫寝殿换名字(宫,this.序号);
				}
				else{小提示("这里已经有人居住了");}
			}
		}
		else{
			className('住着谁')[i].style.display = 'none';
			className('状态')[i].style.display = 'none';
			className('各宫的小板')[i].onclick = function (){
			if(参数 == 62){给宫寝殿换名字(宫,this.序号);}
			else if(参数 !== 0){
				if(this.序号 == 0 && 主位条件 == 0){小提示("一宫正殿应由最高位妃子居住")}
				else{
					id('各宫的面板').style.display = 'none';
					id('后宫内').style.display = 'none';
					if(参数 == 99){
						var _loc2_ = 对象.名字;
						_loc4_=_all_palace[对象.宫殿].名称 + _all_palace[对象.宫殿].内殿[对象.寝殿];
						对象.宫殿 = 宫.id;
						对象.寝殿 = this.序号;
						var _loc3_ = _all_palace[对象.宫殿].名称 + _all_palace[对象.宫殿].内殿[对象.寝殿];
						出圣旨("即刻起,将" + 对象.名字 + "的衣食起居迁入" + _loc3_ + "。");
						后宫记事记档(颜色代码(对象.名字,"ff0000")+"由"+_loc4_+"迁入" +颜色代码(_loc3_,"5f5ffc") + "。",对象.id);
						嫔妃一览程序(5);
					}
					else{
						对象.宫殿 = 宫.id;
						对象.寝殿 = this.序号;
						给她什么名号好呢(参数,对象,this.属性);
					}
				}
		 	}
			else{}
		   }
		}
		i++;
	}
	if(参数==62){
		id("ghgm").style.display = "block";
		id("ghgm").onclick = function (){
			给宫寝殿换名字(宫,99);
		}
	}
	else{id("ghgm").style.display = "none";}
}
function 给她什么名号好呢(参数,对象,宫){
	var _loc8_ = 对象.名字;
	var _loc9_ = _all_palace[对象.宫殿].名称 + _all_palace[对象.宫殿].内殿[对象.寝殿];
	var _loc10_ = 对象.地位;
	_loc16_ = _loc10_ * 10 - 1;
	if(_loc10_ > 0&&_loc10_ < 1){
		对象.位分 = 九嫔位分[_loc16_][1];
		var _loc11_ = 0;
		while(_loc11_ < 后宫位分.length){
			if(后宫位分[_loc11_][1] == "九嫔"){
				对象.地位 = 后宫位分[_loc11_][0] + _loc10_;
			}
			_loc11_ += 1;
		}
	}
	else{
	   	对象.位分 = 后宫位分[_loc10_][1];
	}
	   对象.党 = undefined;
	   对象.任性 = 0;
	   _loc11_ = 后宫位分.length+1 - 对象.地位;
	   if(对象.id ==undefined){
		   国家.妃子顺序 += 1;
		   对象.id = 国家.妃子顺序;
	   }
	   i = 0;
	   var _loc12_=0;
	   var _loc13_=0;
	   while(i < _all_taijian.length){
	   		if(_all_taijian[i].主子 == undefined&&_loc12_< _loc11_){
	   		_all_taijian[i].主子 = 对象.id;_loc12_++;
	   		}
			i++;
	   }
	   i = 0;
	   while(i < _all_gongnv.length){
	   		if(_all_gongnv[i].主子 == undefined&&_loc12_< _loc11_){
	   		_all_gongnv[i].主子 = 对象.id;_loc13_++;
	   		}
	   		i++;
	   }
	   while(_loc12_ < Math.round(_loc11_/2)){
	   		  _all_gongnv.push({id:_all_gongnv.length,名称:宫女名字字库[random(宫女名字字库.length)] + 宫女名字字库二[random(宫女名字字库二.length)],主子:对象.id,职务:1,能力:1 + random(3)});
	   		  _loc12_++;
	   }
	   while(_loc13_ < Math.round(_loc11_/2)){
		  if(random(2) == 0){
			 _all_taijian.push({id:_all_taijian.length,名称:"小" + 太监名字字库[random(太监名字字库.length)] + "子",主子:对象.id,职务:0,能力:1 + random(3)});
		  }
		  else{
			 _all_taijian.push({id:_all_taijian.length,名称:太监姓氏字库[random(太监姓氏字库.length)] + 太监名字字库[random(太监名字字库.length)] + 太监名字字库[random(太监名字字库.length)],主子:对象.id,职务:0,能力:1 + random(3)});
		  }
		  _loc13_++;
	   }
	   计算后宫开销();
	   if(对象.地位 == 0){
		 对象.爱 = 100;
	     出圣旨(对象.名字 + "世德钟祥，崇勋启秀，柔嘉成性，宜昭女教于六宫。贞静持躬，应正母仪于万国。兹仰承天命，以册宝立尔为皇后。");
	     对象.宫殿 = 0;
	     对象.寝殿 = 0;
	   }
	   else if(参数 == 1){
		  对象.爱 = 100;
		  出圣旨(_loc8_ + "虽是敌国之妃。但朕念之可怜，特将" + _loc8_ + "收入后宫。封" + 对象.封号 + 对象.位分 + ",入住" + _loc9_ + "。");
	   }
	   else if(参数 == 6 || 参数 == 78){
		  出圣旨("封" + _loc8_ + "予" + 对象.位分 + "位分，赐封号为" + 对象.封号 + "，迁入" + _loc9_ + "。",1);
	   }
	   else if(参数 == 8){
		  对象.爱 = 20 + random(50);
		  出圣旨(_loc8_ + "，虽出身风尘，但天生丽质，性格温婉，才识过人，对朕痴心一片，实为难得。即封" + 对象.封号 + 对象.位分 + "，入住" + _loc9_ + "。");
	   }
	   else if(参数 == 7){
		  对象.爱 = 20 + random(50);
		  出圣旨(_loc8_ + "，虽曾犯下过错，贬为废妃，但其虚心悔改，已幡然醒悟。即迁回后宫，封" + 对象.封号 + 对象.位分 + "，入住" + _loc9_ + "。");
	   }
	   else if(参数 == 9){
		  对象.爱 = 50;
		  出圣旨(_loc8_ + "，天赐尤物，深得朕心。即封" + 对象.封号 + 对象.位分 + "，安排迁入" + _loc9_ + "。");
	   }
	   else if(参数 == 19){
		  对象.爱 = 50;
		  出圣旨(_loc8_ + "，天赐尤物，深得朕心。即封" + 对象.封号 + 对象.位分 + "，安排迁入" + _loc9_ + "。",2);
	   }
	   else if(参数 == 55){
		  对象.爱 = 100;
		  出圣旨(_loc8_ + "常年以伶官身份陪伴朕，多欢笑，但终居百剧园，朕心不忍，即封" + 对象.封号 + 对象.位分 + "，安排迁入" + _loc9_ + "。");
	   }
	   else if(参数 == 4){
		  对象.爱 = 100;
		  出圣旨(_loc8_ + "娴良淑德，朕很满意。因常在行宫，实属不便，即封" + 对象.封号 + 对象.位分 + "，安排迁入" + _loc9_ + "。",2);
	   }
	   else if(参数 == 2){
		  对象.爱 = 20 + random(50);
		  出圣旨(_loc8_ + "娴良淑德，家世良好，朕很满意。即封" + 对象.封号 + 对象.位分 + "，安排迁入" + _loc9_ + "。");
		  位置啊.开关 = 1;
		  选妃的盖章(位置啊);
	   }
	   else if(参数 == 3){
		  对象.爱 = 100;
		  出圣旨(_loc8_ + "收入后宫。封" + 对象.封号 + 对象.位分 + "，入住" + _loc9_ + "。");
	   }
	   else if(参数 == 77){
		  对象.爱 += 20;
		  出圣旨(_loc8_ + "收入后宫。封" + 对象.封号 + 对象.位分 + "，入住" + _loc9_ + "。");
		  移除太监事件部分();
	   }
	   后宫记事记档(颜色代码(对象.名字,"ff0000")+"进入后宫，"+"封" +颜色代码(对象.封号 + 对象.位分,"5f5ffc") + "，入住" + _loc9_ + "。",对象.id);
	   _loc15_ = 0;
	   while(_loc15_ < 后宫名人.length){
		  if(后宫名人[_loc15_]._code == 对象._code){
			 后宫名人[_loc15_].用过 = 1;
		  }
		  _loc15_ += 1;
	   }
	   if(参数 == 77 || 参数 == 78){
		  i = 0;
		  while(i < _all_feizi.length){
			 if(_all_feizi[i].名字 == 对象.名字)
			 {
				_all_feizi[i].封号 = 对象.封号;
				_all_feizi[i].位分 = 对象.位分;
				_all_feizi[i].封号 = 对象.封号;
				_all_feizi[i].名称 = 对象.名称;
				_all_feizi[i].宫殿 = 对象.宫殿;
				_all_feizi[i].寝殿 = 对象.寝殿;
			 }
			 i++;
		  }
	   }
	   else{
		  _all_feizi.push(对象);
	   }
	   刷新_all_palace居住情况();
	}
function 刷新_all_palace居住情况(){
   n = 0;
   while(n < _all_palace.length){
	  _all_palace[n].殿 = [undefined,undefined,undefined,undefined,undefined];
	  _all_palace[n].太医 = undefined;
	  n++;
   }
   i = 0;
   while(i < _all_palace.length){
	  d = 0;
	  while(d < _all_feizi.length){
		 if(_all_feizi[d].宫殿 == i && _all_feizi[d].寝殿 == 0){
			_all_palace[i].殿[0] = _all_feizi[d];
		 }
		 else if(_all_feizi[d].宫殿 == i && _all_feizi[d].寝殿 == 1){
			_all_palace[i].殿[1] = _all_feizi[d];
		 }
		 else if(_all_feizi[d].宫殿 == i && _all_feizi[d].寝殿 == 2){
			_all_palace[i].殿[2] = _all_feizi[d];
		 }
		 else if(_all_feizi[d].宫殿 == i && _all_feizi[d].寝殿 == 3){
			_all_palace[i].殿[3] = _all_feizi[d];
		 }
		 else if(_all_feizi[d].宫殿 == i && _all_feizi[d].寝殿 == 4){
			_all_palace[i].殿[4] = _all_feizi[d];
		 }
		 d++;
	  }
	  i++;
   }
   i = 0;
   while(i < _all_doctor.length){
	  if(_all_doctor[i].宫 !== undefined){
		 _all_palace[_all_doctor[i].宫].太医 = _all_doctor[i].id;
	  }
	  i++;
   }
}
function 板子加载(){
	if(className('sydb').length < 15){
		var x = 0;
		var w = 0;
		while(w < 5)
		{
			var q = 0;
			while(q < 3)
			{
				var mf = document.createElement('button');
				mf.className = 'sydb';
				mf.style.display = 'none';
				mf.style.fontFamily = '宋体';
				mf.style.fontSize = '24px';
				mf.id = 'sy-' + x;
				mf.style.left = 60 + 220 * q + 'px';
				mf.style.top = 100 + 70 * w + 'px';
				id('syb').appendChild(mf);
				x++;
				q++;
			}
			w++;
		}
	}
	if(className('sydb2').length < 32){
		var x = 0;
		var w = 0;
		while(w < 8)
		{
			var q = 0;
			while(q < 4)
			{
				var mf = document.createElement('button');
				mf.className = 'sydb2';
				mf.style.fontFamily = '宋体';
				mf.style.fontSize = '20px';
				mf.id = 'mf-' + x;
				mf.style.left = 80 + 160 * q + 'px';
				mf.style.top = 100 + 40 * w + 'px';
				id('syb2').appendChild(mf);
				x++;
				q++;
			}
			w++;
		}
	}
	id('syb2').style.display = 'none';
	if(className('bzxb').length < 8){
		var x = 0;
		var w = 0;
		while(w < 2)
		{
			var q = 0;
			while(q < 4)
			{
				var mf = document.createElement('button');
				mf.className = 'bzxb';
				mf.style.fontFamily = '宋体';
				mf.style.fontSize = '20px';
				mf.id = 我国兵种[x];
				mf.innerText = 我国兵种[x];
				mf.style.left = 80 + 165 * q + 'px';
				mf.style.top = 300 + 40 * w + 'px';
				id('xjdwb').appendChild(mf);
				x++;
				q++;
			}
			w++;
		}
	}
	if(className('jdxb').length < 20){
		var x = 0;
		var w = 0;
		while(w < 5)
		{
			var q = 0;
			while(q < 4)
			{
				var mf = document.createElement('button');
				mf.className = 'jdxb';
				mf.style.fontFamily = '宋体';
				mf.style.fontSize = '20px';
				mf.id = 'mf-' + x;
				mf.style.left = 100 + 170 * q + 'px';
				mf.style.top = 150 + 40 * w + 'px';
				id('zzcdb').appendChild(mf);
				var mf1 = document.createElement('div');
				mf1.className = 'jdxzq';
				mf1.style.left = 75 + 170 * q + 'px';
				mf1.style.top = 165 + 40 * w + 'px';
				id('zzcdb').appendChild(mf1);
				x++;
				q++;
			}
			w++;
		}
		var x = 0;
		var w = 0;
		while(w < 5)
		{
			var q = 0;
			while(q < 4)
			{
				var mf2 = document.createElement('div');
				mf2.className = 'jdxzl';
				mf2.style.float = 'left';
				className('jdxzq')[x].appendChild(mf2);
				x++;
				q++;
			}
			w++;
		}
	}
	if(className('cyxb').length < 10){
		var x = 0;
		var w = 0;
		while(w < 5)
		{
			var q = 0;
			while(q < 2)
			{
				var mf = document.createElement('button');
				mf.className = 'cyxb';
				mf.id = 'sy-' + x;
				mf.style.left = 170 + 280 * q + 'px';
				mf.style.top = 70 + 50 * w + 'px';
				id('chengyao').appendChild(mf);
				var mfsm = document.createElement('span');
				mfsm.className = 'cysl';
				mfsm.id = 'cysl' + x;
				mfsm.innerText = 'x1000';
				mfsm.style.textalig = 'left';
				mfsm.style.left = 310 + 280 * q + 'px';
				mfsm.style.top = 80 + 50 * w + 'px';
				id('chengyao').appendChild(mfsm);
				x++;
				q++;
			}
			w++;
		}
	}
	if(className('ycxb').length < 20){
		var x = 0;
		var w = 0;
		while(w < 10)
		{
			var q = 0;
			while(q < 2)
			{
				var mf = document.createElement('button');
				mf.className = 'ycxb';
				mf.id = 'yc-' + x;
				mf.style.left = 430 + 190 * q + 'px';
				mf.style.top = 70 + 34 * w + 'px';
				id('ycb').appendChild(mf);
				var mfsm = document.createElement('span');
				mfsm.className = 'ycsl';
				mfsm.id = 'ycsl' + x;
				mfsm.fontSize = '15px';
				mfsm.innerText = 'x1000';
				mfsm.style.textalig = 'left';
				mfsm.style.left = 530 + 190 * q + 'px';
				mfsm.style.top = 75 + 34 * w + 'px';
				id('ycb').appendChild(mfsm);
				x++;
				q++;
			}
			w++;
		}
	}
	if(className('jgxb').length < 10){
		var x = 0;
		var w = 0;
		while(w < 10)
		{
			var mf = document.createElement('button');
			mf.className = 'jgxb';
			mf.id = 'jc' + x;
			mf.innerText = '选择';
			mf.style.left = '80px';
			mf.style.top = 70 + 34 * w + 'px';
			id('bsjgb').appendChild(mf);
			var mfsm = document.createElement('span');
			mfsm.className = 'jctext';
			mfsm.id = 'jctext' + x;
			mfsm.fontSize = '15px';
			mfsm.style.textalig = 'left';
			mfsm.style.left ='210px';
			mfsm.style.top = 75 + 34 * w + 'px';
			id('bsjgb').appendChild(mfsm);
			x++;
			w++;
		}
	}
	if(className('jpwf').length < 9 ){
		var x = 0;
		var w = 0;
		while(w < 3)
		{
			var q = 0;
			while(q < 3)
			{
				var mf = document.createElement('button');
				mf.className = 'jpwf';
				mf.id = 'mf-' + x;
				mf.style.left = 50 + 250 * q + 'px';
				mf.style.top = 80 + 80 * w + 'px';
				mf.innerText = 九嫔位分[x][1];
				id('jp').appendChild(mf);
				var mfsm = document.createElement('span');
				mfsm.className = 'jpsm';
				mfsm.id = 'mfsm-' + x;
				mfsm.style.left = 180 + 248 * q + 'px';
				mfsm.style.top = 90 + 80 * w + 'px';
				id('jp').appendChild(mfsm);
				x++;
				q++;
			}
			w++;
		}
	}
	if(className('名分板').length < 后宫位分.length){
		var x = 0;
		var w = 0;
		while(w <= Math.round((后宫位分.length + 1) / 3)){
			var q = 0;
			while(q < 3){
					var mf = document.createElement('button');
					mf.className = '名分板';
					mf.id = 'mf-' + x;
					mf.style.left = 50 + 250 * q + 'px';
					mf.style.top = 80 + 50 * w + 'px';
					if(x<后宫位分.length){
						mf.innerText = 后宫位分[x][1];
						id('wfb').appendChild(mf);
					}
					var mfsm = document.createElement('span');
					mfsm.className = 'mfsm';
					mfsm.id = 'mfsm-' + x;
					mfsm.style.left = 180 + 248 * q + 'px';
					mfsm.style.top = 90 + 50 * w + 'px';
					if(x<后宫位分.length){
						id('wfb').appendChild(mfsm);
					}
				x++;
				q++;
			}
			w++;
		}
	}
	if(className('kcxb').length < 30){
		var x = 0;
		var w = 0;
		while(w < 10)
		{
			var q = 0;
			while(q < 3)
			{
				var mf = document.createElement('button');
				mf.className = 'kcxb';
				mf.style.fontFamily = '宋体';
				mf.id = 'kc-' + x;
				mf.style.left = 10 + 110 * q + 'px';
				mf.style.top = 25 + 34 * w + 'px';
				id('kuang').appendChild(mf);
				x++;
				q++;
			}
			w++;
		}
	}
	if(className('kcxb2').length < 10){
		var x = 0;
		var w = 0;
		while(w < 10){
			var mf = document.createElement('button');
			mf.className = 'kcxb2';
			mf.style.fontFamily = '宋体';
			mf.id = 'kc2-' + x;
			mf.style.left = '30px';
			mf.style.top = 25 + 34 * w + 'px';
			id('kuang2').appendChild(mf);
			x++;
			w++;
		}
	}
	if(className('wpxb').length < 16){
		var x = 0;
		var w = 0;
		while(w < 8)
		{
			var q = 0;
			while(q < 3)
			{
				var mf = document.createElement('button');
				mf.className = 'wpxb';
				mf.style.fontFamily = '宋体';
				mf.style.fontSize = '16px';
				mf.id = 'wp-' + x;
				mf.style.left = 262 + 145 * q + 'px';
				mf.style.top = 100 + 40 * w + 'px';
				id('wupinb').appendChild(mf);
				x++;
				q++;
			}
			w++;
		}
	}
	var _loc2_ = 0;
	var liebiaoxiang = id('liebiaoxiang');
	var _loc3_ = 1;
	while(_loc3_ < 10){
	if(className('liebiaoxiang').length < 10){
	var lbx = liebiaoxiang.cloneNode(true);
	lbx.setAttribute('id','div-' + _loc3_); 
	liebiaoxiang.parentNode.appendChild(lbx);	
	}
	_loc2_ += 1;
	_loc3_ += 1;
	}
	var lbxx = className('liebiaoxiang');
	var i = 0;
	while(i < 10){
		lbxx[i].style.top = i * 32 + 102 + 'px'; 
		i++;
	}
	var feiziyilan = id("feiziyilan");
	var _loc2_ = 0;
	var fzliebiaoxiang = id('feizilbx');
	var _loc3_ = 1;
	while(_loc3_ < 10){
	  if(className('feizilbx').length < 10){
	  var lbx = fzliebiaoxiang.cloneNode(true);
	  lbx.setAttribute('id','div-' + _loc3_); 
	  fzliebiaoxiang.parentNode.appendChild(lbx);	
	  }
	   _loc2_ += 1;
	   _loc3_ += 1;
	}
	var lbxx = className('feizilbx');
	var i = 0;
	while(i < 10){
	   	lbxx[i].style.top = i * 32 + 102 + 'px'; 
		i ++;
	}
	var _loc2_ = 0;
	var liebiaoxiang = id('junshilbx');
	var _loc3_ = 1;
	while(_loc3_ < 10){
		if(className('junshilbx').length < 10){
		var lbx = liebiaoxiang.cloneNode(true);
		lbx.setAttribute('id','div-' + _loc3_); 
		liebiaoxiang.parentNode.appendChild(lbx);	
		}
	   _loc2_ += 1;
	   _loc3_ += 1;
			  
	}
	var lbxx = className('junshilbx');
	var i = 0;
	while(i < 10){
			lbxx[i].style.top = i * 32 + 102 + 'px'; 
	   i ++;
	}
	var _loc2_ = 0;
	var liebiaoxiang = id('waijiaolbx');
	var _loc3_ = 1;
	while(_loc3_ < 10){
		if(className('waijiaolbx').length < 10){
			var lbx = liebiaoxiang.cloneNode(true);
			lbx.setAttribute('id','div-' + _loc3_); 
			liebiaoxiang.parentNode.appendChild(lbx);	
		}
		_loc2_ += 1;
		_loc3_ += 1;
	}
	var lbxx = className('waijiaolbx');
	var i = 0;
	while(i < 10){
		lbxx[i].style.top = i * 32 + 102 + 'px'; 
	   i ++;
	}
	var _loc2_ = 0;
	var liebiaoxiang = id('zinvlbx');
	var _loc3_ = 1;
	while(_loc3_ < 10){
		if(className('zinvlbx').length < 10){
			var lbx = liebiaoxiang.cloneNode(true);
			lbx.setAttribute('id','div-' + _loc3_); 
			liebiaoxiang.parentNode.appendChild(lbx);	
		}
		_loc2_ += 1;
		_loc3_ += 1;
	}
	var lbxx = className('zinvlbx');
	var i = 0;
	while(i < 10){
		lbxx[i].style.top = i * 32 + 102 + 'px'; 
	   i ++;
	}
	var _loc2_ = 0;
	var liebiaoxiang = id('jiajuanlbx');
	var _loc3_ = 1;
	while(_loc3_ < 10){
		if(className('jiajuanlbx').length < 10){
			var lbx = liebiaoxiang.cloneNode(true);
			lbx.setAttribute('id','div-' + _loc3_); 
			liebiaoxiang.parentNode.appendChild(lbx);	
		}
		_loc2_ += 1;
		_loc3_ += 1;
	}
	var lbxx = className('jiajuanlbx');
	var i = 0;
	while(i < 10){
		lbxx[i].style.top = i * 32 + 102 + 'px'; 
	   i ++;
	}
}
function 每月奏折面板(){
   id('zouzhe').style.display = 'block';
   id('dfzouzhe').onclick = function(){
	  id('szb').style.display = 'block';
	  显示奏折内容(显示用的地方收成表);
   };
   id('gyzouzhe').onclick = function(){
	  if(每月的官员奏折.length <= 0){
		 小提示("无重要的官员奏折");
	  }
	  else{
		 id('szb').style.display = 'block';
		 显示奏折内容2(每月的官员奏折);
	  }
   };
  id('jszouzhe').onclick = function(){
	  if(每月的军事奏折 == ""){
		 小提示("无重要的军事奏折");
	  }
	  else{
		id('szb').style.display = 'block';
		 id('szbText').innerText = 战争结局.战报;
		 id('szbgb').onclick = function(){
			this.parentNode.style.display = 'none';;
			战争结局.战报 = "";
		 };
	  }
   };
   id('gbzouzhe').onclick = function(){
	  id('zouzhe').style.display = 'none';
   };
}
function 记载入官员奏折的程序(文本){
   每月的官员奏折.push(文本);
}
function 每月官员的弹劾奏折(){
   if(random(3) == 0){
	  var _loc6_ = random(3);
	  var _loc4_ = [];
	  var _loc1_ = 0;
	  while(_loc1_ < _all_rencai.length){
		 _loc4_.push(_all_rencai[_loc1_].名字);
		 _loc1_ = _loc1_ + 1;
	  }
	  var _loc5_ = ["嚣张跋扈","非法圈地","作风问题","纵容亲属","言语不敬","拉帮结派","私自敛财","饮酒失态"];
	  _loc1_ = 0;
	  while(_loc1_ < _loc6_){
		 var _loc2_ = _loc4_[random(_loc4_.length)];
		 var _loc3_ = _loc5_[random(_loc5_.length)];
		 每月的官员奏折.push(_loc2_ + " 被言官以 “" + _loc3_ + "” 理由上本弹劾。");
		 _loc1_ = _loc1_ + 1;
	  }
   }
}
function 显示奏折内容2(内容){
	id('szbText').innerText = "";
   var _loc2_ = 0;
   while(_loc2_ < 内容.length){
	   id('szbText').innerText += 内容[_loc2_] + "\n";
	  _loc2_ = _loc2_ + 1;
   }
}
function 显示奏折内容(内容){
   id('szbTittle').innerText = '奏折';
   id('szbText').innerText = 内容;
}
function 每月奏折取消(){
   id('zouzhe').style.display = 'none';
}
每月的官员奏折 = [];
敬事房的存档 = [];
后宫记事的存档 = [];
每月的军事奏折 = "";
function 排序计算程序(列表,数据,参数){
   if(参数 == 0){
	  列表.sort(compare(数据,0));
   }
   else if(参数 == 1)
   {
	  列表.sort(compare(数据));
   }
}
function 学习事件处理(参数){
	缓动黑幕();
	id('youyuan').style.display = 'block';
	if(参数 == 5){
		id('yyBG').src =LJ +  "a0aPic_BG/Tu_111999.jpg";
		属性.体力 -= 40;
		id('yyText').innerText = "皇上在伶人馆欣赏表演。才艺、魅力上升。";
		属性.才艺 += 15 + random(10);
		属性.魅力 += 15 + random(10);
		所有伶官 = Array();
		var _loc3_ = 0;
		while(_loc3_ < 所有戏子.length){
			if(所有戏子[_loc3_].伶官 == 1){
				所有伶官.push(所有戏子[_loc3_]);
			}
			_loc3_ += 1;
		}
		if(所有伶官.length > 0){
			伶官演出事件();
	  }
   }
   else if(参数 == 3){
	  id('yyBG').src =LJ +  "a0aPic_BG/Tu_4.jpg";
	  属性.体力 -= 40;
	  id('yyText').innerText = "皇上在武英馆锻炼身体。武力、统帅上升。";
	  属性.武力 += 15 + random(10);
	  属性.统帅 += 15 + random(10);
	  if(年 >= 8 && 年 <= 9 && 主角.嘉宁 <= 3 && 主角.难度 !== 4){
		 长公主遇到天策男();
	  }
	  else if(年 <= 11 && 主角.嘉宁 == 4 && 主角.难度 !== 4){
		 天策护驾();
	  }
	  else if(主角._relation_hongxingshou >= 200 && 主角.红星寿 == 2){
		 炽热的鲜血();
	  }
   }
   else if(参数 == 1){
	  id('yyBG').src =LJ +  "a0aPic_BG/Tu_2.jpg";
	  id('yyText').innerText = "皇上在养心殿休息。";
	  if(主角.曹夙峰 == 3){
		 妖画事件();
	  }
	  属性.体力 += 220;
	  if(属性.体力 > 属性.体力上限){
		 属性.体力 = 属性.体力上限;
		 id('yyText').innerText += "\n体力恢复全满。";
	  }
	  else{
		 id('yyText').innerText += "\n体力恢复220";
	  }
   }
   else if(参数 == 2){
	  id('yyBG').src =LJ +  "a0aPic_BG/Tu_3.jpg";
	  属性.体力 -= 40;
	  id('yyText').innerText = "皇上在御书房读书。智力、政治上升。";
	  属性.智力 += 15 + random(10);
	  属性.政治 += 15 + random(10);
   }
   else if(参数 == 4){
	  id('yyBG').src =LJ +  "a0aPic_BG/Tu_5.jpg";
	  属性.体力 -= 30;
	  id('yyText').innerText = "前往寿康宫向太后请安。道德上升。";
	  属性.道德 += random(4) + 3;
	  var _loc5_ = random(5);
	  if(年 <= 2 && 国家.事件三 == 0){
		太后推荐侄女();id('youyuan').style.display = 'none';
	  }
	  else if(年 == 5 && 国家.事件九 == 0){
		 太后头风发作();id('youyuan').style.display = 'none';
	  }
	  else if(_loc5_ == 0){
		 太后赐温情酒();id('youyuan').style.display = 'none';
	  }
   }
   else if(参数 == 6){
	  id('yyBG').src =LJ +  "a0aPic_BG/Tu_87245.jpg";
	  属性.体力 -= 40;
	  id('yyText').innerText = "皇上在琴淑阁下棋弹琴。魅力、智力上升。";
	  属性.魅力 += 15 + random(10);
	  属性.智力 += 15 + random(10);
   }
   else if(参数 == 7){
	  id('yyBG').src =LJ +  "a0aPic_BG/Tu_413248.jpg";
	  属性.体力 -= 30;
	  id('yyText').innerText = "皇上在宝华殿诵经祈福。道德上升、暴戾下降。";
	  属性.道德 += random(4) + 3;
	  属性.暴戾 -= random(3) + 1;
   }
   else if(参数 == 8){
	  id('yyBG').src =LJ +  "a0aPic_BG/Tu_100008.jpg";
	  属性.体力 -= 30;
	  id('yyText').innerText = "皇上在灵山感业寺烧香拜佛。道德上升、暴戾下降。";
	  属性.道德 += random(4) + 3;
	  属性.暴戾 -= random(3) + 1;
   }
   else if(参数 == 9){
	  id('yyBG').src =LJ +  "a0aPic_BG/Tu_2.jpg";
	  id('yyText').innerText = "皇上在养心殿休息。";
	  if(主角.当前时辰 == 0){
		  var _loc1_ =400;属性.体力 += 400;
	  }
	  else if(主角.当前时辰 == 1){
		  var _loc1_ =340;属性.体力 += 340;
	  }
	  else if(主角.当前时辰 == 2){
	  	  var _loc1_ =280;属性.体力 += 280;
	  }else{var _loc1_ =220;属性.体力 += 220;}
	  if(属性.体力 > 属性.体力上限){
		 属性.体力 = 属性.体力上限;
		 id('yyText').innerText += "\n体力恢复全满。";
	  }
	  else{
		 id('yyText').innerText += "\n体力恢复" + _loc1_+"。";
	  }
	}
	更新资料();
	id('yykuang').onclick = function(){
	  if(参数 == 9){主角.当前时辰 = 4;}else{主角.当前时辰 += 1;}
	  时辰推进();
	  id('youyuan').style.display = 'none';
   };
}
function 玩法说明(参数){
   id('szb').style.display = 'block';
   if(参数 == 0){
	  id('szbTittle').innerText = "课程说明";
	  id('szbText').innerText = "\n	给子女安排课程后，在课程名单中的子女会每个回合自动增加相应课程的属性，增加的数值和上限均与子女本身的天赋有关。每个子女只能选择一种课程，无课程的子女将随机增加少量属性或不加。每种课程最多有10个学生名额。课程与单独教导或训练子女不冲突，增加属性效果可叠加。\n";
	  i = 0;
	  while(i < 所有课程.length)
	  {
		 id('szbText').innerText += "\n" + 所有课程[i].名称 + "：" + 所有课程[i].说明;
		 i++;
	  }
   }
   else if(参数 == 1){
	  id('szbTittle').innerText = "太医值班";
	  id('szbText').innerText = "\n	三级宫殿可以安排太医值班。有太医值班的宫中的妃子生病率和难产率都会降低，但是无法完全避免，如果有妃子生病了，还是需要单独请太医治疗。已经有值班任务的太医就无法再给其他妃子治病了。";
   }
   else if(参数 == 2){
	  id('szbTittle').innerText = "朝政说明";
	  id('szbText').innerText = "\n	朝堂上，基本上每一项任务都需要选择执行人，每位大臣每个月只能执行一项任务，执行任务时会按照执行人的各项属性对执行的效率进行修正。军队统帅、罪臣和委任地区的官员是无法再完成其他任务的，只能解散军队、释放或解除委任后才可自由给官员安排其他任务。大臣每次完成一项任务会获得一定的功勋，功勋积累到一定程度可以晋升品阶。";
   }
   else if(参数 == 3){
	  id('szbTittle').innerText = "军队说明";
	  id('szbText').innerText = "\n	国家可以拥有多少支军队取决于皇帝的统帅，每50点统帅可多拥有一支军队。军队在组建之初要选择兵种和将军，兵种和将军一旦选定不能改变，除非解散军队。";
	  id('szbText').innerText += "\n	军队组建好后，可以调整兵力，增加兵力不光需要闲散的士兵还需要配备相应的武器装备。刚刚组建的军队是没有士气的，需要经过训练或者犒赏来提升士气，如士气太低，其战斗力也会大打折扣。每支军队在训练的时候增加多少士气又带队将领的武力决定。";
	  id('szbText').innerText += "\n	在编的军队中士兵是不能辞退的，只有解散之后，才能让闲散士兵解甲归田。征兵和解甲归田都需要额外的花费，另外，在编士兵和闲散士兵每人每月分别消耗15、10两银子和10石粮食。";
	  id('szbText').innerText += "\n	军队将领最好选择野心较低的官员担任，如果野心较高且忠诚较低，会发生哗变。哗变的危害很大，轻则失去军队和将领，重则丢失城池和城中委任官员。";
   }
   else if(参数 == 4){
	  id('szbTittle').innerText = "战争说明";
	  id('szbText').innerText = "\n	目前的版本是没有外国主动攻击的，所有战争均由我方发起。战争开始前期，可以派血滴子到敌方进行破坏，这样可以降低敌方的战力。";
	  id('szbText').innerText += "\n	战斗准备阶段，需要准备好出征的军队，尽量保证士气较高，并且准备好出征时所需的军粮（出征全部军队兵力*100），然后选择出征的将领即可。如果有成年的王爷或者皇子，可以让他们跟去出战，可以增加军队的威力。王爷增加的战力取决于皇帝与王爷的关系，皇子增加的战力取决于皇子的统帅和与皇上的关系。";
	  id('szbText').innerText += "\n	战斗计算阶段，主动攻击的一方先发起进攻，每支军队均对敌方造成伤害后，计算被攻击方的攻击输出，并将伤害分摊到主动攻击的每支军队上。注意，军队将领的武力决定了军队的攻击力，统帅决定军队的防御力。双方进行十回合攻防计算，若有一方兵力为0，则有输赢，若双方兵力都大于零，则暂时平局。";
   }
   else if(参数 == 5){
	  id('szbTittle').innerText = "地方发展";
	  id('szbText').innerText = "\n	无委任的地区发展要靠皇帝每个月的操作，虽然过程繁琐，但是发展较快。委任的地区每月会自动计算收支，收支记录在每月的奏折中。地方上的钱粮来自于百姓，所以人口才是第一发展力，可以说国家的一切都要仰仗人口，人口的增长和人口基数、地方的治安以及工资水平是正相关的。每月地方从百姓手中收购物资，然后再卖出，得到金钱，这些钱有一部分是要发工资给百姓，另一部分会留在府库中，中央可适时提取；同时，每月地方从百姓手中征粮，但也要给百姓留一部分口粮。如果百姓没有粮食或者得不到工资，民心下降，地方就会暴动。";
   }
   else if(参数 == 6){
	  id('szbTittle').innerText = "地方委任";
	  id('szbText').innerText = "\n	通常情况下，皇帝会亲自治理地区，这样发展速度较快，但当地区太多的时候，未免忙不过来，所以此时就可以将地区行政委任给比较信任的几个官员，让官员自动去治理。地区委任时需要7名大臣，分别负责上缴府库、征缴粮食、收购物资、商馆交易、发展建设、城市扩张、治安巡查。安排官员时应尽量按照各职位所需属性进行安排。";
	  id('szbText').innerText += "\n\n上缴府库：需要清廉高、野心低的人才。";
	  id('szbText').innerText += "\n征缴粮食：需要武力、清廉高的人才。";
	  id('szbText').innerText += "\n收购物资：需要智力、清廉高的人才。";
	  id('szbText').innerText += "\n商馆交易：需要智力、清廉高的人才。";
	  id('szbText').innerText += "\n发展建设：需要政治高的人才。";
	  id('szbText').innerText += "\n城市扩张：需要政治、武力、统帅高的人才。";
	  id('szbText').innerText += "\n治安巡查：需要武力高的人才。\n";
	  id('szbText').innerText += "\n	委任后，该城市的发展命令将被冻结，每个月会自动结算收支以及城市的各项指标，当然皇帝可以通过征收或下发钱粮等方式对地区发展进行适当调控。";
   }
   else if(参数 == 7){
	  id('szbTittle').innerText = "易储说明";
	  id('szbText').innerText = "\n	废立储君之前会发生朝堂上大臣议论事件，根据大臣们的言论可以推断出几个朝中势力比较大的皇子。游戏初始阶段立皇长子为储君，之后皇帝如果想改立其他皇子，需保证该皇子的朝中势力大于原太子，否则朝中大臣会拥立原太子。有若干种方法可以增加皇子势力，如给皇子选民间美女做正妃、让皇子去祭祖、让皇子带兵打仗等。当某个皇子的能力远大于太子且野心较高时，还有可能发生玄武门之变事件，使得东宫易主。";
   }
   else if(参数 == 8){
	  id('szbTittle').innerText = "贸易说明";
	  id('szbText').innerText = "\n	外贸只能与未亡国的国家进行，与叛军不可进行外贸。当外交关系为【一般】以上的时候，外贸才会成功进行，否则对方国家不接受外贸请求，需要通过其他方法提高外交关系后才可进行贸易。外贸的收入为【每年结算一次】，结算时的收益与两国人口差距（我方人口-对方人口）、对方友好度、贸易年数、皇帝的智力、皇帝的政治正相关。";
   }
   else if(参数 == 9){
	  id('szbTittle').innerText = "联姻说明";
	  id('szbText').innerText = "\n	将成年的公主嫁到外国进行联姻可增加与外国的关系。但是如果外交关系已经为开战状态，则无法联姻。另外，如果女儿的年龄已经大于25岁，联姻也是无法成功的。选择公主联姻时，有几率会触发公主不愿联姻的事件，此时皇帝可选择更换公主或者执意联姻。联姻的公主将离开本国，而且有可能会在出嫁后死亡，公主出嫁时候操办婚事的隆重程度分为四种，花费依次递增，但花费越多越可以增加公主在外国的寿命。成功联姻后，与外国的关系会增加。";
   }
   else if(参数 == 10){
	  id('szbTittle').innerText = "处理罪臣";
	  id('szbText').innerText = "\n	缉拿归案的罪臣如果不处理，则官员一直处于被关押状态，且每月需支付其俸禄。处理罪臣时根据官员的罪行类别、严重程度和处理方法，会对其他官员的属性进行修正。";
	  id('szbText').innerText += "\n\n贪污罪处理修正影响如下：";
	  id('szbText').innerText += "\n【罪臣清廉40以下】：斩首示众，其他官员清廉+10，国库+100000；充军发配，其他官员清廉+5，国库+100000；革职抄家，其他官员清廉+3，国库+100000；无罪释放，其他官员清廉-3。";
	  id('szbText').innerText += "\n【罪臣清廉40至60】：斩首示众，其他官员清廉+5，国库+50000；充军发配，其他官员清廉+5，国库+50000；革职抄家，其他官员清廉+2，国库+50000；无罪释放，其他官员清廉-2。";
	  id('szbText').innerText += "\n【罪臣清廉60至80】：斩首示众，其他官员清廉+2，国库+10000；充军发配，其他官员清廉+2，国库+10000；革职抄家，其他官员清廉+1，国库+10000；无罪释放，其他官员清廉-1。";
	  id('szbText').innerText += "\n【罪臣清廉80以上】：斩首示众，其他官员忠诚-15，国库+1000；充军发配，其他官员忠诚-15，国库+1000；革职抄家，其他官员忠诚-15，国库+1000；无罪释放，其他官员无影响。";
	  id('szbText').innerText += "\n谋反罪处理修正影响如下：";
	  id('szbText').innerText += "\n【罪臣野心40以下】：斩首示众，其他官员忠诚-10；充军发配，其他官员忠诚-8；革职抄家，其他官员忠诚-8；无罪释放，其他官员无影响。";
	  id('szbText').innerText += "\n【罪臣野心40至60】：斩首示众，其他官员忠诚-1，野心-2；充军发配，其他官员野心-2，忠诚-1；革职抄家，其他官员野心-1，忠诚-1；无罪释放，其他官员野心+1，忠诚-1。";
	  id('szbText').innerText += "\n【罪臣野心60至80】：斩首示众，其他官员野心-5；充军发配，其他官员野心-2；革职抄家，其他官员野心+1；无罪释放，其他官员野心+3。";
	  id('szbText').innerText += "\n【罪臣野心80以上】：斩首示众，其他官员野心-10；充军发配，其他官员野心-5；革职抄家，其他官员野心+2；无罪释放，其他官员野心+5。";
   }
   else if(参数 == 11){
	  id('szbTittle').innerText = "雕刻说明";
	  id('szbText').innerText = "\n	雕刻木器功能可以让玩家制造家具。家具的材质取决于选择的木材，每一种木材的价格不同，对应的珍贵程度也就不同，越好的木材造出的家具在同等品质的情况下等级越高。家具的品质取决于皇帝自身的【才艺】、【智力】、以及与【少府监】的好感度三者计算而成的基准。这三项属性越高，造出的家具品质越好。家具的品质分为破损、粗糙、平稳、精美、顶级。当计算基准过低的时候只能磨出一堆木屑，造不出家具；计算基准提高到某个值时就可以造出家具（建议才艺及智力超过100，有随机概率）。最终家具的价值会取决于品质和材质二者结合，至于家具的样式则是随机的，例如：“顶级紫檀床榻”，其中“顶级”和“紫檀”决定了家具的价值，“床榻”则是随机生成跟价值无关的。";
   }
   else if(参数 == 12){
	  id('szbTittle').innerText = "建造宫殿";
	  id('szbText').innerText = "\n	后宫的宫殿在初始时只有寥寥几个，更多的宫殿需要玩家自己建设。每个宫殿中可以住5个妃嫔，当宫殿全部都住满的时候，就没办法再封新的妃嫔了。每个宫殿都有正殿、偏殿、箱阁，玩家可以安排喜欢的妃子住在不同的殿内，但是普遍情况下，正殿应为本宫最高位妃子所住。每个宫殿的建设费用是不同的，依次递增。建设宫殿的时候，玩家可以自由为宫殿取名字。宫殿没有建设周期，即建即住。宫殿刚刚建设好时等级为一级，玩家可以升级宫殿，最高为三级，宫殿等级越高，住在里面的妃子就可以得到更多的福利，如爱情加成、更多的用人等等。";
   }
   else if(参数 == 13){
	  id('szbTittle').innerText = "研发技术";
	  id('szbText').innerText = "\n	研发技术有提高发展速度、提高军队战力、生产军装等等效用。研发技术需要耗费大量金钱，并且每一项技术研发时有一定的研发周期，当研发周期结束，该技术就会被研发出来，并且该技术的效用即时生效。玩家可以在技术一览中看到已经获得的技术，大部分技术是通过研发获得的，另外有一些是通过特殊途径获得的。";
   }
   else if(参数 == 14){
	  id('szbTittle').innerText = "协理六宫";
	  id('szbText').innerText = "\n	皇帝可选择一名位分在妃以上皇后以下的妃嫔来协理六宫，该妃嫔的清廉和皇后的清廉同时决定了后宫整体开销，影响比例各占五成，计算得出一个后宫开销常数。在计算每个后宫妃嫔的花销时，除了妃子自身的位分、清廉以及用人数量会影响开销以外，会在总数上乘以后宫开销常数，因此协理后宫的妃嫔和皇后的清廉度在后宫花费上有十分重要的影响。妃嫔的清廉可以通过观察其在后宫中的对话或开销总数对比得出。";
   }
   else if(参数 == 15){
	  id('szbTittle').innerText = "乾清宫说明";
	  id('szbText').innerText = "\n	\n";
   }
   else if(参数 == 16){
	  id('szbTittle').innerText = "劝诱说明";
	  id('szbText').innerText = "\n	世界版图的各个城市中，隐藏着多位可以出仕的人才。当某个城市归属于玩家时，就可以在劝诱人才的列表中看到该城市内的人才，并可以执行劝诱。劝诱时需要一名官员来对人才进行说服。劝诱成功的方法不止一种：\n	1.当执行人的统帅、武力、智力、魅力均高于该人才时可劝诱成功。\n	2.当达到某种特殊条件时可劝诱成功。特殊条件有可能是季节、月份、执行人身份、皇帝属性等等，视人才各有不同。";
   }
   else if(参数 == 17){
	  id('szbTittle').innerText = "炼丹说明";
	  id('szbText').innerText = "\n	通过地方进贡、打猎等方式得到的药材可以炼丹。不同的药材有不同的属性数值，属性分为阳性属性（土、火、光、雷）和阴性属性（木、水、暗、风），一颗丹药练成时哪个属性的数值之和多，丹药就为哪个性。丹药的阴阳和食用的季节会影响皇上的一部分属性。药材入锅后，其所带有的属性就加入未成型的丹药中，药材一旦入锅后就不能拿出来了，所以一颗丹药在成型之前的属性是只可增加不可减少的。放入足够的药材之后，开始炼制，即可根据已经加好的属性练出不同的丹药。\n";
	  id('szbText').innerText += "\n	当所有属性（土、火、光、雷、木、水、暗、风）都在50以下时，会得到不同颜色的普通丹药；当所有属性都在50以上时，会随机得到一种特殊丹药；当所有属性都在90至99之间时，会得到天地长寿丹。";
   }
}
function 进入掖庭(){
	id('hukoupucha').style.display = 'block';
	id('hukouBG').style.display = 'block';新后宫图形读取程序(id('hukouBG'),189189,"背景");
	id('huhouTitle').innerText = "掖庭";
	id('huhouText').innerText = "要放哪位妃子出掖庭吗？";
	id('hkan1').onclick = function (){id('hukoupucha').style.display = 'none';id('hukouBG').style.display = 'none';}
	id('hkan0').onclick = function(){
	  嫔妃一览程序(13);
	  id('hukoupucha').style.display = 'none';id('hukouBG').style.display = 'none';
   };
}
function 储秀阁程序(){
	id('neishiMB').style.display = 'block';
	id('neishiBG').style.display = 'block';
	id('neishi2').style.display = 'none';
	新后宫图形读取程序(id('neishiBG'),21,"背景");
	id('neishiTitle').innerText = '储秀阁';
	id('nsan0').innerText = '查看秀女';
	id('nsan1').innerText = '留宫住宿';
	id('nsan2').innerText = '赐予皇子';
	id('nsan3').innerText = '赐予大臣';
	id('neishiText').innerText = '储秀阁是安置秀女的场所。';
	id('nsan0').onclick = function (){嫔妃一览程序(88)};
	id('nsan1').onclick = function (){id('neishiMB').style.display = 'none';选择去哪个宫殿(88)};
	id('nsan2').onclick = function (){嫔妃一览程序(89)};
	id('nsan3').onclick = function (){小提示("未完善")};
}
function 播放音乐(源,循环){
	var mus = id('mu1');
	mus.src =LJ + "music/"+源+".mp3";
	if(循环 == 1){mus.loop = "loop";}else{mus.loop = undefined;}
	mus.play();
}
function 停止音乐(){
	黑色幕布();
	id('mu1').src = "";	
	id('mu1').pause();
}