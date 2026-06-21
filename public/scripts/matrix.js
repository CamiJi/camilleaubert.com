// Matrix animation + Scroll-to-top
// Extracted from Layout.astro for caching and defer loading

const container = document.getElementById('matrix-container');
const characters = "{}[]()<>/\=+*01;";

function createLetter() {
  if (!container) return;

  const span = document.createElement('span');
  const char = characters[Math.floor(Math.random() * characters.length)];
  const color = "var(--color-textrain)";
  
  const left = Math.random() * 100; 
  const duration = 4 + Math.random() * 8; // 4s to 10s
  const size = 10 + Math.random() * 10; // 10px to 20px
  
  span.innerText = char;
  span.className = 'falling-letter';
  span.style.left = `${left}vw`;
  span.style.color = color;
  span.style.fontSize = `${size}px`;
  span.style.animationDuration = `${duration}s`;
  span.style.textShadow = `0 0 5px ${color}`;
  
  container.appendChild(span);

  setTimeout(function() {
    span.remove();
  }, duration * 1000);
}

function createStaticLetter() {
  if (!container) return;

  const span = document.createElement('span');
  const char = characters[Math.floor(Math.random() * characters.length)];
  const color = "var(--color-textrain)";
  
  const left = Math.random() * 100; 
  const top = Math.random() * 90;
  const size = 10 + Math.random() * 10;
  
  span.innerText = char;
  span.className = 'falling-letter';
  span.style.animation = 'none'; 
  span.style.left = `${left}vw`;
  span.style.top = `${top}vh`;
  span.style.color = color;
  span.style.fontSize = `${size}px`;
  span.style.opacity = (0.1 + Math.random() * 0.3).toString();
  span.style.textShadow = `0 0 5px ${color}`;
  
  container.appendChild(span);
}

// Init matrix effect
if (window.innerWidth > 768) {
  setInterval(createLetter, 250);
} else {
  const mobileCount = 20; 
  for (let i = 0; i < mobileCount; i++) {
    createStaticLetter();
  }
}

// --- Scroll to Top ---
const toTopBtn = document.getElementById('to-top');
const progressCircle = document.getElementById('progress-circle');
const circumference = 150.796;
const arrowIcon = toTopBtn ? toTopBtn.querySelector('.absolute') : null;

function handleScroll() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = window.scrollY / scrollHeight;
  
  const offset = circumference - (scrollPercentage * circumference);
  if (progressCircle) {
    progressCircle.style.strokeDashoffset = offset.toString();
  }

  if (scrollPercentage > 0.5) {
    toTopBtn.classList.remove('translate-y-20', 'opacity-0');
    toTopBtn.classList.add('translate-y-0', 'opacity-100');
  } else {
    toTopBtn.classList.add('translate-y-20', 'opacity-0');
    toTopBtn.classList.remove('translate-y-0', 'opacity-100');
  }

  if (scrollPercentage > 0.98) {
    arrowIcon.classList.add('animate-bounce-twice');
  } else {
    arrowIcon.classList.remove('animate-bounce-twice');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });

toTopBtn.addEventListener('click', function() {
  arrowIcon.classList.add('launching');

  const startPosition = window.scrollY;
  const duration = 750;
  let startTime = null;
  let requestID;

  function stopAnimation() {
    cancelAnimationFrame(requestID);
    arrowIcon.classList.remove('launching');
    window.removeEventListener('wheel', stopAnimation);
    window.removeEventListener('touchmove', stopAnimation);
  }

  function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeOutQuad(timeElapsed, startPosition, -startPosition, duration);
    
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestID = requestAnimationFrame(animation);
    } else {
      stopAnimation();
    }
  }

  window.addEventListener('wheel', stopAnimation, { once: true });
  window.addEventListener('touchmove', stopAnimation, { once: true });

  requestID = requestAnimationFrame(animation);
});
