$(document).ready(function() {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const slider = $('.slider');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const left = $('.left-arrow-box');
    const right = $('.right-arrow-box');
    const itemsCount = item.length;
    const itemWidth = slider.width() / slidesToShow; 
    const movePosition = slidesToScroll * itemWidth;

    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        })
    });

    left.click(function() {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    right.click(function() {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
       
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        left.prop('disabled', position === 0);
        right.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
         );
    };

    checkBtns();
});