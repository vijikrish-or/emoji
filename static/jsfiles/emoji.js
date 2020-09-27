document.getElementById('hf').addEventListener('click',addhf);
document.getElementById('mf').addEventListener('click',addmf);
document.getElementById('sf').addEventListener('click',addsf);
document.getElementById('creset').addEventListener('click',ctzero);
showresult();

function getctfeel(){
    var ctfeelarr=new Array;
    var ctfeel=localStorage.getItem('fresult');
    if (ctfeel !== null){
        ctfeelarr=JSON.parse(ctfeel);
    }
    return ctfeelarr;
}

function showresult(){
    var ctfeel=getctfeel();
    /*var html='<ul>';
    for(var i=0;i<ctfeel.length;i++){
        html += '<li>'+ctfeel[i]+'</li>';
    };
    html += '</ul>';*/
    //document.getElementById('fresult').innerHTML=html;
    c3.generate({
        bindto:'#fchart',
        data:{
            columns:[
                ['happy',ctfeel[0]],
                ['meh',ctfeel[1]],
                ['sad',ctfeel[2]]
            ],
                type: 'bar',
                
            
        },
        /*color:{
            'happy':'#FF000',
            'meh':'#FF000',
            'sad':'#FF000'
        },*/
        bar:{
            width:{
                ratio:0.5
            }
        }
    });
}


function addhf(){
    var ctfeel=getctfeel();
    ctfeel[0]=ctfeel[0]+1;
    localStorage.setItem('fresult',JSON.stringify(ctfeel));
    showresult();
}


function addmf(){
    var ctfeel=getctfeel();
    ctfeel[1]=ctfeel[1]+1;
    localStorage.setItem('fresult',JSON.stringify(ctfeel));
    showresult();
}


function addsf(){
    var ctfeel=getctfeel();
    ctfeel[2]=ctfeel[2]+1;
    localStorage.setItem('fresult',JSON.stringify(ctfeel));
    showresult();
}

function ctzero(){
    var ctfeel=getctfeel();
    ctfeel[0]=0;
    ctfeel[1]=0;
    ctfeel[2]=0;
    localStorage.setItem('fresult',JSON.stringify(ctfeel));
    showresult();
}


/*document.getElementById("button id").addEventListener('click',showholiday)
function showholiday(){
    var holarr=new Array;
    holarr[0]="dodo holday";

    
}*/