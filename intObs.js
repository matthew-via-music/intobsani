const imageboxes = document.querySelectorAll(".imagebox")
const imgs = document.querySelectorAll(".ioimg")
const txtboxes = document.querySelectorAll(".txtbox")
const txts = document.querySelectorAll(".iotxt")

const animClasses = [
  "fadeInLeft",
  "fadeInRight",
  "fadeInBtm",
  "fadeInTop"
]

// images
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    const currentIndex = Array.from(imageboxes).indexOf(entry.target)
    if (entry.isIntersecting) {
      imgs[currentIndex].classList.add(animClasses[currentIndex])
    } else {
      if (entry.boundingClientRect.y > 0) {
        imgs[currentIndex].classList.remove(animClasses[currentIndex])
      }
    }
  })
}, {
  // root: container,
  threshold: 0.1,
})

imageboxes.forEach(imagebox => {
  imgObserver.observe(imagebox)
})

// text
const txtObserver = new IntersectionObserver((entries, txtObserver) => {
  entries.forEach(entry => {
    const currentIndex = Array.from(txtboxes).indexOf(entry.target)
    if (entry.isIntersecting) {
      txts[currentIndex].classList.add(animClasses[currentIndex])
    } else {
      if (entry.boundingClientRect.y > 0) {
        txts[currentIndex].classList.remove(animClasses[currentIndex])
      }
    }
  })
}, {
  // root: container,
  threshold: 0.1,
})

txtboxes.forEach(txtbox => {
  txtObserver.observe(txtbox)
})
