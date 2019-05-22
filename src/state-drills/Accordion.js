import React from 'react';
import './Accordion.css';

class Accordian extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openSection: null
    }
  }

  renderSection(section, i) {
    let content = '';
    if (i === this.state.openSection) {
      content = <p>{section.content}</p>
    }
    return (
      <li key={i}>
        <button onClick={this.handleClick} id={i}>{section.title}</button>
        {content}
      </li>
    )
  }

  handleClick = (e) => {
    let newIndex = parseInt(e.target.id)
    if (this.state.openSection === newIndex) {
      this.setState({
        openSection : null
      })
    } else {
      this.setState({
        openSection : newIndex
      })
    }
  }

  render() {
    let listItems
    if (this.props.sections) {
      listItems = this.props.sections.map((section, i) => this.renderSection(section, i))
    }
    return (
      <ul className="Accordion">
        {listItems}
      </ul>
    )
  }
}

// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

// Accordian.defaultProps = ({sections});

export default Accordian;