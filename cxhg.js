function 计算背景程序(n){var i=n.宫殿+100;return 0==n.地位?LJ+"azcPic_Gong_Li/259.jpg":0==n.寝殿?LJ+"azcPic_Gong_Li/"+n.宫殿+".jpg":LJ+"azcPic_Gong_Li/"+i+".jpg"}function 出现这位后宫(_,T){null==_.统帅&&(_.统帅=10),null==_.武力&&(_.武力=10),null==_.智力&&(_.智力=10),null==_.政治&&(_.政治=10),id("hgdt").style.display="none",id("出现这位后宫").style.display="block",id("后宫对话板").style.display="block",id("出现后宫an0").style.display="block",id("属性栏").style.display="none",出现这个人的头像(id("后宫头像"),_),id("后宫头像").onclick=1==T?function(){出现这个妃嫔的介绍(_)}:function(){};var n,i,e,l,o=计算背景程序(_);1==T?(o=LJ+"azcPic_Gong_Li/260.jpg",id("出现后宫an1").innerText="册封名号",id("出现后宫an2").innerText="收入储秀阁",id("后宫对话框").onclick=function(){},id("后宫头像").onclick=function(){出现这个秀女的介绍(_,0)},void 0!==_._code?id("后宫对话").innerHTML=颜色代码(_.名字,"#FFFF00")+" 第一次侍奉皇上。<br>魅力："+_.魅力+"  出身："+_.出身+"<br>":80<=_.魅力?id("后宫对话").innerHTML=颜色代码(_.名字,"#5f5ffc")+" 第一次侍奉皇上。<br>魅力："+_.魅力+"  出身："+_.出身+"<br>":id("后宫对话").innerHTML=_.名字+" 第一次侍奉皇上。<br>魅力："+_.魅力+"  出身："+_.出身+"<br>",敬事房记档(颜色代码(_.名字,"#5f5ffc")+" 第一次侍奉皇上。")):2==T?(id("后宫对话").innerHTML=_.名字+" 皇上去了"+_.封号+_.位分+"宫里用膳。<br>健康+2<br>",属性.统帅+=Math.floor(_.统帅/30),属性.武力+=Math.floor(_.武力/30),属性.智力+=Math.floor(_.智力/30),属性.政治+=Math.floor(_.政治/30)):3==T?(id("后宫对话").innerHTML="皇上去探望了生病的"+_.封号+_.位分+"。<br>",敬事房记档("皇上去探望了生病的"+_.封号+_.位分+颜色代码(_.名字,"#5f5ffc")+"。")):4==T?(id("后宫对话").innerHTML="皇上去探望了怀孕的"+_.封号+_.位分+"。<br>",敬事房记档("皇上去探望了怀孕的"+_.封号+_.位分+颜色代码(_.名字,"#5f5ffc")+"。")):5==T?(id("后宫内").style.display="none",o=LJ+"azcPic_Gong_Li/260.jpg",id("后宫对话").innerHTML="皇上召幸了"+_.封号+_.位分+"。<br>",敬事房记档("皇上召幸了"+_.封号+_.位分+颜色代码(_.名字,"#5f5ffc")+"。"),属性.统帅+=Math.floor(_.统帅/40),属性.武力+=Math.floor(_.武力/40),属性.智力+=Math.floor(_.智力/40),属性.政治+=Math.floor(_.政治/40)):3e3==_._code&&0==主角.黑瞎子?黑花事件(_):7002==_._code&&1==主角.吕四娘?阿四行刺事件(_):7001==_._code&&8==主角.倚梅园?发现青樱的庶出妹妹称心事件(_):7003==_._code&&9==主角.倚梅园?称心的身世(_):7004==_._code&&4==主角.鱼美人?鱼美人后宫对话(_):1013==_._code&&_.经验<=1&&0==国家.事件二?初次翻龙阳君(_):(l=(e=(i=(n=(88==T?(id("后宫内").style.display="none",o=LJ+"azcPic_Gong_Li/258.jpg",id("后宫对话").innerHTML="皇上临幸了秀女"+_.名字+"。<br>",敬事房记档("皇上临幸了秀女"+颜色代码(_.名字,"#5f5ffc")+"。"),_.爱+=12):(id("后宫对话").innerHTML="皇上临幸了"+_.封号+_.位分+"："+_.名字+"。<br>",敬事房记档("皇上临幸了"+_.封号+_.位分+"："+颜色代码(_.名字,"#5f5ffc")+"。")),Math.floor(_.统帅/40)),Math.floor(_.武力/40)),Math.floor(_.智力/40)),Math.floor(_.政治/40)),属性.统帅+=Math.floor(_.统帅/40),属性.武力+=Math.floor(_.武力/40),属性.智力+=Math.floor(_.智力/40),属性.政治+=Math.floor(_.政治/40));var c=_.魅力+Math.round(_.经验/2);"秀女"!=_.位分&&null!=_.宫殿?_.爱+=8+4*_all_palace[_.宫殿].等级:_.爱+=12,_.经验+=1,_.任性+=2*_.野心/100,属性.体力+=c,更新资料(),属性.体力>=属性.体力上限?(属性.体力=属性.体力上限,id("后宫对话").innerHTML+=颜色代码("体力恢复全满。","#CC0000")):id("后宫对话").innerHTML+="体力恢复："+c+"。",38<_.年龄&&"秀女"!=_.位分?(属性.快乐+=5,100<属性.快乐&&(属性.快乐=100),id("后宫对话").innerHTML="皇上和"+颜色代码(_.封号+_.位分,"#ff0000")+"娘娘在宫中聊天休息。"):(--属性.健康,属性.快乐+=10,100<属性.快乐&&(属性.快乐=100));c="";void 0!==n&&1<=n&&(c+="统+"+n+" "),void 0!==i&&1<=i&&(c+="武+"+i+" "),void 0!==e&&1<=e&&(c+="智+"+e+" "),void 0!==l&&1<=l&&(c+="政+"+l+" "),id("后宫对话").innerHTML+=c,id("出现后宫an0").onclick=function(){if(id("出现后宫an0").style.display="none",id("后宫对话板").style.display="none",1==T)id("后宫对话框").style.display="block",id("后宫对话2").innerText="是否册封名号？（点击头像查看详细信息）",id("后宫头像").onclick=function(){出现这个秀女的介绍(_,0)},id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an3").style.display="block",id("出现后宫an3").onclick=function(){关闭后宫面板()},id("出现后宫an2").onclick=function(){关闭后宫面板(),收入储秀阁(_);for(var n=0;n<后宫名人.length;)后宫名人[n]._code==_._code&&(后宫名人[n].用过=1),n+=1},id("出现后宫an1").onclick=function(){id("出现这位后宫").style.display="none",册封名号(_,6),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("出现后宫an3").style.display="none",id("后宫对话板").style.display="block",id("后宫对话框").style.display="none"};else if(2==T)属性.健康+=2,更新资料(),关闭后宫面板();else if(3==T){--_.病,属性.道德+=2,id("后宫对话框").style.display="block";var n=[];null==_._code?(n.push("皇上来看臣妾，臣妾真高兴。"),n.push("皇上，臣妾近来抱恙，不能服侍皇上，皇上还是早些歇息吧。"),n.push("皇上这一来，臣妾的病仿佛好多了。"),n.push("皇上如此惦记着臣妾，臣妾好感动。")):1e3<=_._code&&_._code<=1999?(n.push("皇上，臣无大碍，劳烦皇上挂念了。"),n.push("咳咳咳……臣能得皇上如此垂爱真不知是几世修来的福分。"),n.push("臣真是没用，不能帮皇上分忧，反而让皇上担心了。"),n.push("恳请皇上恕臣有病在身，不能行礼，等臣病好，再好好陪皇上吧。")):2e3<=_._code&&_._code<=2999||14e3<=_._code&&_._code<=14999?(n.push("皇上来看臣妾，臣妾真高兴。"),n.push("皇上，臣妾近来抱恙，不能服侍皇上，皇上还是早些歇息吧。"),n.push("皇上这一来，臣妾的病仿佛好多了。"),n.push("皇上如此惦记着臣妾，臣妾好感动。")):3e3<=_._code&&_._code<=3999?3e3==_._code?n.push("好难受~算你瞎子识相，还知道来看我，快去下厨，爷要喝燕窝。……………………………………爷不吃青椒肉丝！！！"):(n.push("皇上来看奴家，奴家实在感动。"),n.push("喉咙好痛，这病不知道会不会影响奴家日后给皇上唱戏听啊。"),n.push("皇上这一来，奴家的病仿佛好多了。"),n.push("这怎么是好，奴家病怏怏的样子，怕要让皇上生厌了。")):4e3<=_._code&&_._code<=4999?_.爱<150?n.push("你来做什么，我不想看见你，让我一个人死了算了。"):_.爱<350?n.push("看来，皇上还是个挺重情义的人，也许是我以前太过偏激了。咳咳咳……"):_.爱<600?n.push("唉，劳烦皇上挂念了，我没那么金贵，以前在沙场上头破血流都不眨一下眼睛。"):n.push("皇上，如果我先去了，皇上会想念我吗？"):5e3<=_._code&&_._code<=5037?_.爱<150?n.push("后宫里盼着雨露的女人多的是，天朝皇上以后还是别来我这里了。"):_.爱<350?n.push("啊？天朝皇帝日理万机却亲自来照顾我？这……谢……谢谢……"):_.爱<600?n.push("皇上还是早些回去歇息吧，以免传染，有臣妾一个人病了就已经够麻烦的了。"):n.push("刚到这里时，臣妾曾觉得自己孤单一人，无依无靠也无牵挂，如今若真的被病魔夺了性命，心里却终究舍不得皇上。"):5038<=_._code&&_._code<=5999?(n.push("皇上来看臣妾，臣妾真高兴。"),n.push("皇上，臣妾近来抱恙，不能服侍皇上，皇上还是早些歇息吧。"),n.push("皇上这一来，臣妾的病仿佛好多了。"),n.push("皇上如此惦记着臣妾，臣妾好感动。")):6e3<=_._code&&_._code<=6999?(n.push("皇上，臣妾无大碍，劳烦皇上挂念了。"),n.push("咳咳咳……臣妾能得皇上如此垂爱真不知是几世修来的福分。"),n.push("臣妾真是没用，不能帮皇上分忧，反而让皇上担心了。"),n.push("恳请皇上恕臣妾有病在身，不能行礼，等臣妾病好，再好好陪皇上吧。")):7e3<=_._code&&_._code<=7999&&(n.push("皇上来看臣妾，臣妾真高兴。"),n.push("皇上，臣妾近来抱恙，不能服侍皇上，皇上还是早些歇息吧。"),n.push("皇上这一来，臣妾的病仿佛好多了。"),n.push("皇上如此惦记着臣妾，臣妾好感动。")),id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){关闭后宫面板()}}else if(4==T){id("后宫对话框").style.display="block",属性.道德+=2;var i=random(100);1==_.性别&&0==_.仙&&(80<i?_.仙=2:i<5&&(_.仙=4)),n=[],null==_._code?(n.push("皇上来看臣妾，臣妾真高兴。"),n.push("皇上喜欢男孩还是女孩？要不臣妾给皇上生个龙凤胎吧"),n.push("皇上，这孩子在臣妾肚子里动呢，一定是一个健康强壮的皇子。"),n.push("皇上看，这个虎头帽好看吗。")):1e3<=_._code&&_._code<=1999?(n.push("皇上，臣有点怕啊……男人生孩子真的没问题吗。"),n.push("臣算这孩子的娘还是算孩子的爹啊…… = ="),n.push("如果臣和皇上的这个孩子能平安出生就好了。"),n.push("如果到时候孩子和臣只能留一个，皇上会怎么选择。")):2e3<=_._code&&_._code<=2999||14e3<=_._code&&_._code<=14999?(n.push("皇上终于来了，臣妾和孩子早早就盼着了。"),n.push("要是个男孩就要像皇上一样英武，要是个女孩……就……（脸红）"),n.push("臣妾现在身材不苗条，臣妾害怕皇上见了以后就不喜欢臣妾了。"),n.push("皇上看，这是臣妾给孩子做的小衣服，这是小裤子，还有鞋子……^_^")):3e3<=_._code&&_._code<=3999?3e3==_._code?n.push("我靠，爷不想给你生孩子啊！！这叫神马！！！赶紧打掉！！"):(n.push("皇上，奴家有点怕啊……怕这后宫容不下奴家和这孩子。"),n.push("皇上，后宫有人议论说能生孩子的男人就是妖孽，奴家好难过。"),n.push("奴家没有别的奢求，只求这孩子一生平安。"),n.push("如果到时候孩子和奴家只能留一个，皇上会怎么选择。")):4e3<=_._code&&_._code<=4999&&0==_.性别?_.爱<150?n.push("我虽然做了你的妃子，但是我还不想给你生孩子，男人生孩子本来就有悖天伦，还是赶紧打了吧。"):_.爱<350?n.push("唉，男人居然要做娘了，真不知是悲是喜。"):_.爱<600?n.push("这孩子以后在宫中肯定会多灾多难，皇上，答应我，一定要保护好这个孩子。"):n.push("皇上喜欢孩子吗？喜欢的话，不管多么痛苦，我也要给皇上多生几个。"):5e3<=_._code&&_._code<=5037||4e3<=_._code&&_._code<=4999&&1==_.性别?_.爱<150?n.push("天朝皇帝是因为孩子才来的吧，我想也是，其实孩子的娘是谁对你来说根本无所谓。"):_.爱<350?n.push("真是对这肚子里的孩子又爱又恨。"):_.爱<600?n.push("有了这孩子和皇上的怜爱，臣妾觉得心里踏实多了。"):n.push("皇上快听，这个小可爱在臣妾肚子里动呢。"):5038<=_._code&&_._code<=5999?(n.push("皇上终于来了，臣妾和孩子早早就盼着了。"),n.push("要是个男孩就要像皇上一样英武，要是个女孩……就……（脸红）"),n.push("臣妾现在身材不苗条，臣妾害怕皇上见了以后就不喜欢臣妾了。"),n.push("皇上看，这是臣妾给孩子做的小衣服，这是小裤子，还有鞋子……^_^")):6e3<=_._code&&_._code<=6999?(n.push("皇上，臣妾被宫里的宫人们照顾的很好，皇上放心吧。"),n.push("为了生这个孩子，臣妾都快吃成胖子了。"),n.push("我的孩儿啊，你的父皇来看你了呢。"),n.push("臣妾手笨，这小肚兜的花总是绣不好，最后还是请绣娘绣的。")):7e3<=_._code&&_._code<=7999&&(n.push("皇上终于来了，臣妾和孩子早早就盼着了。"),n.push("要是个男孩就要像皇上一样英武，要是个女孩……就……（脸红）"),n.push("臣妾现在身材不苗条，臣妾害怕皇上见了以后就不喜欢臣妾了。"),n.push("皇上看，这是臣妾给孩子做的小衣服，这是小裤子，还有鞋子……^_^")),id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){关闭后宫面板()}}else if("秀女"==_.位分)是否会怀孕呢(_),关闭后宫面板();else if(id("后宫对话框").style.display="block",null==_._code||2e3<=_._code&&_._code<=2999||5038<=_._code&&_._code<=5999||6e3<=_._code&&_._code<=6999&&1==_.性别||7e3<=_._code&&_._code<=7999||14e3<=_._code&&_._code<=14999||15e3<=_._code&&_._code<=16999){var e,l=random(15);if(14==l)300<_.爱&&0!==_.地位&&"秀女"!==_.位分?(id("出现后宫an1").style.display="block",id("后宫对话2").innerText="皇上，臣妾十分想念家里的双亲，请皇上准许臣妾回家省亲如何？",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="允诺",id("出现后宫an2").innerText="无视",id("出现后宫an1").onclick=function(){id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话2").innerText="谢皇上恩准，臣妾一定快去快回。",国家.金钱-=3e4,_.省亲=6,_.爱+=15,_.任性+=random(2)*_.野心/100,更新资料(),id("后宫对话框").onclick=function(){关闭后宫面板()}},id("出现后宫an2").onclick=function(){id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话2").innerText="皇上早些休息吧。",id("后宫对话框").onclick=function(){关闭后宫面板()}}):(id("后宫对话2").innerText="不知现在臣妾家里的双亲过得如何。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(13==l)_.清廉<80?(id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("后宫对话2").innerText="皇上，臣妾的这件衣服还是去年的款式呢，早就过时了，皇上能否下旨让内务府给臣妾新制一批衣服？",id("出现后宫an1").innerText="允诺",id("出现后宫an2").innerText="无视",id("出现后宫an1").onclick=function(){id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话2").innerText="谢皇上。\n臣妾必尽心尽力伺候皇上。",国家.金钱-=3e4,_.爱+=15,_.任性+=random(2)*_.野心/100,更新资料(),id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").onclick=function(){id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话2").innerText="皇上早些休息吧。",id("后宫对话框").onclick=function(){关闭后宫面板()}}):80<=_.清廉&&(id("后宫对话2").innerText="皇上，臣妾穿这件衣服好看吗。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(0==l)_.清廉<80?(id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("后宫对话2").innerText="皇上，宫里开支花销逐渐变大。能否赏赐些财物予臣妾呢。",id("出现后宫an1").innerText="允诺",id("出现后宫an1").onclick=function(){id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话2").innerText="谢皇上。\n臣妾必尽心尽力伺候皇上。",国家.金钱-=2e4,_.爱+=10,_.任性+=random(2)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="无视",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):80<=_.清廉&&(id("后宫对话2").innerText="皇上，宫里开支花销不应该过大，后宫应该做节俭的表率。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(1==l)_.清廉<80?(id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("后宫对话2").innerText="臣妾想着能更好的伺奉皇上。\n可是臣妾寝宫里奴婢不足。皇上能否下旨让内务府多派几个宫人来？",id("出现后宫an1").innerText="允诺",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="臣妾必尽心尽力伺候皇上。("+_.封号+_.位分+_.名字+"在宫中影响扩大)",_all_taijian.push({id:_all_taijian.length,"俸禄":100,"名称":"小"+太监名字字库[random(太监名字字库.length)]+"子","主子":_.id,"职务":0,"能力":1+random(3)}),_all_gongnv.push({id:_all_gongnv.length,"俸禄":100,"名称":宫女名字字库[random(宫女名字字库.length)]+宫女名字字库二[random(宫女名字字库二.length)],"主子":_.id,"职务":1,"能力":1+random(3)}),计算后宫开销(),_.爱+=20,_.任性+=random(2)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="无视",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):80<=_.清廉&&(id("后宫对话2").innerText="皇上，臣妾宫里不需要这么多人伺候，还是分给其他姐妹吧。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(2==l)30<_.野心&&(8==_.文化||20==_.文化||21==_.文化||22==_.文化||23==_.文化)?(e=null==_.家族?["舅舅","表哥","表弟","姑父","姨夫"]:["哥哥","弟弟","叔父","伯父"],t=e[random(e.length)],id("后宫对话2").innerText="皇上，臣妾的"+t+"在家乡只是一个小小芝麻官，不得重用，天子嫔妃的母家这样遭人嘲笑，岂不是给皇上丢脸吗。\n皇上能否让他来京城做官？",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="答应",id("出现后宫an1").onclick=function(){id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none";var n=创建新人才();void 0!==_.家族&&(n.家族=_.家族,n.名字=_.家族+只取名程序("男")),"哥哥"==t||"表哥"==t?n.年龄=_.年龄+random(5):"弟弟"==t||"表弟"==t?(n.年龄=_.年龄-random(5),n.年龄<16&&(n.年龄=_.年龄-1)):n.年龄=_.年龄+15+random(5),n.介绍=_.名字+"的"+t+"。";for(var i=0,e=[];i<所有历史名人.length;)_.家族==所有历史名人[i].家族&&null==所有历史名人[i].用过&&e.push(所有历史名人[i]),i++;0!==e.length&&1==random(3)&&(i=e[random(e.length)],让这个人才变成名人(n,i)),更改这个人的后宫相性(n,_.id),""==_.朝廷相性&&更改这个人的朝廷相性(_,n.id),_all_rencai.push(n),id("后宫对话2").innerText="臣妾必尽心尽力伺候皇上。(【"+n.名字+"】进入前朝。"+_.封号+_.位分+_.名字+"在宫中影响扩大)",_.爱+=80,_.任性+=random(3)*_.野心/100,更新资料(),id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="不妥",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):_.野心<=100&&(id("后宫对话2").innerText="皇上，前朝的事情臣妾本不该插嘴，但是皇上可不要任人唯亲啊。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(3==l)if(30<_.野心){for(var o=[],c=0;c<_all_rencai.length;)_all_rencai[c].后宫相性==_.id&&"无"==_all_rencai[c].爵位&&o.push(_all_rencai[c]),c+=1;var s=o[random(o.length)];0==o.length?(是否会怀孕呢(_),关闭后宫面板()):(id("后宫对话2").innerText="皇上，听闻"+s.名字+"大人勤勤恳恳，任劳任怨，却没有爵位，早有人为其抱不平了，皇上何不随便赏个爵位给他？",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="答应",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="皇上真是一代明君。("+_.封号+_.位分+_.名字+"在宫中影响扩大)",0==random(2)?s.爵位=1:s.爵位=2,_.爱+=40,_.任性+=random(4)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="不妥",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}})}else _.野心<=30&&(70<_.清廉?id("后宫对话2").innerText="皇上，有爵位的人太多，要影响财政支出了。":id("后宫对话2").innerText="皇上，多给功臣点赏赐，有助于稳定人心啊，不然大臣们都要怪皇上吝啬了。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(4==l)if(10<_.野心){var a=[],t=[];for(c=0;c<_all_child.length;)0==_all_child[c].性别&&_all_child[c].名称==_.皇嗣相性&&0==_all_child[c].状态?a.push(_all_child[c]):0==_all_child[c].性别&&16<=_all_child[c].年龄&&_all_child[c].名称!==_.皇嗣相性&&t.push(_all_child[c]),c+=1;var i=a[random(a.length)],p=t[random(t.length)];0==t.length||0==a.length?(是否会怀孕呢(_),关闭后宫面板()):((n=[]).push("要说还得是咱们皇子"+i.名称+"，学什么都一点就通，那聪明劲儿可是随了皇上了。"),n.push(i.名称+"最近读书可用功了，皇上可要重点培养啊。"),n.push("那天臣妾经过御书房，听见咱们"+i.名称+"皇子在背书呢。"),n.push("皇上，"+i.名称+"皇子最近又长高了，越来越有王者风范了。"),n.push("皇上，"+i.名称+"皇子长大了之后，皇上可要让他协理朝政啊。"),n.push(p.名称+"皇子对人说话很是嚣张无礼，皇上可要好好管管。"),n.push(p.名称+"皇子心机很深，听说已经在前朝结党了，皇上可要小心啊。"),n.push("听说"+p.名称+"皇子已经在府里招募私兵了，皇上可要小心啊。"),n.push("皇上，皇储的事情还可能有变数吗？"),id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()})}else _.野心<=10&&(id("后宫对话2").innerText="皇子们健康成长，希望能做到兄友弟恭吧。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(5==l)if(_.清廉<50){for(var u=[],c=1;c<_all_palace.length;){if(_all_palace[c].等级>_all_palace[_.宫殿].等级)for(d=0;d<5;)null==_all_palace[c].殿[d]&&u.push(_all_palace[c]),d++;c+=1}var r=u[random(u.length)];0==u.length?(是否会怀孕呢(_),关闭后宫面板()):(id("后宫对话2").innerText="皇上，臣妾宫殿狭小，也不够华丽，姐妹们都笑话臣妾这里寒酸，皇上给臣妾搬个更好的宫殿嘛~",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="允诺",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="皇上真好~臣妾觉得"+r.名称+"就挺好，皇上记得安排啊。("+_.封号+_.位分+_.名字+"在宫中影响扩大)",_.任性+=random(3)*_.野心/100,更新资料(),id("后宫对话框").onclick=function(){关闭后宫面板()},id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none"},id("出现后宫an2").innerText="无视",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="是臣妾惹恼了皇上吗。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}})}else _.清廉<80?(id("后宫对话2").innerText="臣妾真希望有个说贴心话的好姐妹。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):80<=_.清廉&&(id("后宫对话2").innerText="臣妾不喜欢奢华，太过喧闹，望皇上分个清静的地方给臣妾吧。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(6==l)300<_.任性&&0==random(2)?(id("后宫对话2").innerText="皇上多陪陪臣妾吧~臣妾好不容易逮到皇上，可不要这么快就撒手。皇上明日就别早朝了，就少去一次也没关系的。",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="答应",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="皇上对臣妾真好~~臣妾好爱皇上~~（亲亲）",_.爱+=50,_.任性+=20+random(3)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){游戏回合推进(0),是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="不妥",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="唔唔~~真没意思。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):(id("后宫对话2").innerText="皇上早点休息，明日还要早朝呢。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()});else if(7==l)n=[],_.统帅<30?n.push("那些远嫁的公主真可怜，成为大国之间的交易品。"):_.统帅<60?n.push("希望太平盛世持久一点，打仗什么的太劳民伤财。"):_.统帅<80?n.push("皇上可同意“战略大于战术”这句话。"):n.push("地方军的力量最好不要大于中央军，但又不能没有，所以军权分立是很好的办法。"),id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()};else if(8==l)n=[],_.武力<30?(n.push("要说有女子骑马射箭，天啊，简直是疯了，有男人会喜欢这样的女子吗。"),n.push("女子还是柔美一点的好，皇上说是吗。"),n.push("舞刀弄枪的女子，臣妾真是无法理解她们。")):_.武力<60?n.push("有柔弱的一面，也有坚强的一面，这样的千面女子皇上会更喜欢吧。"):_.武力<80?(n.push("臣妾习武只是为了防身，如果皇上不喜欢，臣妾绝不再练武。"),n.push("习武可以强身健体，没有什么比健康的身体更好的了。如果病怏怏的，怎么给皇家延绵子嗣。")):(n.push("臣妾的剑术貌似还不错，不如哪天陪皇上一起舞剑可好？"),n.push("如果不坚强，软弱给谁看？"),n.push("臣妾觉得后宫某些姐妹太过矫揉造作。不知皇上是否有同感。")),id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()};else if(9==l)70<_.智力?(0==(p=random(3))?h="臣妾最近喜欢上这首诗："+所有情诗[random(所有情诗.length)]:1==p?h=所有情诗[random(所有情诗.length)]+"每次听到这诗都特有感触。":2==p&&(h=所有情诗[random(所有情诗.length)]+"皇上喜欢这首诗么？"),id("后宫对话2").innerText=h):id("后宫对话2").innerText="见到皇上，臣妾真开心。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()};else if(10==l)n=[],_.政治<30?n.push("皇上若能多陪陪臣妾就好了。"):_.政治<60?n.push("前朝后宫一片祥和才是最大的幸事。"):_.政治<80?n.push("虽然后宫不可参政，但是臣妾愿意尽自己的力量帮助皇上。"):n.push("政治上的事情，皇上还需要多三思而行，臣妾认为人和大于天时地利。"),id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()};else if(11==l)n=[],_.清廉<30?(n.push("臣妾就喜欢听丝绸丝缎被撕开的声音，皇上多赏赐点给臣妾嘛。 "),n.push("皇上，内务府欺负臣妾，总是不按照臣妾的需要给东西。"),n.push("臣妾想吃荔枝，皇上赏赐点给臣妾好不好。"),n.push("臣妾觉得，宫里那么大，没个轿子，去哪里都不方便。 "),n.push("皇上，有人说臣妾是祸国妖妃，皇上可要为臣妾做主。")):_.清廉<60?(n.push("臣妾的首饰还不如宫里某些姐妹的一半多，皇上偏心。"),n.push("皇上，内务府欺负臣妾，总是不按照臣妾的需要给东西。"),n.push("臣妾这身衣服好看吗，皇上不是最喜欢臣妾穿这个颜色吗。"),n.push("皇上，但凡内务府有好的布匹，臣妾总是抢不到就被别的姐妹先拿走了，皇上给臣妾做主嘛。"),n.push("皇上多赏赐些东西可好？臣妾想把宫里装点得金碧辉煌，皇上看了也高兴嘛。")):_.清廉<80?(n.push("皇上许臣妾学习六宫事宜好不好，臣妾想为皇上分忧。"),n.push("有皇上的恩宠，臣妾在后宫也能站稳脚步了。"),n.push("没有背景，在后宫也是举步维艰。"),n.push("臣妾觉得，皇上是时候该大封六宫了。 ")):(n.push("臣妾不喜欢浓妆艳抹，妆容再好看，掩饰不住丑恶的内心。"),n.push("臣妾觉得，协理六宫的嫔妃必得是修养高的，可以帮助皇上节约后宫开支。 "),n.push("国库吃紧，后宫应当做节俭的表率。"),n.push("皇上，宫里的开销固然重要，但这些也都是从百姓手里征来的，还是不要乱花的好，否则失了民心就不好了。"),n.push("臣妾用不了那么多赏赐，还是分给其他姐妹们吧。"),n.push("皇上多去听听民间百姓的疾苦吧。")),id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()};else if(12==l){if(n=[],_.野心<30)n.push("后宫中阿谀奉承之人比比皆是，皇上恐怕也听腻了好话，不如臣妾说些逆耳忠言，皇上可愿意接受。"),n.push("皇上不要沉沦于美色，长期不上朝，会出乱子的。"),n.push("臣妾不求皇上专宠，只求一颗真心。两情若是久长时，又岂在朝朝暮暮。"),n.push("若到了臣妾年老色衰的那一年，皇上还爱臣妾吗。"),n.push("帝王家不可专宠，臣妾希望姐妹们都得皇上雨露，为皇家延绵子嗣。");else if(_.野心<60)n.push("臣妾能天天伺候皇上就好了。"),n.push("皇上还爱臣妾吗。"),n.push("家父寄来特产，皇上可以尝尝臣妾家乡的味道。"),n.push("臣妾最近研习书法，盼着皇上能来指点一二。"),n.push("臣妾最喜欢和皇上在一起。"),n.push("臣妾好开心。");else{var h,y=[];for(c=0;c<_all_feizi.length;)_all_feizi[c].名字!==_.名字&&_all_feizi[c].名字!==_.后宫相性&&_all_feizi[c].地位<_.地位&&y.push(_all_feizi[c]),c+=1;0==y.length?n.push("皇上好久没来看臣妾了，臣妾平日好寂寞。"):(h=y[random(y.length)],n.push(h.封号+h.位分+"姐姐嚣张跋扈，皇上您可要小心。"),n.push(h.封号+h.位分+"姐姐最近一直刁难臣妾，皇上要给臣妾做主。"),n.push(h.封号+h.位分+"姐姐最近的举动很反常，皇上可要提防。"),n.push(h.封号+h.位分+"姐姐身边的宫女让人很不舒服，不知道怎么调教奴才的。"),n.push(h.封号+h.位分+"姐姐有失体统，皇上得给点颜色瞧瞧。"))}id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}}}else{var f,k;1e3<=_._code&&_._code<=1999?(0==(l=random(5))||1==l?((f=[]).push("臣如能为皇上延续子嗣……"),f.push("臣表演一段剑舞，为皇上助兴。"),f.push("宫里的姐妹各个国色天香，臣压力很大。"),f.push("臣陪皇上对弈一局如何。"),f.push("皇上到底爱上了臣的哪一点？希望不是相貌，臣很怕年老色衰的那一天。"),f.push("皇上记得时常对京城的安全进行检查，否则会有刺客潜入宫中。")):2==l?((f=[]).push("臣有诗书为伴，皇上不用太过挂念。"),f.push("皇上该常去看看皇子公主们。 "),f.push("（低头弹着琴，无话。）  "),f.push("皇上和臣填词好不好。"),f.push("皇上，臣写了一幅字，皇上看看可有指点。"),f.push("皇上与臣今生的姻缘，是前世修来的缘分吧。")):3==l?((f=[]).push("皇上，别为朝政熬坏了身子。有些事交给臣来处理就行了，臣理应分担的。"),f.push("能侍奉皇上，是臣八辈子修来的福气。"),f.push("皇上可知道，臣看着皇上走进别的宫里的时候心里有多痛吗。"),f.push("皇上累了，龙体要紧，早点休息吧。")):4==l?((f=[]).push("木秀于林，风必摧之。"),f.push("此生此世，也不过只爱过一人。"),f.push("春有百花秋望月，夏有凉风冬听雪，晨有清逸，暮有闲悠，只是想不单单让卿一起看到了雪而已，只是想陪卿度过一个完整的四季。"),f.push("一生一代一双人,争叫两处销魂,相思相望不相亲,天为谁春。"),f.push("不愿清醒，宁愿一直沉迷地放纵。不知归路，宁愿一世无悔的追逐。"),f.push("吾爱，与时光同在。"),f.push("潇湘雪幕，倾采倾愁肠。春至楼空，曾忆荐琼觞。"),f.push("痴心易守，奈何真情难留。"),f.push("原来，只要……幸福过一次。只要一次，就再也忘不了了。"),f.push("开辟鸿蒙，谁为情种？都只为风月情浓。"),f.push("不愿清醒，宁愿一直沉迷地放纵。不知归路，宁愿一世无悔的追逐。"),f.push("只缘感君一回顾，使我思君朝与暮。")):((f=[]).push("人永远看不破的镜花水月，不过我指间烟云 世间千年,如我一瞬。"),f.push("山河拱手，为君一笑。"),f.push("我放下了尊严，放下了固执，都只是因为放不下你。"),f.push("所谓梦似烟花心似水，来和去，实也是虚。\n永远在一起好不好？"),f.push("卿也许永远也看不到我最寂寞时候的样子，因为只有卿不在身边的时候，我才最寂寞。"),f.push("与君歌一曲，请君为我侧耳听。"),f.push("钟鼓馔玉不足贵，但愿长醉不复醒。"),f.push("这是梦吗？如果是，我希望永远都不要醒来。"),f.push("一花一世界，一叶一追寻。一曲一场叹，一生为一人。"),f.push("听弦断，断那三千痴缠。坠花湮，湮没一朝风涟。花若怜，落在谁的指尖。")),id("后宫对话2").innerText=f[random(f.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):3e3==_._code?(id("后宫对话2").innerText=小花在后宫的话[random(小花在后宫的话.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):3001<=_._code&&_._code<=3999?5==(l=random(6))?300<_.爱?(id("后宫对话2").innerText="皇上，奴家十分想念家里的双亲，请皇上准许奴家回家省亲如何？",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="允诺",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="谢皇上恩准，奴家一定快去快回。",国家.金钱-=3e4,_.省亲=6,_.爱+=15,_.任性+=random(2)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="无视",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):(id("后宫对话2").innerText="不知现在家里的双亲过得如何。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):0==l?((n=[]).push("皇上会不会嫌弃奴家以前的出身不好。"),n.push("皇上喜欢戏，那奴家就陪皇上唱一段如何。"),n.push("奴家能碰到皇上，真是三生有幸。"),n.push("想起那些不论冰雪寒风都要坚持练习的日日夜夜，不禁伤感。"),n.push("奴家演的哪一个角色皇上最喜欢？"),n.push("皇上喜欢奴家柔软的身姿吗？这可是从自小练习的苦功得来的。"),id("后宫对话2").innerText=n[random(n.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):1==l?_.清廉<80?(id("后宫对话2").innerText="皇上，奴家想让家乡的亲戚生活过得好一点。能否赏赐些财物予奴家的家里人呢。",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="允诺",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="谢皇上。\n奴家必尽心尽力伺候皇上。",国家.金钱-=2e4,_.爱+=10,_.任性+=random(2)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="无视",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):80<=_.清廉&&(id("后宫对话2").innerText="皇上，奴家穷日子过惯了，一时间还真不适应锦衣玉食。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):2==l?30<_.野心?(e=null==_.家族?["舅舅","表哥","表弟","姑父","姨夫"]:["哥哥","弟弟","叔父","伯父"],t=e[random(e.length)],id("后宫对话2").innerText="皇上，奴家的"+t+"在家乡没有一官半职，经常遭人嘲笑，岂不是给皇上丢脸吗。\n皇上能否让他来京城做官？",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="答应",id("出现后宫an1").onclick=function(){var n=创建新人才();void 0!==_.家族&&(n.家族=_.家族,n.名字=_.家族+只取名程序("男")),"哥哥"==t||"表哥"==t?n.年龄=_.年龄+random(5):"弟弟"==t||"表弟"==t?(n.年龄=_.年龄-random(5),n.年龄<16&&(n.年龄=_.年龄-1)):n.年龄=_.年龄+15+random(5),n.介绍=_.名字+"的"+t+"。";for(var i=0,e=[];i<所有历史名人.length;)_.家族==所有历史名人[i].家族&&null==所有历史名人[i].用过&&e.push(所有历史名人[i]),i++;0!==e.length&&1==random(3)&&(i=e[random(e.length)],让这个人才变成名人(n,i)),更改这个人的后宫相性(n,_.id),""==_.朝廷相性&&更改这个人的朝廷相性(_,n.id),_all_rencai.push(n),id("后宫对话2").innerText="奴家必尽心尽力伺候皇上。(【"+n.名字+"】进入前朝。"+_.封号+_.位分+_.名字+"在宫中影响扩大)";n=创建新人才();void 0!==_.家族&&(n.家族=_.家族,n.名字=_.家族+只取名程序("男")),_.爱+=80,_.任性+=random(3)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="不妥",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):_.野心<=30&&(id("后宫对话2").innerText="皇上可不要任人唯亲啊。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):3==l?300<_.任性&&0==random(2)?(id("后宫对话2").innerText="皇上多陪陪奴家吧~奴家好不容易逮到皇上，想跟皇上吃酒唱戏到天明呢，早朝就少去一次吧。",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="答应",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="皇上对奴家真好~~",_.爱+=50,_.任性+=20+random(3)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){游戏回合推进(0),是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="不妥",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="哎……看来奴家在皇上心里还是轻于鸿毛。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):(id("后宫对话2").innerText="皇上早点休息，明日还要早朝呢。",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):(4==l?((k=[]).push("皇上，别为朝政熬坏了身子。"),k.push("能侍奉皇上，是奴家八辈子修来的福气。"),k.push("皇上可知道，奴家看着皇上走进别的宫里的时候心里有多痛吗。"),k.push("皇上累了，龙体要紧，早点休息吧。")):(k=[],_.爱<150?k.push("皇上到底是爱上了台下的奴家，还是爱上了台上的角色？"):_.爱<300?k.push("皇上能不顾旁人议论留奴家在宫中，已经很不容易了，奴家无以为报，只能尽心服侍皇上。"):_.爱<450?k.push("帝王家的爱能持续多久，会不会有一天，皇上得了新人，就忘记今日与奴家的情分？"):k.push("以前总认为身在梨园，一生得不到几颗真心，如今却得到了世间最宝贵的那一颗。")),id("后宫对话2").innerText=k[random(k.length)],id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):4e3<=_._code&&_._code<=4999&&0==_.性别?0==(l=random(6))?_.清廉<80?(id("后宫对话2").innerText="宫里给的月例也太少了，我这里完全不够用的，皇上多赏赐点财物吧。",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="允诺",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="谢皇上。",国家.金钱-=2e4,_.爱+=10,_.任性+=random(2)*_.野心/100,更新资料(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}},id("出现后宫an2").innerText="无视",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):80<=_.清廉&&(id("后宫对话2").innerText="这宫殿还是小了点，完全不能和我原来的府邸比啊……",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):(1==l?_.爱<150?id("后宫对话2").innerText="（全身瘫软无力，绝望的眼神）玩弄我很有意思吗？可恶，早晚有一天，我要杀了你。":_.爱<350?id("后宫对话2").innerText="唉？再来一次？皇上还是饶了我吧。":id("后宫对话2").innerText="皇上想吃什么？吃我吗？我好吃吗？":2==l?_.爱<150?id("后宫对话2").innerText="你这个疯子，我是男人！啊……\n（还挺敏感）":_.爱<350?id("后宫对话2").innerText="你能懂我的什么？你能明白我心里的苦楚吗。":id("后宫对话2").innerText="故乡……不知那里还有没有我认识的人。":3==l?_.爱<150?id("后宫对话2").innerText="满足了吗？那就赶紧走吧，我不想看见你。":_.爱<350?id("后宫对话2").innerText="皇上把我养在这深宫里，不会只拿我当一只金丝雀吧？我这只金丝雀可是会舞枪弄棒的。":id("后宫对话2").innerText="妃嫔和男宠住在一个宫里果然还是不太好……":4==l?_.爱<150?id("后宫对话2").innerText="想我堂堂七尺男儿，居然会委身于你，真是可悲啊。":_.爱<350?id("后宫对话2").innerText="以前在故地没觉得，现在终于明白原来宫里的嫔妃也不容易啊。":id("后宫对话2").innerText="虽然不想承认，但是见不到皇上还真是怪想的……":_.爱<150?id("后宫对话2").innerText="（咬唇）你要留下多少痕迹才肯罢休？":_.爱<350?id("后宫对话2").innerText="快睡吧，好累……。":id("后宫对话2").innerText="皇上若是愿意听，我就给皇上讲讲我从前的事吧……",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):(5e3<=_._code&&_._code<=5037||4e3<=_._code&&_._code<=4999&&1==_.性别)&&(0==(l=random(6))?_.清廉<80?(id("后宫对话2").innerText="宫里给的月例也太少了，我这里完全不够用的，皇上多赏赐点财物吧。",id("出现后宫an1").style.display="block",id("出现后宫an2").style.display="block",id("后宫对话框").onclick=function(){},id("出现后宫an1").innerText="允诺",id("出现后宫an1").onclick=function(){id("后宫对话2").innerText="谢皇上。",国家.金钱-=2e4,_.爱+=10,_.任性+=random(2)*_.野心/100,更新资料(),是否会怀孕呢(_),关闭后宫面板(),id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none"},id("出现后宫an2").innerText="无视",id("出现后宫an2").onclick=function(){id("后宫对话2").innerText="皇上早些休息吧。",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("后宫对话框").onclick=function(){关闭后宫面板()}}):80<=_.清廉&&(id("后宫对话2").innerText="这宫殿还是小了点……",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}):(1==l?_.爱<150?id("后宫对话2").innerText="不要以为我会因为你给了点小恩小惠就心存感激。":_.爱<350?id("后宫对话2").innerText="我不喜欢这里的规矩，条条框框的，不自由。好想念故乡的风情，还有热情的人民。":id("后宫对话2").innerText="皇上的情，臣妾此生不会忘记，臣妾愿意一生侍奉皇上。":2==l?_.爱<150?id("后宫对话2").innerText="我不畏死亡，只是恨……":_.爱<350?id("后宫对话2").innerText="我还是吃不惯中原的饭，不太合口味。":id("后宫对话2").innerText="故乡……不知那里还有没有我认识的人。":3==l?_.爱<150?id("后宫对话2").innerText="天朝皇帝，你就不怕我在你睡觉的时候刺杀你吗。":_.爱<350?id("后宫对话2").innerText="皇上不会是想把各个国家的美女都抢来做妃子吧……":id("后宫对话2").innerText="（音乐~~~~~）这是我们国家的民族音乐，好听吗？":4==l?_.爱<150?id("后宫对话2").innerText="只要我活着，就有希望，但我不会忘记今日的屈辱。":_.爱<350?id("后宫对话2").innerText="这里的气候……哎，有点水土不服。":id("后宫对话2").innerText="臣妾给皇上讲讲臣妾故乡的事情吧，希望能对皇上治理地方有所帮助。":_.爱<150?id("后宫对话2").innerText="不要过来……（跪在地上）求你放我回故乡吧。":_.爱<350?id("后宫对话2").innerText="我万没想到，最后我居然会委身于一个异国的男子。":id("后宫对话2").innerText="皇上若是愿意听，臣妾就给皇上讲讲臣妾小时候的事吧……",id("后宫对话框").onclick=function(){是否会怀孕呢(_),关闭后宫面板()}))}},id("出现背景").src=o}function 关闭后宫面板(n){id("hgdt").style.display="block",id("出现这位后宫").style.display="none",id("出现后宫an1").style.display="none",id("出现后宫an2").style.display="none",id("出现后宫an3").style.display="none",id("后宫对话板").style.display="block",id("属性栏").style.display="block",id("后宫对话框").style.display="none",1!==n&&(主角.当前时辰+=1,时辰推进())}