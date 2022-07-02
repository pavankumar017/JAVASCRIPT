'use strict';

  // //object creation

  // const pavan ={
  //   firstname : 'Pavan',
  //   lastname : 'Kumar',
  //   birth_year : 1996,
  //   job: 'SDE-2',
  //   friends : ['Punith', 'Manu','Prakya'],
  //   calc_age : function(){
  //     return 2022 - this.birth_year //access a property in object
  //     this.age = 2022 - this.birth_year //write a new property inside a object 
  //   }
  // }
  
  // console.log(pavan);
  // //access objects

  // console.log(pavan.job)  //dot notation

  // const required = 'job';
  // console.log(pavan[required]);  //bracket notation - can be used for expression

  // console.log(pavan.location)

  // const friends = pavan.friends;
  // const no_of_freinds = friends.length;
  // const bestfriend = friends[1]



  // console.log(` ${pavan.firstname} has ${no_of_freinds} friends and ${bestfriend} is his bestfriend`)
  // console.log(pavan.calc_age())
  // console.log(pavan)'


  //coding chalenge

  const mark ={
    first_name : 'Mark',
    last_name : 'Miller',
    mass : 119,
    height : 1.69,
    bmi_calc : function(){
      this.bmi = this.mass / this.height **2;
      return this.bmi
    }
  }

  const john ={
    first_name : 'John',
    last_name : 'Smith',
    mass : 92,
    height : 1.95,
    bmi_calc : function(){
      this.bmi = this.mass / this.height **2;
      return this.bmi
    }
  }

  console.log(mark.bmi_calc());
  console.log(john.bmi_calc());
  const  mark_bmi = mark.bmi_calc();
  const john_bmi = john.bmi_calc();

  if (mark_bmi > john_bmi){
    console.log(`Marks BMI(${mark_bmi}) is greater than Marks BMI (${john_bmi})`);
  
  } else{
    console.log(`Jhons BMI(${john_bmi}) is greater than Marks BMI (${mark_bmi})`);
  }