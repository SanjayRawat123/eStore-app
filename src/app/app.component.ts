import { Component } from '@angular/core';

// interface DataItem {
//     id: number;
//     sport: string;
//     level: string;
//     program: string;
//     year: string;
//     venue: {
//       location: string;
//     };
//     detail: {
//       cityAddress: string;
//       streetAdress: string;
//       type: string;
//     };
//     title: string;
//     status: string;
//     type: string;
//     dt_event: string;
//     tm_event: string;
  
// }

// interface Query {
//   level?: string | null;
//   program?: string | null;
//   sport?: string | null;
//   year?: number | null;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eStore-app';

//   data: DataItem[] = [
//     {
//       id: 2,
//       sport: 'Basketball',
//       level: 'Varsity',
//       program: 'Man',
//       year: '2024',
//       venue: {
//         location: 'Albert Ekka stadium',
//       },
//       detail: {
//         cityAddress: 'Street Address',
//         streetAdress: 'City Address',
//         type: 'Scheduled Event',
//       },
//       title: 'India vs NZ',
//       status: 'upcoming',
//       type: 'on-demand',
//       dt_event: '2024-04-25',
//       tm_event: '1200',
//     },
//     {
//       id: 3,
//       sport: 'Cricket',
//       level: 'Varsity',
//       program: 'Woman',
//       year: '2023',
//       venue: {
//         location: 'Albert Ekka stadium',
//       },
//       detail: {
//         cityAddress: 'Street Address',
//         streetAdress: 'City Address',
//         type: 'Scheduled Event',
//       },
//       title: 'India vs NZ',
//       status: 'upcoming',
//       type: 'on-demand',
//       dt_event: '2024-04-25',
//       tm_event: '1200',
//     },
//     {
//       id: 4,
//       sport: 'Cricket',
//       level: 'Varsity',
//       program: 'Woman',
//       year: '2023',
//       venue: {
//         location: 'Albert Ekka stadium',
//       },
//       detail: {
//         cityAddress: 'Street Address',
//         streetAdress: 'City Address',
//         type: 'Scheduled Event',
//       },
//       title: 'India vs NZ',
//       status: 'upcoming',
//       type: 'on-demand',
//       dt_event: '2024-04-25',
//       tm_event: '1200',
//     },
//   ];
//   // query: Query = {
//   //   level: 'Varsity',
//   //   program: 'Man',
//   //   sport: null,
//   //   year: 2024,
//   // };

//   // filterData(data: DataItem[], query: Query): DataItem[] {
//   //   return data.filter((item) => {
//   //     const attributes = item.attributes;
//   //     return (
//   //       (!query.level || attributes.level === query.level) &&
//   //       (!query.program || attributes.program === query.program) &&
//   //       (!query.sport || attributes.sport === query.sport) &&
//   //       (!query.year || attributes.year === query.year.toString())
//   //     );
//   //   });
//   // }
//   filterData(data: any[], query: any): DataItem[] {
//     return data.filter(item => {
//         for (let key in query) {
//             if (query[key] !== '' && item[key] !== query[key]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }
// query: Partial<DataItem> = {
//   level: '',
//   program: 'Man',
//   year: '',
// };

//   filter() {
//     const filteredData: DataItem[] = this.filterData(this.data, this.query);
//     console.log(filteredData);
//   }
}
