import React, { Component } from 'react'
import './App.css';
import MaterialTable from "material-table";

import { MOCK_DATA, 
        VALUE_TABLE, 
        AGE_OPTIONS, 
        PRODUCT_CATEGORY_OPTIONS, 
        RENTAL_OPTIONS, 
        ZIPCODE, 
        RENT_TENURE, 
        FIELD_TYPE } from './util/constants.js'


import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import InputField from './components/InputField'

export class App extends Component {

  constructor(props){
    super(props);
    const initialState = {
      selectedRent: null,
      selectedAge: null,
      selectedZip: null,
      selectedTenure: null,
      selectedCategory: null,
      edit: null,
      open: false
    };
    this.state = initialState
  }
  
  handleDialogOpen = () => {
    this.setState({open: true});
  };

  handleDialogClose = () => {
    this.setState({open: false});
  };

  handleChangeRent = (event) => {
    this.setState({ selectedRent: event.target.value });
  };

  handleChangeZip = (event) => {
    this.setState({ selectedZip: event.target.value });
  };

  handleChangeAge = (event) => {
    this.setState({ selectedAge: event.target.value });
  };

  handleChangeCategory = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  handleChangeTenure = (event) => {
    this.setState({ selectedTenure: event.target.value });
  };

  handleDialogSubmit = () => {
    if(this.state.selectedRent === null && this.state.selectedAge &&
       this.state.selectedCategory === null && this.state.selectedZip &&
       this.state.selectedTenure === null){
         alert("Atleast one rule needs to be selected to Save")
       }
    else{
      const body = {
        rentalAmount: this.state.selectedRent === null ? null : this.state.selectedRent,
        age: this.state.selectedAge === null ? null : this.state.selectedAge,
        zip: this.state.selectedZip === null ? null : this.state.selectedZip,
        category: this.state.selectedCategory === null ? null : this.state.selectedCategory,
        tenure: this.state.selectedTenure === null ? null : this.state.selectedTenure
      }
      //POST Call to be made to add the new rule
      alert(JSON.stringify(body));
    }
    this.setState({open: false});
    // this.setState(this.initialState);
  };

  getSelectedValue(array, searchTerm, type){
    let result;
    if(type===1){
      result = array.filter(data => data.value === searchTerm)
    } else{
      result = array.filter(data => parseInt(data.value[0])=== parseInt(searchTerm))
    }
    return result[0].value
  }

  handleEdit = (data) =>{
    let editState = {
      selectedRent: data.rent_lower === null ? null : this.getSelectedValue(RENTAL_OPTIONS, data.rent_lower, FIELD_TYPE.ARRAY),
      selectedAge: data.age_lower === null ? null : this.getSelectedValue(AGE_OPTIONS, data.age_lower, FIELD_TYPE.ARRAY),
      selectedZip: data.zipcode === null ? null : this.getSelectedValue(ZIPCODE, data.zipcode, FIELD_TYPE.NUMBER),
      selectedCategory: data.product_category === null ? null : this.getSelectedValue(PRODUCT_CATEGORY_OPTIONS, data.product_category, FIELD_TYPE.NUMBER),
      selectedTenure: data.tenure_lower === null ? null : this.getSelectedValue(RENT_TENURE, data.tenure_lower, FIELD_TYPE.ARRAY),
      open: true,
      edit:true
    }
    this.setState(editState);
  }

  handleDelete = () =>{
    //make a DELETE api call to delete the rules based on RULE ID and RULE NAME
  }

  render() {
    return (
      <div>
        <div className = "table">
          <div className="button">
            <Button color="primary" 
                    variant="contained"
                    onClick ={this.handleDialogOpen}
                    startIcon = {<AddIcon/>}> 
              Add New Rule
            </Button>
          </div>
          <MaterialTable actions={[
              {
                icon: 'add',
                isFreeAction: true,
                tooltip: "Add a new Rule",
                onClick: () => this.handleDialogOpen()
              },
              {
                icon: 'delete',
                tooltip: "Delete Rule",
                onClick: (event, data) => this.deleteRule(data)
              },
              {
                icon: 'edit',
                tooltip: "Edit Rule",
                onClick: (event, data) => { this.setState({ edit: data }, () => {
                                              this.handleEdit(this.state.edit)
                                            });
                },
              }
            ]}
            options={{
              search: false,
              pageSizeOptions: [10],
              pageSize: 10,
              tableLayout: "auto"
            }}
            columns={VALUE_TABLE}
            data={MOCK_DATA}
            title="Rules Creator"
          />
        </div>
        <div className="modal">
          <Dialog open={this.state.open} className="dialog">
            <DialogTitle>{this.state.edit ? "Update Rule" : "Add a New Rule"}</DialogTitle>
            <DialogContent>
              <InputField label="Monthly Rent" 
                          options={RENTAL_OPTIONS}
                          value={this.state.selectedRent}
                          onChange={this.handleChangeRent}/>
              <InputField label="Age " 
                          options={AGE_OPTIONS}
                          value={this.state.selectedAge}
                          onChange={this.handleChangeAge}/>
              <InputField label="Zipcode" 
                          options={ZIPCODE}
                          value={this.state.selectedZip}
                          onChange={this.handleChangeZip}/>
              <InputField label="Product Category" 
                          options={PRODUCT_CATEGORY_OPTIONS}
                          value={this.state.selectedCategory}
                          onChange={this.handleChangeCategory}/>
              <InputField label="Rental Tenure" 
                          options={RENT_TENURE}
                          value={this.state.selectedTenure}
                          onChange={this.handleChangeTenure}/>
            </DialogContent>

            <DialogActions>
              <Button onClick={this.handleDialogClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={this.handleDialogSubmit} color="primary">
                {this.state.edit ? "Update" : "Submit"}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    )
  }

}

export default App