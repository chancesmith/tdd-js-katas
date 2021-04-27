// garden = [1,0,0,0,1]

// canPlant(garden, 1) --> true // plant at position 2
// canPlant(garden, 4) --> false // there are only 3 plots, and two of them can't be planted on

class Garden {
  canPlant(garden=[], plantsCount=0){
    if(isEmptyGarden(garden)) return false;
    if(isPlantsEmpty(plantsCount)) return false;
    if(isEnoughSpotsToPlant(garden, plantsCount)) return true;
    return false;
  }
}

function isEmptyGarden(garden){
  if (garden.length === 0) return true;
}
function isPlantsEmpty(plantsCount){
  if (plantsCount===0) return true;
}
function isEnoughSpotsToPlant(garden, plantsCount){
  const numOfSpotsLeft = garden.filter(spot => spot === 0).length;
  if (numOfSpotsLeft >= plantsCount) return true;
}

module.exports = Garden;
