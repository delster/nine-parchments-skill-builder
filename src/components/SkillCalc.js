import React, { Component } from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

export default class SkillCalc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
      build: (props.build) ? props.build : '',
      characters: [
        'Cornelius',
        'Gislan',
        'Marvek',
        'Rudolfus',
        'Carabel',
        'Owl',
        'Nim',
        'Amadeus',
        'Selius'
      ],
      charactersContent: [
        'This is placeholder text for Cornelius',
        'This is placeholder text for Gislan',
        'This is placeholder text for Marvek',
        'This is placeholder text for Rudolfus',
        'This is placeholder text for Carabel',
        'This is placeholder text for Owl',
        'This is placeholder text for Nim',
        'This is placeholder text for Amadeus',
        'This is placeholder text for Selius'
      ]
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    return (
      <Container>
        <Nav tabs>
          {this.state.characters.map(
            (e,i) => (
              <NavItem key={i}>
                <NavLink
                  className={classnames({active: this.state.activeTab === i})}
                  onClick={() => { this.toggle(i); }}
                >
                  {e}
                </NavLink>
              </NavItem>
            )
          )}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {this.state.charactersContent.map(
            (e,i) => (
              <TabPane key={i} tabId={i}>
                <h2>{this.state.characters[i]}</h2>
                <Row>
                  <Col xs={4}>Placeholder for skill tree #1</Col>
                  <Col xs={4}>Placeholder for skill tree #2</Col>
                  <Col xs={4}>Placeholder for skill tree #3</Col>
                </Row>
              </TabPane>
            )
          )}
        </TabContent>
      </Container>
    );
  }
}
