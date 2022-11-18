import { connect } from "react-redux";

function Other({ amount }) {
  return <div>{amount}</div>;
}

function mapStateToProps(state) {
  return {
    amount: state.reducer.amount,
  }
}

export default connect(mapStateToProps)(Other);