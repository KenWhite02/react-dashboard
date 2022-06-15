import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';

import { Header } from '../components';

import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
  return (
    <div className="m-2 mb-16 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        allowKeyboard
        toolbar={['Delete']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
        width="auto"
      >
        <Inject services={[Page, Toolbar, Edit, Selection, Sort, Filter]} />
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Customers;
