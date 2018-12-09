const canvas= document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 450;

const dark = new Image();
dark.src = "kitchenDark.jpg";

const rightUp = new Image();
rightUp.src = "kitchenRightUp.png";

const rightDown = new Image();
rightDown.src = "kitchenRightDown.png";

const leftDown = new Image();
leftDown.src = "kitchenLeftDown.png";

const leftUp = new Image();
leftUp.src = "kitchenLeftUp.png";


const data = [ 		//4pieces of the 2nd layer
	{isKeyDown: false,
	 src:rightUp ,
	 position: "rightUp"
	},
	{isKeyDown: false,
	 src: rightDown,
	 position: "rightDown",
	},
	{isKeyDown: false,
	 src:leftUp ,
	 position: "leftUp",
	},
	{isKeyDown: false,
	 src:leftDown ,
	 position: "leftDown",
	},

]


const   leftKey = 37,
        upKey = 38,
        rightKey = 39,
        downKey = 40,
        spaceKey = 32;

    document.addEventListener('keydown', event => {		//keydown eventlistener makes isKeyDown true
        event.preventDefault();
        const keyCode = event.keyCode;
       
        if (event.keyCode == rightKey){
			data[0].isKeyDown= true;
			context.drawImage(data[0].src, 0, 0, canvas.width,canvas.height);
			}
		else if(event.keyCode == downKey ){
			data[1].isKeyDown= true;
			context.drawImage(rightDown, 0, 0, canvas.width,canvas.height);
			}
		else if(event.keyCode == leftKey ){
			data[2].isKeyDown= true;
			context.drawImage(leftDown, 0, 0, canvas.width,canvas.height);
			}
		else if(event.keyCode == upKey ){
			data[3].isKeyDown= true;
			context.drawImage(leftUp, 0, 0, canvas.width,canvas.height);
			}
    });

    document.addEventListener('keyup', event => {			//kepup makes isKeyDown false again, so update deletes 2nd layer
        event.preventDefault();
        const keyCode = event.keyCode;
       
        if (event.keyCode == rightKey){
			debugger;
			data[0].isKeyDown= false;
		}
		else if(event.keyCode == downKey ){
			data[1].isKeyDown= false;
		}
		else if(event.keyCode == leftKey ){
			data[2].isKeyDown= false;
		}
		else if(event.keyCode == upKey ){
			data[3].isKeyDown= false;
		}
    });
 
 const draw = function(){
	context.drawImage(dark, 0, 0, canvas.width, canvas.height);
};
const update = function(){
	for(let i = 0; i<=3;i++){
 		if(data[i].isKeyDown){
 			context.drawImage(data[i].src, 0, 0, canvas.width,canvas.height);
 		};
 	};	


};

 const loop = function(){
	draw();
	update();
	requestAnimationFrame(loop);
};

loop()




    function myfunction(input){
	
	alert(input)
}

function next() {
	window.location.assign("html2.html")
}

//     function myfunction(input){
	
// 	if (input == no){window.location = "html2.html"}
// }
