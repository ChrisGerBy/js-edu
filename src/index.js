/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let hours = (knowsProgramming)? 800 : 1300;
      switch(focus) {
        case "family": 
          return Math.ceil(hours / config.family);
        case "friends": 
          return Math.ceil(hours / config.friends);
        case "normal_life": 
          return Math.ceil(hours / config.normal_life);
        case "profession": 
          return Math.ceil(hours / config.profession);
        case "carrier": 
          return Math.ceil(hours / config.carrier);
        case "top_peformance": 
          return Math.ceil(hours / config.top_peformance);
      }
  };
  