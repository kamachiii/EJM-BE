const n=(a="id",t="parentId",e,o="0")=>e.filter(r=>r[t]===o).map(r=>({...r,children:n(a,t,e,r[a])})),d=(a="id",t="parentId",e,o="0")=>e.filter(r=>r[t]===o).map(r=>({...r,children:d(a,t,e,r[a])}));export{d as a,n as b};
