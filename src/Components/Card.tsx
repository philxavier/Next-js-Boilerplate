import React from 'react';
import css from './card.module.scss';

export function Card({ city }: { city: string }) {
  return <div className={css.test}>{city}</div>;
}
