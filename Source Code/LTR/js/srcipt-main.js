$("#changeMode").click(function() {
  $.ajax({
  url: '/Home/ChangeMode',
  method: 'get'
  })
  .done(function (response) {
  
  if (response == "true") {
  applyDarkMode();
  $(".darkmode-bt").addClass("dark");
  }
  else {
  clearDarkMode();
  $(".darkmode-bt").removeClass("dark");
  }
  })
  .fail(function () {
  //Swal.fire(RESOURCE_ERRORHEADING, RESOURCE_GENERICERRORMESSAGE, "error");
  });
  
  });
  $("#changeMode").click(function() {
    $.ajax({
        url: '/Home/ChangeMode',
        method: 'get'
    })
        .done(function (response) {
            debugger
            if (response == "true") {
                applyDarkMode();
            }
            else {
                clearDarkMode();
            }
    })
    .fail(function () {
        //Swal.fire(RESOURCE_ERRORHEADING, RESOURCE_GENERICERRORMESSAGE, "error");
    });

});



$("#switch").click(function() { 
  
    if (  ($('.function').css('background-color'))  == 'rgb(255, 255, 255)'){
      $('.function').css('background-color','#000');
      $('.main-text').css('color','#fff');
      $('.custom').css('color','#fff');
      $('.color-2').css('color','#fff');
      $('.email-color').css('color','#fff');
      $('.job').css('color','#fff');
      $('.eduheading').css('color','#fff');
      $('.danat').css('color','#fff');
      $('.portheading').css('color','#fff');
      $('.social-us').css('color','#fff');
      $('.social-icons').css('background-color','#000');
      $('.span1').css('color','#fff');
      $('.back-to-top').css('background','#000');
      $('.theme-button').css('background','#000');
      $('.theme-button').css('color','#fff');



    }
    else if ($('.function').css('background-color')== 'rgb(0, 0, 0)'){
      $('.function').css('background-color','#fff');
      $('.main-text').css('color','#000');
      $('.custom').css('color','#000');
      $('.color-2').css('color','#000');
      $('.email-color').css('color','#000');
      $('.span1').css('color','#000');
      $('.eduheading').css('color','#000');
      $('.danat').css('color','#000');
      $('.portheading').css('color','#000');
      $('.social-us').css('color','#000');
      $('.social-icons').css('background-color','#fff');
      $('.back-to-top').css('background','#fff');
      $('.theme-button').css('background','#fff');
      $('.theme-button').css('color','#000');





    }
    
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    //   dots[slideIndex-1].className += " active";
    //   captionText.innerHTML = dots[slideIndex-1].alt;
}


/*-------------------
    Back To Top Start
---------------------*/

//-- Show Or Hide The Sticky Footer Button --//

$(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
        $('.back-to-top').fadeIn(200)
    } else {
        $('.back-to-top').fadeOut(200)
    }
});


/*-------------------
    Back To Top End
---------------------*/

var style_cookie_name = 'style';
var style_cookie_duration = 30;
var style_domain = '...';

function switch_style(css_title) {
  var i, link_tag;
  for (
    i = 0, link_tag = document.getElementsByTagName('link');
    i < link_tag.length;
    i++
  ) {
    if (
      link_tag[i].rel.indexOf('stylesheet') != -1 &&
      link_tag[i].title
    ) {
      link_tag[i].disabled = true;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false;
      }
    }
    set_cookie(
      style_cookie_name,
      css_title,
      style_cookie_duration,
      style_domain
    );
  }
}
function set_style_from_cookie() {
  var css_title = get_cookie(style_cookie_name);
  if (css_title.length) {
    switch_style(css_title);
  }
}
function set_cookie(
  cookie_name,
  cookie_value,
  lifespan_in_days,
  valid_domain
) {
  var domain_string = valid_domain ? '; domain=' + valid_domain : '';
  document.cookie =
    cookie_name +
    '=' +
    encodeURIComponent(cookie_value) +
    '; max-age=' +
    60 * 60 * 24 * lifespan_in_days +
    '; path=/' +
    domain_string;
}
function get_cookie(cookie_name) {
  var cookie_string = document.cookie;
  if (cookie_string.length != 0) {
    var cookie_array = cookie_string.split('; ');
    for (i = 0; i < cookie_array.length; i++) {
      cookie_value = cookie_array[i].match(cookie_name + '=(.*)');
      if (cookie_value != null) {
        return decodeURIComponent(cookie_value[1]);
      }
    }
  }
  return '';
}

