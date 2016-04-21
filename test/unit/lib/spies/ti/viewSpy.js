module.exports = function() {
    return jasmine.createSpyObj('viewSpy', ['add', 'remove', "addEventListener", "removeEventListener"]);
};
