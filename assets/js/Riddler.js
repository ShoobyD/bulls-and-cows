import Code from './Code.js';
import { log } from './general.js';

export default class Riddler {
	constructor( digits, codeLength ) {
		this.digits     = digits;
		this.codeLength = codeLength;
		this.code       = new Code( digits, codeLength );
		log( '[Riddler] code:', this.code );
	}
	hint( guess ) {
		return this.code.hint( guess );
	}
}
