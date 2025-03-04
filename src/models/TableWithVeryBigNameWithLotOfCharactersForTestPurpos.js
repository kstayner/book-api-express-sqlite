export default (sequelize, DataTypes) => {
  const TableWithVeryBigNameWithLotOfCharactersForTestPurpos = sequelize.define('TableWithVeryBigNameWithLotOfCharactersForTestPurpos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'table_with_very_big_name_with_lot_of_characters_for_test_purpos',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });

  return TableWithVeryBigNameWithLotOfCharactersForTestPurpos;
};