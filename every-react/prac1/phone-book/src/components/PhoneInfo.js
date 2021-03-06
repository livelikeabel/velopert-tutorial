import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      phone: "010-0000-0000",
      id: 0
    }
  };

  state = {
    editing: false,
    name: "",
    phone: ""
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
    console.log(editing);
  };

  // input 에서 onChange 이벤트가 발생 될 때 호출되는 함수이다.
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀 있습니다. 수정을 눌렀을 땐, 기존의 값이 input에 나타나고(true), 수정을 적용할땐, input의 값들을 부모한테 전달해 준다.
    const { info, onUpdate } = this.props;
    if (!prevState.editing && this.state.editing) {
      //editing 값이 false => true 로 전환 될 때
      // info 의 값을 state에 넣어준다.
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    if (prevState.editing && !this.state.editing) {
      // editing 값이 true -> false로 전환 될 때
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
    if (
      !this.state.editing &&
      !nextState.editing &&
      nextProps.info === this.props.info
    ) {
      return false;
    }
    return true;
  }

  render() {
    console.log("render PhoneInfo" + this.props.info.id);
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    const { editing } = this.state;

    if (editing) {
      //수정모드
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="전화번호"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>apply</button>
          <button onClick={this.handleRemove}>remove</button>
        </div>
      );
    }

    const { name, phone, id } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>remove</button>
        <button onClick={this.handleToggleEdit}>update</button>
      </div>
    );
  }
}

export default PhoneInfo;
