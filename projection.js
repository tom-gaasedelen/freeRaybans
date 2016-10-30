var socket = io.connect('http://150.253.89.176:3000') //set up a place for us to connect to, and try to connect.

      socket.on('connect', function(data){ //when we are connected to something,
        console.log("connected to the server" + socket.id); //log out our socket's id, some long garbled number letter thing that is unique!
      })

        socket.on('projectionRectangle', function(data){ //if we see a projectionRectangle message then do some stuff
          console.log(data)

        //use jQuery to add a rect to the screen, notice the alternate jQ syntax!
          var h = window.innerHeight;
          var w = window.innerWidth;


                var glasses = ["shades1.png", "shades2.png", "shades3.png", "shades4.png", "shades5.png", "shades6.png", "shades7.png", "shades8.png", "shades9.png", "shades10.png", "shades11.png", "shades12.png", "shades13.png", "shades14.png", "shades15.png", "shades16.png", "shades17.png", "shades18.png", ];
            function randomGlasses() {
               return glasses[Math.floor(Math.random() * glasses.length)];
            console.log(randomGlasses);}

          //first make a div, change the css, then append to the body. this is not possible with the 'normal' syntax, because order of operations
          $('<div class="shades-animation">  <img class="glass" src="images/' + randomGlasses() + '"> </div>').css({
              'position':'absolute',
              'top' : data.top,
              'left' : data.left
            }).appendTo('body')

      })


        






// socket.on('storedPositionsMessage', function(spData){
//
//   console.log(spData)
//
//   spData.forEach(function(position){
//     $('<div>🐍</div>').css({
//         'position':'absolute',
//         'top' : position.top,
//         'left' : position.left
//       }).appendTo('body')
//
//   })
//
//
//
// })
