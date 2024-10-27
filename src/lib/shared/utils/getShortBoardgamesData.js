const getShortBoardgamesData = (games) => {
	return games.map((game) => ({
		iconWhite: game.iconWhiteUrl,
		logoWhite: game.logoWhiteUrl,
		iconDark: game.iconDarkUrl,
		logoDark: game.logoDarkUrl,
		logo: game.logoUrl,
		icon: game.iconUrl,
		shortDesc: game.shortDesc,
		officialSite: game.linkLanding,
		github: game.github,
		pricing: game.pricing,
		durationWorkshop: game.durationWorkshop,
		durationGame: game.durationGame,
		amountPlayers: game.amountPlayers,
		id: game.id,
		title: game.title,
		progress: game.progress,
		api: game.api
	}));
};


export default getShortBoardgamesData;