import {bar_update} from '../SortingVisualizer/VisualizeHelper.js';
export function Bubble(arrayBars, array_sizes)
{
    var c_delay=0;

    for(var i=0;i<array_sizes.length-1;i++)
    {
        for(var j=0;j<array_sizes.length-i-1;j++)
        {
            bar_update(arrayBars[j],array_sizes[j],"yellow");//Color update

            if(array_sizes[j]>array_sizes[j+1])
            {
                bar_update(arrayBars[j],array_sizes[j], "red");//Color update
                bar_update(arrayBars[j+1],array_sizes[j+1], "red");//Color update

                var temp=array_sizes[j];
                array_sizes[j]=array_sizes[j+1];
                array_sizes[j+1]=temp;

                bar_update(arrayBars[j],array_sizes[j], "red");//Height update
                bar_update(arrayBars[j+1],array_sizes[j+1], "red");//Height update
            }
            bar_update(arrayBars[j],array_sizes[j], "turquoise");//Color updat
        }
        bar_update(arrayBars[j],array_sizes[j], "green");//Color update
    }
    bar_update(arrayBars[0],array_sizes[0], "green");//Color update

    //enable_buttons();
}