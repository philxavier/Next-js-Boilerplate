import React from 'react';
import { Card } from './Card';
import css from './grid.module.scss';

import { citiesData } from '../cities-data';

export function Grid() {
  const citiesNames = Object.keys(citiesData);

  const [citiesInfo, setCitiesInfo] = React.useState<any>(null);

  React.useEffect(() => {
   setCitiesInfo(citiesData)
  },[])

  return (
    <div className={`mt-32 ${css.grid}`}>
      {citiesInfo && citiesNames.map((cityName) => {
        return <Card cityName={cityName} cityData={citiesInfo[cityName]} />;
      })}
    </div>
  );
}
