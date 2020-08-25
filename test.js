const chatters = [{
  name: 'Alca',
  role: 'mod',
  favoriteColor: 'Blue',
  favoriteNumber: 42,
}, {
  name: 'MrDemonWolf',
  role: 'mod',
  favoriteColor: '#091533',
  favoriteNumber: 1337,
}, {
  name: 'Jon',
  role: 'vip',
  favoriteColor: 'Yellow',
  favoriteNumber: 109234,
}, {
  name: 'MajesticEye',
  role: 'vip',
  favoriteColor: 'Blue',
  favoriteNumber: 33,
}, {
  name: 'AndrewLaneX',
  role: 'mod',
  favoriteColor: '#262626',
  favoriteNumber: 1,
}];
 let chatter = [];
for (let i = 0; i < chatters.length; i += 1) {
  chatter = chatters[i];
  
}

console.log(chatter);