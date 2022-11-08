//Открытие и закрытие форм авторизации-------------------------

const oldUser = document.getElementById('oldUser');
const newUser = document.getElementById('newUser');
const wrapOldUser = document.getElementById('wrapOldUser');
const wrapNewUser = document.getElementById('wrapNewUser');
const formOldUser = document.getElementById('formOldUser');
const formNewUser = document.getElementById('formNewUser');

oldUser.addEventListener('click', () => {
    wrapOldUser.style.transform = "translateY(0)"
  })
newUser.addEventListener('click', () => {
    wrapNewUser.style.transform = "translateY(0)"
  })
 
wrapOldUser.addEventListener( 'click', (e) => {
	const notElem = e.composedPath().includes(formOldUser);
	if ( ! notElem) {
		wrapOldUser.style.transform = "translateY(-100%)"
	}
})
wrapNewUser.addEventListener( 'click', (e) => {
	const notElem = e.composedPath().includes(formNewUser);
	if ( ! notElem) {
		wrapNewUser.style.transform = "translateY(-100%)"
	}
})

//----------------------------