function 加载进步动画条的说(){}
function 游戏回合推进(参数){
   id("hgdt").scrollTop=200;
   id("hgdt").scrollLeft=334;
   if(id("hgdt").style.top=="0px"){
	   id("hgdt").style.top="-222px";
	   if(id("皇宫上")!==undefined){
	   	   id("皇宫上").style.top="222px";
	   	   id("皇宫下").style.top="-642px";
	   	   id("皇宫左").style.top="220px";
	   	   id("皇宫右").style.top="220px";
	   }
   }
   if(id("hgdt").style.left=="0px"){
   	   id("hgdt").style.left="-334px";
	   if(id("皇宫左")!==undefined){
	   	   id("皇宫左").style.left="334px";
	   	   id("皇宫右").style.left="1054px";
	   }
   }
   刷新世界所有的国家数据();
   每月敌军兵力恢复();
   每月敌国友好度修正();
   每月联姻保护期递减();
   每月敌国主动外交();
   if(参数 == 0){
      主角.当前时辰 = 1;
   }
   else{
      主角.当前时辰 = 0;
   }
   if(旬 == "上旬"){
      旬 = "中旬";
   }
   else if(旬 == "中旬"){
      旬 = "下旬";
   }
   else{
      旬 = "上旬";
      季 += 1;
   }
   if(月 == 12){
      月 = 1;
   }
   else{
      月++;
   }
   if(国家.训练周期 > 0){
      国家.训练周期--;
      国家.训练 += 2;
      if(国家.训练 > 100){
         国家.训练 = 100;
      }
   }
   敌人AI程序();
   每月的官员奏折 = [];
   每月官员的弹劾奏折();
   每月丞相奏报 = [];
   计算各种造反();
   官员辞官事件();
   i = 0;
   while(i < 所有敌将.length){
      if(所有敌将[i].被关押 == 1){
         所有敌将[i].抗拒 -= 2;
      }
      i++;
   }
   k = 0;
   while(k < _all_army.length){
      _all_army[k].训练度 -= 1;
      if(_all_army[k].训练度 < 0){
         _all_army[k].训练度 = 0;
      }
      k++;
   }
   每个月军工业生产();
   每个月的各地收支();
   更新每个月的收益();
   随机获取三方相性();
   自动补齐三方相性();
   刷新每个人的三方势力();
   成年皇子给自己增加势力();
   刷新官员品阶();
   刷新党派();
   时辰推进();
   等待的大黑布();
   if(参数 == 0){
      主角.当前时辰 = 1;
   }
}
function 更新每个月的收益(){
   技术研发周期推进();
   特殊建筑周期推进();
   刷新特殊建筑效果();
   国家.可用民夫 = 国家.民夫 - 国家.特殊建筑民夫;
   电脑自动建城();
   诸侯国进贡计算();
   if(国家.金钱 < 0){
      主角.负数时间 += 1;
   }
   else{
      主角.负数时间 = 0;
   }
   if(国家.粮食 < 0){
      主角.断粮时间 += 1;
   }
   else{
      主角.断粮时间 = 0;
   }
   if(主角.祭祀 > 0){
      主角.祭祀--;
   }
   主角._huangyin += 1;
   主角._anquan += 1;
   if(主角._huangyin >= 16){
      var _loc1_ = 0;
      while(_loc1_ < _all_rencai.length){
         _all_rencai[_loc1_].野心 += 1;
         if(_all_rencai[_loc1_].野心 > 70){
            _all_rencai[_loc1_].忠诚 -= 1;
         }
         if(_all_rencai[_loc1_].忠诚 < 1){
            _all_rencai[_loc1_].忠诚 = 1;
         }
         _loc1_ = _loc1_ + 1;
      }
   }
   if(属性.年龄 >= 40 && 属性.年龄 < 50){
      属性.统帅 -= 1;
      属性.智力 -= 1;
      属性.武力 -= 2;
      属性.政治 -= 1;
      属性.才艺 -= 2;
      属性.魅力 -= 2;
      属性.健康 -= 1;
   }
   else if(属性.年龄 >= 50){
      属性.统帅 -= 1;
      属性.智力 -= 5;
      属性.武力 -= 5;
      属性.政治 -= 1;
      属性.才艺 -= 5;
      属性.魅力 -= 5;
      属性.健康 -= 3;
   }
   if(所有特殊建筑[1].建筑程度 == 3){
      书院效果处理();
   }
   if(所有特殊建筑[2].建筑程度 == 3){
      大佛寺效果处理();
   }
   if(所有特殊建筑[3].建筑程度 == 3){
      武馆效果处理();
   }
   if(所有特殊建筑[4].建筑程度 == 3){
      东厂效果处理();
   }
   if(所有特殊建筑[7].建筑程度 == 3){
      洛口仓效果处理();
   }
   if(所有特殊建筑[9].建筑程度 == 3){
      孔庙效果处理();
   }
   if(国家.供药局 == 1){
      产生成药();
      产生成药();
   }
   else if(国家.供药局 == 2){
      产生成药();
      产生成药();
      产生成药();
   }
   else if(国家.供药局 == 3){
      产生成药();
      产生成药();
      产生成药();
      产生成药();
   }
   var _loc2_ = 0;
   _loc1_ = 0;
   while(_loc1_ < _all_city.length){
      if(_all_city[_loc1_].归属 == 8){
         更新城市的属性值(_all_city[_loc1_]);
         _loc2_ += 1;
         if(属性.统帅 < 500){
            _all_city[_loc1_].治安 -= 1;
         }
         if(属性.武力 < 500){
            _all_city[_loc1_].治安 -= 1;
         }
         if(属性.智力 < 500){
            _all_city[_loc1_].治安 -= 1;
         }
         if(属性.政治 < 500){
            _all_city[_loc1_].治安 -= 1;
         }
         if(属性.魅力 < 500){
            _all_city[_loc1_].治安 -= 1;
         }
         if(_all_city[_loc1_].治安 < 0){
            _all_city[_loc1_].治安 = 0;
         }
      }
      _loc1_ = _loc1_ + 1;
   }
   var _loc3_ = 收支表程序();
   var _loc5_ = _loc3_.总收入;
   var _loc4_ = _loc3_.总耗粮;
   国家.粮食 -= _loc4_;
   国库钱数变动的程序(_loc5_);
   属性.寿命 -= 1;
   if(属性.年龄 > 50){
      属性.寿命 -= 1;
      属性.健康 -= 2;
   }
   if(属性.年龄 > 55){
      属性.寿命 -= 2;
      属性.健康 -= 2;
   }
   if(属性.年龄 > 60){
      属性.寿命 -= 3;
      属性.健康 -= 4;
   }
   if(属性.年龄 > 65){
      属性.寿命 -= 4;
      属性.健康 -= 6;
   }
   if(属性.年龄 > 70){
      属性.寿命 -= 5;
      属性.健康 -= 8;
   }
   if(属性.年龄 > 75){
      属性.寿命 -= 15;
      属性.健康 -= 18;
   }
   if(属性.年龄 > 80){
      属性.寿命 -= 25;
      属性.健康 -= 38;
   }
   if(属性.年龄 > 85){
      属性.寿命 -= 35;
      属性.健康 -= 58;
   }
   更新季节的程序呢();
   恢复特殊开关的开关();
   更新各城府的等级();
   更新资料();
}
function 电脑自动建城(){
   var _loc2_ = 0;
   while(_loc2_ < _all_city.length){
      if(_all_city[_loc2_].归属 == 8 && _all_city[_loc2_].地方委任 == 1){
         var _loc5_ = _all_city[_loc2_].民间粮食 - _all_city[_loc2_].人口 * 10;
         if(_loc5_ < 0){
            _loc5_ = 0;
         }
         _all_city[_loc2_].民间粮食 -= _loc5_ / 2;
         _all_city[_loc2_].粮食 += Math.round(_loc5_ / 2 * _all_city[_loc2_].委任者[1].清廉 / 100);
         _all_city[_loc2_].种植业 += Math.round(_all_city[_loc2_].委任者[4].政治 * 4);
         if(_all_city[_loc2_].种植业 - _all_city[_loc2_].种植业上限 >= 0){
            _all_city[_loc2_].种植业 = _all_city[_loc2_].种植业上限;
         }
         _all_city[_loc2_].丝织业 += Math.round(_all_city[_loc2_].委任者[4].政治 * 0.04);
         if(_all_city[_loc2_].丝织业 - _all_city[_loc2_].丝织业上限 >= 0){
            _all_city[_loc2_].丝织业 = _all_city[_loc2_].丝织业上限;
         }
         _all_city[_loc2_].陶瓷业 += Math.round(_all_city[_loc2_].委任者[4].政治 * 0.04);
         if(_all_city[_loc2_].陶瓷业 - _all_city[_loc2_].陶瓷业上限 >= 0){
            _all_city[_loc2_].陶瓷业 = _all_city[_loc2_].陶瓷业上限;
         }
         _all_city[_loc2_].采矿业 += Math.round(_all_city[_loc2_].委任者[4].政治 * 0.04);
         if(_all_city[_loc2_].采矿业 - _all_city[_loc2_].采矿业上限 >= 0){
            _all_city[_loc2_].采矿业 = _all_city[_loc2_].采矿业上限;
         }
         _all_city[_loc2_].珠宝业 += Math.round(_all_city[_loc2_].委任者[4].政治 * 0.04);
         if(_all_city[_loc2_].珠宝业 - _all_city[_loc2_].珠宝业上限 >= 0){
            _all_city[_loc2_].珠宝业 = _all_city[_loc2_].珠宝业上限;
         }
         _all_city[_loc2_].畜牧业 += Math.round(_all_city[_loc2_].委任者[4].政治 * 0.04);
         if(_all_city[_loc2_].畜牧业 - _all_city[_loc2_].畜牧业上限 >= 0){
            _all_city[_loc2_].畜牧业 = _all_city[_loc2_].畜牧业上限;
         }
         _all_city[_loc2_].种植业上限 += Math.round(666 * _all_city[_loc2_].委任者[5].武力 / 100);
         _all_city[_loc2_].丝织业上限 += Math.round(3 * _all_city[_loc2_].委任者[5].智力 / 100);
         _all_city[_loc2_].陶瓷业上限 += Math.round(3 * _all_city[_loc2_].委任者[5].智力 / 100);
         _all_city[_loc2_].采矿业上限 += Math.round(3 * _all_city[_loc2_].委任者[5].统帅 / 100);
         _all_city[_loc2_].珠宝业上限 += Math.round(3 * _all_city[_loc2_].委任者[5].政治 / 100);
         _all_city[_loc2_].畜牧业上限 += Math.round(3 * _all_city[_loc2_].委任者[5].统帅 / 100);
         if(_all_city[_loc2_].种植业上限 > 500000){
            _all_city[_loc2_].种植业上限 = 500000;
         }
         if(_all_city[_loc2_].丝织业上限 > 1200){
            _all_city[_loc2_].丝织业上限 = 1200;
         }
         if(_all_city[_loc2_].陶瓷业上限 > 1200){
            _all_city[_loc2_].陶瓷业上限 = 1200;
         }
         if(_all_city[_loc2_].采矿业上限 > 1200){
            _all_city[_loc2_].采矿业上限 = 1200;
         }
         if(_all_city[_loc2_].珠宝业上限 > 1200){
            _all_city[_loc2_].珠宝业上限 = 1200;
         }
         if(_all_city[_loc2_].畜牧业上限 > 1200){
            _all_city[_loc2_].畜牧业上限 = 1200;
         }
         _all_city[_loc2_].治安 += Math.round(20 * _all_city[_loc2_].委任者[6].武力 / 100);
         if(_all_city[_loc2_].治安 > 100){
            _all_city[_loc2_].治安 = 100;
         }
         var _loc8_ = _all_city[_loc2_].人口 * _all_city[_loc2_].工资 * 2;
         var _loc4_ = _all_city[_loc2_].金钱 - _loc8_;
         if(_loc4_ > 0 && _all_city[_loc2_].负债 == undefined){
            _all_city[_loc2_].金钱 -= Math.round(_loc4_);
            var _loc6_ = Math.round(_loc4_ * (0.5 + 0.5 * _all_city[_loc2_].委任者[0].清廉 / 100));
            国家.金钱 += _loc6_;
            显示用的地方收成表 += "\n【" + _all_city[_loc2_].名称 + "】本月府库充裕，上交金钱" + _loc6_ + "两。";
         }
         else{
            显示用的地方收成表 += "\n【" + _all_city[_loc2_].名称 + "】本月盈余不足，为保存发展资金，无法上交金钱。";
         }
         var _loc3_ = _all_city[_loc2_].粮食 - _all_city[_loc2_].人口 * 10;
         if(_loc3_ > 0){
            _all_city[_loc2_].粮食 -= Math.round(_loc3_ / 2);
            var _loc7_ = Math.round(_loc3_ / 2 * _all_city[_loc2_].委任者[0].清廉 / 100);
            国家.粮食 += _loc7_;
            显示用的地方收成表 += "\n【" + _all_city[_loc2_].名称 + "】本月存粮充裕，上交粮食" + _loc7_ + "石。";
         }
         else{
            显示用的地方收成表 += "\n【" + _all_city[_loc2_].名称 + "】本月存粮不足，无法上交粮食。";
         }
         n = 0;
         while(n < 7){
            _all_city[_loc2_].委任者[n].功勋 += 10;
            n++;
         }
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 诸侯国进贡计算(){
   var _loc8_ = 0;
   while(_loc8_ < _all_child.length){
      if(_all_child[_loc8_].状态 == 5){
         var _loc2_ = _all_child[_loc8_];
         var _loc3_ = 0;
         while(_loc3_ < _all_city.length){
            if(_all_city[_loc3_].id == _loc2_.封地){
               var _loc5_ = _all_city[_loc3_];
               var _loc6_ = (_loc2_.智力 + _loc2_.政治 + _loc2_.统帅 + _loc2_.武力) / 100 * _loc2_.魅力 / 100 * _loc2_.清廉 / 100 * (2 - _loc2_.野心 / 100) * _loc2_.关系 / 10;
               var _loc4_ = Math.round(50000 * _loc6_) + random(5000);
               国家.金钱 += _loc4_;
               if(random(3) == 0)
               {
                  var _loc7_ = 来一个宝贝();
                  显示用的地方收成表 += "\n" + _loc2_.封号 + _loc2_.名称 + "封地【" + _loc5_.名称 + "】本月进贡" + _loc4_ + "两。并进贡了【" + _loc7_ + "】一件。";
               }
               else
               {
                  显示用的地方收成表 += "\n" + _loc2_.封号 + _loc2_.名称 + "封地【" + _loc5_.名称 + "】本月进贡" + _loc4_ + "两。";
               }
            }
            _loc3_ = _loc3_ + 1;
         }
      }
      _loc8_ = _loc8_ + 1;
   }
}
function 更新季节的程序呢(){
   if(季 > 4){
      季 = 1;
      年 += 1;
      过年的程序();
   }
   if(季 == 1){
      季节 = "春";
   }
   else if(季 == 2){
      季节 = "夏";
   }
   else if(季 == 3){
      季节 = "秋";
   }
   else if(季 == 4){
      季节 = "冬";
   }
}
function 更新皇宫背景图的程序(){
   if(主角.当前时辰 == 0){
      if(季 == 1){
         id('皇宫背景').src = 'asgPic_DCWindow/1.jpg';
		 id('皇宫背景2').src = 'asgPic_DCWindow/1.jpg';
         id('season').style.backgroundPositionX = '0px';
      }
      else if(季 == 2){
         id('皇宫背景').src = 'asgPic_DCWindow/5.jpg';
		 id('皇宫背景2').src = 'asgPic_DCWindow/5.jpg';
         id('season').style.backgroundPositionX = '-66px';
      }
      else if(季 == 3){
        id('皇宫背景').src = 'asgPic_DCWindow/9.jpg';
		id('皇宫背景2').src = 'asgPic_DCWindow/9.jpg';
         id('season').style.backgroundPositionX = '-132px';
      }
      else if(季 == 4){
         id('皇宫背景').src = 'asgPic_DCWindow/13.jpg';
		 id('皇宫背景2').src = 'asgPic_DCWindow/13.jpg';
         id('season').style.backgroundPositionX = '-198px';
      }
   }
   else if(主角.当前时辰 == 1){
      if(季节 == "春"){
         id('皇宫背景').src = 'asgPic_DCWindow/2.jpg';
         id('season').backgroundPositionX = '0px';
      }
      else if(季节 == "夏"){
         id('皇宫背景').src = 'asgPic_DCWindow/6.jpg';
         id('season').backgroundPositionX = '-66px';
      }
      else if(季节 == "秋"){
         id('皇宫背景').src = 'asgPic_DCWindow/10.jpg';
         id('season').backgroundPositionX = '132px';
      }
      else if(季节 == "冬"){
         id('皇宫背景').src = 'asgPic_DCWindow/14.jpg';
         id('season').backgroundPositionX = '198px';
      }
   }
   else if(主角.当前时辰 == 2){
      if(季节 == "春"){
         id('皇宫背景').src = 'asgPic_DCWindow/3.jpg';
         id('season').backgroundPositionX = '0px';
      }
      else if(季节 == "夏"){
         id('皇宫背景').src = 'asgPic_DCWindow/7.jpg';
         id('season').backgroundPositionX = '-66px';
      }
      else if(季节 == "秋"){
         id('皇宫背景').src = 'asgPic_DCWindow/11.jpg';
         id('season').backgroundPositionX = '132px';
      }
      else if(季节 == "冬"){
        id('皇宫背景').src = 'asgPic_DCWindow/15.jpg';
         id('season').backgroundPositionX = '198px';
      }
   }
   else if(主角.当前时辰 == 3){
      if(季节 == "春"){
         id('皇宫背景').src = 'asgPic_DCWindow/4.jpg';
        id('season').backgroundPositionX = '0px';
      }
      else if(季节 == "夏"){
         id('皇宫背景').src = 'asgPic_DCWindow/8.jpg';
         id('season').backgroundPositionX = '-66px';
      }
      else if(季节 == "秋"){
         id('皇宫背景').src = 'asgPic_DCWindow/12.jpg';
         id('season').backgroundPositionX = '132px';
      }
      else if(季节 == "冬"){
         id('皇宫背景').src = 'asgPic_DCWindow/16.jpg';
         id('season').backgroundPositionX = '198px';
      }
	  更新时辰的执行程序();
   }
}
function 官员辞官事件(){
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      if(_all_rencai[_loc2_].爵位 !== 6 && _all_rencai[_loc2_].爵位 !== 7 && _all_rencai[_loc2_].忠诚 < 30 && (_all_rencai[_loc2_].任务中 == 0 || _all_rencai[_loc2_].任务中 == 1 || _all_rencai[_loc2_].任务中 == 2) && random(_all_rencai[_loc2_].忠诚) == 0){
         var _loc4_ = _all_rencai[_loc2_];
         var _loc7_ = 姓[random(姓.length)];
         var _loc3_ = _loc7_ + 只取名程序("男");
         var _loc5_ = random(5);
         if(_loc5_ == 0){
            var _loc6_ = "启禀皇上，【" + _loc4_.名字 + "】上奏，称在朝为官，心力憔悴，十分向往田园生活，故辞官回乡了。\n该职位吏部推荐由【" + _loc3_ + "】担当。";
         }
         else if(_loc5_ == 1){
            _loc6_ = "启禀皇上，【" + _loc4_.名字 + "】上奏，称自己不适应官场勾心斗角，无能再辅佐，故辞官回乡了。\n该职位吏部推荐由【" + _loc3_ + "】担当。";
         }
         else if(_loc5_ == 2){
            _loc6_ = "启禀皇上，吏部上奏，【" + _loc4_.名字 + "】前夜突然举家迁离京城，似乎是经别国特务策反，叛国逃离了。\n该职位吏部推荐由【" + _loc3_ + "】担当。";
         }
         else if(_loc5_ == 3){
            _loc6_ = "启禀皇上，吏部上奏，【" + _loc4_.名字 + "】留下一张写着“老子要辞职，速批之”的字条便迁离京城了，听说已归隐山林。\n该职位吏部推荐由【" + _loc3_ + "】担当。";
         }
         else{
            _loc6_ = "启禀皇上，吏部上奏，【" + _loc4_.名字 + "】留下一张写着“世界这么大，我想去看看”的字条便迁离京城了，听说是四海云游去了。\n该职位吏部推荐由【" + _loc3_ + "】担当。";
         }
         太监报告所有事件.push([_loc6_,"快乐",0,0,5]);
         记载入官员奏折的程序(_loc6_);
         官员属性更换程序(_loc4_,_loc3_,_loc7_);
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 更新时辰的执行程序(){
   时辰 = 所有时辰[主角.当前时辰];
}
所有时辰 = ["清晨","午后","晚上","深夜"];
function 时辰推进(){
   if(属性.体力 < 10){
      生病出图程序();
   }
   else if(属性.寿命 <= 0){
      生病出图程序();
   }
   else{
      更新皇宫背景图的程序();
      if(主角.当前时辰 > 3){
         游戏回合推进();
      }
      else if(主角.当前时辰 == 1 && 主角.开科考试 == 1){
         主角.开科考试 = 0;
         科举处理();
         if(主角.祭祀活动 == 1){
            小提示("祭祀没办法去了");
            主角.祭祀活动 = 0;
         }
      }
      else if(主角.当前时辰 == 1 && 主角.祭祀活动 == 1){
         主角.祭祀活动 = 0;
         祭祀活动举行();
      }
      else{
         if(主角.当前时辰 == 0){
            每月奏折面板();
            每月后宫数据处理();
            每月血滴子数据();
            太监报告事情(太监报告所有事件);
            if(属性.年龄 > 35){
               if(属性.体力上限 > 180)
               {
                  if(属性.寿命 < 40)
                  {
                     属性.体力上限 -= 30;
                     if(属性.体力上限 < 150)
                     {
                        属性.体力上限 = 150;
                     }
                  }
                  else
                  {
                     属性.体力上限 -= 10;
                  }
               }
            }
         }
         else{
			每月奏折取消();
            黑色幕布();
         }
		  时辰 = 所有时辰[主角.当前时辰];
         var _loc2_ = random(12);
         if(属性.体力 < 40){
            太监问声好(1);
         }
         else if(主角.生病刚好 == 1){
            主角.生病刚好 = 0;
            太监问声好(2);
         }
         else if(_loc2_ == 0){
            太监问声好(3);
         }
         else if(_loc2_ > 3 && _loc2_ <= 6 && random(4) == 0){
            太监问声好(5);
         }
         else if(_loc2_ > 0 && _loc2_ <= 3 && random(4) == 0){
            太监问声好(4);
         }
         else if(_loc2_ > 6 && _loc2_ <= 9&& random(4) == 0){
            太监问声好(6);
         }
         else if(_loc2_ > 9 && _loc2_ < 12 && random(4) == 0){
            太监问声好(7);
         }
         else if(主角.年 == 1){
            太监问声好();
         }
      }
      更新资料();
   }
}
function 生成这个城市的兵力(城){
   var _loc1_ = _all_nation[城.归属].士兵;
   城.士兵 = _loc1_ * 6000;
   城.士兵上限 = _loc1_ * 10000;
}
function 刷新每个国家几城的程序(){
   var _loc1_ = 0;
   while(_loc1_ < _all_nation.length){
      _all_nation[_loc1_].城 = [];
      _loc1_ = _loc1_ + 1;
   }
   _loc1_ = 0;
   while(_loc1_ < _all_city.length){
      _all_nation[_all_city[_loc1_].归属].城.push(_all_city[_loc1_]);
      _loc1_ = _loc1_ + 1;
   }
}
function 开始生成每个城市数值的程序(){
   var _loc1_ = 0;
   while(_loc1_ < _all_city.length){
      生成这个城市的兵力(_all_city[_loc1_]);
      if(_all_city[_loc1_].归属 !== 8){
         _all_city[_loc1_].人口 += random(1000);
      }
      else{
         _all_city[_loc1_].人口 = 49000 + random(1000);
         _all_city[_loc1_].士兵 = 0;
      }
      _all_city[_loc1_].工资 = 2;
      _all_city[_loc1_].等级 = 1;
      _all_city[_loc1_].治安 = 80;
      _all_city[_loc1_].民心 = 65;
      _all_city[_loc1_].行宫 = 0;
      _all_nation[_all_city[_loc1_].归属].城.push(_all_city[_loc1_]);
      _all_city[_loc1_].金钱 = 2750000;
      _all_city[_loc1_].粮食 = 1000000;
      _all_city[_loc1_].布匹 = 0;
      _all_city[_loc1_].瓷器 = 0;
      _all_city[_loc1_].矿石 = 0;
      _all_city[_loc1_].珠宝 = 0;
      _all_city[_loc1_].牲畜 = 0;
      _all_city[_loc1_].民间金钱 = 100000;
      _all_city[_loc1_].民间粮食 = 1000000;
      _all_city[_loc1_].民间布匹 = 0;
      _all_city[_loc1_].民间瓷器 = 0;
      _all_city[_loc1_].民间矿石 = 0;
      _all_city[_loc1_].民间珠宝 = 0;
      _all_city[_loc1_].民间牲畜 = 0;
      _all_city[_loc1_].种植业 = 5000;
      _all_city[_loc1_].丝织业 = 46 + random(3);
      _all_city[_loc1_].陶瓷业 = 46 + random(3);
      _all_city[_loc1_].采矿业 = 46 + random(3);
      _all_city[_loc1_].珠宝业 = 46 + random(3);
      _all_city[_loc1_].畜牧业 = 46 + random(3);
      if(_all_city[_loc1_].类型 == "平原型"){
         _all_city[_loc1_].种植业上限 = 10000;
         _all_city[_loc1_].丝织业上限 = 200;
         _all_city[_loc1_].陶瓷业上限 = 200;
         _all_city[_loc1_].采矿业上限 = 200;
         _all_city[_loc1_].珠宝业上限 = 200;
         _all_city[_loc1_].畜牧业上限 = 200;
      }
      else if(_all_city[_loc1_].类型 == "草原型"){
         _all_city[_loc1_].种植业上限 = 8000;
         _all_city[_loc1_].丝织业上限 = 100;
         _all_city[_loc1_].陶瓷业上限 = 120;
         _all_city[_loc1_].采矿业上限 = 220;
         _all_city[_loc1_].珠宝业上限 = 80;
         _all_city[_loc1_].畜牧业上限 = 240;
      }
      else if(_all_city[_loc1_].类型 == "盆地型"){
         _all_city[_loc1_].种植业上限 = 8000;
         _all_city[_loc1_].丝织业上限 = 230;
         _all_city[_loc1_].陶瓷业上限 = 220;
         _all_city[_loc1_].采矿业上限 = 210;
         _all_city[_loc1_].珠宝业上限 = 240;
         _all_city[_loc1_].畜牧业上限 = 100;
      }
      else if(_all_city[_loc1_].类型 == "高山型"){
         _all_city[_loc1_].种植业上限 = 8000;
         _all_city[_loc1_].丝织业上限 = 230;
         _all_city[_loc1_].陶瓷业上限 = 180;
         _all_city[_loc1_].采矿业上限 = 250;
         _all_city[_loc1_].珠宝业上限 = 80;
         _all_city[_loc1_].畜牧业上限 = 160;
      }
      else if(_all_city[_loc1_].类型 == "海河型"){
         _all_city[_loc1_].种植业上限 = 10000;
         _all_city[_loc1_].丝织业上限 = 230;
         _all_city[_loc1_].陶瓷业上限 = 240;
         _all_city[_loc1_].采矿业上限 = 70;
         _all_city[_loc1_].珠宝业上限 = 270;
         _all_city[_loc1_].畜牧业上限 = 60;
      }
      else if(_all_city[_loc1_].类型 == "沙漠型"){
         _all_city[_loc1_].种植业上限 = 8000;
         _all_city[_loc1_].丝织业上限 = 80;
         _all_city[_loc1_].陶瓷业上限 = 270;
         _all_city[_loc1_].采矿业上限 = 280;
         _all_city[_loc1_].珠宝业上限 = 80;
         _all_city[_loc1_].畜牧业上限 = 80;
      }
      更新城市的属性值(_all_city[_loc1_]);
      _all_city[_loc1_].委任者 = [];
      生成单个城市的基础数值(_all_city[_loc1_]);
      _loc1_ = _loc1_ + 1;
   }
}
function 更新城市的属性值(处理单位){
   if(处理单位.治安值 > 100){
      处理单位.治安值 = 100;
   }
   if(处理单位.民心 > 100){
      处理单位.民心 = 100;
   }
   处理单位.发展建设 = 0;
   处理单位.调整工资 = 0;
   处理单位.征缴粮食 = 0;
   处理单位.收购物资 = 0;
   处理单位.商馆交易 = 0;
   处理单位.城市扩张 = 0;
   处理单位.治安巡查 = 0;
   处理单位.一键建设 = 0;
}
function 生成单个城市的基础数值(城){
   城.妃子开关 = 0;
   城.敌将开关 = 0;
   城.刺客开关 = 0;
   城.民间美女开关 = 0;
   城.地方委任 = 0;
}
所有卖出价 = [4700,6200,4100,7400,0,5500];
所有收购价 = [3200,4000,2900,4300,0,3500];
function 每个月的各地收支(){
   var _loc2_ = 0;
   while(_loc2_ < 6){
      所有收购价[_loc2_] = random(50) + 所有收购价[_loc2_];
      所有卖出价[_loc2_] = random(50) + 所有卖出价[_loc2_];
      _loc2_ += 1;
   }
   var _loc3_ = 0;
   var _loc4_ = [];
   var _loc5_ = [];
   var _loc6_ = [];
   var _loc7_ = 0;
   while(_loc7_ < _all_city.length){
      if(_all_city[_loc7_].归属 == 8 && _all_city[_loc7_].地方委任 == 1){
         _loc4_.push(_all_city[_loc7_]);
      }
      else if(_all_city[_loc7_].归属 == 8 && _all_city[_loc7_].地方委任 == 0){
         _loc5_.push(_all_city[_loc7_]);
      }
      if(_all_city[_loc7_].归属 == 8 || _all_city[_loc7_].归属 == 23){
         _loc6_.push(_all_city[_loc7_]);
      }
      _loc7_ += 1;
   }
   var _loc8_ = "";
   _loc8_ += "本月各自治州府收支奏折：\n\n";
   _loc7_ = 0;
   while(_loc7_ < _loc4_.length){
      var _loc9_ = _loc4_[_loc7_];
      _loc8_ += "【" + _loc7_ + "】" + _loc9_.名称 + "，知府：" + _loc9_.委任者[0].名字 + "。\n";
      var _loc10_ = Math.round(_loc9_.人口 * 10);
      _loc9_.民间粮食 -= _loc10_;
      var _loc11_ = Math.round(_loc9_.人口 * _loc9_.工资 * (1.3 - 0.3 * _loc9_.委任者[0].清廉 / 100));
      _loc9_.民间金钱 += Math.round(_loc9_.人口 * _loc9_.工资 * (0.7 + 0.3 * _loc9_.委任者[0].清廉 / 100));
      _loc9_.民间金钱 = Math.round(_loc9_.民间金钱 - _loc9_.人口 * 1);
      if(_loc9_.民间粮食 < 0){
         var _loc12_ = Math.abs(_loc9_.民间粮食);
         if(_loc9_.粮食 > _loc12_){
            城市可以赈灾事件(_loc9_);
            _loc9_.民间粮食 = 0;
            _loc9_.粮食 -= _loc12_;
         }
         else{
            城市无法赈灾事件(_loc9_,_loc12_);
            var _loc13_ = Math.round(0.25 * _loc9_.人口);
            _loc9_.民间粮食 = 0;
            _loc9_.人口 -= _loc13_;
            if(_loc9_.人口 < 0){
               _loc9_.人口 = 0;
            }
         }
      }
      if(_loc9_.人口 > 0){
         var _loc14_ = Math.round(_loc9_.人口 * 0.03 * _loc9_.工资 * 0.1 * (0.7 + 0.3 * _loc9_.委任者[0].清廉 / 100));
         if(_loc14_ > _loc9_.民间粮食 / 10){
            _loc9_.人口 += _loc9_.民间粮食 / 10;
         }
         else{
            _loc9_.人口 += _loc14_;
         }
         if(_loc9_.人口 > 1000000){
            _loc9_.人口 = 1000000;
         }
      }
      else{
         _loc9_.人口 = 0;
      }
      _loc9_.人口 = Math.round(_loc9_.人口);
      var _loc15_ = 1 + 所有技术[0].开启 * 所有技术[0].效果 + 所有技术[1].开启 * 所有技术[1].效果 + 所有技术[2].开启 * 所有技术[2].效果;
	  if(_loc9_.人口 > _loc9_.农田){
         var _loc16_ = Math.round(_loc9_.农田 * 15 * _loc9_.治安 / 100 * _loc15_);
      }
      else{
         _loc16_ = Math.round(_loc9_.人口 * 15 * _loc9_.治安 / 100 * _loc15_);
      }
      _loc9_.民间粮食 += _loc16_;
      _loc9_.民间粮食 = Math.round(_loc9_.民间粮食);
      var _loc17_ = 1 + 所有技术[10].开启 * 所有技术[10].效果;
      if(_loc9_.人口 / 850 > _loc9_.丝织业){
         var _loc18_ = Math.round(_loc9_.丝织业 * _loc9_.治安 / 100 * _loc17_);
      }
      else{
         _loc18_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100 * _loc17_);
      }
      _loc9_.民间布匹 += _loc18_;
      var _loc19_ = 1 + 所有技术[9].开启 * 所有技术[9].效果;
      if(_loc9_.人口 / 850 > _loc9_.陶瓷业){
         var _loc20_ = Math.round(_loc9_.陶瓷业 * _loc9_.治安 / 100 * _loc19_);
      }
      else{
         _loc20_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100 * _loc19_);
      }
      _loc9_.民间瓷器 += _loc20_;
      var _loc21_ = 1 + 所有技术[6].开启 * 所有技术[6].效果 + 所有技术[7].开启 * 所有技术[7].效果 + 所有技术[8].开启 * 所有技术[8].效果;
      if(_loc9_.人口 / 850 > _loc9_.采矿业){
         var _loc22_ = Math.round(_loc9_.采矿业 * _loc9_.治安 / 100 * _loc21_);
      }
      else{
         _loc22_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100 * _loc21_);
      }
      _loc9_.民间矿石 += _loc22_;
      var _loc23_ = 1 + 所有技术[11].开启 * 所有技术[11].效果;
      if(_loc9_.人口 / 850 > _loc9_.珠宝业){
         var _loc24_ = Math.round(_loc9_.珠宝业 * _loc9_.治安 / 100 * _loc23_);
      }
      else{
         _loc24_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100 * _loc23_);
      }
      _loc9_.民间珠宝 += _loc24_;
      var _loc25_ = 1 + 所有技术[3].开启 * 所有技术[3].效果 + 所有技术[4].开启 * 所有技术[4].效果 + 所有技术[5].开启 * 所有技术[5].效果;
      if(_loc9_.人口 / 850 > _loc9_.畜牧业){
         var _loc26_ = Math.round(_loc9_.畜牧业 * _loc9_.治安 / 100 * _loc25_);
      }
      else{
         _loc26_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100 * _loc25_);
      }
      _loc9_.民间牲畜 += _loc26_;
      var _loc27_ = 0.8;
      var _loc28_ = 1 + 0.01 * _loc6_.length;
      var _loc29_ = _loc28_ * _loc27_ * 0.25 * (_loc9_.委任者[2].智力 / 100 + _loc9_.委任者[2].清廉 / 100 + _loc9_.委任者[3].清廉 / 100 + _loc9_.委任者[3].智力 / 100);
      var _loc30_ = _loc9_.民间布匹 * (所有卖出价[0] - 所有收购价[0]);
      var _loc31_ = Math.floor(_loc30_ * _loc29_ * Math.pow(_loc9_.丝织业,0.058823529411764705));
      var _loc32_ = _loc9_.民间瓷器 * (所有卖出价[1] - 所有收购价[1]);
      var _loc33_ = Math.floor(_loc32_ * _loc29_ * Math.pow(_loc9_.陶瓷业,0.058823529411764705));
      var _loc34_ = _loc9_.民间矿石 * (所有卖出价[2] - 所有收购价[2]);
      var _loc35_ = Math.floor(_loc34_ * _loc29_ * Math.pow(_loc9_.采矿业,0.058823529411764705));
      var _loc36_ = _loc9_.民间珠宝 * (所有卖出价[3] - 所有收购价[3]);
      var _loc37_ = Math.floor(_loc36_ * _loc29_ * Math.pow(_loc9_.珠宝业,0.058823529411764705));
      var _loc38_ = _loc9_.民间牲畜 * (所有卖出价[5] - 所有收购价[5]);
      var _loc39_ = Math.floor(_loc38_ * _loc29_ * Math.pow(_loc9_.畜牧业,0.058823529411764705));
      _loc9_.民间布匹 = 0;
      _loc9_.民间瓷器 = 0;
      _loc9_.民间矿石 = 0;
      _loc9_.民间珠宝 = 0;
      _loc9_.民间牲畜 = 0;
      var _loc40_ = Math.round(_loc31_ + _loc33_ + _loc35_ + _loc37_ + _loc39_);
      var _loc41_ = Math.floor(_loc40_ * 0.2 * (1.5 - _loc9_.委任者[4].清廉 / 100));
      var _loc42_ = Math.floor(_loc40_ * 0.3 * (1.5 - _loc9_.委任者[5].清廉 / 100));
      var _loc43_ = Math.floor(_loc9_.人口 * 0.05);
      var _loc44_ = Math.round(_loc40_ - _loc11_ - _loc41_ - _loc43_ - _loc42_);
      if(_loc44_ < 0){
         _loc9_.负债 = 1;
      }
      else{
         _loc9_.负债 = undefined;
      }
      _loc9_.金钱 += _loc44_;
      if(_loc9_.金钱 < 0){
         城市负债事件(_loc9_);
      }
      _loc9_.金钱 = Math.round(_loc9_.金钱);
      _loc9_.粮食 = Math.round(_loc9_.粮食);
      _loc8_ += "本月产出：粮食" + _loc16_ + "石，布匹" + _loc18_ + "件，瓷器" + _loc20_ + "件，矿石" + _loc22_ + "件，珠宝" + _loc24_ + "件，牲畜" + _loc26_ + "件。\n";
      _loc8_ += "粮食消耗" + _loc10_ + "石，工资款" + _loc11_ + "两，建设款" + _loc41_ + "两，扩张款" + _loc42_ + "两，治安款" + _loc43_ + "两。\n";
      _loc8_ += "各类产品卖出净得" + _loc40_ + "两，本月净收入总计：" + _loc44_ + "。\n";
      _loc7_ += 1;
   }
   _loc7_ = 0;
   while(_loc7_ < _loc5_.length){
      _loc9_ = _loc5_[_loc7_];
      _loc8_ += "【" + _loc7_ + "】" + _loc9_.名称 + "，无委任。\n";
      _loc10_ = _loc9_.人口 * 10;
      _loc9_.民间粮食 -= Math.round(_loc10_);
      _loc11_ = Math.round(_loc9_.人口 * _loc9_.工资);
      _loc9_.民间金钱 += _loc11_;
      _loc9_.民间金钱 = Math.round(_loc9_.民间金钱 - _loc9_.人口 * 2);
      if(_loc9_.民间粮食 < 0){
         _loc12_ = Math.abs(_loc9_.民间粮食);
         if(_loc9_.粮食 > _loc12_){
            城市可以赈灾事件(_loc9_);
            _loc9_.民间粮食 = 0;
            _loc9_.粮食 -= _loc12_;
         }
         else{
            城市无法赈灾事件(_loc9_,_loc12_);
            _loc9_.民间粮食 = 0;
            _loc13_ = Math.round(0.25 * _loc9_.人口);
            _loc9_.人口 -= _loc13_;
            if(_loc9_.人口 < 0){
               _loc9_.人口 = 0;
            }
         }
      }
      if(_loc9_.人口 > 0){
         _loc14_ = Math.round(_loc9_.人口 * 0.03 * _loc9_.工资 * 0.1);
         if(_loc14_ > _loc9_.民间粮食 / 10){
            _loc9_.人口 += _loc9_.民间粮食 / 10;
         }
         else{
            _loc9_.人口 += _loc14_;
         }
         if(_loc9_.人口 > 1000000){
            _loc9_.人口 = 1000000;
         }
      }
      else{
         _loc9_.人口 = 0;
      }
      _loc9_.人口 = Math.round(_loc9_.人口);
      if(_loc9_.人口 > _loc9_.农田){
         _loc16_ = Math.round(_loc9_.农田 * 15 * _loc9_.治安 / 100);
      }
      else{
         _loc16_ = Math.round(_loc9_.人口 * 15 * _loc9_.治安 / 100);
      }
      _loc9_.民间粮食 += _loc16_;
      _loc9_.民间粮食 = Math.round(_loc9_.民间粮食);
      if(_loc9_.人口 / 850 > _loc9_.丝织业){
         _loc18_ = Math.round(_loc9_.丝织业 * _loc9_.治安 / 100);
      }
      else{
         _loc18_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100);
      }
      _loc9_.民间布匹 += _loc18_;
      if(_loc9_.人口 / 850 > _loc9_.陶瓷业){
         _loc20_ = Math.round(_loc9_.陶瓷业 * _loc9_.治安 / 100);
      }
      else{
         _loc20_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100);
      }
      _loc9_.民间瓷器 += _loc20_;
      if(_loc9_.人口 / 850 > _loc9_.采矿业){
         _loc22_ = Math.round(_loc9_.采矿业 * _loc9_.治安 / 100);
      }
      else{
         _loc22_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100);
      }
      _loc9_.民间矿石 += _loc22_;
      if(_loc9_.人口 / 850 > _loc9_.珠宝业){
         _loc24_ = Math.round(_loc9_.珠宝业 * _loc9_.治安 / 100);
      }
      else{
         _loc24_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100);
      }
      _loc9_.民间珠宝 += _loc24_;
      if(_loc9_.人口 / 850 > _loc9_.畜牧业){
         _loc26_ = Math.round(_loc9_.畜牧业 * _loc9_.治安 / 100);
      }
      else{
         _loc26_ = Math.round(_loc9_.人口 / 850 * _loc9_.治安 / 100);
      }
      _loc9_.民间牲畜 += _loc26_;
      _loc44_ = - _loc11_;
      if(_loc44_ < 0){
         _loc9_.负债 = 1;
      }
      else{
         _loc9_.负债 = undefined;
      }
      _loc9_.金钱 += _loc44_;
      if(_loc9_.金钱 < 0){
         城市负债事件(_loc9_);
      }
      _loc9_.金钱 = Math.round(_loc9_.金钱);
      _loc9_.粮食 = Math.round(_loc9_.粮食);
      _loc8_ += "本月产出：粮食" + _loc16_ + "石，布匹" + _loc18_ + "件，瓷器" + _loc20_ + "件，矿石" + _loc22_ + "件，珠宝" + _loc24_ + "件，牲畜" + _loc26_ + "件。\n";
      _loc8_ += "粮食消耗" + _loc10_ + "石，工资款" + _loc11_ + "两。\n";
      _loc7_ += 1;
   }
   _loc7_ = 0;
   while(_loc7_ < _all_city.length){
      if(_all_city[_loc7_].归属 == 8){
         var _loc45_ = random(80);
         if(主角.祭祀 > 0){
            _loc45_ = random(40);
         }
         if(_loc45_ >= 75){
            城市灾难事件(_all_city[_loc7_]);
         }
         else if(_loc45_ <= 1){
            城市丰收事件(_all_city[_loc7_]);
         }
         if(_all_city[_loc7_].民心 > 100){
            _all_city[_loc7_].民心 = 100;
         }
      }
      _loc7_ += 1;
   }
   显示用的地方收成表 = _loc8_;
}
function 计算各种造反(){
   var _loc2_ = 0;
   i = 0;
   while(i < _all_rencai.length){
      if(_all_rencai[i].野心 == undefined || _all_rencai[i].野心 == NaN){
         _all_rencai[i].野心 = 50;
      }
      _loc2_ += _all_rencai[i].野心;
      i++;
   }
   var _loc3_ = Math.round(_loc2_ / _all_rencai.length / 50);
   i = 0;
   while(i < _all_rencai.length){
      if(_loc3_ !== undefined && _loc3_ !== NaN && random(10) == 0){
         _all_rencai[i].忠诚 -= _loc3_;
      }
      if(_all_rencai[i].野心 > 60){
         _all_rencai[i].忠诚 -= Math.round(_all_rencai[i].野心 / 20);
      }
      if(_all_rencai[i].忠诚 < 1){
         _all_rencai[i].忠诚 = 1;
      }
      i++;
   }
   if(_loc2_ / _all_rencai.length > 70){
      宰相篡位事件();
   }
   i = 0;
   while(i < _all_army.length){
      if(_all_army[i].将军.野心 > 50 && _all_army[i].将军.忠诚 < 30 && _all_army[i].兵力 > 10000){
         var _loc4_ = _all_army[i];
      }
      i++;
   }
   if(_loc4_ !== undefined){
      var _loc5_ = random(3);
      var _loc6_ = [];
      n = 0;
      while(n < _all_city.length){
         if(_all_city[n].归属 == 8 && _all_city[n].地方委任 == 1){
            _loc6_.push(_all_city[n]);
         }
         n++;
      }
      var _loc7_ = _loc6_[random(_loc6_.length)];
      if(_loc6_.length == 0){
         _loc5_ = 0;
         _loc7_ = _all_city[12];
      }
      if(_loc5_ == 0){
         var _loc8_ = "七百里加急来报，\n" + 颜色代码(_loc4_.队名,"ff0000") + "发生叛变，将领" + 颜色代码(_loc4_.将军.名字,"ff0000") + "率领麾下数万名将士欲攻取" + 颜色代码(_loc7_.名称,"ff0000") + "未果，现已逃窜山中，落草为寇。";
         太监报告所有事件.push([_loc8_,"快乐",0,24,1,undefined,undefined,1]);
         删除指定官员的程序(_loc4_.将军);
         i = 0;
         while(i < _all_army.length){
            if(_all_army[i].id == _loc4_.id && _all_army[i].队名 == _loc4_.队名){
               _all_army.splice(i,1);
            }
            i++;
         }
      }
      else if(_loc5_ == 1){
         _loc8_ = "七百里加急来报，\n" + 颜色代码(_loc4_.队名,"ff0000") + "发生叛变，将领" + 颜色代码(_loc4_.将军.名字,"ff0000") + "率领麾下数万名将士攻下了" + 颜色代码(_loc7_.名称,"ff0000") + "，所幸城中官员皆已逃回京城。";
         太监报告所有事件.push([_loc8_,"快乐",0,24,1,undefined,undefined,1]);
         属性.快乐 -= 20;
         属性.健康 -= 5;
         d = 0;
         while(d < _all_rencai.length){
            if(_all_rencai[d].委任城市 == _loc7_.id){
               _all_rencai[d].任务中 = 0;
               _all_rencai[d].委任城市 = undefined;
            }
            d++;
         }
         _loc7_.地方委任 = 0;
         _loc7_.委任者 = [];
         _loc7_.归属 = 9;
         生成这个城市的兵力(计算城市);
         刷新每个国家几城的程序();
         删除指定官员的程序(_loc4_.将军);
         i = 0;
         while(i < _all_army.length){
            if(_all_army[i].id == _loc4_.id && _all_army[i].队名 == _loc4_.队名){
               _all_army.splice(i,1);
            }
            i++;
         }
         var _loc9_ = 0;
         u = 0;
         while(u < _all_city.length){
            if(_all_city[u].归属 == 8){
               _loc9_ += 1;
            }
            u++;
         }
         if(_loc9_ == 0){
            沦陷死亡事件();
         }
      }
      else{
         _loc8_ = "七百里加急来报，\n" + 颜色代码(_loc4_.队名,"ff0000") + "发生叛变，将领" + 颜色代码(_loc4_.将军.名字,"ff0000") + "率领麾下数万名将士攻下了" + 颜色代码(_loc7_.名称,"ff0000") + "，城中官员悉数被杀。";
         太监报告所有事件.push([_loc8_,"快乐",0,24,1,undefined,undefined,1]);
         属性.快乐 -= 20;
         属性.健康 -= 10;
         var _loc10_ = 0;
         while(_loc10_ < 3){
            d = 0;
            while(d < _all_rencai.length){
               if(_all_rencai[d].委任城市 == _loc7_.id)
               {
                  _all_rencai[d].任务中 = 0;
                  删除指定官员的程序(_all_rencai[d]);
               }
               d++;
            }
            _loc10_ += 1;
         }
         _loc7_.地方委任 = 0;
         _loc7_.委任者 = [];
         _loc7_.归属 = 9;
         生成这个城市的兵力(计算城市);
         刷新每个国家几城的程序();
         删除指定官员的程序(_loc4_.将军);
         i = 0;
         while(i < _all_army.length){
            if(_all_army[i].id == _loc4_.id && _all_army[i].队名 == _loc4_.队名){
               _all_army.splice(i,1);
            }
            i++;
         }
         _loc9_ = 0;
         u = 0;
         while(u < _all_city.length){
            if(_all_city[u].归属 == 8){
               _loc9_ += 1;
            }
            u++;
         }
         if(_loc9_ == 0){
            沦陷死亡事件();
         }
      }
   }
   n = 0;
   while(n < _all_city.length){
      if(_all_city[n].归属 == 8){
         var _loc11_ = _all_city[n];
         if(_loc11_.民心 < 30 && random(3) == 0){
            _loc11_.民心 = 20;
            console.log("农民起义");
            _loc8_ = "七百里加急来报，\n" + 颜色代码(_loc11_.名称,"ff0000") + "发生农民起义，起义军占领了城市。\n\n附近州府人心惶惶。\n" + 颜色代码("州府起义","ff0000");
            太监报告所有事件.push([_loc8_,"快乐",0,26,1,undefined,undefined,1]);
            属性.快乐 -= 20;
            属性.健康 -= 10;
            d = 0;
            while(d < _all_rencai.length){
               e = 0;
               while(e < 7)
               {
                  if(_all_rencai[d].名字 == _loc7_.委任者[e].名字)
                  {
                     _all_rencai[d].任务中 = 0;
                     删除指定官员的程序(_loc7_.委任者[e]);
                  }
                  e++;
               }
               d++;
            }
            _loc7_.地方委任 = 0;
            _loc7_.委任者 = [];
            _loc11_.归属 = 9;
            生成这个城市的兵力(_loc11_);
            _loc9_ = 0;
            u = 0;
            while(u < _all_city.length){
               if(_all_city[u].归属 == 8)
               {
                  _loc9_ += 1;
               }
               u++;
            }
            if(_loc9_ == 0){
               沦陷死亡事件();
            }
         }
         else if(_loc11_.民心 < 50){
            主角._anquan += 1;
            _loc8_ = 颜色代码(_loc11_.名称,"ff0000") + "来报，百姓对朝廷极度不满，民心涣散，群起示威抗议。\n破坏州府建筑，皇威受到严重打击。";
            太监报告所有事件.push([_loc8_,"快乐",-4,18,1]);
            属性.威望 -= 10 + random(5);
            _loc11_.人口 = Math.round(_loc11_.人口 * 17 / 20);
            _loc11_.金钱 -= Math.round(_loc11_.金钱 / 50);
            _loc11_.种植业 -= 500;
            _loc11_.丝织业 -= 200;
            _loc11_.陶瓷业 -= 200;
            _loc11_.采矿业 -= 200;
            _loc11_.珠宝业 -= 200;
            _loc11_.畜牧业 -= 200;
            if(_loc11_.种植业 < 0){
               _loc11_.种植业 = 0;
            }
            if(_loc11_.丝织业 < 0){
               _loc11_.丝织业 = 0;
            }
            if(_loc11_.陶瓷业 < 0){
               _loc11_.陶瓷业 = 0;
            }
            if(_loc11_.采矿业 < 0){
               _loc11_.采矿业 = 0;
            }
            if(_loc11_.珠宝业 < 0){
               _loc11_.珠宝业 = 0;
            }
            if(_loc11_.畜牧业 < 0){
               _loc11_.畜牧业 = 0;
            }
         }
         else if(_loc11_.治安 < 50){
            var _loc12_ = random(2);
            if(_loc12_ == 1){
               console.log("治安问题");
               主角._anquan += 1;
               _loc8_ = _loc11_.名称 + "知府来奏，" + 颜色代码(_loc11_.名称,"ff0000") + "治安太差，发生了暴动。暴民趁机烧杀抢掠。";
               太监报告所有事件.push([_loc8_,"快乐",-4,17,1]);
               _loc11_.人口 = Math.round(_loc11_.人口 * 17 / 20);
               _loc11_.金钱 -= Math.round(_loc11_.金钱 / 50);
               var _loc13_ = _loc11_.名称 + "知府来奏，" + _loc11_.名称 + "治安太差，发生了暴动。暴民趁机烧杀抢掠。";
               记载入官员奏折的程序(_loc13_);
               每月丞相奏报.unshift(_loc11_.名称 + "暴乱，当建设衙门，提升治安。");
            }
         }
      }
      n++;
   }
}
function 取出党首程序(){
   var _loc3_ = {};
   var _loc1_ = [];
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      if(_all_rencai[_loc2_].朝廷势力 > 20 && _all_rencai[_loc2_].后宫势力 > 0){
         _loc1_.push(_all_rencai[_loc2_]);
      }
      _loc2_ += 1;
   }
   _loc2_ = 0;
   while(_loc2_ < _loc1_.length){
      _loc3_ = _loc1_[random(_loc1_.length)];
      _loc2_ += 1;
   }
   return _loc3_;
}
function 每个月军工业生产(){
   国家.战马 += 3000 * (所有技术[18].效果 * 所有技术[18].开启);
   国家.铁炮 += 1000 * (所有技术[19].效果 * 所有技术[19].开启);
   更新资料(属性栏);
}
function 计算归属(参数){
   var _loc2_ = "";
   i = 0;
   while(i < _all_nation.length){
      if(参数 == _all_nation[i].id){
         _loc2_ = _all_nation[i].名称;
      }
      i++;
   }
   return _loc2_;
}
function 刷新世界所有的国家数据(){
   var _loc1_ = 0;
   while(_loc1_ < _all_nation.length){
      _all_nation[_loc1_].城 = [];
      if(_all_nation[_loc1_].岁币 !== undefined){
         国家.金钱 += _all_nation[_loc1_].岁币;
         记录大事件的程序(_all_nation[_loc1_].名称 + "向国家上贡" + _all_nation[_loc1_].岁币 / 10000 + "万金钱。");
      }
      _loc1_ += 1;
   }
   _loc1_ = 0;
   while(_loc1_ < _all_city.length){
      var _loc2_ = _all_city[_loc1_];
      _all_nation[_loc2_.归属].城.push(_loc2_);
      _loc1_ += 1;
   }
}
function 每月敌军兵力恢复(){
   var _loc2_ = 0;
   while(_loc2_ < _all_city.length){
      var _loc1_ = _all_city[_loc2_];
      if(_loc1_.归属 !== 8 && _loc1_.归属 !== 23){
         _loc1_.士兵 += _all_nation[_loc1_.归属].战力 * 100;
      }
      if(_loc1_.士兵 > _loc1_.士兵上限){
         _loc1_.士兵 = _loc1_.士兵上限;
      }
      _loc2_ += 1;
   }
}
function 每月敌国友好度修正(){
   var _loc5_ = 计算军事实力();
   var _loc1_ = 0;
   while(_loc1_ < _all_nation.length){
      var _loc4_ = 计算别国实力(_all_nation[_loc1_]);
      var _loc3_ = _all_nation[_loc1_].姿态;
      var _loc2_ = 0;
      if(_loc4_ > _loc5_){
         if(_loc3_ == 0){
            _loc2_ = 0;
         }
         else if(_loc3_ == 1){
            _loc2_ = -1;
         }
         else if(_loc3_ == 2){
            _loc2_ = -4;
         }
      }
      else if(_loc3_ == 0){
         _loc2_ = 2;
      }
      else if(_loc3_ == 1){
         _loc2_ = 0;
      }
      else if(_loc3_ == 2){
         _loc2_ = -1;
      }
      if(_all_nation[_loc1_].联姻 > 0 && _loc2_ < 0){
         _loc2_ = 0;
      }
      _all_nation[_loc1_].友好度 += _loc2_;
      if(_all_nation[_loc1_].友好度 < 0){
         _all_nation[_loc1_].友好度 = 0;
      }
      else if(_all_nation[_loc1_].友好度 > 999){
         _all_nation[_loc1_].友好度 = 999;
      }
      _loc1_ += 1;
   }
}
function 每月联姻保护期递减(){
   var _loc1_ = 0;
   while(_loc1_ < _all_nation.length){
      if(_all_nation[_loc1_].联姻 > 0){
         _all_nation[_loc1_].联姻 -= 1;
      }
      _loc1_ += 1;
   }
}
function 每月敌国主动外交(){
   var _loc1_ = 0;
   while(_loc1_ < _all_nation.length){
      if(_all_nation[_loc1_].外交 == 3 && _all_nation[_loc1_].友好度 < 200){
         _all_nation[_loc1_].外交 = 1;
         var _loc2_ = "启禀皇上，今早【" + _all_nation[_loc1_].名称 + "】使臣送来信函称：【" + _all_nation[_loc1_].名称 + "】对我国的外交关系恶化，已不想再对我国称臣。";
         太监报告所有事件.push([_loc2_,"快乐",-5,21,5]);
      }
      else if(_all_nation[_loc1_].外交 == 2 && _all_nation[_loc1_].友好度 < 400){
         _all_nation[_loc1_].外交 = 1;
         _loc2_ = "启禀皇上，今早【" + _all_nation[_loc1_].名称 + "】使臣送来信函称：【" + _all_nation[_loc1_].名称 + "】对我国的外交关系恶化，已不想再和我国做盟友。";
         太监报告所有事件.push([_loc2_,"快乐",-5,21,5]);
      }
      else if(_all_nation[_loc1_].外交 == 1 && _all_nation[_loc1_].友好度 < 100){
         _all_nation[_loc1_].外交 = 0;
         _loc2_ = "启禀皇上，今早【" + _all_nation[_loc1_].名称 + "】使臣送来信函称：【" + _all_nation[_loc1_].名称 + "】和我国势不两立，已向我国宣战。";
         太监报告所有事件.push([_loc2_,"快乐",-15,21,5]);
      }
      _loc1_ += 1;
   }
}
function 计算军事实力(){
   var _loc1_ = 0;
   i = 0;
   while(i < _all_army.length){
      _loc1_ += 5 * _all_army[i].兵力 * _all_army[i].训练度 / 100;
      i++;
   }
   _loc1_ += 国家.士兵;
   i = 0;
   while(i < _all_rencai.length){
      if(_all_rencai[i].武力 > 90){
         _loc1_ += 10000;
      }
      if(_all_rencai[i].统帅 > 90){
         _loc1_ += 10000;
      }
      i++;
   }
   var _loc2_ = Math.round(_loc1_ / 10000);
   return _loc2_;
}
function 计算别国实力(阵营数据){
   var _loc2_ = 0;
   i = 0;
   while(i < _all_city.length){
      if(_all_city[i].归属 == 阵营数据.id){
         _loc2_ += _all_city[i].士兵 * 阵营数据.战力;
      }
      i++;
   }
   var _loc3_ = Math.round(_loc2_ / 10000);
   return _loc3_;
}
function 敌人AI程序(){
   if(主角.难度 == undefined){
      主角.难度 = 1;
   }
   var _loc2_ = 6;
   if(主角.难度 == 3){
      _loc2_ = 6;
   }
   else if(主角.难度 == 2){
      _loc2_ = 6;
   }
   else if(主角.难度 == 1){
      _loc2_ = 6;
   }
   if(年 > _loc2_ && 主角.战斗队伍.胜负 == undefined){
      刷新世界所有的国家数据();
      var _loc3_ = 计算军事实力();
     console.log("我国军事实力" + _loc3_);
      var _loc4_ = [];
      var _loc5_ = 0;
      while(_loc5_ < _all_city.length){
         if(_all_city[_loc5_].归属 !== 8 && _all_city.归属 !== 23){
            var _loc6_ = 计算别国实力(_all_nation[_all_city[_loc5_].归属]);
            var _loc7_ = _all_nation[_all_city[_loc5_].归属].外交;
            var _loc8_ = 敌人检查是否衔接(_all_city[_loc5_]);
			console.log(_loc8_.序列);
            if(_loc7_ == 0 && _loc6_ > _loc3_ && _loc8_.序列 !== ""){
               _loc4_.push(_loc8_);
              console.log(_all_nation[_all_city[_loc5_].归属].名称 + "军事实力" + _loc6_);
              console.log(_all_nation[_all_city[_loc5_].归属].名称 + "外交关系" + _loc7_);
            }
         }
         _loc5_ += 1;
      }
      if(random(7) == 1){
         if(_loc4_.length!==0){
			 var _loc9_ = _loc4_[random(_loc4_.length)];
			 var _loc10_ = [];
			_loc10_[0] = _loc9_.城;
			_loc10_[1] = _loc9_.序列[random(_loc9_.序列.length)];
			if(_loc10_[0] !== undefined){
			   战争出动(undefined,0,1,_loc10_[1],_loc10_[0]);
			   战斗震屏程序();
			}
		 }
      }
     console.log("可进行侵略的数据有" + _loc4_.length + "组。");
   }
}
function 敌人检查是否衔接(本城){
   var _loc2_ = [];
   var _loc3_ = 0;
   while(_loc3_ < 本城.邻居.length){
      if(_all_city[本城.邻居[_loc3_]].归属 == 8){
         _loc2_.push(_all_city[本城.邻居[_loc3_]]);
      }
      _loc3_ += 1;
   }
   var _loc4_ = new Object();
   _loc4_.城 = 本城;
   _loc4_.序列 = _loc2_;
   if(_loc2_.length == 0){
      _loc4_.序列 = "";
   }
   return _loc4_;
}
function 恢复特殊开关的开关(){
   主角.炼制丹药 = 0;
   主角.把平安脉 = 0;
   主角.犒赏军队 = 0;
   主角.武器购买 = 0;
   主角.安全检视 = 0;
   主角.招募士兵 = 0;
   主角.卸甲归田 = 0;
   主角.招募民夫 = 0;
   主角.解雇民夫 = 0;
   主角.开科考试 = 0;
   主角.祭祀活动 = 0;
   主角.家宴 = 0;
   主角.冷宫执行 = 0;
   主角.子女会见 = 0;
   主角.招募宫人 = 0;
   主角.召见王爷 = 0;
   主角.宴会 = 0;
   主角.暗杀敌将 = 0;
   主角.烧毁敌营 = 0;
   主角.调查党派 = 0;
   主角.处置俘虏 = 0;
   主角.盗取宝物 = 0;
   主角.妃子怀孕 = 0;
   主角.打猎 = 0;
   主角.微服 = 0;
   主角.全国统建 = 0;
   主角.派遣钦差 = 0;
   主角.修筑宫殿 = 0;
   主角.与曹夙峰闲聊 = 0;
   主角.曹夙峰的意见 = 0;
   主角.与红星寿闲聊 = 0;
   主角.与谢衣闲聊 = 0;
   主角.与苏茉尔闲聊 = 0;
   主角.大臣参见 = 0;
   主角.皇子参见 = 0;
   主角.毒死皇子 = [0,undefined,undefined,undefined];
   主角.有客人 = [0,undefined];
   主角.送钱示好 = 0;
   主角.秀女赐予 = 0;
   主角.但为君故 = [0,0];
   i = 0;
   while(i < _all_doctor.length){
      if(_all_doctor[i].任务中 == 1 || _all_doctor[i].任务中 == 2){
         _all_doctor[i].任务中 = 0;
      }
      i++;
   }
}
function 反馈我国到底有多少城市的程序(){
   var _loc3_ = [];
   var _loc2_ = 0;
   while(_loc2_ < all_city.length){
      if(all_city[_loc2_].归属 == 8){
         _loc3_.push(all_city[_loc2_]);
      }
      _loc2_ = _loc2_ + 1;
   }
   return _loc3_;
}
function 更新各城府的等级(){
   var _loc8_ = 0;
   while(_loc8_ < _all_city.length){
      if(_all_city[_loc8_].归属 == 8){
         var _loc2_ = _all_city[_loc8_];
         var _loc13_ = Math.round(_loc2_.人口);
         var _loc9_ = _loc2_.治安;
         var _loc11_ = _loc2_.民心;
         var _loc6_ = Math.round(_loc2_.民间金钱 / _loc2_.人口);
         var _loc7_ = Math.round(_loc2_.民间粮食 / _loc2_.人口);
         var _loc5_ = _loc2_.种植业;
         var _loc3_ = _loc2_.丝织业;
         var _loc4_ = _loc2_.陶瓷业;
         var _loc12_ = _loc2_.采矿业;
         var _loc10_ = _loc2_.珠宝业;
         var _loc14_ = _loc2_.畜牧业;
         var _loc16_ = _loc2_.金钱;
         var _loc15_ = _loc2_.粮食;
         if(_loc13_ > 1000000 && _loc9_ > 90 && _loc11_ > 90 && _loc6_ > 0 && _loc7_ > 0 && _loc5_ > 100000 && _loc3_ > 800 && _loc4_ > 800 && _loc12_ > 800 && _loc10_ > 800 && _loc14_ > 800){
            _loc2_.等级 = 5;
         }
         else if(_loc13_ > 700000 && _loc9_ > 80 && _loc11_ > 80 && _loc6_ > 0 && _loc7_ > 0 && _loc5_ > 50000 && _loc3_ > 600 && _loc4_ > 600 && _loc12_ > 600 && _loc10_ > 600 && _loc14_ > 600){
            _loc2_.等级 = 4;
         }
         else if(_loc13_ > 300000 && _loc9_ > 70 && _loc11_ > 70 && _loc6_ > 0 && _loc7_ > 0 && _loc5_ > 10000 && _loc3_ > 400 && _loc4_ > 400 && _loc12_ > 400 && _loc10_ > 400 && _loc14_ > 400){
            _loc2_.等级 = 3;
         }
         else if(_loc13_ > 100000 && _loc9_ > 60 && _loc11_ > 60 && _loc6_ > 0 && _loc7_ > 0 && _loc5_ > 5000 && _loc3_ > 200 && _loc4_ > 200 && _loc12_ > 200 && _loc10_ > 200 && _loc14_ > 200){
            _loc2_.等级 = 2;
         }
         else{
            _loc2_.等级 = 1;
         }
      }
      _loc8_ = _loc8_ + 1;
   }
}
function 城市的哪个百分比程序(基础值, 人口){
   var _loc1_ = Math.round(基础值 / 人口 * 100);
   if(_loc1_ <= 0){
      _loc1_ = 0;
   }
   else if(_loc1_ > 100){
      _loc1_ = 100;
   }
   return _loc1_;
}
function 刷新特殊建筑效果(){
   if(所有特殊建筑[0].建筑程度 == 2){
      所有特殊建筑[0].建筑程度 += 1;
      长城效果处理();
   }
   else if(所有特殊建筑[1].建筑程度 == 2){
      所有特殊建筑[1].建筑程度 += 1;
      书院效果处理();
   }
   else if(所有特殊建筑[2].建筑程度 == 2){
      所有特殊建筑[2].建筑程度 += 1;
      大佛寺效果处理();
   }
   else if(所有特殊建筑[3].建筑程度 == 2){
      所有特殊建筑[3].建筑程度 += 1;
      武馆效果处理();
   }
   else if(所有特殊建筑[4].建筑程度 == 2){
      所有特殊建筑[4].建筑程度 += 1;
      东厂效果处理();
   }
   else if(所有特殊建筑[5].建筑程度 == 2){
      所有特殊建筑[5].建筑程度 += 1;
      汤泉宫效果处理();
   }
   else if(所有特殊建筑[6].建筑程度 == 2){
      所有特殊建筑[6].建筑程度 += 1;
      属性.寿命 += 80;
   }
   else if(所有特殊建筑[7].建筑程度 == 2){
      所有特殊建筑[7].建筑程度 += 1;
      洛口仓效果处理();
   }
   else if(所有特殊建筑[8].建筑程度 == 2){
      所有特殊建筑[8].建筑程度 += 1;
      圆明园效果处理();
   }
   else if(所有特殊建筑[9].建筑程度 == 2){
      所有特殊建筑[9].建筑程度 += 1;
      孔庙效果处理();
   }
}
function 洛口仓效果处理(){
   国家.粮食 += 100000 + random(50000);
}
function 大佛寺效果处理(){
   var _loc2_ = 0;
   while(_loc2_ < _all_city.length){
      if(_all_city[_loc2_].归属 == 8){
         _all_city[_loc2_].民心 += random(2);
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 圆明园效果处理(){
   var _loc2_ = 0;
   while(_loc2_ < _all_city.length){
      if(_all_city[_loc2_].归属 == 8){
         _all_city[_loc2_].行宫 = 3;
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 书院效果处理(){
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      if(random(2) == 0){
         if(_all_rencai[_loc2_]._code == undefined){
            if(_all_rencai[_loc2_].智力 < 90){
               _all_rencai[_loc2_].智力 += random(2);
            }
            if(_all_rencai[_loc2_].政治 < 90){
               _all_rencai[_loc2_].政治 += random(2);
            }
         }
         else{
            _all_rencai[_loc2_].智力 += random(2);
            _all_rencai[_loc2_].政治 += random(2);
         }
         if(_all_rencai[_loc2_].智力 > 100){
            _all_rencai[_loc2_].智力 = 100;
         }
         if(_all_rencai[_loc2_].政治 > 100){
            _all_rencai[_loc2_].政治 = 100;
         }
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 武馆效果处理(){
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      if(random(2) == 0){
         if(_all_rencai[_loc2_]._code == undefined){
            if(_all_rencai[_loc2_].统帅 < 90){
               _all_rencai[_loc2_].统帅 += random(2);
            }
            if(_all_rencai[_loc2_].武力 < 90){
               _all_rencai[_loc2_].武力 += random(2);
            }
         }
         else{
            _all_rencai[_loc2_].统帅 += random(2);
            _all_rencai[_loc2_].武力 += random(2);
         }
         if(_all_rencai[_loc2_].统帅 > 100){
            _all_rencai[_loc2_].统帅 = 100;
         }
         if(_all_rencai[_loc2_].武力 > 100){
            _all_rencai[_loc2_].武力 = 100;
         }
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 孔庙效果处理(){
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      if(random(2) == 0){
         if(_all_rencai[_loc2_].魅力 < 85){
            _all_rencai[_loc2_].魅力 += random(2);
         }
         _all_rencai[_loc2_].清廉 += random(2);
         _all_rencai[_loc2_].忠诚 += random(4);
         if(_all_rencai[_loc2_].魅力 > 100){
            _all_rencai[_loc2_].魅力 = 100;
         }
         if(_all_rencai[_loc2_].忠诚 > 100){
            _all_rencai[_loc2_].忠诚 = 100;
         }
         if(_all_rencai[_loc2_].清廉 > 100){
            _all_rencai[_loc2_].清廉 = 100;
         }
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 东厂效果处理(){
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      if(random(2) == 0){
         _all_rencai[_loc2_].野心 -= random(2);
         if(_all_rencai[_loc2_].野心 < 1){
            _all_rencai[_loc2_].野心 = 1;
         }
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 长城效果处理(){
   var _loc1_ = 0;
   while(_loc1_ < 阵营.length){
      if(_loc1_ !== 8){
         阵营[_loc1_].战力 *= 0.8;
      }
      _loc1_ = _loc1_ + 1;
   }
}
function 铜雀台效果处理(){国家.铜雀台 = 1;}
function 汤泉宫效果处理(){国家.汤泉宫 = 1;}
function 特殊建筑周期推进(){
   var _loc2_ = 0;
   while(_loc2_ < 所有特殊建筑.length){
      if(所有特殊建筑[_loc2_].建筑程度 == 1){
         所有特殊建筑[_loc2_].完成人次 += 所有特殊建筑[_loc2_].民夫数量;
         if(所有特殊建筑[_loc2_].完成人次 > 所有特殊建筑[_loc2_].需要人次){
            所有特殊建筑[_loc2_].建筑程度 = 2;
            国家.特殊建筑民夫 -= 所有特殊建筑[_loc2_].民夫数量;
            所有特殊建筑[_loc2_].民夫数量 -= 所有特殊建筑[_loc2_].民夫数量;
            var _loc4_ = "启禀皇上，特殊建筑“" + 所有特殊建筑[_loc2_].名称 + "”已经建成了。";
            太监报告所有事件.push([_loc4_,"快乐",5,0,3]);
            var _loc3_ = "特殊建筑“" + 所有特殊建筑[_loc2_].名称 + "”已经建成了。";
            每月的官员奏折.push(_loc3_);
         }
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 太监问声好(参数){
   if(参数 == 1){
	  id('taijianSh').style.display = 'block';
      id('taijianText').innerText = "皇上看您气色不大好。\n保重龙体，避免过度劳累。";
      id('taijian').style.backgroundPositionX = '0px';
	  id('taijian').style.width = '112px';
      id('taijianCon').onclick = function (){id('taijianSh').style.display = 'none';}
   }
   else if(参数 == 2){
	  id('taijianSh').style.display = 'block';
      id('taijianText').innerText = "皇上龙体刚刚恢复，不要过于劳累。\n多休息一下总是有好处的。";
      id('taijian').style.backgroundPositionX = '-224px';
      id('taijian').style.width = '159px';
     id('taijianCon').onclick = function (){id('taijianSh').style.display = 'none';}
   }
   else if(参数 == 3){
      var _loc3_ = [];
      var _loc4_ = 0;
      while(_loc4_ < _all_feizi.length){
         if(_all_feizi[_loc4_].名字 !== undefined && _all_feizi[_loc4_].位分 != "秀女"){
            if((_all_feizi[_loc4_].省亲 == 0 || _all_feizi[_loc4_].省亲 == undefined) && _all_feizi[_loc4_].病 == 0 && _all_feizi[_loc4_].孕 == 0 && _all_feizi[_loc4_].爱 >= 160)
            {
               _loc3_.push(_all_feizi[_loc4_]);
            }
         }
         _loc4_ += 1;
      }
      if(_loc3_.length > 0 && 时辰 !== "清晨" && 时辰 !== "深夜"){
         var 谁来请膳呢 = _loc3_[random(_loc3_.length)];
		 id('taijianSh').style.display = 'block';
         id('taijianText').innerText = "皇上，刚刚" + 谁来请膳呢.封号 + 谁来请膳呢.位分 + "娘娘宫里派人来请皇上过去用膳，皇上是否要去？";
         id('taijian').style.backgroundPositionX = '-224px';
         id('taijian').style.width = '159px';
         id('taijianCon').style.display = 'none';
		 id('taijianCho').style.display = 'block';
         id('taijianan0').innerText = "去";
         id('taijianan1').innerText = "不去";
         id('taijianan0').onclick = function (){
            出现这位后宫(谁来请膳呢,2);
		   id('taijianSh').style.display = 'none';
           id('taijianCon').style.display = 'block';
           id('taijianCho').style.display = 'none';
         };
         id('taijianan1').onclick = function(){
            谁来请膳呢.爱 -= 4;
             id('taijianSh').style.display = 'none';
             id('taijianCon').style.display = 'block';
             id('taijianCho').style.display = 'none';
         };
      }
   }
   else if(参数 == 4){
      var _loc5_ = [];
      var _loc6_ = [];
      _loc4_ = 0;
      while(_loc4_ < _all_feizi.length){
         if(_all_feizi[_loc4_].名字 !== undefined&&_all_feizi[_loc4_].位分 !== "秀女"){
            if(_all_feizi[_loc4_].孕 !== 0 && _all_feizi[_loc4_].爱 >= 100 && _all_feizi[_loc4_]._code !== 7004){
               _loc5_.push(_all_feizi[_loc4_]);
            }
            else if(_all_feizi[_loc4_].孕 == 0 && (_all_feizi[_loc4_].省亲 == 0 || _all_feizi[_loc4_].省亲 == undefined) && _all_feizi[_loc4_].任性 >= 400 && _all_feizi[_loc4_].野心 > 50){
               _loc6_.push(_all_feizi[_loc4_]);
            }
         }
         _loc4_ += 1;
      }
      if(_loc5_.length > 0 && _loc6_.length > 0 && 时辰 !== "清晨" && 时辰 !== "深夜"){
         var 谁小产 = _loc5_[random(_loc5_.length)];
         var 谁陷害 = _loc6_[random(_loc6_.length)];
		 id('taijianSh').style.display = 'block';
         id('taijianText').innerText = "皇上，皇上，不好了！" + _all_palace[谁小产.宫殿].名称 + "刚刚传来消息：\n" + 谁小产.封号 + 谁小产.位分 + "娘娘小产了，皇上快去看看吧。";
         id('taijian').style.backgroundPositionX = '0px';
         id('taijian').style.width = '112px';
         id('taijianCon').onclick = function(){
            谁小产.孕 = 0;
            谁小产.病 = 5;
            谁小产.仙 = 0;
            怀疑小产有人陷害事件(谁小产,谁陷害);
            id('taijianSh').style.display = 'none';
         };
      }
   }
   else if(参数 == 6){
      var _loc7_ = [];
      var _loc8_ = [];
      _loc4_ = 0;
      while(_loc4_ < _all_child.length){
         if(_all_child[_loc4_].性别 == 0 && _all_child[_loc4_].年龄 >= 16 && _all_child[_loc4_].状态 == 0 && _all_child[_loc4_].关系 < 80 && _all_child[_loc4_].病 == 0 && _all_child[_loc4_].野心 > 50){
            _loc7_.push(_all_child[_loc4_]);
         }
         else if(_all_child[_loc4_].性别 == 0 && _all_child[_loc4_].年龄 < 16 && _all_child[_loc4_].智力 > 80 && _all_child[_loc4_].状态 == 0){
            _loc8_.push(_all_child[_loc4_]);
         }
         _loc4_ += 1;
      }
      var _loc9_ = _loc7_[random(_loc7_.length)];
      var _loc10_ = _loc8_[random(_loc8_.length)];
      var _loc11_ = ["的饮食中，食物相冲，导致突发恶疾","被毒虫咬伤，中了奇毒","误食了丹药，体内毒发","突然染上时疫"];
      var _loc12_ = random(4);
      if(_loc7_.length > 0 && _loc8_.length > 0 && 时辰 == "深夜"){
         var _loc13_ = _loc9_.关系 - _loc10_.关系;
		 id('taijianSh').style.display = 'block';console.log(_loc13_);
         if(_loc13_ < -20){
            id('taijianText').innerText = "皇上，不好了，皇子" + _loc10_.名称 + _loc11_[_loc12_] + "，太医们束手无策，皇子不幸归天了。其他皇子在灵堂守灵，但" + _loc9_.名称 + "显得很焦躁不安。";
            id('taijian').style.backgroundPositionX = '-112px';
            id('taijian').style.width = '112px';
            判定这个子女死亡(_loc10_);
            主角.毒死皇子 = [1,_loc10_,_loc9_,_loc12_];
         }
         else if(_loc13_ < 0){
            id('taijianText').innerText = "皇上，不好了，皇子" + _loc10_.名称 + _loc11_[_loc12_] + "，还好太医们及时救治，皇子保住了性命，但是恐怕留下了后遗症。皇上去看看" + _loc10_.名称 + "殿下吧。";
            id('taijian').style.backgroundPositionX = '-112px';
            id('taijian').style.width = '112px';
            _loc10_.智力 -= 20 + random(10);
            _loc10_.病 = 8;
         }
         else{
            id('taijianText').innerText = "皇上，不好了，皇子" + _loc10_.名称 + _loc11_[_loc12_] + "，还好太医们及时救治，皇子保住了性命。皇上去看看" + _loc10_.名称 + "殿下吧。";
            id('taijian').style.backgroundPositionX = '-112px';
            id('taijian').style.width = '112px';
            _loc10_.病 = 8;
         }
         id('taijianCon').onclick = function(){
             id('taijianSh').style.display = 'none';
         };
      }
   }
   else if(参数 == 7){
      console.log("公主求婚");
      var _loc14_ = [];
      var _loc15_ = [];
      _loc4_ = 0;
      while(_loc4_ < _all_child.length){
         if(_all_child[_loc4_].关系 > 50 && _all_child[_loc4_]._code == 9000 && _all_child[_loc4_].性别 == 1 && _all_child[_loc4_].年龄 >= 16 && _all_child[_loc4_].年龄 <= 25 && _all_child[_loc4_].状态 == 0 && _all_child[_loc4_].婚 == 0){
            _loc14_.push(_all_child[_loc4_]);
         }
         _loc4_ += 1;
      }
      var 公主 = _loc14_[random(_loc14_.length)];
	  if(_loc14_.length !== 0){var _loc16_ = 公主.年龄;}
      console.log("公主年龄" + _loc16_);
      _loc4_ = 0;
      while(_loc4_ < _all_rencai.length){
         if(_loc14_.length !== 0){
			if(_all_rencai[_loc4_].年龄 > _loc16_ && _all_rencai[_loc4_].年龄 < 30 && _all_rencai[_loc4_].性别 == 0 && _all_rencai[_loc4_].魅力 >= 80 && _all_rencai[_loc4_].任务中 <= 1 && _all_rencai[_loc4_].爵位 < 6)
			{
			   _loc15_.push(_all_rencai[_loc4_]);
			} 
		 }
         _loc4_ += 1;
      }
      if(_loc14_.length !== 0 &&_loc15_.length !== 0 &&时辰 !== "清晨" && 时辰 !== "深夜"){
		  var 驸马 = _loc15_[random(_loc15_.length)];
		  id('taijianSh').style.display = 'block';
         id('taijianText').innerText = "皇上，乾清宫来人禀报，公主" + 公主.名称 + "在乾清宫已等候多时了，说是有非常重要的事情。请皇上移驾乾清宫。";
         id('taijian').style.backgroundPositionX = '-224px';
         id('taijian').style.width = '159px';
         id('taijianCon').onclick = function(){
            公主求赐婚事件(公主,驸马);
             id('taijianSh').style.display = 'none';
         };
      }
   }
   else if(参数 == 5){
      _loc7_ = [];
      _loc4_ = 0;
      while(_loc4_ < _all_child.length){
         if(_all_child[_loc4_].性别 == 0 && _all_child[_loc4_].武力 >= 80 && _all_child[_loc4_].年龄 >= 16 && _all_child[_loc4_].状态 == 0){
            _loc7_.push(_all_child[_loc4_]);
         }
         if(_all_child[_loc4_].id == 国家.皇储id){
            var 太子 = _all_child[_loc4_];
            var _loc17_ = 太子.智力;
         }
         _loc4_ += 1;
      }
      _loc7_.sort(compare(["智力","朝廷势力"]));
      if(_loc7_.length !== 0 && 太子 !== undefined && 时辰 !== "清晨" && 时辰 !== "午后"){
		 var 天赋最高的成年皇子 = _loc7_[_loc7_.length - 1];
		 var _loc18_ = 天赋最高的成年皇子.智力;
		 var _loc19_ = 天赋最高的成年皇子.野心;
         if(太子.野心 < 天赋最高的成年皇子.野心 && 太子.名称 !== 天赋最高的成年皇子.名称 && 太子.年龄 > 16 && _loc17_ < _loc18_ && 太子.状态 == 0 && 天赋最高的成年皇子.病 == 0){
			id('taijianSh').style.display = 'block';
            id('taijianText').innerText = "皇上，皇子" + 天赋最高的成年皇子.名称 + "求见。说是有紧急的要事必须马上禀告皇上。现在人已经在殿外候着了。";
            id('taijian').style.backgroundPositionX = '-224px';
            id('taijian').style.width = '159px';
            id('taijianCon').onclick = function()
            {
               玄武门之变(太子,天赋最高的成年皇子);
                id('taijianSh').style.display = 'none';
            };
         }
      }
   }
   else{
      if(时辰 == "清晨"){
		id('taijianSh').style.display = 'block';
         id('taijianText').innerText = "皇上今天精神气色不错，\n文武大臣已在宣政殿恭候大驾。\n请皇上移驾【宣政殿】。";
         id('taijian').style.backgroundPositionX = '-224px';
         id('taijian').style.width = '159px';
      }
      else if(时辰 == "午后"){
		id('taijianSh').style.display = 'block';
         id('taijianText').innerText = "皇上今天精神气色不错，\n午后可以安排一些活动。";
         id('taijian').style.backgroundPositionX = '-224px';
         id('taijian').style.width = '159px';
      }
      else if(时辰 == "晚上"){
		id('taijianSh').style.display = 'block';
         id('taijianText').innerText = "皇上今天精神气色不错，\n晚上可以安排一些活动。";
         id('taijian').style.backgroundPositionX = '-224px';
         id('taijian').style.width = '159px';
      }
      else if(时辰 == "深夜"){
		id('taijianSh').style.display = 'block';
         id('taijianText').innerText = "皇上今天精神气色不错，\n夜深了，皇上请休息。";
         id('taijian').style.backgroundPositionX = '-224px';
         id('taijian').style.width = '159px';
      }
      id('taijianCon').onclick = function(){
          id('taijianSh').style.display = 'none';
      };
   }
}
function 城市灾难事件(城市){
   var _loc7_ = random(6);
   var _loc4_ = "";
   var _loc3_ = 0;
   var _loc5_ = 1;
   var _loc6_ = 1;
   var _loc8_ = 1;
   if(_loc7_ == 0){
      灾难类型 = "瘟疫";
      _loc4_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000") + "瘟疫正在四处蔓延，肯请皇上能派御医前往协助控制瘟疫。";
      var _loc9_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "瘟疫正在四处蔓延，肯请皇上能派御医前往协助控制瘟疫。";
      记载入官员奏折的程序(_loc9_);
      每月丞相奏报.unshift(城市.名称 + "瘟疫正在四处蔓延");
      _loc3_ = 3;
      _loc5_ = 3;
      _loc6_ = -5;
      城市.人口 = Math.round(城市.人口 * 0.9);
   }
   else if(_loc7_ == 1){
      灾难类型 = "蝗灾";
      _loc4_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000")  + "蝗虫席卷而来，当地众多农田糟毁。";
      _loc9_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "蝗虫席卷而来，当地众多农田糟毁。";
      记载入官员奏折的程序(_loc9_);
      每月丞相奏报.unshift(城市.名称 + "蝗灾，众多农田糟毁");
      _loc3_ = 11;
      _loc5_ = 3;
      _loc6_ = -4;
      城市.人口 = Math.round(城市.人口 * 0.9);
   }
   else if(_loc7_ == 2){
      灾难类型 = "干旱";
      _loc4_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000")  + "数月未见雨落，绝收农田日益增多。";
      _loc9_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "数月未见雨落，绝收农田日益增多。";
      记载入官员奏折的程序(_loc9_);
      每月丞相奏报.unshift(城市.名称 + "干旱，绝收农田日益增多");
      _loc3_ = 12;
      _loc5_ = 3;
      _loc6_ = -4;
      城市.人口 = Math.round(城市.人口 * 0.9);
   }
   else if(_loc7_ == 3){
      灾难类型 = "水灾";
      _loc4_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000")  + "本月暴雨骤降，形成严重严重水灾。";
      _loc9_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "本月暴雨骤降，形成严重严重水灾。";
      记载入官员奏折的程序(_loc9_);
      每月丞相奏报.unshift(城市.名称 + "暴雨骤降，严重水灾。");
      _loc3_ = 13;
      _loc5_ = 3;
      _loc6_ = -4;
      城市.人口 = Math.round(城市.人口 * 0.9);
   }
   else if(_loc7_ == 4){
      灾难类型 = "台风";
      _loc4_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000")  + "飓风来袭，城市设施损毁严重。";
      _loc9_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "飓风来袭，城市设施损毁严重。";
      每月丞相奏报.unshift(城市.名称 + "飓风，城市设施损毁严重。");
      记载入官员奏折的程序(_loc9_);
      _loc3_ = 14;
      _loc5_ = 3;
      _loc6_ = -4;
      城市.人口 = Math.round(城市.人口 * 0.9);
   }
   else if(_loc7_ == 5){
      灾难类型 = "地震";
      _loc4_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000")  + "天摇地动，州府多处地方遭受毁坏。";
      _loc9_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "天摇地动，州府多处地方被毁。";
      记载入官员奏折的程序(_loc9_);
      每月丞相奏报.unshift(城市.名称 + "地震，多处地方被毁。");
      _loc3_ = 15;
      _loc5_ = 3;
      _loc6_ = -5;
      城市.人口 = Math.round(城市.人口 * 0.9);
   }
   if(_loc3_ !== 11 && _loc3_ !== 1){
      if(城市.金钱 > 100000 && 城市.粮食 > 100000){
         _loc4_ += "<br>州府内钱粮充足，微臣携当地百姓尽快组织赈灾。";
         _loc8_ = undefined;
         城市.金钱 -= 100000;
         城市.粮食 -= 100000;
      }
      else{
         _loc4_ += "<br>州府内粮饷紧缺，望皇上能派钦差大臣前来赈灾，以安百姓。";
         _loc8_ = 1;
      }
   }
   else{
      _loc8_ = undefined;
   }
   太监报告所有事件.push([_loc4_,"快乐",_loc6_,_loc3_,_loc5_,_loc8_,城市]);
}
function 城市丰收事件(城市){
   var _loc3_ = "";
   var _loc7_ = 0;
   var _loc5_ = 1;
   var _loc6_ = 1;
   var _loc8_ = undefined;
   if(random(2) == 0){
      var _loc4_ = random(5);
      if(_loc4_ == 0){
         _loc3_ = 城市.名称 + "畜牧业发展顺利，牛肥马壮，价格比以往好了很多。";
      }
      else if(_loc4_ == 1){
         _loc3_ = 城市.名称 + "农业发展顺利，灌溉水利，天气融和，麦苗滋长。";
      }
      else if(_loc4_ == 2){
         _loc3_ = 城市.名称 + "矿业发展顺利，铁矿，金银矿产量大增。";
      }
      else if(_loc4_ == 3){
         _loc3_ = 城市.名称 + "商业发展顺利，商贾收益大为增加。";
      }
      else if(_loc4_ == 4){
         _loc3_ = 城市.名称 + "城镇发展顺利，兴修道路。运输量大幅度提升。";
      }
      每月丞相奏报.unshift(城市.名称 + "发展顺利，百姓安居乐业。");
      var _loc9_ = _loc3_;
      记载入官员奏折的程序(_loc9_);
      _loc7_ = 1;
      _loc5_ = 2;
      _loc6_ = 5;
      城市.金钱 += 100000 + random(10000);
   }
   else{
      _loc3_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000")  + "屡有雨泽，天气融和，麦苗滋长。农民预庆丰收，远近喜跃。";
      _loc9_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "屡有雨泽，天气融和，麦苗滋长。农民预庆丰收，远近喜跃。";
      记载入官员奏折的程序(_loc9_);
      每月丞相奏报.unshift(城市.名称 + "丰收，收成增加。");
      _loc7_ = 10;
      _loc5_ = 2;
      _loc6_ = 5;
      城市.粮食 += 100000 + random(10000);
   }
   太监报告所有事件.push([_loc3_,"快乐",_loc6_,_loc7_,_loc5_,_loc8_,城市]);
}
function 城市负债事件(城市){
   var _loc6_ = "皇上，" + 城市.名称 + "府库已成负数，城市萧条，治安和民心下降，中央临时支援100万两，大臣建议皇上及时调整该城市的治理，否则容易发生农民起义。";
   var _loc2_ = -10;
   var _loc5_ = 21;
   var _loc3_ = 1;
   var _loc4_ = undefined;
   城市.民心 -= 5;
   城市.治安 -= 10;
   国家.金钱 -= 1000000;
   城市.金钱 += 1000000;
   记录大事件的程序(城市.名称 + "府库已成负数，中央临时支援100万两。");
   太监报告所有事件.push([_loc6_,"快乐",_loc2_,_loc5_,_loc3_,_loc4_,城市]);
}
function 城市可以赈灾事件(城市){
   var _loc9_ = "饥荒";
   var _loc7_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000")  + "粮食欠收，幸亏地方仓库存粮充足，当地官府已开仓赈灾，未造成大面积饥荒。";
   var _loc8_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "粮食欠收，官府开仓赈灾。";
   记载入官员奏折的程序(_loc8_);
   var _loc6_ = 3;
   var _loc3_ = 3;
   var _loc4_ = -4;
   var _loc5_ = undefined;
   太监报告所有事件.push([_loc7_,"快乐",_loc4_,_loc6_,_loc3_,_loc5_,城市]);
}
function 城市无法赈灾事件(城市, 取粮食负数绝对值){
   var _loc9_ = "饥荒";
   var _loc7_ = 城市.名称 + "知府奏折来报：<br>" + 颜色代码(城市.名称,"ff0000")  + "粮食欠收，地方仓库存粮充不足，无法赈灾，百姓四处逃荒，中央临时补助" + 取粮食负数绝对值 + "石粮食。";
   var _loc8_ = 城市.名称 + "知府奏折来报：" + 城市.名称 + "发生饥荒，中央临时补助" + 取粮食负数绝对值 + "石用以赈灾。";
   记载入官员奏折的程序(_loc8_);
   var _loc6_ = 3;
   var _loc3_ = 3;
   var _loc4_ = -4;
   var _loc5_ = undefined;
   太监报告所有事件.push([_loc7_,"快乐",_loc4_,_loc6_,_loc3_,_loc5_,城市]);
}