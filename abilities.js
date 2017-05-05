"use strict";

exports.BattleAbilities = {
	"watercompaction": {
		desc: "This Pokemon is immune to Water-type moves and raises its defense by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Water moves to itself to raise bulk by 1; Water immunity.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({def:1,spd:1})) {
					this.add('-immune', target, '[msg]', '[from] ability: Storm Drain');
				}
				return null;
			}
		},
		onAnyRedirectTarget: function (target, source, source2, move) {
			if (move.type !== 'Water' || move.id in {firepledge:1, grasspledge:1, waterpledge:1}) return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Storm Drain');
				}
				return this.effectData.target;
			}
		},
		id: "watercompaction",
		name: "Water Compaction",
		rating: 3.5,
		num: 114,
	},
	"schooling": {
		desc: "On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/10 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/10 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/10 its maximum HP at the end of the turn, it changes to School Form.",
		shortDesc: "If user is Wishiwashi, changes to School Form if it has > 1/10 max HP, else Solo Form.",
		onStart: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 10) {
				if (pokemon.template.speciesid === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
					this.add('-formechange', pokemon, 'Wishiwashi-School', '[from] ability: Schooling');
				}
			} else {
				if (pokemon.template.speciesid === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
					this.add('-formechange', pokemon, 'Wishiwashi', '[from] ability: Schooling');
				}
			}
		},
		onResidualOrder: 27,
		onResidual: function (pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.hp > pokemon.maxhp / 10) {
				if (pokemon.template.speciesid === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
					this.add('-formechange', pokemon, 'Wishiwashi-School', '[from] ability: Schooling');
				}
			} else {
				if (pokemon.template.speciesid === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
					this.add('-formechange', pokemon, 'Wishiwashi', '[from] ability: Schooling');
				}
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (!this.willMove(defender)) {
				this.debug('Analytic boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		id: "schooling",
		name: "Schooling",
		rating: 2.5,
		num: 208,
	},
	"prismarmor": {
		desc: "This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if (pokemon.hp && pokemon.status && this.random(2) === 0) {
				this.debug('prismarmor');
				this.add('-activate', pokemon, 'ability: Prism Armor');
				pokemon.cureStatus();
			}
		},
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug('Prism Armor neutralize');
				return this.chainModify(0.75);
			}
		},
		isUnbreakable: true,
		id: "prismarmor",
		name: "Prism Armor",
		rating: 3,
		num: 232,
	},
	"corrosion": {
		shortDesc: "This Pokemon can poison or badly poison other Pokemon regardless of their typing.",
		// Implemented in battle-engine.js:BattlePokemon#setStatus
		onModifyMovePriority: -5,
		onModifyMove: function (move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Poison'] = true;
			}
		},
		id: "corrosion",
		name: "Corrosion",
		rating: 2.5,
		num: 212,
	},
	"runaway": {
		shortDesc: "Summons Trick Room for 5 turns",
		onStart: function (source) {
				this.addPseudoWeather('trickroom');                   
		},
		id: "runaway",
		name: "Run Away",
		rating: 4,
		num: 50,
	},
};
