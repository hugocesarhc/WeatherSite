window.addEventListener('load',()=>{
  let long;
  let lat;
  
  if(navigator.geolocation){
    navidator.geolocation.getCurrentPosition (position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      const api = 'https://api.darksky.net/forecast/670c55337c3e9a86811c47ce858fc24d/${lat},${long}';
    });
    
    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
        console.log(data);
        const { temperature, sumary} = data.currently;
        temperatureDefree.textContent = temperature;
        temperatureDescription.textContent = sumary;
        locationTimezone.textContent = data.timezone;
        });
    
  }
  else{
    h1.textContext = "o serviço não poderá funcionar sem conseguir acessar a localiação da sua cidade"
  }
});
