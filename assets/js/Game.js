import Riddler from './Riddler.js';
import Player  from './Player.js';

export default class Game {
	constructor( digitsStr = '0123456789', codeLength = 4 ) {
		this.digits     = digitsStr.split( '' ).map( digits => +digits );
		this.codeLength = codeLength;
		this.$this      = $( '<game class="mastermind">' );
		this.render();
	}
	render() {
		this.buildGameBoard();
		this.eventHandlers();
	}
	start() {
		const riddler = new Riddler( this.digits, this.codeLength );
		const player  = new Player ( this.digits, this.codeLength );

		player.guess();
	}
	end() {
		alert( 'Game won!' );
	}
	buildGameBoard() {
		this.$this.html( `
			<h1>Mastermind</h1>
			<tries></tries>
			<panel>
				<button class="reset"  >Reset</button>
				<button class="restart">New Game</button>
			</panel>
		` );
		$( 'body' ).append( this.$this );
	}
	eventHandlers() {
		$( window ).on( 'win.game', this.end );
	}
}
