import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort.js';
import {Quick} from '../SortingAlgorithms/QuickSort.js';
import {Heap}  from '../SortingAlgorithms/HeapSort.js';
import {Bubble} from '../SortingAlgorithms/BubbleSort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 2;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 250;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      array: [],
      
    };

    
  }

  handleClick(algorithm) {
    const { updateAlgorithm } = this.props;

    updateAlgorithm(algorithm);
  }

  componentDidMount() {
    this.resetArray();
  }

  sort(algorithm) {
    switch(algorithm) {
      case "mergeSort":
       this.mergeSort();
       break;
       case "quickSort":
         this.quickSort();
        break;
        case "heapSort":
          this.heapSort();
        break;
        case "bubbleSort":
          this.bubbleSort();
        break;
        default:
        break;

    }
  }

  

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 750));
    }
   
    this.setState({array});
  
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const arrayBars = document.getElementsByClassName('array-bar');
    Quick(arrayBars, this.state.array);
  }

  heapSort() {
    const arrayBars = document.getElementsByClassName('array-bar');
    Heap(arrayBars, this.state.array);
  }

  bubbleSort() {
    const arrayBars = document.getElementsByClassName('array-bar');
    Bubble(arrayBars, this.state.array);
  }

  
  setAlgorithm(algorithm) {
    this.setState({algorithm});
  }

  


  render() {
    const {
      array,
      algorithm,
      isRunning
    } = this.state;


    const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";

    const cursor = isRunning ? "auto" : "pointer";

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`
            }}></div>
        ))}
        <nav>

            
            <li className="nav__link">
                    <button className="
                    nav_link--anchor
                    nav_link--anchor-primary
                    newarray
                    "
                    onClick={() => this.resetArray()}>Generate New Array</button>
                </li>
           
                <li className="nav__link">
                    <button className={`
                    nav_link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    astext ${this.state.valid ? 'activeAlg' : 'null'}
                    ${algorithm === "mergeSort" ? "currentAlgorithmButton" : "algorithmButton"}
                    `}
                    onClick={() => this.setAlgorithm("mergeSort")}>
                    Merge Sort</button>
                </li>

                <li className="nav__link">
                    <button className={`
                    nav_link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    astext ${this.state.valid ? 'activeAlg' : 'null'}
                    ${algorithm === "quickSort" ? "currentAlgorithmButton" : "algorithmButton"}
                    `}
                    onClick={() => this.setAlgorithm("quickSort")}>
                    Quick Sort</button>
                </li>

                <li className="nav__link">
                    <button className={`
                    nav_link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    astext ${this.state.valid ? 'activeAlg' : 'null'}
                    ${algorithm === "heapSort" ? "currentAlgorithmButton" : "algorithmButton"}
                    `}
                    onClick={() => this.setAlgorithm("heapSort")}>
                    Heap Sort</button>
                </li>

                <li className="nav__link">
                    <button className={`
                    nav_link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    astext ${this.state.valid ? 'activeAlg' : 'null'}
                    ${algorithm === "bubbleSort" ? "currentAlgorithmButton" : "algorithmButton"}
                    `}
                    onClick={() => this.setAlgorithm("bubbleSort")}>
                    Bubble Sort</button>
                </li>
            <li className="nav__link">
                    <button className="
                    nav_link--anchor
                    nav_link--anchor-primary"
                    onClick={() =>  this.sort(algorithm)}
                    >Sort!</button>
                    
                </li>
            
        </nav>
       
      </div>
      
      
      
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

var speed=1000;

var array_size = 10;

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

export function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style= "background-color:" + color + ";" +"height:" + `${height}px`;
    },c_delay+=delay_time);
}

//get all the elements with calss list-group-item
[...document.querySelectorAll('.link__hover-effect')].forEach(function(item) {
    // iterate and add event lstener to each of them
    item.addEventListener('click', function(elem) {
      // check if any element have a class active
      // if so then remove the class from it
      let getElemWithClass = document.querySelector('.active');
      if (getElemWithClass !== null) {
        getElemWithClass.classList.remove('active');
      }
      //add the active class to the element from which click event triggered
      item.classList.add('active')
  
    })
  })

