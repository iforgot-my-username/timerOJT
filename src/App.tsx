import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const nowStart = new Date(new Date().setHours(8, 0, 0, 0));
const now = new Date();
const nowEnd = new Date(new Date().setHours(16, 0, 0, 0));
const remainingTime = nowEnd.getTime() - now.getTime();

// const Hour = Math.floor(remainingTime / (60 * 60 * 1000));
// const min = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
// const sec = Math.floor((remainingTime % (60 * 1000)) / 1000);

const daysNotIncluded = [
  '2024/04/25',
  '2024/04/01',
  '2024/03/29',
  '2024/03/28',
].map((e) => new Date(e).toDateString());

const getTotalWorkDays = (
  date: string | number,
  total: Array<string> = []
): Array<string> => {
  const startDate = new Date(date);
  const nextDate = startDate.getTime() + 24 * 60 * 60 * 1000;

  if (total.length * 8 >= 600) {
    return total;
  } else if (
    startDate.getDay() === 0 ||
    startDate.getDay() === 6 ||
    daysNotIncluded.includes(startDate.toDateString())
  ) {
    return getTotalWorkDays(nextDate, total);
  }

  return getTotalWorkDays(nextDate, [startDate.toDateString(), ...total]);
};

const totalWorkingDays = getTotalWorkDays('2024/02/05');
const totalWorkedDays = getTotalWorkDays('2024/02/05').filter((e) => {
  const now = new Date();

  return (
    new Date(e).getTime() <
    new Date(
      `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
    ).getTime()
  );
});

const daysLeft = totalWorkingDays.length - totalWorkedDays.length;

const getAccountedHours = () => {
  if (nowStart.getTime() >= now.getTime()) {
    return totalWorkedDays.length * 8;
  } else if (now.getTime() <= nowEnd.getTime()) {
    return (
      totalWorkedDays.length * 8 + Math.trunc(remainingTime / (60 * 60 * 1000))
    );
  }
  return totalWorkedDays.length * 8 + 8;
};

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
        {now.getTime() >= nowStart.getTime() && (
          <div>
            <FlipClockCountdown
              to={new Date().getTime() + remainingTime}
              renderMap={[false, true, true, true]}
            />
          </div>
        )}
        <div style={{ marginTop: '20%' }}>
          Prospected End Date: {totalWorkingDays[0]}
        </div>
        <div style={{ marginTop: '5px' }}>
          Total Accounted Hours: {getAccountedHours()}hrs
        </div>
        <div style={{ marginTop: '15%' }}>NO WORK DAYS:</div>
        <div style={{ marginTop: '5px' }}>
          {daysNotIncluded.map((e, i) => (
            <div key={i}>
              {daysNotIncluded.length - i}
              {'.) '}
              {e}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20%' }}>WORK DAYS:</div>
        <div style={{ marginTop: '5px' }}>
          {totalWorkedDays.map((e, i) => (
            <div key={i}>
              {totalWorkedDays.length - i}
              {'.) '}
              {e}
              {' - '}
              {(totalWorkedDays.length - i) * 8}
              {'hrs'}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
