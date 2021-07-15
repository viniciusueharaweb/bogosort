const handleClick = () => {
    document.getElementById("time").textContent = "Calculando...";

    document.getElementById("loopcount").textContent = "Calculando...";

    document.getElementById("arrayLength").textContent = "Calculando...";

    const arrayLength = document.getElementById("length").value;
    console.log(arrayLength);
    fetch(`/data?number=${arrayLength}`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById(
                "time"
            ).textContent = `${data.time} segundos`;

            document.getElementById("loopcount").textContent =
                data.interactions;

            document.getElementById("arrayLength").textContent = data.length;
        });
};
document.getElementById("fetch").addEventListener("click", handleClick);
