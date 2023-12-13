function totalClick(click) {
    const sum = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText) + click;
    console.log(sumValue + click)
    totalClicks.innerText = sumValue;


}