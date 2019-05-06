'use strict';

const store = (function(){
  const foo = 'bar';
  const items = [];
  let hideCheckedItems = false;
  let searchTerm = '';
  // items: [
  //   { id: cuid(), name: 'apples', checked: false },
  //   { id: cuid(), name: 'oranges', checked: false },
  //   { id: cuid(), name: 'milk', checked: true },
  //   { id: cuid(), name: 'bread', checked: false }
  // ],


  return {
    items,
    hideCheckedItems,
    searchTerm
  };
}());
