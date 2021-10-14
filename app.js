function themeChanger() {
    const slider = document.getElementById('slider').value;
    console.log(slider);
    if (slider === '1') {
        document.body.classList.remove('light');
        document.body.classList.remove('purple');
        document.body.classList.toggle('dark');
    } else if (slider === '2') {
        document.body.classList.remove('dark');
        document.body.classList.remove('purple');
        document.body.classList.toggle('light');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.remove('light');
        document.body.classList.toggle('purple');
    }
}

document.getElementById('slider').onchange = function () {
    themeChanger();
};

themeChanger();
