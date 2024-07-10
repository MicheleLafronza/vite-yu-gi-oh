// file di store management
import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    UrlApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    selected: '',
    options: [],
    UrlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchPar: 'archetype'
});