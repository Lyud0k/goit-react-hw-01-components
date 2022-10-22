import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ transaction }) => {
  return (
    <table className={css.transaction}>
      <thead>
        <tr className={css.head}>
          <th className={css.headList}>Type</th>
          <th className={css.headList}>Amount</th>
          <th className={css.headList}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableList}>
        {transaction.map(({ id, type, amount, currency }) => (
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
          //     <HistoryTable
          //   id={id}
          // type={type}
          // amount={amount}
          // currency={currency}
          //     />
        ))}
      </tbody>
    </table>
  );
};

// const HistoryTable = ({ id, type, amount, currency }) => {
//     return (
//     <tr>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//     )
// }

TransactionHistory.protoType = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
