import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const getRemainingDates = (date: number, total = 0): number => {
  if (date >= 32) {
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
      </div>
    </>
  );
}

export default App;
