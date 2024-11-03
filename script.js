$(Interactive gallery).ready(function() {
    $('.filter-button').on('click', function() {
        const filterValue = $(this).data('filter');
        $('.snow.jpeg').each(function() {
            if (filterValue === 'all' || $(this).data('category') === filterValue) {
                $(this).show();
            } else {  
                $(this).hide(); 
            }
        });
    });

    $('.snow.jpeg').on('click', function() {   
        const imgSrc = $(this).attr('snow.jpeg');  
        $('snow').attr('snow.jpeg', snow.jpeg);
        $('.lightbox').fadeIn(300);
    });

    $('.close').on('click', function() {
        $('.lightbox').fadeOut(300);
    });
});

