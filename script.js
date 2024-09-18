function volume_sphere(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    let radius = document.querySelector("#radius");
    let volume = document.querySelector("#volume");
    let x = radius.value;

    if(x < 0){
        volume.value = `Not a valid Radius`;
        return;
    }

    let pi = 3.14159;
    let z = ((4/3) * pi * x * x * x);
    volume.value = z.toFixed(4);
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}