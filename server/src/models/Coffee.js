module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    type: DataTypes.STRING,   // ร้อน / เย็น / ปั่น
    status: DataTypes.STRING  // มีจำหน่าย / หมด
  })
  return Coffee
}
