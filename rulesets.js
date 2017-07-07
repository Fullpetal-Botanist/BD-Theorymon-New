	bdtheorymonnewclause: {
		effectType: 'Rule',
		name: 'BD Theorymon New Clause',
		onStart: function () {
			this.add('rule', 'BD Theorymon New Clause: A team has to have at least two Pokémon with BD Theorymon New modification');
		},
		onValidateTeam: function (team, format) {
			let BOTList = ['Silvally-Bug', 'Silvally-Dark', 'Silvally-Dragon', 'Silvally-Electric', 'Silvally-Fairy', 'Silvally-Fighting', 'Silvally-Fire', 'Silvally-Flying', 'Silvally-Ghost', 'Silvally-Ground', 'Silvally-Ice', 'Silvally-Poison', 'Silvally-Psychic', 'Silvally-Rock', 'Silvally-Steel', 'Silvally-Water', 'Silvally-Grass', 'Kommo-o', 'Incineroar', 'Primarina', 'Palossand', 'Golisopod', 'Silvally', 'Salazzle', 'Tsareena', 'Turtonator', 'Exeggutor-Alola', 'Golem-Alola', 'Wishiwashi', 'Necrozma', 'Raichu-Alola', 'Machamp', 'Golurk', 'Mismagius', 'Honchkrow', 'Bouffalant', 'Yanmega', 'Luxray', 'Torterra', 'Roserade', 'Shiinotic', 'Comfey', 'Zangoose', 'Zoroark', 'Cofagrigus', 'Drampa', 'Malamar', 'Gourgeist', 'Gourgeist-Small', 'Gourgeist-Super', 'Gourgeist-Large', 'Goodra', 'Meloetta', 'Oricorio', "Oricorio-Pa'u", 'Oricorio-Pom-Pom', 'Oricorio-Sensu'];
			let TMcount = 0;
			let MinNumberOfMon = 2;
			for (let i = 0; i < team.length; i++) {
				if (BOTList.indexOf(team[i].species)>=0)TMcount++;
			}
			if (TMcount < MinNumberOfMon) return ["You have less than 2 Pokémon with BD Theorymon New modification"];
		}
	},
	bdoutheorymonclause: {
		effectType: 'Rule',
		name: 'BD OU Theorymon Clause',
		onStart: function () {
			this.add('rule', 'BD OU Theorymon Clause: A team has to have at least two Pokémon with Gen 6 BD OU Theorymon modification');
		},
		onValidateTeam: function (team, format) {
			let BOTList = ['Blastoise', 'Pidgeot', 'Dugtrio', 'Marowak', 'Flareon', 'Omastar', 'Snorlax', 'Moltres', 'Meganium', 'Crobat', 'Ampharos', 'Sunflora', 'Granbull', 'Miltank', 'Entei', 'Aggron', 'Cacturne', 'Camerupt', 'Flygon', 'Zangoose', 'Seviper', 'Whiscash', 'Armaldo', 'Milotic', 'Banette', 'Glalie', 'Empoleon', 'Vespiquen', 'Floatzel', 'Honchkrow', 'Bronzong', 'Chatot', 'Lickilicky', 'Rhyperior', 'Electivire', 'Yanmega', 'Dusknoir', 'Froslass', 'Cresselia', 'Scolipede', 'Whimsicott', 'Krookodile', 'Darmanitan', 'Archeops', 'Cinccino', 'Escavalier', 'Klinklang', 'Chandelure', 'Haxorus', 'Accelgor', 'Kyurem', 'Meloetta', 'Chesnaught', 'Delphox', 'Pyroar', 'Pangoro', 'Doublade', 'Heliolisk', 'Goodra', 'Noivern'];
			let TMcount = 0;
			let MinNumberOfMon = 2;
			for (let i = 0; i < team.length; i++) {
				if (BOTList.indexOf(team[i].species)>=0)TMcount++;
			}
			if (TMcount < MinNumberOfMon) return ["You have less than 2 Pokémon with BD OU Theorymon modification"];
		}
	}
};
