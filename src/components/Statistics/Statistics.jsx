import css from 'components/Statistics/Statistics.module.css';
import { Stats } from 'components/Stats/Stats';

export const Statistics = ({title, stats }) => {
    // console.log(events);
    return (
        <div className={css.box}>
            <h2 className={css.tile}>{title}</h2>
            <ul className={css.list}>
            {stats.map(({ id, label, percentage }) => (
                <Stats
                    id={id}
                    label={label}
                    percentage={percentage}
                />
            ))
                }
                </ul>
            </div>
    );
};