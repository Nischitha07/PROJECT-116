noseX = 0;
noseY = 0;
hatX = 0;
hatY = 0;
lipsX = 0;
lipsY = 0;
function preload(){
filter_img = loadImage('https://i.postimg.cc/HnFPhyRZ/51f92b674dde3b48418cb89b0cb6a963.png');
filter_img2 = loadImage('https://i.postimg.cc/zDbMTrdG/summer-hat-hi.png');
filter_img3 = loadImage('https://i.postimg.cc/CKWGst2t/PNGPIX-COM-Lips-PNG-Transparent-Image-4.png');

}
function add_user_to_room_sign()
{
    window.alert("Would You Mind Saving Your Email Address And Password?");
    email = document.getElementById("user_email").value;
    localStorage.setItem("email_user" , email);
    passcode = document.getElementById("user_pswrd").value;
    localStorage.setItem("passcode_user" , passcode);
    window.location = "login.html";
 
}

function add_user_to_room()
{
   user_name = document.getElementById("user_name").value;
   localStorage.setItem("user_name" , user_name);
   window.location = "index (1).html";

}
function take_to_login_page()
{
    window.location = "login.html";
}

function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    fill('red');
    circle(50 , 50 , 50 , 50) ;
    fill(255, 204, 0);
    rect(75, 45, 390, 10);
    fill('red');
    circle(445 , 50 , 50 , 50) ;
    fill(255, 204, 0);
    rect(440, 75, 10, 280);
    fill(255, 204, 0);
    rect(45, 75, 10, 280);
    fill('red');
    circle(50 , 360, 50 , 50) ;
    fill(255, 204, 0);
    rect(75, 357, 350, 10);
    fill('red');
    circle( 445, 360, 50 , 50) ;
    video = createCapture(VIDEO);
    video.size(400 , 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw(){
    image(video , 0 , 0 , 500 , 400);
    
    image(filter_img , noseX,noseY, 150, 150 );
    image(filter_img2 , hatX,hatY, 180, 110 );
    image(filter_img3 , lipsX,lipsY, 45, 35 );
    
}

function modelLoaded() {
    console.log('modelLoaded');
  }


  function gotPoses(results)
  {
    console.log('Posenet has initialized');
    if(results.length > 0)
    {
      console.log(results);

      noseX = results[0].pose.nose.x-25;
      noseY = results[0].pose.nose.y-45;
      console.log(noseX);
      console.log(noseY);
      console.log("nose x = " + results [0].pose.nose.x);
      console.log("nose y = " + results [0].pose.nose.y);

      hatX = results[0].pose.nose.x-40;
      hatY = results[0].pose.nose.y-150;
      console.log(hatX);
      console.log(hatY);
      console.log("nose x = " + results [0].pose.nose.x);
      console.log("nose y = " + results [0].pose.nose.y);
    

      lipsX = results[0].pose.nose.x+25;
      lipsY = results[0].pose.nose.y+80;
      console.log(lipsX);
      console.log(lipsY);
      console.log("nose x = " + results [0].pose.nose.x);
      console.log("nose y = " + results [0].pose.nose.y);
      
}

} 

  
function take_snapshot()
{
    save("Filter_snapshot.png");
}
function logout_from_snapgram()
  {
    window.location = "snapgram_sign-in.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
  }