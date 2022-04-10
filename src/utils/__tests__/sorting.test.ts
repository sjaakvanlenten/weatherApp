import { sortByCityName, sortChronological } from "../sorting";
import {
    sample_grouped_Data,
    sample_sorted_groupData,
    sample_temperature_data,
    sample_sorted_temperature_data
} from "../sampleData";

test("Sorts the weatherData by city name", () => {
    expect(sortByCityName(sample_grouped_Data)).toStrictEqual(sample_sorted_groupData);
});

test("sorts individual temperature data chronological", () => {
    expect(sortChronological(sample_temperature_data)).toStrictEqual(
        sample_sorted_temperature_data
    );
});
