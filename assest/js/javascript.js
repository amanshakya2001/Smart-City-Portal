function initMap() {
    // The location of Uluru
    const Ambulance1 = { lat: 27.1751, lng:78.0421 };
    const Ambulance2 = { lat: 27.2064, lng:78.0471 };
    const Hospital2 = { lat: 27.188210009178217, lng:78.00144289095326 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: Ambulance1,
    });
    const image = {
      url: "https://www.a2ztaxcorp.com/wp-content/uploads/2018/05/Ambulance-Services.png",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
    };
    const hospitalImage = {
      url: "../assest/images/hospital.png",
      scaledSize: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
    };
    // The marker, positioned at Uluru
    const marker1 = new google.maps.Marker({
      position: Ambulance1,
      map: map,
      icon:image,
    });
    const marker2 = new google.maps.Marker({
      position: Ambulance2,
      map: map,
      icon:image,
    });
    const marker3 = new google.maps.Marker({
      position: Hospital2,
      map: map,
      icon:hospitalImage,
    });
  }
  
  window.initMap = initMap;