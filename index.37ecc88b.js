import{h as y}from"./vendor.3f23e2d2.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}};M();const h=document.querySelector("#canvas"),c=h.getContext("2d"),g=[],i=h.width=innerWidth,f=h.height=innerHeight,m=20,v=2,d=new y.Howl({src:["loop-music-connection.mp3"],loop:!0}),w=new y.Howl({src:["glitch.mp3"],loop:!1}),p=new URL(location.href).searchParams.get("text");p&&(document.querySelector(".manz div").textContent=p);let u="monospace";const A=()=>{u=u==="monospace"?"Comic Sans MS":"monospace",document.querySelector(".manz div").classList.toggle("comic")},T=()=>{document.body.classList.add("moved"),document.body.classList.add("color"),setTimeout(()=>document.body.classList.remove("moved"),300),setTimeout(()=>document.body.classList.remove("color"),600)},a=()=>{const t=Array.from(Array(94)).map((r,s)=>String.fromCharCode(33+s)),n=Math.floor(Math.random()*t.length);return t[n]},H=()=>{const t=Math.floor(i/m)+1;for(let n=0;n<t*v;n++){const r=Math.floor(Math.random()*12)+15,s=Array.from(Array(r)).map(S=>a()),o=-1e3+-1*Math.floor(Math.random()*500),l=~~(Math.random()*20)===0?40:10+Math.random()*20;g.push({y:o,letters:s,speed:l})}d.play(),c.fillStyle="black",c.fillRect(0,0,i,f)},R=(t,n,r)=>{const s=n.length,o=["#0f01","#0f02","#0f05","#0f0f","#ffff"],C=t===s-1?o[4]:t===0?o[0]:t===1?o[1]:t===2?o[2]:o[3],L=r%4?"f":r%3?"6":"2";return C.split("").slice(0,-1).join("")+L},b=()=>{c.fillStyle="#000",c.fillRect(0,0,i,f),c.font=`18pt ${u}`,g.forEach((t,n)=>{t.letters.forEach((r,s,o)=>{const e=s===o.length-1;c.fillStyle=R(s,o,n),c.shadowColor="#2aa144",c.shadowOffsetX=0,c.shadowOffsetY=0,c.shadowBlur=10,e&&(r=a()),Math.floor(Math.random()*25)===0&&(r=a()),c.fillText(r,n*(m/v),50+t.y+s*m)}),t.y+=t.speed,t.y>f&&(t.y=-500,t.letters=Array.from(Array(t.letters.length)).map(r=>a()))})};H();setInterval(b,50);setInterval(()=>{T(),d.volume(0),setTimeout(()=>d.volume(1),500),w.play(),A()},12e3);