function handleCustomErrors(err, req, res, next) {
  if (err.status) {
    res.status(err.status).send(err.msg);
  } else {
    next(err);
  }
}

function handlePSQLErrors(err, req, res, next) {
  if (err.code === "22P02" || err.code === "42601") {
    res.status(400).send(err.msg);
  } else if (err.code === "23502") {
    res
      .status(400)
      .send(
        "One or more required property fields are missing or incorrect, make sure to have each property followed from the correct value"
      );
  } else {
    next(err);
  }
}

function handleInternalErrors(err, req, res, next) {
  res.status(500).send(err.msg);
}

module.exports = {
  handleCustomErrors,
  handlePSQLErrors,
  handleInternalErrors,
};
