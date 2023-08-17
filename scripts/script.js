const square = document.querySelector('.square-body');
const reset = document.querySelector('.btn-reset');
let blocks = document.querySelectorAll('.block');
const startPosition = square.innerHTML

square.addEventListener('click', (e) => {
    
    if (e.target.closest('.arrow')) {
        const targetBlock = e.target.closest('.block');
        const targetArrow = e.target.closest('.arrow');
        let i = 0;

        for (i; i < blocks.length; i++) {
            if (blocks[i] === targetBlock) {
                const targetBlockIndex = i
                let replacementBlockIndex

                if (targetArrow.classList.contains('left')) {
                    replacementBlockIndex = targetBlockIndex - 1
                } else if (targetArrow.classList.contains('right')) {
                    replacementBlockIndex = targetBlockIndex + 2
                } else if (targetArrow.classList.contains('top')) {
                    replacementBlockIndex = targetBlockIndex - 5
                } else if (targetArrow.classList.contains('bottom')) {
                    replacementBlockIndex = targetBlockIndex + 6
                }

                

                if (replacementBlockIndex >= 0 && replacementBlockIndex < blocks.length) {
                    blocks[replacementBlockIndex].before(blocks[targetBlockIndex])
                    blocks = document.querySelectorAll('.block')
                }else if (replacementBlockIndex === blocks.length) {
                    replacementBlockIndex--
                    blocks[replacementBlockIndex].after(blocks[targetBlockIndex])
                    blocks = document.querySelectorAll('.block')
                }

                break    
            }
        }
    } 
})

reset.addEventListener('click', (e) => {
    square.innerHTML = startPosition
})