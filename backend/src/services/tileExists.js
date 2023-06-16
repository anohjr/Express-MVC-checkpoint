const tileExists = (req, res, next) => {
  if (
    req.body.coord_x < 0 ||
    req.body.coord_y < 0 ||
    req.body.coord_x > 11 ||
    req.body.coord_y > 5
  ) {
    res.status(422);
  } else {
    res.status(422);
    next();
  }
};
module.exports = tileExists;
