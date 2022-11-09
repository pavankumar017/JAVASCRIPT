'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map;
let mapevent = {};

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); // this is just for a unique id for objects that we create
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescrition() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, duration, distance);
    this.cadence = cadence;
    this.calcpace();
    this._setDescrition();
  }

  calcpace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevgain) {
    super(coords, duration, distance);
    this.elevgain = elevgain;
    this.calcspeed();
    this._setDescrition();
  }
  calcspeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const cy = new cycling([12, 3], 12, 45, 23);

//Application architecture
class App {
  #workouts = [];
  constructor() {
    this._getPosition(); // as soon as a instance is created , the methods insidet the constructor of the class is automatically executed.

    //get data from local storage
    this.getlocaldata();

    //events handles
    form.addEventListener('submit', this._newWorkout.bind(this)); //if u are havig event handles in classes to point this to newWorkout function
    inputType.addEventListener('change', this._toggleelevationField);

    //to move to that pin point when clicked on list
    containerWorkouts.addEventListener(
      'click',
      this._moveToPinLocation.bind(this)
    );
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      //if suceess will call the fucntcion if falilres 2 function
      this._loadMap.bind(this),
      function () {
        alert('Failed to get coordinate');
      }
    );
  }

  _loadMap(position) {
    console.log(position + 'position');
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    const coords = [latitude, longitude];
    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //handling click on map
    map.on('click', function (mape) {
      console.log(mape, typeof mape);
      mapevent = mape;
      console.log(mapevent + ' mapevent');
      form.classList.remove('hidden');
      inputDistance.focus();
    });
    this.#workouts.forEach(work => {
      //local storage from
      this.renderWorkout(work);
    });
  }
  // this._showForm.bind(this)
  _showForm(mapeve) {
    console.log(mapeve + 'mapeve');
  } // getting error here need to fix this

  // for selecting a type
  _toggleelevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    //function to validate the inputs
    const validinputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allpositve = (...inputs) => inputs.every(inp => inp >= 0);

    e.preventDefault();
    //get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = mapevent.latlng;
    console.log(lat, lng);

    let workout_render;

    //if workout is running - create run object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //check values are positive - and validate
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validinputs(distance, duration, cadence) ||
        !allpositve(distance, duration, cadence)
      ) {
        return alert('Enter only Postive inputs ');
      }
      workout_render = new running([lat, lng], distance, duration, cadence);
      this.#workouts.push(workout_render);
    }

    //if workout is cycling - create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        //   !Number.isFinite(distance) ||
        //   !Number.isFinite(duration) ||
        //   !Number.isFinite(elevation)
        !validinputs(distance, duration, elevation) ||
        !allpositve(distance, duration)
      ) {
        return alert('Enter only Postive inputs ');
      }
      workout_render = new cycling([lat, lng], distance, duration, elevation);
      this.#workouts.push(workout_render);
    }

    console.log('work', workout_render);
    //clear fields

    this._hideform();

    //pop up on map
    this.renderWorkout(workout_render);

    //Render the workout list
    this._renderWorkOutList(workout_render);

    //set local storage
    this.setlocalstorage();
  }

  //render workout and pop up display methods
  renderWorkout(workout_render) {
    const { lat, lng } = mapevent.latlng;
    console.log(workout_render.type);
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          className: `${workout_render.type}-popup`,
          closeOnClick: false,
        })
      )
      .setPopupContent(
        `${workout_render.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${
          workout_render.description
        }`
      )
      .openPopup();
  }

  _renderWorkOutList(workout_render) {
    let html = `
     <li class="workout workout--${workout_render.type}" data-id=${
      workout_render.id
    }>
    <h2 class="workout__title">${workout_render.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout_render.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout_render.distance}/span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value"${workout_render.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    `;

    if (workout_render.type === 'running') {
      html =
        html +
        `<div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout_render.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout_render.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>`;
    }

    if (workout_render.type === 'cycling') {
      html =
        html +
        `
      <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout_render.speed.toFixed(
              1
            )}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout_render.elevgain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li> `;
    }
    form.insertAdjacentHTML('afterend', html);
  }

  _hideform() {
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    form.classList.add('hidden');
  }

  _moveToPinLocation(e) {
    const Workel = e.target.closest('.workout');
    console.log(Workel);
    if (!Workel) return null;
    const clickedWorkout = this.#workouts.find(
      work => work.id === Workel.dataset.id
    );
    console.log(clickedWorkout);
    console.log(clickedWorkout.coords);

    // tp move on clicked point
    map.setView(clickedWorkout.coords, 13, {
      animate: true,
      pan: {
        durataion: 1,
      },
    });
    clickedWorkout.click();
  }

  setlocalstorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  getlocaldata() {
    const local_data = JSON.parse(localStorage.getItem('workouts'));
    console.log(local_data);
    if (!local_data) return;

    this.#workouts = local_data;
    this.#workouts.forEach(work => {
      console.log(work);
      this._renderWorkOutList(work);
      // this.renderWorkout(work);  // pin to be used only after the map is loaded. so do in in loadmap function
    });
  }
}

const app = new App();

//pn enter after form fill
