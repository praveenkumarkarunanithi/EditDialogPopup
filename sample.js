
var grid = new ej.grids.Grid({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    columns: [
      {field: 'OrderID',headerText: 'Order ID',width: 120,isPrimaryKey: true},
      {field: 'ShipCity',headerText: 'Ship City',width: 130},
      { field: 'OrderDate', headerText: 'Order Date', type: 'date', format: 'yMd', editType: 'datetimepickeredit', width: 150 },
      {field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 },
    ],
  });

grid.appendTo('#Grid');

