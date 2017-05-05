          {
		name: "[Gen 7] BD Theorymon New",
		section: "BD Tiers",
		column: 2,

		mod: 'bdnew',
		searchShow: true,
		ruleset: ['[Gen 7] OU', 'BD Theorymon New Clause'],
     
		onSwitchIn: function (pokemon) {
		  let changed = {'Venusaur-Mega-X':true, 'Blastoise':true, 'Butterfree':true, 'Pikachu':true, 'Raichu':true, 'Golduck':true, 'Happiny':true, 'Blissey':true, 'Gyarados':true, 'Aerodactyl':true, 'Feraligatr-Mega':true, 'Sceptile':true};
		  let bt = pokemon.baseTemplate;
		  if (bt.baseSpecies in changed || (bt.actualSpecies && bt.actualSpecies in changed)) {
		    let types = bt.types;
		    let bTypes = (types.length === 1 || types[1] === 'caw') ? types[0] : types.join('/');
 		    this.add('-start', pokemon, 'typechange', bTypes, '[silent]');
		  }
		  if (bt.actualSpecies) this.add('-start', pokemon, bt.actualSpecies, '[silent]'); //Show the pokemon's actual species
		},
		onSwitchOut: function (pokemon) {
		  if (pokemon.baseTemplate.actualSpecies) this.add('-end', pokemon, pokemon.baseTemplate.actualSpecies, '[silent]');
		},
	},
