module.exports = (tryCatchpromise) => (req, res, next) => {
  Promise.resolve(tryCatchpromise(req, res, next)).catch(next);
};
