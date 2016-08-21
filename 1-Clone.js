//1.实现一个函数clone,
//可以对Js中5种主要的数据类型(Number,String,Boolean,Null,Object[Array,Function])进行复制。
//判断类型还可以使用 typeof 和 instanceof
//但是以上两种对 var b = 1 ;和 var b = new Number(1) 给出的结果分别是 'number' 和 'object'


function clone(obj){
	if(obj === 'undefined') return;
	if(obj === null) return null;
	var type = Object.prototype.toString.apply(obj);
	if(type === '[object Array]'){
		var cpArray = [];
		for(var i in obj){
			cpArray.push(arguments.callee(obj[i]));
		}
		return cpArray;
	}else if(type === '[object Object]'){
		var cpObject = {};
		for(var i in obj){
			cpObject[i] = arguments.callee(obj[i]);
		}
		return cpObject;
	}else{
		return obj;
	}
}
//测试用例
var test = [{x:1},[2,{y:3}]];
clone(test);