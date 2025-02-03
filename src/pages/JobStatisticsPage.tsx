import { Icons } from "../components/Icons";
const selectTimeOptions = [1, 3, 6, 12];

export const JobStatisticsPage = () => {
  return (
    <div className="job-statistics-page">
      <h1>"Job Statistics Page"</h1>
      <section>
        <div>
          <Icons.calendar />
          <select>
            {selectTimeOptions.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Icons.sort />
          <select>
            <option value="time">Time</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </section>
      <section>
        <div>
          <Icons.calendar />
          <select>
            {selectTimeOptions.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Icons.sort />
          <select>
            <option value="time">Time</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </section>
    </div>
  );
};
