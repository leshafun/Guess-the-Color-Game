const text = document.querySelector('.text');
const result = document.querySelector('.result');
const colors = document.querySelectorAll('.color');
const newColorBtn = document.querySelector('.new-color');
const modeBtn = document.querySelectorAll('.mode');



// Генерирует случайный цвет
function randomColorNumbers() {

	return Math.floor(Math.random() * 256)

}

// Отфильтровывет кубики без цвета и возвращает случайный номер цвета кубика
function textColor() {

	const newColors = Array.from(colors).filter(color => color.style.backgroundColor !== '');

	const indexColor = Math.floor(Math.random() * newColors.length)
	const color = newColors[indexColor]

	return color.style.backgroundColor

}

// Вставляет случайные цвета в не скрытого кубика и выводит на экран цвет случайного кубика
function newColor() {

	colors.forEach(color => {

		if (!color.classList.contains('hidden')) {

			color.style.backgroundColor = `rgb(${randomColorNumbers()},${randomColorNumbers()},${randomColorNumbers()})`

		}

		text.textContent = `${textColor()}`

	})

}

// Удаляет класс который скрывает кубики и их цвет
function removeMode() {

	colors.forEach(color => {

		color.classList.remove('hidden')
		color.style.backgroundColor = '';

	})

}

// Скрывает или добавляет кубики взависимости от нажатой кнопки
function complexityMode(e) {

	result.textContent = ''

	removeMode()

	if (e.target.textContent === 'Easy') {

		Array.from(colors).slice(-6).forEach(color => {

			color.classList.add('hidden')

		})

		newColor()

	} else if (e.target.textContent === 'Medium') {

		Array.from(colors).slice(-3).forEach(color => {

			color.classList.add('hidden')

		})

		newColor()

	} else {

		newColor()

	}

}

// Возвращает результат игры в Проиграл или Выйграл
function handleResultColor(e) {

	if (e.target.style.backgroundColor === text.textContent ) {

		return result.textContent = 'YOU WIN! GO NEXT!'

	} else {

		return result.textContent = 'YOU LOSE! GO NEXT!'

	}

}


newColorBtn.addEventListener('click', newColor);

modeBtn.forEach(btn => btn.addEventListener('click', complexityMode))

colors.forEach(color => color.addEventListener('click', handleResultColor))