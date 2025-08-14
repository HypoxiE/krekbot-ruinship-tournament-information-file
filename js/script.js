function copyText(pre) {
	const textarea = document.createElement('textarea');
	textarea.value = pre.textContent;
	const originalText = pre.textContent;
	document.body.appendChild(textarea);
	textarea.select();
	try {
		const success = document.execCommand('copy');
		if (success) {
			pre.classList.add('copied');
			pre.textContent = 'Скопировано!';

			setTimeout(() => {
			pre.classList.remove('copied');
			pre.textContent = originalText;
			}, 1500);
		}
	} catch (err) {
		alert('Ошибка копирования: ' + err);
	}
	document.body.removeChild(textarea);
}

document.querySelectorAll('.code-block').forEach(pre => {
	pre.addEventListener('click', () => {
		const originalText = pre.textContent;

		try {
			navigator.clipboard.writeText(originalText).then(() => {
				pre.classList.add('copied');
				pre.textContent = 'Скопировано!';

				setTimeout(() => {
				pre.classList.remove('copied');
				pre.textContent = originalText;
				}, 1500);
			}).catch(err => {
				alert('Ошибка копирования: ' + err);
			});
		} catch(err) {
			copyText(pre);
		}
	});
});