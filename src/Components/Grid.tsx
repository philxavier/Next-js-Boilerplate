import React from 'react';
import { Card } from './Card';
import css from './grid.module.scss';

import {citiesData} from '../cities-data'

export function Grid() {
  // const [cityData, setCityData] = React.useState(cities);
  const citiesNames = Object.keys(citiesData)
  return (
    <div className={`mt-32 ${css.grid}`}>
      {citiesNames.map((cityName, idx) => {
        return <Card cityName={cityName} cityData={citiesData[cityName]} />;
      })}
    </div>
  );
}
