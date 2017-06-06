var user = {
	insert: 'INSERT INTO silder(id, title, url) VALUES(0,?,?)',
	update: 'update user set name=?, age=? where id=?',
	delete: 'delete from silder where id=?',
	queryById: 'select * from user where id=?',
	queryAll: 'select * from silder'
};

module.exports = user;