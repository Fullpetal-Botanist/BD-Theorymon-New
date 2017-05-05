	bdtheorymonnewclause: {
		effectType: 'Rule',
		name: 'BD Theorymon New Clause',
		onStart: function () {
			this.add('rule', 'BD Theorymon New Clause: A team has to have at least two Pokémon with BD Theorymon New modification');
		},
		onValidateTeam: function (team, format) {
			let BOTList = ['Silvally-Bug', 'Silvally-Dark', 'Silvally-Dragon', 'Silvally-Electric', 'Silvally-Fairy', 'Silvally-Fighting', 'Silvally-Fire', 'Silvally-Flying', 'Silvally-Ghost', 'Silvally-Ground', 'Silvally-Ice', 'Silvally-Poison', 'Silvally-Psychic', 'Silvally-Rock', 'Silvally-Steel', 'Silvally-Water', 'Silvally-Grass', 'Kommo-o', 'Incineroar', 'Primarina', 'Palossand', 'Golisopod', 'Silvally', 'Salazzle', 'Tsareena', 'Turtonator', 'Exeggutor-Alola', 'Golem-Alola', 'Wishiwashi', 'Necrozma', 'Raichu-Alola'];
			let TMcount = 0;
			let MinNumberOfMon = 2;
			for (let i = 0; i < team.length; i++) {
				if (BOTList.indexOf(team[i].species)>=0)TMcount++;
			}
			if (TMcount < MinNumberOfMon) return ["You have less than 2 Pokémon with BD Theorymon New modification"];
		}
	},
