const TemporaryBattleList: { [battleName: string]: TemporaryBattle } = {};

//Kanto Temporary Battles
TemporaryBattleList['Fighting Dojo'] = new TemporaryBattle(
    'Fighting Dojo',
    [
        new GymPokemon('Hitmonlee', 108985, 37),
        new GymPokemon('Hitmonchan', 108985, 37),
    ],
    'Hwa! Arrgh! Beaten!',
    [
        new OneFromManyRequirement([
            new GymBadgeRequirement(BadgeEnums.Rainbow),
            new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Rocket Game Corner')),
        ]),
    ],
    undefined,
    {
        firstTimeRewardFunction: () => {
            BagHandler.gainItem({type: ItemType.item, id: 'Fighting_egg'}, 1);
            Notifier.notify({
                message: 'You were awarded a Fighting Egg for defeating the Fighting Dojo!',
                type: NotificationConstants.NotificationOption.success,
                setting: NotificationConstants.NotificationSetting.Dungeons.rare_dungeon_item_found,
            });
        },
        imageName: '../trainers/Black Belt',
    }
);
TemporaryBattleList['Snorlax route 12'] = new TemporaryBattle(
    'Snorlax route 12',
    [new GymPokemon('Snorlax', 189990, 30)],
    undefined,
    [
        new RouteKillRequirement(10, GameConstants.Region.kanto, 12),
        new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Pokémon Tower')),
    ],
    [new TemporaryBattleRequirement('Snorlax route 12'), new ObtainedPokemonRequirement('Snorlax')],
    {
        displayName: 'Snorlax',
        returnTown: 'Lavender Town',
        isTrainerBattle: false,
        hideTrainer: true,
        visibleRequirement: new OneFromManyRequirement([new RouteKillRequirement(10, GameConstants.Region.kanto, 11), new RouteKillRequirement(5, GameConstants.Region.kanto, 12)]),
    }
);
TemporaryBattleList['Snorlax route 16'] = new TemporaryBattle(
    'Snorlax route 16',
    [new GymPokemon('Snorlax', 189990, 30)],
    undefined,
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Pokémon Tower'))],
    [new TemporaryBattleRequirement('Snorlax route 16'), new ObtainedPokemonRequirement('Snorlax')],
    {
        displayName: 'Snorlax',
        returnTown: 'Celadon City',
        isTrainerBattle: false,
        hideTrainer: true,
        visibleRequirement: new RouteKillRequirement(10, GameConstants.Region.kanto, 7),
    }
);
TemporaryBattleList['Biker Goon 1'] = new TemporaryBattle(
    'Biker Goon 1',
    [
        new GymPokemon('Koffing', 198477, 37),
        new GymPokemon('Grimer', 198477, 37),
    ],
    'Wha... What is this kid?!',
    [new QuestLineStepCompletedRequirement('Bill\'s Errand', 1)],
    undefined,
    {
        displayName: 'Biker Goon',
        imageName: 'Biker Goon',
    }
);
TemporaryBattleList['Biker Goon 2'] = new TemporaryBattle(
    'Biker Goon 2',
    [new GymPokemon('Koffing', 396954, 38)],
    'Stop fooling around!',
    [new QuestLineStepCompletedRequirement('Bill\'s Errand', 1)],
    undefined,
    {
        displayName: 'Biker Goon',
        imageName: 'Biker Goon',
    }
);
TemporaryBattleList['Biker Goon 3'] = new TemporaryBattle(
    'Biker Goon 3',
    [new GymPokemon('Grimer', 396954, 38)],
    '... ... ... ... ... ...',
    [new QuestLineStepCompletedRequirement('Bill\'s Errand', 1)],
    undefined,
    {
        displayName: 'Biker Goon',
        imageName: 'Biker Goon',
    }
);
TemporaryBattleList['Cue Ball Paxton'] = new TemporaryBattle(
    'Cue Ball Paxton',
    [
        new GymPokemon('Weezing', 221664, 39),
        new GymPokemon('Muk', 221664, 39),
    ],
    'All right, enough! We\'ll leave like you wanted! We\'ll be happy to see the last of this boring island!',
    [
        new TemporaryBattleRequirement('Biker Goon 1'),
        new TemporaryBattleRequirement('Biker Goon 2'),
        new TemporaryBattleRequirement('Biker Goon 3'),
    ]
);

// Johto Temporary Battles
TemporaryBattleList.Sudowoodo = new TemporaryBattle(
    'Sudowoodo',
    [new GymPokemon('Sudowoodo', 540000, 20)],
    undefined,
    [
        new GymBadgeRequirement(BadgeEnums.Plain),
        new RouteKillRequirement(10, GameConstants.Region.johto, 36),
    ],
    [new TemporaryBattleRequirement('Sudowoodo'), new ObtainedPokemonRequirement('Sudowoodo')],
    {
        isTrainerBattle: false,
        returnTown: 'Goldenrod City',
        hideTrainer: true,
        visibleRequirement: new RouteKillRequirement(10, GameConstants.Region.johto, 36),
    }
);
TemporaryBattleList['Suicune 1'] = new TemporaryBattle(
    'Suicune 1',
    [new GymPokemon('Suicune', 1044000, 40)],
    '<i>Suicune fled.</i>',
    [
        new QuestLineStartedRequirement('Eusine\'s Chase'),
        new RouteKillRequirement(10, GameConstants.Region.johto, 41),
    ],
    undefined,
    {
        displayName: 'Suicune',
        returnTown: 'Cianwood City',
        imageName: '../pokemon/245',
        hideTrainer: true,
    }
);
TemporaryBattleList.Eusine = new TemporaryBattle(
    'Eusine',
    [
        new GymPokemon('Drowzee', 348000, 25),
        new GymPokemon('Haunter', 348000, 25),
        new GymPokemon('Electrode', 359000, 27),
    ],
    'I hate to admit it, but you win. You\'re amazing! I\'m starting to understand why Suicune was keeping an eye on you. I\'m going to keep searching for Suicune. I have a feeling we\'ll see each other again. See you around!',
    [new QuestLineStepCompletedRequirement('Eusine\'s Chase', 1)],
    undefined,
    {
        displayName: 'Eusine',
        returnTown: 'Cianwood City',
    }
);
TemporaryBattleList['Suicune 2'] = new TemporaryBattle(
    'Suicune 2',
    [new GymPokemon('Suicune', 1115500, 40)],
    '<i>Suicune fled.</i>',
    [
        new QuestLineStepCompletedRequirement('Eusine\'s Chase', 2),
        new RouteKillRequirement(10, GameConstants.Region.johto, 42),
    ],
    undefined,
    {
        displayName: 'Suicune',
        returnTown: 'Mahogany Town',
        imageName: '../pokemon/245',
        hideTrainer: true,
    }
);
TemporaryBattleList['Suicune 3'] = new TemporaryBattle(
    'Suicune 3',
    [new GymPokemon('Suicune', 3269100, 40)],
    '<i>Suicune fled.</i>',
    [
        new QuestLineStepCompletedRequirement('Eusine\'s Chase', 4),
        new GymBadgeRequirement(BadgeEnums.Elite_JohtoChampion),
    ],
    undefined,
    {
        displayName: 'Suicune',
        returnTown: 'Vermilion City',
        imageName: '../pokemon/245',
        hideTrainer: true,
    }
);
TemporaryBattleList['Suicune 4'] = new TemporaryBattle(
    'Suicune 4',
    [new GymPokemon('Suicune', 3359100, 40)],
    '<i>Suicune fled.</i>',
    [
        new QuestLineStepCompletedRequirement('Eusine\'s Chase', 6),
        new RouteKillRequirement(10, GameConstants.Region.kanto, 14),
    ],
    undefined,
    {
        displayName: 'Suicune',
        returnTown: 'Fuchsia City',
        imageName: '../pokemon/245',
        hideTrainer: true,
    }
);
TemporaryBattleList['Suicune 5'] = new TemporaryBattle(
    'Suicune 5',
    [new GymPokemon('Suicune', 3449100, 40)],
    '<i>Suicune didn\'t flee.</i>',
    [new QuestLineStepCompletedRequirement('Eusine\'s Chase', 8)],
    undefined,
    {
        displayName: 'Suicune',
        returnTown: 'Cerulean City',
        imageName: '../pokemon/245',
        hideTrainer: true,
    }
);
TemporaryBattleList['Suicune 6'] = new TemporaryBattle(
    'Suicune 6',
    [new GymPokemon('Suicune', 3449100, 40)],
    '',
    [new QuestLineStepCompletedRequirement('Eusine\'s Chase', 10)],
    [new QuestLineStepCompletedRequirement('Eusine\'s Chase', 11)],
    {
        displayName: 'Suicune',
        returnTown: 'Cerulean City',
        imageName: '../pokemon/245',
        hideTrainer: true,
        isTrainerBattle: false,
    }
);
TemporaryBattleList['Kimono Girls'] = new TemporaryBattle(
    'Kimono Girls',
    [
        new GymPokemon('Umbreon', 660000, 42),
        new GymPokemon('Espeon', 660000, 43),
        new GymPokemon('Flareon', 660000, 46),
        new GymPokemon('Jolteon', 660000, 40),
        new GymPokemon('Vaporeon', 660000, 40),
    ],
    'You have beautifully proven that the bond between people can be extended to the bond between people and Pokémon. We all appreciate that you have lived up to our expectations. This Clear Bell will signal to Ho-Oh that you are worthy of its attentions.',
    [new QuestLineStepCompletedRequirement('Rainbow Guardian', 0)],
    undefined,
    {
        imageName: '../trainers/Kimono Girl',
    }
);
TemporaryBattleList['Spiky-eared Pichu'] = new TemporaryBattle(
    'Spiky-eared Pichu',
    [new GymPokemon('Spiky-eared Pichu', 3178500, 20)],
    '<b><i>You caught the Spiky-eared Pichu!</i></b>',
    [new QuestLineStepCompletedRequirement('Unfinished Business', 6)],
    undefined,
    {
        displayName: 'Strange Pichu',
        hideTrainer: true,
        imageName: '../pokemon/172.1',
    }
);
TemporaryBattleList['Rocket Boss Giovanni'] = new TemporaryBattle(
    'Rocket Boss Giovanni',
    [
        new GymPokemon('Nidoking', 861275, 42),
        new GymPokemon('Murkrow', 861275, 43),
        new GymPokemon('Nidoqueen', 861275, 46),
        new GymPokemon('Kangaskhan', 875275, 40),
    ],
    'What in the world are you? How this is possible...? How can a kid like you manage to destroy my dream once again? The precious dream of Team Rocket has become little more than an illusion...',
    [new QuestLineStepCompletedRequirement('Unfinished Business', 9)]
);

// Hoenn Temporary Battles
TemporaryBattleList['Kecleon 1'] = new TemporaryBattle(
    'Kecleon 1',
    [new GymPokemon('Kecleon', 6000000, 20)],
    undefined,
    [new RouteKillRequirement(10, GameConstants.Region.hoenn, 119)],
    [new TemporaryBattleRequirement('Kecleon 1'), new ObtainedPokemonRequirement('Kecleon')],
    {
        isTrainerBattle: false,
        returnTown: 'Fortree City',
        hideTrainer: true,
        visibleRequirement: new RouteKillRequirement(10, GameConstants.Region.hoenn, 119),
    }
);
TemporaryBattleList['Kecleon 2'] = new TemporaryBattle(
    'Kecleon 2',
    [new GymPokemon('Kecleon', 7000000, 20)],
    undefined,
    [new TemporaryBattleRequirement('Kecleon 1')],
    [new TemporaryBattleRequirement('Kecleon 2')],
    {
        isTrainerBattle: false,
        returnTown: 'Fortree City',
        hideTrainer: true,
    }
);
TemporaryBattleList['Kecleon 3'] = new TemporaryBattle(
    'Kecleon 3',
    [new GymPokemon('Kecleon', 7000000, 20)],
    undefined,
    [new TemporaryBattleRequirement('Kecleon 2')],
    [new TemporaryBattleRequirement('Kecleon 3')],
    {
        isTrainerBattle: false,
        returnTown: 'Fortree City',
        hideTrainer: true,
    }
);
TemporaryBattleList['Sevii Rocket Grunt 1'] = new TemporaryBattle(
    'Sevii Rocket Grunt 1',
    [
        new GymPokemon('Cubone', 3861120, 37),
        new GymPokemon('Marowak', 4182880, 37),
    ],
    'Huh, what? Why\'d you have to win?',
    [new QuestLineStepCompletedRequirement('Celio\'s Errand', 1)],
    undefined,
    {
        displayName: 'Team Rocket Grunt',
        imageName: '../trainers/Team Rocket Grunt (female)',
    }
);
TemporaryBattleList['Sevii Rocket Grunt 2'] = new TemporaryBattle(
    'Sevii Rocket Grunt 2',
    [
        new GymPokemon('Rattata', 1850120, 35),
        new GymPokemon('Raticate', 2011000, 35),
        new GymPokemon('Sandshrew', 1930560, 35),
        new GymPokemon('Sandslash', 2091440, 35),
    ],
    'Develop amnesia conveniently and forget everything you heard!',
    [new QuestLineStepCompletedRequirement('Celio\'s Errand', 1)],
    undefined,
    {
        displayName: 'Team Rocket Grunt',
        imageName: '../trainers/Team Rocket Grunt (male)',
    }
);
TemporaryBattleList['Sevii Rocket Grunt 3'] = new TemporaryBattle(
    'Sevii Rocket Grunt 3',
    [
        new GymPokemon('Houndour', 4309500, 49),
        new GymPokemon('Houndour', 4309500, 49),
    ],
    'Oh, but... Too much!',
    [new QuestLineStepCompletedRequirement('Celio\'s Errand', 8)],
    undefined,
    {
        displayName: 'Team Rocket Grunt',
        imageName: '../trainers/Team Rocket Grunt (female)',
    }
);
TemporaryBattleList['Sevii Rocket Grunt 4'] = new TemporaryBattle(
    'Sevii Rocket Grunt 4',
    [
        new GymPokemon('Machop', 2844270, 48),
        new GymPokemon('Machop', 2844270, 48),
        new GymPokemon('Machoke', 2930460, 48),
    ],
    'What do you think you\'re doing?!',
    [new QuestLineStepCompletedRequirement('Celio\'s Errand', 8)],
    undefined,
    {
        displayName: 'Team Rocket Grunt',
        imageName: '../trainers/Team Rocket Grunt (male)',
    }
);
TemporaryBattleList['Sevii Rocket Grunt 5'] = new TemporaryBattle(
    'Sevii Rocket Grunt 5',
    [
        new GymPokemon('Hypno', 4309500, 49),
        new GymPokemon('Hypno', 4309500, 49),
    ],
    'Don\'t...you...dare...laugh...',
    [new QuestLineStepCompletedRequirement('Celio\'s Errand', 8)],
    undefined,
    {
        displayName: 'Team Rocket Grunt',
        imageName: '../trainers/Team Rocket Grunt (male)',
    }
);
TemporaryBattleList['Sevii Rocket Ariana'] = new TemporaryBattle(
    'Sevii Rocket Ariana',
    [
        new GymPokemon('Muk', 2910600, 52),
        new GymPokemon('Arbok', 2910600, 53),
        new GymPokemon('Vileplume', 2998800, 54),
    ],
    'You\'re doing things according to your beliefs and morals. I understand now...',
    [new QuestLineStepCompletedRequirement('Celio\'s Errand', 9)],
    undefined,
    {
        displayName: 'Team Rocket Executive Ariana',
        imageName: '../trainers/Rocket Executive (ariana)',
    }
);
TemporaryBattleList['Sevii Rocket Archer'] = new TemporaryBattle(
    'Sevii Rocket Archer',
    [
        new GymPokemon('Golbat', 3045900, 53),
        new GymPokemon('Weezing', 3045900, 54),
        new GymPokemon('Houndoom', 3138200, 55),
    ],
    'Urgh... You were too strong... ... Th-that\'s Giovanni\'s Badge! So it\'s true? Team Rocket really has disbanded? ...We will abandon this warehouse. But don\'t think this is over. I won\'t let this be the end. I will find Giovanni. And I will resurrect Team Rocket! I will... Until then, farewell!',
    [new QuestLineStepCompletedRequirement('Celio\'s Errand', 10)],
    undefined,
    {
        displayName: 'Team Rocket Executive Archer',
        imageName: '../trainers/Rocket Executive (archer)',
    }
);
TemporaryBattleList['Scientist Gideon'] = new TemporaryBattle(
    'Scientist Gideon',
    [
        new GymPokemon('Voltorb', 1623360, 46),
        new GymPokemon('Electrode', 1724820, 46),
        new GymPokemon('Magnemite', 1623360, 46),
        new GymPokemon('Magneton', 1724820, 46),
        new GymPokemon('Porygon', 1877010, 46),
    ],
    'If I can\'t sell the Sapphire, it\'s worthless! Go ahead, take it!',
    [new QuestLineStepCompletedRequirement('Celio\'s Errand', 11)]
);
TemporaryBattleList['Pinkan Jessie & James'] = new TemporaryBattle(
    'Pinkan Jessie & James',
    [
        new GymPokemon('Lickitung', 2000000, 40),
        new GymPokemon('Pinkan Weezing', 3000000, 50),
        new GymPokemon('Pinkan Arbok', 3000000, 50),
        new GymPokemon('Meowth', 2000, 5),
    ],
    'We\'re blasting off again!!!!',
    [new QuestLineStepCompletedRequirement('Team Rocket\'s Pinkan Theme Park', 4)],
    undefined,
    {
        displayName: 'Jessie & James',
    }
);
TemporaryBattleList['Pinkan Officer Jenny'] = new TemporaryBattle(
    'Pinkan Officer Jenny',
    [
        new GymPokemon('Growlithe', 2000000, 40),
        new GymPokemon('Arcanine', 3500000, 55),
        new GymPokemon('Pinkan Nidoking', 4000000, 70),
    ],
    'So you\'re not with them? Okay... Just don\'t help those criminals in the future, got it? Looks like some new Pinkan Pokémon have made their way to the island, if you bring us some Pinkan Berries we\'ll trade you for them.',
    [new QuestLineStepCompletedRequirement('Team Rocket\'s Pinkan Theme Park', 5)],
    undefined,
    {
        displayName: 'Officer Jenny',
    }
);

// Sinnoh Temporary Battles
TemporaryBattleList['Galactic Boss Cyrus'] = new TemporaryBattle(
    'Galactic Boss Cyrus',
    [
        new GymPokemon('Sneasel', 3255000, 34),
        new GymPokemon('Golbat', 3460000, 34),
        new GymPokemon('Murkrow', 3665000, 36),
    ],
    'Impressive. Your prowess is notable.',
    [new QuestLineStepCompletedRequirement('A New World', 2)],
    undefined,
    {imageName: '../trainers/Galactic Boss (cyrus)'}
);

// Unova Temporary Battles
TemporaryBattleList['Team Plasma Grunt 1'] = new TemporaryBattle(
    'Team Plasma Grunt 1',
    [new GymPokemon('Patrat', 5492150, 14)],
    'Plasmaaaa! I lost! This is awful!',
    [new GymBadgeRequirement(BadgeEnums.Toxic)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Team Plasma Grunt 2'] = new TemporaryBattle(
    'Team Plasma Grunt 2',
    [new GymPokemon('Trubbish', 35896600, 27)],
    'Don\'t let it go to your head... But you put up a good fight, kid!',
    [
        new GymBadgeRequirement(BadgeEnums.Bolt),
        new TemporaryBattleRequirement('Team Plasma Grunt 1'),
        new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 3),
    ],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Team Plasma Grunt 3'] = new TemporaryBattle(
    'Team Plasma Grunt 3',
    [new GymPokemon('Watchog', 35896600, 27)],
    'What\'s the big idea? This Pokémon I stole is useless!',
    [
        new GymBadgeRequirement(BadgeEnums.Bolt),
        new TemporaryBattleRequirement('Team Plasma Grunt 1'),
        new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 3),
    ],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (female)',
    }
);
TemporaryBattleList['Team Plasma Grunt 4'] = new TemporaryBattle(
    'Team Plasma Grunt 4',
    [new GymPokemon('Koffing', 39496600, 30)],
    'You! So you\'re a Trainer who fights while believing in your Pokémon, are you?',
    [new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 5)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Team Plasma Grunt 5'] = new TemporaryBattle(
    'Team Plasma Grunt 5',
    [new GymPokemon('Trubbish', 39496600, 30)],
    'Plasmaaaa! Plasmaaaa!!',
    [new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 5)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Team Plasma Grunts 1'] = new TemporaryBattle(
    'Team Plasma Grunts 1',
    [
        new GymPokemon('Golbat', 9774150, 29),
        new GymPokemon('Liepard', 9974150, 29),
        new GymPokemon('Grimer', 9774150, 29),
        new GymPokemon('Krokorok', 9974150, 29),
    ],
    'The Gym Leader is tough, but you... Are you even human?! I tried to use the same combination as you, and yet...',
    [new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 5)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Team Plasma Grunts (male)',
    }
);
TemporaryBattleList['Team Plasma Grunts 2'] = new TemporaryBattle(
    'Team Plasma Grunts 2',
    [
        new GymPokemon('Koffing', 9774150, 29),
        new GymPokemon('Watchog', 9974150, 29),
        new GymPokemon('Grimer', 9774150, 29),
        new GymPokemon('Raticate', 9974150, 29),
    ],
    'No! At this rate, I... I won\'t be able to protect the Plasma Frigate! P-P-P-Plasmaaaa!',
    [new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 5)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Team Plasma Grunts (male)',
    }
);
TemporaryBattleList['Team Plasma Grunt 6'] = new TemporaryBattle(
    'Team Plasma Grunt 6',
    [
        new GymPokemon('Golbat', 22848300, 39),
        new GymPokemon('Garbodor', 24848300, 39),
    ],
    'What a blunder to have made in front of Zinzolin...',
    [
        new TemporaryBattleRequirement('Team Plasma Grunt 4'),
        new TemporaryBattleRequirement('Team Plasma Grunt 5'),
        new TemporaryBattleRequirement('Team Plasma Grunts 1'),
        new TemporaryBattleRequirement('Team Plasma Grunts 2'),
        new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 8),
    ],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Zinzolin 1'] = new TemporaryBattle(
    'Zinzolin 1',
    [
        new GymPokemon('Cryogonal', 23848300, 42),
        new GymPokemon('Sneasel', 25848300, 44),
    ],
    'You can\'t stop us! We will use the DNA Splicers to awaken the true power of the legendary Dragon-type Pokémon! We will steal the Splicers from the Opelucid City gym leader!',
    [new TemporaryBattleRequirement('Team Plasma Grunt 6')],
    undefined,
    {
        displayName: 'Zinzolin',
        imageName: '../trainers/Team Plasma (zinzolin)',
    }
);
TemporaryBattleList['Team Plasma Grunt 7'] = new TemporaryBattle(
    'Team Plasma Grunt 7',
    [
        new GymPokemon('Watchog', 26298300, 44),
        new GymPokemon('Muk', 28298300, 44),
    ],
    'You little... You knocked out my stupid pawns!',
    [new TemporaryBattleRequirement('Zinzolin 1')],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Team Plasma Grunt 8'] = new TemporaryBattle(
    'Team Plasma Grunt 8',
    [
        new GymPokemon('Golbat', 26298300, 44),
        new GymPokemon('Garbodor', 28298300, 44),
    ],
    'Argh! Lame! Stupid! Fool! Plasmaaaa!',
    [new TemporaryBattleRequirement('Zinzolin 1')],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (female)',
    }
);
TemporaryBattleList['Team Plasma Grunt 9'] = new TemporaryBattle(
    'Team Plasma Grunt 9',
    [
        new GymPokemon('Seviper', 26298300, 44),
        new GymPokemon('Weezing', 28298300, 44),
    ],
    'Even if I lose, I will not give up on justice for Team Plasma! That\'s all!',
    [new TemporaryBattleRequirement('Zinzolin 1')],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: '../trainers/Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Zinzolin 2'] = new TemporaryBattle(
    'Zinzolin 2',
    [
        new GymPokemon('Cryogonal', 17632200, 46),
        new GymPokemon('Cryogonal', 17632200, 46),
        new GymPokemon('Weavile', 20632200, 48),
    ],
    'Have you gotten even stronger than you were in Lucanosa Town? How, in such a brief amount of time...',
    [
        new TemporaryBattleRequirement('Team Plasma Grunt 7'),
        new TemporaryBattleRequirement('Team Plasma Grunt 8'),
        new TemporaryBattleRequirement('Team Plasma Grunt 9'),
    ],
    undefined,
    {
        displayName: 'Zinzolin',
        imageName: '../trainers/Team Plasma (zinzolin)',
    }
);
TemporaryBattleList['Plasma Shadow 1'] = new TemporaryBattle(
    'Plasma Shadow 1',
    [
        new GymPokemon('Pawniard', 18065533, 46),
        new GymPokemon('Pawniard', 18065533, 46),
        new GymPokemon('Absol', 21065533, 48),
    ],
    'I hate to admit it, but... You\'re a good trainer. Awww. How unlucky. I don\'t happen to be the one holding the DNA Splicers. I was just buying time for the others to escape. Cheerio, bye-bye, whatever.',
    [new TemporaryBattleRequirement('Zinzolin 2')],
    undefined,
    {
        displayName: 'Plasma Shadow',
        imageName: 'Plasma Shadow',
    }
);
TemporaryBattleList.Colress = new TemporaryBattle(
    'Colress',
    [
        new GymPokemon('Magneton', 13557307, 50),
        new GymPokemon('Metang', 13557307, 50),
        new GymPokemon('Beheeyem', 13557307, 50),
        new GymPokemon('Magnezone', 13657307, 50),
        new GymPokemon('Klinklang', 13957307, 52),
    ],
    'So this is what it means to draw forth the power hidden in your Pokémon! To me, whether Team Plasma wins or whether you win will decide how the relationship between people and Pokémon should be! You\'d better hurry, they have already captured the legendary Dragon-type Pokémon! Good luck in your battle!',
    [
        new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Giant Chasm')),
        new TemporaryBattleRequirement('Plasma Shadow 1'),
        new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 17),
    ],
    undefined,
    {imageName: '../trainers/Team Plasma (colress)'}
);
TemporaryBattleList['Plasma Shadow 2'] = new TemporaryBattle(
    'Plasma Shadow 2',
    [
        new GymPokemon('Pawniard', 25025488, 49),
        new GymPokemon('Pawniard', 25025488, 49),
        new GymPokemon('Absol', 28025488, 51),
    ],
    'It doesn\'t bother us a bit if the stolen Pokémon cry or beg.',
    [new TemporaryBattleRequirement('Colress')],
    undefined,
    {
        displayName: 'Plasma Shadow',
        imageName: 'Plasma Shadow',
    }
);
TemporaryBattleList['Plasma Shadow 3'] = new TemporaryBattle(
    'Plasma Shadow 3',
    [
        new GymPokemon('Pawniard', 25025488, 49),
        new GymPokemon('Pawniard', 25025488, 49),
        new GymPokemon('Banette', 28025488, 51),
    ],
    'It doesn\'t bother us a bit if we have to use another Pokémon after one is defeated.',
    [new TemporaryBattleRequirement('Colress')],
    undefined,
    {
        displayName: 'Plasma Shadow',
        imageName: 'Plasma Shadow',
    }
);
TemporaryBattleList['Plasma Shadow 4'] = new TemporaryBattle(
    'Plasma Shadow 4',
    [
        new GymPokemon('Pawniard', 25025488, 49),
        new GymPokemon('Pawniard', 25025488, 49),
        new GymPokemon('Accelgor', 28025488, 51),
    ],
    'It doesn\'t bother us a bit if Pokémon win or lose.',
    [new TemporaryBattleRequirement('Colress')],
    undefined,
    {
        displayName: 'Plasma Shadow',
        imageName: 'Plasma Shadow',
    }
);
TemporaryBattleList['Ghetsis 1'] = new TemporaryBattle(
    'Ghetsis 1',
    [
        new GymPokemon('Kyurem (Black)', 43933198, 50),
        new GymPokemon('Kyurem (White)', 43933198, 50),
    ],
    'I can\'t believe it! The Black and White Kyurem I went to all the trouble of preparing! How irritating! Now I have to go recapture Kyurem, don\'t I? But first, I\'ll take down this disgusting Trainer with my own hand! This time I WILL succeed! No matter what they try, no one will be able to stop me!',
    [
        new TemporaryBattleRequirement('Plasma Shadow 2'),
        new TemporaryBattleRequirement('Plasma Shadow 3'),
        new TemporaryBattleRequirement('Plasma Shadow 4'),
        new QuestLineStepCompletedRequirement('Quest for the DNA Splicers', 20),
    ],
    undefined,
    {
        displayName: 'Ghetsis',
        imageName: 'Ghetsis',
    }
);
TemporaryBattleList['Ghetsis 2'] = new TemporaryBattle(
    'Ghetsis 2',
    [
        new GymPokemon('Cofagrigus', 16176055, 50),
        new GymPokemon('Seismitoad', 16176055, 50),
        new GymPokemon('Eelektross', 16176055, 50),
        new GymPokemon('Drapion', 16176055, 50),
        new GymPokemon('Toxicroak', 16276055, 50),
        new GymPokemon('Hydreigon', 16676055, 52),
    ],
    'My plans for complete and total world domination foiled yet again? No! It mustn\'t be! I couldn\'t have been defeated by some random Trainer from who knows where!',
    [new TemporaryBattleRequirement('Ghetsis 1')],
    undefined,
    {
        displayName: 'Ghetsis',
        imageName: 'Ghetsis',
    }
);
TemporaryBattleList['Bianca 1'] = new TemporaryBattle(
    'Bianca 1',
    [
        new GymPokemon('Oshawott', 1689240, 5, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Snivy', 1689240, 5, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Tepig', 1689240, 5, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'Wow... You\'re going to be a great trainer someday, I can tell! No doubt!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Bianca',
        returnTown: 'Nuvema Town',
        imageName: 'Bianca',
    }
);
TemporaryBattleList['Cheren 1'] = new TemporaryBattle(
    'Cheren 1',
    [
        new GymPokemon('Tepig', 1689240, 5, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Oshawott', 1689240, 5, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Snivy', 1689240, 5, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'I made a strange blunder in my first battle, but this feeling I have... ...I\'m finally a trainer.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Cheren',
        returnTown: 'Nuvema Town',
        imageName: 'Cheren',
    }
);
TemporaryBattleList['N 1'] = new TemporaryBattle(
    'N 1',
    [new GymPokemon('Purrloin', 1689240, 7)],
    'I never expected to hear Pokémon say such things...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer N',
        returnTown: 'Accumula Town',
        imageName: 'N',
    }
);
TemporaryBattleList['Bianca 2'] = new TemporaryBattle(
    'Bianca 2',
    [
        new GymPokemon('Lillipup', 1689240, 6),
        new GymPokemon('Oshawott', 1689240, 7, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Snivy', 1689240, 7, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Tepig', 1689240, 7, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'Woo-hoo! You are a tough cookie. I\'m gonna work hard on training my Pokémon so we won\'t lose anymore! OK, bye-bye!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Bianca',
        returnTown: 'Striaton City',
        imageName: 'Bianca',
    }
);
TemporaryBattleList['Cheren 2'] = new TemporaryBattle(
    'Cheren 2',
    [
        new GymPokemon('Tepig', 1689240, 8, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Oshawott', 1689240, 8, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Snivy', 1689240, 8, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
        new GymPokemon('Purrloin', 1689240, 8),
    ],
    'I see! Losing to you means that I still have a lot to learn.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Cheren',
        returnTown: 'Striaton City',
        imageName: 'Cheren',
    }
);
TemporaryBattleList['Cilan'] = new TemporaryBattle(
    'Cilan',
    [
        new GymPokemon('Lillipup', 1689240, 12),
        new GymPokemon('Pansage', 1689240, 14),
    ],
    '...What a surprise. You...are very strong. Seems like not even Chili or Cress could beat you..',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Cilan',
    }
);
TemporaryBattleList['Chili'] = new TemporaryBattle(
    'Chili',
    [
        new GymPokemon('Lillipup', 1689240, 12),
        new GymPokemon('Pansear', 1689240, 14),
    ],
    'Whoa ho! You\'re on fire!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Chili',
    }
);
TemporaryBattleList['Cress'] = new TemporaryBattle(
    'Cress',
    [
        new GymPokemon('Lillipup', 1689240, 12),
        new GymPokemon('Panpour', 1689240, 14),
    ],
    'Why, you\'re quite remarkable.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Cress',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 1'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 1',
    [new GymPokemon('Patrat', 1689240, 10)],
    'Plasmaaaa! Ah, our beautiful dream...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 2'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 2',
    [new GymPokemon('Purrloin', 1689240, 10)],
    'Plasmaaaa! This is a nightmare!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (female)',
    }
);
TemporaryBattleList['Cheren 3'] = new TemporaryBattle(
    'Cheren 3',
    [
        new GymPokemon('Tepig', 1689240, 14, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Oshawott', 1689240, 14, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Snivy', 1689240, 14, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
        new GymPokemon('Purrloin', 1689240, 12),
    ],
    'Why do you keep beating me? We have the same number of Gym Badges. We should be equals in strength...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Cheren',
        returnTown: 'Striaton City',
        imageName: 'Cheren',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 1'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 1',
    [
        new GymPokemon('Patrat', 1689240, 12),
        new GymPokemon('Patrat', 1689240, 12),
    ],
    'Plasmaaaa! I cannot believe that Team Plasma lost to such kids!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (male)',
    }
);
TemporaryBattleList['School Kid Lydia'] = new TemporaryBattle(
    'School Kid Lydia',
    [
        new GymPokemon('Lillipup', 1689240, 15),
        new GymPokemon('Lillipup', 1689240, 15),
        new GymPokemon('Lillipup', 1689240, 15),
    ],
    'Oh, wow! I lost, but thanks for a great battle!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)]
);
TemporaryBattleList['School Kid Carter'] = new TemporaryBattle(
    'School Kid Carter',
    [new GymPokemon('Patrat', 1689240, 17)],
    'I may be a bookworm, but I am not a bug Pokémon.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)]
);
TemporaryBattleList['Lenora'] = new TemporaryBattle(
    'Lenora',
    [
        new GymPokemon('Herdier', 1689240, 18),
        new GymPokemon('Watchog', 1689240, 20),
    ],
    'My theory about you was correct. You\'re more than just talented... You\'re motivated! I salute you!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Lenora',
    }
);
TemporaryBattleList['N 2'] = new TemporaryBattle(
    'N 2',
    [
        new GymPokemon('Pidove', 1689240, 13),
        new GymPokemon('Timburr', 1689240, 13),
        new GymPokemon('Tympole', 1689240, 13),
    ],
    'I cannot see the future yet... The world is still to be determined...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer N',
        returnTown: 'Nacrene City',
        imageName: 'N',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 3'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 3',
    [new GymPokemon('Sandile', 1689240, 16)],
    'Come on! You\'re just a kid--a kid on an ego trip!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 2'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 2',
    [
        new GymPokemon('Purrloin', 1689240, 16),
        new GymPokemon('Patrat', 1689240, 16),
    ],
    'My hunch is you\'re sabotaging us because you\'re flat-out jealous of our cool outfits.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (both)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 4'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 4',
    [
        new GymPokemon('Patrat', 1689240, 14),
        new GymPokemon('Patrat', 1689240, 14),
        new GymPokemon('Sandile', 1689240, 14),
    ],
    'Plasmaaaa! If this keeps up, we won\'t save the Pokémon!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 5'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 5',
    [
        new GymPokemon('Sandile', 1689240, 17),
        new GymPokemon('Sandile', 1689240, 17),
    ],
    'Come on! Seriously?! All I did was take away people\'s Pokémon.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Burgh'] = new TemporaryBattle(
    'Burgh',
    [
        new GymPokemon('Whirlipede', 1689240, 21),
        new GymPokemon('Dwebble', 1689240, 21),
        new GymPokemon('Leavanny', 1689240, 23),
    ],
    'Aww... I lost. Whatever! Losing to you doesn\'t bug me because you are a-MAZ-ingly strong!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Burgh',
    }
);
TemporaryBattleList['Bianca 3'] = new TemporaryBattle(
    'Bianca 3',
    [
      new GymPokemon('Herdier', 1689240, 18),
      new GymPokemon('Pansear', 1689240, 18, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
      new GymPokemon('Panpour', 1689240, 18, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
      new GymPokemon('Pansage', 1689240, 18, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
      new GymPokemon('Munna', 1689240, 18),
      new GymPokemon('Dewott', 1689240, 20, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
      new GymPokemon('Servine', 1689240, 20, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
      new GymPokemon('Pignite', 1689240, 20, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'I\'ll never be a strong Trainer like you or Cheren or Iris, but... You know since we left Nuvema Town, I\'ve met a lot of people and I\'ve been thinking about what I want to do in life! When you look at it that way, Pokémon have given me a lot of new experiences. And I also learned that being with Pokémon is really, really important! OK, well, I hope to see you again soon!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Bianca',
        returnTown: 'Castelia City',
        imageName: 'Bianca',
    }
);
TemporaryBattleList['Cheren 4'] = new TemporaryBattle(
    'Cheren 4',
    [
        new GymPokemon('Pidove', 1689240, 20),
        new GymPokemon('Pansage', 1689240, 20, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Pansear', 1689240, 20, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Panpour', 1689240, 20, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
        new GymPokemon('Liepard', 1689240, 20),
        new GymPokemon('Pignite', 1689240, 22, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Dewott', 1689240, 22, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Servine', 1689240, 22, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'It\'s now clear to me. The reason you are so tough is the trust between you and your Pokémon. But... that shouldn\'t be a problem. I can get more out of my Pokémon, too.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Cheren',
        returnTown: 'Castelia City',
        imageName: 'Cheren',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 6'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 6',
    [
        new GymPokemon('Watchog', 1689240, 18),
        new GymPokemon('Trubbish', 1689240, 18),
    ],
    'Plasmaaaa! Wahhhhh!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['N 3'] = new TemporaryBattle(
    'N 3',
    [
        new GymPokemon('Sandile', 1689240, 22),
        new GymPokemon('Scraggy', 1689240, 22),
        new GymPokemon('Darumaka', 1689240, 22),
        new GymPokemon('Sigilyph', 1689240, 22),
    ],
    'The result was the same... But you... Who are you?',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma N',
        returnTown: 'Nimbasa City',
        imageName: 'N',
    }
);
TemporaryBattleList['Elesa'] = new TemporaryBattle(
    'Elesa',
    [
        new GymPokemon('Emolga', 1689240, 25),
        new GymPokemon('Emolga', 1689240, 25),
        new GymPokemon('Zebstrika', 1689240, 27),
    ],
    'I meant to make your head spin, but you shocked me instead.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Elesa',
    }
);
TemporaryBattleList['Cheren 5'] = new TemporaryBattle(
    'Cheren 5',
    [
        new GymPokemon('Tranquill', 1689240, 24),
        new GymPokemon('Pansage', 1689240, 24, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Pansear', 1689240, 24, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Panpour', 1689240, 24, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
        new GymPokemon('Liepard', 1689240, 24),
        new GymPokemon('Pignite', 1689240, 26, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Dewott', 1689240, 26, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Servine', 1689240, 26, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'Why? Why can\'t I best you?',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Cheren',
        returnTown: 'Nimbasa City',
        imageName: 'Cheren',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 7'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 7',
    [
        new GymPokemon('Watchog', 1689240, 23),
        new GymPokemon('Scraggy', 1689240, 23),
    ],
    'Long live Team Plasma!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 8'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 8',
    [
        new GymPokemon('Sandile', 1689240, 23),
        new GymPokemon('Watchog', 1689240, 23),
    ],
    'If you take something away, I will take it back... Remember that!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 3'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 3',
    [
        new GymPokemon('Trubbish', 1689240, 24),
        new GymPokemon('Liepard', 1689240, 24),
    ],
    'Have you learned you\'re lesson now? ...We\'re such sore losers',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (female)',
    }
);
TemporaryBattleList['Clay'] = new TemporaryBattle(
    'Clay',
    [
        new GymPokemon('Krokorok', 1689240, 29),
        new GymPokemon('Palpitoad', 1689240, 29),
        new GymPokemon('Excadrill', 1689240, 31),
    ],
    'Mrrrmph. I see. But I sure don\'t like it! Fer such a young \'un, ya have an imposin\' battle style. I know ya got people who can dig up yer potential. Mrmph.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Clay',
    }
);
TemporaryBattleList['Bianca 4'] = new TemporaryBattle(
    'Bianca 4',
    [
      new GymPokemon('Herdier', 1689240, 26),
      new GymPokemon('Pansear', 1689240, 26, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
      new GymPokemon('Panpour', 1689240, 26, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
      new GymPokemon('Pansage', 1689240, 26, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
      new GymPokemon('Musharna', 1689240, 26),
      new GymPokemon('Dewott', 1689240, 28, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
      new GymPokemon('Servine', 1689240, 28, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
      new GymPokemon('Pignite', 1689240, 28, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'I haven\'t had a Pokémon battle with you in a while. You\'ve become totally strong, huh? I\'m not that strong so I don\'t know how to say it, but I think you\'re way tuned in to how your Pokémon feel!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Bianca',
        returnTown: 'Driftveil City',
        imageName: 'Bianca',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 9'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 9',
    [
        new GymPokemon('Sandile', 1689240, 26),
        new GymPokemon('Scraggy', 1689240, 26),
        new GymPokemon('Watchog', 1689240, 26),
    ],
    'Argh! I can\'t believe I lost...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 10'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 10',
    [
        new GymPokemon('Trubbish', 1689240, 27),
        new GymPokemon('Liepard', 1689240, 27),
    ],
    'Oh, my! No, no. Plasmaaaa!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (female)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 11'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 11',
    [
        new GymPokemon('Trubbish', 1689240, 26),
        new GymPokemon('Trubbish', 1689240, 26),
        new GymPokemon('Trubbish', 1689240, 26),
    ],
    'You may have beaten me, but you\re still no better than other trainers around here.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (female)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 12'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 12',
    [
        new GymPokemon('Watchog', 1689240, 27),
        new GymPokemon('Sandile', 1689240, 27),
    ],
    'As a proud member of... Team Plasma...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 13'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 13',
    [
        new GymPokemon('Sandile', 1689240, 27),
        new GymPokemon('Watchog', 1689240, 27),
    ],
    '...I see. You\'re very good at using Pokémon.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 4'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 4',
    [
        new GymPokemon('Scraggy', 1689240, 28),
        new GymPokemon('Liepard', 1689240, 28),
    ],
    'Hey! What was that? You\'re too strong! Plasmaaaa!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (both)',
    }
);
TemporaryBattleList['N 4'] = new TemporaryBattle(
    'N 4',
    [
        new GymPokemon('Boldore', 1689240, 28),
        new GymPokemon('Ferroseed', 1689240, 28),
        new GymPokemon('Joltik', 1689240, 28),
        new GymPokemon('Klink', 1689240, 28),
    ],
    'My friends getting hurt... That\'s what a Pokémon battle is.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma N',
        imageName: 'N',
    }
);
TemporaryBattleList['Skyla'] = new TemporaryBattle(
    'Skyla',
    [
        new GymPokemon('Swoobat', 1689240, 33),
        new GymPokemon('Unfezant', 1689240, 33),
        new GymPokemon('Swanna', 1689240, 35),
    ],
    'You\'re an amazing Pokémon Trainer. My Pokémon and I are happy, because for the first time in a while, we could fight with our full strength.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Skyla',
    }
);
TemporaryBattleList['Cheren 6'] = new TemporaryBattle(
    'Cheren 6',
    [
        new GymPokemon('Unfezant', 1689240, 33),
        new GymPokemon('Simisage', 1689240, 33, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Simisear', 1689240, 33, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Simipour', 1689240, 33, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
        new GymPokemon('Liepard', 1689240, 33),
        new GymPokemon('Pignite', 1689240, 35, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Dewott', 1689240, 35, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Servine', 1689240, 35, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'Pokémon battles are fun. But what is it to be truly strong?',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Cheren',
        returnTown: 'Twist Mountain',
        imageName: 'Cheren',
    }
);
TemporaryBattleList['Brycen'] = new TemporaryBattle(
    'Brycen',
    [
        new GymPokemon('Vanillish', 1689240, 37),
        new GymPokemon('Cryogonal', 1689240, 37),
        new GymPokemon('Beartic', 1689240, 39),
    ],
    'The wonderful combination of you and your Pokémon! What a beautiful friendship!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Brycen',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 14'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 14',
    [new GymPokemon('Watchog', 1689240, 34)],
    'I don\'t understand... I don\'t understand you guys...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 5'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 5',
    [
        new GymPokemon('Scraggy', 1689240, 34),
        new GymPokemon('Liepard', 1689240, 34),
    ],
    'Ouch, ouuuuch! My Pokémon got hurt!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (both)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 15'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 15',
    [
        new GymPokemon('Liepard', 1689240, 33),
        new GymPokemon('Liepard', 1689240, 33),
    ],
    'Ah! Our lord N!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (female)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 16'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 16',
    [
        new GymPokemon('Watchog', 1689240, 32),
        new GymPokemon('Krokorok', 1689240, 32),
        new GymPokemon('Scraggy', 1689240, 32),
    ],
    'Bahhh. I have lost my motivation.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 6'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 6',
    [
        new GymPokemon('Watchog', 1689240, 33),
        new GymPokemon('Krokorok', 1689240, 33),
        new GymPokemon('Krokorok', 1689240, 34),
    ],
    'The dawn of Unova has faded into the distance...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 7'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 7',
    [
        new GymPokemon('Trubbish', 1689240, 33),
        new GymPokemon('Liepard', 1689240, 33),
        new GymPokemon('Watchog', 1689240, 34),
    ],
    'What? It looks like you can still fight!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (both)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 17'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 17',
    [
        new GymPokemon('Watchog', 1689240, 34),
        new GymPokemon('Krokorok', 1689240, 34),
        new GymPokemon('Krokorok', 1689240, 34),
    ],
    'Yes, I heard you are strong. You match what I heard exactly.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 18'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 18',
    [
        new GymPokemon('Scraggy', 1689240, 35),
        new GymPokemon('Watchog', 1689240, 35),
    ],
    'What a trainer!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (male)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 8'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 8',
    [
        new GymPokemon('Garbodor', 1689240, 36),
        new GymPokemon('Krokorok', 1689240, 36),
    ],
    'If I don\'t have Pokémon, I won\'t lose like this!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (both)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunt 19'] = new TemporaryBattle(
    'Memory Team Plasma Grunt 19',
    [
        new GymPokemon('Liepard', 1689240, 34),
        new GymPokemon('Trubbish', 1689240, 34),
        new GymPokemon('Trubbish', 1689240, 34),
    ],
    'Argh! Annoying!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunt',
        imageName: 'Memory Team Plasma Grunt (female)',
    }
);
TemporaryBattleList['Memory Team Plasma Grunts 9'] = new TemporaryBattle(
    'Memory Team Plasma Grunts 9',
    [
        new GymPokemon('Watchog', 1689240, 35),
        new GymPokemon('Trubbish', 1689240, 35),
        new GymPokemon('Scraggy', 1689240, 35),
        new GymPokemon('Liepard', 1689240, 35),
    ],
    'My king... I am so sorry.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Grunts',
        imageName: 'Memory Team Plasma Grunts (both)',
    }
);
TemporaryBattleList['Bianca 5'] = new TemporaryBattle(
    'Bianca 5',
    [
      new GymPokemon('Stoutland', 1689240, 38),
      new GymPokemon('Simisear', 1689240, 38, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
      new GymPokemon('Simipour', 1689240, 38, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
      new GymPokemon('Simisage', 1689240, 38, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
      new GymPokemon('Musharna', 1689240, 38),
      new GymPokemon('Samurott', 1689240, 40, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
      new GymPokemon('Serperior', 1689240, 40, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
      new GymPokemon('Emboar', 1689240, 40, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'Yep! You\'re amazing! I\'m really, really, really impressed! In Castelia City, my precious Pokémon was stolen by Team Plasma. So I really, really understand! If Team Plasma forces everyone to liberate their Pokémon, there will be nothing but sad people! Stop Team Plasma! Don\'t allow Pokémon to be stolen from trainers who love them! I think that\'s the truth—or ideal—that you\'ve been pursuing...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Bianca',
        returnTown: 'Icirrus City',
        imageName: 'Bianca',
    }
);
TemporaryBattleList['Iris'] = new TemporaryBattle(
    'Iris',
    [
        new GymPokemon('Fraxure', 1689240, 41),
        new GymPokemon('Druddigon', 1689240, 41),
        new GymPokemon('Haxorus', 1689240, 43),
    ],
    'Whoooa! That was so cool! I\'m sooo happy I could battle a Trainer as strong as you!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Gym Leader Iris',
    }
);
TemporaryBattleList['Cheren 7'] = new TemporaryBattle(
    'Cheren 7',
    [
        new GymPokemon('Unfezant', 1689240, 43),
        new GymPokemon('Simisage', 1689240, 43, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Simisear', 1689240, 43, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Simipour', 1689240, 43, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
        new GymPokemon('Liepard', 1689240, 43),
        new GymPokemon('Emboar', 1689240, 45, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Samurott', 1689240, 45, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Serperior', 1689240, 45, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'Yep, you are something else. And I mean that sincerely. Right now, there\'s no way I can compare with you. If there is anything I can do to help in the battle with N, just say so...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Cheren',
        returnTown: 'Opelucid City',
        imageName: 'Cheren',
    }
);
TemporaryBattleList['Shauntal'] = new TemporaryBattle(
    'Shauntal',
    [
        new GymPokemon('Cofagrigus', 1689240, 48),
        new GymPokemon('Jellicent', 1689240, 48),
        new GymPokemon('Golurk', 1689240, 48),
        new GymPokemon('Chandelure', 1689240, 50),
    ],
    'Wow. I\'m dumbstruck! I know a lot of words, but right now I can\'t figure out how to say this. Perhaps, if the feeling I\'m having now is put into words, it will be trapped there. So let me say this... My feeling is you\'re a great Trainer!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Elite Four Shauntal',
    }
);
TemporaryBattleList['Marshal'] = new TemporaryBattle(
    'Marshal',
    [
        new GymPokemon('Throh', 1689240, 48),
        new GymPokemon('Sawk', 1689240, 48),
        new GymPokemon('Conkeldurr', 1689240, 48),
        new GymPokemon('Mienshao', 1689240, 50),
    ],
    'There is no single strongest Pokémon or sole best combination... That\'s why it is difficult to keep winning. However, I think a heart that desires strength and strives to grow stronger is a precious ideal. That is why I respect you--because you have these things.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Elite Four Marshal',
    }
);
TemporaryBattleList['Grimsley'] = new TemporaryBattle(
    'Grimsley',
    [
        new GymPokemon('Scrafty', 1689240, 48),
        new GymPokemon('Krookodile', 1689240, 48),
        new GymPokemon('Liepard', 1689240, 48),
        new GymPokemon('Bisharp', 1689240, 50),
    ],
    'Whether or not you get to fight at full strength, whether or not luck smiles on you--none of that matters. Only results matter. And a loss is a loss. See, victory shines like a bright light. And right now, you and your Pokémon are shining brilliantly.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Elite Four Grimsley',
    }
);
TemporaryBattleList['Caitlin'] = new TemporaryBattle(
    'Caitlin',
    [
        new GymPokemon('Reuniclus', 1689240, 48),
        new GymPokemon('Musharna', 1689240, 48),
        new GymPokemon('Sigilyph', 1689240, 48),
        new GymPokemon('Gothitelle', 1689240, 50),
    ],
    'As a Trainer, you are both excellent and elegant. Your Pokémon have class. I am very pleased to have battled you.',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Elite Four Caitlin',
    }
);
TemporaryBattleList['Reshiram'] = new TemporaryBattle(
    'Reshiram',
    [new GymPokemon('Reshiram', 1689240, 50)],
    'Reshiram was caught!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)]
);
TemporaryBattleList['Zekrom'] = new TemporaryBattle(
    'Zekrom',
    [new GymPokemon('Zekrom', 1689240, 50)],
    'Zekrom was caught!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)]
);
TemporaryBattleList['N White 2'] = new TemporaryBattle(
    'N White',
    [new GymPokemon('Reshiram', 1689240, 70)],
    'I never expected to hear Pokémon say such things...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer N',
        imageName: 'N',
    }
);
TemporaryBattleList['N Black'] = new TemporaryBattle(
    'N Black',
    [
        new GymPokemon('Zekrom', 1689240, 52),
        new GymPokemon('Carracosta', 1689240, 50),
        new GymPokemon('Vanilluxe', 1689240, 50),
        new GymPokemon('Archeops', 1689240, 50),
        new GymPokemon('Klinklang', 1689240, 50),
        new GymPokemon('Zoroark', 1689240, 50),
    ],
    'Everything\'s ruined. The ideals I held... The dreams Pokémon shared...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma N',
        imageName: 'N',
    }
);
TemporaryBattleList['N White'] = new TemporaryBattle(
    'N White',
    [
        new GymPokemon('Reshiram', 1689240, 52),
        new GymPokemon('Carracosta', 1689240, 50),
        new GymPokemon('Vanilluxe', 1689240, 50),
        new GymPokemon('Archeops', 1689240, 50),
        new GymPokemon('Klinklang', 1689240, 50),
        new GymPokemon('Zoroark', 1689240, 50),
    ],
    'Everything\'s ruined. The truth I held... The dreams Pokémon shared...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma N',
        imageName: 'N',
    }
);
TemporaryBattleList['Ghetsis 3'] = new TemporaryBattle(
    'Ghetsis 3',
    [
        new GymPokemon('Cofagrigus', 1689240, 52),
        new GymPokemon('Bouffalant', 1689240, 52),
        new GymPokemon('Bisharp', 1689240, 52),
        new GymPokemon('Seismitoad', 1689240, 52),
        new GymPokemon('Eelektross', 1689240, 52),
        new GymPokemon('Hydreigon', 1689240, 54),
    ],
    'My calculations... No! My careful schemes! The world should be mine!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Team Plasma Ghetsis',
        imageName: 'Ghetsis2',
    }
);
TemporaryBattleList['N Black 2'] = new TemporaryBattle(
    'N Black 2',
    [new GymPokemon('Zekrom', 1689240, 70)],
    'I never expected to hear Pokémon say such things...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer N',
        imageName: 'N',
    }
);
TemporaryBattleList['N White 2'] = new TemporaryBattle(
    'N White',
    [new GymPokemon('Reshiram', 1689240, 70)],
    'I never expected to hear Pokémon say such things...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer N',
        imageName: 'N',
    }
);
TemporaryBattleList['Bianca 6'] = new TemporaryBattle(
    'Bianca 6',
    [
      new GymPokemon('Stoutland', 1689240, 63),
      new GymPokemon('Simisear', 1689240, 63, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
      new GymPokemon('Simipour', 1689240, 63, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
      new GymPokemon('Simisage', 1689240, 63, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
      new GymPokemon('Musharna', 1689240, 63),
      new GymPokemon('Mienshao', 1689240, 63),
      new GymPokemon('Chandelure', 1689240, 63),
      new GymPokemon('Samurott', 1689240, 65, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
      new GymPokemon('Serperior', 1689240, 65, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
      new GymPokemon('Emboar', 1689240, 65, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'Phew! I\'m totally sure. You\'re really a strong Trainer. I love your style of Pokémon battling. Somehow your Pokémon look like they\'re having so much fun!',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Bianca',
        imageName: 'Bianca',
    }
);
TemporaryBattleList['Cheren 8'] = new TemporaryBattle(
    'Cheren 8',
    [
        new GymPokemon('Liepard', 1689240, 65),
        new GymPokemon('Simisage', 1689240, 65, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Simisear', 1689240, 65, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Simipour', 1689240, 65, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
        new GymPokemon('Unfezant', 1689240, 65),
        new GymPokemon('Gigalith', 1689240, 65),
        new GymPokemon('Haxorus', 1689240, 65),
        new GymPokemon('Emboar', 1689240, 67, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Grass)),
        new GymPokemon('Samurott', 1689240, 67, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Fire)),
        new GymPokemon('Serperior', 1689240, 67, new StarterRequirement(GameConstants.Region.unova, GameConstants.Starter.Water)),
    ],
    'I\'ll keep battling many Trainers and Pokémon like this, and if I can learn what kind of person I am, it will open up my path. I\'m sure this path will lead me to become the person I\'m meant to be. Our Pokémon will always be with you and me as we go down our own paths. Our important friends, Pokémon...',
    [new QuestLineStepCompletedRequirement('A memory in Black and White', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Cheren',
        imageName: 'Cheren',
    }
);
TemporaryBattleList.DreamResearcher = new TemporaryBattle(
    'Dream Researcher',
    [new GymPokemon('Mega Audino', 125000000, 32)],
    'Wow! You have proven that you have total power over the realm of dreams! The location of this Audinite was revealed to me in a dream, you deserve to have it!</br><img src="assets/images/megaStone/531.png"/>',
    [new ObtainedPokemonRequirement('Landorus (Therian)'), new ObtainedPokemonRequirement('Audino')],
    undefined,
    {
        imageName: '../trainers/Scientist (female)',
        firstTimeRewardFunction: () => App.game.party.getPokemonByName('Audino').giveMegastone(),
    }
);

// Kalos Temporary Battles
TemporaryBattleList.Korrina = new TemporaryBattle(
    'Korrina',
    [new GymPokemon('Mega Lucario', 135000000, 32)],
    'What an incredible bond you have! What amazing power! You and Lucario are worthy of this Lucarionite!</br><img src="assets/images/megaStone/448.png"/>',
    [new GymBadgeRequirement(BadgeEnums.Rumble), new ObtainedPokemonRequirement('Lucario')],
    undefined,
    {
        imageName: '../gymLeaders/Korrina',
        firstTimeRewardFunction: () => App.game.party.getPokemonByName('Lucario').giveMegastone(),
    }
);
TemporaryBattleList['Aipom Alley'] = new TemporaryBattle(
    'Aipom Alley',
    [
        new GymPokemon('Aipom', 31200000, 66),
        new GymPokemon('Aipom', 31200000, 66),
        new GymPokemon('Aipom', 31200000, 66),
        new GymPokemon('Aipom', 31200000, 66),
        new GymPokemon('Aipom', 31200000, 66),
    ],
    '<i>The Aipoms run off, dropping a small glass vial.</i>',
    [new QuestLineStepCompletedRequirement('Detective Pikachu', 0)],
    undefined,
    {
        hideTrainer: true,
    }
);
TemporaryBattleList['Mime Interview'] = new TemporaryBattle(
    'Mime Interview',
    [new GymPokemon('Mr. Mime', 160225334, 100)],
    '<i>Mr. Mime relents and agrees to tell you what he knows.</i>',
    [new QuestLineStepCompletedRequirement('Detective Pikachu', 3)],
    undefined,
    {
        hideTrainer: true,
    }
);
TemporaryBattleList['Underground Fighting Ring'] = new TemporaryBattle(
    'Underground Fighting Ring',
    [
        new GymPokemon('Charizard', 83224411, 70),
        new GymPokemon('Magikarp', 10, 70),
        new GymPokemon('Gyarados', 85658821, 70),
    ],
    'OK, OK! I get my R from a guy at Clifford Industries, in Goldenrod City.',
    [new QuestLineStepCompletedRequirement('Detective Pikachu', 5)],
    undefined,
    {imageName: '../trainers/Veteran (male)'}
);
TemporaryBattleList['Lab Ambush'] = new TemporaryBattle(
    'Lab Ambush',
    [
        new GymPokemon('Greninja', 58333333, 70),
        new GymPokemon('Greninja', 58333333, 70),
        new GymPokemon('Greninja', 58333333, 70),
    ],
    '<i>As the dust clears from the battle, you see that Detective Pikachu has been wounded!</i>',
    [new QuestLineStepCompletedRequirement('Detective Pikachu', 9)],
    undefined,
    {
        hideTrainer: true,
    }
);
TemporaryBattleList.Imposter = new TemporaryBattle(
    'Imposter',
    [new GymPokemon('Ditto', 186753099, 100)],
    '<i>The Ditto loses its human form and collapses to the floor.</i>',
    [new QuestLineStepCompletedRequirement('Detective Pikachu', 12)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../trainers/Office Worker (male)',
    }
);
TemporaryBattleList['Possessed Mewtwo'] = new TemporaryBattle(
    'Possessed Mewtwo',
    [new GymPokemon('Mewtwo', 214456599, 100)],
    '<i>Howard\'s headset sparks and breaks. Mewtwo calms down, apparently free from Howard\'s influence. Mewtwo gives you a brief nod and flies off.</i>',
    [new QuestLineStepCompletedRequirement('Detective Pikachu', 14)],
    undefined,
    {
        hideTrainer: true,
    }
);
TemporaryBattleList.Riot = new TemporaryBattle(
    'Riot',
    [
        new GymPokemon('Ninjask', 136471274, 70),
        new GymPokemon('Ninjask', 136471274, 70),
        new GymPokemon('Greninja', 140718837, 70),
    ],
    'Curse you! Diancie has escaped!',
    [new QuestLineStepCompletedRequirement('Princess Diancie', 0)]
);
TemporaryBattleList.Merilyn = new TemporaryBattle(
    'Merilyn',
    [
        new GymPokemon('Yanma', 207131881, 80),
        new GymPokemon('Delphox', 212229898, 80),
    ],
    'You ruined my shopping spree!',
    [new QuestLineStepCompletedRequirement('Princess Diancie', 1)]
);
TemporaryBattleList['Millis and Argus Steel'] = new TemporaryBattle(
    'Millis and Argus Steel',
    [
        new GymPokemon('Honedge', 107376526, 70),
        new GymPokemon('Doublade', 110485698, 70),
        new GymPokemon('Aegislash (Blade)', 110510597, 70),
        new GymPokemon('Chesnaught', 111743528, 70),
    ],
    'Our plans are ruined! Retreat!',
    [new QuestLineStepCompletedRequirement('Princess Diancie', 3)]
);
TemporaryBattleList.AZ = new TemporaryBattle(
    'AZ',
    [
        new GymPokemon('Torkoal', 153757520, 60),
        new GymPokemon('Golurk', 153757520, 60),
        new GymPokemon('Sigilyph', 153757520, 60),
    ],
    'Thank you very much for battling with me. Now I finally feel free…',
    [new GymBadgeRequirement(BadgeEnums.Elite_KalosChampion)],
    undefined,
    {
        firstTimeRewardFunction: () => {
            App.game.party.gainPokemonById(670.05);
        },
    }
);
TemporaryBattleList['Ash Ketchum Kanto'] = new TemporaryBattle(
    'Ash Ketchum Kanto',
    [
        new GymPokemon('Pikachu (Partner Cap)', 83333000, 58),
        new GymPokemon('Pidgeot', 83333000, 56),
        new GymPokemon('Bulbasaur', 83333000, 56),
        new GymPokemon('Charizard', 83333000, 60),
        new GymPokemon('Squirtle', 83333000, 62),
        new GymPokemon('Muk', 83333000, 62),
    ],
    'That was a fun battle!',
    [new QuestLineStartedRequirement('The New Kid')],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Pallet Town',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Johto'] = new TemporaryBattle(
    'Ash Ketchum Johto',
    [
        new GymPokemon('Pikachu (Partner Cap)', 83333000, 58),
        new GymPokemon('Heracross', 83333000, 56),
        new GymPokemon('Noctowl', 83333000, 56),
        new GymPokemon('Bayleef', 83333000, 60),
        new GymPokemon('Cyndaquil', 83333000, 62),
        new GymPokemon('Totodile', 83333000, 62),
    ],
    'Don\'t I know you from somewhere?',
    [new QuestLineStepCompletedRequirement('The New Kid', 0), new RouteKillRequirement(10, GameConstants.Region.johto, 48)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Cianwood City',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Hoenn'] = new TemporaryBattle(
    'Ash Ketchum Hoenn',
    [
        new GymPokemon('Pikachu (Partner Cap)', 83333000, 58),
        new GymPokemon('Swellow', 83333000, 56),
        new GymPokemon('Grovyle', 83333000, 56),
        new GymPokemon('Torkoal', 83333000, 62),
        new GymPokemon('Corphish', 83333000, 60),
        new GymPokemon('Glalie', 83333000, 62),
    ],
    'That was a nice rematch. You sure are a strong Pokémon trainer! I\'ll beat you next time!',
    [new QuestLineStepCompletedRequirement('The New Kid', 1)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Lilycove City',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Sinnoh'] = new TemporaryBattle(
    'Ash Ketchum Sinnoh',
    [
        new GymPokemon('Pikachu (Partner Cap)', 83333000, 58),
        new GymPokemon('Staraptor', 83333000, 56),
        new GymPokemon('Torterra', 83333000, 56),
        new GymPokemon('Infernape', 83333000, 60),
        new GymPokemon('Buizel', 83333000, 62),
        new GymPokemon('Gible', 83333000, 62),
    ],
    'Wow, these battles are intense. It\'s getting hard to keep up with you... I think I need a break.',
    [new QuestLineStepCompletedRequirement('The New Kid', 2), new RouteKillRequirement(10, GameConstants.Region.sinnoh, 226)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Survival Area',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Unova'] = new TemporaryBattle(
    'Ash Ketchum Unova',
    [
        new GymPokemon('Pikachu (Partner Cap)', 83333000, 58),
        new GymPokemon('Unfezant', 83333000, 56),
        new GymPokemon('Snivy', 83333000, 62),
        new GymPokemon('Pignite', 83333000, 60),
        new GymPokemon('Oshawott', 83333000, 56),
        new GymPokemon('Krookodile', 83333000, 62),
    ],
    'Hey, what gives? I was just trying to relax here!',
    [new QuestLineStepCompletedRequirement('The New Kid', 3)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Mistralton City',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Kalos'] = new TemporaryBattle(
    'Ash Ketchum Kalos',
    [
        new GymPokemon('Pikachu (Partner Cap)', 83333000, 58),
        new GymPokemon('Talonflame', 83333000, 56),
        new GymPokemon('Hawlucha', 83333000, 56),
        new GymPokemon('Goodra', 83333000, 60),
        new GymPokemon('Noivern', 83333000, 62),
        new GymPokemon('Ash-Greninja', 83333000, 62),
    ],
    'I forgive you for chasing me around. I\'m going to take some time off with a long vacation on a tropical island! Will you take care of my Greninja for me? He has a special Bond while in Battle with his trainer.',
    [new QuestLineStepCompletedRequirement('The New Kid', 4)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Kiloude City',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Pinkan'] = new TemporaryBattle(
    'Ash Ketchum Pinkan',
    [
        new GymPokemon('Pinkan Pikachu', 83333000, 58),
        new GymPokemon('Snorlax', 83333000, 56),
        new GymPokemon('Lapras', 83333000, 56),
        new GymPokemon('Kingler', 83333000, 60),
        new GymPokemon('Tauros', 83333000, 62),
        new GymPokemon('Charizard', 83333000, 62),
    ],
    'Hey, you found me on my vacation! Just make sure your Pikachu does not eat the berries here.',
    [new QuestLineCompletedRequirement('The New Kid'), new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Pinkan Mountain'))],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Pinkan Mountain',
        imageName: 'Ash Ketchum',
        firstTimeRewardFunction: () => {
            App.game.party.gainPokemonById(25.13);
        },
    }
);

//Alola Temporary Battles
TemporaryBattleList['Ultra Wormhole'] = new TemporaryBattle(
    'Ultra Wormhole',
    [new GymPokemon('???', 264590972, 27)],
    '<i>The creature escaped back into the ultra wormhole.</i>',
    [new GymBadgeRequirement(BadgeEnums.RockiumZ)],
    undefined,
    {
        hideTrainer: true,
        imageName: 'Wormhole',
    }
);
TemporaryBattleList['Ultra Megalopolis'] = new TemporaryBattle(
    'Ultra Megalopolis',
    [new GymPokemon('Ultra Necrozma', 282601920, 60)],
    '<i>Necrozma fled.</i>',
    [new GymBadgeRequirement(BadgeEnums.DarkiniumZ)],
    undefined,
    {
        firstTimeRewardFunction: () => {
            App.game.quests.getQuestLine('Mina\'s Trial').beginQuest();
        },
        hideTrainer: true,
        imageName: 'Wormhole',
    }
);
TemporaryBattleList['Captain Mina'] = new TemporaryBattle(
    'Captain Mina',
    [
        new GymPokemon('Mawile', 90200640, 51),
        new GymPokemon('Granbull', 90200640, 51),
        new GymPokemon('Ribombee', 102200640, 51),
    ],
    'Woah! I\'m shocked at your strength!',
    [new TemporaryBattleRequirement('Ultra Megalopolis')],
    undefined,
    {imageName: '../gymLeaders/Mina'}
);
TemporaryBattleList['Captain Ilima'] = new TemporaryBattle(
    'Captain Ilima',
    [
        new GymPokemon('Gumshoos', 90200640, 51),
        new GymPokemon('Smeargle', 90200640, 51),
        new GymPokemon('Komala', 102200640, 51),
    ],
    'Yes! You have emerged victorious!',
    [
        new TemporaryBattleRequirement('Captain Mina'),
        new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Hau\'oli Cemetery')),
    ],
    undefined,
    {imageName: '../gymLeaders/Ilima'}
);
TemporaryBattleList['Captain Mallow'] = new TemporaryBattle(
    'Captain Mallow',
    [
        new GymPokemon('Trevenant', 90200640, 51),
        new GymPokemon('Shiinotic', 90200640, 51),
        new GymPokemon('Tsareena', 102200640, 51),
    ],
    'Sure enough, when it comes to you and Pokémon, the quality of the ingredients shines forth!',
    [new TemporaryBattleRequirement('Captain Ilima')],
    undefined,
    {imageName: '../gymLeaders/Mallow'}
);
TemporaryBattleList['Captain Lana'] = new TemporaryBattle(
    'Captain Lana',
    [
        new GymPokemon('Lanturn', 90200640, 51),
        new GymPokemon('Cloyster', 90200640, 51),
        new GymPokemon('Araquanid', 102200640, 51),
    ],
    'Well! Once again, you certainly reeled me in.',
    [new TemporaryBattleRequirement('Captain Mallow')],
    undefined,
    {imageName: '../gymLeaders/Lana'}
);
TemporaryBattleList['Captain Kiawe'] = new TemporaryBattle(
    'Captain Kiawe',
    [
        new GymPokemon('Arcanine', 90200640, 51),
        new GymPokemon('Talonflame', 90200640, 51),
        new GymPokemon('Alolan Marowak', 102200640, 51),
    ],
    'Not enough dancing!',
    [new TemporaryBattleRequirement('Captain Lana')],
    undefined,
    {imageName: '../gymLeaders/Kiawe'}
);
TemporaryBattleList['Captain Sophocles'] = new TemporaryBattle(
    'Captain Sophocles',
    [
        new GymPokemon('Togedemaru', 90200640, 51),
        new GymPokemon('Magnezone', 90200640, 51),
        new GymPokemon('Alolan Golem', 102200640, 51),
    ],
    'I couldn\'t get it done. Don\'t worry about it, my precious Pokémon...',
    [new TemporaryBattleRequirement('Captain Kiawe')],
    undefined,
    {imageName: '../gymLeaders/Sophocles'}
);
TemporaryBattleList['Kahuna Nanu'] = new TemporaryBattle(
    'Kahuna Nanu',
    [
        new GymPokemon('Sableye', 90200640, 51),
        new GymPokemon('Absol', 90200640, 51),
        new GymPokemon('Alolan Persian', 102200640, 51),
    ],
    '...',
    [new TemporaryBattleRequirement('Captain Sophocles')],
    undefined,
    {imageName: '../gymLeaders/Nanu'}
);
TemporaryBattleList.Anabel = new TemporaryBattle(
    'Anabel',
    [
        new GymPokemon('Alakazam', 229464883, 61),
        new GymPokemon('Weavile', 229464883, 61),
        new GymPokemon('Mismagius', 229464883, 61),
        new GymPokemon('Salamence', 229464883, 61),
        new GymPokemon('Snorlax', 234464883, 61),
    ],
    'Oh you\'re good! You might just have a shot, here are some Beast Balls. Go hunt down those strange Ultra Beasts! If you need more Beast Balls, you can buy them here.',
    [new QuestLineStepCompletedRequirement('Ultra Beast Hunt', 0)]
);
TemporaryBattleList['Captain Mina UB'] = new TemporaryBattle(
    'Captain Mina UB',
    [
        new GymPokemon('Klefki', 239464883, 61),
        new GymPokemon('Granbull', 239464883, 61),
        new GymPokemon('Shiinotic', 239464883, 61),
        new GymPokemon('Wigglytuff', 239464883, 61),
        new GymPokemon('Ribombee', 244464883, 61),
    ],
    'Your strength is still shocking!',
    [new QuestLineStepCompletedRequirement('Ultra Beast Hunt', 7)],
    undefined,
    {
        displayName: 'Captain Mina',
        imageName: '../gymLeaders/Mina',
    }
);
TemporaryBattleList['Kahuna Nanu UB'] = new TemporaryBattle(
    'Kahuna Nanu UB',
    [
        new GymPokemon('Sableye', 249464883, 63),
        new GymPokemon('Krookodile', 249464883, 63),
        new GymPokemon('Honchkrow', 249464883, 63),
        new GymPokemon('Absol', 249464883, 63),
        new GymPokemon('Alolan Persian', 254464883, 63),
    ],
    'I had to be sure. Sure that you\'re ready for what\'s coming...',
    [new QuestLineStepCompletedRequirement('Ultra Beast Hunt', 13)],
    undefined,
    {
        displayName: 'Kahuna Nanu',
        imageName: '../gymLeaders/Nanu',
    }
);
TemporaryBattleList['Ash Ketchum Alola'] = new TemporaryBattle(
    'Ash Ketchum Alola',
    [
        new GymPokemon('Pikachu (Partner Cap)', 182908638, 58),
        new GymPokemon('Rowlet', 182908638, 56),
        new GymPokemon('Incineroar', 182908638, 56),
        new GymPokemon('Lycanroc (Dusk)', 182908638, 60),
        new GymPokemon('Naganadel', 182908638, 62),
        new GymPokemon('Melmetal', 182908638, 62),
    ],
    'Thanks for battling with me again! I\'ve reignited my passion to battle after a nice, long break! I have no idea where I keep getting all these hats, but I have too many. Here, take this one for your Pikachu. It can help you grow together as partners!',
    [new QuestLineCompletedRequirement('The New Kid'), new RouteKillRequirement(10, GameConstants.Region.alola, 30)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Seafolk Village',
        imageName: 'Ash Ketchum',
        firstTimeRewardFunction: () => {
            App.game.party.gainPokemonById(25.07);
        },
    }
);

TemporaryBattleList['Rainbow Rocket Grunt 1'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 1',
    [
        new GymPokemon('Golbat', 433000000, 100),
        new GymPokemon('Raticate', 433000000, 100),
        new GymPokemon('Persian', 450000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Aether Paradise',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 2'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 2',
    [
        new GymPokemon('Weezing', 433000000, 100),
        new GymPokemon('Electrode', 433000000, 100),
        new GymPokemon('Cloyster', 450000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Aether Paradise',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);

TemporaryBattleList['Aether Branch Chief Faba'] = new TemporaryBattle(
    'Aether Branch Chief Faba',
    [
        new GymPokemon('Claydol', 450000000, 60),
        new GymPokemon('Bruxish', 450000000, 60),
        new GymPokemon('Hypno', 480000000, 60),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0)],
    undefined,
    {
        imageName: '../trainers/Aether Branch Chief (faba)',
    }
);

TemporaryBattleList['Team Aqua Leader Archie'] = new TemporaryBattle(
    'Team Aqua Leader Archie',
    [
        new GymPokemon('Mightyena', 270000000, 60),
        new GymPokemon('Crobat', 270000000, 60),
        new GymPokemon('Muk', 270000000, 60),
        new GymPokemon('Sharpedo', 270000000, 60),
        new GymPokemon('Kyogre', 300000000, 60),
    ],
    'You\'ve made your point. I can see you are not one to be trifled with.',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 1)],
    undefined,
    {
        imageName: '../trainers/Aqua Leader',
    }
);

TemporaryBattleList['Team Magma Leader Maxie'] = new TemporaryBattle(
    'Team Magma Leader Maxie',
    [
        new GymPokemon('Mightyena', 270000000, 60),
        new GymPokemon('Crobat', 270000000, 60),
        new GymPokemon('Weezing', 270000000, 60),
        new GymPokemon('Camerupt', 270000000, 60),
        new GymPokemon('Groudon', 300000000, 60),
    ],
    'I fell behind, but only by an inch.',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 1)],
    undefined,
    {
        imageName: '../trainers/Magma Leader',
    }
);

TemporaryBattleList['Team Galactic Leader Cyrus'] = new TemporaryBattle(
    'Team Galactic Leader Cyrus',
    [
        new GymPokemon('Houndoom', 225000000, 60),
        new GymPokemon('Honchkrow', 225000000, 60),
        new GymPokemon('Crobat', 225000000, 60),
        new GymPokemon('Weavile', 225000000, 60),
        new GymPokemon('Dialga', 225000000, 60),
        new GymPokemon('Palkia', 250000000, 60),
    ],
    'Impressive. Your prowess is notable.',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 2)],
    undefined,
    {
        imageName: '../trainers/Galactic Boss (cyrus)',
    }
);

TemporaryBattleList['Team Flare Leader Lysandre'] = new TemporaryBattle(
    'Team Flare Leader Lysandre',
    [
        new GymPokemon('Mienshao', 225000000, 60),
        new GymPokemon('Pyroar', 225000000, 60),
        new GymPokemon('Honchkrow', 225000000, 60),
        new GymPokemon('Mega Gyarados', 225000000, 60),
        new GymPokemon('Xerneas', 225000000, 60),
        new GymPokemon('Yveltal', 250000000, 60),
    ],
    'I can feel the fire of your convictions burning deep within your heart!',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 3)],
    undefined,
    {
        imageName: '../trainers/Team Flare Lysandre',
    }
);

TemporaryBattleList['Team Plasma Leader Ghetsis'] = new TemporaryBattle(
    'Team Plasma Leader Ghetsis',
    [
        new GymPokemon('Cofagrigus', 225000000, 60),
        new GymPokemon('Bouffalant', 225000000, 60),
        new GymPokemon('Bisharp', 225000000, 60),
        new GymPokemon('Hydreigon', 225000000, 60),
        new GymPokemon('Zekrom', 225000000, 60),
        new GymPokemon('Reshiram', 250000000, 60),
    ],
    'I couldn\'t have been defeated by some random Trainer from who knows where!',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 4)],
    undefined,
    {
        imageName: 'Ghetsis',
    }
);

TemporaryBattleList['Team Rainbow Leader Giovanni'] = new TemporaryBattle(
    'Team Rainbow Leader Giovanni',
    [
        new GymPokemon('Dugtrio', 230000000, 60),
        new GymPokemon('Nidoking', 230000000, 60),
        new GymPokemon('Nidoqueen', 230000000, 60),
        new GymPokemon('Rhyperior', 230000000, 60),
        new GymPokemon('Mega Mewtwo X', 230000000, 60),
        new GymPokemon('Mega Mewtwo Y', 260000000, 60),
    ],
    'Ha! That was a truly intense fight!',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 5)]
);

//Galar Temporary Battles
//TODO: Have Hop's starter depend on the players Galar starter
TemporaryBattleList['Hop 1'] = new TemporaryBattle(
    'Hop 1',
    [
        new GymPokemon('Wooloo', 96928085, 3),
        new GymPokemon('Sobble', 105005426, 5),
    ],
    'Well, that was a shock! Guess I know now why Lee thought he should give you a Pokémon, too...',
    [new GymBadgeRequirement(BadgeEnums.Elite_AlolaChampion)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Postwick',
        imageName: '../gymLeaders/Hop',
    }
);
TemporaryBattleList.Mirages = new TemporaryBattle(
    'Mirages',
    [
        new GymPokemon('Zacian (Battle Hero)', 114428989, 70),
        new GymPokemon('Zamazenta (Battle Hero)', 114428989, 70),
    ],
    '<i>The Pokémon fled.</i>',
    [new TemporaryBattleRequirement('Hop 1')],
    undefined,
    {
        hideTrainer: true,
    }
);
TemporaryBattleList['Hop 2'] = new TemporaryBattle(
    'Hop 2',
    [
        new GymPokemon('Wooloo', 88822988, 6),
        new GymPokemon('Rookidee', 88822988, 5),
        new GymPokemon('Sobble', 91598706, 8),
    ],
    'And I even got my Pokéball throw perfect too!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 2)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Professor Magnolia\'s House',
        imageName: '../gymLeaders/Hop',
    }
);
TemporaryBattleList['Hop 3'] = new TemporaryBattle(
    'Hop 3',
    [
        new GymPokemon('Wooloo', 102249719, 11),
        new GymPokemon('Rookidee', 102249719, 12),
        new GymPokemon('Sobble', 105348195, 14),
    ],
    'Was that really good training? Looks like I\'d better keep my guard up!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 6)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Motostoke',
        imageName: '../gymLeaders/Hop',
    }
);
TemporaryBattleList['Bede 1'] = new TemporaryBattle(
    'Bede 1',
    [
        new GymPokemon('Solosis', 110628515, 13),
        new GymPokemon('Gothita', 110628515, 15),
        new GymPokemon('Hatenna', 113980895, 16),
    ],
    'I see... Well, that\'s fine. I wasn\'t really trying all that hard anyway.',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Galar Mine'))],
    undefined,
    {
        displayName: 'Pokémon Trainer Bede',
        imageName: 'Bede',
    }
);
TemporaryBattleList['Hop 4'] = new TemporaryBattle(
    'Hop 4',
    [
        new GymPokemon('Wooloo', 145167441, 18),
        new GymPokemon('Corvisquire', 145167441, 19),
        new GymPokemon('Drizzile', 149566454, 21),
    ],
    'We both got ourselves the same Grass Badge, so how come you\'re so much stronger?',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 14)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Turffield',
        imageName: '../gymLeaders/Hop',
    }
);
TemporaryBattleList['Bede 2'] = new TemporaryBattle(
    'Bede 2',
    [
        new GymPokemon('Solosis', 135596164, 21),
        new GymPokemon('Gothita', 135596164, 22),
        new GymPokemon('Galarian Ponyta', 135596164, 22),
        new GymPokemon('Hatenna', 139970233, 23),
    ],
    'You showed at least a little effort, so I decided I should let you win!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Galar Mine No. 2'))],
    undefined,
    {
        displayName: 'Pokémon Trainer Bede',
        imageName: 'Bede',
    }
);
TemporaryBattleList['Marnie 1'] = new TemporaryBattle(
    'Marnie 1',
    [
        new GymPokemon('Croagunk', 183113060, 24),
        new GymPokemon('Scraggy', 183113060, 24),
        new GymPokemon('Morpeko', 188661940, 26),
    ],
    'You beat me... Guess you must not be so bad after all, huh?',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 15)],
    undefined,
    {
        displayName: 'Pokémon Trainer Marnie',
        imageName: '../gymLeaders/Marnie',
    }
);
TemporaryBattleList['Hop 5'] = new TemporaryBattle(
    'Hop 5',
    [
        new GymPokemon('Cramorant', 184350136, 28),
        new GymPokemon('Toxel', 184350136, 29),
        new GymPokemon('Silicobra', 184350136, 30),
        new GymPokemon('Drizzile', 190296915, 33),
    ],
    'My strategy goes right to pot when I\'ve got all these bad thoughts running through my head...',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 23)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Stow-on-Side',
        imageName: '../gymLeaders/Hop',
    }
);
TemporaryBattleList['Bede 3'] = new TemporaryBattle(
    'Bede 3',
    [
        new GymPokemon('Duosion', 197836220, 32),
        new GymPokemon('Gothorita', 197836220, 32),
        new GymPokemon('Galarian Ponyta', 197836220, 33),
        new GymPokemon('Hattrem', 204218033, 35),
    ],
    'This has to be some kind of mistake. I demand a do-over!',
    [new QuestLineStepCompletedRequirement('The Darkest Day', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Bede',
        returnTown: 'Stow-on-Side',
        imageName: 'Bede',
    }
);
TemporaryBattleList['Hop 6'] = new TemporaryBattle(
    'Hop 6',
    [
        new GymPokemon('Trevenant', 164138786, 34),
        new GymPokemon('Heatmor', 164138786, 34),
        new GymPokemon('Snorlax', 164138786, 35),
        new GymPokemon('Boltund', 164138786, 35),
        new GymPokemon('Inteleon', 169087694, 37),
    ],
    'This is rubbish... My team can\'t perform if I can\'t get my own head straight as their Trainer...',
    [new GymBadgeRequirement(BadgeEnums.Galar_Fairy)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Hammerlocke',
        imageName: '../gymLeaders/Hop',
    }
);
TemporaryBattleList['Hop 7'] = new TemporaryBattle(
    'Hop 7',
    [
        new GymPokemon('Dubwool', 169633690, 40),
        new GymPokemon('Corviknight', 169633690, 40),
        new GymPokemon('Pincurchin', 169633690, 39),
        new GymPokemon('Snorlax', 169633690, 39),
        new GymPokemon('Inteleon', 174748273, 41),
    ],
    'I still can\'t even beat you, my true rival... But I think I\'m starting to see the light!',
    [
        new MultiRequirement([
            new GymBadgeRequirement(BadgeEnums.Galar_Rock),
            new GymBadgeRequirement(BadgeEnums.Galar_Ice),
        ]),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Circhester',
        imageName: '../gymLeaders/Hop',
    }
);
TemporaryBattleList['Marnie 2'] = new TemporaryBattle(
    'Marnie 2',
    [
        new GymPokemon('Liepard', 214035920, 42),
        new GymPokemon('Toxicroak', 214035920, 43),
        new GymPokemon('Scrafty', 214035920, 43),
        new GymPokemon('Morpeko', 220940304, 44),
    ],
    'What\'s with that?! My Pokémon didn\'t get a chance to really do their thing at all. Ugh!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 30)],
    undefined,
    {
        displayName: 'Pokémon Trainer Marnie',
        returnTown: 'Circhester',
        imageName: '../gymLeaders/Marnie',
    }
);
TemporaryBattleList.Eternatus = new TemporaryBattle(
    'Eternatus',
    [new GymPokemon('Eternatus', 1454990842, 60)],
    '<i>You defeated Eternatus, but it looks like it\'s not over yet!</i>',
    [new QuestLineStepCompletedRequirement('The Darkest Day', 16)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/890',
    }
);
TemporaryBattleList['The Darkest Day'] = new TemporaryBattle(
    'The Darkest Day',
    [new GymPokemon('Eternamax Eternatus', 1567895148, 60)],
    '<b><i>You caught Eternatus!</i></b>',
    [new TemporaryBattleRequirement('Eternatus')],
    undefined,
    {
        firstTimeRewardFunction: () => {
            App.game.party.gainPokemonById(890);
        },
        hideTrainer: true,
        imageName: '../pokemon/890',
    }
);
TemporaryBattleList['Hop 8'] = new TemporaryBattle(
    'Hop 8',
    [
        new GymPokemon('Dubwool', 372064692, 59),
        new GymPokemon('Pincurchin', 372064692, 59),
        new GymPokemon('Cramorant', 372064692, 58),
        new GymPokemon('Snorlax', 372064692, 58),
        new GymPokemon('Corviknight', 372064692, 58),
        new GymPokemon('Inteleon', 375642238, 60),
    ],
    'I didn\'t expect there to be such a gap between you and me, mate...',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 0)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        imageName: '../gymLeaders/Hop',
    }
);
TemporaryBattleList['Sordward 1'] = new TemporaryBattle(
    'Sordward 1',
    [
        new GymPokemon('Sirfetch\'d', 443615594, 60),
        new GymPokemon('Golisopod', 443615594, 60),
        new GymPokemon('Doublade', 443615594, 60),
        new GymPokemon('Bisharp', 457925774, 60),
    ],
    'Oh... How can this be? My...my Pokémon...',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 2)],
    undefined,
    {
        displayName: 'Pokémon Trainer Sordward',
        imageName: 'Sordward',
    }
);
TemporaryBattleList['Shielbert 1'] = new TemporaryBattle(
    'Shielbert 1',
    [
        new GymPokemon('Sirfetch\'d', 443615594, 60),
        new GymPokemon('Bronzong', 443615594, 60),
        new GymPokemon('Falinks', 443615594, 60),
        new GymPokemon('Klinklang', 457925774, 60),
    ],
    'Oh... How can this be? My...my Pokémon...',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 2)],
    undefined,
    {
        displayName: 'Pokémon Trainer Shielbert',
        imageName: 'Shielbert',
    }
);
TemporaryBattleList['Rampaging Tsareena'] = new TemporaryBattle(
    'Rampaging Tsareena',
    [new GymPokemon('Tsareena', 1757548771, 60)],
    '<i>The Rampaging Tsareena fainted.</i>',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 3)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/763',
    }
);
TemporaryBattleList['Rampaging Gyarados'] = new TemporaryBattle(
    'Rampaging Gyarados',
    [new GymPokemon('Gyarados', 1757548771, 60)],
    '<i>The Rampaging Gyarados fainted.</i>',
    [new TemporaryBattleRequirement('Rampaging Tsareena')],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/130',
    }
);
TemporaryBattleList['Rampaging Torkoal'] = new TemporaryBattle(
    'Rampaging Torkoal',
    [new GymPokemon('Torkoal', 1757548771, 60)],
    '<i>The Rampaging Torkoal fainted.</i>',
    [new TemporaryBattleRequirement('Rampaging Gyarados')],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/324',
    }
);
TemporaryBattleList['Sordward & Shielbert'] = new TemporaryBattle(
    'Sordward & Shielbert',
    [
        new GymPokemon('Golisopod', 298548951, 62),
        new GymPokemon('Bronzong', 298548951, 62),
        new GymPokemon('Doublade', 298548951, 62),
        new GymPokemon('Falinks', 298548951, 62),
        new GymPokemon('Bisharp', 310734622, 62),
        new GymPokemon('Klinklang', 310734622, 62),
    ],
    'Quite the vexing predicament indeed, surely this must be some kind of mistake...',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 7)]
);
TemporaryBattleList['Rampaging Conkeldurr'] = new TemporaryBattle(
    'Rampaging Conkeldurr',
    [new GymPokemon('Conkeldurr', 1917325934, 60)],
    '<i>The Rampaging Conkeldurr fainted.</i>',
    [new TemporaryBattleRequirement('Sordward & Shielbert')],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/534',
    }
);
TemporaryBattleList['Rampaging Dusknoir'] = new TemporaryBattle(
    'Rampaging Dusknoir',
    [new GymPokemon('Dusknoir', 1917325934, 60)],
    '<i>The Rampaging Dusknoir fainted.</i>',
    [new TemporaryBattleRequirement('Sordward & Shielbert')],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/477',
    }
);
TemporaryBattleList['Gym Leader Bede'] = new TemporaryBattle(
    'Gym Leader Bede',
    [
        new GymPokemon('Mawile', 594371034, 61),
        new GymPokemon('Gardevoir', 594371034, 61),
        new GymPokemon('Galarian Rapidash', 594371034, 62),
        new GymPokemon('Hatterene', 613544294, 63),
    ],
    'Thank you for the battle. I can now accept you as the Champion. It\'s painful to admit, but I\'ve come to realise a few of my weaknesses. But I\'ll keep getting stronger. I\'ll reach the pinnacle of what Fairy types can do.',
    [
        new TemporaryBattleRequirement('Rampaging Conkeldurr'),
        new TemporaryBattleRequirement('Rampaging Dusknoir'),
    ],
    undefined,
    {imageName: '../gymLeaders/Bede'}
);
TemporaryBattleList['Rampaging Gigalith'] = new TemporaryBattle(
    'Rampaging Gigalith',
    [new GymPokemon('Gigalith', 1917325934, 60)],
    '<i>The Rampaging Gigalith fainted.</i>',
    [new TemporaryBattleRequirement('Gym Leader Bede')],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/526',
    }
);
TemporaryBattleList['Rampaging Froslass'] = new TemporaryBattle(
    'Rampaging Froslass',
    [new GymPokemon('Froslass', 1917325934, 60)],
    '<i>The Rampaging Froslass fainted.</i>',
    [new TemporaryBattleRequirement('Gym Leader Bede')],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/478',
    }
);
TemporaryBattleList['Gym Leader Marnie'] = new TemporaryBattle(
    'Gym Leader Marnie',
    [
        new GymPokemon('Liepard', 476934822, 59),
        new GymPokemon('Toxicroak', 476934822, 59),
        new GymPokemon('Scrafty', 476934822, 59),
        new GymPokemon('Morpeko', 476934822, 60),
        new GymPokemon('Grimmsnarl', 491314766, 60),
    ],
    'Yeah I lost, but I\'m gonna learn from your battle style and everythin\'!',
    [
        new TemporaryBattleRequirement('Rampaging Gigalith'),
        new TemporaryBattleRequirement('Rampaging Froslass'),
    ]
);
TemporaryBattleList['Rampaging Haxorus'] = new TemporaryBattle(
    'Rampaging Haxorus',
    [new GymPokemon('Haxorus', 2077103093, 60)],
    '<i>The Rampaging Haxorus fainted.</i>',
    [new TemporaryBattleRequirement('Gym Leader Marnie')],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/612',
    }
);
TemporaryBattleList['Sordward 2'] = new TemporaryBattle(
    'Sordward 2',
    [
        new GymPokemon('Sirfetch\'d', 554746301, 64),
        new GymPokemon('Golisopod', 554746301, 64),
        new GymPokemon('Doublade', 554746301, 64),
        new GymPokemon('Bisharp', 572641343, 64),
    ],
    'Oho... My noble Pokémon...',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 14)],
    undefined,
    {
        displayName: 'Pokémon Trainer Sordward',
        imageName: 'Sordward',
    }
);
TemporaryBattleList['Shielbert 2'] = new TemporaryBattle(
    'Shielbert 2',
    [
        new GymPokemon('Sirfetch\'d', 554746301, 64),
        new GymPokemon('Bronzong', 554746301, 64),
        new GymPokemon('Falinks', 554746301, 64),
        new GymPokemon('Klinklang', 572641343, 64),
    ],
    'Oho... My noble Pokémon...',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 14)],
    undefined,
    {
        displayName: 'Pokémon Trainer Shielbert',
        imageName: 'Shielbert',
    }
);
TemporaryBattleList['Rampaging Zacian'] = new TemporaryBattle(
    'Rampaging Zacian',
    [new GymPokemon('Zacian (Crowned Sword)', 2357932001, 70)],
    '<i>Zacian fainted.</i>',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 16)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/888.1',
    }
);
TemporaryBattleList['Rampaging Zamazenta'] = new TemporaryBattle(
    'Rampaging Zamazenta',
    [new GymPokemon('Zamazenta (Crowned Shield)', 2357932001, 70)],
    '<i>Zamazenta fainted.</i>',
    [new QuestLineStepCompletedRequirement('Sword and Shield', 16)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/889.1',
    }
);
TemporaryBattleList['Klara 1'] = new TemporaryBattle(
    'Klara 1',
    [
        new GymPokemon('Venipede', 799982445, 58),
        new GymPokemon('Galarian Slowpoke', 816143704, 60),
    ],
    'Oh, my next Pokémon\'s gonna make short work-- Huh? That was my last one?',
    [new GymBadgeRequirement(BadgeEnums.Elite_GalarChampion)],
    undefined,
    {
        displayName: 'Pokémon Trainer Klara',
        returnTown: 'Armor Station',
        imageName: '../gymLeaders/Klara',
    }
);
TemporaryBattleList['Avery 1'] = new TemporaryBattle(
    'Avery 1',
    [
        new GymPokemon('Abra', 799982445, 58),
        new GymPokemon('Galarian Slowpoke', 816143704, 60),
    ],
    'Such strength! I\'m in Psyshock!',
    [new GymBadgeRequirement(BadgeEnums.Elite_GalarChampion)],
    undefined,
    {
        displayName: 'Pokémon Trainer Avery',
        returnTown: 'Armor Station',
        imageName: '../gymLeaders/Avery',
    }
);
TemporaryBattleList.Mustard = new TemporaryBattle(
    'Mustard',
    [
        new GymPokemon('Mienfoo', 839981565, 60),
        new GymPokemon('Shinx', 856950891, 60),
    ],
    'That was everything I hoped for and more!',
    [new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 0)],
    undefined,
    {
        displayName: 'Dojo Master Mustard',
    }
);
TemporaryBattleList['Klara 2'] = new TemporaryBattle(
    'Klara 2',
    [
        new GymPokemon('Galarian Slowpoke', 564237041, 62),
        new GymPokemon('Koffing', 564237041, 62),
        new GymPokemon('Whirlipede', 581335135, 63),
    ],
    'Just what have you got that I don\'t?',
    [
        new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 6),
        new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Warm-Up Tunnel')),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Klara',
        imageName: '../gymLeaders/Klara',
    }
);
TemporaryBattleList['Avery 2'] = new TemporaryBattle(
    'Avery 2',
    [
        new GymPokemon('Galarian Slowpoke', 564237041, 62),
        new GymPokemon('Woobat', 564237041, 62),
        new GymPokemon('Kadabra', 581335135, 63),
    ],
    'What a Psystrike to my poor pride...',
    [
        new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 6),
        new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Warm-Up Tunnel')),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Avery',
        imageName: '../gymLeaders/Avery',
    }
);
TemporaryBattleList['Klara 3'] = new TemporaryBattle(
    'Klara 3',
    [
        new GymPokemon('Skorupi', 452051518, 65),
        new GymPokemon('Galarian Weezing', 452051518, 66),
        new GymPokemon('Whirlipede', 452051518, 66),
        new GymPokemon('Galarian Slowbro', 470316225, 67),
    ],
    'But I didn\'t hold back! I gave it everything I\'ve got...',
    [new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 9)],
    undefined,
    {
        displayName: 'Pokémon Trainer Klara',
        returnTown: 'Master Dojo',
        imageName: '../gymLeaders/Klara',
    }
);
TemporaryBattleList['Avery 3'] = new TemporaryBattle(
    'Avery 3',
    [
        new GymPokemon('Galarian Ponyta', 452051518, 65),
        new GymPokemon('Swoobat', 452051518, 66),
        new GymPokemon('Kadabra', 452051518, 66),
        new GymPokemon('Galarian Slowbro', 470316225, 67),
    ],
    'Oh, I should just Imprison myself for this!',
    [new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 9)],
    undefined,
    {
        displayName: 'Pokémon Trainer Avery',
        returnTown: 'Master Dojo',
        imageName: '../gymLeaders/Avery',
    }
);
TemporaryBattleList.Kubfu = new TemporaryBattle(
    'Kubfu',
    [new GymPokemon('Kubfu', 1886555626, 50)],
    undefined,
    [new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 11)],
    [new ObtainedPokemonRequirement('Kubfu')],
    {
        isTrainerBattle: false,
        hideTrainer: true,
        imageName: '../pokemon/891',
    }
);
TemporaryBattleList['Zarude Tribe 1'] = new TemporaryBattle(
    'Zarude Tribe 1',
    [
        new GymPokemon('Zarude', 379667456, 79),
        new GymPokemon('Zarude', 379667456, 80),
        new GymPokemon('Zarude', 379667456, 81),
        new GymPokemon('Zarude', 379667456, 81),
        new GymPokemon('Zarude', 379667456, 81),
    ],
    'Za! Za! Zarude!',
    [new QuestLineStepCompletedRequirement('Secrets of the Jungle', 3)],
    undefined,
    {
        displayName: 'Zarude Tribe',
        imageName: 'Zarude Tribe',
        hideTrainer: true,
    }
);
TemporaryBattleList['Zarude Tribe 2'] = new TemporaryBattle(
    'Zarude Tribe 2',
    [
        new GymPokemon('Zarude', 327054363, 82),
        new GymPokemon('Zarude', 327054363, 82),
        new GymPokemon('Zarude', 327054363, 83),
        new GymPokemon('Zarude', 327054363, 83),
        new GymPokemon('Zarude', 327054363, 84),
        new GymPokemon('Zarude', 327054363, 85),
    ],
    'Za! Za! Zarude!',
    [new QuestLineStepCompletedRequirement('Secrets of the Jungle', 5)],
    undefined,
    {
        displayName: 'Zarude Tribe',
        imageName: 'Zarude Tribe',
        hideTrainer: true,
    }
);
TemporaryBattleList['Zarude Tribe 3'] = new TemporaryBattle(
    'Zarude Tribe 3',
    [
        new GymPokemon('Zarude', 327054363, 85),
        new GymPokemon('Zarude', 327054363, 85),
        new GymPokemon('Zarude', 327054363, 86),
        new GymPokemon('Zarude', 327054363, 86),
        new GymPokemon('Zarude', 327054363, 87),
        new GymPokemon('Zarude', 327054363, 88),
    ],
    'Za! Za! Zarude!',
    [new QuestLineStepCompletedRequirement('Secrets of the Jungle', 5)],
    undefined,
    {
        displayName: 'Zarude Tribe',
        imageName: 'Zarude Tribe',
        hideTrainer: true,
    }
);
TemporaryBattleList['Ash Ketchum Galar'] = new TemporaryBattle(
    'Ash Ketchum Galar',
    [
        new GymPokemon('Pikachu (Partner Cap)', 348526193, 58),
        new GymPokemon('Sirfetch\'d', 342447247, 56),
        new GymPokemon('Dragonite', 342447247, 56),
        new GymPokemon('Dracovish', 342447247, 60),
        new GymPokemon('Gigantamax Gengar', 358657768, 62),
        new GymPokemon('Mega Lucario', 368789343, 62),
    ],
    '...I really thought I could beat you this time. Still, it was a really fun battle! Okay, let\'s go to Glimwood Tangle! I\'ll beat you there!',
    [new QuestLineStepCompletedRequirement('Secrets of the Jungle', 8)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Master Dojo',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Zarude (Dada)'] = new TemporaryBattle(
    'Zarude (Dada)',
    [new GymPokemon('Zarude (Dada)', 2090303973, 90)],
    'Zaru Zaruza. Zarude!',
    [new QuestLineStepCompletedRequirement('Secrets of the Jungle', 10)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/893.1',
    }
);
TemporaryBattleList['Flowering Celebi'] = new TemporaryBattle(
    'Flowering Celebi',
    [new GymPokemon('Flowering Celebi', 2132963238, 100)],
    'Cel Cel! Celebi!',
    [new QuestLineStepCompletedRequirement('Secrets of the Jungle', 12)],
    [new ObtainedPokemonRequirement('Flowering Celebi')],
    {
        isTrainerBattle: false,
        hideTrainer: true,
        imageName: '../pokemon/251.2',
    }
);
TemporaryBattleList.Peony = new TemporaryBattle(
    'Peony',
    [
        new GymPokemon('Copperajah', 869380472, 70),
        new GymPokemon('Aggron', 877467733, 70),
    ],
    'Gahahaaa! Look at me, takin\' a thrashin\' from a youngster like you!',
    [new GymBadgeRequirement(BadgeEnums.Elite_GalarChampion)],
    undefined,
    {
        displayName: 'Pokémon Trainer Peony',
    }
);
TemporaryBattleList.Calyrex = new TemporaryBattle(
    'Calyrex',
    [new GymPokemon('Calyrex', 1886555626, 80)],
    'Cracrown crow. Roooooowwwn rown crown.',
    [new QuestLineStepCompletedRequirement('The Crown of Galar', 0)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/898',
    }
);
TemporaryBattleList.Glastrier = new TemporaryBattle(
    'Glastrier',
    [new GymPokemon('Glastrier', 2031393560, 75)],
    '<i>The Pokémon ran away!</i>',
    [new QuestLineStepCompletedRequirement('The Crown of Galar', 4)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/896',
    }
);
TemporaryBattleList.Spectrier = new TemporaryBattle(
    'Spectrier',
    [new GymPokemon('Spectrier', 2031393560, 75)],
    '<i>The Pokémon ran away!</i>',
    [new QuestLineStepCompletedRequirement('The Crown of Galar', 4)],
    undefined,
    {
        hideTrainer: true,
        imageName: '../pokemon/897',
    }
);
TemporaryBattleList['Dyna Tree Birds'] = new TemporaryBattle(
    'Dyna Tree Birds',
    [
        new GymPokemon('Galarian Articuno', 710987746, 70),
        new GymPokemon('Galarian Zapdos', 710987746, 70),
        new GymPokemon('Galarian Moltres', 710987746, 70),
    ],
    '<i>The legendary birds fled in different directions.</i>',
    [new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 1)],
    undefined,
    {
        hideTrainer: true,
        returnTown: 'Dyna Tree Hill',
    }
);
TemporaryBattleList['Galarian Articuno 1'] = new TemporaryBattle(
    'Galarian Articuno 1',
    [new GymPokemon('Galarian Articuno', 2031393560, 100)],
    '<i>Galarian Articuno fled to elsewhere in the Crown Tundra.</i>',
    [
        new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 3),
        new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Roaring-Sea Caves')),
    ],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Articuno',
        returnTown: 'Roaring-Sea Caves',
        imageName: '../pokemon/144.1',
        visibleRequirement: new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 3),
    }
);
TemporaryBattleList['Galarian Articuno 2'] = new TemporaryBattle(
    'Galarian Articuno 2',
    [new GymPokemon('Galarian Articuno', 2031393560, 100)],
    '<i>Galarian Articuno fled to elsewhere in the Crown Tundra.</i>',
    [
        new TemporaryBattleRequirement('Galarian Articuno 1'),
        new RouteKillRequirement(10, GameConstants.Region.galar, 51),
    ],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Articuno',
        returnTown: 'Roaring-Sea Caves',
        imageName: '../pokemon/144.1',
        visibleRequirement: new TemporaryBattleRequirement('Galarian Articuno 1'),
    }
);
TemporaryBattleList['Galarian Articuno 3'] = new TemporaryBattle(
    'Galarian Articuno 3',
    [new GymPokemon('Galarian Articuno', 2031393560, 100)],
    '<i>Galarian Articuno fled to elsewhere in the Crown Tundra.</i>',
    [
        new TemporaryBattleRequirement('Galarian Articuno 2'),
        new RouteKillRequirement(10, GameConstants.Region.galar, 55),
    ],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Articuno',
        returnTown: 'Tunnel to the Top',
        imageName: '../pokemon/144.1',
        visibleRequirement: new TemporaryBattleRequirement('Galarian Articuno 2'),

    }
);
TemporaryBattleList['Galarian Zapdos 1'] = new TemporaryBattle(
    'Galarian Zapdos 1',
    [new GymPokemon('Galarian Zapdos', 2031393560, 100)],
    '<i>Galarian Zapdos fled to elsewhere in the Wild Area.</i>',
    [new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 3)],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Zapdos',
        returnTown: 'Motostoke',
        imageName: '../pokemon/145.1',
    }
);
TemporaryBattleList['Galarian Zapdos 2'] = new TemporaryBattle(
    'Galarian Zapdos 2',
    [new GymPokemon('Galarian Zapdos', 2031393560, 100)],
    '<i>Galarian Zapdos fled to elsewhere in the Wild Area.</i>',
    [
        new TemporaryBattleRequirement('Galarian Zapdos 1'),
        new RouteKillRequirement(10, GameConstants.Region.galar, 19),
    ],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Zapdos',
        returnTown: 'Dusty Bowl',
        imageName: '../pokemon/145.1',
        visibleRequirement: new TemporaryBattleRequirement('Galarian Zapdos 1'),
    }
);
TemporaryBattleList['Galarian Zapdos 3'] = new TemporaryBattle(
    'Galarian Zapdos 3',
    [new GymPokemon('Galarian Zapdos', 2031393560, 100)],
    '<i>Galarian Zapdos fled to elsewhere in the Wild Area.</i>',
    [
        new TemporaryBattleRequirement('Galarian Zapdos 2'),
        new RouteKillRequirement(10, GameConstants.Region.galar, 7),
    ],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Zapdos',
        returnTown: 'Motostoke',
        imageName: '../pokemon/145.1',
        visibleRequirement: new TemporaryBattleRequirement('Galarian Zapdos 2'),
    }
);
TemporaryBattleList['Galarian Moltres 1'] = new TemporaryBattle(
    'Galarian Moltres 1',
    [new GymPokemon('Galarian Moltres', 2031393560, 100)],
    '<i>Galarian Moltres fled to elsewhere in the Isle of Armor.</i>',
    [
        new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 3),
        new RouteKillRequirement(10, GameConstants.Region.galar, 37),
    ],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Moltres',
        returnTown: 'Courageous Cavern',
        imageName: '../pokemon/146.1',
        visibleRequirement: new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 3),
    }
);
TemporaryBattleList['Galarian Moltres 2'] = new TemporaryBattle(
    'Galarian Moltres 2',
    [new GymPokemon('Galarian Moltres', 2031393560, 100)],
    '<i>Galarian Moltres fled to elsewhere in the Isle of Armor.</i>',
    [
        new TemporaryBattleRequirement('Galarian Moltres 1'),
        new RouteKillRequirement(10, GameConstants.Region.galar, 41),
    ],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Moltres',
        returnTown: 'Master Dojo',
        imageName: '../pokemon/146.1',
        visibleRequirement: new TemporaryBattleRequirement('Galarian Moltres 1'),
    }
);
TemporaryBattleList['Galarian Moltres 3'] = new TemporaryBattle(
    'Galarian Moltres 3',
    [new GymPokemon('Galarian Moltres', 2031393560, 100)],
    '<i>Galarian Moltres fled to elsewhere in the Isle of Armor.</i>',
    [
        new TemporaryBattleRequirement('Galarian Moltres 2'),
        new RouteKillRequirement(10, GameConstants.Region.galar, 34),
    ],
    undefined,
    {
        hideTrainer: true,
        displayName: 'Galarian Moltres',
        returnTown: 'Master Dojo',
        imageName: '../pokemon/146.1',
        visibleRequirement: new TemporaryBattleRequirement('Galarian Moltres 2'),
    }
);
TemporaryBattleList.Regigigas = new TemporaryBattle(
    'Regigigas',
    [new GymPokemon('Regigigas', 2031393560, 100)],
    '<i>The ancient giant was defeated!</i>',
    [new QuestLineStepCompletedRequirement('The Ancient Golems', 6)],
    [new QuestLineStepCompletedRequirement('The Ancient Golems', 7)],
    {
        hideTrainer: true,
        isTrainerBattle: false,
        returnTown: 'Freezington',
        imageName: '../pokemon/486',
    }
);
