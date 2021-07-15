let timeContent = document.getElementById("time");
let loopContent = document.getElementById("loopcount");
let arrayContent = document.getElementById("arrayLength");

const handleClick = () => {
    timeContent.textContent = "Calculando...";
    loopContent.textContent = "Calculando...";
    arrayContent.textContent = "Calculando...";

    const arrayLength = document.getElementById("length").value;
    fetch(`/api?length=${arrayLength}`)
        .then((response) => response.json())
        .then((data) => {
            timeContent.textContent = `${data.time} segundos`;
            loopContent.textContent = data.interactions;
            arrayContent.textContent = data.length;
        })
        .catch((err) => {
            timeContent.textContent = "Insira um número inteiro positivo";
            loopContent.textContent = "Insira um número inteiro positivo";
            arrayContent.textContent = "Insira um número inteiro positivo";
        });
};
document.getElementById("fetch").addEventListener("click", handleClick);
