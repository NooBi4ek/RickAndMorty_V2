export enum PageRoutes {
    Episodes = 'Episodes',
    Characters = 'Characters',
    Location = 'Location',
    }
    
    export const pages = {
      [PageRoutes.Episodes]: () => '/Episodes',
      [PageRoutes.Characters]: () => '/Characters',
      [PageRoutes.Location]: () => '/Location',
    };