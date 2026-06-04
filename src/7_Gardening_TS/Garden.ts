// TDD Kata: Garden Plot
// canPlant(plots, n) where plots is [1,0,0,0,1] (1 is planted, 0 is empty).
// Returns true if there are at least n empty plots.

// Later Conversation: what if there is a 1M plot garden? should plants need space between them so they don't crowd? Do edges count as neighbors? What if a plant needs two spaces because it grows wide? What if numbers represent growth stages and we need to harvest or thin out mature plants before replanting?

// garden = [1,0,0,0,1]
// canPlant(garden, 0) --> false // no plants to plant
// canPlant(garden, 1) --> true // plant at position 2
// canPlant(garden, 4) --> false // there are only 3 plots, and two of them can't be planted on

export function canPlant() {}
