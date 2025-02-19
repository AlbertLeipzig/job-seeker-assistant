import { useEffect, useState, useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { request } from "../utils/requests";
import { ITech } from "../utils/types";
import { Icons } from "../components/Icons";
import { handleError } from "../utils/handleError";
const selectTimeOptions = [1, 3, 6, 12];

export const JobStatisticsPage = () => {
  const [techs, setTechs] = useState<ITech[]>([]);
  const [requestFilter, setRequestFilter] = useState({
    sortBy: "popularity",
    filter: "all",
  });
  const { setError } = useContext(AppContext);

  /* 
  
  const buildQueryString = (
    params: Record<string, string | number | undefined>
  ) => {
    return Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`
      )
      .join("&");
  };

  useEffect(() => {
    if (!techs || techs.length < 1) {
      request
        .get(
          `techs?sortBy=${requestFilter.sortBy}&filter=${requestFilter.filter}`
        )
        .then((data) => setTechs(data))
        .catch((e) => setError(handleError(e)));
    }
  }, []);
  */

  useEffect(() => {
    if (!techs || techs.length < 1) {
      request
        .get(
          `techs?sortBy=${requestFilter.sortBy}&filter=${requestFilter.filter}`
        )
        .then((data) => setTechs(data))
        .catch((e) => setError(handleError(e)));
    }
  }, []);

  return (
    <div className="job-statistics-page">
      <h1>Job Statistics Page</h1>
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
