const handleClick = () => {
    const arrayLength = document.getElementById("length").value;
    fetch(`/data?number=${arrayLength}`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("number").textContent = data.interacoes;
            document.getElementById("array").innerHTML = data.array;
        });
};
document.getElementById("fetch").addEventListener("click", handleClick);
