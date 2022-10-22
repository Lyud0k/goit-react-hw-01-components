import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  // console.log(events);
  return (
    <div className={css.box}>
      {title ? <h2 className={css.title}>{title}</h2> : false}
      {/* <h2 className={css.tile}>{title}</h2> */}
      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>

          //   <Stats id={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </div>
  );
};

Statistics.protoType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
