(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10cb5165"],{"00ff":function(t,s,e){},"048e":function(t,s,e){"use strict";var a=e("00ff"),i=e.n(a);i.a},"0dce":function(t,s,e){},"108b":function(t,s,e){},1158:function(t,s,e){},"51bb":function(t,s,e){"use strict";var a=e("bd81"),i=e.n(a);i.a},"59c0":function(t,s,e){},6655:function(t,s,e){"use strict";var a=e("59c0"),i=e.n(a);i.a},"6ab7":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"detail"}},[e("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{navClick:t.navClick}}),e("scroll",{ref:"scroll",staticClass:"content",attrs:{probeType:3,isShowBackTop:!0},on:{scroll:t.contentScroll}},[e("detail-swiper",{attrs:{"top-images":t.topImages}}),e("detail-base-info",{attrs:{goods:t.goods}}),e("detail-shop-info",{attrs:{shop:t.shop}}),e("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),e("detail-param-info",{ref:"param",attrs:{"param-info":t.paramInfo}}),e("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),e("goods-list",{ref:"recommend",attrs:{goods:t.recommends}})],1),e("detail-bottom-bar",{on:{addToCart:t.addToCart}})],1)},i=[],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav-bar",[a("div",{attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[a("img",{staticClass:"back",attrs:{src:e("7a74"),alt:""}})]),a("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(s,e){return a("div",{staticClass:"title-item",class:{active:e===t.currentIndex},on:{click:function(s){return t.itemClick(e)}}},[t._v(" "+t._s(s)+" ")])})),0)])},n=[],c=e("a7ac"),r={name:"DetailNavBar",components:{NavBar:c["a"]},data(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{itemClick(t){this.$emit("navClick",t)},backClick(){this.$router.back()}}},l=r,d=(e("910e"),e("2877")),f=Object(d["a"])(l,o,n,!1,null,"34404046",null),m=f.exports,u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("swiper",t._l(t.topImages,(function(t){return e("swiper-item",{staticClass:"swiper-item"},[e("img",{attrs:{src:t,alt:""}})])})),1)},p=[],v=e("dc2c"),h={name:"DetailSwiper",components:{Swiper:v["a"],SwiperItem:v["b"]},props:{topImages:{type:Array,default(){return[]}}}},_=h,C=(e("f89e"),Object(d["a"])(_,u,p,!1,null,"21235da2",null)),g=C.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goods).length?e("div",{staticClass:"base-info"},[e("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),e("div",{staticClass:"info-price"},[e("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),e("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?e("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),e("div",{staticClass:"info-other"},[e("span",[t._v(t._s(t.goods.columns[0]))]),e("span",[t._v(t._s(t.goods.columns[1]))]),e("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),e("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(s){return e("span",{key:s,staticClass:"info-service-item"},[e("img",{attrs:{src:t.goods.services[s].icon,alt:""}}),e("span",[t._v(t._s(t.goods.services[s].name))])])})),0)]):t._e()},I=[],k={name:"DetailBaseInfo",props:{goods:{type:Object}},data(){return{}}},O=k,y=(e("a0ea"),Object(d["a"])(O,b,I,!1,null,"ed1cb2a4",null)),$=y.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-info"},[e("div",{staticClass:"shop-top"},[e("img",{attrs:{src:t.shop.logo,alt:""}}),e("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),e("div",{staticClass:"shop-middle"},[e("div",{staticClass:"shop-middle-item shop-middle-left"},[e("div",{staticClass:"info-sells"},[e("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),e("div",{staticClass:"sells-text"},[t._v("总销量")])]),e("div",{staticClass:"info-goods"},[e("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),e("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),e("div",{staticClass:"shop-middle-item shop-middle-right"},[e("table",t._l(t.shop.score,(function(s,a){return e("tr",{key:a},[e("td",[t._v(t._s(s.name))]),e("td",{staticClass:"score",class:{"score-better":s.isBetter}},[t._v(t._s(s.score))]),e("td",{staticClass:"better",class:{"better-more":s.isBetter}},[e("span",[t._v(t._s(s.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},x=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-bottom"},[e("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],T={name:"DetailShopInfo",props:{shop:{type:Object,default(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}},j=T,D=(e("b2fd"),Object(d["a"])(j,w,x,!1,null,"4278bd9e",null)),E=D.exports,B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.detailInfo).length?e("div",{staticClass:"detail_info"},[e("div",{staticClass:"title"},[t._m(0),e("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),t._m(1),e("div",{staticClass:"look"},[t._v(t._s(t.detailInfo.detailImage[0].listkey))])]),e("div",{staticClass:"img"},t._l(t.detailInfo.detailImage[0].list,(function(s,a){return e("img",{key:a,attrs:{src:s},on:{load:t.imageLoad}})})),0)]):t._e()},L=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"start"},[e("div",{staticClass:"spot"}),e("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"end"},[e("div",{staticClass:"spot"}),e("div",{staticClass:"line"})])}],P={name:"DetailGoodsInfo",props:{detailInfo:{type:Object,default(){return{}}}},methods:{imageLoad(){this.$emit("imageLoad")}}},S=P,N=(e("6655"),Object(d["a"])(S,B,L,!1,null,"1a75b75e",null)),F=N.exports,G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.paramInfo).length?e("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(s,a){return e("table",{key:a,staticClass:"info-size"},t._l(s,(function(s,a){return e("tr",{key:a},t._l(s,(function(s,a){return e("td",{key:a},[t._v(t._s(s))])})),0)})),0)})),e("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(s,a){return e("tr",[e("td",{staticClass:"info-param-key"},[t._v(t._s(s.key))]),e("td",{staticClass:"param-value"},[t._v(t._s(s.value))])])})),0),0!==t.paramInfo.image.length?e("div",{staticClass:"info-img"},[e("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},M=[],z={name:"DetailParamInfo",props:{paramInfo:{type:Object,default(){return{}}}}},A=z,J=(e("d4f7"),Object(d["a"])(A,G,M,!1,null,"0ede45cb",null)),R=J.exports,U=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.commentInfo).length?e("div",{staticClass:"comment-info"},[t._m(0),e("div",{staticClass:"info-user"},[e("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),e("span",[t._v(t._s(t.commentInfo.user.uname))])]),e("div",{staticClass:"info-detail"},[e("p",[t._v(t._s(t.commentInfo.content))]),e("div",{staticClass:"info-other"},[e("span",{staticClass:"data"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),e("span",[t._v(t._s(t.commentInfo.style))])]),e("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,s){return e("img",{key:s,attrs:{src:t,alt:""}})})),0)])]):t._e()},V=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"info-header"},[e("div",{staticClass:"header-title"},[t._v("用户评价")]),e("div",{staticClass:"header-more"},[t._v(" 更多 "),e("i",{staticClass:"arrow-right"})])])}],X=e("90b9"),q={name:"DetailCommentInfo",props:{commentInfo:{type:Object,default(){return{}}}},filters:{showDate(t){const s=new Date(1e3*t);return Object(X["b"])(s,"yyyy-MM-dd")}}},H=q,K=(e("fc6f"),Object(d["a"])(H,U,V,!1,null,"7d26d274",null)),Q=K.exports,W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom-bar"},[t._m(0),e("div",{staticClass:"bar-item bar-right"},[e("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),e("div",{staticClass:"buy"},[t._v("购买")])])])},Y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bar-item bar-left"},[e("div",[e("i",{staticClass:"icon service"}),e("span",{staticClass:"text"},[t._v("客服")])]),e("div",[e("i",{staticClass:"icon shop"}),e("span",{staticClass:"text"},[t._v("店铺")])]),e("div",[e("i",{staticClass:"icon select"}),e("span",{staticClass:"text"},[t._v("收藏")])])])}],Z={name:"DetailBottomBar",methods:{addToCart(){this.$emit("addToCart")}}},tt=Z,st=(e("51bb"),Object(d["a"])(tt,W,Y,!1,null,"05021d6a",null)),et=st.exports,at=e("5d17"),it=e("6d71"),ot=e("1bab");function nt(t){return Object(ot["a"])({url:"/detail",params:{iid:t}})}function ct(){return Object(ot["a"])({url:"/recommend"})}class rt{constructor(t,s,e){this.title=t.title,this.desc=t.desc,this.newPrice=t.price,this.oldPrice=t.oldPrice,this.discount=t.discountDesc,this.columns=s,this.services=e,this.realPrice=t.lowNowPrice}}class lt{constructor(t,s){this.image=t.images?t.images[0]:"",this.infos=t.set,this.sizes=t.tables}}class dt{constructor(t){this.logo=t.shopLogo,this.name=t.name,this.fans=t.cFans,this.sells=t.cSells,this.score=t.score,this.goodsCount=t.cGoods}}var ft=e("aff8"),mt={name:"Detail",components:{DetailNavBar:m,DetailSwiper:g,DetailBaseInfo:$,DetailShopInfo:E,DetailGoodsInfo:F,DetailParamInfo:R,DetailCommentInfo:Q,DetailBottomBar:et,GoodsList:it["a"],Scroll:at["a"]},mixins:[ft["a"]],data(){return{iid:null,topImages:null,goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommends:[],compsOffsetTop:[],debounceImageLoad:null,currentIndex:0}},methods:{imageLoad(){this.debounceImageLoad()},navClick(t){this.$refs.scroll.scrollTo(0,-this.compsOffsetTop[t],500)},contentScroll(t){const s=-Math.floor(t.y);let e=this.compsOffsetTop.length;for(let a=0;a<e;a++)this.currentIndex!==a&&s>=this.compsOffsetTop[a]&&s<this.compsOffsetTop[a+1]&&(this.currentIndex=a,this.$refs.nav.currentIndex=a)},addToCart(){const t=[];t.image=this.topImages[0],t.title=this.goods.title,t.desc=this.goods.desc,t.price=this.goods.realPrice,t.iid=this.iid}},created(){this.iid=this.$route.params.iid,nt(this.iid).then(t=>{const s=t.result;this.topImages=s.itemInfo.topImages,this.goods=new rt(s.itemInfo,s.columns,s.shopInfo.services),this.shop=new dt(s.shopInfo),this.detailInfo=s.detailInfo,this.paramInfo=new lt(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(this.commentInfo=s.rate.list[0])}),ct().then(t=>{this.recommends=t.data.list}),this.debounceImageLoad=Object(X["a"])(()=>{this.$refs.scroll.refresh(),this.compsOffsetTop=[],this.compsOffsetTop.push(0),this.compsOffsetTop.push(this.$refs.param.$el.offsetTop),this.compsOffsetTop.push(this.$refs.comment.$el.offsetTop),this.compsOffsetTop.push(this.$refs.recommend.$el.offsetTop),this.compsOffsetTop.push(Number.MAX_VALUE)})}},ut=mt,pt=(e("048e"),Object(d["a"])(ut,a,i,!1,null,"9f24f088",null));s["default"]=pt.exports},"7a74":function(t,s,e){t.exports=e.p+"img/back.26df9036.svg"},"80e5":function(t,s,e){},"910e":function(t,s,e){"use strict";var a=e("80e5"),i=e.n(a);i.a},"9a7b":function(t,s,e){},a0ea:function(t,s,e){"use strict";var a=e("0dce"),i=e.n(a);i.a},b2fd:function(t,s,e){"use strict";var a=e("108b"),i=e.n(a);i.a},bd81:function(t,s,e){},d4f7:function(t,s,e){"use strict";var a=e("1158"),i=e.n(a);i.a},f89e:function(t,s,e){"use strict";var a=e("9a7b"),i=e.n(a);i.a},fc6f:function(t,s,e){"use strict";var a=e("ff24"),i=e.n(a);i.a},ff24:function(t,s,e){}}]);