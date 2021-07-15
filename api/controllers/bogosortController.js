const { performance } = require("perf_hooks");

exports.applyBogosortAlgorithm = (number) => {
    let randomArray = Array.from({ length: number }, () =>
        Math.floor(Math.random() * 10)
    );

    const isSorted = function (array) {
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return;
    }

    let sorted = false;
    let loopCount = 0;
    const t0 = performance.now();
    while (!sorted) {
        shuffleArray(randomArray);
        sorted = isSorted(randomArray);
        loopCount++;
    }
    const t1 = performance.now();
    const elapsedTime = (t1 - t0) / 1000;

    return {
        time: elapsedTime,
        interactions: loopCount,
        length: number,
    };
};
