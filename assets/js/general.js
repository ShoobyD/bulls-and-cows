export const log = console.log.bind( console );

if ( !Array.prototype.randomElement ) {
	Array.prototype.randomElement = function () {
		return this[ Math.floor( Math.random() * this.length ) ]
	};
}

if ( !String.prototype.replaceAt ) {
	String.prototype.replaceAt = function( index, replacement ) {
		return this.substr( 0, index ) + replacement + this.substr( index + replacement.length );
	};
}
