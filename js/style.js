const getAdviceButton = document.getElementById('getAdviceButton');
const adviceContainer = document.getElementById('adviceContainer');

getAdviceButton.addEventListener('click', () => {
	const url = 'https://api.adviceslip.com/advice';

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const advice = data.slip.advice;
			adviceContainer.textContent = advice;
		})
		.catch(error => {
			console.error(error);
		});
});
