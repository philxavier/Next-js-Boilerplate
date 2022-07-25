

export interface ICityData {picUrl:string, rank:number, temperature:number, flightTime:number, costOfLiving:number}
export interface ICity {
  // 👇️ key         value
  [key: string]:  ICityData;
}

function getRandomInt(min:number, max:number):number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const citiesData:ICity = {
  Miami: {picUrl: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlhbWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', rank: 1, temperature: getRandomInt(-10, 40), flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'San Diego': {picUrl: 'https://images.unsplash.com/photo-1593970107436-6b5c6f8f1138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FuJTIwZGllZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', rank: 2, temperature:getRandomInt(-10, 40) , flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},
   
 
  'Denver': {picUrl:  'https://images.unsplash.com/photo-1586740070162-41777c99457f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVudmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', rank: 2, temperature:getRandomInt(-10, 40) , flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'Jacksonville': {picUrl:  'https://images.unsplash.com/photo-1613231365618-5ebf85a8209e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFja3NvbnZpbGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , rank: 3, temperature: getRandomInt(-10,40), flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'Raleigh': {picUrl:  'https://images.unsplash.com/photo-1526870785157-7bcfdcaf5cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFsZWlnaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , rank: 4, temperature: getRandomInt(-10,40), flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'Boston': {picUrl:  'https://images.unsplash.com/photo-1573524949339-b830334a31ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9zdG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , rank: 5, temperature:getRandomInt(-10, 40) , flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'San Francisco': {picUrl:  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuJTIwZnJhbmNpc2NvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , rank: 6, temperature: getRandomInt(-10,40), flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'Los Angeles': {picUrl:  'https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , rank: 7, temperature: getRandomInt(-10,40), flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

 
  'Atlanta': {picUrl:  'https://images.unsplash.com/photo-1611106014123-092d7642f560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXRsYW50YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , rank: 8, temperature:getRandomInt(-10, 40) , flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},
  
  'Nova York': {picUrl:  'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , rank: 9, temperature:getRandomInt(-10, 40) , flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'Chicago': {picUrl:  'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2Fnb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , rank: 10, temperature:getRandomInt(-10, 40) , flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'Houston': {picUrl:  'https://images.unsplash.com/photo-1622007151631-25aa98ab394b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c3RvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , rank: 11, temperature: getRandomInt(-10,40), flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'Hartford': {picUrl:  'https://images.unsplash.com/photo-1611008715758-e56c60b9476d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFydGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' , rank: 12, temperature: getRandomInt(-10,40), flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},


  'Orlando': {picUrl:  'https://images.unsplash.com/photo-1618945372420-2470ece5277c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3JsYW5kb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , rank: 13, temperature:getRandomInt(-10, 40) , flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

  'Washington': {picUrl:  'https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZ3RvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' , rank: 14, temperature: getRandomInt(-10,40), flightTime: getRandomInt(8,16), costOfLiving: getRandomInt(1000, 5000)},

};

export {citiesData}