// tile object constructor
var tile = function(title) {
	this.title = title;
};


// tile prototypes
tile.prototype.name = function() {
	console.log("saying my name");
	return this.title;
};
tile.prototype.setName = function(title) {
	this.title = title;
};

// define website link sub class
function webLink(title, href, descr) {
	tile.call(this, title);

	this.href = href;
	this.descr = descr;
};

// set webLink as object that inherits from tile class
webLink.prototype = Object.create(tile.prototype);

// set constructor as webLink function
webLink.prototype.constructor = webLink;

// webLink class prototypes
webLink.prototype.update = function(title, href, descr) {
	
}