# smashgg.js
## Author: Brandon Cooke

smashgg.js is a Node.js wrapper for the public Smash.gg API, which is rich
with data about tournament brackets that have occurred on their platform.

# Requirements
* Node.js 7+
* ecmascript 6

```javascript
var smashgg = require('smashgg.js');
var tournament = new Tournament('ceo-2016');

tournament.on('ready', async function(){
    var players = await tournament.getAllPlayers();
    var sets = await tournament.getAllSets();

    console.log(players.length + ' players entered ' + tournament.getName() +  ' overall');
    players.forEach(player => {
        console.log(
            'Tag: ' + player.getTag() + '\n',
            'Name: ' + player.getName() + '\n',
            'State: ' + player.getState() + '\n'
        )
    });

    console.log(sets.length + ' sets were played at ' + tournament.getName());
    sets.forEach(set => {
            console.log(
                '[%s: %s %s - %s %s]',
            set.getRound(),
            set.getWinner().getTag(), //Player object
            set.getWinnerScore(),
            set.getLoserScore(),
            set.getLoser().getTag()
        );
        console.log(
            '%s placed %s at the tournament \n%s placed %s at the tournament\n',
            set.getWinner().getTag(),
            set.getWinnersTournamentPlacement(),
            set.getLoser().getTag(),
            set.getLosersTournamentPlacement()
        )
    })

    console.log('Done!');
    return process.exit(0);
});
```

##### Output
```
2592 players entered CEO 2016 overall
Tag: Gwabs
 Name: Ian Chiong
 State: FL

Tag: Benteezy
 Name: Benny Frias
 State: NY

Tag: Jinzo
 Name: Gene Zhou
 State: FL

.... continues ....

8150 sets were played at CEO 2016
[Losers Semi-Final: Haus 2 - 1 Benteezy]
Haus placed 33 at the tournament
Benteezy placed 97 at the tournament

[Winners Round 2: Benteezy 2 - 0 Sabelan]
Benteezy placed 97 at the tournament
Sabelan placed 257 at the tournament

[Losers Quarter-Final: Benteezy 2 - 0 NIX]
Benteezy placed 97 at the tournament
NIX placed 129 at the tournament

.... continues ....

```

