import {bar_update} from '../SortingVisualizer/VisualizeHelper.js';
export function Quick(arrayBars, array_sizes)
{
    var c_delay=0;
    

    quick_sort(0,array_sizes.length-1, arrayBars, array_sizes);

    //enable_buttons();
}

function quick_partition (arrayBars, array_sizes, start, end)
{
    var i = start + 1;
    var piv = array_sizes[start]; //make the first element as pivot element.
    bar_update(arrayBars[start],array_sizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (array_sizes[ j ] < piv)
            {
                bar_update(arrayBars[j],array_sizes[j],"yellow");//Color update

                bar_update(arrayBars[i],array_sizes[i],"red");//Color update
                bar_update(arrayBars[j],array_sizes[j],"red");//Color update

                var temp=array_sizes[i];
                array_sizes[i]=array_sizes[j];
                array_sizes[j]=temp;

                bar_update(arrayBars[i],array_sizes[i],"red");//Height update
                bar_update(arrayBars[j],array_sizes[j],"red");//Height update

                bar_update(arrayBars[i],array_sizes[i],"turquoise");//Height update
                bar_update(arrayBars[j],array_sizes[j],"turquoise");//Height update

                i += 1;
            }
    }
    bar_update(arrayBars[start],array_sizes[start],"red");//Color update
    bar_update(arrayBars[i-1],array_sizes[i-1],"red");//Color update
    
    var temp=array_sizes[start];//put the pivot element in its proper place.
    array_sizes[start]=array_sizes[i-1];
    array_sizes[i-1]=temp;

    bar_update(arrayBars[start],array_sizes[start],"red");//Height update
    bar_update(arrayBars[i-1],array_sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
      bar_update(arrayBars[t],array_sizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end, arrayBars, array_sizes )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (arrayBars, array_sizes, start, end ) ;     
        quick_sort (start, piv_pos -1, arrayBars, array_sizes);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end, arrayBars, array_sizes) ;//sorts the right side of pivot.
    }
 }