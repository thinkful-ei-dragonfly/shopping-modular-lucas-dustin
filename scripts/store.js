/* global Item, cuid */
'use strict';

const store = (function(){
  const foo = 'bar';
  const items = [];
  let hideCheckedItems = false;
  let searchTerm = '';
  function findById(id){
    return store.items.find(obj => obj.id === id);
  }
  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push({id: cuid(), name, checked:false});
    }
    catch(e){
      console.log(`Unable to add item: ${e.message}`);
    }
  }
  function findAndToggleChecked(id){
    const item = this.findById(id);
    item.checked = !item.checked;
  }
  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      const item = this.findById(id);
      item.name = newName;
    }
    catch(e){
      console.log(`Cannot update name: ${e.message}`);
    }
  }
  function findAndDelete(id){
    this.items.splice(findById(id),1);
  }
  function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }
  function setSearchTerm(newTerm) {
    this.searchTerm = newTerm;
  }


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findAndToggleChecked,
    findById,
    addItem,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
}());
