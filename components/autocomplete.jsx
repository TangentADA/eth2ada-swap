import React, { Component } from 'react';

export  default class Autocomplete extends Component {

  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };

  onChange = (e) => {
    console.log('onChanges');

    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (val) =>
       val.title.toLowerCase().includes(userInput.toLowerCase()) //|| val.text.toLowerCase().includes(userInput.toLowerCase())
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });

    window.location.href = `/dictionary?query=${e.currentTarget.innerText}`;
  };

handleSubmit = (event) => {
   
    event.preventDefault();
    const { userInput } = this.state;
    window.location.href = `/dictionary?query=${userInput}`;
  };



  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption].title
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      handleSubmit,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options max-w-2xl w-full rounded-2xl ">
            {filteredOptions.map((option, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={option.title} onClick={onClick}>
                  {option.title}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            {/* <em>No Option!</em> */}
          </div>
        );
      }
    }
    return (
      <React.Fragment>
         <form onSubmit={handleSubmit} className="relative mb-4">
              <input
               onChange={onChange}
               onKeyDown={onKeyDown}
               value={userInput}
            //    value={query}
            //     onChange={handleChange}
                type="text"
                // onChange={evt => setInputValue(evt.target.value)}
                className="w-full rounded-2xl border border-jacarta-100 py-4 px-4 pl-10 text-md text-jacarta-700 placeholder-jacarta-300 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                placeholder="Search Dictionary"
              />
              <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                </svg>
              </span>
            </form>
        {/* <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />
        </div> */}
        {optionList}
      </React.Fragment>
    );
  }
}
