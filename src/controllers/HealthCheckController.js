const HealthCheckController = module.exports;

HealthCheckController.get = (req, res) => {

  return res.status(200).send({ message: 'The micro service is up'});
};
