/* Letras que se mueven */
var typed = new Typed(".typing", {
    strings: ["Desarrollador Web."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
/* Modal */
const modalAdd = document.querySelector('#modalAdd');

const openModal = () => {
	modalAdd.style.display = 'flex';
}
const closeModal = () => {
	modalAdd.style.display = 'none';
}
modalAdd.onclick = (event) => {
	if(event.target == modalAdd){
		closeModal();
	}
}