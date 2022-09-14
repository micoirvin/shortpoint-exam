const progress = [0.5, 0.5, 0.5, 0.5, 0.5];
const pastProgress = [0.01, 0.01, 0.01, 0.01, 0.01];
let progressingBars = document.querySelectorAll(".progressing-bar");
console.log(progressingBars);

const showProgress = (pastProgress, progress) => {
    progress.forEach((val, i) => {
        const interval = (val-pastProgress[i])*30;
        const strVal = `${(val*100).toFixed(0)}%`;
        val = val*100;
        let currVal = pastProgress[i]*100;
        let counter = setInterval(() => {
            const strCurrVal = `${currVal.toFixed(0)}%`;
            progressingBars[i].querySelector(".progress-label").textContent = strCurrVal;
            if(currVal === val) {
                clearInterval(counter);
            }
            currVal += 1;
        }, interval)
  
        progressingBars[i].style.width = strVal;

    });
}


showProgress(pastProgress, progress);

document.getElementById("finish-btn").addEventListener("click", () => {
    showProgress(progress, [1, 1, 1, 1, 1]);
});