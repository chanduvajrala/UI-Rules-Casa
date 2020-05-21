import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export class InputField extends Component {
    render() {
        return (
            <div className='inputField'>
                <InputLabel className="inputLabel">{this.props.label}</InputLabel>
                <br/>
                <Select variant="outlined" className="select" onChange = {this.props.onChange}
                        value = {this.props.value === null ? '': this.props.value}
                        defaultValue = {this.props.defaultValue}>
                
                {this.props.options.map(x => <MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>)}
                
                </Select>              
            </div>
        )
    }
}

export default InputField
