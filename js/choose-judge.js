

const changeOnHover = () => {
    width = 200;
    height = 200;
};

document.getElementsByClassName("playerButton").addEventListener("hover", changeOnHover);

document.getElementsByClassName("playerButton").addEventListener("click", setJudge);
