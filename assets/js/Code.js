import './general.js';

export default class Code {
	constructor() {
		if ( arguments.length === 1 ) {
			this.code = arguments[ 0 ];
		} else {
			const [ digits, codeLength ] = arguments;
			this.code = Array( codeLength ).fill().map( () => digits.randomElement() );
		}
	}
	hint( guess ) {
		let bulls = 0;
		let cows  = 0;
		this.code.forEach( ( digit, index ) => {
			if ( guess[ index ] === digit ) {
				bulls++;
				guess[ index ] = -1;
			}
		} );
		this.code.forEach( digit => {
			const index = guess.indexOf( digit );
			if ( index >= 0 ) {
				cows++;
				guess[ index ] = -1;
			}
		} );
		return [ bulls, cows ];
	}
}
