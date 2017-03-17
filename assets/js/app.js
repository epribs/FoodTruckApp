

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyARhhQ5mtrPId5Xx9pFDwHksWDtWg1A2VI",
    authDomain: "burt-macklin.firebaseapp.com",
    databaseURL: "https://burt-macklin.firebaseio.com",
    storageBucket: "burt-macklin.appspot.com",
    messagingSenderId: "610683434746"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  function log(snap) {console.log(snap.val());}
  function error(errObj) {console.log("Errors Handled: " + errObj);}
  database.ref().on("value", log);
  var resArray = [];
  var ftArray = [];
  var ftObj = {};
  database.ref().limitToLast(3).on("child_added", function(snapshot) {
  	if ((snapshot.child("name").exists()) && (snapshot.child("location").exists())) {
  		var ftName = snapshot.val().name;
  		var location = snapshot.val().location;
  		var foodType = snapshot.val().foodType;
  		var review = snapshot.val().review;
      var parking = snapshot.val().parking;

  		var newDiv = $("<div>");
  		var newName = $("<h1>");
  		var newLoc = $("<p>");
  		var newFood = $("<p>");
  		var newReview = $("<p>");
      var parkingHead = $("<p>Parking:</p>")
      var newPark = $("<ul>");
      

      for (var i = 0; i < parking.length; i++) {
        var newParkLi = $("<li>");
        var parkVal = parking[i];
        newParkLi.text(parkVal);
        newPark.append(newParkLi);
      }

  		newName.text(ftName);
  		newLoc.text("Location: " + location);
  		newFood.text("Food Type: " + foodType);
  		newReview.text("Review: " + review);

  		newDiv.append(newName, newLoc, newFood, newReview, parkingHead, newPark);
  		$("#ftAdded").prepend(newDiv);
    }
  });
  database.ref().on("child_added", function(snapshot) {
    if ((snapshot.child("name").exists()) && (snapshot.child("location").exists())) {
      var ftName = snapshot.val().name;
      var location = snapshot.val().location;
      var MapsKey = "AIzaSyD0CRQGmRk6jLGBMYoFJ32zsL4e07t_leA"
      var queryMapURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + ",+Austin,+TX&key=" + MapsKey;
      var j = 8;
      $.ajax({
        url:queryMapURL,
        method: "GET"
      }).done(function(response) {
        var lat = response.results[0].geometry.location.lat;
        var lng = response.results[0].geometry.location.lng;
        var loc = response.results[0].formatted_address;
        var foodTruck = new google.maps.LatLng(lat, lng);
        var newMarker = new google.maps.Marker({
          position: foodTruck,
          title: ftName,
          lable: j
        });
        function addInfoWindow(newMarker, content) {
          var InfoWindow = new google.maps.InfoWindow({
            content: ftName + "<br>" + loc
          });
          google.maps.event.addListener(newMarker, 'click', function() {
            InfoWindow.open(map, newMarker);
          });
        };
        addInfoWindow(newMarker);
        newMarker.setMap(map);
        j++;
      });
  	}
  }, function(err) {
  	console.log("The read failed: " + err.code);
  });

// $().on("click", 

// new Vue({
// 				  el: "#addTruck",
// 				  data: {
// 				    name: "",
// 				    loc: "",
// 				    review: "",
// 				    picked: ""
// 				  },
// 				  methods: {
// 				  	submit: function(ev) {
// 	ev.preventDefault();
// 	var ftName = $("#ftName").data().trim();
//   var location = $("#location").val().trim();
//  	var foodType = $("#").val().trim();
//   var review = $("#review").val().trim();

//   database.ref().push({
//   	name: ftName,
//   	location: location,
//   	foodType: foodType,
//   	review: review
//   });
// }
// 				  }
// 				})

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueFormGenerator=t():e.VueFormGenerator=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var n=t.slice(1),r=e[t[0]];return function(e,t,i){r.apply(this,[e,t,i].concat(n))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,n){"use strict";e.exports={component:n(1),schema:n(124),validators:n(130),abstractField:n(50).default,install:function(t){t.component("VueFormGenerator",e.exports.component)}}},function(e,t,n){n(2);var r=n(3)(n(4),n(123),null,null);e.exports=r.exports},function(e,t){},function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:i,exports:o,options:u}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(12),u=r(a),s=n(14),l=r(s),c=n(15),d=r(c),f=n(17),h=r(f),m={},p=n(46);(0,h.default)(p.keys(),function(e){var t=e.replace(/^\.\//,"").replace(/\.vue/,"");m[t]=p(e)}),t.default={components:m,props:{schema:Object,model:Object,options:{type:Object,default:function(){return{validateAfterLoad:!1,validateAfterChanged:!1}}},multiple:{type:Boolean,default:!1},isNewModel:{type:Boolean,default:!1}},data:function(){return{errors:[]}},computed:{fields:function(){var e=this,t=[];return this.schema&&(0,h.default)(this.schema.fields,function(n){e.multiple&&n.multi!==!0||t.push(n)}),t}},watch:{model:function(e,t){var n=this;t!=e&&null!=e&&this.$nextTick(function(){n.options.validateAfterLoad===!0&&n.isNewModel!==!0?n.validate():n.clearValidationErrors()})}},mounted:function(){var e=this;this.$nextTick(function(){e.model&&(e.options.validateAfterLoad===!0&&e.isNewModel!==!0?e.validate():e.clearValidationErrors())})},methods:{getFieldRowClasses:function(e){var t={error:this.fieldErrors(e).length>0,disabled:this.fieldDisabled(e),readonly:this.fieldReadonly(e),featured:this.fieldFeatured(e),required:this.fieldRequired(e)};return(0,u.default)(e.styleClasses)?(0,h.default)(e.styleClasses,function(e){return t[e]=!0}):(0,o.default)(e.styleClasses)&&(t[e.styleClasses]=!0),t["field-"+e.type]=!0,t},getFieldType:function(e){return"field-"+e.type},fieldDisabled:function(e){return(0,d.default)(e.disabled)?e.disabled.call(this,this.model,e,this):!(0,l.default)(e.disabled)&&e.disabled},fieldRequired:function(e){return(0,d.default)(e.required)?e.required.call(this,this.model,e,this):!(0,l.default)(e.required)&&e.required},fieldVisible:function(e){return(0,d.default)(e.visible)?e.visible.call(this,this.model,e,this):!!(0,l.default)(e.visible)||e.visible},fieldReadonly:function(e){return(0,d.default)(e.readonly)?e.readonly.call(this,this.model,e,this):!(0,l.default)(e.readonly)&&e.readonly},fieldFeatured:function(e){return(0,d.default)(e.featured)?e.featured.call(this,this.model,e,this):!(0,l.default)(e.featured)&&e.featured},onFieldValidated:function(e,t,n){var r=this;this.errors=this.errors.filter(function(e){return e.field!=n.schema}),!e&&t&&t.length>0&&t.forEach(function(e){r.errors.push({field:n.schema,error:e})});var i=0==this.errors.length;this.$emit("validated",i,this.errors)},validate:function(){var e=this;this.clearValidationErrors(),this.$children.forEach(function(t){if((0,d.default)(t.validate)){var n=t.validate(!0);n.forEach(function(n){e.errors.push({field:t.schema,error:n})})}});var t=0==this.errors.length;return this.$emit("validated",t,this.errors),t},clearValidationErrors:function(){this.errors.splice(0),(0,h.default)(this.$children,function(e){e.clearValidationErrors()})},modelUpdated:function(e,t){this.$emit("model-updated",e,t)},buttonVisibility:function(e){return e.buttons&&e.buttons.length>0},fieldErrors:function(e){var t=this.errors.filter(function(t){return t.field==e});return t.map(function(e){return e.error})}}}},function(e,t,n){function r(e){return"string"==typeof e||!o(e)&&a(e)&&i(e)==u}var i=n(6),o=n(12),a=n(13),u="[object String]";e.exports=r},function(e,t,n){function r(e){return null==e?void 0===e?s:u:l&&l in Object(e)?o(e):a(e)}var i=n(7),o=n(10),a=n(11),u="[object Null]",s="[object Undefined]",l=i?i.toStringTag:void 0;e.exports=r},function(e,t,n){var r=n(8),i=r.Symbol;e.exports=i},function(e,t,n){var r=n(9),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){function r(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var i=u.call(e);return r&&(t?e[s]=n:delete e[s]),i}var i=n(7),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,s=i?i.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return i.call(e)}var r=Object.prototype,i=r.toString;e.exports=n},function(e,t){var n=Array.isArray;e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t){function n(e){return null==e}e.exports=n},function(e,t,n){function r(e){if(!o(e))return!1;var t=i(e);return t==u||t==s||t==a||t==l}var i=n(6),o=n(16),a="[object AsyncFunction]",u="[object Function]",s="[object GeneratorFunction]",l="[object Proxy]";e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){e.exports=n(18)},function(e,t,n){function r(e,t){var n=u(e)?i:o;return n(e,a(t))}var i=n(19),o=n(20),a=n(44),u=n(12);e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}e.exports=n},function(e,t,n){var r=n(21),i=n(43),o=i(r);e.exports=o},function(e,t,n){function r(e,t){return e&&i(e,t,o)}var i=n(22),o=n(24);e.exports=r},function(e,t,n){var r=n(23),i=r();e.exports=i},function(e,t){function n(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),u=a.length;u--;){var s=a[e?u:++i];if(n(o[s],s,o)===!1)break}return t}}e.exports=n},function(e,t,n){function r(e){return a(e)?i(e):o(e)}var i=n(25),o=n(38),a=n(42);e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=!n&&o(e),c=!n&&!r&&u(e),f=!n&&!r&&!c&&l(e),h=n||r||c||f,m=h?i(e.length,String):[],p=m.length;for(var v in e)!t&&!d.call(e,v)||h&&("length"==v||c&&("offset"==v||"parent"==v)||f&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,p))||m.push(v);return m}var i=n(26),o=n(27),a=n(12),u=n(29),s=n(32),l=n(33),c=Object.prototype,d=c.hasOwnProperty;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t,n){var r=n(28),i=n(13),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(e){return i(e)&&a.call(e,"callee")&&!u.call(e,"callee")};e.exports=s},function(e,t,n){function r(e){return o(e)&&i(e)==a}var i=n(6),o=n(13),a="[object Arguments]";e.exports=r},function(e,t,n){(function(e){var r=n(8),i=n(31),o="object"==typeof t&&t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,u=a&&a.exports===o,s=u?r.Buffer:void 0,l=s?s.isBuffer:void 0,c=l||i;e.exports=c}).call(t,n(30)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t){function n(){return!1}e.exports=n},function(e,t){function n(e,t){return t=null==t?r:t,!!t&&("number"==typeof e||i.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,i=/^(?:0|[1-9]\d*)$/;e.exports=n},function(e,t,n){var r=n(34),i=n(36),o=n(37),a=o&&o.isTypedArray,u=a?i(a):r;e.exports=u},function(e,t,n){function r(e){return a(e)&&o(e.length)&&!!I[i(e)]}var i=n(6),o=n(35),a=n(13),u="[object Arguments]",s="[object Array]",l="[object Boolean]",c="[object Date]",d="[object Error]",f="[object Function]",h="[object Map]",m="[object Number]",p="[object Object]",v="[object RegExp]",b="[object Set]",y="[object String]",x="[object WeakMap]",g="[object ArrayBuffer]",_="[object DataView]",M="[object Float32Array]",j="[object Float64Array]",O="[object Int8Array]",C="[object Int16Array]",D="[object Int32Array]",w="[object Uint8Array]",F="[object Uint8ClampedArray]",Y="[object Uint16Array]",T="[object Uint32Array]",I={};I[M]=I[j]=I[O]=I[C]=I[D]=I[w]=I[F]=I[Y]=I[T]=!0,I[u]=I[s]=I[g]=I[l]=I[_]=I[c]=I[d]=I[f]=I[h]=I[m]=I[p]=I[v]=I[b]=I[y]=I[x]=!1,e.exports=r},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t,n){(function(e){var r=n(9),i="object"==typeof t&&t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=o&&o.exports===i,u=a&&r.process,s=function(){try{return u&&u.binding&&u.binding("util")}catch(e){}}();e.exports=s}).call(t,n(30)(e))},function(e,t,n){function r(e){if(!i(e))return o(e);var t=[];for(var n in Object(e))u.call(e,n)&&"constructor"!=n&&t.push(n);return t}var i=n(39),o=n(40),a=Object.prototype,u=a.hasOwnProperty;e.exports=r},function(e,t){function n(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||r;return e===n}var r=Object.prototype;e.exports=n},function(e,t,n){var r=n(41),i=r(Object.keys,Object);e.exports=i},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t,n){function r(e){return null!=e&&o(e.length)&&!i(e)}var i=n(15),o=n(35);e.exports=r},function(e,t,n){function r(e,t){return function(n,r){if(null==n)return n;if(!i(n))return e(n,r);for(var o=n.length,a=t?o:-1,u=Object(n);(t?a--:++a<o)&&r(u[a],a,u)!==!1;);return n}}var i=n(42);e.exports=r},function(e,t,n){function r(e){return"function"==typeof e?e:i}var i=n(45);e.exports=r},function(e,t){function n(e){return e}e.exports=n},function(e,t,n){function r(e){return n(i(e))}function i(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./fieldCheckbox.vue":47,"./fieldChecklist.vue":94,"./fieldInput.vue":98,"./fieldLabel.vue":103,"./fieldRadios.vue":107,"./fieldSelect.vue":111,"./fieldSubmit.vue":115,"./fieldTextArea.vue":119};r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=46},function(e,t,n){n(48);var r=n(3)(n(49),n(93),null,null);e.exports=r.exports},2,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(50),o=r(i);t.default={mixins:[o.default]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),o=r(i),a=n(5),u=r(a),s=n(15),l=r(s),c=n(17),d=r(c),f=n(51),h=r(f);t.default={props:["model","schema","disabled"],data:function(){return{errors:[]}},computed:{value:{cache:!1,get:function(){var e=void 0;return(0,l.default)(this.schema.get)?e=this.schema.get(this.model):this.model&&this.schema.model&&(e=(0,h.default)(this.model,this.schema.model)),(0,l.default)(this.formatValueToField)&&(e=this.formatValueToField(e)),e},set:function(e){var t=this.value;(0,l.default)(this.formatValueToModel)&&(e=this.formatValueToModel(e));var n=!1;(0,l.default)(this.schema.set)?(this.schema.set(this.model,e),n=!0):this.schema.model&&(this.setModelValueByPath(this.schema.model,e),n=!0),n&&(this.$emit("model-updated",e,this.schema.model),(0,l.default)(this.schema.onChanged)&&this.schema.onChanged.call(this,this.model,e,t,this.schema),this.$parent.options&&this.$parent.options.validateAfterChanged===!0&&this.validate())}}},methods:{validate:function(e){var t=this;this.clearValidationErrors(),this.schema.validator&&this.schema.readonly!==!0&&this.disabled!==!0&&!function(){var e=[];(0,o.default)(t.schema.validator)?(0,d.default)(t.schema.validator,function(n){e.push(n.bind(t))}):e.push(t.schema.validator.bind(t)),(0,d.default)(e,function(e){var n=e(t.value,t.schema,t.model);n&&((0,o.default)(n)?Array.prototype.push.apply(t.errors,n):(0,u.default)(n)&&t.errors.push(n))})}(),(0,l.default)(this.schema.onValidated)&&this.schema.onValidated.call(this,this.model,this.errors,this.schema);var n=0==this.errors.length;return e||this.$emit("validated",n,this.errors,this),this.errors},clearValidationErrors:function(){this.errors.splice(0)},setModelValueByPath:function(e,t){var n=e.replace(/\[(\w+)\]/g,".$1");n=n.replace(/^\./,"");for(var r=this.model,i=n.split("."),o=0,a=i.length;o<a;){var u=i[o];if(!(o<a-1))return void this.$root.$set(r,u,t);void 0!==r[u]?r=r[u]:(this.$root.$set(r,u,{}),r=r[u]),++o}}}}},function(e,t,n){function r(e,t,n){var r=null==e?void 0:i(e,t);return void 0===r?n:r}var i=n(52);e.exports=r},function(e,t,n){function r(e,t){t=i(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[o(t[n++])];return n&&n==r?e:void 0}var i=n(53),o=n(92);e.exports=r},function(e,t,n){function r(e,t){return i(e)?e:o(e,t)?[e]:a(u(e))}var i=n(12),o=n(54),a=n(56),u=n(89);e.exports=r},function(e,t,n){function r(e,t){if(i(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(u.test(e)||!a.test(e)||null!=t&&e in Object(t))}var i=n(12),o=n(55),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;e.exports=r},function(e,t,n){function r(e){return"symbol"==typeof e||o(e)&&i(e)==a}var i=n(6),o=n(13),a="[object Symbol]";e.exports=r},function(e,t,n){var r=n(57),i=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,u=r(function(e){var t=[];return i.test(e)&&t.push(""),e.replace(o,function(e,n,r,i){t.push(r?i.replace(a,"$1"):n||e)}),t});e.exports=u},function(e,t,n){function r(e){var t=i(e,function(e){return n.size===o&&n.clear(),e}),n=t.cache;return t}var i=n(58),o=500;e.exports=r},function(e,t,n){function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(o);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(r.Cache||i),n}var i=n(59),o="Expected a function";r.Cache=i,e.exports=r},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var i=n(60),o=n(83),a=n(86),u=n(87),s=n(88);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,e.exports=r},function(e,t,n){function r(){this.size=0,this.__data__={hash:new i,map:new(a||o),string:new i}}var i=n(61),o=n(74),a=n(82);e.exports=r},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var i=n(62),o=n(70),a=n(71),u=n(72),s=n(73);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,e.exports=r},function(e,t,n){function r(){this.__data__=i?i(null):{},this.size=0}var i=n(63);e.exports=r},function(e,t,n){var r=n(64),i=r(Object,"create");e.exports=i},function(e,t,n){function r(e,t){var n=o(e,t);return i(n)?n:void 0}var i=n(65),o=n(69);e.exports=r},function(e,t,n){function r(e){if(!a(e)||o(e))return!1;var t=i(e)?m:l;return t.test(u(e))}var i=n(15),o=n(66),a=n(16),u=n(68),s=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,c=Function.prototype,d=Object.prototype,f=c.toString,h=d.hasOwnProperty,m=RegExp("^"+f.call(h).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){return!!o&&o in e}var i=n(67),o=function(){var e=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t,n){var r=n(8),i=r["__core-js_shared__"];e.exports=i},function(e,t){function n(e){if(null!=e){try{return i.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,i=r.toString;e.exports=n},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},function(e,t,n){function r(e){var t=this.__data__;if(i){var n=t[e];return n===o?void 0:n}return u.call(t,e)?t[e]:void 0}var i=n(63),o="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){var t=this.__data__;return i?void 0!==t[e]:a.call(t,e)}var i=n(63),o=Object.prototype,a=o.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=i&&void 0===t?o:t,this}var i=n(63),o="__lodash_hash_undefined__";e.exports=r},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var i=n(75),o=n(76),a=n(79),u=n(80),s=n(81);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,e.exports=r},function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=i(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():a.call(t,n,1),--this.size,!0}var i=n(77),o=Array.prototype,a=o.splice;e.exports=r},function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(i(e[n][0],t))return n;return-1}var i=n(78);e.exports=r},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=i(t,e);return n<0?void 0:t[n][1]}var i=n(77);e.exports=r},function(e,t,n){function r(e){return i(this.__data__,e)>-1}var i=n(77);e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__,r=i(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var i=n(77);e.exports=r},function(e,t,n){var r=n(64),i=n(8),o=r(i,"Map");e.exports=o},function(e,t,n){function r(e){var t=i(this,e).delete(e);return this.size-=t?1:0,t}var i=n(84);e.exports=r},function(e,t,n){function r(e,t){var n=e.__data__;return i(t)?n["string"==typeof t?"string":"hash"]:n.map}var i=n(85);e.exports=r},function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},function(e,t,n){function r(e){return i(this,e).get(e)}var i=n(84);e.exports=r},function(e,t,n){function r(e){return i(this,e).has(e)}var i=n(84);e.exports=r},function(e,t,n){function r(e,t){var n=i(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var i=n(84);e.exports=r},function(e,t,n){function r(e){return null==e?"":i(e)}var i=n(90);e.exports=r},function(e,t,n){function r(e){if("string"==typeof e)return e;if(a(e))return o(e,r)+"";if(u(e))return c?c.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}var i=n(7),o=n(91),a=n(12),u=n(55),s=1/0,l=i?i.prototype:void 0,c=l?l.toString:void 0;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}e.exports=n},function(e,t,n){function r(e){if("string"==typeof e||i(e))return e;var t=e+"";return"0"==t&&1/e==-o?"-0":t}var i=n(55),o=1/0;e.exports=r},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"checkbox",autocomplete:e.schema.autocomplete,disabled:e.disabled,name:e.schema.inputName},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{click:function(t){var n=e.value,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);i?a<0&&(e.value=n.concat(o)):a>-1&&(e.value=n.slice(0,a).concat(n.slice(a+1)))}else e.value=i}}})},staticRenderFns:[]}},function(e,t,n){n(95);var r=n(3)(n(96),n(97),null,null);e.exports=r.exports},2,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),o=r(i),a=n(16),u=r(a),s=n(50),l=r(s);t.default={mixins:[l.default],data:function(){return{comboExpanded:!1}},computed:{items:function(){var e=this.schema.values;return"function"==typeof e?e.apply(this,[this.model,this.schema]):e},selectedCount:function(){return this.value?this.value.length:0}},methods:{getItemID:function(e){return(0,u.default)(e)&&e.id?e.id:e},getItemName:function(e){return(0,u.default)(e)&&e.name?e.name:e},getItemIsChecked:function(e){return this.value&&this.value.indexOf(this.getItemID(e))!=-1},onChanged:function(e,t){(0,o.default)(this.value)&&(this.value=[]),e.target.checked?this.value.push(this.getItemID(t)):this.value.splice(this.value.indexOf(this.getItemID(t)),1)},onExpandCombo:function(){this.comboExpanded=!this.comboExpanded}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[e.schema.listBox?n("div",{staticClass:"listbox form-control",attrs:{disabled:e.disabled}},e._l(e.items,function(t){return n("div",{staticClass:"list-row"},[n("label",[n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.getItemIsChecked(t)},on:{change:function(n){e.onChanged(n,t)}}}),e._v(e._s(e.getItemName(t)))])])})):e._e(),e.schema.listBox?e._e():n("div",{staticClass:"combobox form-control",attrs:{disabled:e.disabled}},[n("div",{staticClass:"mainRow",class:{expanded:e.comboExpanded},on:{click:e.onExpandCombo}},[n("div",{staticClass:"info"},[e._v(e._s(e.selectedCount)+" selected")]),n("div",{staticClass:"arrow"})]),n("div",{staticClass:"dropList"},e._l(e.items,function(t){return e.comboExpanded?n("div",{staticClass:"list-row"},[n("label",[n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.getItemIsChecked(t)},on:{change:function(n){e.onChanged(n,t)}}}),e._v(e._s(e.getItemName(t)))])]):e._e()}))])])},staticRenderFns:[]}},function(e,t,n){n(99);var r=n(3)(n(100),n(102),null,null);e.exports=r.exports},2,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(50),o=r(i),a=n(101),u=r(a);t.default={mixins:[o.default],methods:{formatValueToField:function(e){if(null!=e)switch(this.schema.inputType){case"date":return u.default.format(e,"YYYY-MM-DD");case"datetime":return u.default.format(e,"YYYY-MM-DD HH:mm:ss");case"datetime-local":return u.default.format(e,"YYYY-MM-DDTHH:mm:ss")}return e},formatValueToModel:function(e){if(null!=e)switch(this.schema.inputType){case"date":return u.default.parse(e,"YYYY-MM-DD");case"datetime":return u.default.parse(e,"YYYY-MM-DD HH:mm:ss");case"datetime-local":return u.default.parse(e,"YYYY-MM-DDTHH:mm:ss");case"number":return Number(e)}return e}}}},function(e,t,n){var r;!function(i){"use strict";function o(e,t){for(var n=[],r=0,i=e.length;r<i;r++)n.push(e[r].substr(0,t));return n}function a(e){return function(t,n,r){var i=r[e].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~i&&(t.month=i)}}function u(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var s={},l=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,c=/\d\d?/,d=/\d{3}/,f=/\d{4}/,h=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,m=/\[([^]*?)\]/gm,p=function(){},v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b=["January","February","March","April","May","June","July","August","September","October","November","December"],y=o(b,3),x=o(v,3);s.i18n={dayNamesShort:x,dayNames:v,monthNamesShort:y,monthNames:b,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!==10)*e%10]}};var g={D:function(e){return e.getDate()},DD:function(e){return u(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return u(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return u(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return String(e.getFullYear()).substr(2)},YYYY:function(e){return e.getFullYear()},h:function(e){return e.getHours()%12||12},hh:function(e){return u(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return u(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return u(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return u(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return u(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return u(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+u(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},_={D:[c,function(e,t){e.day=t}],Do:[new RegExp(c.source+h.source),function(e,t){e.day=parseInt(t,10)}],M:[c,function(e,t){e.month=t-1}],YY:[c,function(e,t){var n=new Date,r=+(""+n.getFullYear()).substr(0,2);e.year=""+(t>68?r-1:r)+t}],h:[c,function(e,t){e.hour=t}],m:[c,function(e,t){e.minute=t}],s:[c,function(e,t){e.second=t}],YYYY:[f,function(e,t){e.year=t}],S:[/\d/,function(e,t){e.millisecond=100*t}],SS:[/\d{2}/,function(e,t){e.millisecond=10*t}],SSS:[d,function(e,t){e.millisecond=t}],d:[c,p],ddd:[h,p],MMM:[h,a("monthNamesShort")],MMMM:[h,a("monthNames")],a:[h,function(e,t,n){var r=t.toLowerCase();r===n.amPm[0]?e.isPm=!1:r===n.amPm[1]&&(e.isPm=!0)}],ZZ:[/[\+\-]\d\d:?\d\d/,function(e,t){var n,r=(t+"").match(/([\+\-]|\d\d)/gi);r&&(n=+(60*r[1])+parseInt(r[2],10),e.timezoneOffset="+"===r[0]?n:-n)}]};_.dd=_.d,_.dddd=_.ddd,_.DD=_.D,_.mm=_.m,_.hh=_.H=_.HH=_.h,_.MM=_.M,_.ss=_.s,_.A=_.a,s.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},s.format=function(e,t,n){var r=n||s.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");t=s.masks[t]||t||s.masks.default;var i=[];return t=t.replace(m,function(e,t){return i.push(t),"??"}),t=t.replace(l,function(t){return t in g?g[t](e,r):t.slice(1,t.length-1)}),t.replace(/\?\?/g,function(){return i.shift()})},s.parse=function(e,t,n){var r=n||s.i18n;if("string"!=typeof t)throw new Error("Invalid format in fecha.parse");if(t=s.masks[t]||t,e.length>1e3)return!1;var i=!0,o={};if(t.replace(l,function(t){if(_[t]){var n=_[t],a=e.search(n[0]);~a?e.replace(n[0],function(t){return n[1](o,t,r),e=e.substr(a+t.length),t}):i=!1}return _[t]?"":t.slice(1,t.length-1)}),!i)return!1;var a=new Date;o.isPm===!0&&null!=o.hour&&12!==+o.hour?o.hour=+o.hour+12:o.isPm===!1&&12===+o.hour&&(o.hour=0);var u;return null!=o.timezoneOffset?(o.minute=+(o.minute||0)-+o.timezoneOffset,u=new Date(Date.UTC(o.year||a.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0))):u=new Date(o.year||a.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0),u},"undefined"!=typeof e&&e.exports?e.exports=s:(r=function(){return s}.call(t,n,t,e),!(void 0!==r&&(e.exports=r)))}(this)},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("input",{staticClass:"form-control",attrs:{type:e.schema.inputType,disabled:e.disabled,accept:e.schema.accept,alt:e.schema.alt,autocomplete:e.schema.autocomplete,dirname:e.schema.dirname,formaction:e.schema.formaction,formenctype:e.schema.formenctype,formmethod:e.schema.formmethod,formnovalidate:e.schema.formnovalidate,formtarget:e.schema.formtarget,height:e.schema.height,list:e.schema.list,max:e.schema.max,maxlength:e.schema.maxlength,min:e.schema.min,multiple:e.schema.multiple,name:e.schema.inputName,pattern:e.schema.pattern,placeholder:e.schema.placeholder,readonly:e.schema.readonly,required:e.schema.required,size:e.schema.size,src:e.schema.src,step:e.schema.step,width:e.schema.width,files:e.schema.files},domProps:{value:e.value,checked:e.schema.checked},on:{input:function(t){e.value=t.target.value}}}),"color"===e.schema.inputType||"range"===e.schema.inputType?n("span",{staticClass:"helper"},[e._v(e._s(e.value))]):e._e()])},staticRenderFns:[]}},function(e,t,n){n(104);var r=n(3)(n(105),n(106),null,null);e.exports=r.exports},2,49,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.value))])},staticRenderFns:[]}},function(e,t,n){n(108);var r=n(3)(n(109),n(110),null,null);e.exports=r.exports},2,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),o=r(i),a=n(50),u=r(a);t.default={mixins:[u.default],computed:{items:function(){var e=this.schema.values;return"function"==typeof e?e.apply(this,[this.model,this.schema]):e},id:function(){return this.schema.model}},methods:{onSelection:function(e){(0,o.default)(e)&&this.schema.radiosOptions.value&&e[this.schema.radiosOptions.value]?this.value=e[this.schema.radiosOptions.value]:this.value=e},getItemValue:function(e){return(0,o.default)(e)&&this.schema.radiosOptions.value&&e[this.schema.radiosOptions.value]?e[this.schema.radiosOptions.value]:e},getItemName:function(e){return(0,o.default)(e)&&this.schema.radiosOptions.name&&e[this.schema.radiosOptions.name]?e[this.schema.radiosOptions.name]:e},isItemChecked:function(e){var t=void 0;return t=(0,o.default)(e)&&this.schema.radiosOptions.value&&e[this.schema.radiosOptions.value]?e[this.schema.radiosOptions.value]:e,t===this.value}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"radio-list",attrs:{disabled:e.disabled}},e._l(e.items,function(t){return n("label",[n("input",{attrs:{type:"radio",disabled:e.disabled,name:e.id},domProps:{value:e.getItemValue(t),checked:e.isItemChecked(t)},on:{click:function(n){e.onSelection(t)}}}),e._v(e._s(e.getItemName(t)))])}))},staticRenderFns:[]}},function(e,t,n){n(112);var r=n(3)(n(113),n(114),null,null);e.exports=r.exports},2,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),o=r(i),a=n(50),u=r(a);t.default={mixins:[u.default],computed:{selectOptions:function(){return this.schema.selectOptions||{}},items:function(){var e=this.schema.values;return"function"==typeof e?e.apply(this,[this.model,this.schema]):e}},methods:{getItemID:function(e){return(0,o.default)(e)&&e.id?e.id:e},getItemName:function(e){return(0,o.default)(e)&&e.name?e.name:e}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{disabled:e.disabled,name:e.schema.inputName},on:{change:function(t){e.value=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t})[0]}}},[n("option",{attrs:{disabled:e.schema.required},domProps:{value:null,selected:void 0==e.value}},[e._v(e._s(e.selectOptions.noneSelectedText||"<Nothing selected>"))]),e._l(e.items,function(t){return n("option",{domProps:{value:e.getItemID(t)}},[e._v(e._s(e.getItemName(t)))])})],2)},staticRenderFns:[]}},function(e,t,n){n(116);var r=n(3)(n(117),n(118),null,null);e.exports=r.exports},2,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0
});var i=n(15),o=r(i),a=n(50),u=r(a);t.default={mixins:[u.default],methods:{click:function(){(this.schema.validateBeforeSubmit!==!0||this.$parent.validate())&&(0,o.default)(this.schema.onSubmit)&&this.schema.onSubmit(this.model,this.schema)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{attrs:{type:"submit",name:e.schema.inputName,disabled:e.disabled},domProps:{value:e.schema.buttonText},on:{click:e.click}})},staticRenderFns:[]}},function(e,t,n){n(120);var r=n(3)(n(121),n(122),null,null);e.exports=r.exports},2,49,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{disabled:e.disabled,maxlength:e.schema.max,minlength:e.schema.min,placeholder:e.schema.placeholder,readonly:e.schema.readonly,rows:e.schema.rows||2,name:e.schema.inputName},domProps:{value:e._s(e.value)},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[null!=e.schema?n("fieldset",{staticClass:"vue-form-generator"},[e._l(e.fields,function(t){return[e.fieldVisible(t)?n("div",{staticClass:"form-group",class:e.getFieldRowClasses(t)},[n("label",[e._v(e._s(t.label)),t.help?n("span",{staticClass:"help"},[n("i",{staticClass:"icon"}),n("div",{staticClass:"helpText",domProps:{innerHTML:e._s(t.help)}})]):e._e()]),n("div",{staticClass:"field-wrap"},[n(e.getFieldType(t),{tag:"component",attrs:{disabled:e.fieldDisabled(t),model:e.model,schema:t},on:{"model-updated":e.modelUpdated,validated:e.onFieldValidated}}),e.buttonVisibility(t)?n("div",{staticClass:"buttons"},e._l(t.buttons,function(r){return n("button",{class:r.classes,on:{click:function(n){r.onclick(e.model,t)}}},[e._v(e._s(r.label))])})):e._e()],1),t.hint?n("div",{staticClass:"hint"},[e._v(e._s(t.hint))]):e._e(),e.fieldErrors(t).length>0?n("div",{staticClass:"errors"},e._l(e.fieldErrors(t),function(t,r){return n("span",{attrs:{"track-by":"index"}},[e._v(e._s(t))])})):e._e()]):e._e()]})],2):e._e()])},staticRenderFns:[]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(17),o=r(i),a=n(125),u=r(a),s=n(51),l=r(s);e.exports.createDefaultObject=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.default)(e.fields,function(e){void 0===(0,l.default)(t,e.model)&&void 0!==e.default&&(0,u.default)(t,e.model,e.default)}),t},e.exports.getMultipleFields=function(e){var t=[];return(0,o.default)(e.fields,function(e){e.multi===!0&&t.push(e)}),t},e.exports.mergeMultiObjectFields=function(t,n){var r={},i=e.exports.getMultipleFields(t);return(0,o.default)(i,function(e){var t=void 0,i=!0,a=e.model;(0,o.default)(n,function(e){var n=(0,l.default)(e,a);i?(t=n,i=!1):t!=n&&(t=void 0)}),(0,u.default)(r,a,t)}),r}},function(e,t,n){function r(e,t,n){return null==e?e:i(e,t,n)}var i=n(126);e.exports=r},function(e,t,n){function r(e,t,n,r){if(!u(e))return e;t=o(t,e);for(var l=-1,c=t.length,d=c-1,f=e;null!=f&&++l<c;){var h=s(t[l]),m=n;if(l!=d){var p=f[h];m=r?r(p,h,f):void 0,void 0===m&&(m=u(p)?p:a(t[l+1])?[]:{})}i(f,h,m),f=f[h]}return e}var i=n(127),o=n(53),a=n(32),u=n(16),s=n(92);e.exports=r},function(e,t,n){function r(e,t,n){var r=e[t];u.call(e,t)&&o(r,n)&&(void 0!==n||t in e)||i(e,t,n)}var i=n(128),o=n(78),a=Object.prototype,u=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t,n){"__proto__"==t&&i?i(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var i=n(129);e.exports=r},function(e,t,n){var r=n(64),i=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return(0,h.default)(e)||""===e?t?[o(v.fieldIsRequired)]:[]:null}function o(e){if(null!=e&&arguments.length>1)for(var t=1;t<arguments.length;t++)e=e.replace(/\{\d+?\}/,arguments[t]);return e}var a=n(12),u=r(a),s=n(5),l=r(s),c=n(131),d=r(c),f=n(14),h=r(f),m=n(101),p=r(m),v={fieldIsRequired:"This field is required!",invalidFormat:"Invalid format!",numberTooSmall:"The number is too small! Minimum: {0}",numberTooBig:"The number is too big! Maximum: {0}",invalidNumber:"Invalid number",textTooSmall:"The length of text is too small! Current: {0}, Minimum: {1}",textTooBig:"The length of text is too big! Current: {0}, Maximum: {1}",thisNotText:"This is not a text!",thisNotArray:"This is not an array!",selectMinItems:"Select minimum {0} items!",selectMaxItems:"Select maximum {0} items!",invalidDate:"Invalid date!",dateIsEarly:"The date is too early! Current: {0}, Minimum: {1}",dateIsLate:"The date is too late! Current: {0}, Maximum: {1}",invalidEmail:"Invalid e-mail address!",invalidURL:"Invalid URL!",invalidCard:"Invalid card format!",invalidCardNumber:"Invalid card number!",invalidTextContainNumber:"Invalid text! Cannot contains numbers or special characters",invalidTextContainSpec:"Invalid text! Cannot contains special characters"};e.exports={resources:v,required:function(e,t){return i(e,t.required)},number:function(e,t){var n=i(e,t.required);if(null!=n)return n;var r=[];return(0,d.default)(e)?(!(0,h.default)(t.min)&&e<t.min&&r.push(o(v.numberTooSmall,t.min)),!(0,h.default)(t.max)&&e>t.max&&r.push(o(v.numberTooBig,t.max))):r.push(o(v.invalidNumber)),r},integer:function(e,t){var n=i(e,t.required);return null!=n?n:Number(e)!==e||e%1!==0?[o(v.invalidNumber)]:void 0},double:function(e,t){var n=i(e,t.required);return null!=n?n:Number(e)!==e||e%1===0?[o(v.invalidNumber)]:void 0},string:function(e,t){var n=i(e,t.required);if(null!=n)return n;var r=[];return(0,l.default)(e)?(!(0,h.default)(t.min)&&e.length<t.min&&r.push(o(v.textTooSmall,e.length,t.min)),!(0,h.default)(t.max)&&e.length>t.max&&r.push(o(v.textTooBig,e.length,t.max))):r.push(o(v.thisNotText)),r},array:function(e,t){if(t.required){if(!(0,u.default)(e))return[o(v.thisNotArray)];if(0==e.length)return[o(v.fieldIsRequired)]}if(!(0,h.default)(e)){if(!(0,h.default)(t.min)&&e.length<t.min)return[o(v.selectMinItems,t.min)];if(!(0,h.default)(t.max)&&e.length>t.max)return[o(v.selectMaxItems,t.max)]}},date:function(e,t){var n=i(e,t.required);if(null!=n)return n;var r=new Date(e);if(!r)return[o(v.invalidDate)];var a=[];if(!(0,h.default)(t.min)){var u=new Date(t.min);r.valueOf()<u.valueOf()&&a.push(o(v.dateIsEarly,p.default.format(r),p.default.format(u)))}if(!(0,h.default)(t.max)){var s=new Date(t.max);r.valueOf()>s.valueOf()&&a.push(o(v.dateIsLate,p.default.format(r),p.default.format(s)))}return a},regexp:function(e,t){var n=i(e,t.required);if(null!=n)return n;if(!(0,h.default)(t.pattern)){var r=new RegExp(t.pattern);if(!r.test(e))return[o(v.invalidFormat)]}},email:function(e,t){var n=i(e,t.required);if(null!=n)return n;var r=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r.test(e)?void 0:[o(v.invalidEmail)]},url:function(e,t){var n=i(e,t.required);if(null!=n)return n;var r=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g;return r.test(e)?void 0:[o(v.invalidURL)]},creditCard:function e(t,n){var r=i(t,n.required);if(null!=r)return r;var e=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,a=t.replace(/[^0-9]+/g,"");if(!e.test(a))return[o(v.invalidCard)];for(var u=0,s=void 0,l=void 0,c=void 0,d=a.length-1;d>=0;d--)s=a.substring(d,d+1),l=parseInt(s,10),c?(l*=2,u+=l>=10?l%10+1:l):u+=l,c=!c;return u%10===0&&a?void 0:[o(v.invalidCardNumber)]},alpha:function(e,t){var n=i(e,t.required);if(null!=n)return n;var r=/^[a-zA-Z]*$/;return r.test(e)?void 0:[o(v.invalidTextContainNumber)]},alphaNumeric:function(e,t){var n=i(e,t.required);if(null!=n)return n;var r=/^[a-zA-Z0-9]*$/;return r.test(e)?void 0:[o(v.invalidTextContainSpec)]}}},function(e,t,n){function r(e){return"number"==typeof e||o(e)&&i(e)==a}var i=n(6),o=n(13),a="[object Number]";e.exports=r}]))});

var vm = new Vue({
	el: "#addTruck",
	components: {
        "vue-form-generator": VueFormGenerator.component
    },
	data: {
		model: {
			name: "",
			location: "",
      parking: [],
			review: "",
			foodType: [],
		},
		schema: {
			fields: [{
				type: "input",
				inputType: "text",
				label: "Name",
				model: "name",
				featured: true,
				required: true,
				disabled: false,
        // validator: validators.string
			},{
				type: "input",
				inputType: "text",
				label: "Location",
				model: "location",
				required: true,
				hint: "123 Main St. Austin, TX 78704"
        
			}, {
				type: "textArea",
				label: "Review",
				model: "review",
				hint: "Max 500 characters",
				max: 500,
				rows: 3,
			},{
        type: "checklist",
        label: "Parking",
        model: "parking",
        listbox: true,
        values: ["Free Onsite", "Paid Onsite", "Free Street", "Paid Street", "None"]
      },{
				type: "radios",
				label: "Food Type",
				model: "foodType",
				required: true,
				values: ["Tacos", "Burgers", "Cupcakes", "Other"]
			},{
				type: "submit",
				buttonText: "Submit Your Truck",
				onSubmit: function(e) {
					e.preventDefault();
					var ftName = vm.$data.model.name;
				  var location = vm.$data.model.location;
          var parking = vm.$data.model.parking;
				 	var foodType = vm.$data.model.foodType;
          var review = vm.$data.model.review;

          
          // var nameRef = database.ref("users").orderByChild("time").key;
          //   console.log(nameRef);

          //var usersRef = nameRef.child("Test Name");
          //var existName = usersRef.isEqual(nameRef);
          // 
          // var existName = nameRef.isEqual(rootRef.ref());
          // console.log(existName);
				  
				// if ((ftName.isEqual(database.ref().child("name"))) && (location.isEqual(database.ref().child("location")))) {
				//   	return alert("That exists");
				//   } else {

				  database.ref().push({
				  	name: ftName,
				  	location: location,
            parking: parking,
				  	foodType: foodType,
				  	review: review,
				  	dateAdded: firebase.database.ServerValue.TIMESTAMP
				  });
				
          vm.$data.model = {
          name: "",
          location: "",
          parking: [],
          review: "",
          foodType: [],
          }

          //window.location.reload();
			  }
		  }]
    }
  }
});


var vueName = vm.$data.model.name;
var vueLoc = vm.$data.model.location;
var vueReview = vm.$data.model.review;
var vueFood = vm.$data.model.foodType;

var lunchBoxApi = "4203b508a2eb71331db0dffecb790d02"


    // Here we are building the URL we need to query the database
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
      "q=Austin&units=imperial&appid=" + lunchBoxApi;
    // var austinId = {"_id":4671654,"name":"Austin","country":"US","coord":{"lon":-97.743057,"lat":30.267151}}

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        
        // variables for current weather and the weather in three hours
        var currentTemp = response.list[3].main.temp;
        var currentPrecip = response.list[3].weather[0].description;
        var threeHourTemp = response.list[4].main.temp;
        var threeHourPrecip = response.list[4].weather[0].description;

         // Transfer content to HTML
        $("#city").html(response.city.name + " Lunch Time Weather:");
        $("#current").html("At 10am, it'll be " + Math.floor(currentTemp) + " degrees with " + currentPrecip + ".");
        $("#threeHR").html("By 1pm, it'll be " + Math.floor(threeHourTemp) + " degress with " + threeHourPrecip + ".");


        // console logging the returned weather information from openweathermap
        console.log(response.city.name);
        console.log("current weather: " + response.list[0].main.temp);
        console.log("rain: " + response.list[0].weather[0].description);
        console.log("3hr forecast: " + response.list[1].main.temp);
        console.log("rain: " + response.list[1].weather[0].description);

      });

