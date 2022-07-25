import React from 'react';
import css from './card.module.scss';
import { ICityData } from '../cities-data';
import Emoji from './Emoji';
interface ICard {
  cityName: string;
  cityData: ICityData;
}

function resolveWeatherMap(temperature:number) {
  if (temperature > -10 && temperature <=0) return weatherMap.cold
  if (temperature > 0 && temperature <= 10) return weatherMap.rainy
  if (temperature > 10 && temperature <=30) return weatherMap.cloudy
  else return weatherMap.sunny
}

const weatherMap = {
  cloudy:"🌤",
  rainy:'🌧',
  cold:'❄',
  sunny:'☀'
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

          <div className='flex flex-col justify-center items-center'>
            <p>
              {cityData.costOfLiving.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
              })} / mo
            </p>
            <p className='font-extrabold' style={{ fontSize: '8px' }}>
              Cost of Living
            </p>
          </div>
        </div>
        <div className='flex justify-center'>{cityName}</div>
        <div className='flex justify-between'>
          <div className='flex jutify-center align-center'>
            <Emoji symbol={resolveWeatherMap(cityData.temperature)} label='sunny'/>
            <p className='ml-2'>
              {cityData.temperature}
              {'\u00b0'}C
            </p>
          </div>
          <div className='flex'>
            <p className='mr-2'>{cityData.flightTime}hs</p>
            <Emoji symbol={'✈️'}/>
          </div>
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
