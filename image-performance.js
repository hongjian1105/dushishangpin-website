(()=>{'use strict';
const saved=new WeakMap();
if(typeof slides!=='undefined')slides.forEach(s=>{saved.set(s,s.images.slice());s.images=s.images.map(src=>(window.siteThumbs||{})[src]||src);});
document.addEventListener('DOMContentLoaded',()=>{
 if(typeof slides==='undefined'||typeof items==='undefined')return;
 slides.forEach(s=>{if(saved.has(s))s.images=saved.get(s);});
 let selected='all',limit=9;
 const more=document.createElement('button');more.className='catalog-more';more.type='button';document.querySelector('#grid').after(more);
 function draw(){const grid=document.querySelector('#grid');grid.replaceChildren();const list=items.filter(x=>selected==='all'||x[2]===selected);list.slice(0,limit).forEach(([page,title,cat,desc])=>{const s=slides[page-1],b=document.createElement('button');b.className='card';b.setAttribute('aria-label','查看'+title);const original=s.images[0];const pic=document.createElement('div');pic.className='pic';if(original){const im=new Image();im.src=(window.siteThumbs||{})[original]||original;im.alt=title;im.loading='lazy';im.decoding='async';im.width=560;im.height=400;pic.append(im);}else{const label=document.createElement('p');label.textContent='定制产品系列';pic.append(label);}const info=document.createElement('div');info.className='info';const small=document.createElement('small');small.textContent=names[cat];const h=document.createElement('h3');h.textContent=title;const p=document.createElement('p');p.textContent=desc+' ↗';info.append(small,h,p);b.append(pic,info);b.onclick=()=>show(page);grid.append(b);});more.hidden=limit>=list.length;more.textContent='查看更多产品（'+Math.max(0,list.length-limit)+'） ↓';}
 render=function(filter='all'){selected=filter;limit=9;draw();};more.onclick=()=>{limit+=9;draw();};
 const originalShow=show;show=function(page){originalShow(page);document.querySelectorAll('#detail-body img').forEach((im,i)=>{im.decoding='async';if(i>0)im.loading='lazy';});};
 render(document.querySelector('[data-filter].active')?.dataset.filter||'all');
});
})();
