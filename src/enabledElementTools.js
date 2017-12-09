const elementToolOptions = {};

function getToolOptions (toolType, element) {
  if (!elementToolOptions[toolType]) {
    throw new Error('getToolOptions: No tool data for this tool type');
  }

  const toolOptions = elementToolOptions[toolType];
  const optionsObject = toolOptions.find((toolOptionObject) => toolOptionObject.element === element);

  if (!optionsObject) {
    throw new Error('getToolOptions: No element found');
  }

  return optionsObject.options;
}

function setToolOptions (toolType, element, options) {
  if (!elementToolOptions[toolType]) {
    elementToolOptions[toolType] = [];
  }

  elementToolOptions[toolType].push({
    element,
    options
  });
}

export { getToolOptions, setToolOptions };
