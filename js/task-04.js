  const counterValue = document.querySelector('#value');
    const minusButton = document.querySelector('[data-action="decrement"]');
    const plusButton = document.querySelector('[data-action="increment"]');
    
    let count = 0;

    minusButton.addEventListener('click', () => {
      count -= 1;
      counterValue.textContent = count;
    });

    plusButton.addEventListener('click', () => {
      count += 1;
      counterValue.textContent = count;
    });

