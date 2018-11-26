Create method that takes an array and fills the grid.

Add buttons to let user set width, height, and box size.
* box size must be compatible (divisible) with width and height
* if not print an error or adjust grid down to nearest compatible box size

Add zoom buttons to increase and decrease gridSize.
* Preset sizes may be the best option here.
    * .5, 1, 5, 25, 50, 100
    
Add full screen button as well.
* Get inner width and height and fill screen with grid.
* Must find a way to deal with scroll bars.
    * Set styling to remove scroll bars or
    * Make grid slightly smaller so scroll bar doesn't appear.
* May only need to subtract a static value from width and height to account for this.  
  