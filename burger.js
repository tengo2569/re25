const clk1 = document.querySelectorAll(".arrow");
const clk2 = document.querySelectorAll(".exit");
const clk3 = document.querySelectorAll('.hide');


for (let i = 0; i < clk1.length; i++) {
    clk1[i].addEventListener('click', function () {
        clk3[i].classList.add('show');
        clk3[i].classList.remove('show1');
    });

    clk2[i].addEventListener('click', function () {
        clk3[i].classList.add('show1');
        clk3[i].classList.remove('show');
    });
}