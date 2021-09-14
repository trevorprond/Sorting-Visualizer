import {bar_update} from '../SortingVisualizer/VisualizeHelper.js';
export function Heap(arrayBars, array_sizes)
{
    var c_delay=0;

    heap_sort(array_sizes.length, arrayBars, array_sizes);
    
    //enable_buttons();
}

function swap(i,j, arrayBars, array_sizes)
{
    bar_update(arrayBars[i],array_sizes[i],"red");//Color update
    bar_update(arrayBars[j],array_sizes[j],"red");//Color update

    var temp=array_sizes[i];
    array_sizes[i]=array_sizes[j];
    array_sizes[j]=temp;

    bar_update(arrayBars[i],array_sizes[i],"red");//Height update
    bar_update(arrayBars[j],array_sizes[j],"red");//Height update

    bar_update(arrayBars[i],array_sizes[i],"turquoise");//Color update
    bar_update(arrayBars[j],array_sizes[j],"turquoise");//Color update
}

function max_heapify(n,i,arrayBars, array_sizes)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && array_sizes[l]>array_sizes[largest])
    {
        if(largest!=i)
        {
            bar_update(arrayBars[largest],array_sizes[largest],"blue");//Color update
        }

        largest=l;

        bar_update(arrayBars[largest],array_sizes[largest],"red");//Color update
    }

    if(r<n && array_sizes[r]>array_sizes[largest])
    {
        if(largest!=i)
        {
            bar_update(arrayBars[largest],array_sizes[largest],"turquoise");//Color update
        }

        largest=r;

        bar_update(arrayBars[largest],array_sizes[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest, arrayBars, array_sizes);

        max_heapify(n,largest, arrayBars, array_sizes);
    }
}

function heap_sort(array_size, arrayBars, array_sizes)
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i, arrayBars,array_sizes);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i, arrayBars, array_sizes);
        bar_update(arrayBars[i],array_sizes[i],"green");//Color update
        bar_update(arrayBars[i],array_sizes[i],"yellow");//Color update

        max_heapify(i,0, arrayBars, array_sizes);

        bar_update(arrayBars[i],array_sizes[i],"turquoise");//Color update
        bar_update(arrayBars[i],array_sizes[i],"green");//Color update
    }
    bar_update(arrayBars[i],array_sizes[i],"green");//Color update
}
