(()=>{'use strict';
if(typeof items==='undefined'||typeof slides==='undefined'||typeof render!=='function')return;
const punk=items.find(p=>p[0]===36);if(punk){punk[1]='浮雕朋克风格充电宝';punk[3]='朋克浮雕 · 个性礼品';}
const removed=items.findIndex(p=>p[0]===37);if(removed>=0)items.splice(removed,1);
const data=[["花生充电宝", 5200, "peanut.webp", "花生造型 · 多彩设计", "以花生的圆润轮廓为灵感，搭配多种配色，让随身补电多一份趣味。适合创意礼赠、主题活动及个性化选品。", []], ["柠檬充电宝", 5600, "lemon.webp", "清新果形 · 趣味礼赠", "柠檬外形与表皮纹理搭配黄、绿配色，呈现清新的水果主题设计。图示配有挂绳，适合日常随身与创意礼赠场景。", ["lemon-spec.webp"]], ["草莓充电宝", 5600, "strawberry.webp", "草莓造型 · 缤纷配色", "以草莓轮廓、籽粒纹理和绿色叶片元素呈现鲜明的水果主题，搭配粉、黄、红等配色。适合趣味数码展示与节日礼赠。", ["strawberry-spec.webp"]], ["腾龙充电宝", 2600, "dragon.webp", "立体龙纹 · 工艺礼赠", "以立体盘龙纹样搭配柱形外观，呈现金、银及深色等多种金属色泽。适合国风工艺主题展示与商务礼赠选品。", ["dragon-spec.webp"]], ["蜜桃充电宝", 5200, "peach.webp", "蜜桃造型 · 渐变配色", "以圆润蜜桃造型搭配清新渐变配色，营造轻松活泼的视觉感受。适合个性数码选品、主题活动及创意礼赠。", ["peach-spec.webp"]]];
for(const [title,capacity,img,desc,body,more] of data){
 let item=items.find(p=>p[1]===title);
 if(!item){const page=slides.length+1;slides.push({page,text:'',images:[]});item=[page,title,'power',''];items.push(item);}
 item[3]=capacity+'mAh · '+desc;
 const detail=slides[item[0]-1];detail.text=title+'\n\n容量：'+capacity+'mAh\n\n'+body+'\n\n接口、功率及其他充电规格以实际产品资料为准。';detail.images=[img,...more].map(n=>'assets/new-power/'+n);
}
if(slides[35]?.text)slides[35].text=slides[35].text.replaceAll('浮雕生肖充电宝','浮雕朋克风格充电宝');
render(document.querySelector('[data-filter].active')?.dataset.filter||'all');
})();
