/*        JavaScript Fading Quote Thingy 
				by: dawja
				github.com/dawja


This was hacked together from a reference on the site below on 09.28.16, because I suck.
http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript/
This took me way to long to hack together this blockquote fade thingy.*/


// This is the Array with the blockquote content I came up with.
var c=["index",
"<blockquote>The bird of paradise lands only on the hand that does not grasp.&#8221;<cite>Zen Proverb</cite></blockquote>",
"<blockquote>Happiness is like a butterfly; the more you chase it, the more it will elude you, but if you turn your attention to other things,it will come and sit softly on your shoulder.&#8221;<cite>Henry David Thoreau</cite></blockquote>",
"<blockquote>To the mind that is still, the whole universe surrenders.&#8221;<cite>Lao Tzu</cite></blockquote>",
"<blockquote>To see a World in a Grain of Sand<br />And a Heaven in a Wild Flower,<br />Hold Infinity in the palm of your hand<br />And Eternity in an hour.&#8221;<cite>William Blake</cite></blockquote>",
"<blockquote>Yeah, well, you know, that’s just, like, your opinion, man.&#8221;<cite>The Dude</cite></blockquote>"];

// Start to declare the globals
var element = document.getElementById("Slideshow");
var duration = 3000; /* fade duration in millisecond */
var hidtime = 2000; /* time to stay hidden */
var showtime = 2000; /* time to stay visible */
//This added by me to initialize a position value for my array
var nPos=0;

//---------------------------------------- SetOpacity function
function SetOpa(Opa) {
  element.style.opacity = Opa;
  element.style.MozOpacity = Opa;
  element.style.KhtmlOpacity = Opa;
  element.style.filter = 'alpha(opacity=' + (Opa * 100) + ');';
  
}
//------------------------------------------End Set Opacity function


//This function added by me to set the position of the c[] array and insert the content into the block quote.
function setPos(n) {
  //alert(n);
  //Change the of n>(n) if more quotes are added to the array.
  if (n>5 || n==0)  {
    n=1;
  }
  //Set the content into the blockquote
  element.innerHTML=c[n];
} //End setPos()


// Declare the initial array position before the functions start.
element.innerHTML=c[1];

// ---------------------------------------------------------FadeOut Function
function fadeOut() {
  //alert(nPos); // This is for testing the value of var nPos;
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + (1 - i) +")", i * duration);
  }
   setTimeout("FadeIn()", (duration + hidtime));

}//--------------------------------------------------------- End Fade Out Function.



// ----------------------------------------------FadeIn Function
function FadeIn() {
// Added.......................................................
// This conditional was created by me to pass a parameter to the setPos() function.
  if (nPos>5)  { // This makes sure not to increment past the total number of array indexes. Increase nPos>(n) if more quotes are added to the c[] array
    nPos=1; // Resets the position back to the begining of the array once the value passes the aggregate of the array values.
  } else if (nPos==0) { // Checks to see if this is the initial run.
    nPos=nPos+2; // Must be 2 or else the 1st quote will display twice before it iterates.
  } else {
    nPos++; // If the above conditions are false, proceed to the next array value.
  }

	setPos(nPos);// Call the function to set the Blockquote content.
// Added........................................................

  	for (i = 0; i <= 1; i += 0.01) {
    	setTimeout("SetOpa(" + i +")", i * duration);
  	}
   	setTimeout("fadeOut()", (duration + showtime));
}// -----------------------------------------------End Fade In Function.


//call it all to activate it.
fadeOut();