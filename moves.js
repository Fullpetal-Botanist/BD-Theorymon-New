'use strict';

exports.BattleMovedex = {
	"tropkick": {
		num: 688,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Attack by 1.",
		id: "tropkick",
		name: "Trop Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Grass",
		zMovePower: 140,
		contestType: "Cute",
	},
	"pulverizingpancake": {
		num: 701,
		accuracy: true,
		basePower: 190,
		category: "Physical",
		desc: "Bypasses Protection. Causes the target to have its positive evasiveness stat stage ignored while it is active. Normal- and Fighting-type attacks can hit the target if it is a Ghost type. The effect ends when the target is no longer active. Fails if the target is already affected, or affected by Miracle Eye or Odor Sleuth.",
		shortDesc: "Breaks Protect. Negates type immunity",
		id: "pulverizingpancake",
		name: "Pulverizing Pancake",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		breaksProtect: true,
		onEffectiveness: function (typeMod, type, move) {
			if (move.type !== 'Normal') return;
			let target = this.activeTarget;
			if (!target) return; // avoid crashing when called from a chat plugin
			// ignore effectiveness if the target is Ghost type and immune to Normal
			if (!target.runImmunity('Normal')) {
				if (target.hasType('Ghost')) return 0;
			}
		},
		volatileStatus: 'foresight',
		ignoreImmunity: {'Normal': true},
		ignoreAbility: true,
		isZ: "snorliumz",
		secondary: {
			chance: 50,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	"stokedsparksurfer": {
		num: 700,
		accuracy: true,
		basePower: 185,
		category: "Special",
		desc: "Has a 100% chance to paralyze the target. Summons Electric Terrain",
		shortDesc: "100% chance to paralyze the target. Summons Electric Terrain",
		id: "stokedsparksurfer",
		name: "Stoked Sparksurfer",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "aloraichiumz",
		secondary: {
			chance: 100,
			status: 'par',	
			chance: 100,
			self: {
				onHit: function () {
					this.setTerrain('electricterrain');
				},
			},			
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	"sparklingaria": {
		num: 664,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Heals the team of any status afflictions",
		shortDesc: "Deals damage. Heals the team",
		id: "sparklingaria",
		name: "Sparkling Aria",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onHit: function (pokemon, source) {
			this.add('-activate', source, 'move: Heal Bell');
			let side = pokemon.side.foe;
			for (let i = 0; i < side.pokemon.length; i++) {
				if (side.pokemon[i].hasAbility('soundproof')) continue;
				side.pokemon[i].cureStatus();
			}
		},
		secondary: {
			chance: 20,
			boosts: {
				atk: -1,
			}
		},
		target: "allAdjacent",
		type: "Water",
		zMovePower: 175,
		contestType: "Tough",
	},
	"shelltrap": {
		num: 704,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		id: "shelltrap",
		isViable: true,
		name: "Shell Trap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		secondary: {
			chance: 100,
			onHit: function (target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},			
                        self: {
                               heal: [1.5, 10],
                        },			
		},
		target: "normal",
		type: "Fire",
		zMovePower: 170,
		contestType: "Tough",
	},
};
