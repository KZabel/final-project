/*$(document).ready(function(){
  $('#navbar-custom').hover(function(){
    $(this).animate({
      height: '+=3'}, 'fast');
    },
  function(){
    $(this).animate({
    height: '-=3'}, 'fast');
  }                           
  );
  
});*///Above code used for animating navbar <-- no longer in use


/*//"Read more" links for RECENT NEWS section
var newsStories = [];

function newsStory(image, title, excerpt) {
  newsStory.image = image;
  newsStory.title = title;
  newsStory.excerpt = excerpt;
}

function populateObject() {
  var newsStory1 = new newsStory("news-items.png", "A news story", '<div class="excerpt">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a maximus eros, sed venenatis nunc. Etiam pellentesque urna in venenatis venenatis. Praesent consequat turpis non egestas vestibulum."</div>');
  var newsStory2 = new newsStory("news-items.png", "Another news story", '<div class="excerpt">"Vivamus scelerisque est at auctor pretium. Donec a erat in arcu imperdiet interdum. Integer maximus urna nunc, id elementum leo sagittis convallis."</div>');
  var newsStory3 = new newsStory("news-items.png", "Yet another news story", '<div class="excerpt">"Donec venenatis ipsum a euismod cursus. Aliquam mauris orci, varius non accumsan vel, laoreet et velit. Praesent fermentum finibus orci. Cras eget arcu elementum, aliquet quam id, pharetra lectus. Donec lectus felis, porta sit amet nisl vel, gravida vehicula dui. Integer volutpat lacus lobortis, consequat metus vitae, hendrerit nisi. Proin sagittis, ex quis vulputate pharetra, urna magna hendrerit nisl, vel pulvinar ex neque sit amet neque. Integer imperdiet urna non odio ullamcorper, vel elementum mi convallis. Nulla rutrum, sem a egestas sollicitudin, massa dui aliquam mi, non consequat erat ipsum nec nisl."</div>');
  
  newsStories.push.apply(newsStories, [newsStory1, newsStory2, newsStory3]);
}

populateObject();*/

//I'm not sure why this won't work, but this was my first attempt at a "read more" link.
/*$(document).ready(function(){
  $('excerpt').each(function(evt){
    var maxLength = 3;
    if($(this).html().length > maxLength){
      var before = $(this).html().substr(0, maxLength);
      var after = $(this).html().substr(maxLength);
      $(this).html(before + '<a href="#" class="more">...Read more</a>' + '<span class="additional-text" style="display:none;">' + after + '</span>');
      $(this).find('a.more'.click(function(evt){
        evt.preventDefault();
        $(this).hide();
        $(this).parents('.excerpt').find('additional-text').show();
      }); 
    }
  }
});*/

/*-----------------------------------------------------Read more------------------------------------------------------*/

$(document).ready(function(){
  var maxLength = 160;
  var ellipses = "...";
  var readMore = "Read more";
  var readLess = "Read less";
  
  $('.excerpt').each(function(){
    var content = $(this).html();
    if(content.length > maxLength){
      var i = content.substr(0, maxLength);
      var j = content.substr(maxLength, content.length - maxLength);
      var html = i + '<span class="ellipses">' + ellipses + '&nbsp;</span><span class="additional-text"><span>' + j + '</span>&nbsp;&nbsp;<a href="#" class="link">' + readMore + '</a></span>';
      $(this).html(html);
    }
  });
  
  $('.link').click(function(){
    if($(this).hasClass("less")){
      $(this).removeClass("less");
      $(this).html(readMore);
    } else{
      $(this).addClass("less");
      $(this).html(readLess);
    }
    
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
    
  });
  
});

/*-----------------------------------------------------Google Map-----------------------------------------------------*/
    
function initMap(){
  var myLatLng = {lat: 47.035722, lng: -122.904830};
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {center: myLatLng, zoom: 16});
  var marker = new google.maps.Marker({
        position: {lat: 47.035722, lng: -122.904830}
    });

marker.setMap(map);

var infoWindow = new google.maps.InfoWindow({
        content: 'Gov Comms'
    });
marker.addListener( 'click', function() {
        infoWindow.open(map, marker);
    });
};


