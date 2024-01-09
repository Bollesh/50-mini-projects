let texts = document.querySelectorAll('label');

texts.forEach(text => {
    text.innerHTML = text.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay: ${50 * index}ms">${letter}</span>`)
    .join('');
});