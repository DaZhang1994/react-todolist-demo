const makeActionCreator = (type: string, ...argNames: string[]) => {
  return (...args: any[]) => {
    const action: any = { type };
    argNames.forEach((arg: string, index: number) => {
      action[argNames[index]] = args[index];
    });
    return action;
  }
}

export default makeActionCreator;
