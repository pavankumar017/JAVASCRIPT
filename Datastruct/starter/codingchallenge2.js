'use strict';

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, ' 🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.

const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
const key = 64;
gameEvents.delete(key);
console.log(gameEvents);

//3.
const tot_time = [...gameEvents.keys()].pop();
const avg_time = tot_time / gameEvents.size;
console.log(`An Event occurred on an avergae of evert ${avg_time} mins`);

//4.
for (const [key, values] of gameEvents) {
  //console.log(key);
  const half = key < 45 ? 'First' : 'Second';
  console.log(`${half}Half  ${key} : ${values}`);

  //console.log(values);
}
