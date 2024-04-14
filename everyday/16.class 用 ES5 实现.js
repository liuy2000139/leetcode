// class 用 ES5 实现
function A(name) {
    this.name = name
}

A.prototype.say = function(word) {
    console.log(`${this.name} say ${word}!`)
}
A.prototype.run = function() {
    console.log('run!')
}


function B(name) {
    A.call(this, name)
    this.type = 'B'
}

B.prototype = new A()

B.prototype.run = function() {
    console.log(`${this.name} run!`)
}
B.prototype.self = function() {
    console.log(this.type)
}
B.prototype.constructor = B

const b = new B('bbbb')

b.say('1231232')
b.run()
b.self()