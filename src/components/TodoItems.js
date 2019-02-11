import React, { Component } from 'react'
import styled from 'styled-components'

import trashIcon from '../assets/trash-icon.svg'

const Container = styled.div`
  align-items: center;
  background-color: #ecf0f1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  height: 46px;
  margin-bottom: 10px;
  padding: 0 20px;
`

const CheckBox = styled.div`
  padding-left: 20px;
  position: relative;
`

const CheckInput = styled.input`
  border: 0;
  height: 0;
  width: 0;
`

const CheckMark = styled.span`
  background-color: ${props => (props.checked ? '#0984e3' : '#fff')};
  border-radius: 10px;
  border: 3px solid #0984e3;
  cursor: pointer;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
`

const Text = styled.span`
  color: ${props => (props.checked ? '#b2bec3' : '#636e72')};
  position: relative;
  text-decoration: ${props => (props.checked ? 'line-through' : '')};
  top: 1px;
`

const DeleteButton = styled.span`
  cursor: pointer;
  position: relative;
  top: 2px;
`

class TodoItems extends Component {
  state = {
    edit: true
  }

  render() {
    const { entries, deleteItem, markItem } = this.props
    return entries.map(item => (
      <Container key={item.id}>
        <CheckBox>
          <CheckInput
            type="checkbox"
            checked={item.done}
            onChange={() => {
              markItem(item.id)
            }}
          />
          <CheckMark
            checked={item.done}
            onClick={() => {
              markItem(item.id)
            }}
          />
          <Text checked={item.done}>{item.text}</Text>
        </CheckBox>
        <div>
          <DeleteButton
            onClick={() => {
              deleteItem(item.id)
            }}
          >
            <img src={trashIcon} alt="Delete task" />
          </DeleteButton>
        </div>
      </Container>
    ))
  }
}

export default TodoItems
