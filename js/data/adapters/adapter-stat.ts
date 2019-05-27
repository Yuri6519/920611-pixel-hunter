import {CURRENT_STAT, STAT_NEXT} from '../../common/constants/index';


const adaptStat = (data) => {
  const res = {};

  if (!data || !(data instanceof Array) || !data.length) {
    throw new Error(`adapter: получен пустой массив статистики`);
  }

  data.sort((a, b) => b.date - a.date);

  for (let i = 0; i < data.length; i++) {
    const key = i === 0 ? CURRENT_STAT : `${STAT_NEXT}${i}`;
    res[key] = data[i].stat;
  }

  return res;
};

export default adaptStat;
