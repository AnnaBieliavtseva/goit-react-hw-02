import css from './Options.module.css';

export default function Options({
  updateGood,
  updateNeutral,
  updateBad,
  showReset,
  onReset,
}) {
  return (
    <ul className={css.options_list}>
      <button className={css.btn} onClick={updateGood}>
        Good
      </button>
      <button className={css.btn} onClick={updateNeutral}>
        Neutral
      </button>
      <button className={css.btn} onClick={updateBad}>
        Bad
      </button>
      {showReset && (
        <button className={css.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </ul>
  );
}
