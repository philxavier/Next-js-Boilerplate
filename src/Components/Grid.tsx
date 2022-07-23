import React from 'react';
import { Card } from './Card';
import { cities } from '../MockData/Cities';
import css from './grid.module.scss';
export function Grid() {
  return (
    <div className={`mt-32 px-16 ${css.grid}`}>
      {cities.map((city) => {
        return <Card city={city} />;
      })}
    </div>
  );
}
