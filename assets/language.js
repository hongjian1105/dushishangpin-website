(()=>{
 const link=document.querySelector('[data-language-switch]');if(!link)return;
 function sync(){const url=new URL(link.getAttribute('href'),location.href);url.hash=location.hash;link.href=url.href}
 sync();window.addEventListener('hashchange',sync);
 link.addEventListener('click',()=>{try{localStorage.setItem('focux-language',link.dataset.languageSwitch)}catch{}});
})();
