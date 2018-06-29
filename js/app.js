addEventListener('DOMContentLoaded', function(){

    //Zmienne do znikających napisów

    var productbox1 = document.querySelector('.product-box1');
    var productbox2 = document.querySelector('.product-box2');
    var name1 = document.querySelector('.productOne');
    var name2 = document.querySelector('.productTwo');

    //Znikające napisy

    productbox1.addEventListener('mouseover', function() {
        name1.classList.add('hide');
    });

    productbox1.addEventListener('mouseout', function() {
        name1.classList.remove('hide');
    });

    productbox2.addEventListener('mouseover', function() {
        name2.classList.add('hide');
    });

    productbox2.addEventListener('mouseout', function() {
        name2.classList.remove('hide');
    });


    //Slider - zmienne do slidera

    var leftarrow = document.querySelector('.left-arrow');
    var rightarrow = document.querySelector('.right-arrow');
    var sliderGallery = document.querySelector('.sliderGallery');

    //Slider - chair slider

        sliderGallery.classList.add('slider');
        
    var list = sliderGallery.querySelector('ul').children;
    var index = 0;
        list[index].classList.add('visible');

    rightarrow.addEventListener('click', function(){

        list[index].classList.remove('visible');
        index += 1;
        if(index > 2) {
            index = 0;
        }
        list[index].classList.add('visible');
});

    leftarrow.addEventListener('click', function(){

        list[index].classList.remove('visible');
        index -= 1;
        if(index < 0) {
            index = 2;
        }
        list[index].classList.add('visible');
    });

    //Aplikacja - kalkulator; zmienne

    var listArrows = document.querySelectorAll('.list_arrow');
    var listPanel = document.querySelectorAll('.list_panel');
    var listLabel = document.querySelectorAll('.list_label');
    var listPanelOption = document.querySelectorAll('.list_panel li');
    var transportCheckbox = document.querySelector('.check-box');
    var chooseChair = document.querySelector('.image_part::after');
    var sum = document.querySelector('.sum strong');
    sum.innerText = 0 + ' zł';

    //Lewy panel do liczenia; zmienne

    var leftList = document.querySelector('.panel_left');
    var model = leftList.querySelector('.title');
    var color = leftList.querySelector('.color');
    var pattern = leftList.querySelector('.pattern');
    var transport = leftList.querySelector('.transport');

    //Prawy panel do liczenia; zmienne

    var rightList = document.querySelector('.panel_right');
    var modelValue = rightList.querySelector('.title');
    var colorValue = rightList.querySelector('.color');
    var patternValue = rightList.querySelector('.pattern');
    var transportValue = rightList.querySelector('.transport');

    //Galeria w aplikacji; zmienne

    var redChairImg = document.querySelector('[alt="Clair"]');
    var blackChairImg = document.querySelector('[alt="Margarita"]');
    var orangeChairImg = document.querySelector('[alt="Selena"]');
    var listPanel = document.querySelectorAll('.list_panel');
    var listLabel = document.querySelectorAll('.list_label');

    //Oddzielenie wartości liczbowych ziennych od stringów oraz ich suma (metoda sumowania)

    var sumResult = function() {
        var modelNum = parseInt(modelValue.innerText);
        if (isNaN(modelNum)) modelNum = 0;
        var colorNum = parseInt(colorValue.innerText);
        if (isNaN(colorNum)) colorNum = 0;
        var patternNum = parseInt(patternValue.innerText);
        if (isNaN(patternNum)) patternNum = 0;
        var transNum = parseInt(transportValue.innerText);
        if (isNaN(transNum)) transNum = 0;

        sum.innerText = modelNum + colorNum + patternNum + transNum + ' zł';
    };

    //Aplikacja - Checbox; dodawane kwoty za transport do wyniku końcowego

    transportCheckbox.addEventListener('click', function() {
        if (this.classList[1] !== 'check') {
            this.classList.add('check');
            transport.innerText = 'Transport';
            transportValue.innerText = 200 + 'zł';
        } else {
            this.classList.remove('check');
            transport.innerText = '';
            transportValue.innerText = '';
        }
        sumResult();
    });

    //Aplikacja - Działaie strzałek w wyborze opcji i dodanie funkcji sumowania do wyniku końcowego, zmiana nazw inputów na wybrany model/tkaninę/kolor, oraz zmiana zdjęć modelu krzesła w galerii

    for (var i = 0; i < listArrows.length; i++) {
        listArrows[i].addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('list-active');
        })
    }

    for (var i = 0; i < listPanelOption.length; i++) {
        listPanelOption[i].addEventListener('click', function() {
            switch (this.innerText) {
                case 'Clair':
                    model.innerText = 'Clair';
                    modelValue.innerText = 600 + 'zł';
                    this.parentElement.classList.remove('list-active');
                        for (var i=0; i< listLabel.length; i++) {
                             listLabel[0].innerHTML = model.innerText;

                            } if (listLabel[0].innerHTML === 'Clair') {

                    redChairImg.style.display = 'block';
                    blackChairImg.style.display = 'none';
                    orangeChairImg.style.display = 'none';
                }
                    break;

                case 'Margarita':
                    model.innerText = 'Margarita';
                    modelValue.innerText = 800 + 'zł';
                    this.parentElement.classList.remove('list-active');
                        for (var i=0; i< listLabel.length; i++){
                            listLabel[0].innerHTML = model.innerText;

                            }    {
                    listLabel[0].innerHTML = model.innerText;

                } if (listLabel[0].innerHTML === 'Margarita') {

                    redChairImg.style.display = 'none';
                    blackChairImg.style.display = 'block';
                    orangeChairImg.style.display = 'none';
                }
                    break;

                case 'Selena':
                    model.innerText = 'Selena';
                    modelValue.innerText = 900 + 'zł';
                    this.parentElement.classList.remove('list-active');
                        for (var i=0; i< listLabel.length; i++){
                            listLabel[0].innerHTML = model.innerText;

                            }   if (listLabel[0].innerHTML === 'Selena') {

                    redChairImg.style.display = 'none';
                    blackChairImg.style.display = 'none';
                    orangeChairImg.style.display = 'block';
                }
                    break;

                case 'Czerwony':
                    color.innerText = 'Czerwony';
                    colorValue.innerText = 60 + 'zł';
                    this.parentElement.classList.remove('list-active');
                        for (var i=0; i< listLabel.length; i++){
                            listLabel[1].innerHTML = color.innerText;
                    }
                    break;

                case 'Czarny':
                    color.innerText = 'Czarny';
                    colorValue.innerText = 50 + 'zł';
                    this.parentElement.classList.remove('list-active');
                        for (var i=0; i< listLabel.length; i++){
                            listLabel[1].innerHTML = color.innerText;
                    }
                    break;

                case 'Pomarańczowy':
                    color.innerText = 'Pomarańczowy';
                    colorValue.innerText = 70 + 'zł';
                    this.parentElement.classList.remove('list-active');
                        for (var i=0; i< listLabel.length; i++){
                            listLabel[1].innerHTML = color.innerText;
                    }
                    break;

                case 'Tkanina':
                    pattern.innerText = 'Tkanina';
                    patternValue.innerText = 150 + 'zł';
                    this.parentElement.classList.remove('list-active');
                        for (var i=0; i< listLabel.length; i++){
                            listLabel[2].innerHTML = pattern.innerText;
                    }
                    break;

                case 'Skóra':
                    pattern.innerText = 'Skóra';
                    patternValue.innerText = 250 + 'zł';
                        for (var i=0; i< listLabel.length; i++){
                            listLabel[2].innerHTML = pattern.innerText;
                    }
                    this.parentElement.classList.remove('list-active');
                    break;
            }
            sumResult();
        })
    }

});
