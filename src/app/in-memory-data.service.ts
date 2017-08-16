import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const posts = [
      {
        id: 1,
        title: 'Angular',
        body: 'Angular 4 Hello post',
      },
      {
        id: 2,
        title: 'mongodb',
        body: 'Intro to mongodb',
      },
      {
        id: 3,
        title: 'postgresql',
        body: 'Intro to postgresql',
      },
      {
        id: 4,
        title: 'neo4j',
        body: 'Intro to neo4j',
      },
      {
        id: 5,
        title: 'redis',
        body: 'Intro to redis',
      }
    ]
    return {
      heroes,
      posts
    };
  }
}