document.getElementById("do_not_button").
addEventListener("click", function() {
    
    document.querySelectorAll('*').forEach(function(element) {
        element.style.backgroundColor = 'blue';
    });

    document.querySelectorAll('*').forEach(function(element) {
        element.style.color = 'blue';
    });

    document.querySelectorAll('img').forEach(function(element) {
        element.style.visibility = 'hidden';
        element.style.backgroundColor = 'blue';
        element.style.color = 'blue';
        element.style.borderColor = 'blue';
    });

    document.querySelectorAll('table').forEach(function(element) {
        element.style.borderColor = 'blue';
    });

    document.querySelectorAll('button').forEach(function(element) {
        element.style.visibility = 'hidden';
        element.style.borderColor = 'blue';
    });

    var restartingLabel = document.createElement('div');
    restartingLabel.textContent = 'Restarting...';
    restartingLabel.style.position = 'fixed';
    restartingLabel.style.top = '50%';
    restartingLabel.style.left = '50%';
    restartingLabel.style.color = 'yellow'; 
    restartingLabel.style.fontSize = '36px';
    document.body.appendChild(restartingLabel);
});

document.getElementById("jupiter").
addEventListener("click", function() {
    var image = document.getElementById('jupiter');
    if (image.src.match("jupiter.jpg")) {
        image.src = "banana.jpeg";
    } else {
        image.src = "jupiter.jpg";
    }
});
