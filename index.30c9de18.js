import{h as p}from"./vendor.3f23e2d2.js";const C=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(o){if(o.ep)return;o.ep=!0;const e=n(o);fetch(o.href,e)}};C();const h=document.querySelector("#canvas"),c=h.getContext("2d"),y=[],a=h.width=innerWidth,f=h.height=innerHeight,m=20,g=2,d=new p.Howl({src:["loop-music-connection.mp3"],loop:!0}),L=new p.Howl({src:["glitch.mp3"],loop:!1});let u="monospace";const w=()=>{u=u==="monospace"?"Comic Sans MS":"monospace",document.querySelector(".manz div").classList.toggle("comic")},A=()=>{document.body.classList.add("moved"),document.body.classList.add("color"),setTimeout(()=>document.body.classList.remove("moved"),300),setTimeout(()=>document.body.classList.remove("color"),600)},i=()=>{const t=Array.from(Array(94)).map((n,r)=>String.fromCharCode(33+r)),s=Math.floor(Math.random()*t.length);return t[s]},T=()=>{const t=Math.floor(a/m)+1;for(let s=0;s<t*g;s++){const n=Math.floor(Math.random()*12)+15,r=Array.from(Array(n)).map(v=>i()),o=-1e3+-1*Math.floor(Math.random()*500),l=~~(Math.random()*20)===0?40:10+Math.random()*20;y.push({y:o,letters:r,speed:l})}d.play(),c.fillStyle="black",c.fillRect(0,0,a,f)},H=(t,s,n)=>{const r=s.length,o=["#0f01","#0f02","#0f05","#0f0f","#ffff"],S=t===r-1?o[4]:t===0?o[0]:t===1?o[1]:t===2?o[2]:o[3],M=n%4?"f":n%3?"6":"2";return S.split("").slice(0,-1).join("")+M},b=()=>{c.fillStyle="#000",c.fillRect(0,0,a,f),c.font=`18pt ${u}`,y.forEach((t,s)=>{t.letters.forEach((n,r,o)=>{const e=r===o.length-1;c.fillStyle=H(r,o,s),c.shadowColor="#2aa144",c.shadowOffsetX=0,c.shadowOffsetY=0,c.shadowBlur=10,e&&(n=i()),Math.floor(Math.random()*25)===0&&(n=i()),c.fillText(n,s*(m/g),50+t.y+r*m)}),t.y+=t.speed,t.y>f&&(t.y=-500,t.letters=Array.from(Array(t.letters.length)).map(n=>i()))})};T();setInterval(b,50);setInterval(()=>{A(),d.volume(0),setTimeout(()=>d.volume(1),500),L.play(),w()},12e3);
