const setModalidad = () => {
    let inputSwitch = document.getElementById("customSwitch1");
    let labelMonth = document.querySelector("#monthly")
    let months = document.querySelectorAll(".month");
    let years = document.querySelectorAll(".year");
    inputSwitch.addEventListener("change", (e) => {
        console.log("cambio el input");
        months.forEach(x => x.classList.toggle('d-none'));
        years.forEach(x => x.classList.toggle('d-none'));
        labelMonth.classList.toggle('checked');
    });
}

window.onload = function() {
    setModalidad();
};