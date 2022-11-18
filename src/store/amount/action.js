function deposit() {
  return {
    type: 'DEPOSIT',
    payload: 10
  };
};

const withdraw = () => {
  return {
    type: 'WITHDRAW',
    payload: -10
  };
};

export { deposit, withdraw };