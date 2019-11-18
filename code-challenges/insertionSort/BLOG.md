# Insertion Sort
Insertion Sort is a sorting algorithm where you traverse element by element and compare each element to the one that came before it. You look for the element before to be less than to current element (stored in a temporary variable).

## Pseudo Code
![pseudo code](./assets/insertionSort.png)

## Trace

Sample Array: `[8,4,23,42,16,15]`

#### Pass 1:
![Pass 1](./assets/pass_1.jpg)
***
#### Pass 2:
![Pass 2](./assets/pass_2.jpg)
***
#### Pass 3:
![Pass 3](./assets/pass_3.jpg)
***
#### Pass 4:
![Pass 4](./assets/pass_4.jpg)
***
#### Pass 5:
![Pass 5](./assets/pass_5.jpg)
***
## Efficiency
* Time: O(n^2)
  * It is quadratic because we are sorting with 2 loops - an inner and outer. 
* Space: O(1)
  * Nothing is created, the array is sorted in place which keeps the space constant. 

  ***
  
  Resources:
  [Code Fellows Selection Sort](https://visualgo.net/en/sorting)   
  [Visualgo](https://visualgo.net/en/sorting)
