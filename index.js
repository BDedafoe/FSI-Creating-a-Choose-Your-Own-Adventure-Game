//Prompts first window 
let firstAnswer = window.prompt('Do you head left or right?') 
    if (firstAnswer ==='left') {
    var secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?')
    } else if (firstAnswer ==='right')
    var secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?')

    //goes with left
        if (secondAnswer === 'follow') {
        var thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
         } else if (secondAnswer === 'continue')
         var thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
    //goes with left 'follow'
            if (thirdAnswer === 'stay') {
              var fourthAnswer = window.alert('You live happily amongst the cats for the rest of your days.')
             } else if (thirdAnswer === 'spread the word')
              var thirdAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
    //goes with left 'continue'
                 if (thirdAnswer === 'ladder') {
                  var fourthAnswer = window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
                  } else if (thirdAnswer === 'staircase') {
                  var fourthAnswer = window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
                  }

    //goes with right
        if (secondAnswer === 'past the dragon') {
        var thirdAnswer = window.prompt('The dragon wakes up and sits upright. You only havea a moment to respond, to stay or run:')
         } else if (secondAnswer === 'away from the dragon')
        var thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it up. Which do you do?')   
    //goes with right 'past the dragon'
    let stay = new Boolean('stay')        
    if (thirdAnswer === 'stay') {
             var fourthAnswer = window.alert('You and the dragon have an uplifting converstation about local policies and become lifelong friends.')
               } else if (thirdAnswer === 'run')
             var fourthAnswer = window.alert('Quickly, you run back to the caves entrance. Sheepsih, you return home.')
    //goes with right 'away from the dragon'         
                if (thirdAnswer === 'draw it') {
                 var fourthAnswer = window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. you bring the drawing home, somewhat disappointed, but over time, discover the joy in sharing it with your friends and family, reccounting the story of your days as a sorcerer with the aid of the sketch.')
                } else if (thirdAnswer === 'pick it') {
                var fourthAnswer = window.alert('You pick the flower and bring it home, and all marvel at its brillance. However, over time it fades and eventually crumbles to dust.')
        }