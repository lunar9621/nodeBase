class Animal{
    constructor(name){
 this.name=name;
    }
//静态方法(只能通过雷鸣调用，不能通过实力对象调用)
static showInfo(){
    console.log('hi');
}
    showName(){
        console.log(this.name);
    }
}
 let a= new Animal('spike');
a.showName();
Animal.showInfo();
//类的继承 extends
class Dog extends Animal{
    constructor(name,color){
        super(name);
        this.color=color;//super用来调用父类
    }

    showcolor(){
        console.log(this.color);
    }
}

let d=new Dog('doudou','yellow');
d.showName();
d.showcolor();
Dog.showInfo();//静态方法也可以继承

