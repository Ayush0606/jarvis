const btn =document.querySelector('.talk');
const content =document.querySelector('.content');

function speak(text){
    const text_speak= new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.volume=1;
    text_speak.pitch=1;

    window.speechSynthesis.speak(text_speak);

}

function wishMe(){
    var day= new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("good morniing... master ayush ")
    }
    else if(hour>12 && hour<17){
        speak("good afternoon... master ayush ")
    }

    else{
        speak("good evening... master ayush")
    }
}

window.addEventListener('load',()=>{
    speak("loading jarvis ");
    wishMe();
});


 const SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition();
 recognition.onresult=(Event)=>{
    const currentIndex=Event.resultIndex;
    const transcript =Event.results[currentIndex][0].transcript;
    content.textContent =transcript;
    takeCommand(transcript.toLowerCase());

 }

 btn.addEventListener('click',()=>{
    content.textContent="listening...."
    recognition.start();
 })

 function takeCommand(message){
    if(message.includes('hey ')||message.includes('hello ')){
       speak("hello master ayush , how may i help you") 
    }

    else if(message.includes('youtube')){
        window.open("https://youtube.com/" , "_blank");
        speak("opening youtube");
     }
     else if(message.includes('instagram')){
        window.open("https://www.instagram.com/ayushupadhyay0606/" , "_blank");
        speak("opening instagram")
     }

     else if(message.includes('google')){
        window.open("https://www.google.co.in/" , "_blank");
        speak("opening google")
     }
     else if(message.includes('profile')){
        window.open("https://www.linkedin.com/in/ayush-upadhyay-5a6667257/" , "_blank");
        speak("opening profile")
     }
     else if(message.includes('lead code')){
        window.open("https://leetcode.com/ayush_0606/" , "_blank");
        speak("opening leetcode")
     }

     else if(message.includes('open portfolio')){
        window.open("https://ayush0606.github.io/PORTFOLIO/" , "_blank");
        speak("opening portfolio")
     }
     else if(message.includes('open get hub')){
        window.open("https://github.com/Ayush0606" , "_blank");
        speak("opening github")
     }
     else if(message.includes('time')){
        // window.open("https://github.com/Ayush0606" , "_blank");
        const time = new Date().toLocaleString(undefined,{hour:"numeric", minute:"numeric",second:"numeric"})
        const finalText=time;
        speak(finalText)
     }
     else if(message.includes('date')){
        // window.open("https://github.com/Ayush0606" , "_blank");
        const date = new Date().toLocaleString(undefined,{month:"short", day:"numeric"})
        const finalText=date;
        speak(finalText)
     }
     else if(message.includes('open calculator')){
        window.open('Calculator:///');
        
        speak("opening calculator")
     }


     

     

     

     
     
    

    // else{
    //     speak("i did not get you.....please make it more clear")
    // }


 }
