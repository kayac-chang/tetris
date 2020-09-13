(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{30:function(t,n,e){t.exports=e(45)},35:function(t,n,e){},45:function(t,n,e){"use strict";e.r(n);var r=e(28),o=e(3),i=e.n(o),c=e(26),a=e.n(c),u=(e(35),function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,57)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),r(t),o(t),i(t),c(t)}))}),l=e(6),f=e(29),s=e(11),d=e(46),v=Object(o.memo)((function(t){var n=t.init,e=Object(f.a)(t,["init"]);return i.a.createElement("canvas",{ref:function(t){return n(new s.a(Object(l.a)({view:t},e)))}})}),Object(d.a)(!0));var h=e(16);var p=function(t){return function(n,e,r){return Boolean(r)&&function(t){var n=t.px,e=t.py,r=t.width,o=t.height,i=t.fillColor,c=t.lineWidth,a=void 0===c?0:c,u=t.lineColor,l=void 0===u?16777215:u,f=new s.c;return f.lineStyle(a,l),f.beginFill(i),f.drawRect(0,0,r-a,o-a),f.endFill(),f.position.set(n*r,e*o),f}(Object(l.a)({px:n,py:e,fillColor:r},t))}};function b(t){var n=t.table,e=t.gridWidth,r=t.gridHeight,o=p({width:e,height:r}),i=new s.b;return i.addChild.apply(i,Object(h.a)(n.map((function(t,n){return t.map((function(t,e){return o(e,n,t)})).flat().filter(Boolean)})).flat())),i}var g=e(47);function y(t,n){return Array(t).fill(n)}function O(t,n,e){if(t<1||n<1)throw new Error("row and col should be large than 0.");return Array(t).fill([]).map((function(){return y(n,e)}))}var m=Object(g.a)((function(t,n){return n.map((function(n,e){return n.map((function(n,r){return t(n,[r,e])}))}))}));var j=e(48),w=e(55),E=e(49);function x(t){var n={gridWidth:40,gridHeight:40},e=new s.b;return function(r,o){var i,c=o.playfield,a=o.current;if(i=c,t.stage.removeChild(e),(e=b(Object(l.a)({table:m(Object(j.a)(Boolean,w.a,Object(d.a)(16777215)),i)},n))).position.set(t.screen.width/2,t.screen.height/2),e.pivot.set(e.width/2,e.height/2),t.stage.addChild(e),a){var u=b(Object(l.a)({table:m(Object(E.a)(Boolean,Object(d.a)(a.color)),a.blocks[a.rotate])},n));u.position.set(a.position.x*n.gridWidth,a.position.y*n.gridHeight),e.addChild(u)}return o}}function k(t,n){for(var e=[];n.length;)e.push(n.splice(0,t));return e}function L(t){for(var n=O(t.length,t[0].length,0),e=0;e<t.length;e++)for(var r=0;r<t[e].length;r++)n[r][t.length-1-e]=t[e][r];return n}function T(t,n){for(var e=["I","O"].includes(t)?4:3,r=[],o=0;o<4;o++){var i=k(e,n.toString(2).padStart(Math.pow(e,2),"0").split("").map(Number));0===o?r.push(i):r.push(L(r[o-1]))}return r}function F(t,n,e){return{type:t,color:n,blocks:T(t,e),rotate:0,lock:!1,position:{x:0,y:0},vector:{x:0,y:0}}}function S(){return function(t,n){var e,r;if(!n.current||(null===(e=n.current)||void 0===e?void 0:e.lock)){var o=function(t){if("I"===t)return F(t,61680,3840);if("J"===t)return F(t,240,312);if("L"===t)return F(t,15769600,120);if("O"===t)return F(t,15790080,1632);if("S"===t)return F(t,61440,240);if("T"===t)return F(t,10486e3,184);if("Z"===t)return F(t,15728640,408);throw new Error("Not support this tetromino type: ".concat(t))}((r=["I","J","L","O","S","T","Z"])[Math.floor(Math.random()*r.length)]);n.current=o}return n}}var C=e(52),H=e(56),I=e(50);function W(t,n){return e=0,r=t[0].length-1,e<=(o=n)&&o<=r;var e,r,o}function B(){return function(t,n){if(!n.current)return n;var e=n.playfield,r=n.current,o=function(t,n){var e=n.blocks,r=n.rotate,o=n.vector,i=n.position,c={block:!1,bottom:!1,border:!1,nudge:0};return e[r].forEach((function(n,e){n.forEach((function(n,r){var a;if(n){var u=i.x+o.x+r,l=i.y+o.y+e,f=null===t||void 0===t||null===(a=t[l])||void 0===a?void 0:a[u],s=l>t.length-1,d=!W(t,u);if(f&&(c.block=!0),s&&(c.bottom=!0),d){c.border=!0;var v=i.x+r;if(!W(t,v)){var h=t[0].length/2;c.nudge=i.x>h?-1:1}}}}))})),c}(e,r);if(o.border){var i=r.position;return Object.assign(r,{position:{x:i.x+o.nudge,y:i.y},vector:{x:0,y:0}}),n}if(o.bottom||o.block)return Object.assign(r,{lock:Object(C.a)(r.vector,{x:0,y:1}),vector:{x:0,y:0}}),n;var c=r.position,a=r.vector;return Object.assign(r,{position:Object(H.a)(I.a,c,a),vector:{x:0,y:0}}),n}}function N(t,n){var e=t;return function(r,o){return e<t?(e+=r,o):(e=0,n(r,o))}}var D,M=e(51),P=e(54),R=e(53),U=Object(M.a)(Object(P.a)(Boolean));function G(t){for(;t.length<20;)t=[y(10,0)].concat(Object(h.a)(t));return t}!function(t){t.UP="UP",t.DOWN="DOWN",t.LEFT="LEFT",t.RIGHT="RIGHT"}(D||(D={}));var J={w:D.UP,s:D.DOWN,a:D.LEFT,d:D.RIGHT};function A(){var t=function(t){var n=new Set;return window.addEventListener("keydown",(function(e){var r=e.key;t[r]&&n.add(t[r])})),window.addEventListener("keyup",(function(e){var r=e.key;t[r]&&n.delete(t[r])})),function(){return n}}(J);return function(n,e){if(!e.current)return e;var r=e.current,o=t();return o.has(D.LEFT)&&(r.vector.x=-1),o.has(D.RIGHT)&&(r.vector.x=1),o.has(D.DOWN)&&(r.vector.y=1),o.has(D.UP)&&(r.rotate=(r.rotate+1)%4),e}}function Z(t,n){(function(t,n){var e=t.ticker,r=[],o=function(t){n=t(e.deltaMS,n)};return e.add((function(){return r.forEach(o)})),{add:function(){return r.push.apply(r,arguments)}}})(t,{playfield:O(20,10,0),current:void 0,clearLines:[]}).add(N(100,A()),S(),N(1e3,(function(t,n){return n.current&&(n.current.vector.y=1),n})),B(),(function(t,n){if(!n.current||!n.current.lock)return n;var e=n.playfield,r=n.current,o=n.clearLines,i=r.blocks,c=r.rotate,a=r.position,u=r.color;i[c].forEach((function(t,n){t.forEach((function(t,r){t&&(e[n+a.y][r+a.x]=u)}))}));var f=Object(R.a)(U)(e),s=e.length-f.length;return Object(l.a)({},n,{playfield:G(f),clearLines:s?[].concat(Object(h.a)(o),[s]):o})}),x(t),function(t){return function(n,e){var r,o=e.clearLines;return t({score:(r=o,r.reduce((function(t,n){var e=t.scores,r=t.totalLines;return{scores:e+[0,40,100,300,1200][n]*(Math.floor(r/10)+1),totalLines:r+n}}),{scores:0,totalLines:0}).scores)}),e}}(n))}function q(t){var n=t.score;return i.a.createElement("h5",{style:{margin:"".concat(16,"px")}},"Scores: ",n)}function z(t){var n=t.score;return i.a.createElement("div",{id:"HUD",ref:function(t){if(t){var n=t.parentNode,e=n.offsetWidth,r=n.offsetHeight;t.style.width="".concat(e,"px"),t.style.height="".concat(r,"px")}}},i.a.createElement(q,{score:n}))}var K={width:900,height:1200};function Q(){var t=Object(o.useState)({score:0}),n=Object(r.a)(t,2),e=n[0],c=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,Object.assign({init:function(t){return Z(t,c)}},K)),i.a.createElement(z,e))}a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Q,null)),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.f6a847c3.chunk.js.map