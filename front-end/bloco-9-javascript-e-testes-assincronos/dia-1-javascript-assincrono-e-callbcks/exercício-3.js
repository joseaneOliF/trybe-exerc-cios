const getPlanet = () => {
    const mars = {
      name: 'Mars',
      distanceFromSun: {
        value: 227900000,
        measurementUnit: 'kilometers',
      },
    };
    setTimeout(() => console.log('Planeta retornado: ', mars), 4000);
    //console.log('Returned planet: ', mars);
  };
  
  getPlanet(); // Imprime Marte depois de 4 segundos