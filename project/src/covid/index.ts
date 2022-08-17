interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Global {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  // Date: "2022-08-17T11:49:07.387Z"
  // NewConfirmed: 494450
  // NewDeaths: 1916
  // NewRecovered: 0
  // TotalConfirmed: 590897862
  // TotalDeaths: 6435963
  // TotalRecovered: 0
  Message: string;
  ID: string;
}
