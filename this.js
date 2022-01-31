this.id = 'export';
console.log(this);

const testerObj = {
    func1: function() {
        console.log('func1', this);
    },
    func2: () => {
        console.log('func2', this);
    },
    func3: function() {
        console.log('func1', this);
    }.bind(this),
};

testerObj.func1();
testerObj.func2();
testerObj.func3();