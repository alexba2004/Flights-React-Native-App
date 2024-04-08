const URL_API = "http://localhost:3300/";

export const getFlights = async () => {
  const properties = await fetch(URL_API);
  return await properties.json();
};
export const deleteFlight = async (seat) => {
  const res = await fetch(URL_API + "delete/" + seat, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
export const insertFlight = async (flight) => {
  const res = await fetch(URL_API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(flight),
  });
  return await res.json();
};

export const updateFlight = async (seat, flight) => {
  const res = await fetch(URL_API + seat, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(flight), // Aquí se envían los datos del flighto en el cuerpo de la solicitud
  });
  return await res.json();
};
