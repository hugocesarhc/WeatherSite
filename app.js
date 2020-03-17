window.addEventListener('load',()=>{
  let long;
  let lat;
  
  if(navigator.geolocation){
    navidator.geolocation.getCurrentPosition (position =>{
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      const api = 'curl -i http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=your-app-token';
    })
  }else{
    h1.textContext = "o serviço não poderá funcionar sem conseguir acessar a localiação da sua cidade"
  }
});
