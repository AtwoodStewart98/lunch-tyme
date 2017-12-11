# My Thought Process #

Before beginning, I carefully read the user stories in the email to evaluate what exactly what was being asked, and so that I could strategize on how to approach constructing the application. I chose React as the framework for two reasons; firstly, React helps it to be a progressive web application (desktop-to-mobile-responsive), and secondly, my understanding of React is that it is much quicker for updating user responses, because of the state object, which would be useful for plugging restaurant address information into Google Maps.

### JSON Feed ###

First, I went to tackle displaying the JSON feed, since the restaurants were not only the first requirement as specified in the email, but also the most important view on the application (Google Maps needs to have one of the locations to go off of first). I used a map function to efficiently display the restaurants and populate information. I initially struggled with the background images because I wanted to somehow pass the url to the css file, and I didn't considering doing inline-styling since I was informed by my mentors that inline-styling is generally looked down on and should be avoided where possible. In the end, I ended up doing it anyway because I wasn't able to determine another method.

### Google Maps API ###

This part of the development process is the part that I regret the most, since I not only wasted three days trying to get ANYTHING to display, but I should have stopped after day one to progress in other aspects of my application, which currently shows. Thinking displaying the API would at least be something similar to the json feed, and since my fellow students at DevMountain (the intensive coding bootcamp I attended) had managed to use the Google API before, I thought it would be more than doable.

I researched Google and tried five different coding approaches for displaying the Maps, and installed three different modules. After ramming my head into the wall for a day, I tried reaching out to my classmates and mentors. Turns out neither the mentor who was most familiar with React, nor the head instructor knew about installing the API into an application. I also found out that although my classmates had indeed worked with the Google Maps API, they were all working in Angular applications, which has a very different installation progress than in the React framework. I considered switching to an Angular app at this point, but I felt my perceived pros of React outweighed this problem, especially since I had not yet exhausted all my options.

I turned to my dad to see if any of his coworkers could give any helpful advice, and he connected me with someone who was apparently very familiar with Google applications/extensions/APIs. They linked me to two walkthroughs, the first of which was one I had already attempted multiple times, and the second I gave my best go, but to no avail again. Remnants of my attempts are in the googlemap folder in components.

### Mobile Responsiveness ###

At this time I had wasted three days trying to get something from the Google Maps API, and I was not only frustrated, but also questioning myself and my abilities. With no google maps view to work on, and only a day left (it was Thursday at this time) I set to working on the css and mobile responsiveness. In DevMountain, I worked primarily with desktop websites/applications, so I knew this part would be difficult, but something I could at least power through/babystep my way through the process. Once again, I got stuck because on the iPhone 5 view in the Google DevTools view, everything was shifted over to the left off-screen and I couldn't understand why. Eventually, I was able to scour the internet and find a useful module for vanilla React (I do not possess knowledge of React Native, which is far stronger for mobile responsiveness, and at this point I didn't have the time to research it) that helped. I have been working up to this morning just trying to make a vestige of the provided "how it should look" images.

## Conclusion ##

Looking back, I definitely spent far, FAR too much time working on the Google Maps API, and the most disappointing part of it is that I have nothing to show for it other than some broken files. I should have installed Gulp and been using SASS from the beginning, because I had the intention of doing so, but 'never got around to it' since I spent too much effort on the Google API. Coding solo is definitely a struggle if one has absolutely no one to reach out to.

Thanks for reading, and for your consideration.
