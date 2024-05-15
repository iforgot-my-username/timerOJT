import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const getRemainingDates = (date: number, total = 0): number => {
  if (date >= 28) {
    return total;
  }

  const newDate = new Date(2024, 4, date);

  return getRemainingDates(
    date + 1,
    newDate.getDay() !== 0 && newDate.getDay() !== 6 ? total + 1 : total
  );
};

// const end = new Date('2024-04-31');
const now = new Date();
const nowEnd = new Date(new Date().setHours(16, 0, 0, 0));
const remainingTime = nowEnd.getTime() - now.getTime();

const daysLeft = getRemainingDates(now.getDate());

// const Hour = Math.floor(remainingTime / (60 * 60 * 1000));
// const min = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
// const sec = Math.floor((remainingTime % (60 * 1000)) / 1000);

const getWorkDays = (
  date: string | number,
  total: Array<string> = []
): Array<string> => {
  const startDate = new Date(date);
  const nextDate = startDate.getTime() + 24 * 60 * 60 * 1000;
  const now = new Date();

  if (
    startDate.getTime() ===
    new Date(
      `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
    ).getTime()
  ) {
    return total;
  } else if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return getWorkDays(nextDate, total);
  }

  return getWorkDays(nextDate, [startDate.toDateString(), ...total]);
};

const totalWorkingDays = getWorkDays('2024/02/05');

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '150px',
        }}
      >
        <h1>OJT TIME LEFT</h1>

        <div>
          <FlipClockCountdown
            to={new Date(2024, 4, now.getDate() + daysLeft)}
            renderMap={[true, false, false, false]}
          />
        </div>
        <div>
          <FlipClockCountdown
            to={new Date().getTime() + remainingTime}
            renderMap={[false, true, true, true]}
          />
        </div>

        <div style={{ marginTop: '20%' }}>
          {totalWorkingDays.map((e, i) => (
            <div>
              {totalWorkingDays.length - i}
              {'.) '}
              {e}
              {' - '}
              {(totalWorkingDays.length - i) * 8}
              {'hrs'}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
