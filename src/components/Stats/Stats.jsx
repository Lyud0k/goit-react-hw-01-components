import css from 'components/Stats/Stats.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Stats = ({ id, label, percentage }) => {
  console.log(Stats);
  return (
    // <ul className={css.list}>
    <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>

    // </ul>
  );
};
