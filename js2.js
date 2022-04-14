function id(m){z = document.getElementById(m);return z;}
function className(m){z = document.getElementsByClassName(m);return z;}
function random(m){r = Math.round(Math.random()*(m-1));return r;}
function compare(m,参数){
	return function(a,b){
		var v1 = a[m];var v2 = b[m];
		if(参数== 0){return v2 - v1;}
		else if(参数== 1){return v2 - v1;}
		else{return v1 - v2;}}}
function 颜色代码(a,b){
	var c = "<font color="+b+">"+a+"</font>"; 
	return c;}
function 更新资料(){
	限制主要属性();
	if(属性.健康 > 70){
	    属性.状态 = "健康";
	    id('状态属性').style.color = '#0055ff';
	}
	else if(属性.健康 > 50){
	    属性.状态 = "疲劳";
	    id('状态属性').style.color = '#55aa00';
	}
	else if(属性.健康 > 20){
	    属性.状态 = "微恙";
	    id('状态属性').style.color = '#ffff00';
	}
	else{
	    属性.状态 = "重病";
	    id('状态属性').style.color = '#de0000';
	}
	id('月份').innerText = 月 + "月";
	id('tili').innerText = "体力  " + 属性.体力 + "/" + 属性.体力上限;
	id('年号和年').innerText = 主角.年号 + 年 + "年";
	id('状态属性').innerText = 属性.状态;
	id('金钱属性').innerText = Math.round(国家.金钱 / 10000) + "万两";
	id('粮食属性').innerText = Math.round(国家.粮食 / 10000) + "万石";
	id('zhujuename').innerText = 主角.姓氏 + 主角.名字;
	if(年 == 1){id('niandai').innerText = 主角.年号 + "元年 " + 季节 + "季 " + 月 + "月";}
	else{
	id('niandai').innerText = 主角.年号 + "" + 年 + "年 " + 季节 + "季 " + 月 + "月";}
	id('nianling').innerText = '年龄 ' + 属性.年龄;
	id('zhuangt').innerText = '状态 ' + 属性.状态;
	id('zhujuetili').innerText = 属性.体力;
	id('weiwang').innerText = 属性.威望;
	id('daode').innerText = 属性.道德;
	id('baoli').innerText = 属性.暴戾;
	id('kuaile').innerText = 属性.快乐;
	id('tongsh').innerText = 属性.统帅;
	id('wuli').innerText = 属性.武力;
	id('zhili').innerText = 属性.智力;
	id('zhengz').innerText = 属性.政治;
	id('meili').innerText = 属性.魅力;
	id('caiyi').innerText = 属性.才艺;
	id('guoku').innerText= Math.round(国家.金钱 / 10000) + "万两";
	id('cunliang').innerText = Math.round(国家.粮食 / 10000) + "万石";
	id('tilitiao').style.width = Math.ceil(属性.体力 / 属性.体力上限 * 104) + 'px';
	id('weiwangtiao').style.width =  Math.ceil(属性.威望 / 1000 * 104) + 'px';
	id('daodetiao').style.width =  Math.ceil(属性.道德 / 1000 * 104) + 'px';
	id('baolitiao').style.width =  Math.ceil(属性.暴戾 / 1000 * 104) + 'px';
	id('kuailetiao').style.width =  Math.ceil(属性.快乐 / 100 * 104) + 'px';
	id('tongshtiao').style.width =  Math.ceil(属性.统帅 / 1000 * 104) + 'px';
	id('wulitiao').style.width =  Math.ceil(属性.武力 / 1000 * 104) + 'px';
	id('zhilitiao').style.width =  Math.ceil(属性.智力 / 1000 * 104) + 'px';
	id('zhengztiao').style.width =  Math.ceil(属性.政治 / 1000 * 104) + 'px';
	id('meilitiao').style.width =  Math.ceil(属性.魅力 / 1000 * 104) + 'px';
	id('caiyitiao').style.width =  Math.ceil(属性.才艺 / 1000 * 104) + 'px';
	id('tiliT').style.width =  Math.ceil(属性.体力 / 属性.体力上限 * 171) + 'px';
 }
function 小提示(文本){
	id('xiaots').style.display = 'none';
	setTimeout(function() {id('xiaots').style.display = 'block';}, 10);
	id('小提示').innerText = 文本;
	setTimeout(function() {id('xiaots').style.display = 'none';}, 3990);
}
function efc_rain(){}
function 蓝色魔法阵(){}
function 结束特效(){}
function 黑色幕布(){
	id('heimubu').style.display = 'block';
	setTimeout(function() {id('heimubu').style.display = 'none';}, 350);
}
function 剧情达成(参数){
   var _loc2_ = 0;
   while(_loc2_ < 剧情汇总.length){
      if(剧情汇总[_loc2_]._code == 参数){
         剧情汇总[_loc2_].达成 = 1;
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 头像幕布(){
	id('txmubu').style.display = 'block';
	setTimeout(function() {id('txmubu').style.display = 'none';}, 400);
}
function 缓动黑幕(){
	id('heimubu').style.display = 'block';
	setTimeout(function() {id('heimubu').style.display = 'none';}, 590);
}
function 等待的大黑布(){
 	id('dengdaihmb').style.display = 'block';
 	setTimeout(function() {id('dengdaihmb').style.display = 'none';var mc = 'images/3.png';
	烧掉截图(mc);}, 1000);
}
function 烧掉截图(mc){
	id('zhezhao').style.backgroundImage = 'url(' + mc + ')';
 	id('shaodiao').style.display = 'block';
 	setTimeout(function() {id('shaodiao').style.display = 'none';}, 690);
}
function 背景模糊(){
	id('皇宫背景2').style.filter = 'blur(5px)';
}
function 模糊恢复(){
	id('皇宫背景2').style.filter = 'none';
}
function 战斗震屏程序(){
	i = 0;
	while(i<200){
		setTimeout(function() {
			x = 8 - random(9);
			y = 8 - random(9);
			id('皇宫').style.transform = 'translate(' + x + 'px,'+ y + 'px)';}, i);
		i = i+20;
	}
	setTimeout(function() {
		id('皇宫').style.transform = 'translate(' + 0 + 'px,'+ 0 + 'px)';}, 210);
}
function 移除板子推进(路径){
	路径.style.display = 'none';
	主角.当前时辰 += 1;
	时辰推进();
}
function 太监说话的程序(参数,文本){
	id('taijianSh').style.display = 'block';
	id('taijiantu').style.display = 'none';
	if(参数 == 1){
	   id('taijian').style.backgroundPositionX = '-112px';
	   id('taijian').style.width = '112px';	
	}
	else if(参数 == 2){
	   id('taijian').style.backgroundPositionX = '-901px';
	   id('taijian').style.width = '183px';	
	}
	else if(参数 == 3){
	   id('taijian').style.backgroundPositionX = '-383px';
	   id('taijian').style.width = '161px';	
	}
	else if(参数 == 4){
	   id('taijian').style.backgroundPositionX = '-224px';
	   id('taijian').style.width = '159px';	
	}
	else if(参数 == 5){
	   id('taijian').style.backgroundPositionX = '0px';
	   id('taijian').style.width = '112px';	
	}
	else if(参数 == 6){
	   id('taijian').style.backgroundPositionX = '-1084px';
	   id('taijian').style.width = '118px';	
	}
	else if(参数 == 7){
	   id('taijian').style.backgroundPositionX = '-544px';
	   id('taijian').style.width = '143px';	
	}
	else{
	   id('taijian').style.backgroundPositionX = '-687px';
	   id('taijian').style.width = '214px';	
	}
	id('taijianCon').style.display = 'block';
	id('taijianCho').style.display = 'none';
	id('taijianSh').style.top = '0px';
	id('taijianText').innerText = 文本;
	id('taijianCon').onclick = function (){id('taijianSh').style.display = 'none';}
}
function 太监图(参数){
	if(参数 == 1){
	   id('taijian2').style.backgroundPositionX = '-112px';
	   id('taijian2').style.width = '112px';	
	}
	else if(参数 == 2){
	   id('taijian2').style.backgroundPositionX = '-901px';
	   id('taijian2').style.width = '183px';	
	}
	else if(参数 == 3){
	   id('taijian').style.backgroundPositionX = '-383px';
	   id('taijian').style.width = '161px';	
	}
	else if(参数 == 4){
	   id('taijian2').style.backgroundPositionX = '-224px';
	   id('taijian2').style.width = '159px';	
	}
	else if(参数 == 5){
	   id('taijian2').style.backgroundPositionX = '0px';
	   id('taijian2').style.width = '112px';	
	}
	else if(参数 == 6){
	   id('taijian2').style.backgroundPositionX = '-1084px';
	   id('taijian2').style.width = '118px';	
	}
	else if(参数 == 7){
	   id('taijian2').style.backgroundPositionX = '-544px';
	   id('taijian2').style.width = '143px';	
	}
	else{
	   id('taijian2').style.backgroundPositionX = '-687px';
	   id('taijian2').style.width = '214px';	
	}
}
function 国库钱数变动的程序(数值){
   if(!(isNaN(数值) || 数值 == undefined)){
      国家.金钱 += 数值;
   }
}
function 只取名程序(男女){
    var _loc3_ = "男名";
    var _loc4_ = "主名";
    var _loc5_ = "";
    if(男女 == "男"){
       if(random(10) > 4){
          _loc5_ = 主名[random(主名.length)] + 男名[random(男名.length)];
       }
       else{
          _loc5_ = 男名[random(男名.length)];
       }
    }
    else if(男女 == "女"){
       if(random(10) > 4){
          _loc5_ = 主名[random(主名.length)] + 女名[random(女名.length)];
       }
       else{
          _loc5_ = 女名[random(女名.length)];
       }
    }
    
    return _loc5_;
 }
function 最新的取名程序(男女){
    var _loc3_ = "男名";
    var _loc4_ = "主名";
    var _loc5_ = "";
    var _loc6_ = 姓[random(姓.length)];
    if(男女 == "男"){
       _loc3_ = "男名";
       _loc4_ = "主名";
    }
    else if(男女 == "女"){
       _loc3_ = "女名";
       _loc4_ = "女名";
    }
    if(random(10) > 4){
       _loc5_ = _loc6_ + this[_loc4_][random(this[_loc4_].length)] + this[_loc3_][random(this[_loc3_].length)];
    }
    else{
       _loc5_ = _loc6_ + this[_loc3_][random(this[_loc3_].length)];
    }
    _loc7_ = [_loc6_,_loc5_];
    return _loc7_;
 }
function 新后宫图形读取程序(路径,头像,特殊){
    var _loc4_ = LJ;
    if(特殊 == undefined){_loc4_ += "a0aPic_FeiZi/";}
    else if(特殊 == "男宠"){_loc4_ += "a0aPic_NanChong/";}
    else if(特殊 == "外域"){_loc4_ += "a0aPic_Wai/";}
    else if(特殊 == "青楼"){_loc4_ += "a0aPic_QingLou/";}
    else if(特殊 == "特殊"){_loc4_ += "a0aPic_TeShu/";}
    else if(特殊 == "戏子"){_loc4_ += "a0aPic_XiZi/";}
    else if(特殊 == "敌将"){_loc4_ += "a0aPic_DiJiang/";}
    else if(特殊 == "名臣"){_loc4_ += "a0aPic_MingChen/";}
    else if(特殊 == "名妃"){_loc4_ += "a0aPic_MingFei/";}
    else if(特殊 == "技术"){_loc4_ += "a0aPic_JiShu/";}
    else if(特殊 == "宫殿"){_loc4_ += "a0aPic_Placae/";}
    else if(特殊 == "皇子"){_loc4_ += "a0aPic_HuangZi/";}
    else if(特殊 == "公主"){_loc4_ += "a0aPic_HiMe/";}
    else if(特殊 == "剧情"){_loc4_ += "a0aPic_JuQing/";}
    else if(特殊 == "隐士"){_loc4_ += "a0aPic_YinZ/";}
    else if(特殊 == "血滴子"){_loc4_ += "a0aPic_XDZ/";}
    else if(特殊 == "太医"){_loc4_ += "a0aPic_YiSya/";}
    else if(特殊 == "驸马"){_loc4_ += "acbPic_FuMa/";}
    else if(特殊 == "名妓"){_loc4_ += "a0ePic_MingJi/";}
    else if(特殊 == "物品"){_loc4_ += "a0aPic_Icon/";}
    else if(特殊 == "背景"){_loc4_ += "a0aPic_BG/";}
	if(路径 == 剧情头像){头像幕布();}
	if(路径 !== undefined){路径.src = _loc4_ + "Tu_" + 头像 + ".jpg";}
	if(特殊 == "特殊"&&头像==0&&路径 !== undefined){路径.src =LJ + "a0aPic_TeShu/Tu_0.png";}
	_loc1_= _loc4_ + "Tu_" + 头像 + ".jpg";
	if(特殊 == "皇帝"){路径.src = LJ + "a0aPic_HuangDi/Tu_" + 主角.头像 + ".jpg";}
	return _loc1_;
 }
function 出现这个人的头像(路径,对象,参数){
    if(对象._code == undefined ||对象._code == 7009){
       var _loc4_ = 对象.头像;
       新后宫图形读取程序(路径,_loc4_);
	}
	else if(对象._code == 7888){
	   新后宫图形读取程序(路径,43,"特殊");
	}
    else if(对象._code >= 1000 && 对象._code <= 1999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"男宠");}
    else if(对象._code >= 2000 && 对象._code <= 2999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"名妃");}
    else if(对象._code >= 3000 && 对象._code <= 3999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"戏子");}
    else if(对象._code >= 4000 && 对象._code <= 4999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"敌将");}
    else if(对象._code >= 5000 && 对象._code <= 5999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"外域");}
    else if(对象._code >= 6000 && 对象._code <= 6999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"名臣");}
    else if(对象._code >= 7000 && 对象._code <= 7999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"剧情");}
    else if(对象._code >= 8000 && 对象._code <= 8999){
       if(对象.年龄 <= 3 && 对象._code !== 8903){
          新后宫图形读取程序(路径,1,"特殊");
       }
       else if(对象.年龄 <= 9){
          _loc4_ = 对象.幼年;
          新后宫图形读取程序(路径,_loc4_,"皇子");
       }
       else{
          _loc4_ = 对象.头像;
          新后宫图形读取程序(路径,_loc4_,"皇子");
       }
	}
    else if(对象._code >= 9000 && 对象._code <= 9999){
       if(对象.年龄 <= 3 && 对象._code !== 9903){
          新后宫图形读取程序(路径,1,"特殊");
       }
       else if(对象.年龄 <= 9){
          _loc4_ = 对象.幼年;
          新后宫图形读取程序(路径,_loc4_,"公主");
       }
       else{
          _loc4_ = 对象.头像;
          新后宫图形读取程序(路径,_loc4_,"公主");
       }
	}
    else if(对象._code >= 11000 && 对象._code <= 11999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"隐士");
    }
    else if(对象._code >= 10000 && 对象._code <= 10999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"血滴子");
    }
    else if(对象._code >= 12000 && 对象._code <= 12999){
       _loc4_ = 对象.头像;
       if(参数 == 0){
          _loc4_ = 对象.跳;
       }
       新后宫图形读取程序(路径,_loc4_,"太医");
    }
    else if(对象._code >= 13000 && 对象._code <= 13999){
       _loc4_ = 对象.头像;
       新后宫图形读取程序(路径,_loc4_,"驸马");
    }
    else if(对象._code >= 14000 && 对象._code <= 14999){
       _loc4_ = 对象.头像;
       新后宫图形读取程序(路径,_loc4_,"名妓");
    }
	else if(对象._code >= 15000 && 对象._code <= 15999){
	   if(对象.年龄 <= 3 && 对象._code !== 8903){
	      新后宫图形读取程序(路径,1,"特殊");
	   }
	   else if(对象.年龄 <= 9){
	      _loc4_ = 对象.幼年;
	      新后宫图形读取程序(路径,_loc4_,"皇子");
	   }
	   else{
	      _loc4_ = 对象.头像;
	      新后宫图形读取程序(路径,_loc4_,"皇子");
	   }
	}
	else if(对象._code >= 16000 && 对象._code <= 16999){
	   if(对象.年龄 <= 3 && 对象._code !== 9903){
	      新后宫图形读取程序(路径,1,"特殊");
	   }
	   else if(对象.年龄 <= 9){
	      _loc4_ = 对象.幼年;
	      新后宫图形读取程序(路径,_loc4_,"公主");
	   }
	   else{
	      _loc4_ = 对象.头像;
	      新后宫图形读取程序(路径,_loc4_,"公主");
	   }
	}
    else{
       新后宫图形读取程序(路径,对象.头像);
    }
 }
function 出圣旨(文本,参数){
	黑色幕布();
	id('出圣旨吧').style.display = 'block';
	var numArr = 文本.match(/\d+/g);
	id('圣旨文本').innerText = 文本;
	id('xi').onclick = function(){
	    id('出圣旨吧').style.display = 'none';
		if(参数 == 1) {
            主角.当前时辰 += 1;
            时辰推进();
        }
        if(参数 == 2){
            主角.当前时辰 = 4;
            时辰推进();
        }
	}
} 
function 是否会怀孕呢(对象){
	console.log(对象.状态);
    var _loc2_ = Math.round(属性.年龄 / 3 + 对象.年龄 / 6 + 对象.生育);
    if(主角.妃子怀孕 == 1 || _all_child.length > 300){
    }
    else{
       if(对象.仙 !== 3 && 对象._code !== 7004){
          if(对象.性别 == 1){
             if(对象.状态 == 1)
             {
                会不会怀孕 = 0;
                对象.状态 = 0;
             }
             else
             {
                会不会怀孕 = random(_loc2_);
             }
          }
          else if(对象.性别 == 0){
             if(主角._con_tianjiang >= 1 && 对象.年龄 < 40)
             {
                主角._con_tianjiang = 0;
                对象.孕 = 10;
                主角.妃子怀孕 = 1;
                男宠腹中有胎像(对象);
             }
             else
             {
                会不会怀孕 = 100;
             }
          }
       }
       else{
          会不会怀孕 = 100;
       }
       if(会不会怀孕 < 2 + 所有技术[20].开启 * 所有技术[20].效果){
          主角.妃子怀孕 = 1;
          if(对象.年龄 < 38){
             对象.孕 = 10;
          }
       }
    }
 }
function 性格计算(对象){
    if(对象.性格 == undefined){
 	    if(对象.野心 <= 30 && 对象.清廉 >= 70){
 	        if(对象.智力 >= 85){
 	            var _loc4_ = 0;
 	            var _loc5_ = random(6) + 1;
 	        }
 	        else if(对象.武力 >= 30){
			    var _loc4_ = random(6) + 1;
 	            var _loc5_ = random(3) + 7;
 	        }
 	        else{
				var _loc4_ = random(6) + 1;
				if(random(2)==0){
					var _loc5_ = random(3) + 10;
				}
				else{
					var _loc5_ = random(3) + 17;
				}
 	        }
 	    }
 	    else if(对象.野心 < 50 && 对象.清廉 >= 70){
 	        if(对象.智力 >= 70){
 	    		var _loc4_ = 40;
 	    		var _loc5_ = random(6) + 1;
 	        }
 	    	else if(对象.智力 <= 35){
 	    		var _loc5_ = random(2) + 14;
 	    		var _loc4_ = random(2) + 3;
 	    	}
 	    	else if(random(2) == 0){
 	    		var _loc5_ = random(7) + 9;
 	    		var _loc4_ = random(5) + 1;
 	    	}
 	    	else{
 	    		var _loc5_ = random(4) + 17;
 	    		var _loc4_ = random(5) + 1;
 	    	}
 		}
 		else if(对象.野心 >= 70 && 对象.清廉 <= 70){
 			if(对象.智力 >= 60){
 				var _loc4_ = random(2) + 29;
 				if(random(3)==0){
 					var _loc5_ = 33;
 				}
 				else{
 					var _loc5_ = random(3) + 37;
 				}
 	    	}
 			else if(对象.武力 >= 30 && 对象.智力 <= 40){
 	    		var _loc4_ = random(4) + 31;
				var _loc5_ = random(3) + 35;
 	    	}
 	    	else{
 	    		var _loc4_ = random(3) + 31;
 	    		var _loc5_ = random(3) + 37;
 	       }
 	    }
		else if(对象.智力 >= 75){
				if(random(4)==0){
					var _loc4_ = 40;
					var _loc5_ = random(5) + 14;
				}
				else if(random(2)==0){
					var _loc4_ = 40;
					var _loc5_ = random(6) + 16;
				}
				else{
					var _loc4_ = random(5) + 14;
					var _loc5_ = random(2) + 29;
				}
			}
		else if(对象.智力 <= 40){
			if(random(4)==0){
				var _loc4_ = random(2) + 22;
				var _loc5_ = random(3) + 26;
			}
			else if(random(2)==0){
				var _loc4_ = random(4) + 31;
				var _loc5_ = random(5) + 35;
			}
			else{
				var _loc4_ = random(5) + 19;
				var _loc5_ = random(5) + 14;
			}
		}
 	else{
		if(random(2)==0){
			var _loc4_ = random(6) + 1;
			var _loc5_ = random(3) + 9;
		}
		else if(random(3)==0){
			var _loc4_ = random(3) + 26;
			var _loc5_ = random(5) + 21;
			
		}
		else{
			var _loc4_ = random(7) + 10;
			var _loc5_ = random(3) + 29;
		}
	}
	}
    if(对象.性格 !== undefined){
    }
    else if(对象.性格 == undefined){
       对象.性格 = [_loc4_,_loc5_];
    }
	return 对象.性格;
 }
function 出现性格(对象){
	if(对象.性别 == 0 ||对象.身份 == "男宠"||对象.身份 == "夫君"){
	   i = 性情0[对象.性格[0]] + "，" + 性情0[对象.性格[1]];
	}
	else{
	   i = 性情1[对象.性格[0]] + "，" + 性情1[对象.性格[1]];
	}
	return i;
}
function 出身计算(参数){
    _loc2_ = random(10);
    if(参数 == 1){
       _loc2_ = random(13);
    }
	else if(参数 == 2){
	   _loc2_ = 8;
	}
	else if(参数 == 3){
	   _loc2_ = random(6);
	}
	else if(参数 == 4){
	   _loc3_ = 官职3[random(官职3.length)];
	}
    if(_loc2_ > 7){
       _loc3_ = 官职1[random(官职1.length)];
    }
    else if(_loc2_ < 3){
       _loc3_ = 官职3[random(官职3.length)];
    }
    else{
       _loc3_ = 官职2[random(官职2.length)];
    }
    var _loc2_ = random(_loc3_.length);
    while(_loc2_ == 0){
       _loc2_ = random(_loc3_.length);
    }
	_loc4_="嫡女";
    _loc5_ = _loc3_[0];
    _loc6_ = _loc3_[_loc2_];
    _loc7_ = _loc3_[0]+"品"+_loc3_[1]+"之女";
    return _loc7_;
 }
function 显示出身(取数据){
	if(取数据.出身.length>1){
		_loc1_=品级[取数据.出身[1]]+"品"+取数据.出身[2];
	}
	else{
		_loc1_=取数据.出身;
	}
	return _loc1_;
 }
function 生成游戏国内人才的程序(){
    数值 = 0;
    _all_rencai = Array();
    国内人才 = Array();
    var _loc1_ = 0;
    while(_loc1_ < 10){
       人才 = 创建新人才();
	   人才.年龄 = 30 + random(26);
	   人才.介绍 = "开国大臣。";
       _all_rencai.push(人才);
       _loc1_ += 1;
    }
 }
function 创建新人才(){
    var _loc2_ = 姓[random(姓.length)];
    var _loc3_ = _loc2_ + 只取名程序("男");
    var _loc1_ = {id:国家.臣子顺序,_code:13000,名字:_loc3_,家族:_loc2_,性别:0,经验:0};
    国家.臣子顺序 += 1;
    _loc1_.介绍 = undefined;
    _loc1_.党 = undefined;
    _loc1_.统帅 = 25 + random(35);
    _loc1_.武力 = 25 + random(35);
    _loc1_.智力 = 25 + random(35);
    _loc1_.政治 = 25 + random(35);
    _loc1_.魅力 = 45 + random(30);
    _loc1_.清廉 = 20 + random(70);
    _loc1_.野心 = 20 + random(70);
    _loc1_.忠诚 = 50 + random(40);
    _loc1_.头像 = random(2) + 36;
    _loc1_.文化 = 8;
    _loc1_.性格 = 性格计算(_loc1_);
    _loc1_.年龄 = 20 + random(16);
    _loc1_.功勋 = 300 + random(500);
    _loc1_.地位 = 计算人才地位(_loc1_.功勋);
    _loc1_.品阶 = 计算人才品阶(_loc1_.功勋);
    _loc1_.带兵上限 = 计算带兵上限(_loc1_.功勋);
    _loc1_.爵位 = 0;
    _loc1_.任务中 = 0;
    _loc1_.委任城市 = undefined;
    _loc1_.后宫相性 = "";
    _loc1_.后宫势力 = 0;
    _loc1_.朝廷相性 = "";
    _loc1_.朝廷势力 = 0;
    _loc1_.皇嗣相性 = "";
	_loc1_.介绍 = "来自中原的人才。";
    _loc1_.爱好 = random(所有喜好.length);
    _loc1_.关系 = random(5);
    _loc1_.结婚 = 0;
    return _loc1_;
 }
function 创建科举人才(){
    var _loc2_ = 姓[random(姓.length)];
    var _loc3_ = _loc2_ + 只取名程序("男");
    var _loc1_ = {id:国家.臣子顺序,_code:13000,名字:_loc3_,家族:_loc2_,性别:0,经验:0};
    国家.臣子顺序 += 1;
    _loc1_.介绍 = "科举人才。";
    _loc1_.党 = undefined;
    _loc1_.统帅 = 25 + random(35);
    _loc1_.武力 = 25 + random(35);
    _loc1_.智力 = 25 + random(35);
    _loc1_.政治 = 25 + random(35);
    _loc1_.魅力 = 45 + random(30);
    _loc1_.清廉 = 20 + random(70);
    _loc1_.野心 = 20 + random(70);
    _loc1_.忠诚 = 50 + random(40);
    _loc1_.头像 = random(2) + 36;
    _loc1_.文化 = 8;
    _loc1_.性格 = 性格计算(_loc1_);
    _loc1_.年龄 = random(5) + 16;
    _loc1_.功勋 = 0;
    _loc1_.地位 = 计算人才地位(_loc1_.功勋);
    _loc1_.品阶 = 计算人才品阶(_loc1_.功勋);
    _loc1_.带兵上限 = 计算带兵上限(_loc1_.功勋);
    _loc1_.爵位 = 0;
    _loc1_.任务中 = 0;
    _loc1_.委任城市 = undefined;
    _loc1_.后宫相性 = "";
    _loc1_.后宫势力 = 0;
    _loc1_.朝廷相性 = "";
    _loc1_.朝廷势力 = 0;
    _loc1_.皇嗣相性 = "";
    _loc1_.爱好 = random(所有喜好.length);
    _loc1_.关系 = random(5);
    _loc1_.结婚 = 0;
    return _loc1_;
 }
function 计算人才地位(功勋){
    var _loc2_ = 0;
    if(功勋 < 100){
       _loc2_ = 0;
    }
    else if(功勋 < 200){
       _loc2_ = 1;
    }
    else if(功勋 < 300){
       _loc2_ = 2;
    }
    else if(功勋 < 500){
       _loc2_ = 3;
    }
    else if(功勋 < 700){
       _loc2_ = 4;
    }
    else if(功勋 < 900){
       _loc2_ = 5;
    }
    else if(功勋 < 1100){
       _loc2_ = 6;
    }
    else if(功勋 < 1300){
       _loc2_ = 7;
    }
    else if(功勋 >= 1300){
       _loc2_ = 8;
    }
    return _loc2_;
 }
function 计算人才品阶(功勋){
    var _loc2_ = "";
    if(功勋 < 100){
       _loc2_ = "九品";
    }
    else if(功勋 < 200){
       _loc2_ = "八品";
    }
    else if(功勋 < 300){
       _loc2_ = "七品";
    }
    else if(功勋 < 500){
       _loc2_ = "六品";
    }
    else if(功勋 < 700){
       _loc2_ = "五品";
    }
    else if(功勋 < 900){
       _loc2_ = "四品";
    }
    else if(功勋 < 1100){
       _loc2_ = "三品";
    }
    else if(功勋 < 1300){
       _loc2_ = "二品";
    }
    else if(功勋 >= 1300){
       _loc2_ = "一品";
    }
    return _loc2_;
 }
function 计算带兵上限(功勋){
    var _loc2_ = 0;
    if(功勋 < 100){
       _loc2_ = 20000;
    }
    else if(功勋 < 200){
       _loc2_ = 23000;
    }
    else if(功勋 < 300){
       _loc2_ = 27000;
    }
    else if(功勋 < 500){
       _loc2_ = 30000;
    }
    else if(功勋 < 700){
       _loc2_ = 33000;
    }
    else if(功勋 < 900){
       _loc2_ = 37000;
    }
    else if(功勋 < 1100){
       _loc2_ = 40000;
    }
    else if(功勋 < 1300){
       _loc2_ = 45000;
    }
    else if(功勋 >= 1300){
       _loc2_ = 50000;
    }
    return _loc2_;
 }
function 让这个人才变成名人(人才,对象){
    if(对象 == undefined){
       var _loc3_ = [];
       var _loc4_ = 0;
       while(_loc4_ < 所有历史名人.length){
          if(所有历史名人[_loc4_].用过 == undefined){
             _loc3_.push(所有历史名人[_loc4_]);
          }
          _loc4_ += 1;
       }
       var _loc5_ = random(_loc3_.length);
       人才.名字 = _loc3_[_loc5_].名称;
       人才.家族 = _loc3_[_loc5_].家族;
       人才.介绍 = undefined;
       人才.统帅 = _loc3_[_loc5_].统帅;
       人才.武力 = _loc3_[_loc5_].武力;
       人才.智力 = _loc3_[_loc5_].智力;
       人才.政治 = _loc3_[_loc5_].政治;
       人才.魅力 = _loc3_[_loc5_].魅力;
       人才.头像 = _loc3_[_loc5_].跳;
       人才.清廉 = _loc3_[_loc5_].清廉;
       人才.野心 = _loc3_[_loc5_].野心;
       人才.性别 = _loc3_[_loc5_].性别;
       人才.文化 = _loc3_[_loc5_].文化;
	   人才.结婚 = 0;
       人才.性格 = 性格计算(_loc3_[_loc5_]);
       人才._code = _loc3_[_loc5_]._code;
       _loc4_ = 0;
       while(_loc4_ < 所有历史名人.length){
          if(所有历史名人[_loc4_]._code == _loc3_[_loc5_]._code){
             所有历史名人[_loc4_].用过 = 1;
          }
          _loc4_ += 1;
       }
    }
    else{
       人才.名字 = 对象.名称;
       人才.家族 = 对象.家族;
       人才.介绍 = undefined;
       人才.统帅 = 对象.统帅;
       人才.武力 = 对象.武力;
       人才.智力 = 对象.智力;
       人才.政治 = 对象.政治;
       人才.魅力 = 对象.魅力;
       人才.头像 = 对象.跳;
       人才.清廉 = 对象.清廉;
       人才.野心 = 对象.野心;
       人才.性别 = 对象.性别;
       人才.文化 = 对象.文化;
       人才.性格 = 性格计算(人才);
	   人才.结婚 = 0;
       人才._code = 对象._code;
       _loc4_ = 0;
       while(_loc4_ < 所有历史名人.length){
          if(所有历史名人[_loc4_]._code == 对象._code){
             所有历史名人[_loc4_].用过 = 1;
          }
          _loc4_ += 1;
       }
    }
 }
function 让这个人才变成敌将(人才,取数据){
   人才.名字 = 取数据.名称;
   人才.家族 = 取数据.家族;
   人才.介绍 = undefined;
   人才.统帅 = 取数据.统帅;
   人才.智力 = 取数据.智力;
   人才.武力 = 取数据.武力;
   人才.政治 = 取数据.政治;
   人才.魅力 = 取数据.魅力;
   人才.头像 = 取数据.跳;
   人才.清廉 = 取数据.清廉;
   人才.野心 = 取数据.野心;
   人才.性别 = 取数据.性别;
   人才.文化 = 取数据.文化;
   人才.结婚 = 0;
   if(取数据.性格!==undefined){
	   人才.性格 = 取数据.性格;
   }
   else{
	   人才.性格 = 性格计算(取数据);
   }
   人才.年龄 = 18;
   人才._code = 取数据._code;
   var _loc1_=0;
   while(_loc1_<_all_family.length){
   	if(_all_family[_loc1_].名称 == 取数据.名称&&_all_family[_loc1_]._code == 取数据._code){
   		人才.年龄 = _all_family[_loc1_].年龄;
		_all_family.splice(_loc1_,1);
   	}
   	_loc1_+=1;
   }
}
function 让这个人才变成隐士(人才, 取数据){
   人才.名字 = 取数据.名称;
   人才.家族 = 取数据.家族;
   人才.介绍 = 取数据.介绍;
   人才.统帅 = 取数据.统帅;
   人才.智力 = 取数据.智力;
   人才.武力 = 取数据.武力;
   人才.政治 = 取数据.政治;
   人才.魅力 = 取数据.魅力;
   人才.头像 = 取数据.头像;
   人才.清廉 = 取数据.清廉;
   人才.野心 = 取数据.野心;
   人才.性别 = 取数据.性别;
   人才.文化 = 取数据.文化;
   人才.结婚 = 0;
   人才.性格 = 性格计算(取数据);
   人才.年龄 = 16 + random(10);
   人才._code = 取数据._code;
   人才.任务中 = 1;
}
function 刷新官员品阶(){
   i = 0;
   while(i < _all_rencai.length){
      _all_rencai[i].地位 = 计算人才地位(_all_rencai[i].功勋);
      _all_rencai[i].品阶 = 计算人才品阶(_all_rencai[i].功勋);
      _all_rencai[i].带兵上限 = 计算带兵上限(_all_rencai[i].功勋);
	  if(_all_rencai[i].野心 == undefined){
	    _all_rencai[i].野心=random(100);
	  }
      if(_all_rencai[i].官职 !== undefined){
         if(_all_rencai[i].官职 == "丞相"){
            _all_rencai[i].地位 = 8;
            _all_rencai[i].品阶 = "一品";
         }
         else{
            _all_rencai[i].地位 = 6;
            _all_rencai[i].品阶 = "三品";
         }
      }
      i++;
   }
}
所有喜好 = [[0,"财宝"],[1,"典籍"],[2,"武器"],[3,"名马"],[4,"书画"],[5,"膳食"],[6,"名酒"],[7,"名茶"],[8,"家具"],[9,"文玩"]];
爵位名称 = Array("无","男","子","伯","侯","公","驸","王");
所有俸禄 = Array();
function 删除指定官员的程序(对象){
   var _loc3_ = [];
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      if(_all_rencai[_loc2_].官职 == undefined){
         _loc3_.push(_all_rencai[_loc2_]);
         break;
      }
      _loc2_ += 1;
   }
   _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      if(_all_rencai[_loc2_].id == 对象.id){
         if(_all_rencai[_loc2_].官职 !== undefined){
            if(_loc2_.length > 0)
            {
               _loc3_.官职 = _all_rencai[_loc2_].官职;
               _loc3_.品阶 = _all_rencai[_loc2_].品阶;
               _loc3_.地位 = _all_rencai[_loc2_].地位;
            }
            else
            {
               _loc3_ = 创建新人才();
               _loc3_.官职 = _all_rencai[_loc2_].官职;
               _loc3_.品阶 = _all_rencai[_loc2_].品阶;
               _loc3_.地位 = _all_rencai[_loc2_].地位;
               _all_rencai.push(_loc3_);
            }
         }
         删除跟这个人有关的三方相性(对象);
         if(_all_rencai[_loc2_].爵位 == 6){
            删除驸马数据(_all_rencai[_loc2_]);
         }
         _all_rencai.splice(_loc2_,1);
      }
      _loc2_ += 1;
   }
   var _loc6_ = 0;
   while(_loc6_ < _all_family.length){
      if(_all_family[_loc6_].婚配序号 == 对象.名字){
         _all_family.splice(_loc6_,1);
      }
      _loc6_ = _loc6_ + 1;
    }
}
function 删除驸马数据(官员){
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].性别 == 1 && _all_child[i].婚 == 1 && _all_child[i].婚配 == 官员.名字){
         _all_child[i].婚配 = "";
      }
      i++;
   }
   i = 0;
   while(i < _all_family.length){
      if(_all_family[i].名称 == 官员.名字){
         _all_family.slice(i,1);
      }
      i++;
   }
}
var i = 0;
while(i < 13){
   所有俸禄.push(3300 + 550 * i);
   i++;
}
function 起始相性分配(){
   d = 0;
   while(d < _all_rencai.length){
      var _loc1_ = random(20);
      if(_loc1_ < 3){
         _all_rencai[d].后宫相性 = _all_feizi[0].id;
      }
      else{
         _all_rencai[d].后宫相性 = "";
      }
      d++;
   }
}
function 删除跟这个人有关的三方相性(数据){ 
   d = 0;
   while(d < _all_rencai.length){
      if(_all_rencai[d].朝廷相性 == 数据.id){
         _all_rencai[d].朝廷相性 = "";
         console.log(_all_rencai[d].id + "朝廷相性：" + _all_rencai[d].朝廷相性);
      }
      else if(_all_rencai[d].后宫相性 == 数据.id){
         _all_rencai[d].后宫相性 = "";
         console.log(_all_rencai[d].id + "后宫相性：" + _all_rencai[d].后宫相性);
      }
      else if(_all_rencai[d].皇嗣相性 == 数据.id){
         _all_rencai[d].皇嗣相性 = "";
         console.log(_all_rencai[d].id + "皇嗣相性：" + _all_rencai[d].皇嗣相性);
      }
      d++;
   }
   i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i].朝廷相性 == 数据.id){
         _all_feizi[i].朝廷相性 = "";
         console.log(_all_feizi[i].id + "朝廷相性：" + _all_feizi[i].朝廷相性);
      }
      else if(_all_feizi[i].后宫相性 == 数据.id){
         _all_feizi[i].后宫相性 = "";
         console.log(_all_feizi[i].id + "后宫相性：" + _all_feizi[i].后宫相性);
      }
      else if(_all_feizi[i].皇嗣相性 == 数据.id){
         _all_feizi[i].皇嗣相性 = "";
         console.log(_all_feizi[i].id + "皇嗣相性：" + _all_feizi[i].皇嗣相性);
      }
      i++;
   }

   d = 0;
   while(d < _all_rencai.length){
      if(_all_rencai[d].朝廷相性 == 数据.id){
         _all_rencai[d].朝廷相性 = "";
         console.log(_all_rencai[d].id + "朝廷相性：" + _all_rencai[d].朝廷相性);
      }
      else if(_all_rencai[d].后宫相性 == 数据.id){
         _all_rencai[d].后宫相性 = "";
         console.log(_all_rencai[d].id + "后宫相性：" + _all_rencai[d].后宫相性);
      }
      else if(_all_rencai[d].皇嗣相性 == 数据.id){
         _all_rencai[d].皇嗣相性 = "";
         console.log(_all_rencai[d].id + "皇嗣相性：" + _all_rencai[d].皇嗣相性);
      }
      d++;
   }
   i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i].朝廷相性 == 数据.id){
         _all_feizi[i].朝廷相性 = "";
         console.log(_all_feizi[i].id + "朝廷相性：" + _all_feizi[i].朝廷相性);
      }
      else if(_all_feizi[i].后宫相性 == 数据.id){
         _all_feizi[i].后宫相性 = "";
         console.log(_all_feizi[i].id + "后宫相性：" + _all_feizi[i].后宫相性);
      }
      else if(_all_feizi[i].皇嗣相性 == 数据.id){
         _all_feizi[i].皇嗣相性 = "";
         console.log(_all_feizi[i].id + "皇嗣相性：" + _all_feizi[i].皇嗣相性);
      }
      i++;
   }
}
function 自动补齐三方相性(){
   i = 0;
   while(i < _all_feizi.length){
      主子 = _all_feizi[i];
      var _loc2_ = [];
      k = 0;
      while(k < _all_child.length){
         if(_all_child[k].母亲 == 主子.名字 && _all_child[k].性别 == 0 && _all_child[k].状态 == 0){
            _loc2_.push(_all_child[k]);
         }
         k++;
      }
      if(_loc2_.length > 0){
         主子.皇嗣相性 = _loc2_[0].id;
         主子.党 = _loc2_[0].党;
      }
      i++;
   }
   d = 0;
   while(d < _all_rencai.length){
      if(_all_rencai[d].后宫相性 !== ""){
         i = 0;
         while(i < _all_feizi.length){
            var 主子 = _all_feizi[i];
            if(_all_rencai[d].后宫相性 == 主子.id)
            {
               _all_rencai[d].皇嗣相性 = 主子.皇嗣相性;
               _all_rencai[d].党 = 主子.党;
            }
            i++;
         }
      }
      else if(_all_rencai[d].后宫相性 !== "" && _all_rencai[d].朝廷相性 == ""){
         i = 0;
         while(i < _all_feizi.length){
            var 主子 = _all_feizi[i];
            if(_all_rencai[d].后宫相性 == 主子.id)
            {
               if(_all_rencai[d].id !== 主子.朝廷相性 && 主子.朝廷相性 !== "")
               {
                  _all_rencai[d].朝廷相性 = 主子.朝廷相性;
               }
            }
            i++;
         }
      }
      else if(_all_rencai[d].后宫相性 == "" && _all_rencai[d].朝廷相性 !== ""){
         q = 0;
         while(q < _all_rencai.length){
            var _loc1_ = _all_rencai[q];
            if(_all_rencai[d].朝廷相性 == _loc1_.id)
            {
               _all_rencai[d].后宫相性 = _loc1_.后宫相性;
               _all_rencai[d].皇嗣相性 = _loc1_.皇嗣相性;
               _all_rencai[d].党 = _loc1_.党;
            }
            q++;
         }
      }
      d++;
   }
}
function 改变母亲生母(对象,新名字){
    var _loc2_ = [];
    k = 0;
    while(k < _all_child.length){
        if(_all_child[k].母亲 == 对象.名字){
		    _all_child[k].母亲=新名字;
		}
		else if(_all_child[k].生母 == 对象.名字){
		    _all_child[k].生母=新名字;
		}
        k++;
    }
}
function 随机获取三方相性(){
   i = 0;
   while(i < _all_feizi.length){
      主子 = _all_feizi[i];
      if(主子.后宫相性 == "" && 主子.地位 > 6 && random(8) == 0){
         var _loc3_ = 排序妃子们的数值(random(7));
         if(主子.id !== _loc3_.id){
            更改这个人的后宫相性(主子,_loc3_.id);
         }
      }
      else if(主子.后宫相性 !== "" && 主子.地位 < 4){
         _loc3_ = "";
         更改这个人的后宫相性(主子,_loc3_);
         主子.后宫相性 = "";
      }
      else if(主子.后宫相性 == undefined){
         主子.后宫相性 = "";
      }
      else if(主子.朝廷相性 == undefined){
         主子.朝廷相性 = "";
      }
      i++;
   }
   var _loc1_ = [];
   q = 0;
   while(q < _all_rencai.length){
      if(_all_rencai[q].功勋 > 900){
         _loc1_.push(_all_rencai[q]);
         _loc3_ = "";
         更改这个人的朝廷相性(_all_rencai[q],_loc3_);
         _all_rencai[q].朝廷相性 = "";
         if(_all_rencai[q].后宫相性 == "" && random(4) == 0){
            var _loc2_ = 排序妃子们的数值(7);
            更改这个人的后宫相性(_all_rencai[q],_loc2_.id);
         }
      }
      q++;
   }
   k = 0;
   if(_loc1_.length > 0){
   while(k < _all_rencai.length){
      if(random(8) == 0 && _all_rencai[k].功勋 < 800 && _all_rencai[k].朝廷相性 == ""){
         _loc3_ = _loc1_[random(_loc1_.length)].id;
         更改这个人的朝廷相性(_all_rencai[k],_loc3_);
      }
      k++;
   }
  }
}
function 刷新每个人的三方势力(){
   var _loc2_ = 0;
   while(_loc2_ < _all_feizi.length){
      var _loc1_ = _all_feizi[_loc2_];
      if(_loc1_.id !== undefined){
         刷新后宫势力(_loc1_);
         刷新朝廷势力(_loc1_);
      }
      _loc2_ = _loc2_ + 1;
   }
   d = 0;
   while(d < _all_rencai.length){
      刷新后宫势力(_all_rencai[d]);
      刷新朝廷势力(_all_rencai[d]);
      d++;
   }
   q = 0;
   while(q < _all_child.length){
      刷新朝廷势力(_all_child[q]);
      刷新后宫势力(_all_child[q]);
      q++;
   }
}
function 刷新党派(){
   _all_party = [];
   var _loc2_ = 0;
   while(_loc2_ < _all_child.length){
      if(_all_child[_loc2_].性别 == 0 && _all_child[_loc2_].年龄 >= 16 && _all_child[_loc2_].状态 == 0 && _all_child[_loc2_].后宫势力 > 0 && _all_child[_loc2_].朝廷势力 > 30){
         _all_child[_loc2_].党 = _all_child[_loc2_].id;
         _all_party.push({id:_all_child[_loc2_].id,后宫势力:0,朝廷势力:0,皇嗣势力:0});
      }
      _loc2_ = _loc2_ + 1;
   }
   d = 0;
   while(d < _all_party.length){
      _loc2_ = 0;
      while(_loc2_ < _all_child.length){
         if(_all_child[_loc2_].党 !== undefined && _all_child[_loc2_].党 == _all_party[d].id){
            _all_party[d].皇嗣势力 += 1;
         }
         _loc2_ = _loc2_ + 1;
      }
      _loc2_ = 0;
      while(_loc2_ < _all_feizi.length){
         if(_all_feizi[_loc2_].党 !== undefined && _all_feizi[_loc2_].党 == _all_party[d].id){
            _all_party[d].后宫势力 += 1;
         }
         _loc2_ = _loc2_ + 1;
      }
      _loc2_ = 0;
      while(_loc2_ < _all_rencai.length){
        if(_all_rencai[_loc2_].党 !== undefined && _all_rencai[_loc2_].党 == _all_party[d].id){
            _all_party[d].朝廷势力 += 1;
         }
         _loc2_ = _loc2_ + 1;
      }
      console.log("党id:" + _all_party[d].id + ",皇：" + _all_party[d].皇嗣势力 + "，后：" + _all_party[d].后宫势力 + "，朝：" + _all_party[d].朝廷势力);
      d++;
   }
}
function 刷新后宫势力(对象){
   对象.后宫势力 = 0;
   i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i].后宫相性 == 对象.id){
         对象.后宫势力 += 1;
      }
      else if(_all_feizi[i].朝廷相性 == 对象.id){
         对象.后宫势力 += 1;
      }
      else if(_all_feizi[i].皇嗣相性 == 对象.id){
         对象.后宫势力 += 1;
      }
      i++;
   }
}
function 刷新朝廷势力(对象){
   对象.朝廷势力 = 0;
   i = 0;
   while(i < _all_rencai.length){
      if(_all_rencai[i].朝廷相性 == 对象.id){
         对象.朝廷势力 += 1;
      }
      else if(_all_rencai[i].后宫相性 == 对象.id){
         对象.朝廷势力 += 1;
      }
      else if(_all_rencai[i].皇嗣相性 == 对象.id){
         对象.朝廷势力 += 1;
      }
      i++;
   }
}
function 更改这个人的后宫相性(对象,相性数据){
   对象.后宫相性 = 相性数据;
}
function 更改这个人的朝廷相性(对象,相性数据){
   对象.朝廷相性 = 相性数据;
}
function 更改这个人的皇嗣相性(对象,相性数据){
   对象.皇嗣相性 = 相性数据;
}
function 官员属性更换程序(人物,新名字,临时的家族){
   var _loc4_ = 取出党首程序();
   人物._code = 13000;
   人物.性别 = 0;
   人物.年龄 = random(25) + 25;
   人物.统帅 = random(40) + 50;
   人物.武力 = random(40) + 50;
   人物.智力 = random(40) + 50;
   人物.政治 = random(40) + 50;
   人物.魅力 = random(40) + 50;
   人物.清廉 = random(40) + 50;
   人物.野心 = random(50);
   人物.忠诚 = random(55) + 20;
   人物.经验 = random(99);
   人物.头像 = 39;
   人物.文化 = 8;
   人物.性格 = 性格计算(人物);
   人物.爵位 = 0;
   人物.名字 = 新名字;
   人物.家族 = 临时的家族;
   人物.功勋 = 300 + random(500);
   if(人物.官职 !== undefined &&人物.官职 !=="将军")
   {
      人物.地位 = 人物.地位;
      人物.品阶 = 人物.品阶;
   }
   else{
	  人物.地位 = 计算人才地位(人物.功勋);
	  人物.品阶 = 计算人才品阶(人物.功勋); 
   }
   人物.带兵上限 = 计算带兵上限(人物.功勋);
   人物.后宫相性 = "";
   人物.后宫势力 = 0;
   if(_loc4_ !== undefined)
   {
      人物.朝廷相性 = _loc4_.id;
   }
   else
   {
      人物.朝廷相性 = "";
   }
   人物.朝廷势力 = 0;
   人物.皇嗣相性 = "";
   人物.爱好 = random(所有喜好.length);
   人物.介绍 = "来自中原的人才。";
   人物.关系 = random(5) + 5;
   人物.结婚 = 0;
   var _loc6_ = 0;
   while(_loc6_ < _all_family.length){
      if(_all_family[_loc6_].婚配序号 == 人物.名字){
         _all_family.splice(_loc6_,1);
      }
      _loc6_ = _loc6_ + 1;
    }
}
function 随机增加这个人的朝廷势力(对象, 参数){
   if(参数 == 1){
      _all_rencai[random(_all_rencai.length)].皇嗣相性 = 对象.id;
      _all_rencai[random(_all_rencai.length)].皇嗣相性 = 对象.id;
      _all_rencai[random(_all_rencai.length)].皇嗣相性 = 对象.id;
      _all_rencai[random(_all_rencai.length)].皇嗣相性 = 对象.id;
      _all_rencai[random(_all_rencai.length)].皇嗣相性 = 对象.id;
   }
   else if(参数 == 2){
      if(random(100) < _all_child[i].野心){
         _all_rencai[random(_all_rencai.length)].皇嗣相性 = 对象.id;
         console.log("【" + 对象.id + "】成功说服了1个大臣");
      }
   }
}
function 成年皇子给自己增加势力(){
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].性别 == 0 && _all_child[i].智力 > 50 && _all_child[i].年龄 >= 16 && _all_child[i].状态 == 0){
         if(_all_child[i].功勋 < 15){
            随机增加这个人的朝廷势力(_all_child[i],2);
         }
         else if(_all_child[i].功勋 < 30){
            随机增加这个人的朝廷势力(_all_child[i],2);
            随机增加这个人的朝廷势力(_all_child[i],2);
         }
         else{
            随机增加这个人的朝廷势力(_all_child[i],2);
            随机增加这个人的朝廷势力(_all_child[i],2);
            随机增加这个人的朝廷势力(_all_child[i],2);
         }
      }
      i++;
   }
}
function 通过名字查出后宫人员的程序(名字){
   var _loc2_ = false;
   var _loc3_ = 0;
   while(_loc3_ < _all_feizi.length){
      if(_all_feizi[_loc3_].名字 == 名字){
         _loc2_ = _all_feizi[_loc3_];
      }
      _loc3_ += 1;
   }
   return _loc2_;
}
function 通过称呼查出后宫人员的程序(称呼){
   var _loc2_ = false;
   var _loc3_ = 0;
   while(_loc3_ < _all_feizi.length){
      if(_all_feizi[_loc3_].称呼 == 称呼){
         _loc2_ = _all_feizi[_loc3_];
      }
      _loc3_ += 1;
   }
   return _loc2_;
}
function 取出程序(类型,身份,字段,数值){
	
   if(类型 == 0){
      if(身份 == "妃子"){
         var _loc5_ = 0;
         while(_loc5_ < _all_feizi.length){
            if(_all_feizi[_loc5_][字段] == 数值)
            {
                var i = _all_feizi[_loc5_];
            }
            _loc5_ += 1;
         }
      }
      if(身份 == "大臣"){
         _loc5_ = 0;
         while(_loc5_ < _all_rencai.length){
            if(_all_rencai[_loc5_][字段] == 数值)
            {
              var i = _all_rencai[_loc5_];
            }
            _loc5_ += 1;
         }
      }
      if(身份 == "子女"){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            if(_all_child[_loc5_][字段] == 数值)
            {
              var i = _all_child[_loc5_];
            }
            _loc5_ += 1;
         }
      }
   }
   else if(类型 == 1){
      var _loc7_ = [];
      if(身份 == "子女"){
         _loc5_ = 0;
         while(_loc5_ < _all_child.length){
            _loc7_.push(_all_child[_loc5_]);
            _loc5_ += 1;
         }
      }
      _loc7_.sort(compare('字段'));
      i = _loc7_[数值];
   }
   return i;
}
function 排序妃子们的数值(计算类型){
   var _loc2_ = [];
   i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i].名字 !== undefined){
         _loc2_.push(_all_feizi[i]);
      }
      i++;
   }
   if(计算类型 == 0){
      var _loc3_ = [];
	   _loc2_.sort(compare(["爱","地位"]));
      i = 0;
      while(i < _loc2_.length){
         _loc3_ = _loc2_[_loc2_.length - 1];
         i++;
      }
      return _loc3_;
   }
   if(计算类型 == 1){
      var _loc4_ = [];
	   _loc2_.sort(compare(["地位","爱"]));
      i = 0;
      while(i < _loc2_.length){
         _loc4_ = _loc2_[0];
         i++;
      }
      return _loc4_;
   }
   if(计算类型 == 2){
      var _loc5_ = [];
	  _loc2_.sort(compare(["能力","年龄"]));
      i = 0;
      while(i < _loc2_.length){
         _loc5_ = _loc2_[_loc2_.length - 1];
         i++;
      }
      return _loc5_;
   }
   if(计算类型 == 3){
      var _loc6_ = [];
	  _loc2_.sort(compare(["任性","爱"]));
      i = 0;
      while(i < _loc2_.length){
         _loc6_ = _loc2_[_loc2_.length - 1];
         i++;
      }
      return _loc6_;
   }
   if(计算类型 == 4){
      var _loc7_ = [];
	  _loc2_.sort(compare(["后宫势力","爱"]));
      i = 0;
      while(i < _loc2_.length){
         _loc7_ = _loc2_[_loc2_.length - 1];
         i++;
      }
      return _loc7_;
   }
   if(计算类型 == 5){
      var _loc8_ = [];
	  _loc2_.sort(compare(["朝廷势力","爱"]));
      i = 0;
      while(i < _loc2_.length){
         _loc8_ = _loc2_[_loc2_.length - 1];
         i++;
      }
      return _loc8_;
   }
   if(计算类型 == 6){
      var _loc9_ = [];
	  _loc2_.sort(compare(["生育","爱"]));
      i = 0;
      while(i < _loc2_.length){
         _loc9_ = _loc2_[_loc2_.length - 1];
         i++;
      }
      return _loc9_;
   }
   if(计算类型 == 7){
      var _loc10_ = _loc2_[random(_loc2_.length)];
      return _loc10_;
   }
}
function 看一下宫里有多少个妃子(){
   var _loc2_ = [];
   var _loc1_ = 0;
   while(_loc1_ < _all_feizi.length){
      if(_all_feizi[_loc1_].省亲 == undefined || _all_feizi[_loc1_].省亲 == 0){
         _loc2_.push(_all_feizi[_loc1_]);
      }
      _loc1_ += 1;
   }
   return _loc2_;
}
function 看一下有多少活着的孩子(){
   var _loc2_ = [];
   var _loc1_ = 0;
   while(_loc1_ < _all_child.length){
      if(_all_child[_loc1_].状态 == 0){
         _loc2_.push(_all_child[_loc1_]);
      }
      _loc1_ += 1;
   }
   return _loc2_;
}
function 看一下这个宫住了多少个妃子(宫名){
   var _loc2_ = [];
   var _loc3_ = 0;
   while(_loc3_ < _all_feizi.length){
      if(_all_feizi[_loc3_].宫殿 == 宫名 && _all_feizi[_loc3_].名字 !== undefined){
         _loc2_.push(_all_feizi[_loc3_]);
      }
      _loc3_ += 1;
   }
   return _loc2_;
}
function 对话打字效果(文本,按钮,路径){
	clearInterval(ID);
	var contentArr = 文本.split("");
	var content = "";
	var index = 0;
	 ID = setInterval(function(){
		content += contentArr[index];
		if(路径 == undefined){id('剧情文本').innerText = content;}else{路径.innerText = content;};
		index ++;
		if(index === contentArr.length){
		clearInterval(ID);
		}
	},60);
	if(按钮 !== undefined){
		id('剧情按钮').style.display = 'block';
		id('剧情an0').innerText = 按钮[0];id('剧情an1').innerText = 按钮[1];
		if(按钮.length >3){id('剧情an2').style.display = 'block';id('剧情an2').innerText = 按钮[2];id('剧情an3').style.display = 'block';id('剧情an3').innerText = 按钮[3];}
		else if(按钮.length >2 && 按钮.length <4){id('剧情an2').style.display = 'block';id('剧情an2').innerText = 按钮[2];}
		else{id('剧情an2').style.display = 'none';id('剧情an3').style.display = 'none';}
	}
	else{id('剧情按钮').style.display = 'none';}
}
function 限制主要属性(){
   if(属性.体力 > 属性.体力上限){属性.体力 = 属性.体力上限;}
   if(属性.体力上限 > 9999){属性.体力上限 = 9999;}
   if(属性.健康 > 100){属性.健康 = 100;}
   if(属性.快乐 > 100){属性.快乐 = 100;}
   if(属性.道德 > 1000){属性.道德 = 1000;}
   if(属性.暴戾 > 1000){属性.暴戾 = 1000;}
   if(属性.暴戾 < 0){属性.暴戾 = 0;}
   if(属性.魅力 > 1000){属性.魅力 = 1000;}
   if(属性.统帅 > 1000){属性.统帅 = 1000;}
   if(属性.统帅 == NaN){属性.统帅 = 200;}
   if(属性.武力 > 1000){属性.武力 = 1000;}
   if(属性.政治 > 1000){属性.政治 = 1000;}
   if(属性.智力 > 1000){属性.智力 = 1000;}
   if(属性.年龄 > 100){属性.年龄 = 100;}
   if(属性.才艺 > 1000){属性.才艺 = 1000;}
   if(属性.威望 > 1000){属性.威望 = 1000;}
   if(国家.金钱 > 10000000000){国家.金钱 = 10000000000;}
   if(国家.粮食 > 50000000000){国家.粮食 = 50000000000;}
}
function 开启血滴子(参数){
    var _loc3_ = "";
    i = 0;
    while(i < _all_xuedizi.length){
        if(_all_xuedizi[i].id == 参数){
            _loc3_ = _all_xuedizi[i];
        }
        i++;
   }
   return _loc3_;
}
function 导出介绍(对象){
   var _loc3_ = "";
   if(对象._code >= 1000 && 对象._code <= 1999){
      i = 0;
      while(i < 所有历史名人.length){
         if(所有历史名人[i]._code == 对象._code){
            _loc3_ = 所有历史名人[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 2210 && 对象._code <= 2248){
      i = 0;
      while(i < 丫环名人.length){
         if(丫环名人[i]._code == 对象._code){
            _loc3_ = 丫环名人[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 2000 && 对象._code <= 2209 || 对象._code >= 2249 && 对象._code <= 2999){
      i = 0;
      while(i < 后宫名人.length){
         if(后宫名人[i]._code == 对象._code){
            _loc3_ = 后宫名人[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 3000 && 对象._code <= 3999){
      i = 0;
      while(i < 所有戏子.length){
         if(所有戏子[i]._code == 对象._code){
            _loc3_ = 所有戏子[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 4000 && 对象._code <= 4999){
      i = 0;
      while(i < 所有敌将.length){
         if(所有敌将[i]._code == 对象._code){
            _loc3_ = 所有敌将[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 5000 && 对象._code <= 5999){
      i = 0;
      while(i < 外域美人.length){
         if(外域美人[i]._code == 对象._code){
            _loc3_ = 外域美人[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 6000 && 对象._code <= 6999){
      i = 0;
      while(i < 所有历史名人.length){
         if(所有历史名人[i]._code == 对象._code){
            _loc3_ = 所有历史名人[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 7000 && 对象._code <= 7999){
      i = 0;
      while(i < 剧情人物.length){
         if(剧情人物[i]._code == 对象._code){
            _loc3_ = 剧情人物[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 10000 && 对象._code <= 10999){
      i = 0;
      while(i < _all_xuedizi.length){
         if(_all_xuedizi[i]._code == 对象._code){
            _loc3_ = _all_xuedizi[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 11000 && 对象._code <= 11999){
      i = 0;
      while(i < 所有隐士.length){
         if(所有隐士[i]._code == 对象._code){
            _loc3_ = 所有隐士[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 12000 && 对象._code <= 12999){
      i = 0;
      while(i < _all_doctor.length){
         if(_all_doctor[i]._code == 对象._code){
            _loc3_ = _all_doctor[i].介绍;
         }
         i++;
      }
   }
   else if(对象._code >= 14000 && 对象._code <= 14999){
      i = 0;
      while(i < _all_mingji.length){
         if(_all_mingji[i]._code == 对象._code){
            _loc3_ = _all_mingji[i].介绍;
         }
         i++;
      }
   }
   if(_loc3_ == ""){_loc3_ = 对象.介绍}
   if(对象.介绍 !== undefined){_loc3_ = 对象.介绍}
   return _loc3_;
}
function 外国后宫称呼计算(取数据,地位){
   if(取数据 == 0){
      if(地位 == undefined){
         _loc2_ = 3;
         _loc3_ = 高丽后宫位分[_loc2_][1];
      }
      else{
         _loc3_ = 高丽后宫位分[地位][1];
      }
   }
   else if(取数据 == 1){
      if(地位 == undefined){
         _loc2_ = 3 + random(3);
         _loc3_ = 日本后宫位分[_loc2_][1];
      }
      else{
         _loc3_ = 日本后宫位分[地位][1];
      }
   }
   else if(取数据 == 6){
      if(地位 == undefined){
         _loc2_ = 3 + random(2);
         _loc3_ = 吐蕃后宫位分[_loc2_][1];
      }
      else{
         _loc3_ = 吐蕃后宫位分[地位][1];
      }
   }
   else if(取数据 == 5||取数据 == 15||取数据 == 16||取数据 == 17||取数据 == 20||取数据 == 21||取数据 == 22){
      if(地位 == undefined){
         _loc2_ = 3 + random(6);
         _loc3_ = 皇帝后宫位分[_loc2_][1];
      }
      else{
         _loc3_ = 皇帝后宫位分[地位][1];
      }
   }
   else if(取数据 == 3||取数据 == 7||取数据 == 11){
      if(地位 == undefined){
         _loc2_ = 3;
         _loc3_ = 西方皇帝后宫位分[_loc2_][1];
      }
      else{
         _loc3_ = 西方皇帝后宫位分[地位][1];
      }
   }
   else if(取数据 == 9||取数据 == 12||取数据 == 13||取数据 == 14){
      if(地位 == undefined){
         _loc2_ = 3;
         _loc3_ = 国王后宫位分[_loc2_][1];
      }
      else{
         _loc3_ = 国王后宫位分[地位][1];
      }
   }
   else if(地位 == undefined){
      _loc2_ = 3;
      _loc3_ = 可汗后宫位分[_loc2_][1];
   }
   else{
      _loc3_ = 可汗后宫位分[地位][1];
   }
   _loc4_ = [_loc3_,_loc2_];
   return _loc4_;
}
function 外国皇子称呼计算(取数据, 地位){
   if(取数据 == 0){
      if(地位 == 1){
         _loc3_ = "正胤";
      }
      else{
         _loc3_ = "皇子";
      }
   }
   else if(取数据 == 1){
      if(地位 == 1){
         _loc3_ = "太子";
      }
      else{
         _loc3_ = "亲王";
      }
   }
   else if(取数据 == 7||取数据 == 11||取数据 == 12||取数据 == 13){
      if(地位 == 1){
         _loc3_ = "皇储";
      }
      else{
         _loc3_ = "皇子";
      }
   }
   else if(地位 == 1){
      _loc3_ = "太子";
   }
   else{
      _loc3_ = "皇子";
   }
   return _loc3_;
}
function 生成外国女子(取数据,姓氏){
   _loc6_ = 外国女子名字(取数据.id,姓氏);
   _loc7_ = _loc6_[1];
   _loc8_ = _loc6_[0];
   _loc9_ = 取数据.id;
   _loc14_ = 60 + random(40);
   _loc15_ = {名称:_loc7_,家族:_loc8_,文化:_loc9_,魅力:_loc14_};
   _loc15_.统帅 = random(40);
   _loc15_.武力 = random(40);
   _loc15_.智力 = random(99);
   _loc15_.政治 = random(99);
   _loc15_.清廉 = random(99);
   _loc15_.野心 = random(99);_loc15_.性别 = 1;
   _loc15_.性格 =性格计算(_loc15_);
   return _loc15_;
}
function 生成外国男子(取数据,姓氏){
   _loc6_ = 外国男子名字(取数据.id,姓氏);
   _loc7_ = _loc6_[1];
   _loc8_ = _loc6_[0];
   _loc9_ = 取数据.id;
   _loc14_ = 60 + random(40);
   _loc15_ = {名称:_loc7_,家族:_loc8_,文化:_loc9_,魅力:_loc14_};
   _loc15_.统帅 = random(40);
   _loc15_.武力 = 20+random(40);
   _loc15_.智力 = random(99);
   _loc15_.政治 = random(99);
   _loc15_.清廉 = random(99);
   _loc15_.野心 = random(99);_loc15_.性别 = 1;
   _loc15_.性格 =性格计算(_loc15_);
   return _loc15_;
}
function 外国女子名字(取数据, 姓氏){
   if(姓氏 !== undefined){
      _loc4_ = 姓氏;
   }
   if(姓氏 == 0){
      _loc4_ = "";
   }
   if(取数据 == 0){
      if(姓氏 == undefined){
         _loc4_ = 姓0[random(姓0.length)];
      }
      临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)];
   }
   if(取数据 == 1){
      if(姓氏 == undefined){
         _loc4_ = 姓1[random(姓1.length)];
      }
      if(random(6) >= 4){
         临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)] + "子";
         _loc5_ = 女名[random(女名.length)] + 女名[random(女名.length)] + "子";
      }
      else if(random(6) == 3){
         临时名字 = _loc4_ + 女名1[random(女名1.length)];
         _loc5_ = 女名1[random(女名1.length)];
      }
      else if(random(6) == 2){
         临时名字 = _loc4_ + 女名[random(女名.length)] + "子";
         _loc5_ = 女名[random(女名.length)] + "子";
      }
      else{
         临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)];
         _loc5_ = 女名[random(女名.length)] + 女名[random(女名.length)];
      }
   }
   if(取数据 == 2){
      if(姓氏 == undefined){
         _loc4_ = 姓2[random(姓2.length)];
      }
      if(random(5) <= 1){
         临时名字 = _loc4_ + 女名[random(女名.length)];
      }
      else{
         临时名字 = _loc4_ + 女名[random(女名.length)] + 女名2[random(女名2.length)];
      }
   }
   if(取数据 == 3){
      if(姓氏 == undefined){
         _loc4_ = 姓3[random(姓3.length)];
      }
      if(random(5) <= 2){
         临时名字 = 女名3[random(女名3.length)] + 女名3[random(女名3.length)] + 女名3[random(女名3.length)];
      }
      else if(random(5) >= 3){
         临时名字 = 女名3[random(女名3.length)] + 女名3[random(女名3.length)] + 女名3[random(女名3.length)] + 女名3[random(女名3.length)];
      }
      else{
         临时名字 = 女名3[random(女名3.length)] + 女名3[random(女名3.length)];
      }
   }
   if(取数据 == 4){
      if(姓氏 == undefined){
         _loc4_ = 姓4[random(姓4.length)];
      }
      if(random(6) == 0){
         临时名字 = _loc4_ + 女名4[random(女名4.length)] + 女名4[random(女名4.length)] + "奴";
      }
      else if(random(6) >= 4){
         临时名字 = _loc4_ + 女名4[random(女名4.length)] + "哥";
      }
      else{
         临时名字 = _loc4_ + 女名4[random(女名4.length)] + 女名4[random(女名4.length)];
      }
   }
   if(取数据 == 5){
      if(姓氏 == undefined){
         _loc4_ = 姓5[random(姓5.length)];
      }
      临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)];
   }
   if(取数据 == 6){
      _loc4_ = undefined;
      if(random(6) >= 4){
         临时名字 = 女名6[random(女名6.length)] + 女名6[random(女名6.length)] + "卓玛";
      }
      else if(random(6) <= 1){
         临时名字 = 女名6[random(女名6.length)] + 女名6[random(女名6.length)] + "拉姆";
      }
      else{
         临时名字 = 女名6[random(女名6.length)] + 女名6[random(女名6.length)];
      }
   }
   if(取数据 == 7){
      _loc4_ = 姓7[random(姓7.length)];
      临时名字 = 女名7[random(女名7.length)];
   }
   if(取数据 == 8||取数据 == 9||取数据 == 17||取数据 == 20||取数据 == 21||取数据 == 22){
      if(姓氏 == undefined){
         _loc4_ = 姓[random(姓.length)];
      }
      临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)];
   }
   if(取数据 == 10){
      if(姓氏 == undefined){
         _loc4_ = 姓10[random(姓10.length)];
      }
      if(random(6) >= 4){
         临时名字 = 女名10[random(女名10.length)] + 女名10[random(女名10.length)] + "图雅";
      }
      else if(random(6) <= 2){
         临时名字 = 女名10[random(女名10.length)] + 女名10[random(女名10.length)] + "托娅";
      }
      else if(random(6) == 1||random(6) == 2){
         临时名字 = 女名10[random(女名10.length)] + 女名10[random(女名10.length)] + "琪琪格";
      }
      else{
         临时名字 = 女名10[random(女名10.length)] + 女名10[random(女名10.length)];
      }
   }
   if(取数据 == 11){
      if(姓氏 == undefined){
         _loc4_ = 姓11[random(姓11.length)];
      }
      临时名字 = 女名11[random(女名11.length)];
   }
   if(取数据 == 12){
      _loc4_ = undefined;
      临时名字 = 女名12[random(女名12.length)];
   }
   if(取数据 == 13){
      if(姓氏 == undefined){
         _loc4_ = 姓13[random(姓13.length)];
      }
      临时名字 = 女名13[random(女名13.length)];
   }
   if(取数据 == 14){
      if(姓氏 == undefined){
         _loc4_ = undefined;
      }
      临时名字 = 女名[random(女名.length)] + 女名[random(女名.length)];
   }
   if(取数据 == 15){
      if(姓氏 == undefined){
         _loc4_ = 姓15[random(姓15.length)];
      }
      临时名字 = _loc4_ + 女名15[random(女名15.length)] + 女名[random(女名.length)];
   }
   if(取数据 == 16){
      if(姓氏 == undefined){
         _loc4_ = 姓16[random(姓16.length)];
      }
      临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)];
   }
   if(取数据 == 17){
      if(姓氏 == undefined){
         _loc4_ = 姓16[random(姓16.length)];
      }
      临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)];
   }
   if(取数据 == 18){
      if(姓氏 == undefined){
         _loc4_ = 姓18[random(姓18.length)];
      }
      临时名字 = _loc4_ + 女名[random(女名.length)] + 女名[random(女名.length)];
   }
   if(取数据 == 19){
      if(姓氏 == undefined){
         _loc4_ = 姓19[random(姓19.length)];
      }
      临时名字 = _loc4_ + 女名[random(女名.length)] + 女名2[random(女名2.length)];
   }
   姓名 = [_loc4_,临时名字];
   return 姓名;
}
function 外国男子名字(取数据,姓氏){
   if(姓氏 !== undefined){
      _loc4_ = 姓氏;
   }
   if(姓氏 == 0){
      _loc4_ = "";
   }
   if(取数据 == 0){
      if(姓氏 == undefined){
         _loc4_ = 姓0[random(姓0.length)];
      }
      临时名字 = _loc4_ + 男名[random(男名.length)] + 男名[random(男名.length)];
   }
   if(取数据 == 1){
      if(姓氏 == undefined){
         _loc4_ = 姓1[random(姓1.length)];
      }
      if(random(6) >= 4){
         临时名字 = _loc4_ + 男名[random(男名.length)] + 男名[random(男名.length)] + "郎";
      }
      else if(random(6) == 3){
         临时名字 = _loc4_ + 男名1[random(男名1.length)];
      }
      else if(random(6) == 2){
         临时名字 = _loc4_ + 男名1[random(男名1.length)] + "卫门";
      }
      else{
         临时名字 = _loc4_ + 男名[random(男名.length)] + 男名[random(男名.length)];
      }
   }
   if(取数据 == 2){
      if(姓氏 == undefined){
         _loc4_ = 姓2[random(姓2.length)];
      }
      if(random(5) <= 3){
         临时名字 = _loc4_ + 男名[random(男名.length)];
      }
      else{
         临时名字 = _loc4_ + 男名2[random(男名2.length)] + 男名2[random(男名2.length)];
      }
   }
   if(取数据 == 3){
      if(姓氏 == undefined){
         _loc4_ = 姓3[random(姓3.length)];
      }
      if(random(5) <= 2){
         临时名字 = 男名3[random(男名3.length)] + 男名3[random(男名3.length)] + 男名3[random(男名3.length)];
      }
      else if(random(5) >= 3){
         临时名字 = 男名3[random(男名3.length)] + 男名3[random(男名3.length)] + 男名3[random(男名3.length)] + 男名3[random(男名3.length)];
      }
      else{
         临时名字 = 男名3[random(男名3.length)] + 男名3[random(男名3.length)];
      }
   }
   if(取数据 == 4){
      if(姓氏 == undefined){
         _loc4_ = 姓4[random(姓4.length)];
      }
      if(random(6) == 0){
         临时名字 = _loc4_ + 男名4[random(男名4.length)] + 男名4[random(男名4.length)] + 男名4[random(男名4.length)];
      }
      else if(random(6) >= 4){
         临时名字 = _loc4_ + "阿" + 男名4[random(男名4.length)] + 男名4[random(男名4.length)];
      }
      else{
         临时名字 = _loc4_ + 男名4[random(男名4.length)] + 男名4[random(男名4.length)];
      }
   }
   if(取数据 == 5){
      if(姓氏 == undefined){
         _loc4_ = 姓5[random(姓5.length)];
      }
      临时名字 = _loc4_ + 男名[random(男名.length)] + 男名[random(男名.length)];
   }
   if(取数据 == 6){
      _loc4_ = undefined;
      if(random(6) >= 4){
         临时名字 = 男名6[random(男名6.length)] + 男名6[random(男名6.length)] + 男名6[random(男名6.length)] + "赞";
      }
      else if(random(6) <= 1){
         临时名字 = 男名6[random(男名6.length)] + 男名6[random(男名6.length)] + "单增";
      }
      else{
         临时名字 = 男名6[random(男名6.length)] + 男名6[random(男名6.length)];
      }
   }
   if(取数据 == 7){
      if(姓氏 == undefined){
         _loc4_ = 姓7[random(姓7.length)];
      }
      临时名字 = 男名7[random(男名7.length)];
   }
   if(取数据 == 8||取数据 == 9||取数据 == 17||取数据 == 20||取数据 == 21||取数据 == 22){
      if(姓氏 == undefined){
         _loc4_ = 姓[random(姓.length)];
      }
      临时名字 = _loc4_ + 男名[random(男名.length)] + 男名[random(男名.length)];
   }
   if(取数据 == 10){
      if(姓氏 == undefined){
         _loc4_ = 姓10[random(姓10.length)];
      }
      if(random(6) >= 4){
         临时名字 = 男名10[random(男名10.length)] + 男名10[random(男名10.length)] + "巴图";
      }
      else if(random(6) <= 2){
         临时名字 = 男名10[random(男名10.length)] + 男名10[random(男名10.length)] + "木儿";
      }
      else if(random(6) == 1||random(6) == 2){
         临时名字 = "阿" + 男名10[random(男名10.length)] + 男名10[random(男名10.length)];
      }
      else{
         临时名字 = 男名10[random(男名10.length)] + 男名10[random(男名10.length)];
      }
   }
   if(取数据 == 11){
      if(姓氏 == undefined){
         _loc4_ = 姓11[random(姓11.length)];
      }
      临时名字 = 男名11[random(男名11.length)];
   }
   if(取数据 == 12){
      _loc4_ = undefined;
      临时名字 = 男名12[random(男名12.length)];
   }
   if(取数据 == 13){
      if(姓氏 == undefined){
         _loc4_ = 姓13[random(姓13.length)];
      }
      临时名字 = 男名13[random(男名13.length)];
   }
   if(取数据 == 14){
      姓氏 == undefined;
      临时名字 = 男名14[random(男名14.length)] + 男名[random(男名.length)];
   }
   if(取数据 == 15){
      if(姓氏 == undefined){
         _loc4_ = 姓15[random(姓15.length)];
      }
      临时名字 = _loc4_ + 男名15[random(男名15.length)] + 男名[random(男名.length)];
   }
   if(取数据 == 16){
      if(姓氏 == undefined){
         _loc4_ = 姓16[random(姓16.length)];
      }
      临时名字 = _loc4_ + 男名16[random(男名16.length)] + 男名[random(男名.length)];
   }
   if(取数据 == 18){
      if(姓氏 == undefined){
         _loc4_ = 姓18[random(姓18.length)];
      }
      临时名字 = _loc4_ + 男名[random(男名.length)] + 男名[random(男名.length)];
   }
   if(取数据 == 19){
      if(姓氏 == undefined){
         _loc4_ = 姓19[random(姓19.length)];
      }
      临时名字 = _loc4_ + 男名[random(男名.length)] + 男名19[random(男名19.length)];
   }
   _loc5_ = [_loc4_,临时名字];
   return _loc5_;
}
function 计算外域头像(取数据){
   var _loc2_ = 取数据.文化 * 10 + random(10) + 1000;
   if(取数据.性别 == 1||取数据.儿女 == 1){
      if(取数据.文化 == 8||取数据.文化 == 20||取数据.文化 == 21||取数据.文化 == 22){
         _loc2_ = 8 * 10 + random(10) + 1000 + random(9) * 1000;
      }
      else if(取数据.文化 == 18){
         _loc2_ += random(5) * 1000;
      }
      else{
         _loc2_ += random(2) * 1000;
      }
   }
   else if(取数据.性别 == 0||取数据.儿女 == 0){
      if(取数据.文化 == 8||取数据.文化 == 20||取数据.文化 == 21||取数据.文化 == 22){
         _loc2_ = 8 * 10 + random(10) + 1000 + random(9) * 1000;
      }
   }
   return _loc2_;
}
高丽后宫位分 = [[0,"王后"],[1,"王太女"],[2,"公主"],[3,"夫人"]];
日本后宫位分 = [[0,"中宫"],[1,"皇太女"],[2,"内亲王"],[3,"女御"],[4,"采女"],[5,"更衣"]];
可汗后宫位分 = [[0,"可敦"],[1,"皇太女"],[2,"公主"],[3,"可敦"]];
国王后宫位分 = [[0,"王后"],[1,"皇储"],[2,"公主"],[3,"妃"]];
皇帝后宫位分 = [[0,"皇后"],[1,"皇太女"],[2,"公主"],[3,"贵妃"],[4,"妃"],[5,"昭仪"],[6,"昭容"],[7,"婕妤"],[8,"才人"]];
西方皇帝后宫位分 = [[0,"皇后"],[1,"皇储"],[2,"公主"],[3,"妃"]];
吐蕃后宫位分 = [[0,"赞蒙"],[1,"王太女"],[2,"公主"],[3,"妃"],[4,"末蒙"]];
function youyi(){
	if(id("hgdt").style.left=="0px"){
		var _loc1_=0;
		var _loc2_=0;
		while(_loc1_<=334){
			setTimeout(function(){
				id("hgdt").style.left=-_loc2_+"px";
				_loc2_+=1;
			}, _loc1_);
			_loc1_+=1;
		}
		setTimeout(function(){
			id("皇宫左").style.left="334px";
			id("皇宫右").style.left="1054px";
		}, 335);
	}
}
function zuoyi(){
    if(id("hgdt").style.left=="-334px"){
	var _loc1_=0;
	var _loc2_=334;
	    while(_loc1_<=334){
			setTimeout(function(){
				id("hgdt").style.left=-_loc2_+"px";
				_loc2_-=1;
			}, _loc1_);
			_loc1_+=1;
		}
	setTimeout(function(){
		id("皇宫左").style.left="0px";
		id("皇宫右").style.left="720px";
		id("皇宫上").style.left="0px";
		id("皇宫下").style.left="0px";
	}, 335);
   }
}
function shangyi(){
	if(id("hgdt").style.top=="-222px"){
		var _loc1_=0;
		var _loc2_=222;
		while(_loc1_<=222){
			setTimeout(function(){
				id("hgdt").style.top=-_loc2_+"px";
				_loc2_-=1;
			}, _loc1_);
			_loc1_+=1;
		}
		setTimeout(function(){
			id("皇宫上").style.top="-222px";
			id("皇宫下").style.top="420px";
			id("皇宫左").style.top="0px";
			id("皇宫右").style.top="0px";
		}, 223);
		
	}
}
function xiayi(){
	if(id("hgdt").style.top=="0px"){
		var _loc1_=0;
		var _loc2_=0;
		while(_loc1_<=222){
			setTimeout(function(){
				id("hgdt").style.top=-_loc2_+"px";
				_loc2_+=1;
			}, _loc1_);
			_loc1_+=1;
		}
		setTimeout(function(){
			id("皇宫上").style.top="222px";
			id("皇宫下").style.top="-642px";
			id("皇宫左").style.top="220px";
			id("皇宫右").style.top="220px";
		}, 223);
	}
}