document.getElementById('start-button').addEventListener('click', function() {
    sessionStorage.setItem('currentDay', JSON.stringify(0));
    
    window.location.href = 'dress-up.html';
    console.log("Button Clikec")
});