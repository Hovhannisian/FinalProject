#include <Keyboard.h>


int sense1 = 0; // առաջին; RightUp - RightKey = 215
int sense2 = 1;// RightDown- Down Key = 217
int sense3 = 2;// LeftDown - UpKey = 218
int sense4 = 3;  //LeftUp - LeftKey = 216


void setup() {
  analogReference(DEFAULT); //set up range of 0 to 5V
  Serial.begin(9600); //connecting to comp

  pinMode(sense1, INPUT);
  pinMode(sense2, INPUT);
  pinMode(sense3, INPUT);
  pinMode(sense4, INPUT);
  
  Keyboard.begin();
}


void loop() {
  delay(1000);
 int val1 = analogRead(0);
 int val2= analogRead(1);
 int val3= analogRead(2);
 int val4= analogRead(3); 

// Serial.println(val1);
// delay(1000);
// Serial.println(val2);
// delay(1000);
// Serial.println(val3);
// delay(1000);
// Serial.println(val4);
// delay(1000);


 if(val1> 650){
  Keyboard.press(215);
 };
 
 if(val1<650){
  Keyboard.release(215);
 };

 if(val2> 10){
  Keyboard.press(217);
};
if(val2<= 10){
  Keyboard.release(217);
};

 if(val3> 2){
  Keyboard.press(218);
 }
if(val3<= 2){
 Keyboard.release(218);
 }
  
 if(val4> 5){
  Keyboard.press(216);
  };    
  
  
 if(val4< 5){
  Keyboard.release(216);
  }





}
  
  
