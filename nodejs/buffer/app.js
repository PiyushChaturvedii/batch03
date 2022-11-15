var buf = Buffer.alloc(20);
buf.write("hello");
console.log(buf);
console.log(buf.toString());

var buf2 = Buffer.from('Welcome');
console.log(buf2);
console.log(buf2.toJSON());