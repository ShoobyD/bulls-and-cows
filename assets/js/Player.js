export default class Player {
	constructor( digits, codeLength ) {
		this.digits     = digits;
		this.codeLength = codeLength;
		this.options    = this.generateOptions();
	}
	generateOptions() {
		const digits  = this.digits;
		const options = new Set;
		populate( this.codeLength );
		return options;

		function populate( len, option = [] ) {
			if ( len ) {
				digits.forEach( digit => {
					const newOption = option.slice();
					newOption.push( digit );
					populate( len - 1, newOption );
				} );
			} else options.add( option );
		}
	}
	guess() {
	}
}
