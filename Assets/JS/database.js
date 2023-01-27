const indexArray = [
	{ color: "", colorTxt: "V", meaning: "= Volume" },
	{ color: "", colorTxt: "P", meaning: "= Progress" },
	{ color: "read", colorTxt: "", meaning: "= Read" },
	{ color: "owned", colorTxt: "", meaning: "= Owned" },
	{ color: "not-owned", colorTxt: "", meaning: "= Not Owned" },
	{
		color: "not-translated",
		colorTxt: "",
		meaning: "= Not Translated",
	},
];

const data = [
	{
		tag: "LN",
		title: "A Lily Blooms in Another World",
		myStatus: "Completed",
		image: "A Lily Blooms in Another World.jpg",
		index: indexArray,
		progress: { total: 1, translated: 1, owned: 1, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "N/A" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "34",
			release: [
				{ lang: "JP: ", date: "24/02/2020" },
				{ lang: "EN: ", date: "07/10/2020" },
			],
		},
	},
	{
		tag: "LN",
		title: "Ascendance of a Bookworm: Part 1",
		myStatus: "Dropped",
		image: "Ascendance of a Bookworm Part 1.jpg",
		index: indexArray,
		progress: { total: 3, translated: 3, owned: 1, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Watched 3/3 Seasons" },
		],
		details: {
			chapters: "3",
			release: [
				{ lang: "JP: ", date: "25/01/2015" },
				{ lang: "EN: ", date: "03/09/2019" },
			],
		},
	},
	{
		tag: "LN",
		title: "Campfire Cooking in Another World with My Absurd Skill",
		myStatus: "Paused",
		image: "Campfire Cooking in Another World with My Absurd Skill.jpg",
		index: indexArray,
		progress: { total: 13, translated: 12, owned: 12, read: 11 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Releasing" },
		],
		details: {
			chapters: "110",
			release: [
				{ lang: "JP: ", date: "25/12/2022" },
				{ lang: "EN: ", date: "15/11/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Didn't I Say to Make My Abilities Average in the Next Life?!",
		myStatus: "Reading",
		image: "Didn't I Say to Make My Abilities Average in the Next Life!.jpg",
		index: indexArray,
		progress: { total: 17, translated: 14, owned: 14, read: 11 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Watched 1/1 Season" },
		],
		details: {
			chapters: "110",
			release: [
				{ lang: "JP: ", date: "07/07/2022" },
				{ lang: "EN: ", date: "04/10/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Dragon-san wa Tomodachi ga Hoshii!",
		myStatus: "Dropped",
		image: "Dragon-san wa Tomodachi ga Hoshii!.jpg",
		index: indexArray,
		progress: { total: 5, translated: 5, owned: 1, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "N/A" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "33",
			release: [
				{ lang: "JP: ", date: "16/04/2018" },
				{ lang: "EN: ", date: "27/02/2020" },
			],
		},
	},
	{
		tag: "LN",
		title: "Her Majesty’s Swarm",
		myStatus: "Dropped",
		image: "Her Majesty’s Swarm.jpg",
		index: indexArray,
		progress: { total: 4, translated: 5, owned: 1, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Dropped" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "12",
			release: [
				{ lang: "JP: ", date: "06/05/2021" },
				{ lang: "EN: ", date: "14/12/2021" },
			],
		},
	},
	{
		tag: "LN",
		title: "Heroine na Imouto, Akuyaku Reijou na Watashi",
		myStatus: "Dropped",
		image: "Heroine na Imouto, Akuyaku Reijou na Watashi.jpg",
		index: indexArray,
		progress: { total: 3, translated: 3, owned: 1, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "N/A" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "21",
			release: [
				{ lang: "JP: ", date: "23/12/2016" },
				{ lang: "EN: ", date: "24/02/2019" },
			],
		},
	},
	{
		tag: "LN",
		title: "How NOT to Summon a Demon Lord",
		myStatus: "Paused",
		image: "How NOT to Summon a Demon Lord.jpg",
		index: indexArray,
		progress: { total: 14, translated: 14, owned: 4, read: 3 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Watched 2/2 Seasons" },
		],
		details: {
			chapters: "12",
			release: [
				{ lang: "JP: ", date: "02/06/2021" },
				{ lang: "EN: ", date: "12/10/2021" },
			],
		},
	},
	{
		tag: "LN",
		title: "I Shall Survive Using Potions!",
		myStatus: "Paused",
		image: "I Shall Survive Using Potions!.jpg",
		index: indexArray,
		progress: { total: 8, translated: 7, owned: 6, read: 6 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Dropped" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "63",
			release: [
				{ lang: "JP: ", date: "02/08/2022" },
				{ lang: "EN: ", date: "02/08/2021" },
			],
		},
	},
	{
		tag: "LN",
		title: "I've Been Killing Slimes for 300 Years and Maxed Out My Level",
		myStatus: "Reading",
		image: "I've Been Killing Slimes for 300 Years and Maxed Out My Level.jpg",
		index: indexArray,
		progress: { total: 21, translated: 13, owned: 11, read: 7 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Paused" },
			{ name: "Anime", valueTxt: "Watched 1/1 Season" },
		],
		details: {
			chapters: "79",
			release: [
				{ lang: "JP: ", date: "11/08/2022" },
				{ lang: "EN: ", date: "08/11/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "I’m in Love with the Villainess",
		myStatus: "Dropped",
		image: "I’m in Love with the Villainess.jpg",
		index: indexArray,
		progress: { total: 5, translated: 5, owned: 1, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Upcoming" },
		],
		details: {
			chapters: "1",
			release: [
				{ lang: "JP: ", date: "26/08/2021" },
				{ lang: "EN: ", date: "06/09/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "If It’s for My Daughter, I’d Even Defeat a Demon Lord",
		myStatus: "Dropped",
		image: "If It’s for My Daughter, I’d Even Defeat a Demon Lord.jpg",
		index: indexArray,
		progress: { total: 9, translated: 9, owned: 4, read: 4 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Watched 1/1 Season" },
		],
		details: {
			chapters: "30",
			release: [
				{ lang: "JP: ", date: "21/09/2019" },
				{ lang: "EN: ", date: "07/07/2020" },
			],
		},
	},
	{
		tag: "LN",
		title: "In the Land of Leadale",
		myStatus: "Paused",
		image: "In the Land of Leadale.jpg",
		index: indexArray,
		progress: { total: 8, translated: 7, owned: 7, read: 6 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Paused" },
			{ name: "Anime", valueTxt: "Watched 1/1 Season" },
		],
		details: {
			chapters: "48",
			release: [
				{ lang: "JP: ", date: "28/01/2022" },
				{ lang: "EN: ", date: "13/12/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Kuma Kuma Kuma Bear",
		myStatus: "Reading",
		image: "Kuma Kuma Kuma Bear.jpg",
		index: indexArray,
		progress: { total: 19, translated: 13, owned: 13, read: 12 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Dropped" },
			{ name: "Anime", valueTxt: "Watched 1/1 Season" },
		],
		details: {
			chapters: "408",
			release: [
				{ lang: "JP: ", date: "07/10/2022" },
				{ lang: "EN: ", date: "25/01/2023" },
			],
		},
	},
	{
		tag: "LN",
		title: "My Daughter Left the Nest and Returned an S-Rank Adventurer",
		myStatus: "Reading",
		image: "My Daughter Left the Nest and Returned an S-Rank Adventurer.jpg",
		index: indexArray,
		progress: { total: 11, translated: 6, owned: 6, read: 5 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "66",
			release: [
				{ lang: "JP: ", date: "16/11/2022" },
				{ lang: "EN: ", date: "07/12/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "My Quiet Blacksmith Life in Another World",
		myStatus: "Dropped",
		image: "My Quiet Blacksmith Life in Another World.jpg",
		index: indexArray,
		progress: { total: 7, translated: 5, owned: 4, read: 3 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "30",
			release: [
				{ lang: "JP: ", date: "09/12/2022" },
				{ lang: "EN: ", date: "28/12/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Now I'm a Demon Lord! Happily Ever After with Monster Girls in My Dungeon",
		myStatus: "Planning",
		image: "Now I'm a Demon Lord! Happily Ever After with Monster Girls in My Dungeon.jpg",
		index: indexArray,
		progress: { total: 14, translated: 3, owned: 3, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "0",
			release: [
				{ lang: "JP: ", date: "09/09/2022" },
				{ lang: "EN: ", date: "17/01/2023" },
			],
		},
	},
	{
		tag: "LN",
		title: "Otome Game no Heroine de Saikyou Survival",
		myStatus: "Planning",
		image: "Otome Game no Heroine de Saikyou Survival.jpg",
		index: indexArray,
		progress: { total: 5, translated: 0, owned: 0, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "N/A" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "0",
			release: [
				{ lang: "JP: ", date: "15/12/2022" },
				{ lang: "", date: "" },
			],
		},
	},
	{
		tag: "LN",
		title: "Overlord",
		myStatus: "Paused",
		image: "Overlord.png",
		index: indexArray,
		progress: { total: 16, translated: 14, owned: 14, read: 14 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Paused" },
			{ name: "Anime", valueTxt: "Watched 4/4 Seasons" },
		],
		details: {
			chapters: "96",
			release: [
				{ lang: "JP: ", date: "29/07/2022" },
				{ lang: "EN: ", date: "28/06/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Prison Life is Easy for a Villainess",
		myStatus: "Dropped",
		image: "Prison Life is Easy for a Villainess.jpg",
		index: indexArray,
		progress: { total: 2, translated: 2, owned: 1, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Read" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "28",
			release: [
				{ lang: "JP: ", date: "18/01/2019" },
				{ lang: "EN: ", date: "25/05/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Reborn as a Vending Machine, I Now Wander the Dungeon",
		myStatus: "Paused",
		image: "Reborn as a Vending Machine, I Now Wander the Dungeon.jpg",
		index: indexArray,
		progress: { total: 3, translated: 3, owned: 3, read: 3 },
		extra: [
			{ name: "Status", valueTxt: "Hiatus" },
			{ name: "Manga", valueTxt: "Not Read" },
			{ name: "Anime", valueTxt: "Upcoming" },
		],
		details: {
			chapters: "83",
			release: [
				{ lang: "JP: ", date: "01/02/2017" },
				{ lang: "EN: ", date: "18/12/2018" },
			],
		},
	},
	{
		tag: "LN",
		title: "Reincarnated as a Sword",
		myStatus: "Reading",
		image: "Reincarnated as a Sword.jpg",
		index: indexArray,
		progress: { total: 14, translated: 11, owned: 11, read: 10 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Dropped" },
			{ name: "Anime", valueTxt: "Watched 1/1 Season" },
		],
		details: {
			chapters: "82",
			release: [
				{ lang: "JP: ", date: "30/09/2022" },
				{ lang: "EN: ", date: "27/12/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Sexiled: My Sexist Party Leader Kicked Me Out, So I Teamed Up With a Mythical Sorceress!",
		myStatus: "Completed",
		image: "Sexiled My Sexist Party Leader Kicked Me Out, So I Teamed Up With a Mythical Sorceress!.jpg",
		index: indexArray,
		progress: { total: 2, translated: 2, owned: 2, read: 2 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "22",
			release: [
				{ lang: "JP: ", date: "25/08/2019" },
				{ lang: "EN: ", date: "14/12/2019" },
			],
		},
	},
	{
		tag: "LN",
		title: "Skeleton Knight in Another World",
		myStatus: "Reading",
		image: "Skeleton Knight in Another World.jpg",
		index: indexArray,
		progress: { total: 10, translated: 9, owned: 9, read: 7 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Watched 1/1 Season" },
		],
		details: {
			chapters: "53",
			release: [
				{ lang: "JP: ", date: "25/03/2022" },
				{ lang: "EN: ", date: "27/05/2021" },
			],
		},
	},
	{
		tag: "LN",
		title: "So I'm a Spider, So What?",
		myStatus: "Reading",
		image: "So I'm a Spider, So What.jpg",
		index: indexArray,
		progress: { total: 16, translated: 15, owned: 15, read: 14 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Dropped" },
			{ name: "Anime", valueTxt: "Watched 1/1 Season" },
		],
		details: {
			chapters: "326",
			release: [
				{ lang: "JP: ", date: "08/01/2022" },
				{ lang: "EN: ", date: "22/11/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Tensei Kyuuketsuki-san wa Ohirune ga Shitai",
		myStatus: "Dropped",
		image: "Tensei Kyuuketsuki-san wa Ohirune ga Shitai.jpg",
		index: indexArray,
		progress: { total: 8, translated: 0, owned: 3, read: 3 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "65",
			release: [
				{ lang: "JP: ", date: "15/04/2019" },
				{ lang: "", date: "22/11/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "That Time I Got Reincarnated as a Slime",
		myStatus: "Reading",
		image: "That Time I Got Reincarnated as a Slime.jpg",
		index: indexArray,
		progress: { total: 20, translated: 15, owned: 15, read: 14 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Paused" },
			{ name: "Anime", valueTxt: "Watched 3/3 Seasons" },
		],
		details: {
			chapters: "113",
			release: [
				{ lang: "JP: ", date: "30/09/2022" },
				{ lang: "EN: ", date: "22/11/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "The Alchemist Who Survived Now Dreams of a Quiet City Life",
		myStatus: "Paused",
		image: "The Alchemist Who Survived Now Dreams of a Quiet City Life.jpg",
		index: indexArray,
		progress: { total: 6, translated: 6, owned: 6, read: 2 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "17",
			release: [
				{ lang: "JP: ", date: "01/08/2019" },
				{ lang: "EN: ", date: "27/04/2021" },
			],
		},
	},
	{
		tag: "LN",
		title: "The Combat Baker and Automaton Waitress",
		myStatus: "Paused",
		image: "The Combat Baker and Automaton Waitress.jpg",
		index: indexArray,
		progress: { total: 10, translated: 10, owned: 10, read: 2 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "N/A" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "20",
			release: [
				{ lang: "JP: ", date: "01/11/2019" },
				{ lang: "EN: ", date: "31/03/2021" },
			],
		},
	},
	{
		tag: "LN",
		title: "The Executioner and Her Way of Life",
		myStatus: "Dropped",
		image: "The Executioner and Her Way of Life.jpg",
		index: indexArray,
		progress: { total: 7, translated: 5, owned: 1, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Not Watched" },
		],
		details: {
			chapters: "9",
			release: [
				{ lang: "JP: ", date: "14/04/2022" },
				{ lang: "EN: ", date: "21/03/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady",
		myStatus: "Planning",
		image: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady.jpg",
		index: indexArray,
		progress: { total: 5, translated: 3, owned: 3, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Not Watched" },
		],
		details: {
			chapters: "0",
			release: [
				{ lang: "JP: ", date: "20/01/2023" },
				{ lang: "EN: ", date: "18/12/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "The NPCs in this Village Sim Game Must Be Real!",
		myStatus: "Completed",
		image: "The NPCs in this Village Sim Game Must Be Real!.jpg",
		index: indexArray,
		progress: { total: 3, translated: 3, owned: 3, read: 3 },
		extra: [
			{ name: "Status", valueTxt: "Completed" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "20",
			release: [
				{ lang: "JP: ", date: "10/11/2020" },
				{ lang: "EN: ", date: "10/03/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "The Saga of Tanya the Evil",
		myStatus: "Paused",
		image: "The Saga of Tanya the Evil.jpg",
		index: indexArray,
		progress: { total: 12, translated: 11, owned: 11, read: 4 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Dropped" },
			{ name: "Anime", valueTxt: "Watched 1/1 Anime, 1/1 Movie" },
		],
		details: {
			chapters: "20",
			release: [
				{ lang: "JP: ", date: "20/02/2020" },
				{ lang: "EN: ", date: "20/12/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "The Weakest Tamer Began a Journey to Pick Up Trash",
		myStatus: "Reading",
		image: "The Weakest Tamer Began a Journey to Pick Up Trash.jpg",
		index: indexArray,
		progress: { total: 8, translated: 2, owned: 2, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Reading" },
			{ name: "Anime", valueTxt: "Upcoming" },
		],
		details: {
			chapters: "75",
			release: [
				{ lang: "JP: ", date: "19/11/2022" },
				{ lang: "EN: ", date: "15/12/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "There’s No Freaking Way I’ll be Your Lover! Unless…",
		myStatus: "Dropped",
		image: "There’s No Freaking Way I’ll be Your Lover! Unless….jpg",
		index: indexArray,
		progress: { total: 4, translated: 1, owned: 1, read: 1 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "6",
			release: [
				{ lang: "JP: ", date: "25/10/2021" },
				{ lang: "EN: ", date: "09/05/2023" },
			],
		},
	},
	{
		tag: "LN",
		title: "Wandering Witch: The Journey of Elaina",
		myStatus: "Planning",
		image: "Wandering Witch The Journey of Elaina.jpg",
		index: indexArray,
		progress: { total: 19, translated: 9, owned: 9, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Not Watched" },
		],
		details: {
			chapters: "1",
			release: [
				{ lang: "JP: ", date: "14/09/2022" },
				{ lang: "EN: ", date: "04/10/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Welcome to the Outcast’s Restaurant!",
		myStatus: "Paused",
		image: "Welcome to the Outcast’s Restaurant!.jpg",
		index: indexArray,
		progress: { total: 4, translated: 2, owned: 2, read: 2 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "21",
			release: [
				{ lang: "", date: "14/09/2022" },
				{ lang: "EN: ", date: "13/06/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Why Shouldn’t a Detestable Demon Lord Fall in Love?!",
		myStatus: "Dropped",
		image: "Why Shouldn’t a Detestable Demon Lord Fall in Love!.jpg",
		index: indexArray,
		progress: { total: 4, translated: 4, owned: 2, read: 2 },
		extra: [
			{ name: "Status", valueTxt: "Finished" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "10",
			release: [
				{ lang: "JP: ", date: "28/12/2019" },
				{ lang: "EN: ", date: "07/09/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "Making Magic: The Sweet Life of a Witch Who Knows an Infinite MP Loophole",
		myStatus: "Planning",
		image: "Making Magic The Sweet Life of a Witch Who Knows an Infinite MP Loophole.jpg",
		index: indexArray,
		progress: { total: 7, translated: 1, owned: 1, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "0",
			release: [
				{ lang: "JP: ", date: "30/09/2022" },
				{ lang: "EN: ", date: "21/11/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "The Unwanted Undead Adventurer",
		myStatus: "Planning",
		image: "The Unwanted Undead Adventurer.jpg",
		index: indexArray,
		progress: { total: 11, translated: 10, owned: 10, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "Upcoming" },
		],
		details: {
			chapters: "0",
			release: [
				{ lang: "JP: ", date: "25/10/2022" },
				{ lang: "EN: ", date: "09/01/2023" },
			],
		},
	},
	{
		tag: "LN",
		title: "Reincarnated as an Apple: This Forbidden Fruit Is Forever Unblemished!",
		myStatus: "Planning",
		image: "Reincarnated as an Apple This Forbidden Fruit Is Forever Unblemished!.jpg",
		index: indexArray,
		progress: { total: 2, translated: 1, owned: 1, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "0",
			release: [
				{ lang: "JP: ", date: "19/11/2019" },
				{ lang: "EN: ", date: "30/11/2022" },
			],
		},
	},
	{
		tag: "LN",
		title: "The Invincible Little Lady",
		myStatus: "Planning",
		image: "The Invincible Little Lady.jpg",
		index: indexArray,
		progress: { total: 6, translated: 1, owned: 1, read: 0 },
		extra: [
			{ name: "Status", valueTxt: "Ongoing" },
			{ name: "Manga", valueTxt: "Not Reading" },
			{ name: "Anime", valueTxt: "N/A" },
		],
		details: {
			chapters: "0",
			release: [
				{ lang: "JP: ", date: "30/05/2022" },
				{ lang: "EN: ", date: "21/12/2022" },
			],
		},
	},
];
