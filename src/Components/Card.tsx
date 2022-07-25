import React from 'react';
import css from './card.module.scss';
import { ICityData } from '../cities-data';

interface ICard {
  cityName: string;
  cityData: ICityData;
}

export function Card({ cityName, cityData }: ICard) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        className={`flex justify-center w-full text-xl font-bold ${css.cityData}`}
      >
        <div className='flex justify-between	'>
          <div className='flex flex-col items-center'>
            <p className=''>{cityData.rank}</p>
            <div className={css.underline} />
          </div>

          <div className='flex w-14 justify-center'>
            <p>
              {cityData.costOfLiving.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
              })}
              <p className='font-bold' style={{ fontSize: '7px' }}>
                Cost of Living
              </p>
            </p>
          </div>
        </div>
        <div className='flex justify-center'>{cityName}</div>
        <div className='flex justify-between'>
          <p>{cityData.temperature}</p>
          <p>{cityData.flightTime}</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${cityData!.picUrl})`,
          backgroundSize: 'cover',
          color: 'white'
        }}
        className={css.cardContainer}
      ></div>
    </div>
  );
}
