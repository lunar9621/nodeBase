/*
 buffer实际上就是字节数组
1 构造方法
2 静态方法
3 实例方法
*/
//实力化buffer对象
// let buf= new Buffer(5);//5个字节的buffer
// let buf=Buffer.alloc(5)//初始化为0
// let buf=Buffer.from('hello','ascii');//字符转化成十六进制

// let buf=Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);
// console.log(buf.toString());//buffer

//静态方法
// console.log(Buffer.isEncoding("utf-8"));

// let buf=Buffer.from("hello");
// Buffer.isBuffer(buf);

// let Buf=Buffer.from('中国');
// console.log(Buffer.byteLength(Buf));

// let buf1=Buffer.alloc(3);
// let buf2=Buffer.alloc(5);
// let buf3=Buffer.concat([buf1,buf2]);
// console.log(buf3.byteLength);


//实例方法
// let buf=Buffer.alloc(5);
// buf.write('hello',2);
// console.log(buf);

// let buf=Buffer.from("hello");
// let buf1=buf.slice(2,4);
// console.log(buf1.toString());

//toJson不需要显示调用把buffer对象转成对应的json字符串，在json.stringfy中默认调用
const buf=Buffer.from('hello');
const json=JSON.stringify(buf);
console.log(json);