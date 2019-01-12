function hamburger(x) {
	 let sakrij = document.getElementById("sakrij");
  x.classList.toggle("change");
 if (sakrij.style.display === "block") {
    sakrij.style.display = "none";
    document.getElementById("header").style.backgroundColor = "#fff";
	} else {
    sakrij.style.display = "block";
    document.getElementById("header").style.backgroundColor = "#F8F8F8";
}
}
