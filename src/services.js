
const services = {}

services.registry = {}

services.registerServices = (servicesToRegister) => {
  for (var serviceName in servicesToRegister) {
    const service = servicesToRegister[serviceName]
    services.registry[serviceName] = service
  }
}

services.use = (serviceName) => {
  return services.registry[serviceName]
}

export default services
