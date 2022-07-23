import React from 'react';
import { Card } from './Card';
import css from './grid.module.scss';

const cities = [
  'Fort Francisca',
  'Washington',
  'Lake Aron',
  'West Leslie',
  'New Hunterville',
  'Hiramview',
  'Lake Dulce',
  'Leuschkeside',
  'West Cristinahaven',
  'South Dextershire',
  'Cummerataburgh',
  'Ogden',
  'Newark',
  'Urbana',
  'North Rahulmouth',
  'Considineville',
  'Port Torrance',
  'Fort Danika',
  'Genevievemouth',
  'East Alexandreashire',
  'Elnafurt',
  'Amiyaburgh',
  'Lynn',
  'South Marquis',
  'Zboncakfield',
  'Bechtelarfield',
  'Fort Lyda',
  'Ellicott City',
  'Mistymouth',
  'Sayreville',
  'Weissnatside'
];
export function Grid() {
  const [cityData, setCityData] = React.useState(cities);

  return (
    <div className={`mt-32 ${css.grid}`}>
      {cities.map((city) => {
        return <Card city={city} />;
      })}
    </div>
  );
}
