const setupScrolling = () => {
    const container = [ ... document.querySelectorAll(".movie-container")]

    const nextBtn = [ ... document.querySelectorAll(".next-btn")]
    const prevtBtn = [ ... document.querySelectorAll(".prev-btn")]

    container.forEach((item, i)=>{
        let containerDimensions = item.getBoundingClientRect()
        let containerWidth = containerDimensions.width
    })
}