


//convert kilometer to Meter
function kilometerToMeter(kilometer) {
    let meter = 0;
    if (kilometer < 0) {
        return 'kilometer value can not be negative';
    }
    else{
      meter = kilometer * 1000;
    }
    return meter;
  }
  



//budget Calculator
function budgetCalculator(watch, phone, laptop) {
    let totalCost = 0;
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'Enter positive value'
    }
    else {
        totalCost = watch * 50 + phone * 100 + laptop * 500;
    }
    return totalCost;
}




//hotel Cost 
function hotelCost(day) {
    let totalCost = 0;
    if (day < 0) {
        return 'Day can not be negative'
    }
    else if (day <= 10) {
        totalCost = day * 100;

    }
    else if (day <= 20) {
        const cost_for_10_day = 10 * 100;
        const remaing_days = day - 10;
        const cost_for_among_20_day = remaing_days * 80;
        totalCost = cost_for_among_20_day + cost_for_10_day;

    }
    else {
        const cost_for_10_day = 10 * 100;
        const cost_for_20_day = 10 * 80;
        const remaing_days = day - 20;
        const cost_for_over_20_day = remaing_days * 50;
        totalCost = cost_for_over_20_day + cost_for_10_day + cost_for_20_day;

    }
    return totalCost;
}




//mega Friend
function megaFriend(friends){
    let length=0;
    let bigFriend="";
    for(let i=0;i<friends.length;i++){
     
      if(friends[i].length>length){
      length=friends[i].length;
      bigFriend=friends[i];
      }
    }
     return bigFriend;
    }
