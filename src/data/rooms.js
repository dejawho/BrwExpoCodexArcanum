/* eslint-disable prettier/prettier */
export const ROOMS_DATA = [
    {
        name: 'Black Rose Room',
        image: require('../../assets/rooms/blackroseroom.png'),
        instability: 10,
        points: 6,
        effect: 'Devi scartare nelle tue Memorie 4 Magie dalla tua mano. Pesca le prime 3 carte dal mazzo delle Magie Dimenticate: scegline 1 e aggiungila alla tua mano. Piazza le altre in fondo al mazzo delle Magie Dimenticate nell’ordine che preferisci. Dopo essere stata giocata una Magia Dimenticata va rimossa dal gioco nella fase di Pulizia.',
    },
    {
        name: 'Mirrors Room',
        image: require('../../assets/rooms/mirrorsroom.png'),
        instability: 6,
        points: 3,
        color: 'rgb(154,180,215)',
        effect: 'Copia l’effetto di un’altra stanza già attivata. Attenzione! Questo effetto non risolve Missioni che richiedono l’attivazione di una particolare stanza, la Stanza degli Specchi è sempre considerata come quella attivata. Non puoi copiare l’effetto della Sala del Trono o della Stanza della Rosa Nera.',
    },
    {
        name: 'Oracle Room',
        image: require('../../assets/rooms/oracleroom.png'),
        instability: 6,
        points: 3,
        color: 'rgb(154,180,215)',
        effect: 'Prendi una carta a tua scelta dal tuo Grimorio e aggiungila alla tua mano. Poi rimescola il Grimorio.',
    },
    {
        name: 'The Abyss',
        image: require('../../assets/rooms/theabyss.png'),
        instability: 6,
        points: 3,
        color: 'rgb(154,180,215)',
        effect: 'Un Mago bersaglio entro distanza 1 è immediatamente piazzato nella sua Cella, il danno su di lui è rimosso e non è considerato sconfitto: il Mago bersaglio continua il suo turno dalla Cella. Se non ha nessuna azione Fisica per uscire dalla Cella, può scartare una Magia Pronta per muovere di 1 passo.',
    },
    {
        name: 'Bibliotheca',
        image: require('../../assets/rooms/library.png'),
        instability: 5,
        points: 2,
        color: 'rgb(249,181,43)',
        effect: 'Puoi pescare e aggiungere alla tua mano una carta da una delle Scuole di Magia. Puoi scegliere la prima carta scoperta dalla pila degli scarti o pescare la prima carta del mazzo.',
    },
    {
        name: 'Observatory',
        image: require('../../assets/rooms/observatory.png'),
        instability: 5,
        points: 2,
        color: 'rgb(249,181,43)',
        effect: 'Pesca 3 Missioni della Luna attuale. Puoi scegliere di scambiare 1 di queste Missioni con una delle tue. Se non hai Missioni nella tua mano non puoi fare lo scambio. Puoi scambiare la Missione anche se la tua carta è di una Luna differente, in questo caso metti la Missione scartata in cima al mazzo della Luna corrispondente.',
    },
    {
        name: 'Sanctuary',
        image: require('../../assets/rooms/sanctuary.png'),
        instability: 5,
        points: 2,
        color: 'rgb(249,181,43)',
        effect: 'Puoi curare fino a 2 danni da te stesso, puoi scegliere qualsiasi segnalino danno da rimuovere.',
    },
    {
        name: 'Forge',
        image: require('../../assets/rooms/forge.png'),
        instability: 4,
        points: 2,
        color: 'rgb(117,148,82)',
        effect: 'Puoi muovere ed effettuare un attacco. I Maghi normalmente infliggono 2 danni a meno che non ci siano Magie od oggetti che li potenzino',
    },
    {
        name: 'Garden',
        image: require('../../assets/rooms/garden.png'),
        instability: 4,
        points: 2,
        color: 'rgb(117,148,82)',
        effect: 'Piazza 1 delle tue instabilità nella stanza in cui ti trovi o in una qualsiasi stanza adiacente.',
    },
    {
        name: 'Treasure Room',
        image: require('../../assets/rooms/treasureroom.png'),
        instability: 4,
        points: 2,
        color: 'rgb(117,148,82)',
        effect: 'Guadagni 1 Punto Potere.',
    },
    {
        name: 'Alechemic Laboratory',
        image: require('../../assets/rooms/alchemiclab.png'),
        instability: 6,
        points: 3,
        color: 'rgb(151,57,51)',
        effect: 'Pesca 2 carte dal tuo Grimorio e aggiungile alla tua mano. Se il numero di carte nella tua mano eccede il numero massimo specificato sulla scheda del Mago, scarta un numero di Magie adeguato a riportarti entro il limite di mano.',
    },
    {
        name: 'Arena',
        image: require('../../assets/rooms/arena.png'),
        instability: 6,
        points: 3,
        color: 'rgb(151,57,51)',
        effect: 'Tu e un altro Mago in una qualsiasi stanza risolvete la vostra prossima Magia Pronta (o quella Rapida). Il Mago che ha attivato questa stanza è il primo a risolvere la sua magia, poi lo fa il Mago bersaglio. Il Mago bersaglio DEVE risolvere la sua Magia. Trappole e Protezioni risolte in questo modo diventano attive.',
    },
    {
        name: 'Summoner Room',
        image: require('../../assets/rooms/summonerroom.png'),
        instability: 6,
        points: 3,
        color: 'rgb(151,57,51)',
        effect: 'Evoca 1 Cerbero sotto il tuo controllo. Cerbero ha le seguenti caratteristiche:{evocationStats}Quando Cerbero attacca, converte anche 1 danno sul bersaglio.',
        evocationStats: {name: 'cerbero', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 2}, {type: 'health', value: 3}]},
    },
    {
        name: 'Armory',
        image: require('../../assets/rooms/armory.png'),
        instability: 6,
        points: 3,
        color: 'rgb(151,120,171)',
        effect: 'Puoi giocare una Protezione dalla tua mano; questa carta rimpiazza una di quelle che hai già giocato, Pronta o rivelata. La Protezione è considerata già attiva.',
    },
    {
        name: 'Pleasures Room',
        image: require('../../assets/rooms/pleasuresroom.png'),
        instability: 6,
        points: 3,
        color: 'rgb(151,120,171)',
        effect: 'Pesca la prima Missione dal mazzo della Luna attuale; se hai più di 2 Missioni, scartane una.',
    },
    {
        name: 'Thorne Room',
        image: require('../../assets/rooms/throneroom.png'),
        instability: 6,
        points: 3,
        color: 'rgb(151,120,171)',
        effect: 'Prendi la Corona del primo giocatore.',
    },
    {
        name: 'Cemetery',
        image: require('../../assets/rooms/cemetery.png'),
        instability: 6,
        points: 3,
        color: 'rgb(157,147,141)',
        effect: 'Evoca un Lanzichenecco sotto il tuo controllo. Il Lanzichenecco ha le seguenti caratteristiche:{evocationStats}',
        evocationStats: {name: 'lanzichenecco', stats: [{type: 'speed', value: 2}, {type: 'strength', value: 2}, {type: 'health', value: 3}]},
    },
    {
        name: 'Crypt',
        image: require('../../assets/rooms/crypt.png'),
        instability: 6,
        points: 3,
        color: 'rgb(157,147,141)',
        effect: 'Guarda le prime 3 carte delle tue Memorie, se ne hai: puoi sceglierne una e aggiungerla alla tua mano.',
    },
    {
        name: 'Sacrificial Altar',
        image: require('../../assets/rooms/sacrificialaltar.png'),
        instability: 6,
        points: 3,
        color: 'rgb(157,147,141)',
        effect: 'Infliggi 1 danno a un modello in gioco. Non puoi bersagliare un Mago nella sua Cella.',
    },
    {
        name: 'Room of Corrupt Power',
        image: require('../../assets/rooms/roomofcorruptpower.png'),
        instability: 3,
        set: 'Crono',
        color: 'rgb(151,120,171)',
        effect: 'Il giocatore che ha la corona perde 1 punto potere, poi prendi la corona. La stanza degli specchi non può copiare questo potere.',
    },
    {
        name: 'Sanctuary of Flames',
        image: require('../../assets/rooms/sanctuaryofflames.png'),
        instability: 3,
        set: 'Crono',
        color: 'rgb(151,57,51)',
        effect: 'Pesca 2 carte dal tuo grimorio ed infliggi 1 danno per ogni magia di combattimento ad un bersaglio entro distanza 1 dal santuario.',
    },
    {
        name: 'Hell\'s Door',
        image: require('../../assets/rooms/hellsdoor.png'),
        instability: 3,
        set: 'Crono',
        color: 'rgb(249,181,43)',
        effect: 'Al costo di 1 punto potere evoca un Cavaliere D\'Ossa.',
    },
    {
        name: 'Training Room',
        image: require('../../assets/rooms/trainingroom.png'),
        instability: 3,
        set: 'green',
        effect: 'Puoi muoverti ed attaccare, poi per ogni danno inflitto guarisci 1 tuo danno.',
    },
];
