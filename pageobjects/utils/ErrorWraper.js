class ErrorWrapper {
  elementError(error, element) {
    return new Error(`Something wrong with ${element.selector || element}.\n Error: ${error}`);
  }
}

export default new ErrorWrapper();
