// Write your code here

import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteItem} = props
  const {title, id} = itemDetails
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item-container">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
