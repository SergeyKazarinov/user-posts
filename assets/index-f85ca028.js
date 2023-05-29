import{r as l,P as y,j as e,c as u,u as h,a as cs,C,A as is,R as T,b as ds,D as V,d as ms,e as ps,f as k,s as b,g as us,h as hs,i as G,k as j,l as fs,m as xs,n as O,o as js}from"./index-9be9c478.js";import{P as gs,C as Cs,T as Fs,S as ys,E as Ns,d as $s}from"./ui-79d8a835.js";import"./Card-010d5ae0.js";function ks(s,t){return l.Children.toArray(s).some(o=>l.isValidElement(o)&&o.type===t)}const Rs={type:y.string,tooltip:y.bool,as:y.elementType},E=l.forwardRef(({as:s="div",className:t,type:o="valid",tooltip:a=!1,...n},r)=>e.jsx(s,{...n,ref:r,className:u(t,`${o}-${a?"tooltip":"feedback"}`)}));E.displayName="Feedback";E.propTypes=Rs;const D=E,ws=l.createContext({}),f=ws,K=l.forwardRef(({id:s,bsPrefix:t,className:o,type:a="checkbox",isValid:n=!1,isInvalid:r=!1,as:c="input",...m},p)=>{const{controlId:d}=l.useContext(f);return t=h(t,"form-check-input"),e.jsx(c,{...m,ref:p,type:a,id:s||d,className:u(o,t,n&&"is-valid",r&&"is-invalid")})});K.displayName="FormCheckInput";const U=K,W=l.forwardRef(({bsPrefix:s,className:t,htmlFor:o,...a},n)=>{const{controlId:r}=l.useContext(f);return s=h(s,"form-check-label"),e.jsx("label",{...a,ref:n,htmlFor:o||r,className:u(t,s)})});W.displayName="FormCheckLabel";const L=W,_=l.forwardRef(({id:s,bsPrefix:t,bsSwitchPrefix:o,inline:a=!1,reverse:n=!1,disabled:r=!1,isValid:c=!1,isInvalid:m=!1,feedbackTooltip:p=!1,feedback:d,feedbackType:x,className:i,style:R,title:w="",type:g="checkbox",label:I,children:v,as:os="input",...as},ns)=>{t=h(t,"form-check"),o=h(o,"form-switch");const{controlId:B}=l.useContext(f),rs=l.useMemo(()=>({controlId:s||B}),[B,s]),M=!v&&I!=null&&I!==!1||ks(v,L),ls=e.jsx(U,{...as,type:g==="switch"?"checkbox":g,ref:ns,isValid:c,isInvalid:m,disabled:r,as:os});return e.jsx(f.Provider,{value:rs,children:e.jsx("div",{style:R,className:u(i,M&&t,a&&`${t}-inline`,n&&`${t}-reverse`,g==="switch"&&o),children:v||e.jsxs(e.Fragment,{children:[ls,M&&e.jsx(L,{title:w,children:I}),d&&e.jsx(D,{type:x,tooltip:p,children:d})]})})})});_.displayName="FormCheck";const $=Object.assign(_,{Input:U,Label:L}),q=l.forwardRef(({bsPrefix:s,type:t,size:o,htmlSize:a,id:n,className:r,isValid:c=!1,isInvalid:m=!1,plaintext:p,readOnly:d,as:x="input",...i},R)=>{const{controlId:w}=l.useContext(f);s=h(s,"form-control");let g;return p?g={[`${s}-plaintext`]:!0}:g={[s]:!0,[`${s}-${o}`]:o},e.jsx(x,{...i,type:t,size:a,ref:R,readOnly:d,id:n||w,className:u(r,g,c&&"is-valid",m&&"is-invalid",t==="color"&&`${s}-color`)})});q.displayName="FormControl";const Is=Object.assign(q,{Feedback:D}),vs=cs("form-floating"),z=l.forwardRef(({controlId:s,as:t="div",...o},a)=>{const n=l.useMemo(()=>({controlId:s}),[s]);return e.jsx(f.Provider,{value:n,children:e.jsx(t,{...o,ref:a})})});z.displayName="FormGroup";const H=z,J=l.forwardRef(({as:s="label",bsPrefix:t,column:o=!1,visuallyHidden:a=!1,className:n,htmlFor:r,...c},m)=>{const{controlId:p}=l.useContext(f);t=h(t,"form-label");let d="col-form-label";typeof o=="string"&&(d=`${d} ${d}-${o}`);const x=u(n,t,a&&"visually-hidden",o&&d);return r=r||p,o?e.jsx(C,{ref:m,as:"label",className:x,htmlFor:r,...c}):e.jsx(s,{ref:m,className:x,htmlFor:r,...c})});J.displayName="FormLabel";const Ls=J,Q=l.forwardRef(({bsPrefix:s,className:t,id:o,...a},n)=>{const{controlId:r}=l.useContext(f);return s=h(s,"form-range"),e.jsx("input",{...a,type:"range",ref:n,className:u(t,s),id:o||r})});Q.displayName="FormRange";const Ss=Q,X=l.forwardRef(({bsPrefix:s,size:t,htmlSize:o,className:a,isValid:n=!1,isInvalid:r=!1,id:c,...m},p)=>{const{controlId:d}=l.useContext(f);return s=h(s,"form-select"),e.jsx("select",{...m,size:o,ref:p,className:u(a,s,t&&`${s}-${t}`,n&&"is-valid",r&&"is-invalid"),id:c||d})});X.displayName="FormSelect";const Ts=X,Y=l.forwardRef(({bsPrefix:s,className:t,as:o="small",muted:a,...n},r)=>(s=h(s,"form-text"),e.jsx(o,{...n,ref:r,className:u(t,s,a&&"text-muted")})));Y.displayName="FormText";const Es=Y,Z=l.forwardRef((s,t)=>e.jsx($,{...s,ref:t,type:"switch"}));Z.displayName="Switch";const Ps=Object.assign(Z,{Input:$.Input,Label:$.Label}),ss=l.forwardRef(({bsPrefix:s,className:t,children:o,controlId:a,label:n,...r},c)=>(s=h(s,"form-floating"),e.jsxs(H,{ref:c,className:u(t,s),controlId:a,...r,children:[o,e.jsx("label",{htmlFor:a,children:n})]})));ss.displayName="FloatingLabel";const es=ss,As={_ref:y.any,validated:y.bool,as:y.elementType},P=l.forwardRef(({className:s,validated:t,as:o="form",...a},n)=>e.jsx(o,{...a,ref:n,className:u(s,t&&"was-validated")}));P.displayName="Form";P.propTypes=As;const S=Object.assign(P,{Group:H,Control:Is,Floating:vs,Check:$,Switch:Ps,Label:Ls,Text:Es,Range:Ss,Select:Ts,FloatingLabel:es}),A=l.forwardRef(({active:s=!1,disabled:t=!1,className:o,style:a,activeLabel:n="(current)",children:r,...c},m)=>{const p=s||t?"span":is;return e.jsx("li",{ref:m,style:a,className:u(o,"page-item",{active:s,disabled:t}),children:e.jsxs(p,{className:"page-link",...c,children:[r,s&&n&&e.jsx("span",{className:"visually-hidden",children:n})]})})});A.displayName="PageItem";const Bs=A;function N(s,t,o=s){const a=l.forwardRef(({children:n,...r},c)=>e.jsxs(A,{...r,ref:c,children:[e.jsx("span",{"aria-hidden":"true",children:n||t}),e.jsx("span",{className:"visually-hidden",children:o})]}));return a.displayName=s,a}const Ms=N("First","«"),Vs=N("Prev","‹","Previous"),Os=N("Ellipsis","…","More"),bs=N("Next","›"),Gs=N("Last","»"),ts=l.forwardRef(({bsPrefix:s,className:t,size:o,...a},n)=>{const r=h(s,"pagination");return e.jsx("ul",{ref:n,...a,className:u(t,r,o&&`${r}-${o}`)})});ts.displayName="Pagination";const F=Object.assign(ts,{First:Ms,Prev:Vs,Ellipsis:Os,Item:Bs,Next:bs,Last:Gs}),Ds=({inputValue:s,onChange:t,onClick:o})=>e.jsxs(T,{className:"flex-row align-items-center",children:[e.jsx(C,{children:e.jsx(es,{controlId:"floatingInput",label:"Search Post",children:e.jsx(S.Control,{type:"text",placeholder:"Поиск",value:s,onChange:t})})}),e.jsx(C,{md:"auto",className:"p-0",children:e.jsx(ds,{onClick:o})})]}),Ks=({onClick:s})=>e.jsxs(T,{className:"flex-row align-items-center",children:[e.jsx(C,{md:"auto",className:"ps-5",children:e.jsx(S.Label,{htmlFor:"inputSort",children:"Сортировка"})}),e.jsx(C,{md:"auto",className:"p-0",children:e.jsxs(S.Select,{onChange:s,id:"inputSort","aria-label":"sort posts",defaultValue:V,children:[e.jsx("option",{value:V,children:"По умолчанию"}),e.jsx("option",{value:ms,children:"По возрастанию"}),e.jsx("option",{value:ps,children:"По убыванию"})]})})]}),Us=({array:s,activeNumber:t})=>{const o=k(),a=r=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,o(b(r))},n=Math.ceil(s.length/10);return e.jsx(e.Fragment,{children:n>1&&e.jsxs(F,{className:"flex-row justify-content-center mt-3",size:"lg",children:[t>2&&e.jsx(F.First,{onClick:()=>a(1)}),t>1&&e.jsx(F.Item,{onClick:()=>a(t-1),children:t-1},t-1),e.jsx(F.Item,{active:!!t,onClick:()=>a(t),children:t}),",",t<n&&e.jsx(F.Item,{onClick:()=>a(t+1),children:t+1},t+1),t<n-1&&e.jsx(F.Last,{onClick:()=>a(n)})]})})},Ws=()=>{const[s,t]=l.useState(""),o=k(),a=c=>{t(c),o(us(c)),o(b(1))},n=c=>{a(c.target.value)},r=()=>{a("")};return e.jsx(Ds,{inputValue:s,onChange:n,onClick:r})},_s=()=>{const s=k(),t=o=>{s(hs(o.target.value)),s(G(o.target.value))};return e.jsx(Ks,{onClick:t})},qs=()=>{const s=k(),t=j(i=>i.postsReducer.posts),o=j(i=>i.postsReducer.searchedPosts),a=j(i=>i.postsReducer.sortedPosts),n=j(i=>i.postsReducer.sortValue),r=j(i=>i.postsReducer.paginationNumber),c=j(i=>i.postsReducer.paginationPost),m=j(i=>i.commentReducer.comments),p=j(i=>i.postsReducer.postErrorMessage),d=async()=>{await $s(1e3),s(js())};l.useEffect(()=>(d(),()=>{s(fs([]))}),[]),l.useEffect(()=>{t.length&&s(xs(a,r))},[o,r,a,n,t,s]),l.useEffect(()=>{s(G(n))},[s,n,o]);const x=c.map(i=>e.jsx(gs,{item:i,commentButton:e.jsx(Cs,{postId:i.id,comments:m,commentButton:e.jsx(Fs,{eventKey:"0",children:"Comments"})})},i.id));return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsxs(T,{className:" mx-auto mt-3 flex-row align-items-center",children:[e.jsx(C,{children:e.jsx(Ws,{})}),e.jsx(C,{md:"auto",className:"p-2  ",children:e.jsx(_s,{})})]})}),p?e.jsx(Ns,{message:p}):t.length?x:e.jsx(O,{className:"text-center mt-5",children:e.jsx(ys,{animation:"border",variant:"primary"})}),e.jsx(Us,{array:o,activeNumber:r})]})},Qs=()=>e.jsx("section",{children:e.jsx(qs,{})});export{Qs as default};
