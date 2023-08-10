// Hover for Projects 
const projHover = document.querySelectorAll('projects');

projHover.forEach(function(project){  
  projHover.addEventListener('mouseover', function(e){
  projHover.style.boxshadow = '7px 12px #888';
  projHover.style.border = '1px solid black';
});
})



// Create an Event Listener for Name to Change to Greeting  

const title = document.querySelector('h1');

title.addEventListener('mouseover', function(e){
    title.innerText = 'Nice To Meet You!';
});

title.addEventListener('mouseout', function(e){
    title.innerText = 'Triston Moulton';
});

// Create an Event Listener that will Change Color of all H2's on Page on Mouse Over 

const subtitles = document.querySelectorAll('h2');

subtitles.forEach(function(subtitle){
    subtitle.addEventListener('mouseover', function(e){
    subtitle.style.color = '#3c9ae7';
    subtitle.style.fontSize = '41px';
    });
})

subtitles.forEach(function(subtitle){
    subtitle.addEventListener('mouseout', function(e){
    subtitle.style.color = 'black';
    subtitle.style.fontSize = '40px';
    });
})

// Create Event Listener that will increase size of text

const menu = document.querySelectorAll('li');

menu.forEach(function(options){
    options.addEventListener('mouseover', function(e){
    options.style.fontSize = '24px';
    });
})

menu.forEach(function(options){
    options.addEventListener('mouseout', function(e){
    options.style.fontSize = '23px';
    });
})

// Create message once submission is made in form container 

const submit = document.getElementsByClassName('submission');

submit[0].addEventListener('submit', function(e){
    e.preventDefault();
    // Create Target Element
    const thanks = document.querySelector('thankyou');
    // Create Message Element
    const msg = document.createElement('div');
    msg.innerHTML = 
    `
    <h2>
    Thank You!
    </h2>
    `
    msg.appendChild(thanks);
})
// Create a Toggle that will create a Dark Mode Option
const darkmode = document.getElementById('toggle');
// Create Event Listener
darkmode.addEventListener('click', function(e){
    // Define our Variables 
    const about = document.getElementById('about');
    const projects = document.getElementById('projectwrap');
    const text = document.getElementById('project-text');
    const foottext = document.getElementById('foot-text');
    // Create our Changes
    about.style.backgroundImage = "url('./assets/polygon-scatter-haikei.png')"
    about.style.backgroundSize = "cover"
    projects.style.backgroundImage = "url('./assets/polygon-scatter-haikei.png')";
    projects.style.backgroundSize = "cover"
    about.style.color = "white";
    foottext.style.backgroundColor ="rgb(105, 105, 105)";
    foottext.style.color = "white";

})

const lightmode = document.getElementById('toggle2');
// Create Event Listener 
lightmode.addEventListener('click', function(e){
    // Define our Variables
    const about = document.getElementById('about');
    const projects = document.getElementById('projectwrap');
    const text = document.getElementById('project-text');
    const foottext = document.getElementById('foot-text');

    // Create our Changes
    about.style.backgroundImage = "url('./assets/polygon-scatter-haikei2.png')";
    about.style.backgroundSize = "cover";
    projects.style.backgroundImage = "url('./assets/polygon-scatter-haikei3.png')";
    projects.style.backgroundSize = "cover";
    about.style.color = "black";
    projects.style.color = "black";
    foottext.style.backgroundColor ="white";
    foottext.style.color = "black";    

})


// Text Scramble 

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'Triston Moulton',
    'Tr1ston Moult0n',
    'Triston Moulton',
    'Tr!stOn M0ulton',

  ]
  
  const el = document.querySelector('h1')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()

  // Read Less & Read More JS 

  function myFunction(event) {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 

  function myFunction2(event) {
    const dots = document.getElementById("dots");
    const moreText2 = document.getElementById("more2");
    const btnText2 = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText2.innerHTML = "Read more";
      moreText2.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText2.innerHTML = "Read less";
      moreText2.style.display = "inline";
    }
  } 

  function myFunction3(event) {
    const dots = document.getElementById("dots");
    const moreText3 = document.getElementById("more3");
    const btnText3 = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText3.innerHTML = "Read more";
      moreText3.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText3.innerHTML = "Read less";
      moreText3.style.display = "inline";
    }
  } 

  function myFunction4(event) {
    const dots = document.getElementById("dots");
    const moreText4 = document.getElementById("more4");
    const btnText4 = document.getElementById("myBtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText4.innerHTML = "Read more";
      moreText4.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText4.innerHTML = "Read less";
      moreText4.style.display = "inline";
    }
  } 

