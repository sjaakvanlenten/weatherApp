import { convertToCelcius, groupDataByCity } from "../transformData";
import { sample_API_Data, sample_grouped_Data } from "../sampleData";

test("Groups temperature API data by city", () => {
    expect(groupDataByCity(sample_API_Data)).toStrictEqual(sample_grouped_Data);
});

test("Given a temperature in Celcius, returns the temperature rounded down in C", () => {
    expect(convertToCelcius(24.1, "C")).toBe(24);
});

test("Given a temperature in Fahrenheit, returns the temperature rounded down in C", () => {
    expect(convertToCelcius(80.77, "F")).toBe(27);
});

test("Given a temperature in Kelvin, returns the temperature rounded down in C", () => {
    expect(convertToCelcius(294.63, "K")).toBe(21);
});

test("Given a temperature in Kelvin, returns the temperature rounded down in C", () => {
    expect(convertToCelcius(200, "K")).toBe(-74);
});
