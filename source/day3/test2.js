var user1 object = {name: "john", age: 10, item: ['item1', 'item2']};
var user2 object = {name: "bbbb", age: 20, item: ['item1', 'item3']};
var user3 object = {name: "cccc", age: 30, item: ['item3', 'item4']};
var user4 object = {name: "dddd", age: 40, item: ['item1', 'item5']};

var users = [];
users.push(users1);
users.push(users2);
users.push(users3);
users.push(users4);

//users.pop()
//users.pop();


for(var i=0; i<users.length; i++) {

	if(users[i].name === 'aaaa'){
    console.log('이름은'+users[i]+.name"입니다.");
	console.log('나이는'+users[i]+.age"입니다.");
	console.log('아이템은'+users[i]+.item"입니다.");
	console.log('---------------------------------');
	break;

	}
	console.log('이름은'+users[i]+.name"입니다.");
	console.log('나이는'+users[i]+.age"입니다.");
	console.log('아이템은'+users[i]+.item"입니다.");
	console.log('---------------------------------');
	
}
