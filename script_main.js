
document.getElementById("h1").
addEventListener("click", function() {
    this.textContent = "You Clicked it!"
});

document.getElementById("button").
addEventListener("click", function() {
    document.getElementById("h1").textContent = "Kitetsu Kaku"
    var p = document.getElementsByClassName("profile-button")
    var a = document.getElementsByClassName("academic-button")
    for (let i = 0; i < p.length; i++) {
        p[i].textContent = "profile"
        a[i].textContent = "academic"
    }
});

document.getElementById("button-la").
addEventListener("click", function() {
    var p = document.getElementsByClassName("profile-button")
    var a = document.getElementsByClassName("academic-button")
    for (let i = 0; i < p.length; i++) {
        p[i].textContent = "プロフィール"
        a[i].textContent = "アカデミック"
    }
    document.getElementById("h1").textContent = "賀来　希哲"
});

/**
 * This code is provided from chatGPT.
 */
document.addEventListener('DOMContentLoaded', function() {
    const shiningEffect = document.getElementById('shiningEffect');
    
    document.addEventListener('mousemove', function(e) {
      // Set shining effect position
      shiningEffect.style.left = (e.clientX - 10) + 'px';
      shiningEffect.style.top = (e.clientY - 10) + 'px';
  
      // Display the shining effect
      shiningEffect.style.display = 'block';
    });
  });
  
  