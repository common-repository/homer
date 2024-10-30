!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=178)}({125:function(e,t,n){"use strict";var o=wp.blockEditor.URLPopover,r=wp.components.Button;wp.i18n.__;t.a=function(e){var t=e.openPopup,n=e.anchor,a=e.name,l=e.onToggle;return wp.element.createElement(o,{className:"homer-popover",anchor:n,focusOnMount:!1,placement:"bottom"},wp.element.createElement("div",{className:"homer-popover-controls"},wp.element.createElement("span",{className:"homer-popover-title"},a),wp.element.createElement(r,{icon:"edit",className:"homer-button",onClick:t}),wp.element.createElement(r,{icon:"trash",className:"homer-button trash",onClick:l})))}},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(179),r=n(182),a=(n.n(r),n(183)),l=(n.n(a),wp.i18n.__),c=wp.richText.registerFormatType;window.homer.components.popover=!0,c(homer.name+"/popover",{title:l("Popover",homer.name),tagName:"span",className:"homer-popover",attributes:{text:"data-text",fz:"data-fz",style:"style"},edit:o.a})},179:function(e,t,n){"use strict";var o=n(180),r=n(181),a=n(125),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(o=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=wp.richText,m=p.toggleFormat,i=p.applyFormat,u=p.useAnchor,s=wp.element,f=s.Fragment,v=s.useState,h=s.useEffect,w=wp.i18n.__,b=homer.name+"/popover";t.a=function(e){var t=e.isActive,n=e.value,p=e.onChange,s=e.contentRef,d=e.activeAttributes,y=v(d.text?d.text:""),E=c(y,2),g=E[0],x=E[1],P=v(d.fz?d.fz:14),N=c(P,2),T=N[0],C=N[1],z=v(!1),_=c(z,2),k=_[0],O=_[1],A=u({editableContentElement:s.current,value:n,settings:{tagName:"span",className:"homer-popover",name:b}});h(function(){t&&d.text&&x(d.text),t&&d.fz&&C(d.fz)},[d]),h(function(){k&&(M(!0),S())},[g,T]);var j=function(){p(m(n,{type:b}))},F=function(){return O(!0)},S=function(){O(!1)},M=function(){p(i(n,{type:b,attributes:{text:g,fz:T.toString(),style:"--font-size: "+T+"px;"}}))};return wp.element.createElement(f,null,t?wp.element.createElement(f,null,wp.element.createElement(o.a,{onToggle:j,openPopup:F}),k?wp.element.createElement(r.a,{text:g,setText:x,fz:T,setFz:C,anchor:A,closePopup:S}):wp.element.createElement(a.a,l({onToggle:j,anchor:A,openPopup:F},{name:w("Popover",homer.name)}))):"")}},180:function(e,t,n){"use strict";var o=wp.blockEditor.BlockControls,r=wp.components,a=r.ToolbarGroup,l=r.ToolbarDropdownMenu,c=wp.i18n.__;t.a=function(e){var t=e.onToggle,n=e.openPopup;return wp.element.createElement("div",null,wp.element.createElement(o,null,wp.element.createElement(a,null,wp.element.createElement(l,{icon:homer.icons.popover,label:c("Popover",homer.name),className:"typewriter-toolbar-btn active",controls:[{title:c("Popover: Edit",homer.name),icon:"edit",onClick:n},{title:c("Popover: Remove",homer.name),icon:"trash",onClick:t}]}))))}},181:function(e,t,n){"use strict";var o=function(){function e(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(o=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=wp.blockEditor.URLPopover,a=wp.components,l=a.Button,c=a.TextareaControl,p=a.TextControl,m=wp.i18n.__,i=wp.element,u=i.useState;i.useEffect;t.a=function(e){var t=e.text,n=e.setText,a=e.fz,i=e.setFz,s=e.anchor,f=e.closePopup,v=u(t),h=o(v,2),w=h[0],b=h[1],d=u(a),y=o(d,2),E=y[0],g=y[1],x=u(!1),P=o(x,2),N=P[0],T=P[1],C=function(){n(w),i(E)},z=function(){b(t),g(a),f()};return wp.element.createElement(r,{className:"homer-popover",anchor:s,placement:"bottom-start",headerTitle:m("Customize Popover",homer.name)},wp.element.createElement("div",{className:"homer-popover-controls actions"},wp.element.createElement(l,{tabindex:-1,className:"homer-button apply",onClick:z},m("Cancel",homer.name)),wp.element.createElement(l,{disabled:!N,className:"homer-button apply",onClick:C},m("Apply changes",homer.name))),wp.element.createElement("div",{className:"homer-popover-controls"},wp.element.createElement(c,{label:"Popover content",value:w,rows:3,onChange:function(e){b(e),T(!0)}})),wp.element.createElement("br",null),wp.element.createElement("div",{className:"homer-popover-controls"},wp.element.createElement(p,{value:E,type:"number",min:1,className:"homer-popover-number",onChange:function(e){g(e),T(!0)},label:m("Font size",homer.name)})))}},182:function(e,t){},183:function(e,t){}});