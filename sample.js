
var grid = new ej.grids.Grid({
    dataSource: data,
    enableAdaptiveUI: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    load: () => {
      grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
  },
    columns: [
      {field: 'OrderID',headerText: 'Order ID',width: 120,isPrimaryKey: true},
      {field: 'ShipCity',headerText: 'Ship City',width: 130},
      { field: 'OrderDate', headerText: 'Order Date', type: 'date', format: 'yMd', editType: 'datetimepickeredit', width: 150 },
      {field: 'ShipCountry', headerText: 'Ship Country', editType: 'dropdownedit', width: 150 },
    ],
  });

grid.appendTo('#adaptivebrowser');

