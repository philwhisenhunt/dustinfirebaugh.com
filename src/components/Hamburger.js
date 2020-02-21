import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'

import './hamburger.css'

class MenuWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged =
      this.props.children.props.right !== nextProps.children.props.right

    if (sideChanged) {
      this.setState({ hidden: true })

      setTimeout(() => {
        this.show()
      }, this.props.wait)
    }
  }

  show() {
    this.setState({ hidden: false })
  }

  render() {
    let style

    if (this.state.hidden) {
      style = { display: 'none' }
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    )
  }
}
function Hamburger({ menuLinks }) {
  return (
    <MenuWrap wait={20} side={'right'}>
      <Menu noOverlay right isOpen={false}>
        {menuLinks.map((link, i) => {
          return (
            <Link
              to={link.to}
              style={{
                color: `white`,
                boxShadow: `none`,
                paddingLeft: 12,
                textDecoration: `none`,
              }}
            >
              {link.Text}
            </Link>
          )
        })}
      </Menu>
    </MenuWrap>
  )
}

export default Hamburger
