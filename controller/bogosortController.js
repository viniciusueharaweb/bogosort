exports.applyBogosortAlgorithm = async (number) => {
    function timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function sleep() {
        await timeout(1000);
        return number;
    }
    return sleep();
};
