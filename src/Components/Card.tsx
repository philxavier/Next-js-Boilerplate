import React from 'react';
import css from './card.module.scss';
import { ICity } from '../cities-data';

interface ICard {
  cityName:string
  cityData:ICity
}

export function Card({cityName, cityData }:ICard) {

  return (
    <div
      style={{
        backgroundImage: `url(${cityData!.picUrl})` ,
        backgroundSize:'cover'
      }}
      className={css.cardContainer}
    >

      <div className='flex'>
       <p>{cityData!.rank}</p>

      </div>
      <div>
      {cityName}
      </div>
      <div>
        temp
      </div>
    </div>
  );
}
