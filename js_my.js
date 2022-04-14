function 每月后宫数据处理(){
   远嫁公主寿命计算();
   冷宫妃子计算();
   掖庭妃子计算();
   子女属性成长计算();
   子女生病情况计算();
   计算皇孙出生();
   计算剧情人物();
   计算皇子纳妾();
   计算公主面首();
   计算子女寿终正寝();
   if(random(3)>0){计算外国皇室出生();}
   大臣家眷();
   var _loc7_ = 0;
   while(_loc7_ < _all_feizi.length){
      var _loc1_ = _all_feizi[_loc7_];
	  计算后宫记事();
      _loc1_.护 = 0;
      if(_loc1_.名字 !== undefined){
         var _loc3_ = 0;
         while(_loc3_ < _all_taijian.length){
            if(_all_taijian[_loc3_].主子 == _loc1_.id){
               _loc1_.护 += _all_taijian[_loc3_].能力;
            }
            _loc3_ = _loc3_ + 1;
         }
         var _loc4_ = 0;
         while(_loc4_ < _all_gongnv.length){
            if(_all_gongnv[_loc4_].主子 == _loc1_.id){
               _loc1_.护 += _all_gongnv[_loc4_].能力;
            }
            _loc4_ = _loc4_ + 1;
         }
         if(_loc1_.爱 < 0 && _loc1_._code !== 7004){
            var _loc6_ = [];
            var _loc2_ = 0;
            while(_loc2_ < _all_child.length){
               if(_all_child[_loc2_].母亲 == _loc1_.名字){
                  _loc6_.push(_all_child[_loc2_]);
               }
               _loc2_ = _loc2_ + 1;
            }
            console.log(_loc1_.名字 + "有孩子" + _loc1_.生育 + "个，其中有：" + _loc6_[0]);
            if(_loc1_.生育 > 0 || _loc1_.孕 > 0){
               _loc1_.爱 -= 3;
            }
            else{
               var _loc11_ = _loc1_.名字;
               var _loc10_ = "太医来报:\n后宫" + 颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc") + "娘娘" + 颜色代码(_loc11_,"ff0000") + "自缢身亡。\n请皇上节哀。";
               太监报告所有事件.push([_loc10_,"快乐",-2,20,1]);
               后宫记事记档(颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc") + "娘娘" + 颜色代码(_loc11_,"ff0000") + "自缢身亡。",_loc1_.id);
			   删除跟这个人有关的三方相性(_loc1_);
               删除这个妃子的值(_loc1_);
            }
         }
         _loc1_.爱 = _loc1_.爱 - 1;
         if(_loc1_.孕 == 10 && _loc1_._code !== 7004){
			if(_loc1_.位分 !== "秀女"){
				_loc11_ = _loc1_.名字;
				_loc10_ = "恭喜皇上。\n太医刚刚来报:" + _all_palace[_loc1_.宫殿].名称 +颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc") + "娘娘"+ 颜色代码(_loc11_,"ff0000") +"已怀有身孕，现在正在静养。还望皇上常去探望。";
				太监报告所有事件.push([_loc10_,"快乐",2,0,2]);
				后宫记事记档(颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc") + "娘娘" + 颜色代码(_loc11_,"ff0000") + "经太医诊断，怀有身孕。",_loc1_.id);
			}else{
				_loc11_ = _loc1_.名字;
				_loc10_ = "恭喜皇上。\n太医刚刚来报:储秀阁的秀女"+ 颜色代码(_loc11_,"ff0000") + "娘娘" + "已怀有身孕，现在正在静养。请皇上册封名号。";
				后宫记事记档("秀女" + 颜色代码(_loc11_,"ff0000") + "经太医诊断，怀有身孕。",_loc1_.id);
				太监报告所有事件.push([_loc10_,"快乐",2,0,2,5,_loc1_]); 
			}
            
         }
         if(_loc1_.孕 !== 0){
            _loc1_.孕 = _loc1_.孕 - 1;
            if(_loc1_.孕 == 1){
               _loc1_.孕 = 0;
               _loc1_.病 = 0;
               生产孩子程序(_loc1_);
            }
         }
         if(_loc1_.省亲 !== undefined && _loc1_.省亲 > 0){
            _loc1_.省亲 = _loc1_.省亲 - 1;
            if(_loc1_.省亲 == 1){
               _loc1_.省亲 = 0;
               var _loc9_ = 来一个宝贝();
               _loc10_ = "皇上。\n" + _all_palace[_loc1_.宫殿].名称 + 颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc") + "娘娘" + _loc1_.名字 + "省亲回来了，貌似还带了点礼物送给皇上。\n得到珍宝【" + _loc9_ + "】";
			   后宫记事记档(_all_palace[_loc1_.宫殿].名称 + 颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc") + "娘娘" + _loc1_.名字 + "省亲回来，带回珍宝【" + _loc9_ + "】。",_loc1_.id);
               太监报告所有事件.push([_loc10_,"快乐",0,0,4]);
            }
         }
               if(_loc1_.护 == NaN){
                  _loc1_.护 = 0;
               }
               if(_loc1_.年龄 == undefined || _loc1_.年龄 == NaN){
                  _loc1_.年龄 = 16;
               }
               var _loc8_ = random(Math.round(1 / _loc1_.年龄 * 0.5 * 1000) + _loc1_.护);
               if(_loc8_ == 0&& _loc1_.位分 !== "秀女" && _loc1_.仙 !== 2 && _loc1_._code !== 7004 && (_loc1_.省亲 == undefined || _loc1_.省亲 == 0)){
                  _loc5_ = _all_doctor[_all_palace[_loc1_.宫殿].太医];
                  if(_loc5_ == undefined || _loc5_.预防 == undefined || random(_loc5_.预防) == 0){
                     _loc1_.病 = 4 + random(4);
                     if(_loc1_.地位 < 7){
                        _loc10_ = "启禀皇上，" + _all_palace[_loc1_.宫殿].名称 + "刚刚传来消息，称" + 颜色代码(_loc1_.封号 + _loc1_.位分,"ff0000") + "娘娘生病了，还望皇上得空去探望。";
                        后宫记事记档(_all_palace[_loc1_.宫殿].名称+"传来消息，称" +颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc")+颜色代码(_loc1_.名字,"ff0000") + "娘娘生病了。",_loc1_.id);
						太监报告所有事件.push([_loc10_,"快乐",-5,0,5]);
                     }
                  }
               }
			   else if(_loc8_ == 0 && _loc1_.仙 !== 2 && _loc1_.病 !== 0 ){
				    if(_loc1_.位分 !== "秀女"){_loc5_ = _all_doctor[_all_palace[_loc1_.宫殿].太医];}
	                else{_loc5_ = undefined;_loc5_.保胎 = undefined;}
					if(_loc5_ == undefined || _loc5_.保胎 == undefined || random(_loc5_.保胎) == 0){
					    _loc1_.孕 = 0;
					    _loc1_.仙 = 0;
					    _loc1_.病 = 3;
					    _loc10_ = 颜色代码(_loc1_.封号 + _loc1_.位分,"ff0000") + "娘娘大病一场，孩子小产了。";
					    太监报告所有事件.push([_loc10_,"快乐",-5,18,5]);
						后宫记事记档(颜色代码(_loc1_.封号 + _loc1_.位分,"ff0000") + "娘娘大病一场，孩子小产了。",_loc1_.id);
					    _loc1_.爱 -= 10;
					}
					else{
					    _loc1_.病 = 0;
					    _loc10_ = 颜色代码(_loc1_.封号 + _loc1_.位分,"ff0000") + "娘娘孕中突发疾病，多亏了太医" + _loc5_.名称 + "医术高明，孩子暂时算是保住了。";
					    后宫记事记档(颜色代码(_loc1_.封号 + _loc1_.位分,"ff0000") + "娘娘孕中突发疾病，多亏了太医"+ _loc5_.名称 + "医术高明，孩子暂时算是保住了。",_loc1_.id);
						太监报告所有事件.push([_loc10_,"快乐",1,18,3]);
					}			   
			    }
                if(_loc1_.病 == 1 && _loc1_.位分 !== "秀女"){
                    _loc1_.病 = 0;
                    if(_loc1_.年龄 > 40 && random(_loc1_.年龄) > 20){
                        _loc1_.病 = 99999;
                        if(_loc1_.地位 < 7){
                        _loc10_ = "启禀皇上，" + _all_palace[_loc1_.宫殿].名称 + "" + 颜色代码(_loc1_.封号 + _loc1_.位分,"ff0000") + "娘娘久病不愈，恐怕命数不多了，皇上得空去看看吧。";
                        后宫记事记档(颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc")+ 颜色代码(_loc1_.名字,"ff0000")+ "娘娘久病不愈，恐怕命数不多了。",_loc1_.id);
						太监报告所有事件.push([_loc10_,"快乐",-5,0,5]);
                     }
                  }
               }
               if(_loc1_.病 > 100){
                  if(random(_loc1_.年龄) > 30){
                     _loc10_ = "太医来报:\n后宫" + 颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc") + "娘娘" + 颜色代码(_loc1_.名字,"ff0000") + "气绝身亡。\n请皇上节哀。";
					 后宫记事记档(颜色代码(_loc1_.封号 + _loc1_.位分,"5f5ffc")+ 颜色代码(_loc1_.名字,"ff0000")+ "气绝身亡。",_loc1_.id);
                     太监报告所有事件.push([_loc10_,"快乐",-2,20,1]);
                     删除跟这个人有关的三方相性(_loc1_);
                     删除这个妃子的值(_loc1_);
                  }
               }
        }
      _loc7_ = _loc7_ + 1;
   }
}
function 子女生病情况计算(){
   var _loc2_ = [];
   var _loc1_ = 0;
   while(_loc1_ < _all_child.length){
	   _all_child[_loc1_].召见 = undefined;
      if(_all_child[_loc1_].年龄 < 15 && _all_child[_loc1_].武质 < 70 && _all_child[_loc1_].武力 < 80 && _all_child[_loc1_].状态 == 0 && _all_child[_loc1_].寿命 > 2 && _all_child[_loc1_].病 == 0){
         _loc2_.push(_all_child[_loc1_]);
      }
      _loc1_ = _loc1_ + 1;
   }
   console.log("可能生病孩子" + _loc2_.length);
   if(random(18) == 0 && _loc2_.length !== 0){
      var _loc5_ = 0;
      i = 0;
      while(i < _loc2_.length){
         _loc2_[i].生病权重下线 = _loc5_;
         _loc5_ += 100 - _loc2_[i].武质;
         _loc2_[i].生病权重上线 = _loc5_ - 1;
         console.log("上线" + _loc2_[i].生病权重上线);
         console.log("下线" + _loc2_[i].生病权重下线);
         i++;
      }
      console.log(_loc5_);
      var _loc8_ = random(_loc5_);
      console.log(_loc8_);
      i = 0;
      while(i < _loc2_.length){
         if(_loc8_ >= _loc2_[i].生病权重下线 && _loc8_ <= _loc2_[i].生病权重上线){
            var _loc7_ = _loc2_[i];
            console.log("随机权重可能生病的子女列表[i]" + _loc2_[i].名称);
         }
         i++;
      }
      _loc7_.病 = random(5) + 5;
      console.log("病多久" + _loc7_.病);
      var _loc10_ = _loc7_.名称;
      var _loc9_ = "";
      if(_loc7_.性别 == 0){
         _loc9_ = "皇子";
      }
      else if(_loc7_.性别 == 1){
         _loc9_ = "公主";
      }
      if(_loc10_ !== undefined){
         var _loc6_ = "太医来报:" + _loc9_ + 颜色代码(_loc10_,"ff0000") + "突发疾病，太医们正在尽力医治。\n请皇上抽空去看看殿下吧。";
         太监报告所有事件.push([_loc6_,"快乐",-2,0,1]);
      }
   }
   _loc1_ = 0;
   while(_loc1_ < _all_child.length){
      if(_all_child[_loc1_].病 !== 0 && _all_child[_loc1_].状态 == 0){
         _all_child[_loc1_].病--;
         _all_child[_loc1_].保--;
         if(_all_child[_loc1_].病 == 1 && _all_child[_loc1_].状态 == 0){
            _all_child[_loc1_].病 = 0;
            if(_all_child[_loc1_].保 > 0){
               _all_child[_loc1_].保 = 0;
               console.log(_all_child[_loc1_].名称 + "病恢复了。");
               _loc6_ = "太医来报:经过长期治疗，" + 颜色代码(_all_child[_loc1_].名称,"ff0000") + "殿下的病现已痊愈。\n请皇上放心。";
               太监报告所有事件.push([_loc6_,"快乐",5,0,3]);
            }
            else{
               _all_child[_loc1_].保 = 0;
               判定这个子女死亡(_all_child[_loc1_]);
               var i = 0;
               while(i < _all_feizi.length){
                  var _loc3_ = _all_feizi[i];
                  if(_loc3_.名字 !== undefined){
                     if(_loc3_.名字 == _all_child[_loc1_].母亲){
                        var _loc4_ = _loc3_;
                     }
                  }
                  i++;
               }
               _loc6_ = "太医来报:" + 颜色代码(_all_child[_loc1_].名称,"ff0000") + "殿下久病不愈，太医们束手无策，已经无力回天了。\n请皇上节哀。";
               太监报告所有事件.push([_loc6_,"快乐",-5,6,1]);
               if(_loc4_ !== undefined){
                  console.log(_loc4_.名字 + "有孩子" + _loc4_.生育);
               }
               console.log(_all_child[_loc1_].名称 + "死翘了。");
            }
         }
      }
      _loc1_ = _loc1_ + 1;
   }
}
function 远嫁公主寿命计算(){
   if(远嫁公主.length > 0){
      var _loc2_ = 0;
      while(_loc2_ < 远嫁公主.length){
         远嫁公主[_loc2_].寿命 -= 1;
         if(远嫁公主[_loc2_].寿命 <= 0){
            var _loc3_ = {};
            var _loc1_ = 0;
            while(_loc1_ < _all_child.length){
               if(_all_child[_loc1_].id == 远嫁公主[_loc2_].id){
                  _loc3_ = _all_child[_loc1_];
               }
               _loc1_ = _loc1_ + 1;
            }
            公主死亡事件(_loc3_);
            远嫁公主.splice(_loc2_,1);
         }
         _loc2_ = _loc2_ + 1;
      }
   }
}
function 公主死亡事件(公主){
   判定这个子女死亡(公主);
   var _loc2_ = "";
   var _loc1_ = 0;
   while(_loc1_ < _all_feizi.length){
      if(公主.母亲 == _all_feizi[_loc1_].名字){
         _loc2_ = _all_feizi[_loc1_].封号 + _all_feizi[_loc1_].位分;
      }
      _loc1_ = _loc1_ + 1;
   }
   var _loc4_ = "外国商人传来噩耗：" + 颜色代码(公主.名称,"ff0000") + "公主已经离世。";
   if(_loc2_ !== ""){
      _loc4_ += "\n" + _loc2_ + "娘娘，已经哭晕过去了。";
   }
   _loc4_ += "\n请节哀。";
   太监报告所有事件.push([_loc4_,"快乐",-5,0,3]);
}
function 冷宫妃子计算(){
   if(主角.冷宫.length > 0){
      if(random(8) == 0){
         var _loc2_ = random(主角.冷宫.length);
         var _loc4_ = 主角.冷宫[_loc2_];
         var _loc5_ = _loc4_.名字;
         var _loc3_ = "皇上，冷宫的太监来报：\n罪妃" + 颜色代码(_loc5_,"ff0000") + "殁了。1";
         太监报告所有事件.push([_loc3_,"快乐",0,0,4]);
         主角.冷宫.splice(_loc2_,1);
      }
      else{
         var _loc1_ = 0;
         while(_loc1_ < 主角.冷宫.length){
            主角.冷宫[_loc1_].魅力 -= 2;
            _loc1_ = _loc1_ + 1;
         }
         主角.冷宫.sort(compare(["魅力","年龄"]));
         if(主角.冷宫[0].魅力 < 50){
            _loc4_ = 主角.冷宫[0];
            _loc5_ = _loc4_.名字;
            _loc3_ = "皇上，冷宫的太监来报：\n罪妃" + 颜色代码(_loc5_,"ff0000") + "殁了。2";
            太监报告所有事件.push([_loc3_,"快乐",0,0,4]);
            主角.冷宫.splice(0,1);
         }
      }
   }
}
function 掖庭妃子计算(){
   if(主角.掖庭.length > 0){
      var _loc1_ = 0;
      while(_loc1_ < 主角.掖庭.length){
         主角.掖庭[_loc1_].魅力 = Math.round(主角.掖庭[_loc1_].魅力 * 0.94) + 3;
         主角.掖庭[_loc1_].统帅 = Math.round(主角.掖庭[_loc1_].统帅 * 0.9);
         主角.掖庭[_loc1_].武力 = Math.round(主角.掖庭[_loc1_].武力 * 0.9);
         主角.掖庭[_loc1_].智力 = Math.round(主角.掖庭[_loc1_].智力 * 0.9);
         主角.掖庭[_loc1_].政治 = Math.round(主角.掖庭[_loc1_].政治 * 0.9);
         if(主角.掖庭[_loc1_].爱 > 0){
            主角.掖庭[_loc1_].爱 = Math.round(主角.掖庭[_loc1_].爱 * 0.9);
         }
         主角.掖庭[_loc1_].任性 = Math.round(主角.掖庭[_loc1_].任性 * 0.85);
         主角.掖庭[_loc1_].野心 = Math.round(主角.掖庭[_loc1_].野心 * 0.85);
         主角.掖庭[_loc1_].清廉 += 2;
         if(主角.掖庭[_loc1_].清廉 > 99){
            主角.掖庭[_loc1_].清廉 = 99;
         }
         _loc1_ = _loc1_ + 1;
      }
   }
}
function 后宫女人的相貌衰减(){
   var _loc1_ = 0;
   while(_loc1_ < _all_feizi.length){
      if(_all_feizi[_loc1_].年龄 > 30 && _all_feizi[_loc1_].年龄 < 40){
         _all_feizi[_loc1_].魅力 -= 1;
      }
      else if(_all_feizi[_loc1_].年龄 >= 40){
         _all_feizi[_loc1_].魅力 -= 2;
      }
      _loc1_ = _loc1_ + 1;
   }
}
function 子女婚姻大事(对象, 性别){
   if(性别 == 0){
      var _loc1_ = "皇子" + 颜色代码(对象.名称,"5f5ffc") + "已年满十六，是该大婚了。礼部已安排王妃备选名单，皇上可择日赐婚。";
      太监报告所有事件.push([_loc1_,"快乐",2,9,4]);
   }
   else{
      _loc1_ = "公主" + 颜色代码(对象.名称,"5f5ffc") + "已年满十六，是该大婚了。礼部已安排驸马备选名单，皇上可择日赐婚。";
      太监报告所有事件.push([_loc1_,"快乐",2,5,4]);
   }
}
function 子女抓周(对象){
   if(对象.文质 >= 85){
      var _loc2_ = "【书籍】";
   }
   else if(对象.武质 >= 85){
      _loc2_ = "【弓箭】";
   }
   else if(对象.文质 >= 65){
      _loc2_ = "【毛笔】";
   }
   else if(对象.武质 >= 65){
      _loc2_ = "【木剑】";
   }
   else if(对象.文质 >= 45){
      _loc2_ = "【棋盘】";
   }
   else if(对象.武质 >= 45){
      _loc2_ = "【玩具木马】";
   }
   else if(对象.文质 >= 20){
      _loc2_ = "【点心】";
   }
   else if(对象.武质 >= 20){
      _loc2_ = "【蜜糖】";
   }
   else{
      _loc2_ = "【金尿盆】。。";
   }
   var _loc3_ = "启禀皇上，" + 颜色代码(对象.名称,"ffff00") + "殿下已年满周岁，宫里给小殿下安排了抓周，小殿下在众多物品中选了" + _loc2_ + "。";
   太监报告所有事件.push([_loc3_,"快乐",2,29,4]);
}
function 天降圣童计算程序(){
   主角._con_tianjiang = 0;
   var _loc1_ = Math.round(属性.威望 / 100) - random(10);
   console.log("几率" + _loc1_);
   if(_loc1_ > 0 && random(6) == 0 && 主角._con_tjshangxian > 0 && 年 > 5){
      主角._con_tianjiang = 1;
      主角._con_tjshangxian -= 1;
   }
   console.log("天降圣童" + 主角._con_tianjiang + "剩余" + 主角._con_tjshangxian);
}
function 子女属性成长计算(){
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].状态 == 0){
         if(_all_child[i].魅力 < _all_child[i].魅质 && _all_child[i].年龄 < 16){
            _all_child[i].魅力 += _all_child[i].魅质 / 100;
            if(_all_child[i].魅力 > _all_child[i].魅质){
               _all_child[i].魅力 = _all_child[i].魅质;
            }
         }
         var _loc1_ = random(5);
         if(_loc1_ == 0 && _all_child[i].统帅 < 99 && _all_child[i].年龄 < 16){
            _all_child[i].统帅 += 1;
         }
         else if(_loc1_ == 1 && _all_child[i].武力 < 99 && _all_child[i].年龄 < 16){
            _all_child[i].武力 += 1;
         }
         else if(_loc1_ == 2 && _all_child[i].智力 < 99 && _all_child[i].年龄 < 16){
            _all_child[i].智力 += 1;
         }
         else if(_loc1_ == 3 && _all_child[i].政治 < 99 && _all_child[i].年龄 < 16){
            _all_child[i].政治 += 1;
         }
         if(_all_child[i].课程 !== undefined){
            if(_all_child[i].统帅 < _all_child[i].武质){
               _all_child[i].统帅 += 所有课程[_all_child[i].课程].统帅 * _all_child[i].武质 / 300;
            }
            if(_all_child[i].武力 < _all_child[i].武质){
               _all_child[i].武力 += 所有课程[_all_child[i].课程].武力 * _all_child[i].武质 / 300;
            }
            if(_all_child[i].智力 < _all_child[i].文质){
               _all_child[i].智力 += 所有课程[_all_child[i].课程].智力 * _all_child[i].文质 / 300;
            }
            if(_all_child[i].政治 < _all_child[i].文质){
               _all_child[i].政治 += 所有课程[_all_child[i].课程].政治 * _all_child[i].文质 / 300;
            }
            if(_all_child[i].魅力 < _all_child[i].魅质){
               _all_child[i].魅力 += 所有课程[_all_child[i].课程].魅力 * _all_child[i].魅质 / 300;
            }
         }
      }
      i++;
   }
}
function 计算剧情人物(){
   i = 0;
   while(i < _all_child.length){
      if(主角.亚瑟 == 0 && 主角.嘉宁 >= 41 && _all_child[i].文化 == 7 && _all_child[i].年龄 < 3 && _all_child[i].性别 == 1){
         主角.亚瑟 = 1;
         _all_child[i]._code = 9904;
         _all_child[i].幼年 = 204;
         _all_child[i].头像 = 1204;
         _all_child[i].文质 = 88;
         _all_child[i].武质 = 99;
         _all_child[i].魅质 = 99;
         _all_child[i].性情 = 2;
         _all_child[i].寿命 = 99;
      }
      i++;
   }
   var i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i]._code == 7004){
         _all_feizi[i].仙 = 3;
      }
      i++;
   }
}
function 计算皇子纳妾(){
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].性别 == 0 && _all_child[i].婚 == 1 && _all_child[i].清廉 < 60 && _all_child[i].状态 == 0 && _all_child[i].寿命 > 3){
         var _loc3_ = Math.round(_all_child[i].清廉 / 10) + 1;
         var _loc2_ = (有几个妻室(_all_child[i]) + 1) * 10;
         var _loc1_ = random(_loc3_ + _loc2_);
         console.log(_all_child[i].名称 + ",基准1=" + _loc3_ + "，基准2=" + _loc2_ + "，纳妾几率" + _loc1_);
         if(_loc1_ == 0){
            皇子纳妾方式(_all_child[i]);
         }
      }
      i++;
   }
}
function 皇子纳妾方式(皇子){
   var _loc4_ = random(100);
   var _loc3_ = 0;
   i = 0;
   while(i < _all_feizi.length){
      if(_all_feizi[i].性别 == 0){
         _loc3_ += 1;
      }
      i++;
   }
   if(_loc4_ < 10 && random(_loc3_) == 0){
      var _loc5_ = 最新的取名程序("女");
	  if(random(2)==0){
		var _loc9_ = random(6) + 1;
		if(random(2)==0){
			var _loc10_ = random(3) + 10;
		}
		else{
			var _loc10_ = random(3) + 17;
		}
	  }
	  else{
		var _loc9_ = 0;
		var _loc10_ = random(6) + 1;
	  }
	  _loc11_ =[_loc9_,_loc10_];
      if(random(2) == 0){
		  _loc12_=出身计算(3);
         var _loc6_ = "启禀皇上，" + 皇子.封号 + 颜色代码(皇子.名称,"ffff00") + "殿下近日收了一位侧妃，" + 皇子.封号 + "妃觉得该女子举止端庄，修养尚可，与其相处倒也融洽。";
         太监报告所有事件.push([_loc6_,"快乐",2,29,4]);
      }
      else{
		  _loc12_=出身计算(2);
         _loc6_ = "启禀皇上，" + 皇子.封号 + 颜色代码(皇子.名称,"ffff00") + "殿下近日收了一位侧妃，" + 皇子.封号 + "妃觉得该女子姿容端丽，出身高贵，各种羡慕嫉妒恨，生怕王爷专宠于她。";
         太监报告所有事件.push([_loc6_,"快乐",2,29,5]);
      }
	  _all_family.push({id:_all_family.length,名称:_loc5_[1],性格:_loc11_,家族:_loc5_[0],出身:_loc12_,婚配:皇子.名称,婚配序号:皇子.id,介绍:"",年龄:16,文化:8,身份:"侧妃",儿女:0,地位:1,爱:random(80),头像:random(600) + 1});
   }
   else if(_loc4_ < _loc3_ && _loc3_ > 1){
      _loc5_ = 最新的取名程序("男");
	  var _loc10_=new Object;
	  _loc10_.统帅 = random(40);
	  _loc10_.武力 = random(40);
	  _loc10_.智力 = random(99);
	  _loc10_.政治 = random(99);
	  _loc10_.野心 = random(99);
	  _loc10_.清廉 = random(99);
	  _loc11_ =性格计算(_loc10_);
      _all_family.push({id:_all_family.length,_code:13010,名称:_loc5_[1],性格:_loc11_,家族:_loc5_[0],出身:出身计算(3),年龄:16,婚配:皇子.名称,婚配序号:皇子.id,身份:"男宠",介绍:"",地位:3,儿女:0,文化:8,爱:random(80),头像:random(30)});
      if(random(2) == 0){
         _loc6_ = "启禀皇上，" + 皇子.封号 + 颜色代码(皇子.名称,"ffff00") + "殿下近日收了一位男宠，" + 皇子.封号 + "妃觉得这很不合礼数，但又貌似敢怒不敢言。";
      }
      else{
         _loc6_ = "启禀皇上，" + 皇子.封号 + 颜色代码(皇子.名称,"ffff00") + "殿下近日收了一位男宠，" + 皇子.封号 + "妃觉得这是奇耻大辱，当众给那位男宠颜色看，弄得王爷好生尴尬。";
      }
      太监报告所有事件.push([_loc6_,"快乐",0,30,5]);
   }
   else{
      _loc5_ = 最新的取名程序("女");
      if(random(2) == 0){
		  var _loc10_=new Object;
		  _loc10_.统帅 = random(40);
		  _loc10_.武力 = random(40);
		  _loc10_.智力 = random(99);
		  _loc10_.政治 = random(99);
		  _loc10_.野心 = random(99);
		  _loc10_.清廉 = random(99);
		  _loc11_ =性格计算(_loc10_);
         _loc6_ = "启禀皇上，" + 皇子.封号 + 颜色代码(皇子.名称,"ffff00") + "殿下近日收了一位侍妾，" + 皇子.封号 + "妃觉得为延绵子嗣，王爷纳妾也未尝不可。";
         太监报告所有事件.push([_loc6_,"快乐",0,29,4]);
      }
      else{
		  if(random(4)==0){
		  	var _loc9_ = random(3) + 9;
		  	var _loc10_ = random(4) + 13;
		  }
		  else if(random(2)==0){
		  	var _loc9_ = random(4) + 31;
		  	var _loc10_ = random(5) + 35;
		  }
		  else{
		  	var _loc9_ = random(2) + 29;
		  	var _loc10_ = random(3) + 31;
		  }	
		  _loc11_ =[_loc9_,_loc10_];
         _loc6_ = "启禀皇上，" + 皇子.封号 + 颜色代码(皇子.名称,"ffff00") + "殿下近日收了一位侍妾，" + 皇子.封号 + "妃觉得该女子恃宠而骄，目无尊卑，在王府明争暗斗，看来以后王爷的日子可不好过咯。";
         太监报告所有事件.push([_loc6_,"快乐",0,29,5]);
      }
	  _all_family.push({id:_all_family.length,名称:_loc5_[1],性格:_loc11_,家族:_loc5_[0],出身:出身计算(3),婚配:皇子.名称,婚配序号:皇子.id,介绍:"",年龄:16,文化:8,身份:"侍妾",儿女:0,地位:2,爱:random(80),头像:random(600) + 1});
   }
}
function 有几个妻室(皇子){
   var _loc2_ = 0;
   var _loc1_ = 0;
   while(_loc1_ < _all_family.length){
      if(_all_family[_loc1_].婚配 == 皇子.名称){
         _loc2_ += 1;
      }
      _loc1_ = _loc1_ + 1;
   }
   return _loc2_;
}
function 计算公主面首(){
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].性别 == 1 && _all_child[i].婚 == 1 && _all_child[i].清廉 < 30 && _all_child[i].状态 == 0 && _all_child[i].寿命 > 3){
         var _loc1_ = _all_child[i];
         var _loc4_ = Math.round(_loc1_.清廉) + 1;
         var _loc3_ = (有几个妻室(_loc1_) + 1) * 20;
         var _loc2_ = random(_loc4_ + _loc3_);
         console.log(_loc1_.名称 + ",基准1=" + _loc4_ + "，基准2=" + _loc3_ + "，面首几率" + _loc2_);
         if(_loc2_ == 0){
            var _loc8_ = 32;
            var _loc5_ = 1;
            var _loc6_ = -5;
            var _loc7_ = 2;
            var _loc9_ = "启禀皇上，" + _loc1_.封号 + 颜色代码(_loc1_.名称,"ffff00") + "殿下近日来大肆豢养男宠，弄得驸马爷很没面子，但碍于公主身份高贵，又是皇家脸面的问题，有苦说不出。皇上，如何处理这件事啊？";
            太监报告所有事件.push([_loc9_,"快乐",_loc6_,_loc8_,_loc5_,_loc7_,_loc1_]);
         }
      }
      i++;
   }
}
function 计算子女寿终正寝(){
   var _loc1_ = 0;
   while(_loc1_ < _all_child.length){
      if(_all_child[_loc1_].寿命 !== undefined){
         if(_all_child[_loc1_].寿命 == 1 && _all_child[_loc1_].状态 == 0){
            _all_child[_loc1_].病 = 5;
            var _loc2_ = "太医来报:" + _all_child[_loc1_].名称 + "殿下身体衰弱，太医们正在尽力医治。\n请皇上抽空去看看殿下吧。";
            太监报告所有事件.push([_loc2_,"快乐",-2,0,1]);
         }
         else if(_all_child[_loc1_].寿命 == 0 && _all_child[_loc1_].状态 == 0){
            _all_child[_loc1_].病 = 99999;
            _loc2_ = "启禀皇上，" + 颜色代码(_all_child[_loc1_].名称,"ff0000") + "殿下的身子每况愈下，恐怕命数不多了，皇上得空去看看吧。";
            太监报告所有事件.push([_loc2_,"快乐",-5,0,5]);
         }
         else if(_all_child[_loc1_].寿命 < 0 && _all_child[_loc1_].状态 == 0 && random(2) == 0){
            _loc2_ = "启禀皇上:" + 颜色代码(_all_child[_loc1_].名称,"ff0000") + "殿下久病不愈，已经驾鹤西去了。\n请皇上节哀。";
            太监报告所有事件.push([_loc2_,"快乐",-5,6,1]);
            _all_child[_loc1_].保 = 0;
            判定这个子女死亡(_all_child[_loc1_]);
         }
         else if(_all_child[_loc1_].寿命 < 0 && _all_child[_loc1_].状态 == 5 && random(2) == 0){
            _loc2_ = "启禀皇上:" + 颜色代码(_all_child[_loc1_].名称,"ff0000") + "殿下久病不愈，已经驾鹤西去了。请皇上节哀。\n该封地已经收回中央。";
            太监报告所有事件.push([_loc2_,"快乐",-5,6,1]);
            判定这个子女死亡(_all_child[_loc1_]);
            _all_city[_all_child[_loc1_].封地].归属 = 8;
            _all_child[_loc1_].封地 = undefined;
            删除跟这个人有关的三方相性(_all_child[_loc1_]);
         }
      }
      _loc1_ = _loc1_ + 1;
   }
}
function 计算外国皇室出生(){
   var _loc1_ = random(23);
   if(_loc1_ !== 8&&_loc1_ !== 9 &&_all_nation[_loc1_].皇帝!==undefined){
	var _loc5_=0;
	var _loc2_=0;
	var _loc3_=0;
	var _loc4_=0;
	var _loc6_=0;
	var _loc4_=0;
	while(_loc5_<_all_family.length){
		   if(_all_family[_loc5_].婚配序号 == _all_nation[_loc1_].皇帝._code){
			   _loc2_+=1;
			   if(_all_family[_loc5_].地位 == 0){
					_loc2_+=1;
			   }
		   }
		   if(_all_family[_loc5_].脉系 == _all_nation[_loc1_].皇帝._code&&_all_family[_loc5_].儿女==0){
		   		_loc3_+=1;
		   }
		   if(_all_family[_loc5_].脉系 == _all_nation[_loc1_].皇帝._code&&_all_family[_loc5_].儿女==1){
		   		_loc4_+=1;
		   }
		   _loc5_+=1;
	}
	if(random(4)==0&&_loc3_<=10&&_all_nation[_loc1_].皇帝.年龄<=50){
		var _loc2_ =new Object;
		_loc2_ = 生成外国男子(_all_nation[_loc1_],_all_nation[_loc1_].皇帝.家族);
		_loc2_._code = 15000;
		_loc2_.婚配序号 = undefined;
		_loc2_.地位 = 2;
		_loc2_.脉系 = _all_nation[_loc1_].皇帝._code;
		_loc2_.身份 = 外国皇子称呼计算(_loc1_,2);
		_loc2_.儿女=0;
		_loc2_.介绍 = _all_nation[_loc1_].名称 + _loc2_.身份 + "，"+ 国王称呼计算(_loc1_) + _all_nation[_loc1_].皇帝.名称 + "之子。";
		_loc2_.年龄 = 1;
		_loc2_.幼年 = _loc2_.文化 * 10 + random(10);
		if(_loc2_.文化 == 20 || _loc2_.文化 == 21 || _loc2_.文化 == 22){
		   _loc2_.幼年 = 8 * 10 + random(10);
		}
		_loc2_.头像 = 计算外域头像(_loc2_);
		_all_family.push(_loc2_);
	}
	else{
		if(random(3)==0 &&_loc1_ !== 7&&_loc1_ !== 13){
			_loc2_ = 生成外国女子(_all_nation[_loc1_]);
			_loc2_.婚配序号=_all_nation[_loc1_].皇帝._code;
			_loc2_.年龄 = 15+random(5);
			_loc2_.脉系 = undefined;
			_loc3_ = 外国后宫称呼计算(_loc1_,undefined);
			_loc2_.身份 = _loc3_[0];
			_loc2_.地位 = _loc3_[1];
			_loc2_.介绍 = _all_nation[_loc1_].名称 + 国王称呼计算(_loc1_) + _all_nation[_loc1_].皇帝.名称 + "的妃子。";
		}
		else if(_all_nation[_loc1_].皇帝.年龄<=50){
			_loc2_ = 生成外国女子(_all_nation[_loc1_],_all_nation[_loc1_].皇帝.家族);
			_loc2_.地位 = 2;
			_loc2_.脉系 = _all_nation[_loc1_].皇帝._code;
			_loc2_.婚配序号 = undefined;
			_loc2_.年龄 = 1;
			_loc2_.家族 = _all_nation[_loc1_].皇帝.家族;
			_loc2_.身份 = 外国后宫称呼计算(_loc1_,2)[0];
			_loc2_.幼年 = _loc2_.文化 * 10 + random(10);
			if(_loc2_.文化 == 20 || _loc2_.文化 == 21 || _loc2_.文化 == 22){
			   _loc2_.幼年 = 8 * 10 + random(10);
			}
			_loc2_.介绍 = _all_nation[_loc1_].名称 + _loc2_.身份 + "，"+ 国王称呼计算(_loc1_) + _all_nation[_loc1_].皇帝.名称 + "之女。";
		}
		_loc2_._code = 16000;
		_loc2_.儿女=1;
		_loc2_.头像 = 计算外域头像(_loc2_);
		_all_family.push(_loc2_);
	}
	}
}
function 大臣家眷(){
	var i =0;
	while(i<_all_rencai.length){
		if(_all_rencai[i].结婚==1&&_all_rencai[i].清廉<50){
			if(random(_all_rencai.length)==0&&_all_rencai[i].爵位!==6&&_all_rencai[i].性别==0){
				大臣增加家眷(2,_all_rencai[i]);
			}
		}
		else if(_all_rencai[i].年龄>=30&&_all_rencai[i].结婚!==1){
			_all_rencai[i].结婚=1;
			大臣增加家眷(1,_all_rencai[i]);
		}
		else if(_all_rencai[i].年龄<30&&_all_rencai[i].结婚!==1){
			_all_rencai[i].结婚=1;
			大臣增加家眷(1,_all_rencai[i]);
		}
		i++;
	}
}
function 大臣增加家眷(参数,取数据){
	是否是历史美女 = random(5);
	var _loc4_ = [];
	var _loc5_ = 0;
	while(_loc5_ < 后宫名人.length){
	    if(后宫名人[_loc5_].用过 == undefined){
		_loc4_.push(后宫名人[_loc5_]);
		}
		_loc5_ += 1;
	}
	if((_loc3_ == 0||是否是历史美女 == 0)&&_loc4_.length > 0&&取数据.性别 == 0){
		var _loc6_ = random(_loc4_.length);
		var _loc7_ = _loc4_[_loc6_];
	 	var _loc8_ = random(6) + 16;
		var _loc9_ = _loc7_.跳;
		var _loc10_ = _loc7_.名称;
		var _loc11_ = _loc7_.家族;
		var _loc13_ = _loc7_.文化;
		var _loc14_ = _loc7_._code;
		var _loc15_ = _loc7_.性格;
		_loc5_ = 0;
		while(_loc5_ < 后宫名人.length){
			if(后宫名人[_loc5_]._code == _loc7_._code){
			后宫名人[_loc5_].用过 = 1;
			}
			_loc5_ += 1;
		}
		var _loc16_ = {_code:_loc14_,爱:undefined,出身:出身计算(3),身份:undefined,名称:_loc10_,家族:_loc11_,文化:_loc13_,性格:_loc15_,年龄:_loc8_,头像:_loc9_,地位:0,婚配序号:取数据.名字,脉系:undefined,儿女:0};
		if(参数==1){_loc16_.地位 = 0;_loc16_.身份 ="正妻";}
		else{
		   _loc16_.地位 = 1;_loc16_.身份 ="小妾";
		}
		_all_family.push(_loc16_);
	   }
	else{
		if(取数据.性别 == 0){
			_loc16_ = 生成外国女子(_all_nation[8]);
			_loc16_.头像=random(626)+1;
			_loc16_.出身=出身计算(3);
			if(参数==1){_loc16_.地位 = 0;_loc16_.身份 ="正妻";}
			else{_loc16_.地位 = 1;_loc16_.身份 ="小妾";}
		}else{
			_loc16_ = 生成外国男子(_all_nation[8]);
			_loc16_.头像=random(40);
			_loc16_._code=13000;
			_loc16_.出身="";
			_loc16_.地位 = 0;_loc16_.身份 ="夫君";
		}
		_loc16_.年龄=random(6) + 16;
		_loc16_.婚配序号=取数据.名字;
		_loc16_.儿女=0;
		_loc16_.介绍="";
		_all_family.push(_loc16_);
	}
}
function 太监报告事情(太监报告所有事件){
   var _loc4_ = 0;
   if(太监报告所有事件.length > 0){
      把这个事件记录到总事件(太监报告所有事件[0],_loc4_);
      主角[太监报告所有事件[0][1]] += 太监报告所有事件[0][2];
      更新资料();
      太监报告所有事件.splice(0,1);
   }
   else{
      var _loc3_ = 固定事件();
      if(_loc3_.length > 0){
         出现的固定事件 = _loc3_;
         处理固定事件程序();
      }
   }
}
function 处理固定事件程序(){
   if(出现的固定事件.length > 0){
      var _loc2_ = 出现的固定事件[0];
      if(_loc2_.路径 == undefined){
         eval(_loc2_+'()');
		 console.log(_loc2_);
      }
      else{
         console.log(_loc2_.路径 + "/" + _loc2_.调用);
         console.log("方法：" + _root[_loc2_.路径][_loc2_.调用]);
         _root[_loc2_.路径][_loc2_.调用]();
      }
      出现的固定事件.splice(0,1);
   }
   else{
      var _loc4_ = 取出党首程序();
      var _loc3_ = 0;
      q = 0;
      while(q < _all_city.length){
         if(_all_city[q].归属 == 8){
            _loc3_ += 1;
         }
         q++;
      }
      if(_loc4_ !== undefined && _loc4_.野心 > 60){
         党首篡位事件(_loc4_);
      }
      else if(_loc3_ == 0){
         沦陷死亡事件();
      }
      else{
        console.log("固定事件结束");
      }
   }
}
function 需要判断跳过这个事件的程序(){
   出现的固定事件.splice(0,1);
   处理固定事件程序();
}
function 结束固定事件程序(参数){
   id('taijianBg').style.display = 'none';id('tjjj').style.top = '0px';
   id('taijiantu').style.display = 'none';
   id('tjBgCho').style.display = 'none';id('tjBgCon').style.display = 'block';
   if(参数 == 1){
      出现的固定事件 = [];
      主角.当前时辰 = 4;
      时辰推进();
   }
   else{
      处理固定事件程序();
   }
}
function 记录大事件的程序(事件){
   var _loc1_ = 年 + "年" + 月 + "月";
   这么多年所有大事.unshift([_loc1_,事件]);
}
function 移除太监事件部分(){
    id('taijianBg').style.display = 'none';
	id('tjBgCho').style.display = 'none';
	id('taijiantu').style.display = 'none';
	id('tjBgCon').innerText = '继续';
	id('tjBgCon').style.display = 'block';
    太监报告事情(太监报告所有事件);
}
function 把这个事件记录到总事件(事件,报告序号){
   var _loc13_ = 年 + "年" + 季节 + "季 " + 旬;
   记录大事件的程序(事件[0]);
   报告序号 += random(5000);
   id('taijianBg').style.display = 'block';
   if(事件[3] == 0){
      id('taijiantu').style.display = 'none';id('tjjj').style.top = '0px';
   }
   else{
      id('taijiantu').style.display = 'block';id('tjjj').style.top = '50px';
	  var i = 事件[3] * 2 + 1168;
      id('太监报告事情图').src = 'images/' + i + '.png';
   }
   if(事件[4] == 1){
      id('taijian2').style.backgroundPositionX = '-112px';
      id('taijian2').style.width = '112px';	
   }
   else if(事件[4] == 2){
      id('taijian2').style.backgroundPositionX = '-901px';
      id('taijian2').style.width = '183px';	
   }
   else if(事件[4] == 3){
      id('taijian2').style.backgroundPositionX = '-383px';
      id('taijian2').style.width = '161px';	
   }
   else if(事件[4] == 4){
      id('taijian2').style.backgroundPositionX = '-224px';
      id('taijian2').style.width = '159px';	
   }
   else if(事件[4] == 5){
      id('taijian2').style.backgroundPositionX = '0px';
      id('taijian2').style.width = '112px';	
   }
   else if(事件[4] == 6){
      id('taijian2').style.backgroundPositionX = '-1084px';
      id('taijian2').style.width = '118px';	
   }
   else if(事件[4] == 7){
      id('taijian2').style.backgroundPositionX = '-544px';
      id('taijian2').style.width = '143px';	
   }
   else{
      id('taijian2').style.backgroundPositionX = '-687px';
      id('taijian2').style.width = '214px';	
   }
   id('taijianbgText').innerHTML = 事件[0];
   id('tjBgCon').style.display = 'block';
   id('tjBgCon').onclick = function (){
      移除太监事件部分();
   };
   if(事件[5] == 1){
      id('tjBgCon').style.display = 'none';
      id('tjBgCho').style.display = 'block';
      id('tjBgan0').innerText = "准奏";
      id('tjBgan1').innerText = "搁置";
      id('tjBgan0').onclick = function(){
         移除太监事件部分();
         加载进步动画条的说("金钱");
         var _loc1_ = 100000;
         国家.金钱 -= _loc1_;
         国家.粮食 -= _loc1_;
         事件[6].民心 += 2;
         更新资料();
      };
      id('tjBgan1').onclick = function(){
         移除太监事件部分();
         事件[6].民心 -= 3;
         事件[6].人口 -= Math.round(事件[6].人口 / 20);
      };
   }
   else if(事件[5] == 2){
      id('tjBgCon').style.display = 'none';
      id('tjBgCho').style.display = 'block';
      id('tjBgan0').innerText = "赐死男宠";
      id('tjBgan1').innerText = "纵容公主";
      id('tjBgan0').onclick = function(){
         移除太监事件部分();
         事件[6].关系 -= 5;
         事件[6].清廉 += 5;
      };
      id('tjBgan1').onclick = function(){
         移除太监事件部分();
         事件[6].关系 += 20;
         属性.威望 -= 25;
         更新资料(属性栏);
        _loc5_ = 最新的取名程序("男");
        var _loc10_=new Object;
        _loc10_.统帅 = random(40);
        _loc10_.武力 = random(40);
        _loc10_.智力 = random(99);
        _loc10_.政治 = random(99);
        _loc10_.野心 = random(99);
        _loc10_.清廉 = random(99);
        _loc11_ =性格计算(_loc10_);
        _all_family.push({id:_all_family.length,_code:13050,名称:_loc5_[1],性格:_loc11_,家族:_loc5_[0],出身:出身计算(3),年龄:16,婚配:事件[6].名称,婚配序号:事件[6].id,身份:"男宠",介绍:"",地位:3,儿女:0,文化:8,爱:random(80),头像:random(30)});
      };
   }
   else if(事件[5] == 3){
      id('tjBgCon').innerText = "去看看";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         难产保大小(事件[6],事件[7]);
      };
   }
   else if(事件[5] == 4){
      id('tjBgCon').innerText = "查看结果";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc2_ = "调查党派的结果如下：";
         if(_all_party.length == 0){
            _loc2_ += "\n    目前没有明显的党派划分。";
         }
         else{
            d = 0;
            while(d < _all_party.length){
               _loc2_ += "\n    " + _all_child[_all_party[d].id].名称 + "党，党内妃嫔" + _all_party[d].后宫势力 + "人，大臣" + _all_party[d].朝廷势力 + "人，宗族" + _all_party[d].皇嗣势力 + "人。";
               d++;
            }
         }
         id('szb').style.display = 'block';
          id('szbText').innerText = _loc2_;
		  id('szbTittle').innerText = '';
          id('szbgb').onclick = function(){
             this.parentNode.style.display = 'none';
          };
      };
   }
   if(事件[5] == 5){
	   console.log(事件[6].爱)
      id('tjBgCon').style.display = 'none';
      id('tjBgCho').style.display = 'block';
      id('tjBgan0').innerText = "册封";
      id('tjBgan1').innerText = "搁置";
      id('tjBgan0').onclick = function(){
		册封名号(事件[6],77);
		id('taijianBg').style.display = 'none';
		id('tjBgCho').style.display = 'none';
		id('taijiantu').style.display = 'none';
		id('tjjj').style.top = '50px';
		id('tjBgCon').innerText = '继续';
		id('tjBgCon').style.display = 'block';
      };
      id('tjBgan1').onclick = function(){
		 事件[6].爱 -= 10;
		 事件[6].病 += random(3);
		 console.log(事件[6].爱)
         移除太监事件部分();
      };
   }
   if(事件[7] == 1){
      战斗震屏程序();
   }
   if(事件[8] == 1){
      id('tjBgCon').style.display = 'none';
      id('tjBgan0').innerText = "罢官";
      id('tjBgan1').innerText = "廷杖";
      太监.否1.文本.text = "斩首";
      id('tjBgan0').onclick = function(){
         移除太监事件部分();
      };
      id('tjBgan1').onclick = function(){
         移除太监事件部分();
      };
      太监.否1.按.onclick = function(){
         移除太监事件部分();
      };
   }
   if(事件[9] == 1){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc1_ = 国家.皇子顺序 - 1;
         皇子取名字(_loc1_,1);
      };
   }
   else if(事件[9] == 2){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc1_ = 国家.公主顺序 - 1;
         公主取名字(_loc1_,1);
      };
   }
   else if(事件[9] == 3){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc1_ = 国家.公主顺序 - 1;
         公主取名字(_loc1_,99);
      };
   }
   else if(事件[9] == 4){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc5_ = 国家.公主顺序 - 7;
         公主取名字(_loc5_,7);
      };
   }
   else if(事件[9] == 5){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc1_ = 国家.皇子顺序 - 7;
         皇子取名字(_loc1_,7);
      };
   }
   else if(事件[9] == 6){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc2_ = 国家.皇子顺序 - 3;
         皇子取名字(_loc2_,3);
      };
   }
   else if(事件[9] == 7){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc2_ = 国家.公主顺序 - 3;
		 console.log(_loc2_)
         公主取名字(_loc2_,3);
      };
   }
   else if(事件[9] == 8){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc2_ = 国家.皇子顺序 - 2;
         皇子取名字(_loc2_,2);
      };
   }
   else if(事件[9] == 9){
      id('tjBgCon').innerText = "御赐名字";
      id('tjBgCon').onclick = function(){
         移除太监事件部分();
         var _loc2_ = 国家.公主顺序 - 2;
         公主取名字(_loc2_,2);
      };
   }
}
太监报告所有事件 = [];
这么多年所有大事 = [];
function 过年的程序(){
   属性.年龄 += 1;
   子女与后宫女人的年龄加大();
   计算成年子女头像();
   后宫女人的相貌衰减();
   官员年龄事件();
   在党人士数值变化();
   推荐入朝为官事件();
   阵营贸易年数加大();
   山贼计算程序();
   天降圣童计算程序();
   if(主角._con_tianjiang == 1){
      var _loc1_ = 0;
      while(_loc1_ < 剧情汇总.length){
         if(剧情汇总[_loc1_]._code == 96){
            剧情汇总[_loc1_].达成 = 1;
         }
         _loc1_ = _loc1_ + 1;
      }
      var _loc2_ = "皇上，皇上！\n今日黎明时分，皇宫后宫上空紫气东来，飞过百余只仙鹤。\n钦天监的大臣称这奇景可是百年不遇的祥瑞之兆，看来皇上要有大喜事了。";
      太监报告所有事件.push([_loc2_,"快乐",5,25,3]);
   }
   国家.选秀 = 0;
}
function 推荐入朝为官事件(){
   var _loc4_ = [];
   var _loc3_ = 0;
   while(_loc3_ < _all_rencai.length){
      if(_all_rencai[_loc3_].朝廷势力 > 3 && _all_rencai[_loc3_].朝廷相性 == ""){
         _loc4_.push(_all_rencai[_loc3_]);
      }
      _loc3_ = _loc3_ + 1;
   }
   var _loc5_ = [];
   _loc3_ = 0;
   while(_loc3_ < _loc4_.length){
      if(random(2) == 0){
         var _loc2_ = 创建新人才();
         更改这个人的朝廷相性(_loc2_,_loc4_[_loc3_].名字);
         _all_rencai.push(_loc2_);
         _loc5_.push(_loc2_);
      }
      _loc3_ = _loc3_ + 1;
   }
   console.log("临时新人" + _loc5_.length);
   if(_loc5_.length > 0){
      var _loc6_ = "为了给朝廷选拔人才，" + _loc4_[0].名字 + "等大臣推举了" + _loc5_.length + "名新人入朝为官。";
      太监报告所有事件.push([_loc6_,"快乐",0,0,4]);
      记载入官员奏折的程序(_loc6_);
   }
}
function 官员年龄事件(){
   var _loc2_ = 0;
   while(_loc2_ < _all_rencai.length){
      _all_rencai[_loc2_].年龄 += 1;
      if(_all_rencai[_loc2_].年龄 > 61){
         var _loc6_ = _all_rencai[_loc2_];
         var _loc5_ = 姓[random(姓.length)];
         var _loc3_ = _loc5_ + 只取名程序("男");
         var _loc4_ = "【" + _loc6_.名字 + "】上奏，年老体衰。辞官回乡养老。\n该职位吏部推荐由【" + _loc3_ + "】担当。";
         太监报告所有事件.push([_loc4_,"快乐",0,0,5]);
         记载入官员奏折的程序(_loc4_);
         官员属性更换程序(_loc6_,_loc3_,_loc5_);
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 阵营贸易年数加大(){
   var _loc2_ = 0;
   while(_loc2_ < _all_nation.length){
      if(_all_nation[_loc2_].外交 > 3 && _all_nation[_loc2_].贸易额 !== 0){
         国家.金钱 += _all_nation[_loc2_].贸易额;
         _all_nation[_loc2_].贸易年数 += 1;
         _all_nation[_loc2_].友好度 += 10;
         if(_all_nation[_loc2_].友好度 >= 100){
            _all_nation[_loc2_].友好度 = 100;
         }
         贸易额计算程序(_all_nation[_loc2_]);
         var _loc3_ = _all_nation[_loc2_].名称 + "的年度贸易总额为" + Math.round(_all_nation[_loc2_].贸易额 / 10000) + "万";
         每月的官员奏折.push(_loc3_);
      }
      _loc2_ = _loc2_ + 1;
   }
}
function 山贼计算程序(){
   var _loc4_ = 0;
   var _loc3_ = 0;
   var _loc2_ = 0;
   while(_loc2_ < _all_nation.length){
      if(_all_nation[_loc2_].贸易额 !== 0){
         _loc4_ = 1;
      }
      _loc2_ = _loc2_ + 1;
   }
   _loc2_ = 0;
   while(_loc2_ < _all_city.length){
      if(_all_city[_loc2_].归属 == 8){
         if(_all_city[_loc2_].治安 < 80){
            _loc3_ = 1;
         }
      }
      _loc2_ = _loc2_ + 1;
   }
   if(_loc4_ == 1 && _loc3_ == 1 && random(2) == 0){
      国家.遇到山贼 = 1;
   }
}
function 在党人士数值变化(){
   var _loc1_ = 0;
   while(_loc1_ < _all_rencai.length){
      if(_all_rencai[_loc1_].后宫势力 > 0){
         _all_rencai.野心 += 1;
         _all_rencai.清廉 -= 1;
      }
      if(_all_rencai[_loc1_].朝廷势力 > 0){
         _all_rencai.野心 += Math.round(_all_rencai[_loc1_].朝廷势力 / 2);
         _all_rencai.清廉 -= Math.round(_all_rencai[_loc1_].朝廷势力 / 2);
      }
      if(_all_rencai[_loc1_].朝廷相性 !== "" && _all_rencai[_loc1_].朝廷相性 !== undefined){
         _all_rencai.野心 += 1;
         _all_rencai.清廉 -= 1;
      }
      if(_all_rencai[_loc1_].后宫相性 !== "" && _all_rencai[_loc1_].后宫相性 !== undefined){
         _all_rencai.野心 += 1;
         _all_rencai.清廉 -= 1;
      }
      _loc1_ = _loc1_ + 1;
   }
   var _loc3_ = 0;
   while(_loc3_ < _all_feizi.length){
      var _loc2_ = _all_feizi[_loc3_];
      if(_loc2_.名字 !== undefined){
         _loc2_.任性 += _loc2_.后宫势力 + _loc2_.朝廷势力;
      }
      _loc3_ = _loc3_ + 1;
   }
}
function 子女与后宫女人的年龄加大(){
   var _loc1_ = 0;
   while(_loc1_ < _all_feizi.length){
      _all_feizi[_loc1_].年龄 += 1;
      _loc1_ = _loc1_ + 1;
   }
   _loc1_ = 0;
   while(_loc1_ < 主角.冷宫.length){
      主角.冷宫[_loc1_].年龄 += 1;
      _loc1_ = _loc1_ + 1;
   }
   _loc1_ = 0;
   while(_loc1_ < 主角.掖庭.length){
      主角.掖庭[_loc1_].年龄 += 1;
      _loc1_ = _loc1_ + 1;
   }
   _loc1_ = 0;
   while(_loc1_ < _all_child.length){
      if(_all_child[_loc1_].状态 == 1 || _all_child[_loc1_].状态 == 2 || _all_child[_loc1_].状态 == 3){
         _all_child[_loc1_].年龄 += 0;
      }
      else if(_all_child[_loc1_].状态 == 0 || _all_child[_loc1_].状态 == 5){
         _all_child[_loc1_].年龄 += 1;
         _all_child[_loc1_].寿命 -= 1;
         if(_all_child[_loc1_].年龄 == 16 && _all_child[_loc1_].婚 == 0 && _all_child[_loc1_].状态 == 0){
            子女婚姻大事(_all_child[_loc1_],_all_child[_loc1_].性别);
         }
         else if(_all_child[_loc1_].年龄 == 2 && _all_child[_loc1_].状态 == 0){
            子女抓周(_all_child[_loc1_]);
         }
      }
      _loc1_ = _loc1_ + 1;
   }
   _loc1_ = 0;
   while(_loc1_ < _all_grandchild.length){
      _all_grandchild[_loc1_].年龄 += 1;
      _loc1_ = _loc1_ + 1;
   }
   _loc1_ = 0;
   while(_loc1_ < _all_family.length){
      _all_family[_loc1_].年龄 += 1;
      _loc1_ = _loc1_ + 1;
   }
   var _loc1_=0;
   while(_loc1_<_all_nation.length){
   	   if(_all_nation[_loc1_].皇帝 !== undefined){
   		   _all_nation[_loc1_].皇帝.年龄+=1;
   	   }
   	   _loc1_+=1;
   }
}
function 生产孩子程序(主子){
   var _loc2_ = 主子.名字;
   var _loc3_ = 0;
   if(主子.仙 == 1){
      主子.仙 = 0;
      主子.生育 += 7;
      if(random(2) == 0){
         var _loc23_ = 公主取名();
         var _loc21_ = 公主取名();
         var _loc19_ = 公主取名();
         var _loc15_ = 公主取名();
         var _loc12_ = 公主取名();
         var _loc10_ = 公主取名();
         var _loc8_ = 公主取名();
         var _loc26_ = 计算子女魅力(主子);
         var _loc25_ = 计算子女魅力(主子);
         var _loc24_ = 计算子女魅力(主子);
         var _loc22_ = 计算子女魅力(主子);
         var _loc20_ = 计算子女魅力(主子);
         var _loc16_ = 计算子女魅力(主子);
         var _loc13_ = 计算子女魅力(主子);
         var _loc57_ = 主子.文化;
         var _loc55_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
         var _loc56_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
         var _loc17_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         var _loc14_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         var _loc11_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         var _loc9_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         var _loc7_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         var _loc6_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         var _loc5_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc17_,名称:_loc23_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc26_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc14_,名称:_loc21_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc25_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc11_,名称:_loc19_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc24_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc9_,名称:_loc15_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc22_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc7_,名称:_loc12_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc20_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc6_,名称:_loc10_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc16_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc5_,名称:_loc8_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc13_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         var _loc18_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "非常努力。\n为皇上诞下七胞胎公主，简直就是七仙女，请皇上为孩子取名字吧。";
         太监报告所有事件.push([_loc18_,"快乐",5,8,2,0,0,0,0,4]);
      }
      else{
         _loc23_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc21_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc19_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc15_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc12_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc10_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc8_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc26_ = 计算子女魅力(主子);
         _loc25_ = 计算子女魅力(主子);
         _loc24_ = 计算子女魅力(主子);
         _loc22_ = 计算子女魅力(主子);
         _loc20_ = 计算子女魅力(主子);
         _loc16_ = 计算子女魅力(主子);
         _loc13_ = 计算子女魅力(主子);
         _loc57_ = 主子.文化;
         _loc55_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
         _loc56_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
         _loc17_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc14_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc11_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc9_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc7_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc6_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc5_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc17_,名称:_loc23_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc26_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc14_,名称:_loc21_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc25_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc11_,名称:_loc19_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc24_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc9_,名称:_loc15_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc22_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc7_,名称:_loc12_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc20_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc6_,名称:_loc10_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc16_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc5_,名称:_loc8_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc13_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _loc18_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "非常努力。\n为皇上诞下七胞胎皇子，简直就是葫芦娃，请皇上为孩子取名字吧。";
         太监报告所有事件.push([_loc18_,"快乐",5,8,2,0,0,0,0,5]);
      }
   }
   else if(主子.仙 == 2){
      主子.仙 = 0;
      正常生产程序(主子);
   }
   else if(主子.仙 == 4){
      主子.仙 = 0;
      龙凤胎生产程序(主子);
   }
   else{
	   var _loc4_ = random(200);
      console.log("怎么生" + _loc4_);
      console.log("谁生" + 主子.名字);
      if(主子._code !== undefined){
         if(主子.性别 == 0){
            _loc4_ = 200;
         }
         else{
            _loc4_ = random(200);
         }
      }
      if(_loc4_ == 0){
         主子.生育 += 3;
         _loc23_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc21_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc19_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc26_ = 计算子女魅力(主子);
         _loc25_ = 计算子女魅力(主子);
         _loc24_ = 计算子女魅力(主子);
         _loc57_ = 主子.文化;
         _loc55_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
         _loc56_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
         _loc17_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc14_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc11_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc17_,名称:_loc23_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc26_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc14_,名称:_loc21_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc25_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc11_,名称:_loc19_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc24_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _loc18_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "非常努力。\n为皇上诞下三胞胎皇子，请皇上为孩子取名字吧。";
         太监报告所有事件.push([_loc18_,"快乐",5,8,2,0,0,0,0,6]);
      }
      else if(_loc4_ == 1){
         主子.生育 += 3;
         _loc23_ = 公主取名();
         _loc21_ = 公主取名();
         _loc19_ = 公主取名();
         _loc26_ = 计算子女魅力(主子);
         _loc25_ = 计算子女魅力(主子);
         _loc24_ = 计算子女魅力(主子);
         _loc57_ = 主子.文化;
         _loc55_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
         _loc56_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
         _loc17_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         _loc14_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         _loc11_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc17_,名称:_loc23_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc26_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc14_,名称:_loc21_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc25_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc11_,名称:_loc19_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc24_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _loc18_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "非常努力。\n为皇上诞下三胞胎公主，请皇上为孩子取名字吧。";
         太监报告所有事件.push([_loc18_,"快乐",5,8,2,0,0,0,0,7]);
      }
      else if(_loc4_ == 2){
         主子.生育 += 2;
         _loc23_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc21_ = 主名[random(主名.length)] + 男名[random(男名.length)];
         _loc26_ = 计算子女魅力(主子);
         _loc25_ = 计算子女魅力(主子);
         _loc57_ = 主子.文化;
         _loc55_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
         _loc56_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
         _loc17_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _loc14_ = 国家.皇子顺序;
         国家.皇子顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc17_,名称:_loc23_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc26_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc14_,名称:_loc21_,性别:0,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc25_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _loc18_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "非常努力。\n为皇上诞下双胞胎皇子，请皇上为孩子取名字吧。";
         太监报告所有事件.push([_loc18_,"快乐",5,8,2,0,0,0,0,8]);
      }
      else if(_loc4_ == 3){
         主子.生育 += 2;
         _loc23_ = 公主取名();
         _loc21_ = 公主取名();
         _loc26_ = 计算子女魅力(主子);
         _loc25_ = 计算子女魅力(主子);
         _loc57_ = 主子.文化;
         _loc55_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
         _loc56_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
         _loc17_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         _loc14_ = 国家.公主顺序;
         国家.公主顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc17_,名称:_loc23_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc26_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc14_,名称:_loc21_,性别:1,母亲:_loc2_,生母:_loc2_,文化:_loc57_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc55_ + random(5),武质:_loc56_ + random(5),魅质:_loc25_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
         国家.子女顺序 += 1;
         _loc18_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "非常努力。\n为皇上诞下双胞胎公主，请皇上为孩子取名字吧。";
         太监报告所有事件.push([_loc18_,"快乐",5,8,2,0,0,0,0,9]);
      }
      else if(_loc4_ == 4){
         龙凤胎生产程序(主子);
      }
      else if(_loc4_ == 200){
         天降圣童程序(主子);
      }
      else if(_loc4_ >= 100 && _loc4_ < 200){
         娘娘难产程序(主子);
      }
      else{
         正常生产程序(主子);
      }
   }
}
function 多生孩子的生产程序(主子,什么,名称){
   主子.经验 += 10;
   主子.爱 += 10;
   var _loc2_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "非常努力。\n产下" + 什么 + "，分别是" + 名称 + "。";
   if(什么 == "七胞胎皇子"){
      _loc2_ += "\n皇上真是天生神力。";
   }
   太监报告所有事件.push([_loc2_,"快乐",5,8,2]);
}
function 龙凤胎生产程序(主子){
   var _loc9_ = 主名[random(主名.length)] + 男名[random(男名.length)];
   var _loc8_ = 公主取名();
   var _loc41_ = 主子.文化;
   var _loc39_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
   var _loc40_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
   var _loc6_ = 国家.皇子顺序;
   国家.皇子顺序 += 1;
   var _loc5_ = 国家.公主顺序;
   国家.公主顺序 += 1;
   var _loc4_ = 计算子女魅力(主子);
   var _loc35_ = 计算子女魅力(主子);
   var _loc3_ = 主子.名字;
   _all_child.push({id:国家.子女顺序,_code:8000,序号:_loc6_,名称:_loc9_,性别:0,母亲:_loc3_,生母:_loc3_,文化:_loc41_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc39_ + random(5),武质:_loc40_ + random(5),魅质:_loc4_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
   国家.子女顺序 += 1;
   _all_child.push({id:国家.子女顺序,_code:9000,序号:_loc5_,名称:_loc8_,性别:1,母亲:_loc3_,生母:_loc3_,文化:_loc41_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc39_ + random(5),武质:_loc40_ + random(5),魅质:_loc4_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
   国家.子女顺序 += 1;
   主子.经验 += 12;
   主子.爱 += 12;
   主子.生育 += 2;
   var _loc7_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "非常努力。\n为皇上诞下一对龙凤胎，请皇上为孩子取名字吧。";
   太监报告所有事件.push([_loc7_,"快乐",5,8,2,0,0,0,0,3]);
}
function 正常生产程序(主子){
   var _loc7_ = random(2);
   if(_loc7_ == 0){
      var _loc6_ = 主名[random(主名.length)] + 男名[random(男名.length)];
      var _loc5_ = 0;
      var _loc16_ = 8000;
      var _loc14_ = 国家.皇子顺序;
      国家.皇子顺序 += 1;
   }
   else{
      _loc6_ = 公主取名();
      _loc5_ = 1;
      _loc16_ = 9000;
      _loc14_ = 国家.公主顺序;
      国家.公主顺序 += 1;
   }
   var _loc3_ =  主子.名字;
   var _loc39_ = 主子.文化;
   var _loc37_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
   var _loc38_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
   var _loc8_ = 计算子女魅力(主子);
   _all_child.push({id:国家.子女顺序,_code:_loc16_,序号:_loc14_,名称:_loc6_,性别:_loc5_,母亲:_loc3_,生母:_loc3_,文化:_loc39_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc37_ + random(5),武质:_loc38_ + random(5),魅质:_loc8_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
   国家.子女顺序 += 1;
   if(_loc5_ == 0){
      var _loc9_ = "皇子";
      主子.爱 += 15;
   }
   else{
      _loc9_ = "公主";
      主子.爱 += 10;
   }
   主子.经验 += 9;
   主子.生育 += 1;
   var _loc4_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "为皇帝产下一名" + _loc9_ + "，请皇上给孩子取个好名字吧。";
   if(_loc5_ == 0){
      太监报告所有事件.push([_loc4_,"快乐",5,8,2,0,0,0,0,1]);
   }
   else{
      太监报告所有事件.push([_loc4_,"快乐",5,8,2,0,0,0,0,2]);
   }
}
function 天降圣童程序(主子){
   var _loc7_ = random(2);
   if(_loc7_ == 0){
      var _loc6_ = 主名[random(主名.length)] + 男名[random(男名.length)];
      var _loc5_ = 0;
      var _loc16_ = 8000;
      var _loc14_ = 国家.皇子顺序;
      国家.皇子顺序 += 1;
   }
   else{
      _loc6_ = 公主取名();
      _loc5_ = 1;
      _loc16_ = 9000;
      _loc14_ = 国家.公主顺序;
      国家.公主顺序 += 1;
   }
   var _loc3_ =  主子.名字;
   var _loc39_ = 主子.文化;
   var _loc37_ = 90 - random(5);
   var _loc38_ = 90 - random(5);
   var _loc8_ = 计算子女魅力(主子);
   _all_child.push({id:国家.子女顺序,_code:_loc16_,序号:_loc14_,名称:_loc6_,性别:_loc5_,母亲:_loc3_,生母:_loc3_,文化:_loc39_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc37_ + random(5),武质:_loc38_ + random(5),魅质:_loc8_,统帅:random(10) + 20,武力:random(10) + 20,智力:random(10) + 20,政治:random(10) + 20,魅力:random(10) + 20,清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
   国家.子女顺序 += 1;
   if(_loc5_ == 0){
      var _loc9_ = "皇子";
      主子.爱 += 15;
   }
   else{
      _loc9_ = "公主";
      主子.爱 += 10;
   }
   主子.经验 += 9;
   主子.生育 += 1;
   var _loc4_ = 颜色代码(主子.封号 + 主子.位分,"ff0000") + "娘娘" + 颜色代码(主子.名字,"5f5ffc") + "为皇帝产下一名" + _loc9_ + "。虽然过程艰难，但娘娘意志坚强，母子平安。孩子十分特别，出生时红光一闪，生下来不哭却笑，定是旷世奇才。请皇上给孩子起个名字吧。";
   if(_loc5_ == 0){
      太监报告所有事件.push([_loc4_,"快乐",5,8,2,0,0,0,0,1]);
   }
   else{
      太监报告所有事件.push([_loc4_,"快乐",5,8,2,0,0,0,0,2]);
   }
}
function 娘娘难产程序(主子){
   四个随机 = random(100);
   if(四个随机 >= 70){
	   if(主子.位分=="秀女"){
		   _loc2_ = undefined;
	   }else{var _loc2_ = _all_doctor[_all_palace[主子.宫殿].太医];}
      if(_loc2_ !== undefined){
         var _loc3_ = "皇上，皇上。不好了！后宫传来消息，" + 主子.封号 + 主子.位分 + "恐怕是难产了，皇上快去看看吧。";
         太监报告所有事件.push([_loc3_,"快乐",-10,18,1,3,主子,_loc2_]);
      }
      else{
         _loc3_ = "皇上，皇上，不好了！\n后宫传来消息，" + 颜色代码(主子.封号,"5f5ffc") + 颜色代码(主子.位分,"5f5ffc") + "难产。虽然娘娘最后挺了过来，但是孩子却没有保住，娘娘十分伤心。";
         太监报告所有事件.push([_loc3_,"快乐",-10,18,1]);
         主子.病 = 9;
      }
   }
   else if(四个随机 >= 5){
      _loc3_ = "皇上，皇上，不好了！\n后宫传来消息，" + 颜色代码(主子.封号,"5f5ffc") + 颜色代码(主子.位分,"5f5ffc") + "难产。虽然娘娘最后挺了过来，但是孩子却没有保住，娘娘十分伤心。";
      太监报告所有事件.push([_loc3_,"快乐",-10,18,1]);
      主子.病 = 9;
   }
   else if(四个随机 >= 1 && 四个随机 < 5){
      _loc3_ = "皇上，皇上，不好了！\n后宫传来消息，" + 颜色代码(主子.封号,"5f5ffc") + 颜色代码(主子.位分,"5f5ffc") + "难产。\n娘娘十分顽强，但是因为失血过多，生下小殿下之后便没了气息了。请皇上节哀。";
      太监报告所有事件.push([_loc3_,"快乐",-20,18,1]);
      难产生产程序(主子);
      删除跟这个人有关的三方相性(主子);
      删除这个妃子的值(主子);
   }
   else if(四个随机 == 0){
      _loc3_ = "皇上，皇上，不好了！\n后宫传来消息，" + 颜色代码(主子.封号,"5f5ffc") + 颜色代码(主子.位分,"5f5ffc") + "难产。\n娘娘本就体质虚弱，生下一个死胎之之后就撒手人寰了，请皇上节哀。";
      太监报告所有事件.push([_loc3_,"快乐",-30,18,1]);
      删除跟这个人有关的三方相性(主子);
      删除这个妃子的值(主子);
   }
}
function 难产生产程序(主子){
   var _loc6_ = random(2);
   if(_loc6_ == 0){
      var _loc5_ = 主名[random(主名.length)] + 男名[random(男名.length)];
      var _loc4_ = 0;
      var _loc14_ = 8000;
      var _loc12_ = 国家.皇子顺序;
      国家.皇子顺序 += 1;
   }
   else{
      _loc5_ = 公主取名();
      _loc4_ = 1;
      _loc14_ = 9000;
      _loc12_ = 国家.公主顺序;
      国家.公主顺序 += 1;
   }
   var _loc3_ = 主子.名字;
   var _loc38_ = 主子.文化;
   var _loc36_ = Math.round(主子.智力 * 3 / 4 + 属性.智力 / 10 / 4) - random(5);
   var _loc37_ = Math.round(主子.武力 * 3 / 4 + 属性.武力 / 10 / 4) - random(5);
   var _loc7_ = 计算子女魅力(主子);
   _all_child.push({id:国家.子女顺序,_code:_loc14_,序号:_loc12_,名称:_loc5_,性别:_loc4_,母亲:_loc3_,生母:_loc3_,文化:_loc38_,年龄:1,婚:0,婚配:"",病:0,保:0,状态:0,关系:2,头像:undefined,文质:_loc36_ + random(5),武质:_loc37_ + random(5),魅质:_loc7_,统帅:random(10),武力:random(10),智力:random(10),政治:random(10),魅力:random(10),清廉:random(100),野心:random(100),功勋:0,寿命:random(150) + 5,被过继过:0,封号:"",朝廷势力:0,后宫势力:0,性情:性情[random(性情.length)]});
   国家.子女顺序 += 1;
   if(_loc4_ == 0){
      var _loc35_ = "皇子";
      主子.爱 += 15;
   }
   else{
      _loc35_ = "公主";
      主子.爱 += 10;
   }
   主子.经验 += 20;
   主子.生育 += 1;
   return _loc4_;
}
function 公主取名字(找到序号,第几个){
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].序号 == 找到序号 && _all_child[i].性别 == 1){
         var 给他取名字 = _all_child[i];
      }
      i++;
   }
   id('御赐').style.display = 'block';
   id('ycsm').innerText = "公主赐名";
   id('输入').maxLength = '4';
   id('输入').value = "";
   id('ycts').innerText = "请给皇" + 中文序号[给他取名字.序号] + "女" + "赐一个四字以内的名字：";
   id('随机一个').onclick = function(){
      id('输入').value = 皇家名字女字[random(皇家名字女字.length)] + 皇家名字女字[random(皇家名字女字.length)];
   };
   id('御赐确定').onclick = function(){
      给他取名字.名称 = id('输入').value;
      var _loc2_ = 0;
      var _loc1_ = 0;
      while(_loc1_ < _all_child.length){
         if(_all_child[_loc1_].名称 == 给他取名字.名称){
            _loc2_ += 1;
         }
         _loc1_ = _loc1_ + 1;
      }
      if(_loc2_ >= 2){
         小提示("已经有人叫这个名字了");
      }
      else if(给他取名字.名称.length < 1){
         小提示("请给孩子取一个名字");
      }
      else{
		  console.log(找到序号)
		找到序号+=1;
		第几个-=1;
		if(第几个 == 0){缓动黑幕();id('御赐').style.display = 'none';}
		else if(第几个 == 98){找到序号 = 国家.皇子顺序 - 1;黑色幕布();皇子取名字(找到序号,1);}
		else{黑色幕布();公主取名字(找到序号,第几个);}
      }
   };
}
function 皇子取名字(找到序号,第几个){
   i = 0;
   while(i < _all_child.length){
      if(_all_child[i].序号 == 找到序号 && _all_child[i].性别 == 0){
         var 给他取名字 = _all_child[i];
      }
      i++;
   }
   id('御赐').style.display = 'block';
   id('ycsm').innerText = "皇子赐名";
   id('输入').maxLength = '4';
   id('输入').value = "";
   id('ycts').innerText = "请给皇" + 中文序号[给他取名字.序号] + "子" + "赐一个四字以内的名字：";
   id('随机一个').onclick = function(){
      id('输入').value = 主名[random(主名.length)] + 男名[random(男名.length)];
   };
   id('御赐确定').onclick = function(){
      给他取名字.名称 = id('输入').value;
      var _loc2_ = 0;
      var _loc1_ = 0;
      while(_loc1_ < _all_child.length){
         if(_all_child[_loc1_].名称 == 给他取名字.名称){
            _loc2_ += 1;
         }
         _loc1_ = _loc1_ + 1;
      }
      console.log(_loc2_);
      if(_loc2_ >= 2){
         面板.提示.text = "已经有人叫这个名字了";
      }
      else if(给他取名字.名称.length < 1){
         面板.提示.text = "请给孩子取一个名字";
      }
      else{
         找到序号+=1;
         第几个-=1;
         if(第几个 == 0){缓动黑幕();id('御赐').style.display = 'none';}
         else{黑色幕布();皇子取名字(找到序号,第几个);}
      }
   };
}
function 难产保大小(主子,太医){
   id('剧情对话').style.display = 'block';
   id('剧情背景').src = LJ + 'a0aPic_BG/Tu_987203.jpg';
   id('剧情头像').style.display = 'block';
   出现这个人的头像(剧情头像,主子);
   播放音乐("Music_18",1);
   对话打字效果("" + 主子.封号 + 主子.位分 + "：啊——哈——啊——！");
   剧情对话板.onclick = function(){
	新后宫图形读取程序(剧情头像,0,'皇帝');
      对话打字效果("皇上：爱妃你可一定要挺住啊！太医！太医呢！");
      剧情对话板.onclick = function(){
         出现这个人的头像(剧情头像,太医);
         对话打字效果("太医：微臣在。");
         剧情对话板.onclick = function(){
			新后宫图形读取程序(剧情头像,0,'皇帝');
            对话打字效果("皇上：你老实告诉朕，你有几成把握能保母子平安？");
            剧情对话板.onclick = function(){
				出现这个人的头像(剧情头像,太医);
               对话打字效果("太医：以微臣的能力，最多……" + 太医.保胎 + "成……");
               剧情对话板.onclick = function(){
				新后宫图形读取程序(剧情头像,0,'皇帝');
                  对话打字效果("皇上：朕要你拼尽全力。");
                  剧情对话板.onclick = function(){
					出现这个人的头像(剧情头像,太医);
                     对话打字效果("太医：是，微臣自当拼尽全力，但请皇上恕微臣无能，万一真到了要命的时候，是保大还是保小啊？");
                     剧情对话板.onclick = function(){
                        对话打字效果("（怎么办？）",["保大","保小"]);
                        id('剧情an0').onclick = function(){
						新后宫图形读取程序(剧情头像,0,'皇帝');
                           对话打字效果("皇上：无论如何，先保住爱妃性命要紧。");
                           剧情对话板.onclick = function(){
							出现这个人的头像(剧情头像,太医);
                              对话打字效果("太医：是，微臣遵旨。");
                              剧情对话板.onclick = function(){
                                 难产的结果(主子,太医,"保大");
                              };
                           };
                        };
                        id('剧情an1').onclick = function(){
							新后宫图形读取程序(剧情头像,0,'皇帝');
                           对话打字效果("皇上：真到了那时候……弃母留子。");
                           剧情对话板.onclick = function(){
							   出现这个人的头像(剧情头像,太医);
                              对话打字效果("太医：是，微臣遵旨。");
                              剧情对话板.onclick = function(){
                                 难产的结果(主子,太医,"保小");
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
      };
   };
}
function 难产的结果(主子,太医,参数){
   var 结果 = random(10);
   console.log("结果" + 结果);
   出现这个人的头像(剧情头像,主子);
   对话打字效果("" + 主子.封号 + 主子.位分 + "：啊——哈——啊——！");
   剧情对话板.onclick = function(){
      对话打字效果("（经过了很长时间的煎熬之后）");
      剧情对话板.onclick = function(){
         出现这个人的头像(剧情头像,太医);
         if(太医.保胎 > 结果){
            对话打字效果("太医：恭喜皇上，贺喜皇上。母子平安。");
            剧情对话板.onclick = function(){
				新后宫图形读取程序(剧情头像,0,'皇帝');
               对话打字效果("皇上：太好了。快抱过来给朕看看……（乳娘把孩子抱来，刚出生的孩子啼哭不停）");
               剧情对话板.onclick = function(){
				   新后宫图形读取程序(剧情头像,0,'特殊');
                  对话打字效果("（请皇上给孩子赐名）");
                  剧情对话板.onclick = function(){
                    id('剧情对话').style.display = 'none';
                     缓动黑幕();
                     停止音乐();
                     var _loc4_ = 难产生产程序(主子);
                     if(_loc4_ == 0){
                        var _loc3_ = 国家.皇子顺序 - 1;
                        皇子取名字(_loc3_,1);
                     }
                     else{
                        var _loc2_ = 国家.公主顺序 - 1;
                        公主取名字(_loc2_,1);
                     }
                  };
               };
            };
         }
         else if(参数 == "保大"){
			 出现这个人的头像(剧情头像,太医);
            对话打字效果("太医：皇上，微臣无能，不能保得皇嗣了。");
            剧情对话板.onclick = function(){
				新后宫图形读取程序(剧情头像,0,'皇帝');
               对话打字效果("皇上：哎，没关系，孩子早晚还会有的。" + 主子.封号 + 主子.位分 + "现在怎么样？");
               剧情对话板.onclick = function(){
				   出现这个人的头像(剧情头像,太医);
                  对话打字效果("太医：" + 主子.封号 + 主子.位分 + "现在十分虚弱，但是并无生命危险。");
                  剧情对话板.onclick = function(){
					  新后宫图形读取程序(剧情头像,0,'皇帝');
                     对话打字效果("皇上：那就好。");
                     剧情对话板.onclick = function(){
                        主子.孕 = 0;
                        主子.病 = 9;
                       id('剧情对话').style.display = 'none';
                        缓动黑幕();
                        停止音乐();
                     };
                  };
               };
            };
         }
         else if(参数 == "保小"){
			 出现这个人的头像(剧情头像,太医);
            对话打字效果("太医：皇上，皇上，微臣无能，孩子是生下来了，可是娘娘却不行了。");
            剧情对话板.onclick = function(){
				新后宫图形读取程序(剧情头像,0,'皇帝');
               对话打字效果("皇上：什么？！爱妃！");
               剧情对话板.onclick = function(){
                  出现这个人的头像(剧情头像,主子);
                  对话打字效果("" + 主子.封号 + 主子.位分 + "：……");
                  剧情对话板.onclick = function(){
					  新后宫图形读取程序(剧情头像,0,'皇帝');
                     对话打字效果("皇上：爱妃！");
                     剧情对话板.onclick = function(){
						 新后宫图形读取程序(剧情头像,0,'特殊');
                        对话打字效果("（" + 主子.封号 + 主子.位分 + "难产而死，请皇上节哀顺变）");
                        剧情对话板.onclick = function(){
                          id('剧情对话').style.display = 'none';
                           缓动黑幕();
                           停止音乐();
                           var _loc4_ = 难产生产程序(主子);
                           删除跟这个人有关的三方相性(主子);
                           删除这个妃子的值(主子);
                           if(_loc4_ == 0){
                              var _loc3_ = 国家.皇子顺序 - 1;
                              皇子取名字(_loc3_,1);
                           }
                           else{
                              var _loc2_ = 国家.公主顺序 - 1;
                              公主取名字(_loc2_,1);
                           }
                        };
                     };
                  };
               };
            };
         }
      };
   };
}