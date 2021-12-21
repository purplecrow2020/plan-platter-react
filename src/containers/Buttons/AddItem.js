import React, { Component } from 'react'

export default class AddItem extends Component {
    render() {
        return (
            <div className="container add-btn" style={{ maxWidth: '90px', height: 'auto' }}>
                <div >
                    <a href="#minus" className="d-flex text-start">
                        <i className="fas fa-minus" ></i>
                    </a>
                </div>
                <div className="px-2" >
                    <a href="#add">
                        ADD
                    </a>
                </div>
                <div >
                    <a href="#add" className="d-flex text-end">
                        <i className="fas fa-plus" ></i>
                    </a>
                </div>
            </div>
        )
    }
}
