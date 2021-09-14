//We only have to change background-color and height of the sorting element.

var speed=1000;

var array_size = 249;

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

export function bar_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style= "background-color:" + color + ";" +"height:" + `${height}px`;
    },c_delay+=5);
}

/*function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}*/
