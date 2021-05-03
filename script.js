const liters = document.getElementById('liters')

const smallCups = document.querySelectorAll('.cup-small')

const percentage = document.getElementById('percentage')

const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }

  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full')
    }else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  
  const totalCups = smallCups.length

  if(fullCups === 0) {
    percentage.style.visibility = ''
    percentage.style.height = ''
    percentage.innerText = ''
  }else {
    percentage.style.visibility = 'visible'
    percentage.innerText = `${(fullCups / totalCups)*100}%` 
    percentage.style.height = `${(fullCups / totalCups)*330}px`

    if(fullCups === totalCups) {
      remained.style.visibility = ''
      remained.style.height = 0
    }
  }


}
    