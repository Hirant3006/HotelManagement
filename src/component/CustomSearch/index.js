import React, { PureComponent } from 'react';
import { Input, Icon, AutoComplete } from 'antd';

import './index.less';

type Props = {
  onSearch: Function,
  onPressEnter: Function,
}

class Search extends PureComponent<Props> {
  constructor(props) {
    super(props)
    this.state = {
      searchMode: false,
    }
  }
  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      if (this.state.searchMode) {
        this.input.focus();
      }
    });
  }

  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: '',
    });
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.timeout = setTimeout(() => {
        this.props.onPressEnter(this.state.value);
      }, 0);
    }
  };

  onChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { searchMode, value } = this.state;
    const { placeholder } = this.props;
    return (
      <span className="headerSearch action search" onClick={this.enterSearchMode}>
        <Icon type="search" key="Icon" />
        <AutoComplete
          key="AutoComplete"
          // {...restProps}
          className={searchMode ? "input show" : "input"}
          value={value}
          onChange={this.onChange}
        >
          <Input
            placeholder={placeholder}
            ref={node => {
              this.input = node;
            }}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
      </span>
    )
  }
}

export default Search;
