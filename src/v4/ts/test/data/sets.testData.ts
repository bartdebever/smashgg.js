import { IGGSet } from '../../lib/GGSet'
import Data = IGGSet.Data
import SetData = IGGSet.SetData
import PlayerLite = IGGSet.PlayerLite
import * as gameData from './games.testData'

//11186682
export const set1: SetData = {
	"id": "11186682",
	"eventId": 23596,
	"phaseGroupId": 374033,
	"displayScore": "MVG FOX | Mew2King 3 - Ginger 0",
	"fullRoundText": "Winners Quarter-Final",
	"round": 2,
	"startedAt": null,
	"completedAt": 1510527738,
	"winnerId": 1106474,
	"totalGames": 5,
	"state": 3,
	"slots": [
		{
			"id": "11186682-0",
			"entrant": {
				"id": 1106474,
				"name": "MVG FOX | Mew2King",
				"participants": [
					{
						"id": 1148324
					}
				]
			}
		},
		{
			"id": "11186682-1",
			"entrant": {
				"id": 784069,
				"name": "Ginger",
				"participants": [
					{
						"id": 863946
					}
				]
			}
		}
	]
}


export const set2 = {
	"id": "11186683",
	"eventId": 23596,
	"phaseGroupId": 374033,
	"displayScore": "SS | Colbol 3 - Balance | Druggedfox 0",
	"fullRoundText": "Winners Quarter-Final",
	"round": 2,
	"startedAt": 1510527562,
	"completedAt": 1510527677,
	"winnerId": 1171874,
	"totalGames": 5,
	"state": 3,
	"slots": [
		{
			"id": "11186683-0",
			"entrant": {
				"id": 1171874,
				"name": "SS | Colbol",
				"participants": [
					{
						"id": 1207468
					}
				]
			}
		},
		{
			"id": "11186683-1",
			"entrant": {
				"id": 757871,
				"name": "Balance | Druggedfox",
				"participants": [
					{
						"id": 840037
					}
				]
			}
		}
	]
}

export const set3: SetData = {
	"id": "8798920",
	"eventId": 28338,
	"phaseGroupId": 389114,
	"displayScore": "Balance | Druggedfox 3 - RNG | Swedish Delight 1",
	"fullRoundText": "Losers Final",
	"round": -12,
	"startedAt": 1498972858,
	"completedAt": 1499109168,
	"winnerId": 789171,
	"totalGames": 5,
	"state": 3,
	"slots": [
		{
			"id": "8798920-0",
			"entrant": {
				"id": 789171,
				"name": "Balance | Druggedfox",
				"participants": [
					{
						"id": 868742
					}
				]
			}
		},
		{
			"id": "8798920-1",
			"entrant": {
				"id": 767565,
				"name": "RNG | Swedish Delight",
				"participants": [
					{
						"id": 849572
					}
				]
			}
		}
	]
}

export const set1WithGames: IGGSet.DataWithGames = {
		"set": {
			"games": gameData.games1
		}
	}

export const set2WithGames: IGGSet.DataWithGames = {
	"set": {
		"games": gameData.games2
	}
}

export const set3WithGames: IGGSet.DataWithGames = {
	"set": {
		"games": gameData.games3
	}
}

export const set1Full: IGGSet.Data = {
	"set": set1
}
export const set2Full: IGGSet.Data = {
	"set": set2
}
export const set3Full: IGGSet.Data = {
	"set": set3
}

export const p1: PlayerLite = new PlayerLite(
	'MVG FOX | Mew2King', 1106474, [1148324]
)

export const p2: PlayerLite = new PlayerLite(
	'Ginger', 784069, [863946]
)

export const p3: PlayerLite = new PlayerLite(
	'SS | Colbol', 1171874, [1207468]
)

export const p4: PlayerLite = new PlayerLite(
	'Balance | Druggedfox', 757871, [840037]
)

export const p5: PlayerLite = new PlayerLite(
	'Balance | Druggedfox',	789171, [868742]
)

export const p6: PlayerLite = new PlayerLite(
	'RNG | Swedish Delight', 767565,[849572]
)

export const parsedDisplayScore1 = {
	tag1: 'MVG FOX | Mew2King',
	tag2: 'Ginger',
	score1: 3,
	score2: 0
}

export const parsedDisplayScore2 = {
	tag1: 'SS | Colbol',
	tag2: 'Balance | Druggedfox',
	score1: 3,
	score2: 0
}
export const parsedDisplayScore3 = {
	tag1: 'Balance | Druggedfox',
	tag2: 'RNG | Swedish Delight',
	score1: 3,
	score2: 1
}