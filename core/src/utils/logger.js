const winston = require('winston');

exports.logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.timestamp(),
      ),
    }),
  ],
});
