import{S as h,i as _,s as g,e as o,j as v,c as u,a as d,m as k,d as i,b as c,f as m,o as j,x as A,u as p,v as y,K as f}from"../../../../../chunks/vendor-dd9689f8.js";import{L}from"../../../../../chunks/link-26f35d9e.js";/* empty css                                                               */function b(r){let t,s;return{c(){t=o("img"),this.h()},l(a){t=u(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(t,"class","Auto-img svelte-4mvj1o"),f(t.src,s=r[1])||c(t,"src",s),c(t,"alt",r[2])},m(a,e){m(a,t,e)},p(a,e){e&2&&!f(t.src,s=a[1])&&c(t,"src",s),e&4&&c(t,"alt",a[2])},d(a){a&&i(t)}}}function q(r){let t,s,a;return s=new L({props:{href:r[0],block:!0,ext:!0,$$slots:{default:[b]},$$scope:{ctx:r}}}),{c(){t=o("article"),v(s.$$.fragment),this.h()},l(e){t=u(e,"ARTICLE",{class:!0});var n=d(t);k(s.$$.fragment,n),n.forEach(i),this.h()},h(){c(t,"class","Auto svelte-4mvj1o")},m(e,n){m(e,t,n),j(s,t,null),a=!0},p(e,[n]){const l={};n&1&&(l.href=e[0]),n&14&&(l.$$scope={dirty:n,ctx:e}),s.$set(l)},i(e){a||(A(s.$$.fragment,e),a=!0)},o(e){p(s.$$.fragment,e),a=!1},d(e){e&&i(t),y(s)}}}function C(r,t,s){let{src:a=""}=t,{thm:e=""}=t,{alt:n=""}=t;return r.$$set=l=>{"src"in l&&s(0,a=l.src),"thm"in l&&s(1,e=l.thm),"alt"in l&&s(2,n=l.alt)},[a,e,n]}class w extends h{constructor(t){super();_(this,t,C,q,g,{src:0,thm:1,alt:2})}}export{w as default};