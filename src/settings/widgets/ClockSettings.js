import React, { Component } from "react";
import {
  Row,
  Col,
  Form
} from "react-bootstrap";

class ClockSettings extends Component {
  render() {
    let { setStore, s } = this.props;
    return (
      <div>
        <Row className="show-grid">
          <Col md={12}>
            <Form.Group
              onChange={(e) => {
                setStore("clock_border", e.target.value);
              }}
            >
              <Form.Label>Border Style</Form.Label>
              <Form.Control defaultValue={s.clock_border} as="select">
                <option value="none">None</option>
                <option value="solid">Solid</option>
                <option value="rounded">Rounded</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group
              onChange={(e) => {
                setStore("clock_seperator", e.target.value);
              }}
            >
              <Form.Label>Seperator</Form.Label>
              <Form.Control defaultValue={s.clock_seperator} as="select">
              <option value="none">None</option>
                <option value="colon">Colon</option>
                <option value="newline">New Line</option>
                <option value="space">Space</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group
              onChange={(e) => {
                setStore("clock_format", e.target.value);
              }}
            >
              <Form.Label>Format</Form.Label>
              <Form.Control defaultValue={s.clock_format} as="select">
                <option value="24H">24 Hours</option>
                <option value="12H">12 Hours</option>
                <option value="12HAP">12 Hours with AM/PM</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ClockSettings;
