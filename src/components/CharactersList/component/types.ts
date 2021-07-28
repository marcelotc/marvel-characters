export interface CharactersInterface {
    id: string;
    name: string;
    series: {
      items: [{
        name: string;
      }]
    }
    stories: {
      items: [{
        name: string;
      }]
    }
    thumbnail: {
      extension: string;
      path: string;
    }
}